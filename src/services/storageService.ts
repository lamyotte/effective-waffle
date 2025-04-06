import { Capacitor } from '@capacitor/core';
import { BehaviorSubject } from 'rxjs';
import { ISQLiteService } from '../services/sqliteService';
import { IDbVersionService } from '../services/dbVersionService';
import { SQLiteDBConnection } from '@capacitor-community/sqlite';
import { MealUpgradeStatements } from '../upgrades/meal.upgrage.statement';
import { User } from '../models/Meals';

const platform = Capacitor.getPlatform();

export interface IStorageService {
  initializeDatabase(): Promise<void>
  getDatabaseName(): string
  getDatabaseVersion(): number
};
class StorageService implements IStorageService {
  versionUpgrades = MealUpgradeStatements;
  loadToVersion = MealUpgradeStatements[MealUpgradeStatements.length - 1].toVersion;
  db!: SQLiteDBConnection;
  database: string = 'mealsdb';
  sqliteServ!: ISQLiteService;
  dbVerServ!: IDbVersionService;
  isInitCompleted = new BehaviorSubject(false);

  constructor(sqliteService: ISQLiteService, dbVersionService: IDbVersionService) {
    this.sqliteServ = sqliteService;
    this.dbVerServ = dbVersionService;
  }

  getDatabaseName(): string {
    return this.database;
  }
  getDatabaseVersion(): number {
    return this.loadToVersion;
  }
  async initializeDatabase(): Promise<void> {
    // create upgrade statements
    try {
      await this.sqliteServ.addUpgradeStatement({
        database: this.database,
        upgrade: this.versionUpgrades
      });
      this.db = await this.sqliteServ.openDatabase(this.database, this.loadToVersion, false);
      const isData = await this.db.query("select * from sqlite_sequence");
      if (isData.values!.length === 0) {
        // create database initial users if any

      }

      this.dbVerServ.setDbVersion(this.database, this.loadToVersion);
      if (platform === 'web') {
        await this.sqliteServ.saveToStore(this.database);
      }
      this.isInitCompleted.next(true);
    } catch (error: any) {
      const msg = error.message ? error.message : error;
      throw new Error(`storageService.initializeDatabase: ${msg}`);
    }
  }
  async getMeals(): Promise<Meal[]> {
    return (await this.db.query('SELECT * FROM meals;')).values as User[];
  }
  async addMeal(user: User): Promise<number> {
    const sql = `INSERT INTO meals (date, mealType, photo) VALUES (?, ?, ?);`;
    const res = await this.db.run(sql, [user.name]);
    if (res.changes !== undefined
      && res.changes.lastId !== undefined && res.changes.lastId > 0) {
      return res.changes.lastId;
    } else {
      throw new Error(`storageService.addMeal: lastId not returned`);
    }
  }
  async updateMealById(id: string, photo: string): Promise<void> {
    const sql = `UPDATE meals SET photo=${photo} WHERE id=${id}`;
    await this.db.run(sql);
  }
  async deleteMealById(id: string): Promise<void> {
    const sql = `DELETE FROM meals WHERE id=${id}`;
    await this.db.run(sql);
  }

}
export default StorageService;
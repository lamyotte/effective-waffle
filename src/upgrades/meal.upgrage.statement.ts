export const MealUpgradeStatements = [
  {
    toVersion: 1,
    statements: [
      `CREATE TABLE IF NOT EXISTS meals (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      date TEXT NOT NULL,
      mealType TEXT NOT NULL CHECK ('breakfast', 'lunch', 'dinner', 'snack_1', 'snack_2', 'snack_3'),
      photo TEXT NOT NULL,
      );`
    ]
  },
  /* add new statements below for next database version when required*/
  /*
  {
  toVersion: 2,
  statements: [
      `ALTER TABLE users ADD COLUMN email TEXT;`,
  ]
  },
  */
]
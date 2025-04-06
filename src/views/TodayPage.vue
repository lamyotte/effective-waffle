<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Today</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-grid :fixed="true" class="grid">
        <ion-row class="row">
          <ion-col><ion-button color="secondary">Breakfast</ion-button></ion-col>
          <ion-col><ion-button color="secondary">Snack 1</ion-button></ion-col>
        </ion-row>
        <ion-row class="row">
          <ion-col><ion-button color="secondary">Lunch</ion-button></ion-col>
          <ion-col><ion-button color="secondary">Snack 2</ion-button></ion-col>
        </ion-row>
        <ion-row class="row">
          <ion-col><ion-button color="secondary">Dinner</ion-button></ion-col>
          <ion-col><ion-button color="secondary">Snack 3</ion-button></ion-col>
        </ion-row>
      </ion-grid>


    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCol, IonGrid, IonRow } from '@ionic/vue';
import { defineComponent } from 'vue';
</script>

<style scoped>
.grid {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.grid>.row {
  flex: 1;
  padding: 0;
}

ion-col {
  display: flex;
  padding: 0px;
}

ion-button {
  height: auto;
  width: 100%;
}

.row {
  flex: 0.5 !important;
  background-color: #D3C4D1;
}
</style>
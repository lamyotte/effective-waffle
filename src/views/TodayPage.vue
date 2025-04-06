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

      <div class="photo-grid">
        <PhotoButton name="Breakfast" id="breakfast" />
        <PhotoButton name="Snack 1" id="snack1" />
        <PhotoButton name="Lunch" id="lunch" />
        <PhotoButton name="Snack 2" id="snack2" />
        <PhotoButton name="Dinner" id="dinner" />
        <PhotoButton name="Snack 3" id="snack3" />
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent
} from '@ionic/vue'

import PhotoButton from '@/components/PhotoButton.vue'
</script>

<style scoped>
.photo-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6px;
  padding: 6px;
  background-color: #D3C4D1;
  height: 100%;
  box-sizing: border-box;
}

.photo-grid>* {
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
</style>

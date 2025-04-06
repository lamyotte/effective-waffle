<template>
    <ion-button color="secondary" @click="() => takePhoto(id)" :class="{ active: !!photo }">
        <ion-img v-if="photo" :src="photo.webviewPath"></ion-img>
        <div v-else>{{ name }}</div>
    </ion-button>
</template>

<script setup lang="ts">
defineProps({
    name: String,
    id: String,
});
import { usePhotoGallery } from '@/composables/usePhotoGallery';


const { takePhoto, photo } = usePhotoGallery();
</script>

<style scoped>
ion-button {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

ion-button img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    display: block;
}

ion-button.active {
    background-color: #D3C4D1;
}
</style>
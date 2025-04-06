import { ref, onMounted, watch } from 'vue';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

export const usePhotoGallery = () => {
  const photo = ref<UserPhoto>();

  const takePhoto = async (id: string) => {
    const newPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    const fileName = id + '.jpeg'; // TODO: add date and save in DB
    const savedFileImage = {
      filepath: fileName,
      webviewPath: newPhoto.webPath,
    };

    photo.value = savedFileImage;
  };

  return {
    takePhoto,
    photo,
  };
};

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}

export function useImage() {
    const imageSrc = ref();
    const isChangedImage = ref(false);
    const fileImage = ref();

    function selectImage(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        imageSrc.value = URL.createObjectURL(file);
        reader.onloadend = () => (fileImage.value = reader.result);
        reader.readAsDataURL(file);
        isChangedImage.value = true;
    }

    return { selectImage, imageSrc, fileImage, isChangedImage }
}
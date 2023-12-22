
export function useImage() {
    const imageSrc = ref();
    const gifSrc = ref();
    const isChangedImage = ref(false);
    const isChangedGif = ref(false)
    const fileImage = ref();
    const fileGif = ref();

    function selectImage(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        imageSrc.value = URL.createObjectURL(file);
        reader.onloadend = () => (fileImage.value = reader.result);
        reader.readAsDataURL(file);
        isChangedImage.value = true;
    }

    function handleMedia(event, mediaType) {
        if (mediaType === 'gif') {
            const file = event.target.files[0];
            const reader = new FileReader();
            gifSrc.value = URL.createObjectURL(file);
            reader.onloadend = () => (fileGif.value = reader.result);
            reader.readAsDataURL(file);
            isChangedGif.value = true;
        } else {
            const file = event.target.files[0];
            const reader = new FileReader();
            imageSrc.value = URL.createObjectURL(file);
            reader.onloadend = () => (fileImage.value = reader.result);
            reader.readAsDataURL(file);
            isChangedImage.value = true;
        }
    }

    return { selectImage, imageSrc, fileImage, isChangedImage, handleMedia, fileGif, gifSrc, isChangedGif }
}
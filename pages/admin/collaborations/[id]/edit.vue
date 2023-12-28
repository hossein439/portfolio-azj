<script setup>

definePageMeta({
    layout: "adminlayout",
});

const route = useRoute();
const { successAlert, loadingAlert, closeAlert } = useAlert();
const { selectImage, imageSrc, fileImage, isChangedImage } = useImage();

const initialValues = reactive({
    alt: null,
    link: null,
    image: null,
    id: route.params.id,
    isChangedImage: null,
    exFileName: null
});

const getSingle = async () => {
    loadingAlert()
    const data = await $fetch(`/api/collaborations/${route.params.id}`, { method: 'GET' })

    const { link, image, alt } = data[0];
    initialValues.link = link;
    initialValues.image = image;
    initialValues.alt = alt;
    initialValues.exFileName = image;

    imageSrc.value = setImageUrl(image);
    closeAlert();
}

getSingle()

const { handleSubmit } = useForm(initialValues);
const edit = handleSubmit(async () => {
    loadingAlert();
    initialValues.image = fileImage.value
    initialValues.isChangedImage = isChangedImage.value

    await $fetch('/api/collaborations/update', {
        method: 'POST',
        body: initialValues
    })
    successAlert('Updated', 'You updated a collaboration');
})


</script>

<template>
    <form @submit.prevent="edit()">
        <div class="grid grid-cols-2 gap-2">

            <ViewComponentBaseTextInput rules="required|min:3|max:20" v-model="initialValues.link" name="link" id="link"
                label="link" />

            <ViewComponentBaseTextInput rules="required|min:3|max:20" v-model="initialValues.alt" name="alt" id="alt"
                label="alt" />


            <div class="w-full">
                <label for="image" class="block text-sm font-medium leading-6 text-gray-900">Image</label>

                <div :class="!imageSrc ? 'p-12' : 'p-3'"
                    class="relative block w-full h-48 rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <svg v-show="!imageSrc" class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none"
                        viewBox="0 0 48 48" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6" />
                    </svg>
                    <input @change="selectImage($event)" class="absolute inset-0 opacity-0 cursor-pointer" type="file">
                    <span v-show="!imageSrc" class="mt-2 block text-sm font-semibold text-gray-900">Image for
                        collaboration</span>
                    <img v-show="imageSrc" :src="imageSrc" alt=""
                        class="w-full h-full rounded-lg inline-block object-cover">
                </div>
            </div>
        </div>

        <div class="flex justify-between mt-5">
            <AdminViewGoBackBtn text="cancel" btn-type="error" link="/admin/collaborations"></AdminViewGoBackBtn>

            <AdminViewCreateBtn>edit collaboration</AdminViewCreateBtn>
        </div>

    </form>
</template>
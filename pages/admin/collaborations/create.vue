<script setup>

definePageMeta({
    layout: "adminlayout",
});

const { successAlert, loadingAlert } = useAlert();
const { selectImage, imageSrc, fileImage } = useImage()

const initialValues = reactive({
    alt: null,
    link: null,
    image: null
});


const { handleSubmit } = useForm(initialValues);
const create = handleSubmit(async (values, { resetForm }) => {
    loadingAlert();
    initialValues.image = fileImage.value
    await $fetch('/api/collaborations/create', {
        method: 'POST',
        body: initialValues
    })

    imageSrc.value = null
    resetForm();
    successAlert('Created', 'You created a collaboration')
})

</script>

<template>
    <form @submit.prevent="create()">
        <div class="grid grid-cols-2 gap-5">

            <ViewComponentBaseTextInput rules="required|min:3|max:20" v-model="initialValues.link" name="link" id="link"
                label="link" />

            <ViewComponentBaseTextInput rules="required|min:3|max:20" v-model="initialValues.alt" name="alt" id="alt"
                label="alt" />

            <div class="w-full">
                <label for="alt" class="block text-sm font-medium leading-6 text-gray-900">Image</label>

                <div :class="!imageSrc ? 'p-12' : 'p-3'"
                    class="relative block w-full h-48 rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <svg v-show="!imageSrc" class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none"
                        viewBox="0 0 48 48" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6" />
                    </svg>
                    <input @change="selectImage($event)" accept=".jpg, .png, .jpeg, .svg"
                        class="absolute inset-0 opacity-0 cursor-pointer" type="file">
                    <span v-show="!imageSrc" class="mt-2 block text-sm font-semibold text-gray-900">Image for
                        collaboration</span>
                    <img v-show="imageSrc" :src="imageSrc" alt=""
                        class="w-full h-full rounded-lg inline-block object-cover">
                </div>
            </div>

        </div>


        <div class="flex justify-between mt-5">
            <AdminViewGoBackBtn text="cancel" btn-type="error" link="/admin/collaborations"></AdminViewGoBackBtn>

            <AdminViewCreateBtn>create collaboration</AdminViewCreateBtn>
        </div>

    </form>
</template>
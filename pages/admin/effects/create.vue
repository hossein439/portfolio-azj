<script setup>

definePageMeta({
    layout: "adminlayout",
    middleware: ['auth'],
    meta: {
        requiresAuth: true, 
    },
});

const { successAlert, loadingAlert } = useAlert();
const { imageSrc, fileImage, fileGif, gifSrc, handleMedia } = useImage();

const showCategory = ref(false);
const selectedCategory = ref('');
const categories = ref([]);

const selectCategory = (category) => {
    showCategory.value = false;
    initialValues.categoryId = category.id;
    selectedCategory.value = category.name;
}

const getAllcategories = async () => {
    const data = await $fetch('/api/categories/getAll', { method: 'GET' })
    categories.value = data;
}
getAllcategories();

const initialValues = reactive({
    name: null,
    link: null,
    alt: null,
    image: null,
    gif: null,
    categoryId: null,
});

const { handleSubmit } = useForm(initialValues);
const create = handleSubmit(async (values, { resetForm }) => {
    console.log(initialValues)
    loadingAlert()
    initialValues.gif = fileGif;
    initialValues.image = fileImage
    await $fetch('/api/effects/create', {
        method: 'POST',
        body: initialValues
    })

    successAlert('Created', 'You created an effect');
    selectedCategory.value = null
    gifSrc.value = null
    imageSrc.value = null
    resetForm();
})

</script>

<template>
    <form @submit.prevent="create()">
        <div class="grid grid-cols-2 gap-5">

            <ViewComponentBaseTextInput rules="required" v-model="initialValues.name" name="name" id="name"
                label="name" />

            <ViewComponentBaseTextInput rules="required" v-model="initialValues.link" name="link" id="link"
                label="link" />

            <ViewComponentBaseTextInput rules="required" v-model="initialValues.alt" name="alt" id="alt"
                label="alt" />


            <div>
                <label id="listbox-label" class="block text-sm font-medium leading-6 text-gray-900">Category</label>
                <div class="relative">
                    <button type="button" @click="showCategory = !showCategory"
                        class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                        <span :class="['block truncate', selectedCategory ? '' : 'p-3']">{{ selectedCategory }}</span>
                        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span>
                    </button>


                    <ul v-show="showCategory"
                        class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                        tabindex="-1" role="listbox" aria-labelledby="listbox-label"
                        aria-activedescendant="listbox-option-3">
                        <li v-for="category in categories" :key="category.id" @click="selectCategory(category)"
                            class="text-gray-900 relative cursor-default select-none py-2 pl-8 pr-4" id="listbox-option-0"
                            role="option">
                            <span class="font-normal block truncate">{{ category.name }}</span>

                            <span class="text-indigo-600 absolute inset-y-0 left-0 flex items-center pl-1.5">
                                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                        </li>

                    </ul>
                </div>
            </div>


            <div :class="!imageSrc ? 'p-12' : 'p-3'"
                class="relative block w-full h-48 rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <svg v-show="!imageSrc" class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none"
                    viewBox="0 0 48 48" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6" />
                </svg>
                <input @change="handleMedia($event, 'img')" accept=".jpg, .png, .jpeg, .svg"
                    class="absolute inset-0 opacity-0 cursor-pointer" type="file">
                <span v-show="!imageSrc" class="mt-2 block text-sm font-semibold text-gray-900">Image for effect</span>
                <img v-show="imageSrc" :src="imageSrc" alt="" class="w-full h-full rounded-lg inline-block object-cover">
            </div>

            <div :class="!gifSrc ? 'p-12' : 'p-3'"
                class="relative block w-full h-48 rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <svg v-show="!gifSrc" class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none"
                    viewBox="0 0 48 48" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6" />
                </svg>
                <input @change="handleMedia($event, 'gif')" accept=".gif" class="absolute inset-0 opacity-0 cursor-pointer"
                    type="file">
                <span v-show="!gifSrc" class="mt-2 block text-sm font-semibold text-gray-900">Gif for effect</span>
                <img v-show="gifSrc" :src="gifSrc" alt="" class="w-full h-full rounded-lg inline-block object-cover">
            </div>

        </div>

        <div class="flex justify-between mt-5">
            <AdminViewGoBackBtn text="cancel" btn-type="error" link="/admin/effects"></AdminViewGoBackBtn>

            <AdminViewCreateBtn>create effect</AdminViewCreateBtn>
        </div>

    </form>
</template>
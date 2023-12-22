<script setup>
definePageMeta({
    layout: "adminlayout",
});

const route = useRoute();
const { successAlert } = useAlert();
const { selectImage, imageSrc, fileImage, isChangedImage } = useImage()


const category = reactive({
    name: null,
    description: null,
    alt: null,
    image: null,
    exFileName: null,
    isChangedImage: false,
    id: route.params.id
});


const setImageUrl = (imageName) => {
    const path = `../../../../uploads/${imageName}`;
    return new URL(path, import.meta.url).href;
}

const getSingle = async () => {

    const data = await $fetch(`/api/category/${route.params.id}`, {
        method: 'GET'
    })

    const { name, image, description, alt } = data[0];
    category.name = name;
    category.image = image;
    category.alt = alt;
    category.description = description;
    category.exFileName = image;

    imageSrc.value = setImageUrl(image);
}

getSingle()

const edit = async () => {
    category.image = fileImage.value;
    category.isChangedImage = isChangedImage.value;

    await $fetch('/api/category/update', {
        method: 'POST',
        body: category
    })

    successAlert('Updated', 'You updated a category');
    navigateTo('/admin/categories')
}

</script>

<template>
    <form @submit.prevent="edit()">
        <div class="grid grid-cols-2 gap-5">

            <div>
                <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                <div class="mt-2">
                    <input v-model="category.name" type="text" name="name" id="name"
                        class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        placeholder="">
                </div>
            </div>

            <div>
                <label for="alt" class="block text-sm font-medium leading-6 text-gray-900">Alt</label>
                <div class="mt-2">
                    <input v-model="category.alt" type="text" alt="alt" id="alt"
                        class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        placeholder="">
                </div>
            </div>

            <div class="w-full flex flex-col">
                <label for="description" class="block text-sm font-medium leading-6 text-gray-900">Description</label>
                <div class="w-full flex-1">
                    <textarea v-model="category.description" type="text" name="description" id="description"
                        class="block w-full h-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        placeholder="">

                        </textarea>
                </div>
            </div>

            <div class="w-full">
                <label for="description" class="block text-sm font-medium leading-6 text-gray-900">Image</label>
                <div :class="!imageSrc ? 'p-12' : 'p-3'"
                    class="relative block w-full h-48 rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <svg v-show="!imageSrc" class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none"
                        viewBox="0 0 48 48" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6" />
                    </svg>
                    <input @change="selectImage($event)" class="absolute inset-0 opacity-0 cursor-pointer" type="file">
                    <span v-show="!imageSrc" class="mt-2 block text-sm font-semibold text-gray-900">Image for
                        category</span>
                    <img v-show="imageSrc" :src="imageSrc" alt=""
                        class="w-full h-full rounded-lg inline-block object-cover">
                </div>
            </div>

        </div>

        <div class="flex justify-between mt-5">
            <AdminViewGoBackBtn text="cancel" btn-type="error" link="/admin/categories"></AdminViewGoBackBtn>

            <AdminViewCreateBtn>edit category</AdminViewCreateBtn>
        </div>

    </form>
</template>


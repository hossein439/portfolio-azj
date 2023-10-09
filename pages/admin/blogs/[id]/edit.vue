<script setup>
import axios from 'axios';
definePageMeta({
    layout: "adminlayout",
});

const route = useRoute();
const { successAlert } = useAlert();


const blog = reactive({
    title: null,
    alt: null,
    description: null,
    image: null
});

const imageSrc = ref(null);
const isChangedImage = ref(false);
const exFile = ref(false);

const selectImage = (e) => {
    const file = e.target.files[0];
    imageSrc.value = URL.createObjectURL(file);
    blog.image = file;
    isChangedImage.value = true;
}

const setImageUrl = (imageName) => {
    const path = `../../../../uploads/${imageName}`;
    return new URL(path, import.meta.url).href;
}

const getSingle = async () => {
    const data = await axios({
        method: 'get',
        url: `http://localhost:4000/blog/${route.params.id}`,
    });
    const { title, image, description, alt } = data.data[0];
    blog.title = title;
    blog.image = image;
    blog.alt = alt;
    blog.description = description;

    exFile.value = image;

    imageSrc.value = setImageUrl(image);
}

getSingle()

const edit = () => {
    const formData = new FormData();

    formData.append('title', blog.title);
    formData.append('alt', blog.alt);
    formData.append('description', blog.description);
    formData.append('image', blog.image);

    formData.append('exFileName', exFile.value);
    formData.append('isChangedImage', isChangedImage.value);

    axios.put(`http://localhost:4000/blog/${route.params.id}`, formData)


    successAlert('Updated', 'You updated a blog');
    navigateTo('/admin/blogs')
}

</script>

<template>
    <form @submit.prevent="edit()">
        <div class="w-1/3 flex flex-col gap-2">
            <div>
                <label for="title" class="block text-sm font-medium leading-6 text-gray-900">Title</label>
                <div class="mt-2">
                    <input v-model="blog.title" type="text" name="title" id="title"
                        class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        placeholder="">
                </div>
            </div>

            <div>
                <label for="alt" class="block text-sm font-medium leading-6 text-gray-900">Alt</label>
                <div class="mt-2">
                    <input v-model="blog.alt" type="text" name="alt" id="alt"
                        class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        placeholder="">
                </div>
            </div>

            <div class="w-full flex flex-col">
                <label for="description" class="block text-sm font-medium leading-6 text-gray-900">Description</label>
                <div class="w-full flex-1">
                    <textarea v-model="blog.description" type="text" name="description" id="description"
                        class="block w-full h-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        placeholder="">
                        </textarea>
                </div>
            </div>


            <div :class="!imageSrc ? 'p-12' : 'p-3'"
                class="relative block w-full h-48 rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <svg v-show="!imageSrc" class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none"
                    viewBox="0 0 48 48" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6" />
                </svg>
                <input @change="selectImage($event)" class="absolute inset-0 opacity-0 cursor-pointer" type="file">
                <span v-show="!imageSrc" class="mt-2 block text-sm font-semibold text-gray-900">Image for
                    blog</span>
                <img v-show="imageSrc" :src="imageSrc" alt="" class="w-full h-full rounded-lg inline-block object-cover">
            </div>
        </div>

        <div class="flex justify-between mt-5">
            <AdminViewGoBackBtn text="cancel" btn-type="error" link="/admin/blogs"></AdminViewGoBackBtn>

            <AdminViewCreateBtn>edit blog</AdminViewCreateBtn>
        </div>

    </form>
</template>
<script setup>
import axios from 'axios';

definePageMeta({
    layout: "adminlayout",
});

const filter  = reactive({
    link: null,
    feature: null,
    category: null,
    image: null
});

const imageSrc = ref(null);

const selectImage = (e) => {
    const file = e.target.files[0];
    imageSrc.value = URL.createObjectURL(file);
    filter.image = file;
}


const create = async () => {
    const formDate = new FormData();
    formDate.append('link', filter.link);
    formDate.append('feature', filter.feature);
    formDate.append('category', filter.category);
    formDate.append('image', filter.image);

    const data = await axios({
        method: 'post',
        url: 'http://localhost:4000/filter',
        data: formDate
    });

    console.log(data);
}

</script>

<template>
    <form @submit.prevent="create()">
        <div class="w-1/3 flex flex-col gap-2">
            <div>
                <label for="link" class="block text-sm font-medium leading-6 text-gray-900">Link</label>
                <div class="mt-2">
                    <input v-model="filter.link" type="text" name="link" id="link"
                        class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        placeholder="">
                </div>
            </div>
    
            <div>
                <label for="feature" class="block text-sm font-medium leading-6 text-gray-900">Feature</label>
                <div class="mt-2">
                    <input v-model="filter.feature" type="text" name="feature" id="feature"
                        class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        placeholder="">
                </div>
            </div>
            
            <div>
                <label for="category" class="block text-sm font-medium leading-6 text-gray-900">Category</label>
                <div class="mt-2">
                    <input v-model="filter.category" type="text" name="category" id="category"
                        class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        placeholder="">
                </div>
            </div>
    
            <div
                :class="!imageSrc ? 'p-12': 'p-3'" class="relative block w-full h-48 rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <svg v-show="!imageSrc" class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48"
                    aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6" />
                </svg>
                <input @change="selectImage($event)" class="absolute inset-0 opacity-0 cursor-pointer" type="file">
                <span v-show="!imageSrc" class="mt-2 block text-sm font-semibold text-gray-900">Image for filter</span>
                <img v-show="imageSrc" :src="imageSrc" alt="" class="w-full h-full rounded-lg inline-block object-cover">
            </div>
        </div>

        <button class="block ml-auto rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 capitalize">create filter</button>

    </form>
</template>
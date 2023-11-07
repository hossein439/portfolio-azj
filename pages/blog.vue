<script setup>
import axios from 'axios';
import { format } from 'date-fns';

const isLoadedBlog = ref(false);
const singleBlog = reactive({
    title: '',
    created_at: '',
    description: '',
});
const imageSrc = ref();

const setImageUrl = (imageName) => {
    const path = `../uploads/${imageName}`;
    return new URL(path, import.meta.url).href;
}

const getLastBlog = async () => {
    const data = await axios({
        method: 'get',
        url: 'http://localhost:4000/blog/last'
    });
    const blog = data.data[0];
    singleBlog.title = blog.title;
    singleBlog.created_at = blog.created_at;
    singleBlog.description = blog.description;

    imageSrc.value = setImageUrl(blog.image);
    isLoadedBlog.value = true;
}
getLastBlog();

const showTime = (date, formatDate) => {
    return format(new Date(date), formatDate);
}


const blogs = ref([]);
const limit = 3;
const isExistBlogs = ref(false);
let offset = 0;

const getMoreBlogs = async () => {
    const data = await axios({
        method: 'get',
        url: 'http://localhost:4000/blog',
        params: {
            offset,
            limit
        }
    });
    blogs.value = [...blogs.value, ...data.data];
    if (data.data.length < limit) isExistBlogs.value = true;
    if (data.data.length > 0) {
        offset += blogs.value.length;
    }
    console.log(blogs.value)
}
getMoreBlogs();
</script>


<template>
    <Title>Blog</Title>
    <section v-if="isLoadedBlog" class="px-[176px]">
        <div class="h-[446px]">
            <img class="rounded-lg h-full w-full object-cover" :src="imageSrc" alt="">
        </div>
        <div class="flex items-center justify-between py-8">
            <h1 class="text-4xl capitalize">{{ singleBlog.title }}</h1>
            <div class="flex items-center gap-6">
                <div class="flex items-center gap-3">
                    <img src="~/assets/images/icons/clock.svg" alt="">
                    <time>
                        {{ showTime(singleBlog.created_at, 'HH:mm') }}
                    </time>
                </div>
                <div class="flex items-center gap-3">
                    <img src="~/assets/images/icons/calendar.svg" alt="">
                    {{ showTime(singleBlog.created_at, 'yyyy/MM/dd') }}
                </div>
            </div>
        </div>
        <p class="text-2xl pb-12">
            {{ singleBlog.description }}
        </p>

    </section>

    <section class="px-[176px] pb-16 fade-in">
        <h2 class="text-5xl pt-8 pb-12 text-center font-semibold capitalize text-[#0E101C]">more content</h2>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-6">
            <article v-for="blog in blogs" :key="blog.id" class="flex flex-col gap-2 text-2xl">
                <div class="h-[406px]">
                    <!-- <img class="rounded-lg h-full w-full object-cover" src="~/assets/images/client/blog-1.jpeg" alt=""> -->
                    <img class="rounded-lg h-full w-full object-cover" :src="setImageUrl(blog.image)" alt="">
                </div>
                <p class="font-semibold capitalize">{{ blog.title }}</p>
                <div class="flex items-center gap-6">
                    <div class="flex items-center gap-3">
                        <img src="~/assets/images/icons/clock.svg" alt="">
                        <time>{{ showTime(blog.created_at, 'HH:mm') }}</time>
                    </div>
                    <div class="flex items-center gap-3">
                        <img src="~/assets/images/icons/calendar.svg" alt="">
                        <time>{{ showTime(blog.created_at, 'yyyy/MM/dd') }}</time>
                    </div>
                </div>
                <p class="line-clamp-3">{{ blog.description }}</p>
            </article>
        </div>
    </section>

    <div class="" v-if="!isExistBlogs">
        <div class="px-[176px] pb-16 mt-10 grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-6">

            <div class="relative bg-red">
                <div class="absolute w-full h-full bg-image z-10"></div>
                <div class="h-[206px] w-full">
                    <img class="rounded-lg h-full w-full object-cover" src="~/assets/images/client/blog-1.jpeg" alt="">
                </div>
            </div>

            <div class="relative">
                <div class="absolute w-full h-full bg-image z-10"></div>
                <div class="h-[206px] w-full">
                    <img class="rounded-lg h-full w-full object-cover" src="~/assets/images/client/blog-2.jpeg" alt="">
                </div>
            </div>

            <div class="relative">
                <div class="absolute w-full h-full bg-image z-10"></div>
                <div class="h-[206px] w-full">
                    <img class="rounded-lg h-full w-full object-cover" src="~/assets/images/client/blog-3.jpeg" alt="">
                </div>
            </div>
        </div>
        <ViewComponentBaseButton @click="getMoreBlogs()" class="relative z-20 top-[-11.5rem] mx-auto">load more
        </ViewComponentBaseButton>
    </div>
</template>

<style scoped>
.bg-image {
    background: linear-gradient(0deg, #FAFAFA 0%, rgba(250, 250, 250, 0.95) 92.38%);
}
</style>
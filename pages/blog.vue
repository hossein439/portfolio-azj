<script setup>
import axios from 'axios';
import { format } from 'date-fns';

const singleBlog = ref();
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
    singleBlog.value = data.data[0];
    imageSrc.value = setImageUrl(singleBlog.value.image);
    console.log(singleBlog.value);
}
getLastBlog();

const showTime = (date, formatDate) => {
    console.log(date, formatDate)
    return format(new Date(date), formatDate);
}

</script>


<template>
    <Title>Blog</Title>
        <section class="px-[176px]">
            <div class="h-[446px]">
                <img class="rounded-lg h-full w-full object-cover" :src="imageSrc" alt="">
            </div>
            <div class="flex items-center justify-between py-8">
                <h1 class="text-4xl">{{ singleBlog?.title }}</h1>
                <div class="flex items-center gap-6">
                    <div class="flex items-center gap-3">
                        <img src="~/assets/images/icons/clock.svg" alt="">
                        <time>
                            {{ showTime(singleBlog?.created_at, 'HH:mm') }}
                        </time>
                    </div>
                    <div class="flex items-center gap-3">
                        <img src="~/assets/images/icons/calendar.svg" alt="">
                        {{ showTime(singleBlog?.created_at, 'yyyy/MM/dd') }}
                    </div>
                </div>
            </div>
            <p class="text-2xl pb-12">
                {{ singleBlog?.description }}
            </p>

        </section>

    <section class="px-[176px] fade-in">
        <h2 class="text-5xl pt-8 pb-12 text-center font-semibold capitalize text-[#0E101C]">more content</h2>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-6">
            <article class="flex flex-col gap-2 text-2xl">
                <div class="h-[406px]"><img class="rounded-lg h-full w-full object-cover"
                        src="~/assets/images/client/blog-1.jpeg" alt=""></div>
                <p class="font-semibold capitalize">Crazy effect</p>
                <div class="flex items-center gap-6">
                    <div class="flex items-center gap-3">
                        <img src="~/assets/images/icons/clock.svg" alt="">
                        <time>20:18</time>
                    </div>
                    <div class="flex items-center gap-3">
                        <img src="~/assets/images/icons/calendar.svg" alt="">
                        <time>28/9/2023</time>
                    </div>
                </div>
                <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
            </article>
            <article class="flex flex-col gap-2 text-2xl">
                <div class="h-[406px]"><img class="rounded-lg h-full w-full object-cover"
                        src="~/assets/images/client/blog-2.jpeg" alt=""></div>
                <p class="font-semibold capitalize">Crazy effect</p>
                <div class="flex items-center gap-6">
                    <div class="flex items-center gap-3">
                        <img src="~/assets/images/icons/clock.svg" alt="">
                        <time>20:18</time>
                    </div>
                    <div class="flex items-center gap-3">
                        <img src="~/assets/images/icons/calendar.svg" alt="">
                        <time>28/9/2023</time>
                    </div>
                </div>
                <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
            </article>
            <article class="flex flex-col gap-2 text-2xl">
                <div class="h-[406px]"><img class="rounded-lg h-full w-full object-cover"
                        src="~/assets/images/client/blog-3.jpeg" alt=""></div>
                <p class="font-semibold capitalize">Crazy effect</p>
                <div class="flex items-center gap-6">
                    <div class="flex items-center gap-3">
                        <img src="~/assets/images/icons/clock.svg" alt="">
                        <time>20:18</time>
                    </div>
                    <div class="flex items-center gap-3">
                        <img src="~/assets/images/icons/calendar.svg" alt="">
                        <time>28/9/2023</time>
                    </div>
                </div>
                <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
            </article>
        </div>
    </section>

    <section class="pb-16 fade-in">
        <h4 class="text-5xl leading-[76px] font-semibold text-center">Do you need a sport <br>effect?
        </h4>
        <button
            class="flex justify-center mx-auto mt-4 py-2 px-4 rounded-lg capitalize text-[#025EFF] border-2 border-[#025EFF] shadow-md">
            get in touch
        </button>
    </section>
</template>
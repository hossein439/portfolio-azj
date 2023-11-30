<script setup>
import { format } from 'date-fns';

definePageMeta({
    layout: "customheader",
});


const isLoadedBlog = ref(false);
const singleBlog = reactive({
    title: null,
    created_at: null,
    description: null,
    image: null,
    alt: null,
});

const setImageUrl = (imageName) => {
    const path = `${imageName}`;
    console.log(import.meta)
    return new URL(path, import.meta.url).href;
}

const showTime = (date, formatDate) => {
    return format(new Date(date), formatDate);
}

// const getLastBlog = async () => {
//     const data = await useNuxtApp().$apiFetch('/blog/last');
//     const blog = data[0];
//     singleBlog?.title = blog.title;
//     singleBlog?.created_at = blog.created_at;
//     singleBlog?.description = blog.description;
//     singleBlog?.image = blog.image;
//     isLoadedBlog.value = true;
// }
// getLastBlog();

const data = await useNuxtApp().$apiFetch('/blog/last');
const blog = data[0];
singleBlog.title = blog.title;
singleBlog.created_at = blog.created_at;
singleBlog.description = blog.description;
singleBlog.image = blog.image;
singleBlog.alt = blog.alt;


</script>


<template>
    <Title>home</Title>
    <main>
        <div class="divider"></div>
        <section class="fade-in xs:mx-4 lg:mx-[85px] flex justify-center items-center lg:py-24 md:py-4">
            <article
                class="xs:p-4 lg:px-[85px] rounded-2xl lg:py-16 shadow-[2px_2px_5px_0px_rgba(53,53,53,0.50)] bg-[#FFF] text-[#0E101C]">
                <h2 class="text-5xl leading-[76px] font-semibold capitalize">about me</h2>
                <p class="xs:pt-6 xs:pb-8 lg:pt-12 lg:pb-16">Hi! I’m Jawad, also known as <strong
                        class="text-[#025EFF]">AZJ</strong>. I weave
                    AR magic as a
                    TikTok Effect House Ambassador,
                    spreading joy and wonder. Let's create enchanting experiences together!</p>

                <RouterLink to="about">
                    <ViewComponentBaseButton class="mx-auto">more</ViewComponentBaseButton>
                </RouterLink>
            </article>
        </section>

        <div class="divider"></div>

        <section class="fade-in xs:px-4 lg:px-[72px]">
            <h3 class="xs:text-[32px] lg:text-4xl text-center font-bold text-[#0E101C]">My trending filters</h3>
            <ViewComponentSliderTrend :show-category="true"></ViewComponentSliderTrend>
        </section>

        <div class="xs:mb-[60px] lg:mb-[140px]"></div>

        <LayoutComponentTheCollaborations></LayoutComponentTheCollaborations>

        <div class="divider"></div>

        <LayoutComponentTheEffects class="fade-in" title="Try my effects"></LayoutComponentTheEffects>

        <div class="divider"></div>

        <section class="fade-in xs:px-4 lg:px-[176px] mt-[34px] relative">

            <div class="h-[446px]">
                <img class="rounded-lg h-full w-full object-cover" :src="setImageUrl(singleBlog?.image)"
                    :alt="singleBlog?.alt">
            </div>
            <div class="flex flex-wrap xs:gap-4 items-center justify-between py-8">
                <h1 class="text-4xl capitalize">{{ singleBlog?.title }}</h1>
                <div class="flex items-center gap-6">
                    <div class="flex items-center gap-3">
                        <img src="~/assets/images/icons/clock.svg" alt="">
                        <time>
                            {{ showTime(singleBlog?.created_at, 'HH:mm') }}
                        </time>
                    </div>
                    <div class="flex items-center gap-3">
                        <img src="~/assets/images/icons/calendar.svg" alt="calendar icon">
                        {{ showTime(singleBlog?.created_at, 'yyyy/MM/dd') }}
                    </div>
                </div>
            </div>
            <p class="xs:text-[18px] lg:text-2xl pb-12 xs:h-[300px] lg:h-[130px] relative overflow-hidden">
                {{ singleBlog?.description }}
            <div class="bg-opacity"></div>

            <RouterLink to="/blog" class="absolute bottom-0 left-0 right-0">
                <ViewComponentBaseButton class="mx-auto">view blog</ViewComponentBaseButton>
            </RouterLink>
            </p>

        </section>

        <div class="divider"></div>

        <section class="xs:px-4 lg:px-[176px] fade-in">
            <h4 class="xs:text-[32px] lg:text-5xl lg:leading-[76px] font-semibold text-center">Ready to see your ideas
                <br /> Come to life?
            </h4>
            <ViewComponentBaseButton class="mx-auto mt-4">get in touch</ViewComponentBaseButton>
        </section>
        <div class="divider"></div>
    </main>
</template>

<style scoped>
.bg-opacity {
    background: linear-gradient(0deg, #FAFAFA 0%, rgba(250, 250, 250, 0.95) 92.38%);
    bottom: 0;
    position: absolute;
    width: 100%;
    height: 60px;
}
</style>
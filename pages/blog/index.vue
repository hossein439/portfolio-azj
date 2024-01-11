<script setup>
import { useBlogStore } from '@/stores/views/blog'

const blogStore = useBlogStore();

blogStore.getBlogs();

if (!blogStore.lastBlog) {
    blogStore.getLastBlog()
}


</script>


<template>
    <Title>Blog</Title>
    <section class="xs:px-4 lg:px-[110px]">

        <div class="xs:h-[138px] lg:h-[446px]">
            <img class="rounded-lg h-full w-full object-cover" :src="setImageUrl(blogStore.lastBlog?.image)"
                :alt="blogStore.lastBlog?.alt">
        </div>
        <div class="flex flex-wrap xs:gap-4 lg:gap-0 items-center justify-between xs:py-4 lg:py-8">
            <h1 class="text-4xl capitalize">{{ blogStore.lastBlog?.title }}</h1>
            <div class="flex items-center gap-6">
                <div class="flex items-center xs:gap-2 lg:gap-3">
                    <img src="~/assets/images/clock.svg" alt="">
                    <time>
                        {{ formatTime(blogStore.lastBlog?.created_at, 'HH:mm') }}
                    </time>
                </div>
                <div class="flex items-center xs:gap-2 lg:gap-3">
                    <img src="~/assets/images/calendar.svg" alt="">

                    {{ formatTime(blogStore.lastBlog?.created_at, 'DD/MM/YYYY') }}
                </div>
            </div>
        </div>
        <p class="xs:text-[18px] lg:text-2xl pb-12">
            {{ blogStore.lastBlog?.description }}
        </p>

    </section>

    <div class="divider"></div>

    <template v-if="!blogStore.isLoading">
        <section class="xs:px-4 lg:px-[110px] fade-in">
            <h2 class="text-5xl pt-8 pb-12 text-center font-semibold capitalize text-[#0E101C]">more content</h2>
            <div class="grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-6">
                <template v-for="blog in blogStore.blogs" :key="blog.id">
                    <NuxtLink :to="`/blog/${blog.id}`">
                        <article class="flex flex-col gap-2 text-2xl">
                            <div class="xs:h-[316px] lg:h-[406px]">
                                <img class="rounded-lg h-full w-full object-cover" :src="setImageUrl(blog.image)"
                                    :alt="blog.alt">
                            </div>
                            <div class="flex flex-wrap justify-between">
                                <p class="font-semibold capitalize">{{ blog.title }}</p>
                                <div class="flex items-center gap-6">
                                    <div class="flex items-center gap-3">
                                        <img src="~/assets/images/clock.svg" alt="">
                                        <time>{{ formatTime(blog.created_at, 'HH:mm') }}</time>
                                    </div>
                                    <div class="flex items-center gap-3">
                                        <img src="~/assets/images/calendar.svg" alt="">
                                        <time>{{ formatTime(blog.created_at, 'DD/MM/YYYY') }}</time>
                                    </div>
                                </div>
                            </div>
                            <p class="line-clamp-3">{{ blog.description }}</p>
                        </article>
                    </NuxtLink>
                </template>
            </div>
        </section>

        <div class="" v-if="!blogStore.isExistBlogs">
            <div class="xs:px-4 lg:px-[176px] mt-6 pb-16 grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-6">

                <div class="relative bg-red">
                    <div class="absolute w-full h-full bg-image z-10"></div>
                    <div class="h-[206px] w-full">
                        <img class="rounded-lg h-full w-full object-cover" src="~/assets/images/blog-1.jpeg" alt="">
                    </div>
                </div>

                <div class="relative xs:hidden lg:block">
                    <div class="absolute w-full h-full bg-image z-10"></div>
                    <div class="h-[206px] w-full">
                        <img class="rounded-lg h-full w-full object-cover" src="~/assets/images/blog-2.jpeg" alt="">
                    </div>
                </div>

                <div class="relative xs:hidden lg:block">
                    <div class="absolute w-full h-full bg-image z-10"></div>
                    <div class="h-[206px] w-full">
                        <img class="rounded-lg h-full w-full object-cover" src="~/assets/images/blog-3.jpeg" alt="">
                    </div>
                </div>
            </div>
            <ViewComponentBaseButton @click="blogStore.getBlogs()" class="relative z-20 top-[-11.5rem] mx-auto">load more
            </ViewComponentBaseButton>
        </div>
    </template>
    <div class="divider"></div>
</template>

<style scoped>
.bg-image {
    background: linear-gradient(0deg, #FAFAFA 0%, rgba(250, 250, 250, 0.95) 92.38%);
}
</style>
<script setup>
import { useUiStore } from '@/stores/views/ui'

const isLoading = ref(true);
const landing = ref()

const uiStore = useUiStore();

const getLandigData = async () => {
    const { data } = await useFetch('/api/settings/landing/meta');
    landing.value = data.value;
}
getLandigData();

async function fetch() {
    await new Promise(resolve => setTimeout(resolve, 3000));
    isLoading.value = false;
    uiStore.isFirstLoading = false;
}

if(uiStore.isFirstLoading) {
    fetch()
}else {
    isLoading.value = false
}


const categories = ref([]);
const getGategories = async () => {
    const data = await $fetch('/api/categories/getAll', {
        method: 'GET',
    });
    categories.value = data;
}

getGategories();

const isMouseEnter = ref(false);



</script>

<template>
    <div v-if="isLoading" class="loading h-screen flex justify-center items-center">
        <div class="w-[200px] h-[200px] relative">
            <IconsLogoIcon class="h-full w-full object-cover"></IconsLogoIcon>
            <div class="absolute top-[10px] right-[60px] -z-10">
                <span class="circle"></span>
                <span class="circle circle-2"></span>
                <span class="circle circle-3"></span>
            </div>
        </div>
    </div>
    <div v-else class="max-w-[1512px] mx-auto h-screen">
        <ViewComponentMoblieNav></ViewComponentMoblieNav>
        <header class="relative overflow-hidden transition-all h-full bg-home-page">
            <div class="relative flex flex-col justify-between h-full">
                <nav class="lg:hidden xs:flex justify-between px-4 py-[50px]">
                    <IconsLogoIcon></IconsLogoIcon>
                    <ViewComponentHamburgerMenu></ViewComponentHamburgerMenu>
                </nav>

                <nav
                    :class="['xs:hidden lg:flex justify-between items-center py-8 xs:px-8 lg:px-32', isMouseEnter && 'bg-white relative z-30']">
                    <div class="">
                        <img src="~/assets/images/logo.svg" alt="">
                    </div>
                    <div class="flex justify-between items-center">

                        <ul class="flex gap-8 items-center relative z-30">

                            <li @click="isMouseEnter = false" @mouseover="isMouseEnter = false">
                                <NuxtLink
                                    class="nav-item text-2xl border-transparent cursor-pointer hover:border-[#025EFF] capitalize hover:text-[#025EFF] py-2 transition-all"
                                    to="/">Home
                                </NuxtLink>
                            </li>

                            <li @click="isMouseEnter = false" @mouseover="isMouseEnter = false">
                                <NuxtLink
                                    class="nav-item text-2xl border-transparent cursor-pointer hover:border-[#025EFF] capitalize hover:text-[#025EFF] py-2 transition-all"
                                    href="/about">about me
                                </NuxtLink>
                            </li>

                            <li @mouseover="isMouseEnter = true" class="flex flex-col items-center">
                                <button
                                    class="nav-item text-2xl border-transparent cursor-pointer hover:border-[#025EFF] capitalize hover:text-[#025EFF] py-2 transition-all"
                                    href="#">Categories
                                </button>
                            </li>

                            <li @click="isMouseEnter = false" @mouseover="isMouseEnter = false">
                                <NuxtLink
                                    class="nav-item text-2xl border-transparent cursor-pointer hover:border-[#025EFF] capitalize hover:text-[#025EFF] py-2 transition-all"
                                    href="/blog">Blog
                                </NuxtLink>
                            </li>

                        </ul>
                        <ViewComponentBaseButton size="2xl" class="ml-16 relative z-20">
                            contact
                        </ViewComponentBaseButton>
                    </div>

                </nav>

                <div :class="['absolute z-30 pb-12 pt-10 w-full top-24 opacity-0 bg-white', isMouseEnter && 'opacity-100']">
                    <ul class="grid grid-cols-3 gap-12 w-1/2 mx-auto">
                        <li v-for="category in categories" :key="category.id" @click="isMouseEnter = false"
                            class="text-2xl text-[#5F5F5F] capitalize">
                            <NuxtLink :to="`/categories/${category.id}`">{{ category.name }}</NuxtLink>
                        </li>
                    </ul>
                </div>

                <div v-show="isMouseEnter" @mouseover="isMouseEnter = false" class="fixed inset-0 overllay"></div>

                <div class="bg-user-mobile h-full">

                    <div class=" absolute z-10 bottom-0 w-full px-10">
                        <img class="xs:inline-block lg:hidden w-full mx-auto capitalize"
                            :src="setImageUrl(landing?.data.image)" :alt="landing?.data?.alt">
                        <img class="xs:hidden lg:flex mx-auto capitalize" width="500"
                            :src="setImageUrl(landing?.data.image)" :alt="landing?.data?.alt">

                    </div>
                    <div class="overflow-hidden absolute bottom-0 lg:px-12">
                        <h1
                            class="to-right lg:text-[225px] xs:leading-[55px] lg:leading-[194px] -z-10 bottom-[12rem] font-bold whitespace-nowrap text-[62.877px] text-[#1C1C1C]">
                            {{ landing?.data.text }}</h1>
                        <h1
                            class="to-left lg:text-[225px] xs:leading-[55px] lg:leading-[194px] -z-10 bottom-[7rem] font-bold whitespace-nowrap text-[62.877px] text-[#025EFF]">
                            {{ landing?.data.text }}</h1>
                    </div>
                </div>
            </div>

        </header>
        <slot></slot>

        <LayoutComponentTheFooter></LayoutComponentTheFooter>
    </div>
</template>

<style scoped>
.circle {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    width: 100%;
    height: 100%;
    border: 55px solid #b6d4fc;
    border-color: #b6d4fc;
    animation: circle-opacity 3s infinite;
}

.circle-2 {
    animation-delay: .3s;
}

.circle-3 {
    animation-delay: .8s;
}

@keyframes circle-opacity {
    0% {
        opacity: 1;
        transform: scale(0);
    }

    100% {
        opacity: 0;
        transform: scale(1);
    }
}

.nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.bg-home-page {
    background: transparent;
}

.bg-user-mobile {
    background: radial-gradient(circle, rgba(182, 212, 252, 1) 0%, rgba(192, 218, 252, 1) 22%, rgba(229, 238, 250, 1) 43%, rgba(255, 255, 255, 1) 84%);
    background-position: 0 80px;
}

@media (min-width: 780px) {
    .bg-home-page {
        background: radial-gradient(circle, rgba(182, 212, 252, 1) 0%, rgba(192, 218, 252, 1) 22%, rgba(229, 238, 250, 1) 43%, rgba(255, 255, 255, 1) 84%);
    }

    .bg-user-mobile {
        background: transparent;
    }
}

.nav-item::after {
    content: '';
    display: inline-block;
    height: 3px;
    width: 32px;
    margin: auto;
    position: relative;
    top: 8px;
    background-color: transparent;
    transition: all .3s;
}


.router-link-active {
    color: #025EFF;
}

@media screen and (min-width: 480px) {
    .router-link-active {
        color: #025EFF;
    }
}

.router-link-active::after {
    background-color: #025EFF;
}

.nav-item:hover:after {
    background-color: #025EFF;
    width: 100%;
}

.router-link-active:hover {
    width: 100%;
}

.to-left {
    animation: left 10s infinite linear;
}

.to-right {
    animation: right 10s infinite linear;
}

@keyframes left {
    from {
        transform: translate(0px);
    }

    to {
        transform: translate(-800px);
    }
}

@keyframes right {
    from {
        transform: translate(-800px);
    }

    to {
        transform: translate(0px);
    }
}

@media (min-width: 480px) {
    @keyframes left {
        from {
            transform: translate(0px);
        }

        to {
            transform: translate(-2800px);
        }
    }

    @keyframes right {
        from {
            transform: translate(-2800px);
        }

        to {
            transform: translate(0px);
        }
    }
}

.overllay {
    opacity: 0.9;
    background: #000;
    backdrop-filter: blur(50px);
    z-index: 20;
}
</style>
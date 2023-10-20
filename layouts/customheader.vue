<script setup>
import axios from 'axios';

const categories = ref([]);
const getGategories = async () => {
    const data = await axios({
        method: 'get',
        url: 'http://localhost:4000/category',
    });
    categories.value = data.data;
}

getGategories();

const isMouseEnter = ref(false);
const showCategory = () => {
    isMouseEnter.value = true;
    // document.querySelector('.router-link-active').classList.remove('router-link-active');
}
</script>

<template>
    <header class="relative overflow-hidden transition-all">


        <div class=" relative flex flex-col justify-between hello-bg">
            <nav class="lg:hidden xs:flex justify-between px-4 py-[50px]">
                <img src="~/assets/images/client/logo.svg" alt="">
                <button id="open-btn" data-status="open">
                    <img src="~/assets/images/icons/menu.svg" alt="">
                </button>
            </nav>

            <nav :class="['xs:hidden lg:flex justify-evenly items-center py-8', isMouseEnter && 'bg-white relative z-30']">


                <div class="">
                    <img src="~/assets/images/client/logo.svg" alt="">
                </div>
                <div class="flex justify-between items-center">

                    <ul class="flex gap-8 items-center relative z-30">

                        <li @click="isMouseEnter = false">
                            <NuxtLink
                                class="nav-item text-2xl border-transparent cursor-pointer hover:border-[#025EFF] capitalize hover:text-[#025EFF] py-2 transition-all"
                                to="/">Home
                            </NuxtLink>
                        </li>

                        <li @click="isMouseEnter = false">
                            <NuxtLink
                                class="nav-item text-2xl border-transparent cursor-pointer hover:border-[#025EFF] capitalize hover:text-[#025EFF] py-2 transition-all"
                                href="/about">about me
                            </NuxtLink>
                        </li>

                        <li @mouseover="showCategory()" class="flex flex-col items-center">
                            <button
                                class="nav-item text-2xl border-transparent cursor-pointer hover:border-[#025EFF] capitalize hover:text-[#025EFF] py-2 transition-all"
                                href="#">Categories
                            </button>
                        </li>

                        <li @click="isMouseEnter = false">
                            <NuxtLink
                                class="nav-item text-2xl border-transparent cursor-pointer hover:border-[#025EFF] capitalize hover:text-[#025EFF] py-2 transition-all"
                                href="/blog">Blog
                            </NuxtLink>
                        </li>

                    </ul>
                    <ViewComponentBaseButton size="2xl">
                        contact
                    </ViewComponentBaseButton>
                </div>

            </nav>

            <div :class="['absolute z-30 pb-12 pt-10 w-full top-24 opacity-0 bg-white', isMouseEnter && 'opacity-100']">
                <ul class="grid grid-cols-3 gap-12 w-1/4 mx-auto">
                    <li v-for="category in categories" :key="category.id" @click="isMouseEnter = false" class="text-2xl text-[#5F5F5F]">
                        <NuxtLink :to="`/categories/${category.id}`">{{ category.name }}</NuxtLink>
                    </li>
                </ul>
            </div>

            <div v-show="isMouseEnter" @mouseover="isMouseEnter = false" class="absolute inset-0 overllay"></div>

            <div class="mt-[245px]">

                <div class="absolute z-20 right-[40%] top-64">
                    <a class="cursor-pointer" href="#">
                        <img src="~/assets/images/icons/youtube-black.svg" alt="">
                    </a>
                </div>
                <div class="absolute z-20 right-[49%] top-48">
                    <a class="cursor-pointer" href="#">
                        <img src="~/assets/images/icons/instagram-black.svg" alt="">
                    </a>
                </div>
                <div class="absolute z-20 right-[60%] top-64">
                    <a class="cursor-pointer" href="#">
                        <img src="~/assets/images/icons/tiktok-black.svg" alt="">
                    </a>
                </div>

                <div class="hello-bg absolute xs:bottom-0 lg:bottom-[-24rem] w-full p-[100px]">
                    <!-- <img class="inline-block w-full h-full mx-auto" src="~/assets/images/others/background-user.svg" alt=""> -->
                    <!-- <img class="inline-block mx-auto" src="~/assets/images/others/bg-desktop.png" alt=""> -->
                </div>

                <div class="absolute z-10 bottom-0 w-full px-10">
                    <img class="xs:inline-block lg:hidden w-full mx-auto" src="~/assets/images/client/user.png" alt="">
                    <img class="xs:hidden lg:flex mx-auto" width="500" src="~/assets/images/client/userimg-desktop.png"
                        alt="">
                </div>

                <div class="overflow-hidden lg:px-12">
                    <h1
                        class="to-right lg:text-[225px] leading-[194px] -z-10 bottom-[12rem] font-bold whitespace-nowrap text-[62.877px] text-[#1C1C1C]">
                        AZJ
                        EFFECT AZJ EFFECT AZJ EFFECT</h1>
                    <h1
                        class="to-left lg:text-[225px] leading-[194px] -z-10 bottom-[7rem] font-bold whitespace-nowrap text-[62.877px] text-[#025EFF]">
                        AZJ
                        EFFECT AZJ EFFECT AZJ EFFECT</h1>
                </div>
            </div>
        </div>

    </header>
    <slot></slot>
    <LayoutComponentTheFooter></LayoutComponentTheFooter>
</template>

<style scoped>
.nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    animation: left 15s infinite linear;
}

.to-right {
    animation: right 15s infinite linear;
}

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

.overllay {
    opacity: 0.9;
    background:  #000;
    backdrop-filter: blur(50px);
    z-index: 20;
}
</style>
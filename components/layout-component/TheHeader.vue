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
    <header class="relative transition-all">

        <div class="flex flex-col justify-between">
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
                                class="nav-item text-2xl cursor-pointer hover:border-[#025EFF] capitalize hover:text-[#025EFF] py-2 transition-all"
                                to="/">Home
                            </NuxtLink>
                        </li>

                        <li @click="isMouseEnter = false">
                            <NuxtLink
                                class="nav-item text-2xl cursor-pointer hover:border-[#025EFF] capitalize hover:text-[#025EFF] py-2 transition-all"
                                href="./about">about me
                            </NuxtLink>
                        </li>

                        <li @mouseover="showCategory()" class="flex flex-col items-center">
                            <button
                                class="nav-item text-2xl cursor-pointer hover:border-[#025EFF] capitalize hover:text-[#025EFF] py-2 transition-all"
                                href="./categories">Categories
                            </button>
                        </li>

                        <li @click="isMouseEnter = false">
                            <NuxtLink
                                class="nav-item text-2xl cursor-pointer hover:border-[#025EFF] capitalize hover:text-[#025EFF] py-2 transition-all"
                                href="./blog">Blog
                            </NuxtLink>
                        </li>
                    </ul>

                    <ViewComponentBaseButton size="2xl">
                        contact
                    </ViewComponentBaseButton>

                </div>
            </nav>

            <div :class="['absolute h-[200px] z-30 pb-12 pt-10 w-full top-24 opacity-0 bg-white', isMouseEnter && 'opacity-100']">
                <ul class="grid grid-cols-3 gap-12 w-1/4 mx-auto">
                    <li v-for="category in categories" :key="category.id" @click="isMouseEnter = false" class="text-2xl text-[#5F5F5F]">
                        <NuxtLink :to="`/categories/${category.id}`">{{ category.name }}</NuxtLink>
                    </li>
                </ul>
            </div>

        </div>
    </header>
    <div v-show="isMouseEnter" @mouseover="isMouseEnter = false" class="absolute inset-0 overllay"></div>
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
.overllay {
    opacity: 0.9;
    background: #000;
    backdrop-filter: blur(50px);
    z-index: 20;
}
</style>
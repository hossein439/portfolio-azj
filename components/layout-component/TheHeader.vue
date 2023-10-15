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
                                class="text-2xl cursor-pointer hover:border-[#025EFF] capitalize hover:text-[#025EFF] py-2 transition-all"
                                to="/">Home
                            </NuxtLink>
                        </li>

                        <li @click="isMouseEnter = false">
                            <NuxtLink
                                class="text-2xl cursor-pointer hover:border-[#025EFF] capitalize hover:text-[#025EFF] py-2 transition-all"
                                href="./about">about me
                            </NuxtLink>
                        </li>

                        <li @mouseover="showCategory()" class="flex flex-col items-center">
                            <button
                                class="text-2xl cursor-pointer hover:border-[#025EFF] capitalize hover:text-[#025EFF] py-2 transition-all"
                                href="./categories">Categories
                            </button>
                            <span
                                :class="['inline-block opacity-0 h-[3px] w-[32px] m-auto relative top-[8px] bg-[#025EFF]', (isMouseEnter) && 'opacity-100']"></span>
                        </li>

                        <li @click="isMouseEnter = false">
                            <NuxtLink
                                class="text-2xl cursor-pointer hover:border-[#025EFF] capitalize hover:text-[#025EFF] py-2 transition-all"
                                href="./blog">Blog
                            </NuxtLink>
                        </li>

                    </ul>

                    <button
                        class="flex justify-center ml-16 py-2 px-4 rounded-lg capitalize text-[#025EFF] border-2 border-[#025EFF]">contact
                    </button>

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
.router-link-active {
    border-color: #025EFF;
    color: #025EFF;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.router-link-active::after {
    content: '';
    display: inline-block;
    height: 3px;
    width: 32px;
    position: relative;
    top: 8px;
    background-color: #025EFF;
}

.overllay {
    opacity: 0.9;
    background: #000;
    backdrop-filter: blur(50px);
    z-index: 20;
}
</style>
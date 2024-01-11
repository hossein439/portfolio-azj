<script setup>
import { useUiStore } from '@/stores/views/ui'

const categories = ref([]);
const getGategories = async () => {
    const data = await $fetch('/api/categories/getAll',{
        method: 'GET',
    });
    categories.value = data;
}

getGategories();

const uiStore = useUiStore()

</script>

<template>
    <Transition name="slide-fade">
        <div v-if="uiStore.isToggled"
            class="h-screen fixed w-full z-[60] top-0 flex flex-col gap-12 bg-[#1C1C1C] transition-all">
            <div class="flex justify-between px-4 py-[50px]">
                <IconsLogoNav></IconsLogoNav>
                <ViewComponentHamburgerMenu></ViewComponentHamburgerMenu>
            </div>

            <ul class="flex flex-col gap-8 items-center relative z-30">

                <li @click="uiStore.isToggled = false">
                    <NuxtLink
                        class="text-2xl border-transparent cursor-pointer text-[#FFFFFF] capitalize py-2 transition-all"
                        to="/">Home
                    </NuxtLink>
                </li>

                <li @click="uiStore.isToggled = false">
                    <NuxtLink
                        class="text-2xl border-transparent cursor-pointer text-[#FFFFFF] capitalize py-2 transition-all"
                        href="/about">about me
                    </NuxtLink>
                </li>

                <li @click="uiStore.handleActiveSection" class="flex flex-col items-center">
                    <button class="text-2xl border-transparent cursor-pointer text-[#FFFFFF] capitalize py-2 transition-all"
                        href="#">Categories
                    </button>
                </li>

                <li @click="uiStore.isToggled = false">
                    <NuxtLink
                        class="text-2xl border-transparent cursor-pointer text-[#FFFFFF] capitalize py-2 transition-all"
                        href="/blog">Blog
                    </NuxtLink>
                </li>

            </ul>
        </div>
    </Transition>
    <Transition name="slide-fade">
        <div v-if="uiStore.isToggled && uiStore.activeSection"
            class="h-screen fixed w-full z-[60] top-0 flex flex-col bg-[#1C1C1C] transition-all">
            <div class="flex justify-between px-4 py-[50px]">
                <IconsArrowRight @click="uiStore.activeSection = false"></IconsArrowRight>
                <h1 class="text-2xl text-[#FFFFFF]">Category</h1>
                <ViewComponentHamburgerMenu></ViewComponentHamburgerMenu>
            </div>

            <ul class="flex flex-col items-center h-full overflow-auto pb-5 gap-8">
                <li v-for="category in categories" :key="category.id" @click="uiStore.isToggled = false" class="text-2xl text-[#5F5F5F] capitalize">
                    <NuxtLink :to="`/categories/${category.id}`">{{ category.name }}</NuxtLink>
                </li>
            </ul>
        </div>
    </Transition>
</template>

<style scoped>
.slide-fade-enter-active {
    transition: all 0.4s;
}

.slide-fade-leave-active {
    transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(100%);
}
</style>
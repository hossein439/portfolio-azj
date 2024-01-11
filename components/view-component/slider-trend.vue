<script setup>

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const props = defineProps({
    showCategory: {
        type: Boolean,
        default: false
    }
});

const breakpoints = {
    320: {
        itemsToShow: 2,
        snapAlign: 'start',
    },
    768: {
        itemsToShow: 3,
        snapAlign: 'start',
    },
    1024: {
        itemsToShow: 4,
        snapAlign: 'start',
    },
}

const carousel = ref(null)

const filters = ref();

const next = () => {
    carousel.value.next()
}
const prev = () => {
    carousel.value.prev()
}
const getAllFilters = async () => {
    const data = await $fetch('/api/effects/getByLimit', {
        method: 'GET',
        params: {
            offset: 0,
            limit: 5
        }
    });
    filters.value = data;
}

getAllFilters();



</script>
<template>
    <div class="xs:mx-5 md:mx-10 lg:mx-12 mt-12">
        <Carousel ref="carousel" :breakpoints="breakpoints" :wrap-around="true">
            <Slide v-for="filter in filters" :key="filter.id">
                <div class="w-full">
                    <div class="xs:w-full xs:h-[130px] md:h-[365px] lg:h-[465px] relative z-10">
                        <img class="xs:w-full h-full object-cover rounded-2xl" :src="setImageUrl(filter.gif)"
                            :alt="filter.alt">
                        <div class="slide-item absolute right-0 left-0 rounded-2xl flex flex-col text-center">
                            <div class="w-[30px] absolute z-50 top-4 left-4">
                                <img class="inline-block h-full w-full object-cover" src="~/assets/images/icon-tiktok.svg"
                                    alt="tiktok icon">
                            </div>
                            <div class="absolute w-full bottom-[80px]">
                                <div class="h-[128px] w-[128px] mx-auto mt-[82px]">
                                    <img class="inline-block h-full w-[300px] object-cover" :src="setImageUrl(filter.image)"
                                        :alt="filter.alt">
                                </div>
                                <span class="text-2xl text-white font-medium capitalize">{{ filter.name }}</span>
                                <a :href="filter.link"
                                    class="flex justify-center relative z-30 my-6 mx-9 py-2 px-12 rounded-lg capitalize text-white border-2 border-[#025EFF] bg-[#025EFF] cursor-pointer">
                                    try effect
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col xs:mt-2">
                        <p class="flex items-center gap-2">
                            <IconsStarIcon class="xs:w-[11px] lg:w-[24px] xs:h-[11px] lg:h-[24px]"></IconsStarIcon>
                            <span class="xs:text-[11px] lg:text-[28px] font-medium capitalize">{{ filter.name }}</span>
                        </p>
                        <p v-if="showCategory" class="flex items-center gap-2">
                            <IconsMenuIcon class="xs:w-[11px] lg:w-[24px] xs:h-[11px] lg:h-[24px]"></IconsMenuIcon>
                            <span class="xs:text-[11px] lg:text-[28px] font-medium capitalize">{{ filter.categories.name
                            }}</span>
                        </p>
                    </div>
                </div>
            </Slide>
        </Carousel>
        <div class="relative -z-10 xs:bottom-[7.5rem] md:bottom-[15rem] lg:bottom-[22rem] flex justify-between">
            <button @click="next"
                class="mb-10 xs:-ml-[2rem] lg:-ml-28 cursor-pointer bg-[#5593FF] text-[#E6EFFF] lg:w-[80px] xs:w-[33px] lg:h-[80px] xs:h-[33px] rounded-full relative shadow-md hover:bg-[#025EFF] transition-all -rotate-180">
                <svg class="absolute inset-0 w-full m-auto" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                    viewBox="0 0 32 32" fill="none">
                    <path d="M12 24L20 16L12 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </button>
            <button @click="prev"
                class="mb-10 xs:-mr-[2rem] lg:-mr-28 cursor-pointer bg-[#5593FF] text-[#E6EFFF] lg:w-[80px] xs:w-[33px] lg:h-[80px] xs:h-[33px] rounded-full relative shadow-md hover:bg-[#025EFF] transition-all">
                <svg class="absolute inset-0 w-full m-auto rotate-270" xmlns="http://www.w3.org/2000/svg" width="32"
                    height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M12 24L20 16L12 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </button>
        </div>
    </div>
</template>

<style scoped>
.carousel__item {
    min-height: 200px;
    width: 100%;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel__slide {
    padding: 10px;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
}
</style>
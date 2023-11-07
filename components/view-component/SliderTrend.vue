<script setup>
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import axios from 'axios';

const props = defineProps({
    showCategory: {
        type: Boolean,
        default: false
    }
});

const filters = ref();

const getAllFilters = async () => {
    const data = await axios({
        method: 'get',
        url: 'http://localhost:4000/effect',
    });
    filters.value = data.data;
}

getAllFilters();

const options = reactive({
    focus: 'center',
    perPage: 4,
    rewind: true,
    gap: '24px',
    perMove: 1,
    pagination: false,
    breakpoints: {
        320: {
            perPage: 1
        },
        425: {
            perPage: 1
        },
        768: {
            perPage: 3 
        },
        1080: {
            perPage: 3
        }
    }
});

</script>
<template>
    <div class="xs:mx-8 lg:mx-12 mt-12">
        <Splide :options="options" :has-track="false">
            <SplideTrack>
                <SplideSlide v-for="filter in filters" :key="filter.id">
                    <div class="slide-container xs:h-[130px] lg:h-[465px] relative z-10">
                        <img class="h-full object-cover rounded-2xl" :src="`_nuxt/uploads/${filter.gif}`" alt="">
                        <div class="slide-item absolute right-0 left-0 rounded-2xl flex flex-col text-center">
                            <div class="w-[30px] absolute z-50 top-4 left-4">
                                <img class="inline-block h-full w-full object-cover" src="~/assets/images/icons/icon-tiktok.svg"
                                    alt="">
                            </div>
                            <div class="absolute w-full bottom-[80px]">
                                <div class="h-[128px] w-[128px] mx-auto mt-[82px]">
                                    <img class="inline-block h-full w-full object-cover" :src="`_nuxt/uploads/${filter.image}`"
                                        alt="">
                                </div>
                                <span class="text-2xl text-white font-medium capitalize">{{ filter.name }}</span>
                                <a :href="filter.link"
                                    class="flex justify-center relative z-30 my-6 mx-9 py-2 px-12 rounded-lg capitalize text-white border-2 border-[#025EFF] bg-[#025EFF] cursor-pointer">
                                    try effect
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <p class="flex items-center gap-2">
                            <img src="~/assets/images/icons/stars.svg" alt="">
                            <span class="text-[28px] font-medium capitalize">{{ filter.name }}</span>
                        </p>
                        <p v-if="showCategory" class="flex items-center gap-2">
                            <img src="~/assets/images/icons/menu.svg" alt="">
                            <span class="text-[28px] font-medium capitalize">{{ filter.categoryName }}</span>
                        </p>
                    </div>
                </SplideSlide>
            </SplideTrack>
    
            <div class="splide__arrows relative -z-10 bottom-[22rem] flex justify-between mx-auto">
                <button class="splide__arrow--prev mb-10 xs:-ml-12 lg:-ml-28 cursor-pointer bg-[#5593FF] text-[#E6EFFF] lg:w-[80px] xs:w-[33px] lg:h-[80px] xs:h-[33px] rounded-full relative shadow-md hover:bg-[#025EFF] transition-all">
                    <svg class="absolute inset-0 w-full m-auto" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M12 24L20 16L12 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
                <button class="splide__arrow--next mb-10 xs:-mr-12 lg:-mr-28 cursor-pointer bg-[#5593FF] text-[#E6EFFF] lg:w-[80px] xs:w-[33px] lg:h-[80px] xs:h-[33px] rounded-full relative shadow-md hover:bg-[#025EFF] transition-all">
                    <svg class="absolute inset-0 w-full m-auto rotate-270" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M12 24L20 16L12 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </Splide>
    </div>
</template>
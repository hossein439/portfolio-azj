<script setup>
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
import axios from 'axios';

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
    rewind: true
});

</script>
<template>
    <Splide :has-track="false" :options="options" >
        <SplideTrack v-for="filter in filters">
            <SplideSlide >
                <div class="h-96 relative">
                    <img class="two h-full object-cover rounded-2xl" :src="`_nuxt/uploads/${filter.gif}`" alt="">
                    <div class="one absolute inset-0 rounded-2xl flex flex-col text-center">
                        <div class="w-[30px] absolute z-50 top-4 left-4">
                            <img class="inline-block h-full w-full object-cover" src="~/assets/images/icons/icon-tiktok.svg"
                                alt="">
                        </div>
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
                <div class="flex flex-col">
                    <p class="flex items-center gap-2">
                        <img src="~/assets/images/icons/stars.svg" alt="">
                        <span class="text-[28px] font-medium capitalize">{{ filter.name }}</span>
                    </p>
                    <p class="flex items-center gap-2">
                        <img src="~/assets/images/icons/menu.svg" alt="">
                        <span class="text-[28px] font-medium capitalize">{{ filter.categoryName }}</span>
                    </p>
                </div>
            </SplideSlide>
        </SplideTrack>

        <div class="splide__arrows">
            <button class="mb-10 cursor-pointer">
                <img src="~/assets/images/icons/arrow-btn.png" alt="">
            </button>
            <button class="mb-10 cursor-pointer">
                <img src="~/assets/images/icons/arrow-btn.png" class="rotate-180" alt="">
            </button>
        </div>
    </Splide>
</template>
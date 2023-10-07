<script setup>
import axios from 'axios';

const filters = ref();

const getAllFilters = async () => {
    const data = await axios({
        method: 'get',
        url: 'http://localhost:4000/filter',
    });
    filters.value = data.data;
    console.log(filters.value)
}

getAllFilters();

</script>

<template>
    <div class="flex justify-between items-center gap-6">

        <button class="mb-10 cursor-pointer">
            <img src="~/assets/images/icons/arrow-btn.png" alt="">
        </button>

        <div class="grid grid-cols-4 gap-3 justify-center py-6">

            <div v-for="filter in filters">
                <div class="h-96">
                    <img class="h-full object-cover rounded-2xl" :src="`_nuxt/uploads/${filter.image}`" alt="">
                </div>
                <div class="flex flex-col">
                    <button class="flex items-center gap-2 cursor-pointer">
                        <img src="~/assets/images/icons/stars.svg" alt="">
                        <span class="text-[28px] font-medium capitalize">{{ filter.feature }}</span>
                    </button>
                    <button class="flex items-center gap-2 cursor-pointer">
                        <img src="~/assets/images/icons/menu.svg" alt="">
                        <span class="text-[28px] font-medium capitalize">{{ filter.category }}</span>
                    </button>
                </div>
            </div>

        </div>

        <button class="mb-10 cursor-pointer">
            <img src="~/assets/images/icons/arrow-btn.png" class="rotate-180" alt="">
        </button>

    </div>
</template>
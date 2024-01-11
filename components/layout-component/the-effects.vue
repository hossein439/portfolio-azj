<script setup>

defineProps({
    title: {
        type: String
    }
});

const effects = ref([]);
const limit = 6;
const isExistEffects = ref(false);
let offset = 0;

const getAllEffects = async () => {
    const data = await $fetch('/api/effects/getByLimit',{
        method: 'GET',
        params: {
            offset,
            limit
        }
    });
    effects.value = [...effects.value, ...data];
    if (data.length < limit) isExistEffects.value = true;
    if (data.length > 0) {
        offset += limit;
    }
}

getAllEffects();

</script>

<template>
    <section class="xs:px-4 xl:px-[176px]">
        <h3 class="xs:text-[32px] lg:text-4xl pb-6 text-center font-bold text-[#0E101C] capitalize">{{ title }}</h3>

        <div class="grid xs:grid-cols-4 lg:grid-cols-6 justify-center xs:gap-0 lg:gap-1 xs:px-8 lg:px-18">
            <template v-for="effect in effects" :key="effect.id">
                <a :href="effect.link" class="w-min h-min mx-auto">
                    <div
                        class="cnt relative xs:w-[57px] lg:w-[160px] xs:h-[57px] lg:h-[160px] flex justify-center items-center">
                        <div class="bg-first">
                            <img class="mx-auto object-contain border-2 border-transparent transition-all"
                                :src="setImageUrl(effect.image)" :alt="effect.alt">
                        </div>
                        <div class="xs:hidden md:block bg-second"></div>
                        <div class="xs:hidden md:block bg-third"></div>
                    </div>
                </a>
            </template>
        </div>
        <div v-if="!isExistEffects" class="relative">
            <div class="grid xs:grid-cols-4 lg:grid-cols-6 justify-center xs:px-8 lg:px-18">
                <div class="lg:h-[160px] lg:w-[160px] mx-auto xs:w-9 lg:p-4">
                    <img class="opacity-5 h-full w-full object-cover" src="~/assets/images/effect-21.png" alt="">
                </div>
                <div class="lg:h-[160px] lg:w-[160px] mx-auto xs:w-9 lg:p-4">
                    <img class="opacity-5 h-full w-full object-cover" src="~/assets/images/effect-22.png" alt="">
                </div>
                <div class="lg:h-[160px] lg:w-[160px] mx-auto xs:w-9 lg:p-4">
                    <img class="opacity-5 h-full w-full object-cover" src="~/assets/images/effect-23.png" alt="">
                </div>
                <div class="lg:h-[160px] lg:w-[160px] mx-auto xs:w-9 lg:p-4">
                    <img class="opacity-5 h-full w-full object-cover" src="~/assets/images/effect-24.png" alt="">
                </div>
                <div class="lg:h-[160px] lg:w-[160px] mx-auto xs:w-9 lg:p-4 xs:hidden lg:inline">
                    <img class="opacity-5 h-full w-full object-cover" src="~/assets/images/effect-25.png" alt="">
                </div>
                <div class="lg:h-[160px] lg:w-[160px] mx-auto xs:w-9 lg:p-4 xs:hidden lg:inline">
                    <img class="opacity-5 h-full w-full object-cover" src="~/assets/images/effect-26.png" alt="">
                </div>
            </div>
            <div class="absolute top-[3.7rem] left-0 right-0">
                <ViewComponentBaseButton @click="getAllEffects()" class="mx-auto">load more
                </ViewComponentBaseButton>
            </div>
        </div>
    </section>
</template>

<style scoped>
.div1 {
    width: 168px;
    height: 170px;
    background: #FAFAFA;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

.div1:hover {
    background-color: red;
    transition: all .3s;
}

.div2 {
    width: 158px;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FAFAFA;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

.bg-first {

    position: absolute;
    margin: auto;
    width: 90%;
    height: 90%;
    background-size: cover;
    background-position: center;
    -webkit-clip-path: polygon(50% 9%, 85% 29%, 85% 70%, 50% 91%, 14% 69%, 14% 29%);
    clip-path: polygon(50% 9%, 85% 29%, 85% 70%, 50% 91%, 14% 69%, 14% 29%);
    padding: 5px;
    z-index: 2;
}

.bg-second {
    position: absolute;
    margin: auto;
    width: 95%;
    height: 95%;
    z-index: 1;
    background-color: #fafafa;
    -webkit-clip-path: polygon(50% 9%, 85% 29%, 85% 70%, 50% 91%, 14% 69%, 14% 29%);
    clip-path: polygon(50% 9%, 85% 29%, 85% 70%, 50% 91%, 14% 69%, 14% 29%)
}

.bg-third {
    opacity: 0;
    transition: all 1s;
    position: absolute;
    width: 100%;
    height: 100%;
    /*  top: 0;
  bottom: 0; */
    background-color: #0043b4;
    clip-path: polygon(50% 9%, 85% 29%, 85% 70%, 50% 91%, 14% 69%, 14% 29%);
}

.cnt:hover>.bg-third {
    opacity: 1;
}
</style>
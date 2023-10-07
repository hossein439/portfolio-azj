<script setup>
import axios from 'axios';

const effects = ref();

const getAllEffects = async () => {
    const data = await axios({
        method: 'get',
        url: 'http://localhost:4000/effect',
    });
    effects.value = data.data;
    console.log(effects.value)
}

const setImageUrl = (imageName) => {
    const path = `../../uploads/${imageName}`;
    return new URL(path, import.meta.url).href;
} 

getAllEffects();

</script>

<template>
    <section>
        <h3 class="text-4xl pb-6 pt-12 text-center font-bold text-[#0E101C]">Try my effects</h3>

        <div class="grid grid-cols-6 justify-center gap-1 xs:px-10 lg:px-24">
            <template v-for="effect in effects" :key="effect.id">
                <img class="mx-auto object-contain border-2 border-transparent hover:drop-shadow-lg transition-all" width="158"
                height="160" :src="setImageUrl(effect.image)" :alt="effect.alt">
            </template>
            <!-- <img class="mx-auto object-contain border-2 border-transparent hover:drop-shadow-lg transition-all" width="158"
                height="160" src="~/assets/images/effects/effect-1.png" alt="">
            <img class="mx-auto object-contain border-2 border-transparent hover:drop-shadow-lg transition-all" width="158"
                height="160" src="~/assets/images/effects/effect-2.png" alt="">
            <img class="mx-auto object-contain border-2 border-transparent hover:drop-shadow-lg transition-all" width="158"
                height="160" src="~/assets/images/effects/effect-3.png" alt="">
            <img class="mx-auto object-contain border-2 border-transparent hover:drop-shadow-lg transition-all" width="158"
                height="160" src="~/assets/images/effects/effect-4.png" alt="">
            <img class="mx-auto object-contain border-2 border-transparent hover:drop-shadow-lg transition-all" width="158"
                height="160" src="~/assets/images/effects/effect-5.png" alt="">
            <img class="mx-auto object-contain border-2 border-transparent hover:drop-shadow-lg transition-all" width="158"
                height="160" src="~/assets/images/effects/effect-6.png" alt="">
            <img class="mx-auto object-contain border-2 border-transparent hover:drop-shadow-lg transition-all" width="158"
                height="160" src="~/assets/images/effects/effect-7.png" alt="">
            <img class="mx-auto object-contain border-2 border-transparent hover:drop-shadow-lg transition-all" width="158"
                height="160" src="~/assets/images/effects/effect-8.png" alt="">
            <img class="mx-auto object-contain border-2 border-transparent hover:drop-shadow-lg transition-all" width="158"
                height="160" src="~/assets/images/effects/effect-9.png" alt="">
            <img class="mx-auto object-contain border-2 border-transparent hover:drop-shadow-lg transition-all" width="158"
                height="160" src="~/assets/images/effects/effect-10.png" alt="">
            <img class="mx-auto object-contain border-2 border-transparent hover:drop-shadow-lg transition-all" width="158"
                height="160" src="~/assets/images/effects/effect-11.png" alt="">
            <img class="mx-auto object-contain border-2 border-transparent hover:drop-shadow-lg transition-all" width="158"
                height="160" src="~/assets/images/effects/effect-12.png" alt="">
            <img class="mx-auto object-contain border-2 border-transparent hover:drop-shadow-lg transition-all" width="158"
                height="160" src="~/assets/images/effects/effect-13.png" alt="">
            <img class="mx-auto object-contain border-2 border-transparent hover:drop-shadow-lg transition-all" width="158"
                height="160" src="~/assets/images/effects/effect-14.png" alt="">
            <img class="mx-auto object-contain border-2 border-transparent hover:drop-shadow-lg transition-all" width="158"
                height="160" src="~/assets/images/effects/effect-15.png" alt="">
            <img class="mx-auto object-contain border-2 border-transparent hover:drop-shadow-lg transition-all" width="158"
                height="160" src="~/assets/images/effects/effect-16.png" alt="">
            <img class="mx-auto object-contain border-2 border-transparent hover:drop-shadow-lg transition-all" width="158"
                height="160" src="~/assets/images/effects/effect-17.png" alt="">
            <img class="mx-auto object-contain border-2 border-transparent hover:drop-shadow-lg transition-all" width="158"
                height="160" src="~/assets/images/effects/effect-18.png" alt="">
            <img class="mx-auto object-contain border-2 border-transparent hover:drop-shadow-lg transition-all" width="158"
                height="160" src="~/assets/images/effects/effect-19.png" alt="">
            <img class="mx-auto object-contain border-2 border-transparent hover:drop-shadow-lg transition-all" width="158"
                height="160" src="~/assets/images/effects/effect-20.png" alt="">
            <img class="mx-auto object-contain border-2 border-transparent hover:drop-shadow-lg transition-all" width="158"
                height="160" src="~/assets/images/effects/effect-21.png" alt="">
            <img class="mx-auto object-contain border-2 border-transparent hover:drop-shadow-lg transition-all" width="158"
                height="160" src="~/assets/images/effects/effect-22.png" alt="">
            <img class="mx-auto object-contain border-2 border-transparent hover:drop-shadow-lg transition-all" width="158"
                height="160" src="~/assets/images/effects/effect-23.png" alt="">
            <img class="mx-auto object-contain border-2 border-transparent hover:drop-shadow-lg transition-all" width="158"
                height="160" src="~/assets/images/effects/effect-24.png" alt="">
            <img class="mx-auto object-contain border-2 border-transparent hover:drop-shadow-lg transition-all" width="158"
                height="160" src="~/assets/images/effects/effect-25.png" alt="">
            <img class="mx-auto object-contain border-2 border-transparent hover:drop-shadow-lg transition-all" width="158"
                height="160" src="~/assets/images/effects/effect-26.png" alt="">
            <img class="mx-auto object-contain border-2 border-transparent hover:drop-shadow-lg transition-all" width="158"
                height="160" src="~/assets/images/effects/effect-27.png" alt="">
            <img class="mx-auto object-contain border-2 border-transparent hover:drop-shadow-lg transition-all" width="158"
                height="160" src="~/assets/images/effects/effect-28.png" alt="">
            <img class="mx-auto object-contain border-2 border-transparent hover:drop-shadow-lg transition-all" width="158"
                height="160" src="~/assets/images/effects/effect-29.png" alt="">
            <img class="mx-auto object-contain border-2 border-transparent hover:drop-shadow-lg transition-all" width="158"
                height="160" src="~/assets/images/effects/effect-30.png" alt="">
            <img class="mx-auto object-contain border-2 border-transparent hover:drop-shadow-lg transition-all" width="158"
                height="160" src="~/assets/images/effects/effect-31.png" alt="">
            <img class="mx-auto object-contain border-2 border-transparent hover:drop-shadow-lg transition-all" width="158"
                height="160" src="~/assets/images/effects/effect-32.png" alt="">
            <img class="mx-auto object-contain border-2 border-transparent hover:drop-shadow-lg transition-all" width="158"
                height="160" src="~/assets/images/effects/effect-33.png" alt="">
            <img class="mx-auto object-contain border-2 border-transparent hover:drop-shadow-lg transition-all" width="158"
                height="160" src="~/assets/images/effects/effect-34.png" alt="">
            <img class="mx-auto object-contain border-2 border-transparent hover:drop-shadow-lg transition-all" width="158"
                height="160" src="~/assets/images/effects/effect-35.png" alt="">
            <img class="mx-auto object-contain border-2 border-transparent hover:drop-shadow-lg transition-all" width="158"
                height="160" src="~/assets/images/effects/effect-36.png" alt=""> -->

        </div>

        <button
            class="flex justify-center my-6 mx-auto py-2 px-4 rounded-lg capitalize text-[#025EFF] border-2 border-[#025EFF]">Load
            more work</button>

    </section>
</template>
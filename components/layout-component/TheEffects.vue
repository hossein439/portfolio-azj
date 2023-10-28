<script setup>
import axios from 'axios';

defineProps({
    title: {
        type: String
    }
});

const effects = ref();

const getAllEffects = async () => {
    const data = await axios({
        method: 'get',
        url: 'http://localhost:4000/effect',
    });
    effects.value = data.data;
}

const setImageUrl = (imageName) => {
    const path = `../../uploads/${imageName}`;
    return new URL(path, import.meta.url).href;
}

getAllEffects();

</script>

<template>
    <section class="px-[176px]">
        <h3 class="text-4xl pb-6 pt-12 text-center font-bold text-[#0E101C]">{{title}}</h3>

        <div class="grid grid-cols-6 justify-center gap-1 xs:px-10 lg:px-24">
            <template v-for="effect in effects" :key="effect.id">
                <a :href="effect.link">
                    <img class="mx-auto object-contain border-2 border-transparent hover:drop-shadow-lg transition-all"
                        width="158" height="160" :src="setImageUrl(effect.image)" :alt="effect.alt">
                </a>
            </template>

        </div>

        <button
            class="flex justify-center my-6 mx-auto py-2 px-4 rounded-lg capitalize text-[#025EFF] border-2 border-[#025EFF]">Load
            more work</button>

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
</style>
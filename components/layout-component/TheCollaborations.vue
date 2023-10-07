<script setup>
import axios from 'axios';

const collaborations = ref();

const getAllCollaboration = async () => {
    const data = await axios({
        method: 'get',
        url: 'http://localhost:4000/collaboration',
    });
    collaborations.value = data.data;
    console.log(collaborations.value)
}

const setImageUrl = (imageName) => {
    const path = `../../uploads/${imageName}`;
    return new URL(path, import.meta.url).href;
} 

getAllCollaboration();

</script>
<template>
    <section class="py-60">
        <h3 class="text-4xl text-center font-bold text-[#0E101C]">Collaborations</h3>
        <div class="flex justify-evenly flex-wrap py-8 gap-8 items-center m-6 bg-[#272727]">
            <template v-for="collaboration in collaborations" 
                :key="collaboration.id">
                <img  
                :src="setImageUrl(collaboration.image)" alt="">
            </template>
        </div>
    </section>
</template>
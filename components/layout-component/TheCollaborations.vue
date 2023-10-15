<script setup>
import axios from 'axios';
const collaborations = ref();

const getAllCollaboration = async () => {
    const data = await axios({
        method: 'get',
        url: 'http://localhost:4000/collaboration',
    });
    collaborations.value = data.data;
    checkFadeIn();
}

const setImageUrl = (imageName) => {
    const path = `../../uploads/${imageName}`;
    return new URL(path, import.meta.url).href;
}

getAllCollaboration();

function checkFadeIn() {
    const fadeIns = document.querySelectorAll('.fade-in');
    let counter = 0;
    fadeIns.forEach((fade, index) => {
        const rect = fade.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top >= 0 && rect.top <= windowHeight) {
            if (!fade.classList.contains('active')) {
                counter = counter + .5;
                fade.classList.add('active');
                fade.style.animationDelay = `${counter}s`;
            }
        } else {
            fade.classList.remove('active');
        }
    });
}

onMounted(() => {
    window.addEventListener('scroll', checkFadeIn);
    window.addEventListener('resize', checkFadeIn);
    checkFadeIn();
})

</script>


<template>
    <section id="collaboration" class="py-60 px-32">
        <h3 class="text-4xl text-center font-bold text-[#0E101C]">Collaborations</h3>
        <div class="grid grid-cols-4 items-center m-6">
            <template v-for="(collaboration, index) in collaborations" :key="collaboration.id">
                <div class="flex px-4 py-8 h-full bg-[#272727] fade-in">
                    <img class="inline-block w-full h-full object-contain" :src="setImageUrl(collaboration.image)" alt="">
                </div>
            </template>
        </div>
    </section>
</template>

<style scoped>
.fade-in {
    /* width: 100px;
    height: 100px;
    background-color: #3498db;
    position: relative;
    opacity: 0; */
    opacity: 0;
    transform: translateY(200px);
}

.fade-in.active {
    animation: fade .5s ease-in-out forwards;
}

@keyframes fade {
    0% {
        opacity: 0;
        transform: translateY(200px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.container {
    display: flex;
}
</style>
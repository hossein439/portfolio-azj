<script setup>
const collaborations = ref();

const getAllCollaboration = async () => {
    const data = await $fetch('/api/collaborations/getAll',{
        method: 'GET',
    });
    collaborations.value = data;
}

getAllCollaboration();

function checkFadeIn() {
    const fadeIns = document.querySelectorAll('.fade-in-coll');
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
    <section id="collaboration" class="xs:px-8 xl:px-32">
        <h3 class="xs:text-[32px] lg:text-4xl text-center font-bold text-[#0E101C]">Collaborations</h3>
        <div class="flex flex-wrap items-center my-6">
            <template v-for="(collaboration, index) in collaborations" :key="collaboration.id">
                <div class="flex xs:px-[6px] xs:py-[14px] lg:px-4 lg:py-8 w-1/4 xs:h-12 lg:h-[165px] bg-[#272727] fade-in-coll">
                    <img class="inline-block w-full h-full object-contain" :src="setImageUrl(collaboration.image)" alt="">
                </div>
            </template>
        </div>
    </section>
</template>

<style scoped>
.fade-in-coll {
    opacity: 0;
    transform: translateY(200px);
}

.fade-in-coll.active {
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

</style>
<script setup>
import axios from 'axios'

const route = useRoute();

const category = reactive({
    name: null,
    description: null,
    image: null
});
const imageSrc = ref();

const setImageUrl = (imageName) => {
    const path = `../../../uploads/${imageName}`;
    return new URL(path, import.meta.url).href;
}

const getSingle = async () => {
    const data = await axios({
        method: 'get',
        url: `http://localhost:4000/category/${route.params.id}`,
    });
    const { name, image, description } = data.data[0];
    category.name = name;
    category.image = image;
    category.description = description;

    imageSrc.value = setImageUrl(image);
}

getSingle()
</script>

<template>
    <Title>categories</Title>
    <section class="px-[176px]">
        <div class="w-full h-[400px]">
            <img class="inline-block w-full h-full object-cover rounded-lg" :src="imageSrc" alt="">
        </div>
        <p class="text-2xl pt-8 pb-12">{{ category.name }}</p>
        <p class="text-2xl pt-8 pb-12">{{ category.description }}</p>

    </section>

    <section class="px-[80px]">
        <ViewComponentSliderTrend></ViewComponentSliderTrend>
    </section>

    <section>
        <h3 class="text-4xl pb-6 pt-12 text-center font-bold capitalize text-[#0E101C]">all sport effect</h3>


        <LayoutComponentTheEffects title="all sport effect"></LayoutComponentTheEffects>

        <div class="relative -top-32 py-4 hello-1">
            <button
                class="flex justify-center my-6 mx-auto py-2 px-4 rounded-lg capitalize text-[#025EFF] border-2 border-[#025EFF]">Load
                more work</button>
        </div>



    </section>

    <section class="pb-16">
        <h4 class="text-5xl leading-[76px] font-semibold text-center">Do you need a sport <br>effect?
        </h4>
        <button
            class="flex justify-center mx-auto mt-4 py-2 px-4 rounded-lg capitalize text-[#025EFF] border-2 border-[#025EFF] shadow-md">
            get in touch
        </button>
    </section>
</template>

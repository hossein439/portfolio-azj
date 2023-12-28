<script setup>

const route = useRoute();

const category = reactive({
    name: null,
    description: null,
    image: null
});
const imageSrc = ref();

const getSingle = async () => {

    const data = await $fetch(`/api/categories/${route.params.id}`, {
        method: 'GET'
    })

    const { name, image, description } = data[0];
    category.name = name;
    category.image = image;
    category.description = description;

    imageSrc.value = setImageUrl(image);
}

getSingle()
</script>

<template>
    <Title>categories</Title>
    <section class="xs:px-4 lg:px-[176px]">
        <div class="w-full xs:h-[130px] lg:h-[400px]">
            <img class="inline-block w-full h-full object-cover rounded-lg" :src="imageSrc" alt="">
        </div>
        <p class="xs:text-[28px] lg:text-[42px] font-[400] xs:py-4 lg:py-8">{{ category.name }}</p>
        <p class="xs:text-[18px] lg:text-2xl">{{ category.description }}</p>

    </section>

    
    <section class="fade-in xs:px-4 lg:px-[72px]">
        <ViewComponentSliderTrend></ViewComponentSliderTrend>
    </section>

    <div class="mb-[140px]"></div>

    <LayoutComponentTheEffects :title="`all ${category.name} effect`" class="fade-in"></LayoutComponentTheEffects>

    <div class="divider"></div>

    <section class="pb-16 fade-in">
        <h4 class="xs:text-[28px] lg:text-5xl lg:leading-[76px] font-semibold text-center">Do you need a sport <br>effect?
        </h4>
        <button
            class="flex justify-center mx-auto mt-4 py-2 px-4 rounded-lg capitalize text-[#025EFF] border-2 border-[#025EFF] shadow-md">
            get in touch
        </button>
    </section>

    <div class="divider"></div>

</template>

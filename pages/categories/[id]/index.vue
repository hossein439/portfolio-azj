<script setup>

const route = useRoute();

const category = reactive({
    name: null,
    description: null,
    image: null
});
const imageSrc = ref();

const setImageUrl = (imageName) => {
    const path = `../../uploads/${imageName}`;
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
    console.log(data.data[0])
}

getSingle()
</script>

<template>
    <Title>categories</Title>
    <section class="px-[176px]">
        <div>
            <img class="rounded-lg" :src="imageSrc" alt="">
        </div>
        <p class="text-2xl pt-8 pb-12" >{{ category.description }}</p>

    </section>
    <section class="px-[80px]">
        <LayoutComponentTheTrendFilter></LayoutComponentTheTrendFilter>
    </section>

    <section class="px-[176px]">
        <h3 class="text-4xl pb-6 pt-12 text-center font-bold capitalize text-[#0E101C]">all sport effect</h3>

        <div class="grid grid-cols-6 justify-center gap-1 xs:px-10 lg:px-24">
            <img class="mx-auto object-contain border-2 border-transparent hover:drop-shadow-lg transition-all" width="158"
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
                height="160" src="~/assets/images/effects/effect-36.png" alt="">

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
                height="160" src="~/assets/images/effects/effect-36.png" alt="">
        </div>

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

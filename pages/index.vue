<script setup>
definePageMeta({
    layout: "customheader",
});
// const { useFadeIn } = checkFadeIn();
// onMounted(() => useFadeIn())

</script>


<template>
    <main>
        <div class="divider"></div>
        <section class="fade-in xs:mx-4 lg:mx-[85px] flex justify-center items-center lg:py-24 md:py-4">
            <article
                class="xs:p-4 lg:px-[85px] rounded-2xl lg:py-16 shadow-[2px_2px_5px_0px_rgba(53,53,53,0.50)] bg-[#FFF] text-[#0E101C]">
                <h2 class="text-5xl font-semibold capitalize">about me</h2>
                <p class="pt-12 pb-16">Hi! I’m Jawad, also known as <strong class="text-[#025EFF]">AZJ</strong>. I weave
                    AR magic as a
                    TikTok Effect House Ambassador,
                    spreading joy and wonder. Let's create enchanting experiences together!</p>

                <RouterLink to="about">
                    <ViewComponentBaseButton class="mx-auto">more</ViewComponentBaseButton>
                </RouterLink>
            </article>
        </section>

        <div class="divider"></div>

        <section class="fade-in xs:px-4 lg:px-[72px]">
            <h3 class="text-4xl text-center font-bold text-[#0E101C]">My trending filters</h3>
            <ViewComponentSliderTrend :show-category="true"></ViewComponentSliderTrend>
        </section>

        <div class="mb-[140px]"></div>

        <LayoutComponentTheCollaborations></LayoutComponentTheCollaborations>

        <div class="divider"></div>
        <LayoutComponentTheEffects class="fade-in" title="Try my effects"></LayoutComponentTheEffects>

        <div class="divider"></div>
        <section class="fade-in">
            <h3 class="text-4xl pb-[30px] text-center font-bold text-[#0E101C] capitalize">blog</h3>
            <div class="flex xs:flex-wrap xl:flex-nowrap gap-6 xs:w-auto xl:w-[1160px] mx-auto">
                <div class="xs:w-full xl:w-1/3">
                    <img class="rounded-lg" src="~/assets/images/client/blog-image.png" alt="">
                </div>
                <div class="flex flex-col justify-between xl:w-2/3">
                    <h5 class="text-[42px]">Crazy Effects</h5>
                    <p class="xs:text-xl xl:text-[28px] font-medium">Lorem ipsum dolor sit amet consectetur. Lectus massa
                        nam nullam
                        scelerisque. A in diam risus at eu non ornare semper ac. In pulvinar lacus at libero at
                        ullamcorper. Rhoncus habitant consectetur egestas mi purus sagittis neque. Suspendisse interdum
                        viverra phasellus convallis at viverra. Habitant in mus libero enim quam est morbi urna nulla.
                        Turpis sed commodo justo lectus sed leo aliquam eget cursus.</p>

                    <ViewComponentBaseButton>open blog</ViewComponentBaseButton>
                </div>
            </div>
        </section>

        <div class="divider"></div>

        <section class="xs:px-4 lg:px-[176px] fade-in">
            <h4 class="text-5xl leading-[76px] font-semibold text-center">Ready to see your ideas <br /> Come to life?
            </h4>
            <ViewComponentBaseButton class="mx-auto mt-4">get in touch</ViewComponentBaseButton>
        </section>
        <div class="divider"></div>
    </main>
</template>
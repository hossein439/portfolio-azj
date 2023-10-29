<script setup>
definePageMeta({
    layout: "customheader",
});
// const { useFadeIn } = checkFadeIn();
// onMounted(() => useFadeIn())

</script>


<template>
    <main>
        <section class="fade-in mx-[85px] xs:my-[128px] h-screen flex justify-center items-center xs:py-24 md:py-4 xs:px-4">
            <article
                class="px-[85px] rounded-2xl py-16 shadow-[2px_2px_5px_0px_rgba(53,53,53,0.50)] bg-[#FFF] text-[#0E101C]">
                <h2 class="text-5xl font-semibold capitalize">about me</h2>
                <p class="pt-12 pb-16">Hi! I’m Jawad, also known as <strong class="text-[#025EFF]">AZJ</strong>. I weave
                    AR magic as a
                    TikTok Effect House Ambassador,
                    spreading joy and wonder. Let's create enchanting experiences together!</p>

                <ViewComponentBaseButton class="mx-auto">more</ViewComponentBaseButton>
            </article>
        </section>

        <section class="fade-in xs:px-4 xs:py-12 lg:px-[72px]">
            <h3 class="text-4xl text-center font-bold text-[#0E101C]">My trending filters</h3>
            <ViewComponentSliderTrend :show-category="true"></ViewComponentSliderTrend>
        </section>


        <LayoutComponentTheCollaborations></LayoutComponentTheCollaborations>

        <LayoutComponentTheEffects class="fade-in" title="Try my effects"></LayoutComponentTheEffects>

        <section class="fade-in my-60">
            <h3 class="text-4xl py-[30px] text-center font-bold text-[#0E101C] capitalize">blog</h3>
            <div class="flex gap-6 w-[1160px] mx-auto">
                <div class="w-1/3">
                    <img class="rounded-lg" src="~/assets/images/client/blog-image.png" alt="">
                </div>
                <div class="flex flex-col justify-between w-2/3">
                    <h5 class="text-[42px]">Crazy Effects</h5>
                    <p class="text-[28px] font-medium">Lorem ipsum dolor sit amet consectetur. Lectus massa nam nullam
                        scelerisque. A in diam risus at eu non ornare semper ac. In pulvinar lacus at libero at
                        ullamcorper. Rhoncus habitant consectetur egestas mi purus sagittis neque. Suspendisse interdum
                        viverra phasellus convallis at viverra. Habitant in mus libero enim quam est morbi urna nulla.
                        Turpis sed commodo justo lectus sed leo aliquam eget cursus.</p>

                    <ViewComponentBaseButton>open blog</ViewComponentBaseButton>
                </div>
            </div>
        </section>


        <LayoutComponentTheService></LayoutComponentTheService>

    </main>
</template>
<script setup>
definePageMeta({
    layout: "customheader",
});
</script>


<template>
    <main>
        <section class="mx-[170px] xs:my-[128px] xs:py-24 md:py-4 xs:px-4">
            <article class="py-16 text-[#0E101C]">
                <h2 class="text-5xl font-semibold capitalize">about me</h2>
                <p class="pt-12 pb-16">Hi! I’m Jawad, also known as <strong class="text-[#025EFF]">AZJ</strong>. I weave
                    AR magic as a
                    TikTok Effect House Ambassador,
                    spreading joy and wonder. Let's create enchanting experiences together!</p>
                <!-- <button class="flex justify-center mx-auto mt-16 px-8 py-4 rounded-lg bg-[#025EFF]">Get in
                    touch</button> -->

                <button
                    class="flex justify-center my-6 mx-auto py-2 px-4 rounded-lg capitalize text-[#025EFF] border-2 border-[#025EFF]">more</button>
            </article>
        </section>

        <LayoutComponentTheTrendFilter></LayoutComponentTheTrendFilter>

        <LayoutComponentTheCollaborations></LayoutComponentTheCollaborations>

        <LayoutComponentTheEffects></LayoutComponentTheEffects>

        <section class="py-60">
            <h3 class="text-4xl py-[30px] text-center font-bold text-[#0E101C] capitalize">blog</h3>
            <div class="flex gap-6 w-[1160px] mx-auto">
                <div class="w-1/3">
                    <img class="rounded-lg" src="~/assets/images/client/blog-image.png" alt="">
                </div>
                <div class="flex flex-col justify-between w-2/3">
                    <p class="text-[28px] font-medium">Lorem ipsum dolor sit amet consectetur. Lectus massa nam nullam
                        scelerisque. A in diam risus at eu non ornare semper ac. In pulvinar lacus at libero at
                        ullamcorper. Rhoncus habitant consectetur egestas mi purus sagittis neque. Suspendisse interdum
                        viverra phasellus convallis at viverra. Habitant in mus libero enim quam est morbi urna nulla.
                        Turpis sed commodo justo lectus sed leo aliquam eget cursus.</p>
                    <button
                        class="flex justify-center w-full mx-auto py-2 px-4 rounded-lg capitalize text-[#025EFF] border-2 border-[#025EFF]">open
                        blog</button>
                </div>
            </div>
        </section>


        <LayoutComponentTheService></LayoutComponentTheService>

    </main>
</template>

<script setup>
</script>
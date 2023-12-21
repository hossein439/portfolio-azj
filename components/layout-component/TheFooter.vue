<template>
    <footer class="bg-[#272727] text-white">
        <div class="grid xs:grid-cols-1 lg:grid-cols-8 pt-12 lg:w-4/5 xs:w-auto mx-auto">
            <div class="col-span-4 w-full">
                <div class="pb-8">
                    <img class="block mt-[106px] mb-[43px] lg:my-auto lg:h-auto lg:w-auto xs:mx-auto lg:m-0 object-cover"
                        src="~/assets/images/client/Symbol-logo.png" alt="">
                </div>

                <h5
                    class="xs:px-16 lg:px-0 font-bold xs:text-[22px] lg:text-2xl text-[#E6EFFF] xs:text-center lg:text-left">
                    AR & Graphic
                    Designer + Content Creator</h5>

                <span class="inline-block xs:text-center lg:text-left w-full xs:py-8 xs:pt-2 text-2xl">@azjeffects</span>

                <div class="flex flex-col xs:items-center lg:items-start gap-2 pb-8 lg:pb-0">
                    <span class="text-[22px] lg:text-2xl font-bold">Frankfurt, Germany</span>
                    <span class="text-[22px] lg:text-2xl">Contact@azj.cam</span>
                </div>

                <span class="xs:hidden lg:inline-block pt-12 pb-6 text-2xl font-semibold text-[#E6EFFF] capitalize">social
                    media</span>
                <ul class="xs:hidden lg:flex lg:w-auto gap-12 items-end">
                    <li>
                        <IconsTiktokIcon class="transition-all cursor-pointer hover:text-[#025EFF]"></IconsTiktokIcon>
                    </li>
                    <li>
                        <IconsInstagramIcon class="transition-all cursor-pointer hover:text-[#025EFF]"></IconsInstagramIcon>
                    </li>
                    <li>
                        <IconsYoutubeIcon class="transition-all cursor-pointer hover:text-[#025EFF]"></IconsYoutubeIcon>
                    </li>
                    <li>
                        <IconsSnapChat class="transition-all cursor-pointer hover:text-[#025EFF]"></IconsSnapChat>
                    </li>
                    <li>
                        <IconsXIcon class="transition-all cursor-pointer hover:text-[#025EFF]"></IconsXIcon>
                    </li>
                    <li>
                        <IconsUnsplashIcon class="transition-all cursor-pointer hover:text-[#025EFF]"></IconsUnsplashIcon>
                    </li>
                    <li>
                        <IconsFiverrIcon class="transition-all cursor-pointer hover:text-[#025EFF]"></IconsFiverrIcon>
                    </li>
                </ul>
            </div>

            <div class="col-span-2 flex flex-col px-4 gap-4">
                <span class="py-2 capitalize text-2xl text-[#E6EFFF]">navigation</span>
                <RouterLink to="/" class="py-2 capitalize text-2xl text-[#5F5F5F] hover:text-[#E6EFFF] transition-all">
                    Home</RouterLink>
                <RouterLink to="/about"
                    class="py-2 capitalize text-2xl text-[#5F5F5F] hover:text-[#E6EFFF] transition-all">about me
                </RouterLink>

                <RouterLink to="/category/2"
                    class="py-2 capitalize text-2xl text-[#5F5F5F] hover:text-[#E6EFFF] transition-all">category
                </RouterLink>

                <RouterLink to="/blog"
                    class="py-2 capitalize text-2xl text-[#5F5F5F] hover:text-[#E6EFFF] transition-all">
                    blog
                </RouterLink>
            </div>

            <div class="col-span-2 flex flex-col px-4 gap-4">
                <span class="py-2 text-2xl text-[#E6EFFF]">Lagal</span>
                <span
                    class="py-2 text-2xl text-[#5F5F5F] cursor-pointer hover:text-[#E6EFFF] transition-all capitalize">Privacy
                    Policy</span>
                <span
                    class="py-2 text-2xl text-[#5F5F5F] cursor-pointer hover:text-[#E6EFFF] transition-all capitalize">imprint</span>
        </div>

    </div>

    <span class="flex justify-center pt-14 pb-4 text-center text-[#C6C6C6]">Copyright 2023 | AZJ</span>
</footer></template>
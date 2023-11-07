<template>
    <footer class="bg-[#272727] text-white">
        <div class="grid grid-cols-8 pt-12 w-4/5 mx-auto">
            <div class="col-span-4">
                <img class="flex pb-6" src="~/assets/images/client/Symbol-logo.png" alt="">

                <h5 class="xs:px-16 lg:px-0 font-bold text-2xl text-[#E6EFFF] xs:text-center lg:text-left">AR & Graphic
                    Designer + Content Creator</h5>

                <span class="inline-block pt-3 pb-8 text-2xl">@azjeffects</span>

                <div class="flex flex-col xs:items-center lg:items-start gap-2">
                    <span class="text-2xl font-bold">Frankfurt, Germany</span>
                    <span class="text-2xl">Contact@azj.cam</span>
                </div>

                <span class="inline-block pt-12 pb-6 text-2xl font-semibold text-[#E6EFFF] capitalize">social media</span>
                <ul class="xs:grid xs:grid-cols-2 xs:w-1/3 lg:w-auto lg:flex gap-4 mx-auto justify-center items-end">
                    <li class="mx-auto">
                        <IconsTiktokIcon></IconsTiktokIcon>
                    </li>
                    <li class="mx-auto">
                        <IconsInstagramIcon></IconsInstagramIcon>
                    </li>
                    <li class="mx-auto">
                        <IconsYoutubeIcon></IconsYoutubeIcon>
                    </li>
                    <li class="mx-auto">
                        <IconsSnapChat></IconsSnapChat>
                    </li>
                    <li class="mx-auto">
                        <IconsXIcon></IconsXIcon>
                    </li>
                    <li class="mx-auto">
                        <IconsUnsplashIcon></IconsUnsplashIcon>
                    </li>
                    <li class="mx-auto">
                        <IconsFiverrIcon></IconsFiverrIcon>
                    </li>
                </ul>
            </div>

            <div class="col-span-2 flex flex-col">
                <span class="px-3 py-2 capitalize text-2xl text-[#E6EFFF]">navigation</span>
                <RouterLink to="/" class="px-3 py-2 capitalize text-2xl text-[#5F5F5F] hover:text-[#E6EFFF] transition-all">
                    Home</RouterLink>
                <RouterLink to="/about"
                    class="px-3 py-2 capitalize text-2xl text-[#5F5F5F] hover:text-[#E6EFFF] transition-all">about me
                </RouterLink>

                <RouterLink to="category/2"
                    class="px-3 py-2 capitalize text-2xl text-[#5F5F5F] hover:text-[#E6EFFF] transition-all">category
                </RouterLink>

                <RouterLink to="/blog"
                    class="px-3 py-2 capitalize text-2xl text-[#5F5F5F] hover:text-[#E6EFFF] transition-all">
                    blog
                </RouterLink>
            </div>

            <div class="col-span-2 flex flex-col">
                <span class="px-3 py-2 text-2xl text-[#E6EFFF]">Lagal</span>
                <span class="px-3 py-2 text-2xl text-[#5F5F5F] cursor-pointer hover:text-[#E6EFFF] transition-all capitalize">Privacy Policy</span>
                <span class="px-3 py-2 text-2xl text-[#5F5F5F] cursor-pointer hover:text-[#E6EFFF] transition-all capitalize">imprint</span>
            </div>

    </div>

    <span class="flex justify-center pt-14 pb-4 text-center text-[#C6C6C6]">Copyright 2023 | AZJ</span>
</footer></template>
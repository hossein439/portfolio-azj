<template>
    <header class="relative overflow-hidden transition-all">

        <div class="h-screen relative flex flex-col justify-between">
            <nav class="lg:hidden xs:flex justify-between px-4 py-[50px]">
                <img src="~/assets/images/client/logo.svg" alt="">
                <button id="open-btn" data-status="open">
                    <img src="~/assets/images/icons/menu.svg" alt="">
                </button>
            </nav>

            <nav class="xs:hidden lg:flex justify-evenly items-center py-8">
                <div class="">
                    <img src="~/assets/images/client/logo.svg" alt="">
                </div>
                <div class="flex justify-between">

                    <ul class="flex gap-8 items-center relative z-30">

                        <li>
                            <NuxtLink
                                class="border-b-2 border-transparent cursor-pointer hover:border-[#025EFF] capitalize hover:text-[#025EFF] py-2 transition-all"
                                to="/">Home
                            </NuxtLink>
                        </li>

                        <li>
                            <NuxtLink
                                class="border-b-2 border-transparent cursor-pointer hover:border-[#025EFF] capitalize hover:text-[#025EFF] py-2 transition-all"
                                href="./about">about me
                            </NuxtLink>
                        </li>

                        <li>
                            <NuxtLink
                                class="border-b-2 border-transparent cursor-pointer hover:border-[#025EFF] capitalize hover:text-[#025EFF] py-2 transition-all"
                                href="./categories">Categories
                            </NuxtLink>
                        </li>

                        <li>
                            <NuxtLink
                                class="border-b-2 border-transparent cursor-pointer hover:border-[#025EFF] capitalize hover:text-[#025EFF] py-2 transition-all"
                                href="./blog">Blog
                            </NuxtLink>
                        </li>

                    </ul>
                    <button
                        class="flex justify-center ml-16 py-2 px-4 rounded-lg capitalize text-[#025EFF] border-2 border-[#025EFF]">contact</button>
                </div>
            </nav>

            <div class="absolute xs:bottom-0 lg:bottom-[-24rem] w-full">
                <img class="inline-block w-full mx-auto" src="~/assets/images/others/background-user.svg" alt="">
            </div>
            <div class="absolute bottom-0 w-full px-10">
                <img class="xs:inline-block lg:hidden w-full mx-auto" src="~/assets/images/client/user.png" alt="">
                <img class="xs:hidden lg:flex mx-auto" width="500" src="~/assets/images/client/userimg-desktop.png" alt="">
            </div>
            <div class="overflow-hidden lg:px-12">
                <h1
                    class="lg:text-[225px] leading-[194px] -z-10 bottom-[12rem] font-bold whitespace-nowrap text-[62.877px] text-[#1C1C1C]">
                    AZJ
                    EFFECT AZJ EFFECT AZJ EFFECT</h1>
                <h1
                    class="lg:text-[225px] leading-[194px] -z-10 bottom-[7rem] font-bold whitespace-nowrap text-[62.877px] text-[#025EFF]">
                    AZJ
                    EFFECT AZJ EFFECT AZJ EFFECT</h1>
            </div>
        </div>

    </header>
    <slot></slot>
    <LayoutComponentTheFooter></LayoutComponentTheFooter>
</template>

<style>
.router-link-active {
    border-color: #025EFF;
    color: #025EFF;
}
</style>
<template>
    <header class="relative overflow-hidden transition-all">

        <div class="flex flex-col justify-between">
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
                                class="cursor-pointer hover:border-[#025EFF] capitalize hover:text-[#025EFF] py-2 transition-all"
                                to="/">Home
                            </NuxtLink>
                        </li>

                        <li>
                            <NuxtLink
                                class="cursor-pointer hover:border-[#025EFF] capitalize hover:text-[#025EFF] py-2 transition-all"
                                href="./about">about me
                            </NuxtLink>
                        </li>

                        <li>
                            <NuxtLink
                                class="cursor-pointer hover:border-[#025EFF] capitalize hover:text-[#025EFF] py-2 transition-all"
                                href="./categories">Categories
                            </NuxtLink>
                        </li>

                        <li>
                            <NuxtLink
                                class="cursor-pointer hover:border-[#025EFF] capitalize hover:text-[#025EFF] py-2 transition-all"
                                href="./blog">Blog
                            </NuxtLink>
                        </li>

                    </ul>

                    <button
                        class="flex justify-center ml-16 py-2 px-4 rounded-lg capitalize text-[#025EFF] border-2 border-[#025EFF]">contact
                    </button>

                </div>
            </nav>
        </div>
    </header>
</template>

<style scoped>
.router-link-active {
    border-color: #025EFF;
    color: #025EFF;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.router-link-active::after {
    content: '';
    display: inline-block;
    height: 3px;
    width: 32px;
    position: relative;
    top: 8px;
    background-color: #025EFF;
}
</style>
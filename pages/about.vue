<template>
    <Title>about</Title>
    <section class="px-[110px]">
        <div class="flex justify-between items-center">
            <div><img src="~/assets/images/client/about-me.png" alt=""></div>
            <h1 class="text-5xl hello">I'm Jawad Mohammadi
                <div><img src="~/assets/images/client/sign.png" alt=""></div>
            </h1>
        </div>

        <p class="my-12 text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </section>

    <section>
        <h2 class="bye">Software Expertise</h2>
        <div class="relative top-[-150px] overflow-hidden h-[350px]">
            <div class="absolute top-32 w-full h-24 rotate-[3.811deg] bg-[#025EFF]">
                <div class="h-full absolute w-12 -left-4 bg-[#025EFF]"></div>
                <div class="h-full absolute w-12 -right-4 bg-[#025EFF]"></div>
            </div>
            <div class="absolute z-20 top-32 flex items-center gap-16 w-full h-24 rotate-[-7.407deg] bg-[#353535]">
                <div class="h-full absolute w-12 -left-4 bg-[#353535]"></div>
                <div class="h-full absolute w-12 -right-4 bg-[#353535]"></div>
                <div class="flex">
                    <div class="to-left flex items-center gap-16">
                        <div><img src="~/assets/images/others/other-1.png" alt=""></div>
                        <div><img src="~/assets/images/others/other-2.png" alt=""></div>
                        <div><img src="~/assets/images/others/other-3.png" alt=""></div>
                        <div><img src="~/assets/images/others/other-4.png" alt=""></div>
                        <div><img src="~/assets/images/others/other-5.png" alt=""></div>
                        <div><img src="~/assets/images/others/other-6.png" alt=""></div>
                        <div><img src="~/assets/images/others/other-7.png" alt=""></div>
                        <div><img src="~/assets/images/others/other-8.png" alt=""></div>
                        <div><img src="~/assets/images/others/other-9.png" alt=""></div>
                        <div><img src="~/assets/images/others/other-10.png" alt=""></div>
                        <div><img src="~/assets/images/others/other-11.png" alt=""></div>
                        <div><img src="~/assets/images/others/other-12.png" alt=""></div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section class="py-8 px-[176px]">
        <h4 class="text-5xl leading-[76px] font-semibold text-center">Ready to see your ideas <br /> Come to life?
        </h4>
        <button
            class="flex justify-center mx-auto mt-4 py-2 px-4 rounded-lg capitalize text-[#025EFF] border-2 border-[#025EFF] shadow-md">
            get in touch
        </button>
    </section>
</template>

<style scoped>
.to-left {
    animation: scroll 10s infinite linear;
}

@keyframes scroll {

    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(-100%);
    }

}
</style>

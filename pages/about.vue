<template>
    <Title>about</Title>
    <section class="xs:px-4 lg:px-[110px]">
        <div class="flex flex-wrap justify-between items-center">
            <div class="xs:h-[358] lg:h-[418px] w-[397px]"><img class="rounded-lg object-cover inline-block h-full w-full"
                    src="~/assets/images/client/about-me.jpeg" alt=""></div>
            <h1 class="text-5xl xs:mt-3 lg:mt-0 bg-about">I'm Jawad
                <div><img src="~/assets/images/client/sign.png" alt=""></div>
            </h1>
        </div>

        <p class="xs:my-6 lg:my-12 xs:text-[18px] lg:text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
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



    <section class="fade-in">
        <h2 class="software-expertise xs:text-[34px] lg:text-[120px] lg:font-extrabold">Software Expertise</h2>
        <div class="relative xs:top-[-130px] lg:top-[-150px] overflow-hidden xs:h-[205px] lg:h-[350px]">
            <div class="absolute top-32 w-full xs:h-12 lg:h-24 rotate-[3.811deg] bg-[#025EFF]">
                <div class="h-full absolute w-12 -left-4 bg-[#025EFF]"></div>
                <div class="h-full absolute w-12 -right-4 bg-[#025EFF]"></div>
            </div>
            <div class="absolute z-20 top-32 flex items-center gap-16 w-full xs:h-12 lg:h-24 rotate-[-7.407deg] bg-[#353535]">
                <div class="h-full absolute w-12 -left-4 bg-[#353535]"></div>
                <div class="h-full absolute w-12 -right-4 bg-[#353535]"></div>
                <div class="flex h-full">
                    <div class="to-left h-full flex items-center gap-16">
                        <div><img class="w-10" width="50" height="50" src="~/assets/images/others/other-1.png" alt=""></div>
                        <div><img class="w-10" width="50" height="50" src="~/assets/images/others/other-2.png" alt=""></div>
                        <div><img class="w-10" width="50" height="50" src="~/assets/images/others/other-3.png" alt=""></div>
                        <div><img class="w-10" width="50" height="50" src="~/assets/images/others/other-4.png" alt=""></div>
                        <div><img class="w-10" width="50" height="50" src="~/assets/images/others/other-5.png" alt=""></div>
                        <div><img class="w-10" width="50" height="50" src="~/assets/images/others/other-6.png" alt=""></div>
                        <div><img class="w-10" width="50" height="50" src="~/assets/images/others/other-7.png" alt=""></div>
                        <div><img class="w-10" width="50" height="50" src="~/assets/images/others/other-8.png" alt=""></div>
                        <div><img class="w-10" width="50" height="50" src="~/assets/images/others/other-9.png" alt=""></div>
                        <div><img class="w-10" width="50" height="50" src="~/assets/images/others/other-10.png" alt=""></div>
                        <div><img class="w-10" width="50" height="50" src="~/assets/images/others/other-11.png" alt=""></div>
                        <div><img class="w-10" width="50" height="50" src="~/assets/images/others/other-12.png" alt=""></div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section class="py-8 lg:px-[176px] fade-in">
        <h4 class="xs:text-[28px] lg:text-5xl lg:leading-[76px] font-semibold text-center">Ready to see your ideas <br /> Come to life?
        </h4>
        <ViewComponentBaseButton class="mx-auto mt-4">get in touch</ViewComponentBaseButton>
    </section>

    <div class="divider"></div>
</template>

<style scoped>

.to-left {
        animation: scroll 10s infinite linear;
    }
    
    @keyframes scroll {
    
        0% {
            transform: translateX(50%);
        }
    
        100% {
            transform: translateX(-50%);
        }
    
    }

@media (min-width: 780px) {
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
    
}
</style>

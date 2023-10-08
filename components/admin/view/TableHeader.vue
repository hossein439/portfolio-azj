<script setup>
const props = defineProps({
    title: {
        type: String,
    },
    btnText: {
        type: String,
    },
    link: {
        type: String
    }
})
</script>

<template>
    <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
            <h1 class="text-base font-semibold leading-6 text-gray-900 capitalize">{{props.title}}</h1>
            <!-- <p class="mt-2 text-sm text-gray-700">A list of all the users in your account including their name, title,
                email and role.</p> -->
        </div>
        <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            
            <NuxtLink :to="`/admin/${props.link}`"
                class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 capitalize">

                {{ props.btnText }}    
            </NuxtLink>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: "adminlayout",
    middleware: ['auth'],
    meta: {
        requiresAuth: true, 
    },
});


// const { getCookie } = useCookie();

// onMounted(async () => {
//     const isSetCookie = getCookie('auth_token');
    
//     if (!isSetCookie) {
//         console.log('hello index', isSetCookie)
//         await navigateTo('/admin/auth/login');
//     }
// })


</script>
<template>
    
</template>


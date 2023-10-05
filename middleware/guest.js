export default defineNuxtRouteMiddleware((to, from) => {
    const { isLoggedIn } = useUser();
    if(process.client) {
        if(isLoggedIn.value) {
            // return navigateTo('/myInfo');
            window.location.pathname = '/myInfo';
        } 
    }
});
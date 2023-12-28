export default defineNuxtRouteMiddleware((to, from) => {
    const { isLoggedIn } = useUser();
    if(process.client) {
        if(isLoggedIn.value) {
            window.location.pathname = '/myInfo';
        } 
    }
});
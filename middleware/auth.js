export default defineNuxtRouteMiddleware((to, from) => {
    const { getCookie } = useCookie();
    const isSetCookie = getCookie('auth_token');
    const isAuthenticate = to.meta.meta.requiresAuth;

    if (process.client) {
        console.log(!isSetCookie)
        if (isSetCookie) {
            if(isAuthenticate) {
                return navigateTo('/admin/auth/login');
            }
        }
    }
});
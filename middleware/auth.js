export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
        const { getCookie } = useCookie();
        const isSetCookie = getCookie('auth_token');
        const isAuthenticate = to.meta.meta.requiresAuth;
        console.log(isSetCookie)
        if (!isSetCookie || isSetCookie === 'undefined') {
            if (isAuthenticate) {
                return navigateTo('/admin/auth/login');
            }
        }
    }
});
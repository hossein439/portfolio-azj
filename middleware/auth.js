export default defineNuxtRouteMiddleware((to, from) => {
    const { getCookie } = useCookie();
    const isSetCookie = getCookie('auth_token');
    if (process.client) {
        if (!isSetCookie) {
            return navigateTo('/admin/auth/login');
        }
    }
});

export default defineNuxtRouteMiddleware((to, from) => {
    // const { isLoggedIn } = useUser();
    const { getCookie } = useCookie();
    const isSetCookie = getCookie('auth_token');
    if (process.client) {
        if (!isSetCookie.value) {
            // return navigateTo('/login');
            window.location.pathname = '/admin/auth/login';
        }
    }
});
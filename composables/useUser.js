const { getCookie } = useCookie();
export function useUser() {

    function setUser({ user, token }) {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', JSON.stringify(token));
    }

    function getUser(getItem) {
        if(process.client) {
            return JSON.parse(localStorage.getItem(getItem))
        }
    }

    function removeUser() {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }

    const isLoggedIn = computed(() => {
        if(process.client) {
            return !!localStorage.getItem('user') && !!getCookie('auth_token');
        }
    });

    return { setUser, getUser, removeUser, isLoggedIn }
}
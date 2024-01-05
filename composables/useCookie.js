import Cookies from 'js-cookie';

export function useCookie() {
    function getCookie(cname) {
        if (process.client) {
            return Cookies.get(cname);
        }
    }

    function setCookie(token) {
        return Cookies.set('auth_token', token, { expires: 5 });
    }

    return { getCookie, setCookie }
}
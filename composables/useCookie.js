import Cookies from 'js-cookie';

export function useCookie() {
    function getCookie(cname) {
        return Cookies.get(cname);
    }

    function setCookie(token) {
        return Cookies.set('auth_token', token, { expires: 7 });
    }

    return { getCookie, setCookie }
}
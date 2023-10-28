import Cookies from 'js-cookie';

export function useCookie() {
    // function getCookie(cname) {
    //     try {
    //         let name = cname + "=";
    //         let ca = document.cookie.split(';');
    //         for (let i = 0; i < ca.length; i++) {
    //             let c = ca[i];
    //             while (c.charAt(0) == ' ') {
    //                 c = c.substring(1);
    //             }
    //             if (c.indexOf(name) == 0) {
    //                 return c.substring(name.length, c.length);
    //             }
    //         }
    //         return "";
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    function getCookie(cname) {
        return Cookies.get(cname);
    }

    function setCookie(token) {
        return Cookies.set('auth_token', token, { expires: 7 });
    }

    return { getCookie, setCookie }
}
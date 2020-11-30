// 쿠키 조회
export function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
    
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
    
// 쿠키 생성
export function setCookie(cname, cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + (10 * 365 * 24 * 60 * 60 * 1000)); //만료기간 10년
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
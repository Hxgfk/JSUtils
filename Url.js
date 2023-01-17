/**
 * @Author Hxgfk
 * @param name
 * @returns {string|null}
 */
function getUrlParam(name) {
    let ps = window.location.search.substr(1).match(new RegExp("(^|&)" + name + "=([^&]*)(&|$)"));
    if (ps != null) {
        return unescape(ps[2]);
    }else {
        return null;
    }
}
const shuffleArr = (arr) => {
    let base_arr = [];
    let new_arr = [];
    for (let i = 0; i < arr.length; ++i) {
        base_arr.push(arr[i]);
    }
    while (base_arr.length > 0) {
        let index = Math.floor(Math.random() * base_arr.length);
        new_arr.push(base_arr[index]);
        base_arr.splice(index, 1);
    }
    return new_arr;
}
const randomInt = (max) => {
    return Math.floor(Math.random() * max);
}
const getQueryParameters = () => {
    let param = {};
    if (typeof location.search != "undefined") {
        let str = location.search.split("?")[1];
        if (str != null) {
            for (let q of str.split("&")) {
                let p = q.split("=");
                param[p[0]] = p[1];
            }
        }
    }
    return param;
}
const getQueryParametersStr = (param = {}) => {
    let p_list = [];
    for (let x in param) {
        p_list.push(x + "=" + param[x]);
    }
    if (p_list.length > 0) {
        return "?" + p_list.join("&");
    }
    else {
        return "";
    }
}
const zeroPad = (val, total_len) => {
    return `${"0".repeat(total_len)}${val}`.slice(-total_len);
}
const formatDate = (date) => {
    if (date instanceof Date) {
        return `${date.getFullYear()}/${zeroPad(date.getMonth() + 1, 2)}/${zeroPad(date.getDate(), 2)}`;
    }
    else {
        return "----/--/--";
    }
}
const formatDateTime = (date) => {
    if (date instanceof Date) {
        return `${date.getFullYear()}/${zeroPad(date.getMonth() + 1, 2)}/${zeroPad(date.getDate(), 2)} ${zeroPad(date.getHours(), 2)}:${zeroPad(date.getMinutes(), 2)}`
    }
    else {
        return "----/--/-- --:--";
    }
}
const formatDateTimeSecond = (date) => {
    if (date instanceof Date) {
        return `${date.getFullYear()}/${zeroPad(date.getMonth() + 1, 2)}/${zeroPad(date.getDate(), 2)} ${zeroPad(date.getHours(), 2)}:${zeroPad(date.getMinutes(), 2)}:${zeroPad(date.getSeconds(), 2)}`
    }
    else {
        return "----/--/-- --:--:--";
    }
}
const setVh = () => {
    const setVhFunc = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
    window.addEventListener("resize", setVhFunc);
    setVhFunc();
}
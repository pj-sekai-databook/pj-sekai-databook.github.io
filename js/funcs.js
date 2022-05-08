const resetElement = (id) => {
    try {
        let d = document.getElementById(id);
        let newD = d.cloneNode(false);
        d.parentNode.replaceChild(newD, d);
        d.id = id;
        return true;
    }
    catch (e) {
        //console.log("cannot reset '" + id + "'");
        return false;
    }
}
const getTd = (text, className = null) => {
    return getElm("td", text, className);
}
const getTh = (text, className = null) => {
    return getElm("th", text, className);
}
const getTr = (className = null) => {
    return getElm("tr", null, className);
}
const getSpan = (text, className = null) => {
    return getElm("span", text, className);
}
const getDiv = (text, className = null) => {
    return getElm("div", text, className);
}
const getP = (text, className = null) => {
    return getElm("p", text, className);
}
const getLi = (text, className = null) => {
    return getElm("li", text, className);
}
const getElm = (elm, text = null, className = null) => {
    let d = document.createElement(elm);
    if (text != null) {
        d.innerText = text;
    }
    if (className != null) {
        d.className = className;
    }
    return d;
}
const getBr = () => {
    return document.createElement("br");
}
const getImg = (link, className = null) => {
    let img = document.createElement("img");
    img.src = link;
    if (className != null) {
        img.className = className;
    }
    return img;
}
const getA = (text, link, isTargetBlank = true, className = null) => {
    let a = getElm("a", text, className);
    a.href = link;
    if (isTargetBlank) {
        a.target = "_blank";
    }
    return a;
}
const getCheckboxLabel = (name, value, text, isChecked = false) => {
    let label = document.createElement("label");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = name;
    checkbox.value = value;
    checkbox.checked = isChecked;
    label.appendChild(checkbox);
    let spanText = document.createElement("span");
    spanText.innerText = text;
    label.appendChild(spanText);
    label.className = "unselectable";
    return label;
}
const concatElms = (elms, joint) => {
    let span = getSpan("");
    let flag = false;
    for (let e of elms) {
        if (flag) {
            span.appendChild(joint.cloneNode(true));
        }
        else {
            flag = true;
        }
        span.appendChild(e);
    }
    return span;
}
const uniq = (arr) => {
    let new_arr = [];
    for (let a of arr) {
        if (new_arr.indexOf(a) < 0) {
            new_arr.push(a);
        }
    }
    return new_arr;
}
const insertAfter = (base_node, new_node) => {
    base_node.parentNode.insertBefore(new_node, base_node.nextSibling);
}
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
const getIcon = (title) => {
    const i = document.createElement("i");
    i.classList.add("fa-solid");
    i.classList.add("fa-" + title);
    return i;
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
class PjUtil {
    static isEmpty(x) {
        return String(x ?? "").length == 0;
    }
    static zeroPad(val, len) {
        return String(val).padStart(len, "0");
    }
    static setVh() {
        const setVhFunc = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        }
        window.addEventListener("resize", setVhFunc);
        setVhFunc();
    }
    static getQueryParameters() {
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
    static getQueryParametersStr(param = {}) {
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

    static shuffleArr(arr) {
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
    static randomInt(max) {
        return Math.floor(Math.random() * max);
    }
    static compareStr(a, b, is_asc = true) {
        if (a == b) {
            return 0;
        }
        if (PjUtil.isEmpty(a)) {
            if (PjUtil.isEmpty(b)) {
                return 0;
            }
            else {
                return 1;
            }
        }
        else {
            if (PjUtil.isEmpty(b)) {
                return -1;
            }
            else {
                return (is_asc ? 1 : -1) * (a < b ? -1 : 1);
            }
        }
    }
    static normalizeRuby(str) {
        str = str.replace(/[\u3041-\u3096]/g, m => String.fromCharCode(m.charCodeAt(0) + 0x60));
        str = str.split("").map(x => x.normalize("NFD")[0]).join("");
        for (const a of [["ァ", "ア"], ["ィ", "イ"], ["ゥ", "ウ"], ["ェ", "エ"], ["ォ", "オ"], ["ッ", "ツ"], ["ャ", "ヤ"], ["ュ", "ユ"], ["ョ", "ヨ"]]) {
            str = str.replaceAll(a[0], a[1]);
        }
        str = str.replace(/(.)ー/g, m => {
            if ("アカサタナハマヤラワ".includes(m[0])) {
                return m[0] + "ア";
            }
            if ("イキシチニヒミリ".includes(m[0])) {
                return m[0] + "イ";
            }
            if ("ウクスツヌフムユル".includes(m[0])) {
                return m[0] + "ウ";
            }
            if ("エケセテネヘメレ".includes(m[0])) {
                return m[0] + "エ";
            }
            if ("オコソトノホモヨロヲ".includes(m[0])) {
                return m[0] + "オ";
            }
            return m;
        });
        return str;
    }
}
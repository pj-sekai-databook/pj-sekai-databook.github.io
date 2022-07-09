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
}
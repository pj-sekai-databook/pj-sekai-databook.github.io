class PjLoader {
    static load(depth, list = []) { //depthはTopページを1として計算する
        if (depth <= 0) {
            throw new RangeError("depth must be positive number");
        }
        const stamp = new Date().getTime();
        const base_dir = depth > 1 ? ".." + "/..".repeat(depth - 2) : ".";
        const base_list = [
            `${base_dir}/js/header.js`,
            `${base_dir}/js/funcs.js`,
            `${base_dir}/js/PjUtil.js`,
            `${base_dir}/js/PjDate.js`,
            `${base_dir}/js/PjElm.js`,
            `${base_dir}/js/constructors.js`,
            `${base_dir}/js/Creator.js`,
            `${base_dir}/js/classes.js`,
            `${base_dir}/js/musics.js`
        ];
        for (const src of [...base_list, ...list]) {
            let request = new XMLHttpRequest();
            request.open("GET", `${src}?v=${stamp}`, false);
            request.send(null);
            if (request.status == 200) {
                const script = document.createElement("script");
                script.setAttribute("data-depth", depth);
                script.text = request.responseText;
                document.head.appendChild(script);
            }
        }
    }
}
class PjLoader {
    static load(depth, list = []) { //depthはTopページを1として計算する
        if (depth <= 0) {
            throw new RangeError("depth must be positive number");
        }
        const stamp = sessionStorage.getItem("PjLoaderTimeStamp") ?? new Date().getTime();
        sessionStorage.setItem("PjLoaderTimeStamp", stamp);
        const base_dir = depth > 1 ? ".." + "/..".repeat(depth - 2) : ".";
        const base_list = [
            `${base_dir}/js/header.js`,
            `${base_dir}/js/PjUtil.js`,
            `${base_dir}/js/PjDate.js`,
            `${base_dir}/js/PjElm.js`,
            `${base_dir}/js/Creator.js`,
            `${base_dir}/js/classes.js`,
            `${base_dir}/js/musics.js`
        ];
        for (const src of [...base_list, ...list]) {
            $.ajax({
                url: `${src}?v=${stamp}`,
                type: "GET",
                dataType: "text",
                async: false
            }).done((text) => {
                const script = document.createElement("script");
                script.setAttribute("data-depth", depth);
                script.text = text;
                document.head.appendChild(script);
            });
        }
    }
}
class PjLoader {
    static load(depth, list = []) {
        const stamp = new Date().getTime();
        const base_dir = depth > 0 ? ".." + "/..".repeat(depth - 1) : ".";
        const base_list = [
            `${base_dir}/js/header.js`,
            `${base_dir}/js/funcs.js`,
            `${base_dir}/data/js/constructors.js`,
            `${base_dir}/js/Creator.js`,
            `${base_dir}/data/js/classes.js`,
            `${base_dir}/data/js/musics.js`
        ];
        for (const src of [...base_list, ...list]) {
            let request = new XMLHttpRequest();
            request.open("GET", `${src}?v=${stamp}`, false);
            request.send(null);
            if (request.status == 200) {
                const script = document.createElement("script");
                script.text = request.responseText;
                document.head.appendChild(script);
            }
        }
    }
}
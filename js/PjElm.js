class PjElm {
    static getElm(tag, text, className) {
        const e = document.createElement(tag);
        if (text instanceof HTMLElement) {
            e.appendChild(text);
        }
        else if (!PjUtil.isEmpty(text)) {
            e.innerText = text;
        }
        if (!PjUtil.isEmpty(className)) {
            e.className = className;
        }
        return e;
    }
    static getA(text, href, className) {
        const a = PjElm.getElm("a", text, className);
        if (!PjUtil.isEmpty(href)) {
            a.href = href;
        }
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        return a;
    }
    static getBr() {
        return document.createElement("br");
    }
    static getDiv(text, className) {
        return PjElm.getElm("div", text, className);
    }
    static getFavicon(domain) {
        return PjElm.getImg(`https://www.google.com/s2/favicons?domain=${domain}`, null, false);
    }
    static getIcon(font, title) {
        const i = document.createElement("i");
        i.classList.add("fa-solid");
        i.classList.add(`fa-${font}`);
        if (!PjUtil.isEmpty(title)) {
            i.title = title;
        }
        return i;
    }
    static getImg(src, className, lazy = true) {
        const img = document.createElement("img");
        img.src = src;
        if (!PjUtil.isEmpty(className)) {
            img.className = className;
        }
        if (lazy) {
            img.loading = "lazy";
        }
        return img;
    }
    static getSpan(text, className) {
        return PjElm.getElm("span", text, className);
    }
    static getTd(text, className) {
        return PjElm.getElm("td", text, className);
    }
    static getTh(text, className) {
        return PjElm.getElm("th", text, className);
    }
    static getTr(className) {
        return PjElm.getElm("tr", null, className);
    }
    static concat(elms, joint) {
        const span = PjElm.getSpan();
        for (let e of elms) {
            span.appendChild(e);
            span.appendChild(joint.cloneNode(true));
        }
        if (span.lastChild) {
            span.removeChild(span.lastChild);
        }
        return span;
    }
    static insertAfter(base_node, new_node) {
        base_node.parentNode.insertBefore(new_node, base_node.nextSibling);
    }
    static reset(id) {
        try {
            let d = document.getElementById(id);
            let newD = d.cloneNode(false);
            d.parentNode.replaceChild(newD, d);
            d.id = id;
            return true;
        }
        catch (e) {
            return false;
        }
    }
}
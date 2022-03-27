class Music {
    static cnt = 0;
    constructor(title, creators, vocals, date_posted, date_implemented, urls, diff, note) {
        this.id = ++Music.cnt;
        this.title = title;
        this.creators = creators;
        this.vocals = vocals;
        this.date_posted = date_posted;
        this.date_implemented = date_implemented;
        this.urls = urls;
        this.diff = diff;
        this.note = note;
        this.units = (() => {
            let units = [];
            for (let v of vocals) {
                switch (v.type) {
                    case "virtual":
                    case "sekai":
                    case "another":
                        for (let unit of v.units) {
                            if (units.indexOf(unit) < 0) {
                                units.push(unit);
                            }
                        }
                        break;
                    default:
                        break;
                }
            }
            return units;
        })();
        this.main_unit = (() => {
            if (vocals.length == 1 && vocals[0].type == "inst") {
                return "inst";
            }
            for (let v of vocals) {
                if (v.type == "sekai") {
                    for (let unit of v.units) {
                        if (unit != "virtual") {
                            return unit;
                        }
                    }
                }
            }
            for (let v of vocals) {
                if (v.type == "virtual") {
                    return v.units[0];
                }
            }
            return "unclassified";
        })();
    }
}
class Link {
    constructor(title, href, date) {
        this.title = title;
        this.href = href;
        this.date = date;
        this.domain = this.href.replace(/^https*:\/\//, "").split("/")[0];
        switch (this.domain) {
            case "www.youtube.com":
                this.href_id = this.href.split("?")[1].split("=")[1];
                this.thumb_src = `https://img.youtube.com/vi/${this.href_id}/hqdefault.jpg`;
                break;
            case "www.nicovideo.jp":
                this.href_id = this.href.replace("https://www.nicovideo.jp/watch/", "");
                let id_num = this.href_id.replace(/^sm/, "");
                this.thumb_src = `https://nicovideo.cdn.nimg.jp/thumbnails/${id_num}/${id_num}`;
                break;
            default:
                this.href_id = undefined;
                this.thumb_src = undefined;
        }
    }
    getAnchorTag() {
        let span = document.createElement("span");
        let a = getA(this.title, this.href, true);
        span.appendChild(getImg(`https://www.google.com/s2/favicons?domain=${this.domain}`));
        span.appendChild(a);
        return span;
    };
}
class MV extends Link {
    constructor(d, href, date, c_arr, option) {
        if (!([2, 3].includes(d))) {
            throw new RangeError("MV must be either 2D or 3D");
        }
        let option_str = typeof (option) != "undefined" ? `(${option})` : "";
        super(`${d}DMV${option_str}`, href, date);
        this.d = d;
        this.c_arr = c_arr;
        this.option_str = option_str;
    }
}
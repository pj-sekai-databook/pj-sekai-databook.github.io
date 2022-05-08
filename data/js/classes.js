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
        this.note = (note ?? "").split(",").map(x => x.trim()).filter(x => x != "");

        const tmp_unit_note = (() => {
            //カップヌードルタイアップ曲には「その他」ユニットを追加する
            if (this.note == "cupnoodle") {
                return "other";
            }
            //書き下ろし楽曲のユニット指定があれば追加する
            const item = this.note.find(x => x.match(/^newlyWritten_/));
            if (typeof item != "undefined") {
                const tmp_unit = item.replace(/^.*_/, "");
                if (Object.keys(units).includes(tmp_unit)) {
                    return tmp_unit;
                }
                else {
                    return null;
                }
            }
            else {
                return null;
            }
        })();

        this.units = (() => {
            let tmp_units = [];
            for (let v of vocals) {
                switch (v.type) {
                    case Vocal.type.virtual:
                    case Vocal.type.sekai:
                    case Vocal.type.another:
                        for (let unit of v.units) {
                            if (!tmp_units.includes(unit)) {
                                tmp_units.push(unit);
                            }
                        }
                        break;
                    case Vocal.type.inst:
                        if (!tmp_units.includes("inst")) {
                            tmp_units.push("inst");
                        }
                    default:
                        break;
                }
            }
            if (tmp_unit_note != null && (!tmp_units.includes(tmp_unit_note))) {
                tmp_units.push(tmp_unit_note);
            }
            return tmp_units;
        })();

        this.main_unit = Music.getMainUnit(this);
    }
    static getMainUnit = (() => {
        const prior_list = ["inst", "other", "leo", "more", "vivid", "wonder", "night", "virtual"];
        return (m) => {
            for (const p of prior_list) {
                if (m.units.includes(p)) {
                    return p;
                }
            }
            return "unclassified";
        }
    })();
}
class Vocal {
    static type = {
        virtual: "virtual",
        sekai: "sekai",
        another: "another",
        inst: "inst",
        april: "april"
    };
    constructor(type, members = [], summarize = true) {
        this.type = type;
        this.members = members;

        //units
        let units = [];
        if (type == Vocal.type.virtual) {
            units.push("virtual");
        }
        else {
            for (let m of members) {
                let unit = characters_vocal[m].unit;
                if (!units.includes(unit)) {
                    units.push(unit);
                }
            }
            if (units.filter(u => u != "virtual").length >= 2) {
                //混合ユニット。summarizeがtrueの時は「その他」1つにする
                if (summarize) {
                    units = ["other"];
                }
            }
        }
        this.units = units;

        //str
        if (type == Vocal.type.inst) {
            this.str = "Inst ver.";
        }
        else {
            this.str = members.map(m => characters_vocal[m].fullName ?? m).join(", ");
        }
    }
};
class Link {
    static domain = {
        youtube: "www.youtube.com",
        niconico: "www.nicovideo.jp"
    }
    static thumb_info = {
        youtube: {
            img_name: "hqdefault.jpg",
            natural_width: 480
        },
        niconico: {
            hq_head: "https://img.cdn.nimg.jp",
            exceptions: {
                "sm39411572": "https://img.cdn.nimg.jp/s/nicovideo/thumbnails/39411572/39411572.5041558.original/r1280x720l?key=c955c01765c37c3b80e0ce8259d6a3ec1ff41ee80b28178c2fb3ef8bca081b6c",
                "sm40015219": "https://img.cdn.nimg.jp/s/nicovideo/thumbnails/40015219/40015219.4765762.original/r1280x720l?key=3d79d8ee2f6d7b268ea1a34e15c2bce78a5a9feba9d1f4e6236c6eefb13a5143",
                "sm40435671": "https://img.cdn.nimg.jp/s/nicovideo/thumbnails/40435671/40435671.3145727.original/r1280x720l?key=2b6f0adbe8f178d53d6add4039642e78dca36207a74bfe8ba84196242459f870"
            }
        }
    }
    static getDomain(link) {
        return link.replace(/^https*:\/\//, "").split("/")[0];
    }
    static getHrefId(href, domain = null) {
        if (domain == null) {
            domain = Link.getDomain(href);
        }
        switch (domain) {
            case Link.domain.youtube:
                if (href.match(/www\.youtube\.com\/watch\?v=/)) {
                    return href.split("?")[1].split("=")[1];
                }
                if (href.match(/youtu\.be\//)) {
                    return href.split("youtu.be/")[1];
                }
                return undefined;
            case Link.domain.niconico:
                return href.replace("https://www.nicovideo.jp/watch/", "");
            default:
                return undefined;
        }
    }
    static getAnchorTag(title, link, domain = null) {
        if (domain == null) {
            domain = Link.getDomain(link);
        }
        if (domain == "youtu.be") {
            domain = Link.domain.youtube;
        }
        let span = document.createElement("span");
        let a = getA(title, link, true);
        span.appendChild(getImg(`https://www.google.com/s2/favicons?domain=${domain}`));
        span.appendChild(a);
        return span;
    }
    static getThumbnailSrc(link, domain = null, href_id = null) {
        if (domain == null) {
            domain = Link.getDomain(link);
        }
        if (href_id == null) {
            href_id = Link.getHrefId(link, domain);
        }
        switch (domain) {
            case Link.domain.youtube:
                return `https://img.youtube.com/vi/${href_id}/${Link.thumb_info.youtube.img_name}`;
            case Link.domain.niconico:
                if (Object.keys(Link.thumb_info.niconico.exceptions).includes(href_id)) {
                    return Link.thumb_info.niconico.exceptions[href_id];
                }
                const id_num = href_id.replace(/^sm/, "");
                return `https://nicovideo.cdn.nimg.jp/thumbnails/${id_num}/${id_num}`;
            default:
                return undefined;
        }
    }
    constructor(title, href, date) {
        this.title = title;
        this.href = href;
        this.date = date;
        this.domain = Link.getDomain(this.href);
        this.href_id = Link.getHrefId(this.href, this.domain);
        this.thumb_src = Link.getThumbnailSrc(this.href, this.domain, this.href_id);
    }
    getAnchorTag() {
        return Link.getAnchorTag(this.title, this.href, this.domain);
    }
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
class PlayingMovie extends Link {
    constructor(diff_param, href, date) {
        let title = null;
        for (let k in DiffParam) {
            if (DiffParam[k] == diff_param) {
                title = `プレイ動画(${k})`;
                break;
            }
        }
        if (title == null) {
            throw new RangeError("undefined diff in PlayingMovie");
        }
        super(title, href, date);
        this.diff_param = diff_param;
    }
}
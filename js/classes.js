class Unit {
    constructor(fullName, shortName, color) {
        this.fullName = fullName;
        this.shortName = shortName;
        this.color = color;
    }
    static units = {
        "virtual": new Unit("VIRTUAL SINGER", "バチャシン", "white"),
        "leo": new Unit("Leo/need", "レオニ", "dodgerblue"),
        "more": new Unit("MORE MORE JUMP！", "モモジャン", "lightgreen"),
        "vivid": new Unit("Vivid BAD SQUAD", "ビビバス", "red"),
        "wonder": new Unit("ワンダーランズ×ショウタイム", "ワンダショ", "orange"),
        "night": new Unit("25時、ナイトコードで。", "ニーゴ", "darkgray")
    }
}
class Character {
    constructor(fullName, shortName, unit) {
        this.fullName = fullName;
        this.shortName = shortName;
        this.unit = unit;
    };
    static characters = {
        "miku": new Character("初音ミク", "ミク", "virtual"),
        "rin": new Character("鏡音リン", "リン", "virtual"),
        "len": new Character("鏡音レン", "レン", "virtual"),
        "luka": new Character("巡音ルカ", "ルカ", "virtual"),
        "meiko": new Character("MEIKO", "MEIKO", "virtual"),
        "kaito": new Character("KAITO", "KAITO", "virtual"),
        "ichika": new Character("星乃一歌", "一歌", "leo"),
        "saki": new Character("天馬咲希", "咲希", "leo"),
        "honami": new Character("望月穂波", "穂波", "leo"),
        "shiho": new Character("日野森志歩", "志歩", "leo"),
        "minori": new Character("花里みのり", "みのり", "more"),
        "haruka": new Character("桐谷遥", "遥", "more"),
        "airi": new Character("桃井愛莉", "愛莉", "more"),
        "shizuku": new Character("日野森雫", "雫", "more"),
        "kohane": new Character("小豆沢こはね", "こはね", "vivid"),
        "an": new Character("白石杏", "杏", "vivid"),
        "akito": new Character("東雲彰人", "彰人", "vivid"),
        "toya": new Character("青柳冬弥", "冬弥", "vivid"),
        "tsukasa": new Character("天馬司", "司", "wonder"),
        "emu": new Character("鳳えむ", "えむ", "wonder"),
        "nene": new Character("草薙寧々", "寧々", "wonder"),
        "rui": new Character("神代類", "類", "wonder"),
        "kanade": new Character("宵崎奏", "奏", "night"),
        "mafuyu": new Character("朝比奈まふゆ", "まふゆ", "night"),
        "ena": new Character("東雲絵名", "絵名", "night"),
        "mizuki": new Character("暁山瑞希", "瑞希", "night")
    };
    static characters_mv = {
        ...Character.characters,
        "miku_leo": new Character("初音ミク(Leo/need)", "ミク(レオニ)", "leo"),
        "miku_more": new Character("初音ミク(MORE MORE JUMP！)", "ミク(モモジャン)", "more"),
        "miku_vivid": new Character("初音ミク(Vivid BAD SQUAD)", "ミク(ビビバス)", "vivid"),
        "miku_wonder": new Character("初音ミク(ワンダーランズ×ショウタイム)", "ミク(ワンダショ)", "wonder"),
        "miku_night": new Character("初音ミク(25時、ナイトコードで。)", "ミク(ニーゴ)", "night")
    };
    static characters_2dmv = {
        ...Character.characters_mv,
        "mikudayo": new Character("ミクダヨー", "ミクダヨー", "virtual"),
        "nenerobo": new Character("ネネロボ", "ネネロボ", "wonder")
    }
    static characters_vocal = {
        ...Character.characters,
        "gumi": new Character("GUMI", "GUMI", "virtual"),
        "flower": new Character("flower", "flower", "virtual"),
        "ia": new Character("IA", "IA", "virtual"),
        "vy2v3": new Character("VY2V3", "VY2V3", "virtual"),
        "una": new Character("音街ウナ", "ウナ", "virtual"),
        "yuki": new Character("歌愛ユキ", "ユキ", "virtual"),
        "mikudayo": new Character("ミクダヨー", "ミクダヨー", "virtual"),
        "nenerobo": new Character("ネネロボ", "ネネロボ", "wonder")
    };
}
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

        //テーマ曲であればボーカルのユニットを集約する(セカイver.を「その他」扱いする)
        if (this.note.includes("theme")) {
            this.vocals.forEach(v => v.setAsThemeSong());
        }

        const tmp_unit_note = (() => {
            //書き下ろし楽曲のユニット指定があれば追加する
            const item = this.note.find(x => x.match(/^newlyWritten_/));
            if (typeof item != "undefined") {
                const tmp_unit = item.replace(/^.*_/, "");
                if (Object.keys(Unit.units).includes(tmp_unit)) {
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
            //カップヌードル曲は無条件で「その他」のみになったので、最初に処理しておく。
            if (this.note.includes("cupnoodle")) {
                return ["other"];
            }

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
                        break;
                    default:
                        break;
                }
            }
            if (tmp_unit_note != null && (!tmp_units.includes(tmp_unit_note))) {
                tmp_units.push(tmp_unit_note);
            }

            //ユニット「VIRTUAL SINGER」と他ユニットは共存しないようになった。
            if (tmp_units.includes("virtual") && tmp_units.length >= 2) {
                tmp_units = tmp_units.filter(x => x != "virtual")
            }

            return tmp_units;
        })();

        this.main_unit = (() => {
            const prior_list = ["inst", "other", "leo", "more", "vivid", "wonder", "night", "virtual"];
            for (const p of prior_list) {
                if (this.units.includes(p)) {
                    return p;
                }
            }
            return "unclassified";
        })();
    }
}
class Vocal {
    static type = {
        virtual: "virtual",
        sekai: "sekai",
        another: "another",
        inst: "inst",
        april: "april"
    };
    constructor(type, members = []) {
        this.type = type;
        this.members = members;

        //units
        let units = [];
        if (type == Vocal.type.virtual) {
            units.push("virtual");
        }
        else {
            for (let m of members) {
                let unit = Character.characters_vocal[m].unit;
                if (!(units.includes(unit) || unit == "virtual")) {
                    units.push(unit);
                }
            }
        }
        this.units = units;

        //str
        if (type == Vocal.type.inst) {
            this.str = "Inst ver.";
        }
        else {
            this.str = members.map(m => Character.characters_vocal[m].fullName ?? m).join(", ");
        }
    }
    is_theme_song_sekai_ver = false;
    setAsThemeSong() {
        //テーマソングの場合、特定ユニットがカバーしているわけではないので、セカイverのユニットを「その他」にする。
        //「群青讃歌」のように、アナザーボーカルverの場合は各ユニットによるカバー扱いになる
        if (this.type == Vocal.type.sekai) {
            this.units = ["other"];
            this.is_theme_song_sekai_ver = true;
        }
    }
    static getIcon(type) {
        switch (type) {
            case Vocal.type.virtual:
                return PjElm.getIcon("keyboard", "バーチャル・シンガーVer.");
            case Vocal.type.sekai:
                return PjElm.getIcon("globe", "セカイVer.");
            case Vocal.type.another:
                return PjElm.getIcon("user-plus", "アナザーボーカルVer.");
            case Vocal.type.inst:
                return PjElm.getIcon("headphones-alt", "Inst Ver.");
            case Vocal.type.april:
                return PjElm.getIcon("face-grin-wide", "エイプリルフールVer.");
            default:
                throw new RangeError("undefined vocaltype");
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
        if (PjUtil.isEmpty(domain)) {
            domain = Link.getDomain(link);
        }
        if (domain == "youtu.be") {
            domain = Link.domain.youtube;
        }
        const span = PjElm.getSpan();
        span.appendChild(PjElm.getFavicon(domain));
        span.appendChild(PjElm.getA(title, link));
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
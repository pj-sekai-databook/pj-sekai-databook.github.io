class Stat {
    constructor() {
        let json = {};
        let conv_json = {};
        let note_json = {};
        let mode;
        this.initKey = (k_json, m) => {
            json = {};
            conv_json = {};
            for (let k in k_json) {
                json[k] = [];
                conv_json[k] = k_json[k];
                note_json[k] = [];
            }
            if (["count", "average"].includes(m)) {
                mode = m;
            }
            else {
                throw new RangeError(`invalid stat mode: ${m}`);
            }
        }
        this.addValue = (k, v, note) => {
            json[k].push(v);
            if (typeof note != "undefined") {
                note_json[k].push(note);
            }
        }
        this.getJson = () => {
            return json;
        }
        this.getRankingData = () => {
            let arr = [];
            for (let k in json) {
                let item = { key: k, detail: note_json[k] }
                switch (mode) {
                    case "count":
                        item.value = json[k].length;
                        break;
                    case "average":
                        item.value = json[k].length ? (json[k].reduce((a, b) => a + b, 0) / json[k].length).toFixed(2) : undefined;
                        break;
                }
                arr.push(item);
            }
            return arr.sort((a, b) => {
                if (typeof a.value != "undefined") {
                    if (typeof b.value != "undefined") {
                        return b.value - a.value;
                    }
                    else {
                        return -1;
                    }
                }
                else {
                    if (typeof b.value != "undefined") {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                }
            });
        }
        this.getRankingTable = () => {
            const table = document.createElement("table");
            table.classList.add("table");
            table.style.width = "auto";
            const tbody = document.createElement("tbody");
            for (let x of this.getRankingData()) {
                const tr = document.createElement("tr");
                const th = document.createElement("th");
                th.innerText = conv_json[x.key];
                tr.appendChild(th);
                const td = document.createElement("td");
                td.innerText = x.value ?? "-";
                td.classList.add("text-end");
                tr.appendChild(td);
                tbody.appendChild(tr);
            }
            table.appendChild(tbody);
            return table;
        }
    }
}
let stat = new Stat();

const applySelectVal = () => {
    resetElement("content");
    let mode = document.getElementById("select_stat").value;
    setStatResult(mode);
    document.getElementById("content").appendChild(stat.getRankingTable());
}
const getCharactersConvJson = (base_json) => {
    let json = {};
    for (let i in base_json) {
        json[i] = base_json[i].fullName;
    }
    return json;
}
const getUnitConvJson = () => {
    let json = getCharactersConvJson(units);
    json["other"] = "その他(混合、インスト)";
    return json;
}
const getCreatorsConvJson = () => {
    let json = {};
    for (let i in Creator.links) {
        if (typeof json[Creator.links[i]] == "undefined") {
            json[Creator.links[i]] = i;
        }
    }
    return json;
}
const setStatResult = (mode) => {
    switch (mode) {
        case "vocal_ranking":
            stat.initKey(getCharactersConvJson(characters_vocal), "count");
            for (let m of musics) {
                for (let v of m.vocals) {
                    switch (v.type) {
                        case "virtual":
                        case "sekai":
                        case "another":
                            for (let c of v.members) {
                                stat.addValue(c, `${m.title}(${vocalTypes[v.type].fullName})`);
                            }
                    }
                }
            }
            break;
        case "another_vocal_ranking":
            stat.initKey(getCharactersConvJson(characters), "count");
            for (let m of musics) {
                for (let v of m.vocals) {
                    switch (v.type) {
                        case "another":
                            for (let c of v.members) {
                                let value = "";
                                if (v.members.length > 1) {
                                    value = `(${v.members.filter(x => x != c).map(x => characters[x].shortName).join(",")})`;
                                }
                                stat.addValue(c, `${m.title}${value}`);
                            }
                    }
                }
            }
            break;
        case "3dmv_ranking":
        case "2dmv_ranking":
            let d = Number(mode[0]);
            if (d == 3) {
                stat.initKey(getCharactersConvJson(characters_mv), "count");
            }
            else if (d == 2) {
                stat.initKey(getCharactersConvJson({
                    ...characters_mv,
                    "mikudayo": Character("ミクダヨー", "ミクダヨー", "virtual"),
                    "nenerobo": Character("ネネロボ", "ネネロボ", "wonder")
                }), "count");
            }
            for (let m of musics) {
                for (let u of m.urls) {
                    if (u instanceof MV && u.d == d) {
                        for (let c of u.c_arr) {
                            stat.addValue(c, `${m.title}`);
                        }
                    }
                }
            }
            break;
        case "diff_4_unit_ranking":
            stat.initKey(getUnitConvJson(), "average");
            for (let m of musics) {
                let main_unit = m.main_unit;
                if (main_unit == "inst") {
                    main_unit = "other";
                }
                if (isValidDiff(m.diff)) {
                    stat.addValue(main_unit, m.diff[4], `${m.title}(Lv.${m.diff[4]})`);
                }
            }
            break;
        case "diff_4_creator_ranking":
            stat.initKey(getCreatorsConvJson(), "average");
            for (let m of musics) {
                let arr = [];
                for (let c of m.creators) {
                    let l = Creator.links[c.name];
                    if (typeof l != "undefined" && !arr.includes(l) && isValidDiff(m.diff)) {
                        arr.push(l);
                        stat.addValue(l, m.diff[4], `${m.title}(Lv.${m.diff[4]})`);
                    }
                }
            }
            break;
        default:
            stat.initKey({});
    }
}
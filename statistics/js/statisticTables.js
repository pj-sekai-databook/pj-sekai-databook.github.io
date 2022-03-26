const setStatisticTable = (id, name_arr, stat_arr, count_unit = "", is_ranking = false) => {
    let counts = {};
    for (let c in name_arr) {
        counts[c] = 0;
    }
    const stat_func = getStatFunc(id);
    for (let s of stat_arr) {
        for (let data of stat_func(s)) {
            if (typeof counts[data] != "undefined") {
                counts[data] += 1;
            }
        }
    }
    let table_arr = {};
    if (is_ranking) {
        let max_index = 0;
        for (let c in counts) {
            max_index = Math.max(max_index, counts[c]);
        }
        let ranks = [];
        for (let i = 0; i <= max_index; ++i) {
            ranks[i] = [];
        }
        for (let c in counts) {
            ranks[counts[c]].push(c);
        }
        for (let i = max_index; i >= 0; --i) {
            if (ranks[i].length) {
                let names = [];
                for (let c of ranks[i]) {
                    names.push(name_arr[c]);
                }
                table_arr[i + count_unit] = names.join(", ");
            }
        }
    }
    else {
        for (let i in name_arr) {
            table_arr[name_arr[i]] = counts[i] + count_unit;
        }
    }
    let table = getStatTable(table_arr);
    table.classList.add("stat");
    insertAfter(document.getElementById(id), table);
};
const getStatTable = (arr) => {
    const table = document.createElement("table");
    table.classList.add("table");
    const tbody = document.createElement("tbody");
    for (let i in arr) {
        const tr = document.createElement("tr");
        const th = getTh(i);
        th.style.whiteSpace = "nowrap";
        tr.appendChild(th);
        tr.appendChild(getTd(arr[i]));
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    return table;
}
const setCharacterRankingTable = (id, chara_arr, stat_arr, count_unit) => {
    let name_arr = {};
    for (let c in chara_arr) {
        name_arr[c] = chara_arr[c].fullName;
    }
    setStatisticTable(id, name_arr, stat_arr, count_unit, true);
}
const getStatFunc = (id) => {
    switch (id) {
        case "vocal_ranking":
            return (m) => {
                let arr = [];
                for (let v of m.vocals) {
                    arr = arr.concat(v.members);
                }
                return arr;
            }
        case "another_vocal_ranking":
            return (m) => {
                let arr = [];
                for (let v of m.vocals) {
                    if (v.type == "another") {
                        arr = arr.concat(v.members);
                    }
                }
                return arr;
            }
        case "3dmv_ranking":
            return (m) => {
                let arr = [];
                for (let v of m.vocals) {
                    if (v.type.indexOf("3DMV") == 0) {
                        arr = arr.concat(v.members);
                    }
                }
                for (let u of m.urls) {
                    if (u instanceof MV && u.d == 3) {
                        arr = arr.concat(u.c_arr);
                    }
                }
                return arr;
            }
        case "2dmv_ranking":
            return (m) => {
                let arr = [];
                for (let v of m.vocals) {
                    if (v.type.indexOf("2DMV") == 0) {
                        arr = arr.concat(v.members);
                    }
                }
                for (let u of m.urls) {
                    if (u instanceof MV && u.d == 2) {
                        arr = arr.concat(u.c_arr);
                    }
                }
                return arr;
            }
        case "implemented_date":
            return (m) => {
                let d = m.date_implemented;
                if (d.getFullYear() == 2020 && d.getMonth() + 1 == 9 && d.getDate() == 30) {
                    return [-1];
                }
                return [d.getDay()];
            }
        case "four_frame_ranking":
            return (f) => {
                return f.characters;
            }
    }
}
const setAllRefData = () => {
    document.getElementById("ref_music").innerText = musics.length + "曲目「" + getLastMusic().title + "」まで";
    document.getElementById("ref_four_frame").innerText = "「" + getLastFourFrame().url.title + "」まで";

}
const getLastMusic = () => {
    let last_music = musics[0];
    for (let m of musics) {
        if (m.id > last_music.id) {
            last_music = m;
        }
    }
    return last_music;
}
const getLastFourFrame = () => {
    let last_four_frame = fourFrameList[0];
    for (let f of fourFrameList) {
        if (f.url.date > last_four_frame.url.date) {
            last_four_frame = f;
        }
    }
    return last_four_frame;
}

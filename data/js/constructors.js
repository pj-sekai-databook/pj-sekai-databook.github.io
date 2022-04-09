const Unit = (fullName, shortName, color) => {
    return {
        fullName, shortName, color
    };
};
const Character = (fullName, shortName, unit) => {
    return {
        fullName, shortName, unit
    };
};
const Interaction = (from, to, fromStr, toStr) => {
    return {
        from, to, fromStr, toStr,
        fromC: convMiku(from), toC: convMiku(to),
        text: getInteractionText(from, to, fromStr, toStr)
    };
};
const getInteractionText = (from, to, fromStr, toStr) => {
    let strArr = [];
    if (from != null) {
        strArr.push(characters_interaction[from].shortName + "「" + fromStr + "」");
    }
    if (to != null) {
        strArr.push(characters_interaction[to].shortName + "「" + toStr + "」");
    }
    return strArr.join("\n");
}
const convMiku = (name) => {
    if (name == null) {
        return null;
    }
    if (name.match(/^miku_/)) {
        return "miku";
    }
    else {
        return name;
    }
};
const Name = (from, to, name) => {
    let text = characters_interaction[from].shortName;
    if (from == to) {
        text += "の一人称";
    }
    else {
        text += "→" + characters_interaction[to].shortName;
    }
    text += ": " + name;
    return {
        from, to, name, text
    };
};
const VocalType = (fullName, shortName, icon) => {
    return {
        fullName, shortName, icon
    };
};
const Vocal = (type, members = []) => {
    const getUnitsOfVocal = () => {
        if (type == "virtual") {
            return ["virtual"];
        }
        let units = [];
        for (let m of members) {
            let unit = characters_all[m].unit;
            if (!(type == "sekai" && unit == "virtual")) {
                if (units.indexOf(unit) < 0) {
                    units.push(unit);
                }
            }
        }
        if (units.length >= 2 && units.indexOf("virtual") < 0) {
            return ["other"];
        }
        return units;
    };
    const getStrOfVocal = () => {
        //const header = (typeof vocalTypes[type] != "undefined") ? vocalTypes[type].shortName : "* ";
        let names = [];
        if (type == "inst") {
            return "Inst ver.";
        }
        for (let m of members) {
            if (typeof characters_all[m] != "undefined") {
                names.push(characters_all[m].fullName);
            }
            else {
                names.push("???");
            }
        }
        return names.join(", ");
    }
    return {
        type, members, units: getUnitsOfVocal(), str: getStrOfVocal()
    };
};
const mDate = (y, m, d, h = 0, mi = 0) => {
    return new Date(y, m - 1, d, h, mi);
};
const getStrFromDate = (md) => {
    if (md == null) {
        return "----/--/--";
    }
    else {
        return md.toLocaleDateString();
    }
};
const compareDate = (a, b, isAsc = true) => {
    if (a == null) {
        if (b == null) {
            return 0;
        }
        else {
            return 1;
        }
    }
    else {
        if (b == null) {
            return -1;
        }
        else {
            const dig = isAsc ? 1 : -1;
            return dig * (a.getTime() - b.getTime());
        }
    }
};
const mURL = (title, link, date = null) => {
    return {
        title, link, date,
        domain: getDomain(link)
    }
};
const getAFromURL = (u) => {
    let span = document.createElement("span");
    let a = getA(u.title, u.link, true);
    span.appendChild(getImg("https://www.google.com/s2/favicons?domain=" + u.domain));
    span.appendChild(a);
    return span;
};
const Creator = (name, part, note = null) => {
    return {
        name,
        isLyricist: part[0] == "t",
        isComposer: part[1] == "t",
        isArranger: part[2] == "t",
        note
    };
};
const getCreatorRole = (c) => {
    let arr = [];
    if (c.isLyricist) {
        arr.push("作詞");
    }
    if (c.isComposer) {
        arr.push("作曲");
    }
    if (c.isArranger) {
        arr.push("編曲");
    }
    if (c.note != null) {
        arr.push(c.note);
    }
    if (arr.length > 0) {
        return "(" + arr.join(", ") + ")";
    }
    else {
        return "";
    }
};
const getAFromCreator = (c) => {
    let span = getSpan();
    if (typeof creatorLinks[c.name] != "undefined") {
        span.appendChild(getAFromURL(mURL(c.name, creatorLinks[c.name])));
    }
    else {
        span.appendChild(getSpan(c.name));
    }
    span.appendChild(getSpan(getCreatorRole(c)));
    return span;
}
const isSameCreator = (c1, c2) => {
    if (c1 == c2) {
        return true;
    }
    if (typeof creatorLinks[c1] != "undefined") {
        if (typeof creatorLinks[c2] != "undefined") {
            return creatorLinks[c1] == creatorLinks[c2];
        }
        else {
            return false;
        }
    }
    else {
        if (typeof creatorLinks[c2] != "undefined") {
            return false;
        }
        else {
            // アカウントが存在しないが名前が2つ複数ある場合の例外をここで処理
            return false;
        }
    }
};
const DiffParam = {
    EASY: 0,
    NORMAL: 1,
    HARD: 2,
    EXPERT: 3,
    MASTER: 4
};
const Diff = (easy = 0, normal = 0, hard = 0, expert = 0, master = 0) => {
    if (easy * normal * hard * expert * master == 0) {
        return null;
    }
    else {
        return [easy, normal, hard, expert, master];
    }
};
const getStrFromDiff = (diff) => {
    if (diff == null) {
        return "-- / -- / -- / -- / --";
    }
    else {
        return diff.join(" / ");
    }
};
const Thumbnail = (url, characters = null, src = null) => {
    return {
        url, characters, src
    };
};
const Team = (characters, names) => {
    return {
        characters, names: uniq(names),
        characters_virtual: getVirtualsFromCharacters(characters)
    };
};
const TeamStat = (cName, tName) => {
    return {
        cName, tName
    };
};
const getVirtualsFromCharacters = (characters) => {
    let arr = [];
    for (let c of characters) {
        let new_c = c;
        if (c.match(/_/)) {
            new_c = new_c.replace(/_.*$/, "");
        }
        if (characters_all[new_c].unit == "virtual") {
            arr.push(new_c);
        }
    }
    return arr;
};
const Hist = (date, text) => {
    return {
        date, text
    };
}
const PostsRowInfo = (title, arr, card_class) => {
    return {
        title, arr, card_class
    };
}
const Result = (easy, normal, hard, expert, master) => {
    return [easy, normal, hard, expert, master];
}
const ResultParam = {
    NC: 0, // Not Cleared
    CL: 1, // Cleared
    FC: 2, // Full Combo
    AP: 3  // All Perfect
};
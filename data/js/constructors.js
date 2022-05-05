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
const VocalType = (fullName, shortName, icon) => {
    return {
        fullName, shortName, icon
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
        domain: Link.getDomain(link)
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
const getAFromCreator = (c, has_detail = true) => {
    let span = getSpan();
    if (typeof creatorLinks[c.name] != "undefined") {
        span.appendChild(getAFromURL(mURL(c.name, creatorLinks[c.name])));
    }
    else {
        span.appendChild(getSpan(c.name));
    }
    if (has_detail) {
        span.appendChild(getSpan(getCreatorRole(c)));
    }
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
const Result = (easy, normal, hard, expert, master) => {
    return [easy, normal, hard, expert, master];
}
const ResultParam = {
    NC: 0, // Not Cleared
    CL: 1, // Cleared
    FC: 2, // Full Combo
    AP: 3  // All Perfect
};
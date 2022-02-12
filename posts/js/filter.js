const initCharactersFilter = (baseArr) => {
    resetElement("table_filter_characters");
    let table = document.getElementById("table_filter_characters");
    let thName = null;
    let cArr = [];
    for (let i in baseArr) {
        let c = baseArr[i];
        if (c.unit != thName) {
            if (thName != null) {
                table.appendChild(getCharactersFilterTr(thName, cArr));
                cArr = [];
            }
            thName = c.unit;
        }
        cArr.push(i);
    }
    if (cArr.length > 0) {
        table.appendChild(getCharactersFilterTr(thName, cArr));
    }

};
const getCharactersFilterTr = (thName, cArr) => {
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    let thLabel = getCheckboxLabel("filter_units", thName, units[thName].fullName, true);
    thLabel.addEventListener("change", () => { updateCharactersFilterByUnit(thName); });
    th.appendChild(thLabel);
    tr.appendChild(th);
    for (let i of cArr) {
        let c = characters_all[i];
        let td = document.createElement("td");
        let tdLabel = getCheckboxLabel("filter_characters", i, c.shortName, true);
        tdLabel.addEventListener("change", () => { updateUnitsFilterByCharacter(i); });
        td.appendChild(tdLabel);
        if (i.match(/miku_/)) {
            td.colSpan = 2;
        }
        tr.appendChild(td);
    }
    return tr;
}
const getCharactersFilter = () => {
    let cArr = [];
    for (let f of document.getElementById("form")["filter_characters"]) {
        if (f.checked) {
            cArr.push(f.value);
        }
    }
    return cArr;
}
const toggleAllCharactersFilter = () => {
    let tf = null;
    for (let f of document.getElementById("form")["filter_characters"]) {
        if (tf == null) {
            tf = !f.checked;
        }
        f.checked = tf;
    }
    for (let f of document.getElementById("form")["filter_units"]) {
        f.checked = tf;
    }
}
const updateCharactersFilterByUnit = (u) => {
    let tf = null;
    for (let f of document.getElementById("form")["filter_units"]) {
        if (f.value == u) {
            tf = f.checked;
            break;
        }
    }
    if (tf == null) {
        return;
    }
    for (let f of document.getElementById("form")["filter_characters"]) {
        if (characters_all[f.value].unit == u) {
            f.checked = tf;
        }
    }
}
const updateUnitsFilterByCharacter = (c) => {
    let u = characters_all[c].unit;
    let tf = true;
    for (let f of document.getElementById("form")["filter_characters"]) {
        if (characters_all[c].unit == u) {
            tf = tf && f.checked;
        }
    }
    for (let f of document.getElementById("form")["filter_units"]) {
        if (f.value == u) {
            f.checked = tf;
            break;
        }
    }
}
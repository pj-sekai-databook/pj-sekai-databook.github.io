const filter_etc = {
    "inst": "Inst Ver."
};
const initFilter = () => {
    const area = document.getElementById("checkbox_area_chara");
    let prev_unit_name = null;
    let prev_unit_arr = [];
    for (const i in Character.characters_vocal) {
        const c = Character.characters_vocal[i];
        if (prev_unit_name != c.unit) {
            if (prev_unit_arr.indexOf(c.unit) >= 0) {
                area.appendChild(getDiv("その他 (" + Unit.units[c.unit].fullName + ")", "form-text"));
            }
            else {
                area.appendChild(getDiv(Unit.units[c.unit].fullName, "form-text"));
                prev_unit_arr.push(c.unit);
            }
            prev_unit_name = c.unit;
        }
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "cb_" + i;
        checkbox.value = i;
        checkbox.name = "cb_chara";
        checkbox.className = "btn-check";
        checkbox.autocomplete = "off";
        checkbox.checked = true;
        const label = document.createElement("label");
        label.setAttribute("for", "cb_" + i);
        label.className = "btn btn-sm btn-outline-primary m-1";
        label.innerText = c.shortName;
        area.appendChild(checkbox);
        area.appendChild(label);
    }
    if (Object.keys(filter_etc).length > 0) {
        area.appendChild(getDiv("その他", "form-text"));
        for (const i in filter_etc) {
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = "cb_" + i;
            checkbox.className = "btn-check";
            checkbox.autocomplete = "off";
            checkbox.checked = true;
            const label = document.createElement("label");
            label.setAttribute("for", "cb_" + i);
            label.className = "btn btn-sm btn-outline-primary m-1";
            label.innerText = filter_etc[i];
            area.appendChild(checkbox);
            area.appendChild(label);
        }
    }
}
const applyFilter = () => {
    const cb_chara = document.getElementsByName("cb_chara");
    let chara_list = [];
    let is_filtered = false;
    for (const c of cb_chara) {
        if (c.checked) {
            chara_list.push(c.value);
        }
        else {
            is_filtered = true;
        }
    }
    let count_all = 0;
    let count_displayed = 0;
    const is_inst_selected = document.getElementById("cb_inst").checked;
    if (!is_inst_selected) {
        is_filtered = true;
    }
    $(".sort_item").each((i, e) => {
        const m = musics[e.getAttribute("data-musics-index")];
        let is_target = false;
        for (let v of m.vocals) {
            for (let c of v.members) {
                if (chara_list.indexOf(c) >= 0) {
                    is_target = true;
                    break;
                }
            }
            if (is_target) {
                break;
            }
        }
        if (m.main_unit == "inst" && is_inst_selected) {
            is_target = true;
        }
        if (is_target) {
            e.classList.remove("d-none");
            e.classList.add("d-flex");
            count_displayed += 1;
        }
        else {
            e.classList.remove("d-flex");
            e.classList.add("d-none");
        }
        count_all += 1;
    });
    if (is_filtered) {
        document.getElementById("div_filter_result").innerText = "表示中: " + count_displayed + "/" + count_all;
        document.getElementById("div_filter_result").style.visibility = "visible";
    }
    else {
        document.getElementById("div_filter_result").innerText = "*";
        document.getElementById("div_filter_result").style.visibility = "hidden";
    }
    document.activeElement.blur();
};
const toggleAllCharacters = (tf) => {
    const cb_chara = document.getElementsByName("cb_chara");
    for (const c of cb_chara) {
        c.checked = tf;
    }
    for (const i in filter_etc) {
        document.getElementById("cb_" + i).checked = tf;
    }
    applyFilter();
}
const applyOption = () => {
    applyFilter();
}
const switchOptionButtonDisp = (tf) => {
    const btn = document.getElementById("button_option");
    btn.disabled = !tf;
    btn.style.opacity = tf ? 1 : 0;
}
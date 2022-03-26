const modal_music_id = {
    main: "modal_music",
    title: "modal_music_title",
    body: "modal_music_body"
};
const card_id = {
    footer: "card_footer_{id}"
}
const initAllCards = () => {
    const card_area = document.getElementById("div_card_area");
    const modal_area = document.getElementById("div_modal_music_area");
    for (const m of Array.from(musics).sort((a, b) => -(a.id - b.id))) {
        card_area.appendChild(getCardCol(m, true));
    }
    const future_card_area = document.getElementById("div_future_card_area");
    for (const fm of Array.from(future_musics).sort((a, b) => (a.id - b.id))) {
        future_card_area.appendChild(getCardCol(fm, false));
    }
    updateFooter("implemented");
    modal_area.appendChild(getModal());
    document.getElementById(modal_music_id.main).addEventListener("show.bs.modal", (e) => {
        const button = e.relatedTarget;
        const id = button.getAttribute("data-bs-id");
        const m = [...musics, ...future_musics].find((m) => { return m.id == id });
        document.getElementById(modal_music_id.title).innerText = m.title;
        resetElement(modal_music_id.body);
        document.getElementById(modal_music_id.body).appendChild(getDetailTable(m));
    });
}
const getCardCol = (m, is_normal = false) => {
    const col = getDiv("", "col px-1 py-3 d-flex justify-content-center align-items-center" + (is_normal ? " sort_item" : ""));
    col.appendChild(getCard(m));
    col.setAttribute("data-implemented-order", m.id);
    const index = musics.findIndex((m_base) => { return m_base.id == m.id });
    col.setAttribute("data-musics-index", index);
    return col;
}
const getCard = (m) => {
    const card = getDiv("", "card card_music");
    //header
    const card_header = getDiv(m.title, "card-header d-flex justify-content-between align-items-center");
    card_header.appendChild(getModalButton(m));
    card.appendChild(card_header);
    //body
    const card_body = getDiv("", "card-body text-center");
    const img_wrap = getDiv("", "img_wrap");
    let img = null;
    for (let u of m.urls) {
        if (u instanceof Link) {
            if (u.domain == "www.youtube.com") {
                img = getImg(u.thumb_src, "imgYouTube");
                img_wrap.classList.remove("niconico");
                break;
            }
            else if (u.domain == "www.nicovideo.jp") {
                img = getImg(u.thumb_src, "imgYouTube");
                img_wrap.classList.add("niconico");
                break;
            }
        }
        else {
            if (u.domain == "www.youtube.com") {
                img = getImg(getYouTubeThumbnailSrc(u.link), "imgYouTube");
                img_wrap.classList.remove("niconico");
                break;
            }
            else if (u.domain == "www.nicovideo.jp") {
                img = getImg(getNiconicoThumbnailSrc(u.link), "imgYouTube");
                img_wrap.classList.add("niconico");
                break;
            }
        }
    }
    if (img == null) {
        img = getImg("./img/img_not_found.png", "imgYouTube");
    }
    img_wrap.appendChild(img);
    card_body.appendChild(img_wrap);
    card.appendChild(card_body);
    //footer
    const card_footer = getDiv("", "card-footer small d-flex justify-content-between align-items-center");
    card_footer.appendChild(getDiv("#" + m.id, "text-muted small"));
    const text_footer = getDiv("", "text-muted text-end small");
    text_footer.id = card_id.footer.replace("{id}", m.id);
    card_footer.appendChild(text_footer);
    card.appendChild(card_footer);
    return card;
}
const getModal = () => {
    const modal = getDiv("", "modal fade");
    modal.id = modal_music_id.main;
    modal.tabindex = -1;
    modal.setAttribute("aria-hidden", true);
    const modal_dialog = getDiv("", "modal-dialog modal-dialog-scrollable");
    const modal_content = getDiv("", "modal-content");
    const modal_header = getDiv("", "modal-header");
    const modal_title = getElm("h5", "{title}", "modal-title");
    modal_title.id = modal_music_id.title;
    modal_header.appendChild(modal_title);
    const modal_close_button = document.createElement("button");
    modal_close_button.className = "btn-close";
    modal_close_button.setAttribute("data-bs-dismiss", "modal");
    modal_close_button.setAttribute("aria-label", "Close");
    modal_header.appendChild(modal_close_button);
    modal_content.appendChild(modal_header);
    const modal_body = getDiv("{body}", "modal-body");
    modal_body.id = modal_music_id.body;
    modal_content.appendChild(modal_body);
    modal_dialog.appendChild(modal_content);
    modal.appendChild(modal_dialog);
    return modal;
}
const getModalButton = (m) => {
    const button = getIcon("circle-info");
    button.setAttribute("data-bs-toggle", "modal");
    button.setAttribute("data-bs-target", "#" + modal_music_id.main);
    button.setAttribute("data-bs-id", m.id);
    button.style.cursor = "pointer";
    return button;
}
const getUnitIcon = (m) => {
    let result = "";
    const list = {
        virtual: "💎",
        leo: "🌠",
        more: "☘",
        vivid: "🎤",
        wonder: "👑",
        night: "🌙",
        others: "👬"
    }
    for (let u of m.units) {
        result += list[u];
    }
    return result;
}


const getDetailTable = (m) => {
    const table = document.createElement("table");
    table.className = "table table-border small align-middle";
    const tbody = document.createElement("tbody");
    tbody.appendChild(getSimpleTr("楽曲投稿日", getStrFromDate(m.date_posted)));
    tbody.appendChild(getSimpleTr("ゲーム収録日", getStrFromDate(m.date_implemented)));
    tbody.appendChild(getCreatorTr(m));
    tbody.appendChild(getMainUnitTr(m));
    tbody.appendChild(getVocalTr(m));
    tbody.appendChild(getUrlTr(m));
    tbody.appendChild(getSimpleTr("楽曲Lv.", getStrFromDiff(m.diff)));
    tbody.appendChild(getRelatedMusicsTr(m));
    table.appendChild(tbody);
    return table;
}
const getSimpleTr = (title, text) => {
    let tr = getTr();
    tr.appendChild(getTh(title, "th_detail"));
    tr.appendChild(getTd(text));
    return tr;
}
const getUrlTr = (m) => {
    let tr = getTr();
    tr.appendChild(getTh("URL"));
    let td = getTd();
    let url_list = [];
    for (let u of m.urls) {
        if (u instanceof Link) {
            url_list.push(u.getAnchorTag());
        }
        else {
            url_list.push(getAFromURL(u));
        }
    }
    td.appendChild(concatElms(url_list, getBr()));
    tr.appendChild(td);
    return tr;
}
const getCreatorTr = (m) => {
    let tr = getTr();
    tr.appendChild(getTh("クリエイター"));
    let td = getTd();
    let creator_list = [];
    for (let c of m.creators) {
        creator_list.push(getAFromCreator(c));
    }
    td.appendChild(concatElms(creator_list, getBr()));
    tr.appendChild(td);
    return tr;
}
const getMainUnitTr = (m) => {
    let tr = getTr();
    tr.appendChild(getTh("ユニット"));
    switch (m.main_unit) {
        case "other":
            tr.appendChild(getTd("その他"));
            break;
        case "inst":
            tr.appendChild(getTd("その他"));
            break;
        case "unclassified":
            let unit_temp = m.note.replace(/^.*_/, "");
            if (Object.keys(units).includes(unit_temp)) {
                tr.appendChild(getTd(units[unit_temp].fullName));
            }
            else {
                tr.appendChild(getTd(""));
            }
            break;
        default:
            tr.appendChild(getTd(units[m.main_unit].fullName));
            break;
    }
    return tr;
}
const getVocalTr = (m) => {
    let tr = getTr();
    tr.appendChild(getTh("ボーカル"));
    let vocal_list = [];
    for (let v of m.vocals) {
        if (Object.keys(vocalTypes).includes(v.type)) {
            vocal_list.push(v);
        }
    }
    const table = document.createElement("table");
    table.className = "table table-sm my-0 table_vocal";
    const tbody = document.createElement("tbody");
    for (let v of vocal_list) {
        const tr_sub = getTr();
        const th_sub = getTh("", "align-middle text-center th_vocal_icon");
        const icon = getIcon(vocalTypes[v.type].icon);
        icon.title = vocalTypes[v.type].fullName;
        th_sub.appendChild(icon);
        tr_sub.appendChild(th_sub);
        tr_sub.appendChild(getTd(v.str));
        tbody.appendChild(tr_sub);
    }
    table.appendChild(tbody);
    const td = getTd("", "my-0 py-0");
    td.appendChild(table);
    tr.appendChild(td);
    //tr.appendChild(getTd(vocal_list.join("\n")));
    return tr;
}
const getRelatedMusicsTr = (m) => {
    let tr = getTr();
    tr.appendChild(getTh("同クリエイターの\n収録楽曲"));
    let related_music_list = [];
    for (let m2 of musics) {
        if (m.id == m2.id) {
            continue;
        }
        let flag = false;
        for (let c of m.creators) {
            for (let c2 of m2.creators) {
                if (isSameCreator(c.name, c2.name)) {
                    let a = document.createElement("span");
                    a.innerText = m2.title;
                    /*
                    a.classList.add("aJump");
                    a.onclick = () => {
                        scrollDetails(m2.id);
                    }
                    */
                    related_music_list.push(a);
                    flag = true;
                    break;
                }
            }
            if (flag) {
                break;
            }
        }
    }
    if (related_music_list.length > 0) {
        let td = getTd("");
        td.appendChild(concatElms(related_music_list, getBr()));
        tr.appendChild(td);
    }
    else {
        tr.appendChild(getTd("なし"));
    }
    return tr;
}
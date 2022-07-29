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
}
const getCardCol = (m, is_normal) => {
    const col = PjElm.getDiv(getCard(m), "col px-1 py-3 d-flex justify-content-center align-items-center");
    if (is_normal) {
        col.classList.add("sort_item");
    }
    col.setAttribute("data-implemented-order", m.id);
    const index = musics.findIndex((m_base) => { return m_base.id == m.id });
    col.setAttribute("data-musics-index", index);
    return col;
}
const getCard = (m) => {
    const card = PjElm.getDiv("", "card card_music");
    //header
    const card_header = PjElm.getDiv(m.title, "card-header d-flex justify-content-between align-items-center");
    card_header.appendChild(getModalButton(m));
    card.appendChild(card_header);
    //body
    const card_body = PjElm.getDiv("", "card-body text-center position-relative");
    const note_text = getNoteText(m.note);
    if (note_text.length) {
        card_body.appendChild(PjElm.getDiv(note_text, "note"));
    }
    const img_wrap = PjElm.getDiv("", "img_wrap");
    let img = null;
    for (let u of m.urls) {
        if (u instanceof PlayingMovie) {
            img = PjElm.getImg(u.thumb_src, "imgYouTube");
            img_wrap.classList.add("playing_movie");
            break;
        }
        if (u instanceof Link) {
            if (u.domain == Link.domain.youtube) {
                img = PjElm.getImg(u.thumb_src, "imgYouTube");
                break;
            }
            else if (u.domain == Link.domain.niconico) {
                if (u.thumb_src.startsWith(Link.thumb_info.niconico.hq_head)) {
                    img = PjElm.getImg(u.thumb_src, "imgYouTube");
                    break;
                }
                else {
                    img = PjElm.getImg(u.thumb_src, "imgYouTube");
                    img_wrap.classList.add("niconico");
                    break;
                }
            }
        }
    }
    if (img == null) {
        img = PjElm.getImg("./img/img_not_found.png", "imgYouTube");
    }
    img_wrap.appendChild(img);
    img_wrap.appendChild(PjElm.getDiv("", "cover"));
    card_body.appendChild(img_wrap);
    card.appendChild(card_body);
    //footer
    const card_footer = PjElm.getDiv("", "card-footer small d-flex justify-content-between align-items-center");
    card_footer.appendChild(PjElm.getDiv("#" + m.id, "text-muted small"));
    const text_footer = PjElm.getDiv("", "text-muted text-end small");
    text_footer.id = card_id.footer.replace("{id}", m.id);
    card_footer.appendChild(text_footer);
    card.appendChild(card_footer);
    return card;
}
const getModal = () => {
    const modal = PjElm.getDiv("", "modal fade");
    modal.id = modal_music_id.main;
    modal.tabindex = -1;
    modal.setAttribute("aria-hidden", true);
    const modal_content = PjElm.getDiv("", "modal-content");
    const modal_header = PjElm.getDiv("", "modal-header");
    const modal_title = PjElm.getElm("h5", "{title}", "modal-title");
    modal_title.id = modal_music_id.title;
    modal_header.appendChild(modal_title);
    const modal_close_button = document.createElement("button");
    modal_close_button.className = "btn-close";
    modal_close_button.setAttribute("data-bs-dismiss", "modal");
    modal_close_button.setAttribute("aria-label", "Close");
    modal_header.appendChild(modal_close_button);
    modal_content.appendChild(modal_header);
    const modal_body = PjElm.getDiv("{body}", "modal-body");
    modal_body.id = modal_music_id.body;
    modal_content.appendChild(modal_body);
    modal.appendChild(PjElm.getDiv(modal_content, "modal-dialog modal-dialog-scrollable"));
    return modal;
}
const getModalButton = (m) => {
    const button = PjElm.getIcon("circle-info");
    button.addEventListener("click", () => {
        showModal(m.id);
    })
    button.style.cursor = "pointer";
    return button;
}
const showModal = (() => {
    let modal = null;
    return (id, time = 0) => {
        if (modal == null) {
            modal = new bootstrap.Modal(document.getElementById(modal_music_id.main));
        }
        $(`#${modal_music_id.title},#${modal_music_id.body}`).animate({
            opacity: 0
        }, time, () => {
            const m = [...musics, ...future_musics].find((m) => { return m.id == id });
            document.getElementById(modal_music_id.title).innerText = m.title;
            PjElm.reset(modal_music_id.body);
            document.getElementById(modal_music_id.body).appendChild(getDetailTable(m));
            $(`#${modal_music_id.title},#${modal_music_id.body}`).animate({ opacity: 1 }, time);
            modal.show();
        });
    }
})();
const getDetailTable = (m) => {
    const table = document.createElement("table");
    table.className = "table table-border small align-middle";
    const tbody = document.createElement("tbody");
    tbody.appendChild(getSimpleTr("楽曲投稿日", PjDate.format(m.date_posted, "yyyy/MM/dd")));
    if (m.date_implemented instanceof Date) {
        tbody.appendChild(getSimpleTr("ゲーム収録日", PjDate.format(m.date_implemented, "yyyy/MM/dd")));
    }
    tbody.appendChild(getNewCreatorTr(m));
    tbody.appendChild(getMainUnitTr(m));
    tbody.appendChild(getVocalTr(m));
    tbody.appendChild(getUrlTr(m));
    if (!m.diff.isEmpty) {
        tbody.appendChild(getSimpleTr("楽曲Lv.", m.diff.str));
    }
    tbody.appendChild(getRelatedMusicsTr(m));
    table.appendChild(tbody);
    return table;
}
const getSimpleTr = (title, text) => {
    let tr = PjElm.getTr();
    tr.appendChild(PjElm.getTh(title, "th_detail"));
    tr.appendChild(PjElm.getTd(text));
    return tr;
}
const getUrlTr = (m) => {
    let tr = PjElm.getTr();
    tr.appendChild(PjElm.getTh("URL"));
    tr.appendChild(PjElm.getTd(PjElm.concat(m.urls.map(u => u.getAnchorTag()), PjElm.getBr())));
    return tr;
}
const getNewCreatorTr = (m) => {
    if (m.creators.some(c => !c.hasRole)) {
        //ロールがなにも定義されていないクリエイターが1人でもいる場合、単純にリンクのみ並べる
        let tr = PjElm.getTr();
        tr.appendChild(PjElm.getTh("クリエイター"));
        tr.appendChild(PjElm.getTd(PjElm.concat(m.creators.map(c => c.getAnchorTag()), PjElm.getBr())));
        return tr;
    }
    const tr = PjElm.getTr();
    tr.appendChild(PjElm.getTh("クリエイター"));
    const getSubTr = (title, arr) => {
        const tr_sub = PjElm.getTr();
        const th_sub = PjElm.getTh(title, "align-middle text-center");
        tr_sub.appendChild(th_sub);
        if (arr.length > 0) {
            tr_sub.appendChild(PjElm.getTd(PjElm.concat(arr.map(c => c.getAnchorTag()), PjElm.getBr())));
        }
        else {
            tr_sub.appendChild(PjElm.getTd("-"));
        }
        return tr_sub;
    }
    const table = document.createElement("table");
    table.className = "table table-sm my-0 table_sub";
    const tbody = document.createElement("tbody");
    tbody.appendChild(getSubTr("作詞:", m.creators.filter(c => c.isLyricist)));
    tbody.appendChild(getSubTr("作曲:", m.creators.filter(c => c.isComposer)));
    tbody.appendChild(getSubTr("編曲:", m.creators.filter(c => c.isArranger)));
    for (let c of m.creators) {
        if (c.note != null) {
            tbody.appendChild(getSubTr(`${c.note}:`, [c]));
        }
    }
    table.appendChild(tbody);
    const td = PjElm.getTd("", "my-0 py-0");
    td.appendChild(table);
    tr.appendChild(td);
    return tr;
}
const getMainUnitTr = (m) => {
    const tr = PjElm.getTr();
    tr.appendChild(PjElm.getTh("ユニット"));
    switch (m.main_unit) {
        case "other":
            tr.appendChild(PjElm.getTd("その他"));
            break;
        case "inst":
            tr.appendChild(PjElm.getTd("その他"));
            break;
        case "unclassified":
            tr.appendChild(PjElm.getTd("???"));
            break;
        default:
            tr.appendChild(PjElm.getTd(Unit.units[m.main_unit].fullName));
            break;
    }
    return tr;
}
const getVocalTr = (m) => {
    const tr = PjElm.getTr();
    tr.appendChild(PjElm.getTh("ボーカル"));
    const table = document.createElement("table");
    table.className = "table table-sm my-0 table_sub";
    const tbody = document.createElement("tbody");
    for (let v of m.vocals) {
        const tr_sub = PjElm.getTr();
        tr_sub.appendChild(PjElm.getTh(Vocal.getIcon(v.type), "align-middle text-center"));
        if (v.type == "april") {
            const td = PjElm.getTd();
            const s = document.createElement("s");
            s.innerText = v.str;
            td.appendChild(s);
            tr_sub.appendChild(td);
        }
        else {
            tr_sub.appendChild(PjElm.getTd(v.str));
        }
        tbody.appendChild(tr_sub);
    }
    table.appendChild(tbody);
    const td = PjElm.getTd(table, "my-0 py-0");
    tr.appendChild(td);
    return tr;
}
const getRelatedMusicsTr = (m) => {
    let tr = PjElm.getTr();
    tr.appendChild(PjElm.getTh("同クリエイターの\n収録楽曲"));
    let related_music_list = [];
    for (let m2 of musics) {
        if (m.id == m2.id) {
            continue;
        }
        let flag = false;
        for (let c of m.creators) {
            for (let c2 of m2.creators) {
                if (Creator.isSame(c, c2)) {
                    const a = document.createElement("a");
                    a.innerText = m2.title;
                    a.classList.add("jump", "disabled");
                    a.onclick = () => {
                        showModal(m2.id, 100);
                    }
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
        tr.appendChild(PjElm.getTd(PjElm.concat(related_music_list, PjElm.getBr())));
    }
    else {
        tr.appendChild(PjElm.getTd("なし"));
    }
    return tr;
}

const getNoteText = (note) => {
    let text_list = [];
    for (let n of note) {
        if (n == "contest") {
            text_list.push("楽曲コンテスト採用曲");
        }
        if (n.match(/^next_\d+$/)) {
            text_list.push(`第${n.replace(/^next_/, "")}回プロセカNEXT採用曲`);
        }
        if (n.match(/^newlyWritten/)) {
            text_list.push("書き下ろし楽曲");
        }
        if (n == "performai") {
            text_list.push("ゲキ！チュウマイコラボ");
        }
        if (n == "brsDF") {
            text_list.push("アニメ放送記念タイアップ");
        }
        if (n == "cupnoodle") {
            text_list.push("カップヌードルタイアップ");
        }
        if (n == "pocari") {
            text_list.push("ポカリスエットコラボ");
        }
        if (n.match(/^collab_.+/)) {
            text_list.push(`${n.replace(/^collab_/, "")}コラボ`);
        }
        if (n.match(/^tieup_.+/)) {
            text_list.push(`${n.replace(/^tieup_/, "")}タイアップ`);
        }
    }
    return text_list.join(",");
}
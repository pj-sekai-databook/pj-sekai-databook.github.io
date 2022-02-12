let is_all_inited = false;
const setAllPostsRows = () => {
    for (let parent_id in parented_row_info_list) {
        const list = parented_row_info_list[parent_id]
        for (let child_id in list) {
            setPostsRow(parent_id, child_id, list[child_id]);
        }
    }
    initAllOfficialPostLinks();
    is_all_inited = true;
};
const getColFromThumbnail = (t, card_class) => {
    const col = document.createElement("div");
    col.classList.add("col", "px-1", "py-3", "d-flex", "justify-content-center");
    const card = document.createElement("div");
    card.classList.add("card", "h-100", "card_thumb", card_class);
    const card_inner = document.createElement("div");
    card_inner.classList.add("card_inner");
    const img_outer = document.createElement("div");
    img_outer.classList.add("text-center");
    const img = document.createElement("img");
    img.classList.add("img_thumb");
    switch (t.url.domain) {
        case "twitter.com":
        case "bushiroad-music.com":
        case "pocarisweat.jp":
            img.src = t.src;
            break;
        case "www.youtube.com":
            img.src = getYouTubeThumbnailSrc(t.url.link);
            break;
        default:
            break;
    }
    img_outer.appendChild(img);
    card_inner.appendChild(img_outer);
    const text_outer = document.createElement("div");
    text_outer.classList.add("text-start");
    text_outer.appendChild(getAFromURL(t.url));
    card_inner.appendChild(text_outer);
    card.appendChild(card_inner);
    col.appendChild(card);
    return col;
};
const setPostsRow = (parent_id, id, info) => {
    const arr = info.arr;
    const card_class = info.card_class
    const row = document.createElement("div");
    const row_id = "row_" + id;
    row.id = row_id;
    row.classList.add("row", "flex-row", "row_posts");
    const len = arr.length > maxInitPostLen ? initPostLen : arr.length;
    for (let t of arr.slice(0, len)) {
        row.appendChild(getColFromThumbnail(t, card_class));
    }
    if (arr.length > maxInitPostLen) {
        row.appendChild(getRemainCol(parent_id, arr.slice(initPostLen), card_class));
    }
    insertAfter(document.getElementById(id), row);
}
const getRemainCol = (parent_id, remain_arr, card_class) => {
    const col = document.createElement("div");
    col.classList.add("col", "px-1", "py-3", "d-flex", "justify-content-center");
    const card = document.createElement("div");
    card.classList.add("card", "card_remain", "card_thumb", card_class, "text-nowrap", "d-flex", "justify-content-center", "align-items-center", "h-100", "text-center");
    const span = document.createElement("div");
    span.classList.add("text-nowrap");
    span.innerText = "残り" + remain_arr.length + "件を\n表示する";
    card.appendChild(span);
    col.appendChild(card);
    col.onclick = () => {
        switchTab(parent_id);
    }
    return col;
}
const setOneRow = (id) => {
    const info_list = parented_row_info_list[id];
    resetElement("content_one_area");
    const area = document.getElementById("content_one_area");
    for (let info_id in info_list) {
        const info = info_list[info_id];
        const h3 = document.createElement("h3");
        h3.innerText = info.title;
        area.appendChild(h3);
        const row = document.createElement("div");
        row.classList.add("row", "flex-row", "w-auto", "row_posts");
        const arr = info.arr;
        const card_class = info.card_class;
        for (let t of arr) {
            row.appendChild(getColFromThumbnail(t, card_class));
        }
        area.appendChild(row);
    }
}
const switchDispRow = (parent_id, child_id) => {
    if (typeof parented_row_info_list[parent_id] == "undefined") {
        return false;
    }
    const row_info_list = parented_row_info_list[parent_id];
    if (typeof row_info_list[child_id] == "undefined") {
        return false;
    }
    const info = row_info_list[child_id];
    resetElement("content_one_area");
    const area = document.getElementById("content_one_area");
    const h3 = document.createElement("h3");
    h3.innerText = info.title;
    area.appendChild(h3);
    const row = document.createElement("div");
    row.classList.add("row", "flex-row", "w-auto", "row_posts");
    const arr = info.arr;
    const card_class = info.card_class;
    for (let t of arr) {
        row.appendChild(getColFromThumbnail(t, card_class));
    }
    area.appendChild(row);
}
const clickTab = (a) => {
    switchTab(a.getAttribute("data-parent"), a.getAttribute("data-child"));
}
const switchTab = (parent_id, child_id) => {
    let has_active = false;
    for (let a of document.getElementsByName("a_tab")) {
        if (a.getAttribute("data-parent") == parent_id) {
            a.classList.add("active");
            has_active = true;
        }
        else {
            a.classList.remove("active");
        }
    }
    if (!has_active) {
        //default
        switchTab("3dmv", "3dmv");
    }
    else {
        switchDispRow(parent_id, child_id);
    }
}
const initTabPosts = () => {
    resetElement("tab_posts");
    const tab_posts = document.getElementById("tab_posts");
    for (let x in parented_row_info_list) {
        const row_info_list = parented_row_info_list[x];
        const row_info_num = Object.keys(row_info_list).length;
        if (row_info_num == 1) {
            for (let xx in row_info_list) {
                tab_posts.innerHTML += `
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" name="a_tab" role="tab" data-parent="`+ x + `" data-child="` + xx + `"onclick="clickTab(this)">
                            `+ row_info_list[xx].title + `
                        </a>
                    </li>
                `;
                break;
            }
        }
        else if (row_info_num > 1) {
            let inner_str = "";
            inner_str += `
            <li class="nav-item dropdown" role="presentation">
                <a class="nav-link dropdown-toggle" name="a_tab" data-parent="`+ x + `"data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                    `+ parented_row_name_list[x] + `
                </a>
                    <ul class="dropdown-menu">`;
            for (let xx in row_info_list) {
                inner_str += '<li><a class="dropdown-item" name="a_tab_child" data-parent="' + x + '" data-child="' + xx + '" onclick="clickTab(this)">' + row_info_list[xx].title + '</a></li>';
            }

            inner_str += `</ul>
            </li>
            `;
            tab_posts.innerHTML += inner_str;
        }
    };
}
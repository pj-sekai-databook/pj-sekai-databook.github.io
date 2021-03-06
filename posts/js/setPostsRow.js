const getColFromLoadedJson = (json, card_class) => {
    const col = document.createElement("div");
    col.classList.add("col", "px-1", "py-3", "d-flex", "justify-content-center");
    const card = document.createElement("div");
    card.classList.add("card", "card_wrap", card_class);
    const card_inner = document.createElement("div");
    card_inner.classList.add("card_inner");
    const img_outer = document.createElement("div");
    img_outer.classList.add("img_wrap");
    const img = document.createElement("img");
    img.classList.add("img_thumb");
    if (typeof (json.img) != "undefined") {
        img.src = json.img;
    }
    else if (Link.getDomain(json.link) == Link.domain.youtube) {
        img.src = Link.getThumbnailSrc(json.link, Link.domain.youtube);
        img.addEventListener("load", () => {
            if (img.naturalWidth < Link.thumb_info.youtube.natural_width) {
                col.classList.add("card_invalid");
            }
        });
    }
    else {
        img.src = json.link;
    }
    img_outer.appendChild(img);
    card_inner.appendChild(img_outer);
    const text_outer = PjElm.getDiv(Link.getAnchorTag(json.title, json.link), "text-start");
    card_inner.appendChild(text_outer);
    card.appendChild(card_inner);
    col.appendChild(card);
    return col;
};
const switchDispRow = (parent_id, child_id) => {
    if (typeof parented_row_info_list[parent_id] == "undefined") {
        return false;
    }
    const row_info_list = parented_row_info_list[parent_id];
    if (typeof row_info_list[child_id] == "undefined") {
        return false;
    }
    const info = row_info_list[child_id];
    PjElm.reset("content_one_area");
    const area = document.getElementById("content_one_area");
    const h3 = document.createElement("h3");
    h3.innerText = info.title;
    area.appendChild(h3);
    const row = PjElm.getDiv("", "row flex-row w-auto row_posts");
    const card_class = info.card_class;
    const json_arr = info.fixed_arr != null ? info.fixed_arr : PjContents.getContents(child_id);
    if (typeof json_arr != "undefined") {
        for (let json of json_arr) {
            row.appendChild(getColFromLoadedJson(json, card_class));
        }
    }
    else {
        row.appendChild(PjElm.getDiv("????????????????????????????????????????????????", "text-muted text-center"));
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
    PjElm.reset("tab_posts");
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

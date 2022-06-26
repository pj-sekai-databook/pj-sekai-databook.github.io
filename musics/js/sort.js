const getSortFunc = (type, is_asc) => {
    switch (type) {
        case "implemented":
            return (a, b) => {
                const ma = musics[a.getAttribute("data-musics-index")];
                const mb = musics[b.getAttribute("data-musics-index")];
                return (is_asc ? 1 : -1) * (ma.id - mb.id);
            }
        case "posted":
            return (a, b) => {
                const ma = musics[a.getAttribute("data-musics-index")];
                const mb = musics[b.getAttribute("data-musics-index")];
                const comp = PjDate.compare(ma.date_posted, mb.date_posted, is_asc);
                if (comp == 0) {
                    return (getSortFunc("implemented", is_asc))(a, b);
                }
                else {
                    return comp;
                }
            }
        case "diff-0":
        case "diff-1":
        case "diff-2":
        case "diff-3":
        case "diff-4":
            return (a, b) => {
                const ma = musics[a.getAttribute("data-musics-index")];
                const mb = musics[b.getAttribute("data-musics-index")];
                const index = type.slice(-1);
                if (ma.diff == null) {
                    if (mb.diff == null) {
                        return (getSortFunc("implemented", is_asc))(a, b);
                    }
                    else {
                        return 1;
                    }
                }
                else {
                    if (mb.diff == null) {
                        return -1;
                    }
                    else {
                        const comp = (is_asc ? 1 : -1) * (ma.diff[index] - mb.diff[index]);
                        if (comp == 0) {
                            return (getSortFunc("implemented", is_asc))(a, b);
                        }
                        else {
                            return comp;
                        }
                    }
                }
            }
    }
}
const sortCols = (type_order) => {
    const p_arr = type_order.split("_");
    const type = p_arr[0];
    let is_asc;
    switch (p_arr[1]) {
        case "asc":
            is_asc = true;
            break;
        case "desc":
            is_asc = false;
            break;
        default:
            return;
    }
    let cols = $(".sort_item").detach().toArray();
    cols.sort(getSortFunc(type, is_asc));
    $(cols).appendTo("#div_card_area");
    updateFooter(type);
}
const updateFooter = (type) => {
    for (let m of musics) {
        let text = "";
        switch (type) {
            case "implemented":
                text = PjDate.format(m.date_implemented, "yyyy/MM/dd") + " 追加";
                break;
            case "posted":
                text = PjDate.format(m.date_posted, "yyyy/MM/dd") + " 公開";
                break;
            case "diff-4":
                text = "MASTER Lv." + ((m.diff != null && m.diff[4] > 0) ? m.diff[4] : "--");
                break;
        }
        document.getElementById(card_id.footer.replace("{id}", m.id)).innerText = text;
    }
}
const applySort = () => {
    const sort_option = document.getElementById("select_sort").value;
    sortCols(sort_option);
}
const initHist = (hist_arr, hist_id = "hist", updated_id = "updated") => {
    const getHistTr = (h) => {
        const tr = getTr();
        const th = getTh(getStrFromDate(h.date));
        const td = getTd(h.text);
        tr.appendChild(th);
        tr.appendChild(td);
        return tr;
    }
    resetElement(hist_id);
    const div = document.createElement("div");
    const table = document.createElement("table");
    for (const h of hist_arr) {
        table.appendChild(getHistTr(h));
    }
    table.classList.add("histTable");
    div.appendChild(table);
    div.classList.add("hist");
    document.getElementById(hist_id).appendChild(div);

    if (table.clientHeight > div.clientHeight) {
        const a = document.createElement("a");
        a.innerText = "続きを表示";
        a.onclick = () => {
            div.classList.remove("hist");
            div.classList.add("hist_all");
            a.style.display = "none";
        }
        a.classList.add("histA");
        document.getElementById(hist_id).appendChild(a);
    }
    else {
        div.classList.remove("hist");
    }
    if (resetElement(updated_id)) {
        document.getElementById(updated_id).innerText = "最終更新日：" + getStrFromDate(hist_arr[0].date);
    }
}
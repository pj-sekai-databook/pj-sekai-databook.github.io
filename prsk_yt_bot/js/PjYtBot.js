class PjYtBot {
    static sort_func = {
        date: (a, b) => { return PjDate.compare(a.date, b.date, false) },
        view: (a, b) => { return b.view - a.view }
    }
    static getJson = (() => {
        let json = null;
        return () => {
            if (json == null) {
                $.ajax({
                    url: `https://pj-sekai-databook.github.io/prsk_yt_bot_json/prsk_yt_bot.json?${new Date().getTime()}`,
                    type: "GET",
                    dataType: "json",
                    async: false
                }).done((e) => {
                    json = e;
                    json.date = PjDate.format(new Date(json.date), "yyyy/MM/dd HH:mm");
                    for (let i = 0; i < json.contents.length; ++i) {
                        json.contents[i].view = Number(json.contents[i].view);
                        json.contents[i].date = new Date(json.contents[i].date);
                        json.contents[i].date_str = PjDate.format(json.contents[i].date, "yyyy/MM/dd");
                    }
                }).fail((e) => {
                    window.alert(e);
                    json = { contents: [], date: null }
                });
            }
            return json;
        }
    })();
    static get contents() {
        return PjYtBot.getJson().contents.slice();
    }
    static get calc_date() {
        return PjYtBot.getJson().date;
    }
}
const createYtTable = (sort_func) => {
    PjElm.reset("div_calc_date");
    PjElm.reset("table_json");
    if (PjYtBot.calc_date == null) {
        document.getElementById("div_calc_date").innerText = "※データの取得に失敗しました";
        return;
    };
    document.getElementById("div_calc_date").innerText = `集計日時: ${PjYtBot.calc_date}`;
    const table = document.getElementById("table_json");
    const thead = document.createElement("thead");
    thead.classList.add("text-center");
    const tr_head = PjElm.getTr();
    tr_head.appendChild(PjElm.getTh("動画"));
    tr_head.appendChild(getSortTh("再生数", PjYtBot.sort_func.view));
    tr_head.appendChild(getSortTh("投稿日", PjYtBot.sort_func.date));
    thead.appendChild(tr_head);
    table.appendChild(thead);
    const tbody = document.createElement("tbody");
    for (let item of PjYtBot.contents.sort(sort_func)) {
        const tr = PjElm.getTr();
        tr.appendChild(PjElm.getTd((Link.getAnchorTag(item.title, item.link))));
        tr.appendChild(PjElm.getTd(item.view.toLocaleString(), "text-end"));
        tr.appendChild(PjElm.getTd(item.date_str));
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
}
const getSortTh = (text, func) => {
    const th = PjElm.getTh(text, "sortable");
    th.onclick = () => createYtTable(func);
    return th;
}
const createHistTable = () => {
    PjElm.reset("table_hist");
    const table = document.getElementById("table_hist");
    const thead = document.createElement("thead");
    const tr_head = PjElm.getTr();
    tr_head.appendChild(PjElm.getTh("更新日"));
    tr_head.appendChild(PjElm.getTh("更新内容"));
    thead.appendChild(tr_head);
    table.appendChild(thead);
    const tbody = document.createElement("tbody");
    for (let item of hist) {
        const tr = PjElm.getTr();
        tr.appendChild(PjElm.getTd(item.date));
        const td_detail = PjElm.getTd();
        td_detail.innerHTML = item.html;
        tr.appendChild(td_detail);
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
}
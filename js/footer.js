const initFooter = () => {
    resetElement("footer");
    let f = document.getElementById("footer");
    let fTable = document.createElement("table");
    fTable.classList.add("tocTable");
    let pjArr = [];
    pjArr.push(getFooterA("HOME", "https://pj-sekai-note.github.io/", false));
    pjArr.push(getFooterA("楽曲", "https://pj-sekai-note.github.io/musics/", false));
    pjArr.push(getFooterA("掛け合い", "https://pj-sekai-note.github.io/interactions/", false));
    pjArr.push(getFooterA("投稿", "https://pj-sekai-note.github.io/posts/", false));
    pjArr.push(getFooterA("統計・ランキング", "https://pj-sekai-note.github.io/statistics/", false));
    fTable.appendChild(getFooterTr("プロセカ関連ページ", pjArr));
    let ofArr = [];
    ofArr.push(getFooterA("Webサイト", "https://pjsekai.sega.jp/", true));
    ofArr.push(getFooterA("Twitter", "https://twitter.com/pj_sekai", true));
    ofArr.push(getFooterA("YouTube", "https://www.youtube.com/channel/UCdMGYXL38w6htx6Yf9YJa-w", true));
    fTable.appendChild(getFooterTr("公式サイト/アカウント", ofArr));
    fTable.appendChild(getFooterTr("ソースコード", [getFooterA("GitHub", "https://github.com/pj-sekai-note/pj-sekai-note.github.io", true)]));
    f.appendChild(fTable);
    //f.appendChild(getP("不備等ございましたら、お手数ですが下記連絡先のいずれかまでご連絡ください。"));
    let u = document.createElement("ul");
    u.appendChild(getLi("Mail: rotau.pt[at]gmail.com"));
    u.appendChild(getLi("Twiter: @rotau_pt"));
    u.appendChild(getLi("Discord: ρτ#2719"));
    f.appendChild(u);
}
const getFooterTr = (thText, arr) => {
    let tr = document.createElement("tr");
    tr.appendChild(getTh(thText));
    let td = document.createElement("td");
    td.appendChild(concatElms(arr, getSpan(" / ")));
    tr.appendChild(td);
    return tr;
}
const getFooterA = (title, link, aTF) => {
    const cur_link = location.href.replace(/(index\.html)?(#.*)?$/, "");
    let elm;
    if (link == cur_link) {
        elm = getSpan(title);
    }
    else {
        elm = getA(title, link, aTF);
    }
    elm.classList.add("tocA");
    return elm;
}
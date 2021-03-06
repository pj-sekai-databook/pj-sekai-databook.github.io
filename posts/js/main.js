PjContents.initJson();
document.getElementById("div_created_date").innerText
    = `最終更新日: ${PjDate.format(PjContents.getCreatedDate(), "yyyy/MM/dd HH:mm")}`;
initTabPosts();
const query = PjUtil.getQueryParameters();
if (typeof query.type != "undefined") {
    let is_inited = false;
    for (let x in parented_row_info_list) {
        const row_info_list = parented_row_info_list[x];
        if (Object.keys(row_info_list).includes(query.type)) {
            switchTab(x, query.type);
            is_inited = true;
            break;
        }
    }
    if (!is_inited) {
        switchTab();
    }
}
else {
    switchTab();
}
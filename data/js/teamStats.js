/* チーム名の決め方が複雑だった時(特定メンバーから何人以上)に備えて準備 */
const teamStats = [
    Team("いつも同じご飯", ["ichika", "shiho", "kanade"]),
    Team("元気な歌姫ひとりが好き", ["mizuki", "saki", "rin", "shiho"]),
    Team("実は趣味が合いそう", ["ichika", "shiho", "nene", "kanade"]),
    Team("天馬家", ["saki", "tsukasa"])
].sort((a, b) => { return a.name > b.name ? 1 : -1 });

window.addEventListener("load", () => {
    setAllRefData();
    setCharacterRankingTable("vocal_ranking", characters_vocal, musics, "回");
    setCharacterRankingTable("another_vocal_ranking", characters, musics, "曲");
    setCharacterRankingTable("3dmv_ranking", characters_interaction, musics, "曲");
    setCharacterRankingTable("2dmv_ranking", characters_interaction, musics, "曲");
    setCharacterRankingTable("four_frame_ranking", characters_interaction, fourFrameList, "回");
    setStatisticTable("implemented_date", { "0": "日曜日", "1": "月曜日", "2": "火曜日", "3": "水曜日", "4": "木曜日", "5": "金曜日", "6": "土曜日", "-1": "(初期曲)" }, musics, "曲");
});
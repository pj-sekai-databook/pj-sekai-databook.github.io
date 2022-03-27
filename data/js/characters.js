const characters_team = {
    "miku": Character("初音ミク", "ミク", "virtual"),
    "rin": Character("鏡音リン", "リン", "virtual"),
    "len": Character("鏡音レン", "レン", "virtual"),
    "luka": Character("巡音ルカ", "ルカ", "virtual"),
    "meiko": Character("MEIKO", "MEIKO", "virtual"),
    "kaito": Character("KAITO", "KAITO", "virtual"),
    "ichika": Character("星乃一歌", "一歌", "leo"),
    "saki": Character("天馬咲希", "咲希", "leo"),
    "honami": Character("望月穂波", "穂波", "leo"),
    "shiho": Character("日野森志歩", "志歩", "leo"),
    "miku_leo": Character("初音ミク(Leo/need)", "ミク(レオニ)", "leo"),
    "luka_leo": Character("巡音ルカ(Leo/need)", "ルカ(レオニ)", "leo"),
    "meiko_leo": Character("MEIKO(Leo/need)", "MEIKO(レオニ)", "leo"),
    "minori": Character("花里みのり", "みのり", "more"),
    "haruka": Character("桐谷遥", "遥", "more"),
    "airi": Character("桃井愛莉", "愛莉", "more"),
    "shizuku": Character("日野森雫", "雫", "more"),
    "miku_more": Character("初音ミク(MORE MORE JUMP！)", "ミク(モモジャン)", "more"),
    "rin_more": Character("鏡音リン(MORE MORE JUMP！)", "リン(モモジャン)", "more"),
    "luka_more": Character("巡音ルカ(MORE MORE JUMP！)", "ルカ(モモジャン)", "more"),
    "meiko_more": Character("MEIKO(MORE MORE JUMP！)", "MEIKO(モモジャン)", "more"),
    "kohane": Character("小豆沢こはね", "こはね", "vivid"),
    "an": Character("白石杏", "杏", "vivid"),
    "akito": Character("東雲彰人", "彰人", "vivid"),
    "toya": Character("青柳冬弥", "冬弥", "vivid"),
    "miku_vivid": Character("初音ミク(Vivid BAD SQUAD)", "ミク(ビビバス)", "vivid"),
    "rin_vivid": Character("鏡音リン(Vivid BAD SQUAD)", "リン(ビビバス)", "vivid"),
    "len_vivid": Character("鏡音レン(Vivid BAD SQUAD)", "レン(ビビバス)", "vivid"),
    "meiko_vivid": Character("MEIKO(Vivid BAD SQUAD)", "MEIKO(ビビバス)", "vivid"),
    "kaito_vivid": Character("KAITO(Vivid BAD SQUAD)", "KAITO(ビビバス)", "vivid"),
    "tsukasa": Character("天馬司", "司", "wonder"),
    "emu": Character("鳳えむ", "えむ", "wonder"),
    "nene": Character("草薙寧々", "寧々", "wonder"),
    "rui": Character("神代類", "類", "wonder"),
    "miku_wonder": Character("初音ミク(ワンダーランズ×ショウタイム)", "ミク(ワンダショ)", "wonder"),
    "rin_wonder": Character("鏡音リン(ワンダーランズ×ショウタイム)", "リン(ワンダショ)", "wonder"),
    "len_wonder": Character("鏡音レン(ワンダーランズ×ショウタイム)", "レン(ワンダショ)", "wonder"),
    "luka_wonder": Character("巡音ルカ(ワンダーランズ×ショウタイム)", "ルカ(ワンダショ)", "wonder"),
    "meiko_wonder": Character("MEIKO(ワンダーランズ×ショウタイム)", "MEIKO(ワンダショ)", "wonder"),
    "kaito_wonder": Character("KAITO(ワンダーランズ×ショウタイム)", "KAITO(ワンダショ)", "wonder"),
    "kanade": Character("宵崎奏", "奏", "night"),
    "mafuyu": Character("朝比奈まふゆ", "まふゆ", "night"),
    "ena": Character("東雲絵名", "絵名", "night"),
    "mizuki": Character("暁山瑞希", "瑞希", "night"),
    "miku_night": Character("初音ミク(25時、ナイトコードで。)", "ミク(ニーゴ)", "night"),
    "rin_night": Character("鏡音リン(25時、ナイトコードで。)", "リン(ニーゴ)", "night"),
    "meiko_night": Character("MEIKO(25時、ナイトコードで。)", "MEIKO(ニーゴ)", "night")
};
const characters = (function () {
    let cArr = {};
    for (let i in characters_team) {
        if (!(i.match(/_/))) {
            cArr[i] = JSON.parse(JSON.stringify(characters_team[i]));
        }
    }
    return cArr;
})();
const characters_mv = (function () {
    let cArr = {};
    for (let i in characters_team) {
        if (!(i.match(/_/) && !(i.match(/miku_/)))) {
            cArr[i] = JSON.parse(JSON.stringify(characters_team[i]));
        }
    }
    return cArr;
}());
const characters_interaction = characters_mv;
const characters_other = {
    "gumi": Character("GUMI", "GUMI", "virtual"),
    "flower": Character("flower", "flower", "virtual"),
    "ia": Character("IA", "IA", "virtual"),
    "vy2v3": Character("VY2V3", "VY2V3", "virtual"),
    "una": Character("音街ウナ", "ウナ", "virtual"),
    "yuki": Character("歌愛ユキ", "ユキ", "virtual"),
    "mikudayo": Character("ミクダヨー", "ミクダヨー", "virtual"),
    "nenerobo": Character("ネネロボ", "ネネロボ", "wonder")
};
const characters_vocal = { ...characters, ...characters_other };
const characters_all = { ...characters_team, ...characters_other };
const character_team_ids = Object.keys(characters_team);
const characterIds = Object.keys(characters);
const vocalCharacterIds = Object.keys(characters_vocal);
/*
const characters_interaction = (function () {
    let cArr = {};
    let i = 0;
    let j = 0;
    let flag = false;
    while (i < characterIds.length || j < mikuCharacterIds.length) {
        let ii = characterIds[i];
        let ij = mikuCharacterIds[j];
        let ci = characters[ii];
        let cj = characters_miku[ij];
        if (i >= characterIds.length) {
            cArr[ij] = cj;
            j += 1;
            continue;
        }
        if (j >= mikuCharacterIds.length) {
            cArr[ii] = ci;
            i += 1;
            continue;
        }
        if (flag && ci.unit != cj.unit) {
            cArr[ij] = cj;
            j += 1;
        }
        else {
            if (!flag && ci.unit == cj.unit) {
                flag = true;
            }
            cArr[ii] = ci;
            i += 1;
        }
    }
    return cArr;
}());
*/
const interactionCharacterIds = Object.keys(characters_interaction);
const allCharacterIds = Object.keys(characters_all);
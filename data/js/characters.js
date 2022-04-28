const characters = {
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
    "minori": Character("花里みのり", "みのり", "more"),
    "haruka": Character("桐谷遥", "遥", "more"),
    "airi": Character("桃井愛莉", "愛莉", "more"),
    "shizuku": Character("日野森雫", "雫", "more"),
    "kohane": Character("小豆沢こはね", "こはね", "vivid"),
    "an": Character("白石杏", "杏", "vivid"),
    "akito": Character("東雲彰人", "彰人", "vivid"),
    "toya": Character("青柳冬弥", "冬弥", "vivid"),
    "tsukasa": Character("天馬司", "司", "wonder"),
    "emu": Character("鳳えむ", "えむ", "wonder"),
    "nene": Character("草薙寧々", "寧々", "wonder"),
    "rui": Character("神代類", "類", "wonder"),
    "kanade": Character("宵崎奏", "奏", "night"),
    "mafuyu": Character("朝比奈まふゆ", "まふゆ", "night"),
    "ena": Character("東雲絵名", "絵名", "night"),
    "mizuki": Character("暁山瑞希", "瑞希", "night")
};
const characters_mv = {
    ...characters,
    "miku_leo": Character("初音ミク(Leo/need)", "ミク(レオニ)", "leo"),
    "miku_more": Character("初音ミク(MORE MORE JUMP！)", "ミク(モモジャン)", "more"),
    "miku_vivid": Character("初音ミク(Vivid BAD SQUAD)", "ミク(ビビバス)", "vivid"),
    "miku_wonder": Character("初音ミク(ワンダーランズ×ショウタイム)", "ミク(ワンダショ)", "wonder"),
    "miku_night": Character("初音ミク(25時、ナイトコードで。)", "ミク(ニーゴ)", "night")
};
const characters_vocal = {
    ...characters,
    "gumi": Character("GUMI", "GUMI", "virtual"),
    "flower": Character("flower", "flower", "virtual"),
    "ia": Character("IA", "IA", "virtual"),
    "vy2v3": Character("VY2V3", "VY2V3", "virtual"),
    "una": Character("音街ウナ", "ウナ", "virtual"),
    "yuki": Character("歌愛ユキ", "ユキ", "virtual"),
    "mikudayo": Character("ミクダヨー", "ミクダヨー", "virtual"),
    "nenerobo": Character("ネネロボ", "ネネロボ", "wonder")
};
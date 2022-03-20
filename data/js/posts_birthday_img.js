const birthdayImgList = [
    Thumbnail(mURL(characters["airi"].fullName, "https://twitter.com/pj_sekai/status/1504835020363546654", mDate(2022, 3, 19)),
        ["airi"],
        "https://pbs.twimg.com/media/FOG0i02aQAEQ-ry?format=jpg&name=900x900"
    ),
    Thumbnail(mURL(characters["kohane"].fullName, "https://twitter.com/pj_sekai/status/1498674430603677702", mDate(2022, 3, 2)),
        ["kohane"],
        "https://pbs.twimg.com/media/FMvlN6XaUAEViVI?format=jpg&name=900x900"
    ),
    Thumbnail(mURL(characters["kaito"].fullName, "https://twitter.com/pj_sekai/status/1493963380478156803", mDate(2022, 2, 17)),
        ["kaito"],
        "https://pbs.twimg.com/media/FLuLLiFVgAAB0xk?format=jpg&name=900x900"
    ),
    Thumbnail(mURL(characters["kanade"].fullName, "https://twitter.com/pj_sekai/status/1491426665309765635", mDate(2022, 2, 10)),
        ["kanade", "mafuyu", "ena", "mizuki", "miku_night"],
        "https://pbs.twimg.com/media/FLJ-TRPaMAQX_rx?format=jpg&name=900x900"
    ),
    Thumbnail(mURL(characters["luka"].fullName, "https://twitter.com/pj_sekai/status/1487440401476771842", mDate(2022, 1, 30)),
        ["luka", "miku_wonder", "rin", "len", "meiko", "kaito"],
        "https://pbs.twimg.com/media/FKLv1NPaUAIfuvW?format=jpg&name=900x900"
    ),
    Thumbnail(mURL(characters["mafuyu"].fullName, "https://twitter.com/pj_sekai/status/1486353241327783942", mDate(2022, 1, 27)),
        ["mafuyu"],
        "https://pbs.twimg.com/media/FKAqNruacAETLwI?format=jpg&name=900x900"
    ),
    Thumbnail(mURL(characters["shiho"].fullName, "https://twitter.com/pj_sekai/status/1479467868853084161", mDate(2022, 1, 8)),
        ["shiho"],
        "https://pbs.twimg.com/media/FIgEg1CaAAgw0hv?format=jpg&name=900x900"
    ),
    Thumbnail(mURL(characters["rin"].fullName + "・" + characters["len"].fullName, "https://twitter.com/pj_sekai/status/1475119209931759623", mDate(2021, 12, 28)),
        ["rin", "len"],
        "https://pbs.twimg.com/tweet_video_thumb/FHf__qFaAAA9lST.jpg"
    ),
    Thumbnail(mURL(characters["shizuku"].fullName, "https://twitter.com/pj_sekai/status/1467509073444704261", mDate(2021, 12, 6)),
        ["shizuku"],
        "https://pbs.twimg.com/media/FFr-WP0aQAEwhuG?format=jpg&name=900x900"
    ),
    Thumbnail(mURL(characters["akito"].fullName, "https://twitter.com/pj_sekai/status/1458811756751450121", mDate(2021, 11, 12)),
        ["akito"],
        "https://pbs.twimg.com/media/FD6Lbw3aUAAiS0S?format=jpg&name=900x900"
    ),
    Thumbnail(mURL(characters["meiko"].fullName, "https://twitter.com/pj_sekai/status/1456275051863429132", mDate(2021, 11, 5)),
        ["meiko", "miku_more", "rin", "luka", "len"],
        "https://pbs.twimg.com/media/FDVpMTEaQAI6KyM?format=jpg&name=900x900"
    ),
    Thumbnail(mURL(characters["honami"].fullName, "https://twitter.com/pj_sekai/status/1453013560905240576", mDate(2021, 10, 27)),
        ["honami", "miku"],
        "https://pbs.twimg.com/media/FCnW21zVcAIiurn?format=jpg&name=900x900"
    ),
    Thumbnail(mURL(characters["haruka"].fullName, "https://twitter.com/pj_sekai/status/1445041030559113227", mDate(2021, 10, 5)),
        ["haruka"],
        "https://pbs.twimg.com/media/FA12OhkVkAYSBQm?format=jpg&name=900x900"
    ),
    Thumbnail(mURL(characters["emu"].fullName, "https://twitter.com/pj_sekai/status/1435618939225219074", mDate(2021, 9, 9)),
        ["emu"],
        "https://pbs.twimg.com/media/E-uh2SCVQAIs86-?format=jpg&name=900x900"
    ),
    Thumbnail(mURL(characters["miku"].fullName, "https://twitter.com/pj_sekai/status/1432357453367111688", mDate(2021, 8, 31)),
        ["miku_night", "mafuyu", "ena", "mizuki"],
        "https://pbs.twimg.com/media/E-BjKiRVcAMaloy?format=jpg&name=900x900"
    ),
    Thumbnail(mURL(characters["mizuki"].fullName, "https://twitter.com/pj_sekai/status/1430907897748221962", mDate(2021, 8, 27)),
        ["mizuki"],
        "https://pbs.twimg.com/media/E9na9drVcAQ3dm_?format=jpg&name=900x900"
    ),
    Thumbnail(mURL(characters["ichika"].fullName, "https://twitter.com/pj_sekai/status/1425109692099956736", mDate(2021, 8, 11)),
        ["ichika"],
        "https://pbs.twimg.com/media/E8bBPqfVIAIR6bT?format=jpg&name=900x900"
    ),
    Thumbnail(mURL(characters["an"].fullName, "https://twitter.com/pj_sekai/status/1419311485327601669", mDate(2021, 7, 26)),
        ["an"],
        "https://pbs.twimg.com/media/E6z0j7rUcAIRX9a?format=jpg&name=900x900"
    ),
    Thumbnail(mURL(characters["nene"].fullName, "https://twitter.com/pj_sekai/status/1417137160147415048", mDate(2021, 7, 20)),
        ["nene"],
        "https://pbs.twimg.com/media/E6pnFViVEAY1jWl?format=jpg&name=900x900"
    ),
    Thumbnail(mURL("神代類", "https://twitter.com/pj_sekai/status/1407715065487192073", mDate(2021, 6, 24)),
        ["rui", "nene", "tsukasa", "emu", "miku_wonder"],
        "https://pbs.twimg.com/media/E4j7UwYVEAI8phF?format=jpg&name=900x900"
    ),
    Thumbnail(mURL("青柳冬弥", "https://twitter.com/pj_sekai/status/1396843429624156168", mDate(2021, 5, 25)),
        ["toya"],
        "https://pbs.twimg.com/media/E2JfXJ8VkAAgR_u?format=jpg&name=900x900"
    ),
    Thumbnail(mURL("天馬司", "https://twitter.com/pj_sekai/status/1393944335540920320", mDate(2021, 5, 17)),
        ["tsukasa"],
        "https://pbs.twimg.com/media/E1VwI_mVkAEd_vH?format=jpg&name=900x900"),
    Thumbnail(mURL("天馬咲希", "https://twitter.com/pj_sekai/status/1391045234683899908", mDate(2021, 5, 9)),
        ["saki", "miku_leo", "ichika", "honami", "shiho", "tsukasa"],
        "https://pbs.twimg.com/media/E0xsrzoVoAQ5K9-?format=jpg&name=900x900"
    ),
    Thumbnail(mURL("東雲絵名", "https://twitter.com/pj_sekai/status/1387783734665965568", mDate(2021, 4, 30)),
        ["ena"],
        "https://pbs.twimg.com/media/E0Du3xvVkAUPKd0?format=jpg&name=900x900"
    ),
    Thumbnail(mURL("花里みのり", "https://twitter.com/pj_sekai/status/1382166735772475395", mDate(2021, 4, 14)),
        ["minori"],
        "https://pbs.twimg.com/media/Ey5wpoUUUAALaJN?format=jpg&name=900x900"
    ),
    Thumbnail(mURL("桃井愛莉", "https://twitter.com/pj_sekai/status/1372563466863529987", mDate(2021, 3, 19)),
        ["airi"],
        "https://pbs.twimg.com/media/EwxSefcVoAEmfsT?format=jpg&name=900x900"
    ),
    Thumbnail(mURL("小豆沢こはね", "https://twitter.com/pj_sekai/status/1366402936100712450", mDate(2021, 3, 2)),
        ["kohane", "an", "akito", "toya"],
        "https://pbs.twimg.com/media/EvZuy2CUUAAH4RB?format=jpg&name=900x900"
    ),
    Thumbnail(mURL("KAITO", "https://twitter.com/pj_sekai/status/1361691844212494337", mDate(2021, 2, 17)),
        ["kaito"],
        "https://pbs.twimg.com/media/EuWzVdCVoAIfdiy?format=jpg&name=900x900"
    ),
    Thumbnail(mURL("宵崎奏", "https://twitter.com/pj_sekai/status/1359155161906708483", mDate(2021, 2, 10)),
        ["kanade"],
        "https://pbs.twimg.com/media/EtywJOkXEA0dkOj?format=jpg&name=900x900"
    ),
    Thumbnail(mURL("巡音ルカ", "https://twitter.com/pj_sekai/status/1355168826141384704", mDate(2021, 1, 30)),
        ["luka"],
        "https://pbs.twimg.com/media/Es57FZdVcAIshXv?format=jpg&name=900x900"
    ),
    Thumbnail(mURL("朝比奈まふゆ", "https://twitter.com/pj_sekai/status/1354081660950687744", mDate(2021, 1, 27)),
        ["mafuyu"],
        "https://pbs.twimg.com/media/EspuyVPVoAUb-Jb?format=jpg&name=900x900"
    ),
    Thumbnail(mURL("日野森志歩", "https://twitter.com/pj_sekai/status/1347196321246035970", mDate(2021, 1, 8)),
        ["shiho"],
        "https://pbs.twimg.com/media/ErIytDEVEAErqfE?format=jpg&name=900x900"
    ),
    Thumbnail(mURL("鏡音リン・鏡音レン", "https://twitter.com/pj_sekai/status/1342847672550522882", mDate(2020, 12, 27)),
        ["rin", "len"],
        "https://pbs.twimg.com/media/EqLARj2UwAAw3-U?format=jpg&name=900x900"
    ),
    Thumbnail(mURL("日野森雫", "https://twitter.com/pj_sekai/status/1335237518887854087", mDate(2020, 12, 6)),
        ["shizuku"],
        "https://pbs.twimg.com/media/Eoe2fgfUYAEpofR?format=jpg&name=900x900"
    ),
    Thumbnail(mURL("東雲彰人", "https://twitter.com/pj_sekai/status/1326540206439161859", mDate(2020, 11, 12)),
        ["kohane", "an", "akito", "toya"],
        "https://pbs.twimg.com/media/EmjQx7_U0AA8_Bd?format=jpg&name=900x900"
    ),
    Thumbnail(mURL("MEIKO", "https://twitter.com/pj_sekai/status/1324003601073627137", mDate(2020, 11, 5)),
        ["meiko"],
        "https://pbs.twimg.com/media/El_NzuFUcAAufyM?format=jpg&name=900x900"
    ),
    Thumbnail(mURL("望月穂波", "https://twitter.com/pj_sekai/status/1320745584039321600", mDate(2020, 10, 27)),
        ["honami"],
        "https://pbs.twimg.com/media/ElQ7FnhU8AI4qZZ?format=jpg&name=900x900"
    ),
    Thumbnail(mURL("桐谷遥", "https://twitter.com/pj_sekai/status/1312769448642637825", mDate(2020, 10, 5)),
        ["haruka"],
        "https://pbs.twimg.com/media/EjfiwKMVkAA3udQ?format=jpg&name=4096x4096"
    ),
    Thumbnail(mURL("初音ミク", "https://twitter.com/pj_sekai/status/1300085927725817859", mDate(2020, 8, 31)),
        ["miku"],
        "https://pbs.twimg.com/media/EgrU4hUVgAc9YHF?format=png&name=900x900"
    ),
    Thumbnail(mURL("KAITO", "https://twitter.com/pj_sekai/status/1229057983381823489", mDate(2020, 2, 17)),
        ["kaito"],
        "https://pbs.twimg.com/media/EQ59tuAVAAITawk?format=png&name=900x900"
    ),
    Thumbnail(mURL("巡音ルカ", "https://twitter.com/pj_sekai/status/1222535206571139073", mDate(2020, 1, 30)),
        ["luka"],
        "https://pbs.twimg.com/media/EPdRSPkUwAA43pG?format=png&name=900x900"
    ),
    Thumbnail(mURL("鏡音リン・鏡音レン", "https://twitter.com/pj_sekai/status/1210395219809558528", mDate(2019, 12, 27)),
        ["rin", "len"],
        "https://pbs.twimg.com/media/EMwwCPqUcAAMGnt?format=png&name=900x900"
    ),
    Thumbnail(mURL("MEIKO", "https://twitter.com/pj_sekai/status/1191369678582472706", mDate(2019, 11, 5)),
        ["meiko"],
        "https://pbs.twimg.com/media/EIiVAUzU4AE2zfI?format=png&name=900x900"
    )
];

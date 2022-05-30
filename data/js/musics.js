const musics = [
    new Music("Tell Your World",
        [
            Creator("kz", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"])
        ],
        mDate(2012, 3, 12),
        mDate(2020, 9, 30),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=PqJNc9KVIZE"),
            new MV(3, "https://www.youtube.com/watch?v=UUaVUWCPv_Y", mDate(2020, 12, 9), ["miku"])
        ],
        Diff(5, 10, 16, 22, 26)
    ),
    new Music("ネクストネスト",
        [
            Creator("さつき が てんこもり", "ttf")
        ],
        [
            new Vocal("virtual", ["miku"])
        ],
        mDate(2014, 6, 27),
        mDate(2020, 9, 30),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=ajlDAQeWQKE"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm23881953")
        ],
        Diff(6, 13, 18, 27, 29)
    ),
    new Music("メルト",
        [
            Creator("ryo", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"])
        ],
        mDate(2007, 12, 7),
        mDate(2020, 9, 30),
        [
            new Link("原曲", "https://www.nicovideo.jp/watch/sm1715919"),
            new Link("10th ANNIVERSARY MIX", "https://www.youtube.com/watch?v=4YHUamjfJ0k")
        ],
        Diff(7, 12, 17, 25, 28)
    ),
    new Music("初音ミクの消失",
        [
            Creator("cosMo@暴走P", "ttf")
        ],
        [
            new Vocal("virtual", ["miku"])
        ],
        mDate(2008, 4, 8),
        mDate(2020, 9, 30),
        [
            new Link("10周年リメイク", "https://www.youtube.com/watch?v=VWVtIg5cdDU"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm2937784")
        ],
        Diff(9, 15, 22, 30, 35)
    ),
    new Music("Blessing",
        [
            Creator("halyosy", "ttf")
        ],
        [
            new Vocal("virtual", ["miku", "rin", "len", "luka", "meiko", "kaito"])
        ],
        mDate(2014, 4, 11),
        mDate(2020, 9, 30),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=E4tIHBx7bqc"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm23304692")
        ],
        Diff(5, 11, 16, 23, 27)
    ),
    new Music("alive",
        [
            Creator("市瀬るぽ", "ttf")
        ],
        [
            new Vocal("virtual", ["rin"])
        ],
        mDate(2020, 9, 30),
        mDate(2020, 9, 30),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=y7RfoyBJxCg"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm37597218")
        ],
        Diff(6, 11, 16, 23, 26),
        "contest"
    ),
    new Music("ロキ",
        [
            Creator("みきとP", "ttt")
        ],
        [
            new Vocal("virtual", ["rin"]),
            new Vocal("sekai", ["miku", "ichika"]),
            new Vocal("another", ["len", "kaito"])
        ],
        mDate(2018, 2, 27),
        mDate(2020, 9, 30),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=Xg-qfsKN2_E"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm32798041"),
            new MV(3, "https://www.youtube.com/watch?v=PD8PHqWuSUI", mDate(2020, 12, 25), ["ichika", "saki", "honami", "shiho", "miku_leo"])
        ],
        Diff(7, 11, 17, 24, 28)
    ),
    new Music("テオ",
        [
            Creator("Sakurai", "tff"),
            Creator("Omoi", "ftt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["ichika", "miku"]),
            new Vocal("another", ["ichika"]),
            new Vocal("another", ["saki"]),
            new Vocal("another", ["miku", "luka"])
        ],
        mDate(2017, 7, 8),
        mDate(2020, 9, 30),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=bmkY2yc1K7Q"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm31533883"),
            new MV(3, "https://www.youtube.com/watch?v=RCULeLioEnc", mDate(2021, 1, 18), ["ichika", "saki", "honami", "shiho", "miku_leo"])
        ],
        Diff(9, 14, 19, 27, 32)
    ),
    new Music("ヒバナ -Reloaded-",
        [
            Creator("DECO*27", "ttf"),
            Creator("Rockwell", "fft")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["miku", "ichika"]),
            new Vocal("another", ["rin"]),
            new Vocal("another", ["meiko"]),
            new Vocal("another", ["ichika"]),
        ],
        mDate(2017, 8, 4),
        mDate(2020, 9, 30),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=hxSg2Ioz3LM"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm31685272"),
            new MV(2, "https://www.youtube.com/watch?v=i16qWEUjd4o", mDate(2021, 2, 20), ["miku_leo", "ichika"])
        ],
        Diff(9, 14, 19, 28, 32)
    ),
    new Music("ハッピーシンセサイザ",
        [
            Creator("EasyPop", "ttf")
        ],
        [
            new Vocal("virtual", ["luka", "gumi"]),
            new Vocal("virtual", ["miku", "luka", "rin", "meiko"]),
            new Vocal("sekai", ["minori", "haruka", "airi", "shizuku"]),
            new Vocal("another", ["minori", "haruka"]),
            new Vocal("another", ["airi", "shizuku"]),
            new Vocal("april", ["shiho", "shizuku", "an", "kanade"])
        ],
        mDate(2010, 11, 22),
        mDate(2020, 9, 30),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=poiZSEjQBgw"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm12825985"),
            new MV(3, "https://www.youtube.com/watch?v=4x2oA5vy2_U", mDate(2021, 1, 6), ["minori", "haruka", "airi", "shizuku"]),
            new MV(2, "https://www.youtube.com/watch?v=xD3amnjfxac", mDate(2021, 3, 19), ["minori", "haruka", "airi", "shizuku"]),
            new Link("エイプリルフール2022", "https://www.youtube.com/watch?v=1RkUmg_BgFw")
        ],
        Diff(6, 11, 18, 24, 28)
    ),
    new Music("Nostalogic",
        [
            Creator("yuukiss", "ttf")
        ],
        [
            new Vocal("virtual", ["meiko"]),
            new Vocal("sekai", ["haruka", "shizuku", "meiko"]),
            new Vocal("another", ["haruka"]),
            new Vocal("another", ["shizuku"])
        ],
        mDate(2014, 11, 5),
        mDate(2020, 9, 30),
        [
            new Link("原曲", "https://www.nicovideo.jp/watch/sm24848610")
        ],
        Diff(6, 12, 17, 23, 28)
    ),
    new Music("ツギハギスタッカート",
        [
            Creator("とあ", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("virtual", ["miku", "rin", "meiko"]),
            new Vocal("sekai", ["miku", "airi", "shizuku"]),
        ],
        mDate(2014, 6, 12),
        mDate(2020, 9, 30),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=p2Irc9NPCtk"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm23762151"),
            new MV(3, "https://www.youtube.com/watch?v=6iwD9hM9ND4", mDate(2021, 1, 20), ["airi", "shizuku", "miku_more"])
        ],
        Diff(6, 11, 16, 24, 27)
    ),
    new Music("劣等上等",
        [
            Creator("Reol", "tff"),
            Creator("Giga", "ftt")
        ],
        [
            new Vocal("virtual", ["rin", "len"]),
            new Vocal("sekai", ["rin", "len", "kohane", "an"])
        ],
        mDate(2018, 7, 13),
        mDate(2020, 9, 30),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=oEkGC2HV7rc"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm33510542"),
            new MV(3, "https://www.youtube.com/watch?v=mjbDHb4B5NY", mDate(2021, 1, 8), ["kohane", "an", "rin", "len"]),
            new Link("マジカルミライ2018", "https://www.youtube.com/watch?v=T7-AXotDMDE"),
            new Link("マジカルミライ2018", "https://www.nicovideo.jp/watch/so33838374")
        ],
        Diff(7, 12, 18, 25, 30)
    ),
    new Music("ドクター＝ファンクビート",
        [
            Creator("nyanyannya", "ttf")
        ],
        [
            new Vocal("virtual", ["kaito"]),
            new Vocal("sekai", ["kaito", "akito", "toya"]),
            new Vocal("another", ["len"])
        ],
        mDate(2015, 6, 12),
        mDate(2020, 9, 30),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=CPxxurEcGTw"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm26470008")
        ],
        Diff(8, 13, 19, 27, 32)
    ),
    new Music("フラジール",
        [
            Creator("ぬゆり", "ttt")
        ],
        [
            new Vocal("virtual", ["gumi"]),
            new Vocal("virtual", ["len", "kaito"]),
            new Vocal("sekai", ["akito", "toya"]),
            new Vocal("another", ["akito"]),
            new Vocal("another", ["toya"])
        ],
        mDate(2016, 9, 10),
        mDate(2020, 9, 30),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=a_rrj1Xh5LI"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm29610327"),
            new MV(3, "https://www.youtube.com/watch?v=WDWgBLrw-Jg", mDate(2021, 1, 22), ["akito", "toya"]),
            new MV(2, "https://www.youtube.com/watch?v=9kZ6MPqj9Tg", mDate(2020, 12, 3), ["akito", "toya"])
        ],
        Diff(6, 11, 17, 24, 27)
    ),
    new Music("ブリキノダンス",
        [
            Creator("日向電工", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["tsukasa", "rui", "len"]),
            new Vocal("another", ["tsukasa"]),
            new Vocal("another", ["rui"])
        ],
        mDate(2013, 3, 10),
        mDate(2020, 9, 30),
        [
            new Link("原曲", "https://www.nicovideo.jp/watch/sm20296308"),
            new MV(3, "https://www.youtube.com/watch?v=msnpPsYN2oM", mDate(2021, 1, 25), ["len", "rui", "tsukasa"])
        ],
        Diff(8, 13, 18, 25, 29)
    ),
    new Music("スイートマジック",
        [
            Creator("Junky", "ttf")
        ],
        [
            new Vocal("virtual", ["rin"]),
            new Vocal("virtual", ["miku", "rin", "len", "meiko", "kaito"]),
            new Vocal("sekai", ["rin", "emu", "nene", "tsukasa", "rui"]),
            new Vocal("another", ["emu"]),
            new Vocal("another", ["nene"])
        ],
        mDate(2011, 4, 2),
        mDate(2020, 9, 30),
        [
            new Link("オリジナル", "https://www.youtube.com/watch?v=Vz1C44EDkYA"),
            new Link("オリジナル", "https://www.nicovideo.jp/watch/sm14044008"),
            new MV(3, "https://www.youtube.com/watch?v=gPimbh-jxCo", mDate(2021, 1, 11), ["rin", "tsukasa", "emu", "nene", "rui"]),
            new MV(2, "https://www.youtube.com/watch?v=nNe6o3ivrXA", mDate(2021, 6, 4), ["rin", "tsukasa", "emu", "nene", "rui"])
        ],
        Diff(5, 12, 18, 24, 27)
    ),
    new Music("ぼうけんのしょがきえました！",
        [
            Creator("じーざす", "ttf")
        ],
        [
            new Vocal("virtual", ["rin", "len"]),
            new Vocal("sekai", ["tsukasa", "emu", "rin", "len"])
        ],
        mDate(2014, 11, 14),
        mDate(2020, 9, 30),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=vqiULULdvMA"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm24909819")
        ],
        Diff(8, 13, 19, 26, 31)
    ),
    new Music("シャルル",
        [
            Creator("バルーン", "ttt")
        ],
        [
            new Vocal("virtual", ["flower"]),
            new Vocal("sekai", ["ena", "mizuki"]),
            new Vocal("another", ["mizuki"]),
            new Vocal("another", ["ena"]),
            new Vocal("another", ["len", "kaito"])
        ],
        mDate(2016, 10, 12),
        mDate(2020, 9, 30),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=TA5OFS_xX0c"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm29854242"),
            new MV(3, "https://www.youtube.com/watch?v=diTjDNKgjLE", mDate(2021, 1, 27), ["ena", "mizuki"])
        ],
        Diff(6, 11, 17, 23, 27)
    ),
    new Music("ハロ／ハワユ",
        [
            Creator("ナノウ", "ttf")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["mafuyu", "ena", "miku"])
        ],
        mDate(2010, 7, 20),
        mDate(2020, 9, 30),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=-M4sAQYi6r4"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm11448603")
        ],
        Diff(5, 10, 15, 22, 26)
    ),
    new Music("自傷無色",
        [
            Creator("ササノマリイ", "ttf")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["miku", "kanade", "mafuyu"]),
        ],
        mDate(2013, 1, 20),
        mDate(2020, 9, 30),
        [
            new Link("原曲", "https://www.nicovideo.jp/watch/sm19870840"),
            new MV(3, "https://www.youtube.com/watch?v=LEEyYKrEvvk", mDate(2021, 1, 15), ["miku_night", "kanade", "mafuyu"]),
            new MV(2, "https://www.youtube.com/watch?v=n7ZmBBf5-7g", mDate(2021, 6, 15), ["miku_night", "kanade", "mafuyu"])
        ],
        Diff(5, 10, 17, 22, 26)
    ),
    new Music("needLe",
        [
            Creator("DECO*27", "ttf"),
            Creator("Rockwell", "fft")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["ichika", "saki", "honami", "shiho", "miku"]),
            new Vocal("another", ["honami"]),
            new Vocal("another", ["shiho"]),
            new Vocal("another", ["saki"])
        ],
        mDate(2020, 8, 14),
        mDate(2020, 9, 30),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=buoYwfZG4vQ"),
            new MV(3, "https://www.youtube.com/watch?v=kXGtXnq1iF8", mDate(2020, 12, 11), ["ichika", "saki", "honami", "shiho", "miku_leo"])
        ],
        Diff(7, 12, 17, 25, 29),
        "newlyWritten"
    ),
    new Music("アイドル新鋭隊",
        [
            Creator("Mitchie M", "ttt")
        ],
        [
            new Vocal("virtual", ["miku", "rin", "luka", "meiko"]),
            new Vocal("sekai", ["minori", "haruka", "airi", "shizuku", "miku"]),
        ],
        mDate(2020, 9, 9),
        mDate(2020, 9, 30),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=4QL9tLfVFJg"),
            new MV(3, "https://www.youtube.com/watch?v=3yQWZcYXcgg", mDate(2020, 12, 14), ["miku_more", "airi", "haruka", "minori", "shizuku"])
        ],
        Diff(8, 12, 17, 24, 28),
        "newlyWritten"
    ),
    new Music("Ready Steady",
        [
            Creator("q*Left", "tff"),
            Creator("Giga", "ftt")
        ],
        [
            new Vocal("virtual", ["miku", "rin", "len"]),
            new Vocal("sekai", ["kohane", "an", "akito", "toya", "miku"])
        ],
        mDate(2020, 9, 30),
        mDate(2020, 9, 30),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=XAg1jDDG49Y"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm37601066"),
            new MV(3, "https://www.youtube.com/watch?v=cj3y6DBjyvs", mDate(2020, 12, 16), ["miku_vivid", "kohane", "akito", "toya", "an"])
        ],
        Diff(5, 10, 16, 25, 29),
        "newlyWritten"
    ),
    new Music("セカイはまだ始まってすらいない",
        [
            Creator("ピノキオピー", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["tsukasa", "emu", "nene", "rui", "miku"]),
            new Vocal("another", ["tsukasa", "emu"]),
            new Vocal("another", ["nene", "rui"])
        ],
        mDate(2020, 4, 17),
        mDate(2020, 9, 30),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=1s8NNPgdl5g"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm36685972"),
            new MV(3, "https://www.youtube.com/watch?v=cFExVIRuGso", mDate(2020, 12, 18), ["miku_wonder", "tsukasa", "nene", "emu", "rui"])
        ],
        Diff(6, 13, 16, 24, 29),
        "newlyWritten"
    ),
    new Music("悔やむと書いてミライ",
        [
            Creator("まふまふ", "ttt")
        ],
        [
            new Vocal("sekai", ["kanade", "mafuyu", "ena", "mizuki", "miku"]),
            new Vocal("another", ["kanade"]),
            new Vocal("another", ["mafuyu"]),
            new Vocal("another", ["ena"]),
            new Vocal("another", ["mizuki"])
        ],
        mDate(2020, 4, 22),
        mDate(2020, 9, 30),
        [
            new Link("セルフカバー", "https://www.youtube.com/watch?v=r2OS97F6P_U"),
            new Link("セルフカバー", "https://www.nicovideo.jp/watch/sm36723146"),
            new MV(3, "https://www.youtube.com/watch?v=an_gDTrVdHo", mDate(2020, 12, 21), ["miku_night", "mizuki", "kanade", "mafuyu", "ena"])
        ],
        Diff(8, 13, 17, 26, 30),
        "newlyWritten"
    ),
    new Music("セカイ",
        [
            Creator("DECO*27", "tff"),
            Creator("堀江昌太(kemu)", "ftf"),
            Creator("Rockwell", "fft")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["ichika", "tsukasa", "kanade", "miku"])
        ],
        mDate(2020, 7, 31),
        mDate(2020, 9, 30),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=9vyIPWBeRes"),
            new MV(3, "https://www.youtube.com/watch?v=jxP2_vihhpM", mDate(2020, 12, 4), ["ichika", "tsukasa", "kanade", "miku"])
        ],
        Diff(6, 12, 18, 23, 27),
        "newlyWritten,theme"
    ),
    new Music("ワーワーワールド",
        [
            Creator("Mitchie M", "ttf"),
            Creator("Giga", "ftt")
        ],
        [
            new Vocal("virtual", ["miku", "rin"]),
            new Vocal("sekai", ["minori", "kohane", "miku"])
        ],
        mDate(2020, 8, 5),
        mDate(2020, 9, 30),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=okJ9Vk6owG8"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm37301259"),
            new MV(3, "https://www.youtube.com/watch?v=GJbEn1srk3Y", mDate(2020, 12, 7), ["miku", "kohane", "minori"])
        ],
        Diff(7, 12, 17, 24, 28),
        "newlyWritten,theme"
    ),
    new Music("アスノヨゾラ哨戒班",
        [
            Creator("Orangestar", "ttf"),
            Creator("Rockwell", "fft")
        ],
        [
            new Vocal("sekai", ["ichika"])
        ],
        mDate(2014, 8, 19),
        mDate(2020, 10, 1),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=XogSflwXgpw"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm24276234")
        ],
        Diff(8, 12, 17, 25, 28)
    ),
    new Music("ニア",
        [
            Creator("夏代孝明", "ttf"),
            Creator("渡辺拓也", "fft")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["minori", "haruka", "miku"]),
            new Vocal("another", ["haruka"])
        ],
        mDate(2017, 7, 2),
        mDate(2020, 10, 2),
        [
            new Link("原曲", "https://www.nicovideo.jp/watch/sm31477166"),
            new Link("セルフカバー", "https://www.youtube.com/watch?v=7uacnNTk7I8"),
            new MV(3, "https://www.youtube.com/watch?v=mzZOoZqDly4", mDate(2021, 2, 1), ["minori", "haruka", "miku_more"])
        ],
        Diff(6, 11, 16, 22, 26)
    ),
    new Music("Just Be Friends",
        [
            Creator("Dixie Flatline", "ttf")
        ],
        [
            new Vocal("virtual", ["luka"]),
            new Vocal("sekai", ["kohane", "an", "luka"]),
            new Vocal("another", ["kohane"]),
            new Vocal("another", ["an"])
        ],
        mDate(2009, 7, 4),
        mDate(2020, 10, 3),
        [
            new Link("原曲", "https://www.nicovideo.jp/watch/sm7528841"),
            new MV(2, "https://www.youtube.com/watch?v=esaV1kjzg_Q", mDate(2020, 10, 3), ["luka"])
        ],
        Diff(6, 11, 17, 23, 27)
    ),
    new Music("脱法ロック",
        [
            Creator("Neru", "ttf")
        ],
        [
            new Vocal("virtual", ["len"]),
            new Vocal("sekai", ["tsukasa", "rui", "len"]),
            new Vocal("another", ["kaito"])
        ],
        mDate(2016, 6, 19),
        mDate(2020, 10, 4),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=u5mHVUwDf_0"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm29081909")
        ],
        Diff(7, 13, 18, 26, 31)
    ),
    new Music("命に嫌われている",
        [
            Creator("カンザキイオリ", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["kanade", "miku"]),
            new Vocal("another", ["kanade"]),
            new Vocal("another", ["rin"]),
            new Vocal("another", ["luka"])
        ],
        mDate(2017, 8, 6),
        mDate(2020, 10, 5),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=0HYm60Mjm0k"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm31700140"),
            new MV(2, "https://www.youtube.com/watch?v=F7iqxHOth58", mDate(2020, 9, 26, 0), ["miku_night", "kanade"]),
            new MV(2, "https://www.youtube.com/watch?v=wNxrGUf6G0A", mDate(2020, 9, 26, 1), ["kanade"], "アナザー")
        ],
        Diff(9, 14, 18, 26, 29)
    ),
    new Music("ワールドイズマイン",
        [
            Creator("ryo", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"])
        ],
        mDate(2008, 5, 31),
        mDate(2020, 10, 6),
        [
            new Link("原曲", "https://www.nicovideo.jp/watch/sm3504435")
        ],
        Diff(7, 13, 17, 24, 28)
    ),
    new Music("ダンスロボットダンス",
        [
            Creator("ナユタン星人", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("virtual", ["miku", "rin", "luka"]),
            new Vocal("sekai", ["emu", "nene", "miku"]),
            new Vocal("another", ["emu"])
        ],
        mDate(2016, 12, 6),
        mDate(2020, 10, 7),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=g7dvpD_zlIM"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm30177801"),
            new MV(3, "https://www.youtube.com/watch?v=rLt45Ylw5Ks", mDate(2022, 1, 1), ["miku_wonder", "emu", "nene"])
        ],
        Diff(8, 13, 18, 26, 29)
    ),
    new Music("Hand in Hand",
        [
            Creator("kz", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"])
        ],
        mDate(2015, 7, 8),
        mDate(2020, 10, 8),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=RKtoreimcQ8"),
            new Link("原曲", "https://www.nicovideo.jp/watch/so26654381"),
            new Link("マジカルミライ2015", "https://www.youtube.com/watch?v=s7h9tkfc7Eg")
        ],
        Diff(6, 13, 16, 23, 27)
    ),
    new Music("夜咄ディセイブ",
        [
            Creator("じん", "ttt")
        ],
        [
            new Vocal("virtual", ["ia"]),
            new Vocal("sekai", ["akito", "toya", "len"]),
            new Vocal("another", ["akito"]),
            new Vocal("another", ["toya"]),
            new Vocal("another", ["len"])
        ],
        mDate(2013, 2, 17),
        mDate(2020, 10, 9),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=aPDaFGqMX4I"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm20116702")
        ],
        Diff(8, 14, 19, 26, 30)
    ),
    new Music("Gimme×Gimme",
        [
            Creator("q*Left", "tff"),
            Creator("八王子P", "ftt"),
            Creator("Giga", "ftt")
        ],
        [
            new Vocal("virtual", ["miku", "rin"])
        ],
        mDate(2019, 10, 26),
        mDate(2020, 10, 10),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=ERo-sPa1a5g"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm35866152")
        ],
        Diff(6, 11, 18, 26, 29)
    ),
    new Music("ビバハピ",
        [
            Creator("Mitchie M", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["minori", "haruka", "airi", "shizuku", "miku"]),
            new Vocal("another", ["minori", "airi"])
        ],
        mDate(2013, 7, 26),
        mDate(2020, 10, 11),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=WiUjG9fF3zw"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm21443197"),
            new MV(2, "https://www.youtube.com/watch?v=zAkqd6iw-lo", mDate(2020, 10, 11), ["miku_more", "minori", "haruka", "airi", "shizuku"])
        ],
        Diff(6, 12, 17, 24, 28)
    ),
    new Music("ジャンキーナイトタウンオーケストラ",
        [
            Creator("すりぃ", "ttf")
        ],
        [
            new Vocal("virtual", ["len"])
        ],
        mDate(2019, 12, 20),
        mDate(2020, 10, 12),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=E1PGiyRjqkU"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm36109943")
        ],
        Diff(6, 13, 18, 26, 31)
    ),
    new Music("ミラクルペイント",
        [
            Creator("OSTER project", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["tsukasa", "emu", "nene", "rui", "miku"])
        ],
        mDate(2007, 11, 22),
        mDate(2020, 10, 13),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=gqPWXe0dCC4"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm1588476"),
            new MV(2, "https://www.youtube.com/watch?v=kU4Rth300FM", mDate(2020, 11, 2), ["miku_wonder", "tsukasa", "emu", "nene", "rui"])
        ],
        Diff(9, 12, 18, 25, 29)
    ),
    new Music("on the rocks",
        [
            Creator("OSTER project", "ttt")
        ],
        [
            new Vocal("virtual", ["meiko", "kaito"])
        ],
        mDate(2014, 7, 8),
        mDate(2020, 10, 14),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=hk1L0ZV2bVc"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm23954284")
        ],
        Diff(7, 11, 16, 23, 27)
    ),
    new Music("携帯恋話",
        [
            Creator("まふまふ", "ttt")
        ],
        [
            new Vocal("sekai", ["ena", "mizuki", "miku"]),
            new Vocal("another", ["ena"])
        ],
        mDate(2020, 5, 22),
        mDate(2020, 10, 15),
        [
            new Link("セルフカバー", "https://www.youtube.com/watch?v=bNagYg_YGbU"),
            new Link("セルフカバー", "https://www.nicovideo.jp/watch/sm36903498"),
            new MV(2, "https://www.youtube.com/watch?v=kNLyqES4fC8", mDate(2020, 10, 15), ["miku_night", "ena", "mizuki"])
        ],
        Diff(8, 12, 18, 25, 29),
        "newlyWritten"
    ),
    new Music("39みゅーじっく！",
        [
            Creator("みきとP", "ttf")
        ],
        [
            new Vocal("virtual", ["miku"])
        ],
        mDate(2016, 6, 29),
        mDate(2020, 10, 16),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=OuLZlZ18APQ"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm29145868")
        ],
        Diff(6, 11, 16, 23, 28)
    ),
    new Music("青く駆けろ！",
        [
            Creator("まらしぃ", "ttf")
        ],
        [
            new Vocal("sekai", ["miku", "ichika"]),
            new Vocal("april", ["miku", "ichika", "saki", "airi", "ena"])
        ],
        mDate(2020, 8, 13),
        mDate(2020, 10, 17),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=_qbKRIwkTCc"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm37349785"),
            new Link("WEBムービー", "https://www.youtube.com/watch?v=w3VTDaAYvmQ"),
            new Link("エイプリルフール2022", "https://www.youtube.com/watch?v=1ddmm-WEXSE")
        ],
        Diff(8, 13, 17, 24, 27)
    ),
    new Music("ステラ",
        [
            Creator("じん", "ttf")
        ],
        [
            new Vocal("sekai", ["ichika", "saki", "honami", "shiho", "miku"]),
            new Vocal("another", ["honami"]),
            new Vocal("another", ["shiho"])
        ],
        mDate(2020, 11, 16),
        mDate(2020, 10, 18),
        [
            new Link("セカイVer.", "https://www.youtube.com/watch?v=AL6hWKN0WQo", mDate(2020, 11, 16)),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm37828296"),
            new MV(3, "https://www.youtube.com/watch?v=oo2s6w-l1jQ", mDate(2021, 2, 5), ["ichika", "saki", "honami", "shiho", "miku_leo"])
        ],
        Diff(8, 13, 17, 26, 30),
        "newlyWritten"
    ),
    new Music("Leia - Remind",
        [
            Creator("ゆよゆっぺ", "ttt")
        ],
        [
            new Vocal("virtual", ["luka"]),
        ],
        mDate(2011, 1, 1),
        mDate(2020, 10, 19),
        [
            new Link("原曲(Remind)", "https://www.youtube.com/watch?v=e0ddGWxyhUQ"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm13185918")
        ],
        Diff(9, 13, 18, 25, 28)
    ),
    new Music("ジャックポットサッドガール",
        [
            Creator("syudou", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["kanade", "mafuyu", "ena", "mizuki", "miku"]),
            new Vocal("another", ["mafuyu"])
        ],
        mDate(2020, 10, 24),
        mDate(2020, 10, 20),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=B2llCEKbxwA"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm37716686"),
            new MV(2, "https://www.youtube.com/watch?v=J9kD9rYR088", mDate(2021, 8, 2), ["kanade", "mafuyu", "ena", "mizuki", "miku_night"])
        ],
        Diff(9, 13, 18, 26, 29),
        "newlyWritten"
    ),
    new Music("メルティランドナイトメア",
        [
            Creator("はるまきごはん", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["miku", "minori", "haruka", "airi", "shizuku"])
        ],
        mDate(2018, 2, 16),
        mDate(2020, 10, 25),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=ZEy36W1xX8c"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm32748202"),
            new MV(3, "https://www.youtube.com/watch?v=ZKbnmy82DZE", mDate(2021, 2, 3), ["minori", "shizuku", "haruka", "airi", "miku_more"])
        ],
        Diff(6, 12, 17, 24, 26)
    ),
    new Music("乙女解剖",
        [
            Creator("DECO*27", "ttf"),
            Creator("emon(Tes.)", "fft"),
            Creator("Rockwell", "fft")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["mafuyu", "mizuki", "miku"]),
            new Vocal("another", ["mafuyu"]),
            new Vocal("another", ["mizuki"])
        ],
        mDate(2019, 1, 18),
        mDate(2020, 11, 1),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=7zwCIz-Ohn4"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm34470195"),
            new MV(2, "https://www.youtube.com/watch?v=JluOv0KD9Wc", mDate(2022, 1, 14), ["mafuyu", "mizuki", "miku_night"])
        ],
        Diff(5, 12, 16, 24, 27)
    ),
    new Music("potatoになっていく",
        [
            Creator("Neru", "ttt")
        ],
        [
            new Vocal("virtual", ["rin", "len"]),
            new Vocal("virtual", ["len", "meiko", "luka", "kaito", "miku"]),
            new Vocal("sekai", ["rui", "miku", "tsukasa", "emu", "nene"])
        ],
        mDate(2020, 3, 30),
        mDate(2020, 11, 7),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=Dun11cIEo9s"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm36594334"),
            new MV(3, "https://www.youtube.com/watch?v=h_h1uJcLsAE", mDate(2021, 2, 8), ["miku_wonder", "emu", "rui", "tsukasa", "nene"])
        ],
        Diff(5, 11, 17, 24, 28),
        "newlyWritten"
    ),
    new Music("ローリンガール",
        [
            Creator("wowaka", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"])
        ],
        mDate(2010, 2, 14),
        mDate(2020, 11, 14),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=vnw8zURAxkU"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm9714351"),
        ],
        Diff(8, 12, 18, 26, 31)
    ),
    new Music("モア！ジャンプ！モア！",
        [
            Creator("ナユタン星人", "ttt")
        ],
        [
            new Vocal("sekai", ["airi", "miku", "minori", "haruka", "shizuku"]),
        ],
        null,
        mDate(2020, 11, 19),
        [
            new MV(2, "https://www.youtube.com/watch?v=SKbutknpQ_I", mDate(2021, 6, 21), ["airi", "miku_more", "minori", "haruka", "shizuku"]),
            new MV(2, "https://www.youtube.com/watch?v=vjCfKbwD17c", mDate(2020, 11, 19), ["airi", "miku_more", "minori", "haruka", "shizuku"], "ゲームサイズ")
        ],
        Diff(9, 13, 18, 26, 31),
        "newlyWritten"
    ),
    new Music("裏表ラバーズ",
        [
            Creator("wowaka", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"])
        ],
        mDate(2009, 8, 30),
        mDate(2020, 11, 21),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=b_cuMcDWwsI"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm8082467")
        ],
        Diff(8, 12, 18, 26, 30)
    ),
    new Music("アンノウン・マザーグース",
        [
            Creator("wowaka", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"])
        ],
        mDate(2017, 8, 22),
        mDate(2020, 11, 23),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=P_CSdxSGfaA"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm31791630")
        ],
        Diff(8, 12, 17, 26, 29)
    ),
    new Music("愛されなくても君がいる",
        [
            Creator("ピノキオピー", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"])
        ],
        mDate(2020, 7, 22),
        mDate(2020, 11, 30),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=ygY2qObZv24"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm37223770")
        ],
        Diff(7, 12, 16, 23, 27)
    ),
    new Music("ウミユリ海底譚",
        [
            Creator("n-buna", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["ichika", "miku", "honami"]),
            new Vocal("another", ["honami"])
        ],
        mDate(2014, 2, 24),
        mDate(2020, 12, 1),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=7JANm3jOb2k"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm22960446"),
            new MV(3, "https://www.youtube.com/watch?v=7y8ufRaaZC4", mDate(2022, 1, 1), ["ichika", "saki", "honami", "shiho", "miku_leo"])
        ],
        Diff(6, 13, 17, 23, 27)
    ),
    new Music("Forward",
        [
            Creator("R Sound Design", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("virtual", ["rin", "meiko", "miku", "kaito", "len"]),
            new Vocal("sekai", ["an", "kohane", "miku", "akito", "toya"]),
            new Vocal("another", ["an", "kohane"])
        ],
        mDate(2020, 12, 11),
        mDate(2020, 12, 8),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=crCS77wqxTI"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm37937383"),
            new MV(3, "https://www.youtube.com/watch?v=t7hnsVAsWCo", mDate(2020, 12, 8), ["miku_vivid", "an", "akito", "toya", "kohane"])
        ],
        Diff(6, 11, 16, 24, 28),
        "newlyWritten"
    ),
    new Music("独りんぼエンヴィー",
        [
            Creator("koyori", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("virtual", ["miku", "luka", "rin"]),
            new Vocal("sekai", ["miku", "kanade", "mizuki"]),
            new Vocal("another", ["kanade"]),
            new Vocal("another", ["mizuki"])
        ],
        mDate(2012, 11, 29),
        mDate(2020, 12, 14),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=UKVioegPPds"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm19466301"),
            new MV(3, "https://www.youtube.com/watch?v=luujC_Y4Wsw", mDate(2020, 12, 14), ["miku_night", "mizuki", "kanade"])
        ],
        Diff(6, 11, 16, 22, 26)
    ),
    new Music("ニジイロストーリーズ",
        [
            Creator("OSTER project", "ttt")
        ],
        [
            new Vocal("virtual", ["miku", "rin", "len", "luka", "meiko", "kaito"]),
            new Vocal("sekai", ["nene", "rui", "meiko", "kaito"]),
            new Vocal("another", ["nene", "rui"]),
            new Vocal("another", ["meiko", "kaito"])
        ],
        mDate(2020, 12, 20),
        mDate(2020, 12, 20),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=WztzykQSkgM"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm37987111"),
            new MV(2, "https://www.youtube.com/watch?v=eLIUBridZsw", mDate(2022, 3, 14), ["nene", "rui", "meiko", "kaito", "tsukasa", "emu"]),
            new MV(2, "https://www.youtube.com/watch?v=EIUO-fPrkSo", mDate(2020, 12, 20), ["nene", "rui", "meiko", "kaito", "tsukasa", "emu"], "ゲームサイズ")
        ],
        Diff(9, 13, 18, 25, 29),
        "newlyWritten"
    ),
    new Music("ODDS & ENDS",
        [
            Creator("ryo", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"])
        ],
        null,
        mDate(2020, 12, 24),
        [
            new PlayingMovie(DiffParam.HARD, "https://www.youtube.com/watch?v=onaipOwQ_Ek"),
            new Link("マジカルミライ2013", "https://www.youtube.com/watch?v=5kEoYWYnIIw")
        ],
        Diff(8, 12, 18, 24, 29)
    ),
    new Music("ドラマツルギー",
        [
            Creator("Eve", "ttf"),
            Creator("Numa", "fft")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["miku", "ichika"]),
            new Vocal("another", ["ichika"])
        ],
        mDate(2017, 10, 10),
        mDate(2020, 12, 28),
        [
            new Link("原曲", "https://www.nicovideo.jp/watch/sm32076378"),
            new Link("Eve ver.", "https://www.youtube.com/watch?v=jJzw1h5CR-I")
        ],
        Diff(7, 12, 17, 25, 28)
    ),
    new Music("グリーンライツ・セレナーデ",
        [
            Creator("Sakurai", "tff"),
            Creator("Omoi", "ftt")
        ],
        [
            new Vocal("virtual", ["miku"])
        ],
        mDate(2018, 7, 6),
        mDate(2020, 12, 29),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=XSLhsjepelI"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm33480697"),
            new Link("マジカルミライ2018", "https://www.nicovideo.jp/watch/so33838432"),
            new Link("マジカルミライ2018", "https://www.youtube.com/watch?v=U1oeOZVtA84")
        ],
        Diff(9, 14, 19, 27, 31)
    ),
    new Music("恋愛裁判",
        [
            Creator("40mP", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["airi", "miku", "minori"]),
            new Vocal("another", ["minori"]),
            new Vocal("another", ["airi"])
        ],
        mDate(2014, 6, 10),
        mDate(2020, 12, 30),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=TXzfQ0cP1P0"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm23750267"),
            new MV(2, "https://www.youtube.com/watch?v=mqrp4SfMJwk", mDate(2021, 8, 26), ["airi", "miku_more", "minori"])
        ],
        Diff(6, 12, 17, 22, 27)
    ),
    new Music("＊ハロー、プラネット。",
        [
            Creator("sasakure.UK", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"])
        ],
        mDate(2009, 5, 24),
        mDate(2020, 12, 31),
        [
            new Link("原曲", "https://www.nicovideo.jp/watch/sm7138245"),
            new Link("10周年記念アレンジ", "https://www.youtube.com/watch?v=9IwAL4fCJzg"),
            new Link("10周年記念アレンジ", "https://www.nicovideo.jp/watch/sm35168447")
        ],
        Diff(6, 10, 17, 24, 28)
    ),
    new Music("千本桜",
        [
            Creator("黒うさ", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("virtual", ["miku", "rin", "len", "luka", "meiko", "kaito"])
        ],
        mDate(2011, 9, 17),
        mDate(2021, 1, 1),
        [
            new Link("原曲", "https://www.nicovideo.jp/watch/sm15630734")
        ],
        Diff(7, 14, 20, 26, 32)
    ),
    new Music("ECHO",
        [
            Creator("Crusher P", "ttf")
        ],
        [
            new Vocal("virtual", ["gumi"]),
            new Vocal("sekai", ["luka", "kohane", "an", "akito", "toya"]),
            new Vocal("another", ["kohane", "toya"]),
            new Vocal("another", ["an", "akito"])
        ],
        mDate(2014, 10, 8),
        mDate(2021, 1, 2),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=cQKGUgOfD8U"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm24643818"),
            new MV(2, "https://www.youtube.com/watch?v=4z9Mg8sbFeU", mDate(2021, 5, 4), ["luka", "kohane", "an", "akito", "toya"])
        ],
        Diff(6, 12, 16, 23, 26)
    ),
    new Music("チュルリラ・チュルリラ・ダッダッダ！",
        [
            Creator("和田たけあき(くらげP)", "ttt")
        ],
        [
            new Vocal("sekai", ["tsukasa", "emu", "nene", "rui"]),
            new Vocal("another", ["tsukasa", "nene"]),
        ],
        mDate(2016, 2, 22),
        mDate(2021, 1, 3),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=_j0kfGNwIlw"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm28276238"),
            new MV(3, "https://www.youtube.com/watch?v=QOU2jkl30Vs", mDate(2021, 1, 3), ["emu", "nene", "tsukasa", "rui"]),
            new MV(2, "https://www.youtube.com/watch?v=ZiZkXbivmh4", mDate(2022, 1, 26), ["emu", "nene", "tsukasa", "rui"]),
            new Link("セルフカバー", "https://www.youtube.com/watch?v=t2iQNmVfhGY")
        ],
        Diff(9, 13, 18, 26, 31)
    ),
    new Music("ブレス・ユア・ブレス",
        [
            Creator("和田たけあき", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"])
        ],
        mDate(2019, 5, 31),
        mDate(2021, 1, 4),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=a-Nf3QUFkOU"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm35199769"),
            new Link("マジカルミライ2019", "https://www.youtube.com/watch?v=7EEUU-yIN5c"),
            new Link("マジカルミライ2019", "https://www.nicovideo.jp/watch/so35671517")
        ],
        Diff(7, 13, 17, 24, 28)
    ),
    new Music("とても痛い痛がりたい",
        [
            Creator("EZFG", "ttt")
        ],
        [
            new Vocal("virtual", ["vy2v3"]),
            new Vocal("sekai", ["miku", "mafuyu", "ena"])
        ],
        mDate(2012, 10, 3),
        mDate(2021, 1, 5),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=dBa8emykxEo"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm19037197")
        ],
        Diff(6, 13, 18, 23, 28)
    ),
    new Music("霽れを待つ",
        [
            Creator("Orangestar", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["honami", "ichika", "miku", "saki", "shiho"]),
            new Vocal("another", ["saki"]),
            new Vocal("another", ["honami"])
        ],
        mDate(2021, 1, 10),
        mDate(2021, 1, 10),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=wvlUWjqGQSA"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm38099931"),
            new MV(2, "https://www.youtube.com/watch?v=70ZLvDTonqI", mDate(2021, 1, 10), ["miku_leo", "ichika", "saki", "honami", "shiho"])
        ],
        Diff(7, 12, 17, 26, 30),
        "newlyWritten"
    ),
    new Music("ワールズエンド・ダンスホール",
        [
            Creator("wowaka", "ttt")
        ],
        [
            new Vocal("virtual", ["miku", "luka"])
        ],
        mDate(2010, 5, 18),
        mDate(2021, 1, 14),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=ZB75e7vzX0I"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm10759623")
        ],
        Diff(7, 12, 18, 26, 30)
    ),
    new Music("ヒビカセ",
        [
            Creator("れをる", "tff"),
            Creator("ギガ", "ftt")
        ],
        [
            new Vocal("virtual", ["miku"])
        ],
        mDate(2014, 9, 24),
        mDate(2021, 1, 18),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=TkroHwQYpFE"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm24536934")
        ],
        Diff(7, 12, 17, 25, 28)
    ),
    new Music("Color of Drops",
        [
            Creator("40mP", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["shizuku", "luka", "minori", "haruka", "airi"]),
            new Vocal("another", ["haruka"]),
            new Vocal("another", ["shizuku"]),
            new Vocal("another", ["luka"])
        ],
        mDate(2021, 1, 29),
        mDate(2021, 1, 29),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=i5rl-NGSYoo"),
            new MV(3, "https://www.youtube.com/watch?v=vU-tfn7yyrQ", mDate(2021, 1, 29), ["shizuku", "minori", "haruka", "airi", "luka"])
        ],
        Diff(6, 12, 16, 23, 27),
        "newlyWritten"
    ),
    new Music("RAD DOGS",
        [
            Creator("q*Left", "tff"),
            Creator("八王子P", "ftt")
        ],
        [
            new Vocal("sekai", ["toya", "akito", "kohane", "an", "miku"]),
            new Vocal("another", ["akito", "toya"]),
            new Vocal("another", ["kohane", "an"])
        ],
        mDate(2021, 2, 7),
        mDate(2021, 1, 31),
        [
            new MV(2, "https://www.youtube.com/watch?v=ZMbWDpC1N7s", mDate(2021, 2, 7), ["toya", "akito", "kohane", "an", "miku_vivid"])
        ],
        Diff(6, 12, 18, 26, 30),
        "newlyWritten"
    ),
    new Music("ミルククラウン・オン・ソーネチカ",
        [
            Creator("ユジー", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["minori", "shizuku", "miku"]),
            new Vocal("another", ["minori"]),
            new Vocal("another", ["shizuku"])
        ],
        mDate(2014, 4, 25),
        mDate(2021, 2, 6),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=zRar5r3TieE"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm23404002"),
            new MV(2, "https://www.youtube.com/watch?v=xBVIHNosBTg", mDate(2022, 5, 24), ["minori", "shizuku", "miku_more"])
        ],
        Diff(7, 13, 18, 26, 30)
    ),
    new Music("タイムマシン",
        [
            Creator("164", "tff"),
            Creator("40mP", "ftf"),
            Creator("1640mP", "fft")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("virtual", ["miku", "luka", "meiko"]),
            new Vocal("sekai", ["miku", "ichika", "saki"]),
            new Vocal("another", ["saki"])
        ],
        mDate(2010, 9, 13),
        mDate(2021, 2, 10),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=EgOWe9ByNaE"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm12098837"),
            new MV(3, "https://www.youtube.com/watch?v=NHR3b9v_S0I", mDate(2021, 2, 10), ["ichika", "saki", "honami", "shiho", "miku_leo"]),
            new MV(2, "https://www.youtube.com/watch?v=s1yW2jPJiVE", mDate(2021, 7, 3), ["ichika", "saki", "miku_leo"])
        ],
        Diff(6, 11, 16, 23, 26)
    ),
    new Music("drop pop candy",
        [
            Creator("れをる", "tff"),
            Creator("ギガ", "ftt")
        ],
        [
            new Vocal("virtual", ["rin", "luka"]),
            new Vocal("sekai", ["rin", "luka", "kohane", "an"]),
        ],
        mDate(2014, 7, 18),
        mDate(2021, 2, 15),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=4sq2lPNxi7M"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm24029703"),
            new MV(3, "https://www.youtube.com/watch?v=KxNII3csgw4", mDate(2021, 2, 15), ["kohane", "an", "rin", "luka"])
        ],
        Diff(6, 12, 17, 25, 28)
    ),
    new Music("ポジティブ☆ダンスタイム",
        [
            Creator("キノシタ", "ttt")
        ],
        [
            new Vocal("virtual", ["una", "rin"]),
            new Vocal("sekai", ["rin", "emu", "nene"]),
            new Vocal("another", ["emu"]),
            new Vocal("another", ["nene"]),
            new Vocal("april", ["rin", "haruka", "kohane", "emu", "mafuyu"])
        ],
        mDate(2017, 10, 12),
        mDate(2021, 2, 19),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=FT91CrPPAqc"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm32087162"),
            new MV(2, "https://www.youtube.com/watch?v=BdTf_uKTqos", mDate(2021, 7, 20), ["rin", "emu", "nene"]),
            new Link("エイプリルフール2022", "https://www.youtube.com/watch?v=HBJ3HWq5c10")
        ],
        Diff(9, 14, 18, 26, 31)
    ),
    new Music("Brand New Day",
        [
            Creator("いるかアイス", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"])
        ],
        mDate(2020, 11, 30),
        mDate(2021, 2, 22),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=2KrCmAWrrKI"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm37894731")
        ],
        Diff(9, 14, 19, 28, 32),
        "next_1"
    ),
    new Music("限りなく灰色へ",
        [
            Creator("すりぃ", "ttt")
        ],
        [
            new Vocal("virtual", ["len"]),
            new Vocal("sekai", ["ena", "rin", "kanade", "mafuyu", "mizuki"]),
            new Vocal("another", ["ena"]),
            new Vocal("another", ["rin"]),
        ],
        mDate(2021, 2, 26),
        mDate(2021, 2, 26),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=cwLlHFMlBNQ"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm38335870"),
            new MV(3, "https://www.youtube.com/watch?v=qtJ6U4c0_fQ", mDate(2021, 4, 6), ["ena", "mizuki", "kanade", "rin", "mafuyu"])
        ],
        Diff(6, 12, 18, 26, 30),
        "newlyWritten"
    ),
    new Music("ワンスアポンアドリーム",
        [
            Creator("YASUHIRO(康寛)", "ttt"),
        ],
        [
            new Vocal("virtual", ["rin"]),
            new Vocal("sekai", ["emu", "len", "tsukasa", "nene", "rui"]),
            new Vocal("another", ["emu"])
        ],
        mDate(2021, 3, 8),
        mDate(2021, 2, 28),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=S84mvlha5Fc"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm38385642"),
            new MV(2, "https://www.youtube.com/watch?v=1RoDmN9n8xE", mDate(2021, 4, 21), ["emu", "len", "tsukasa", "nene", "rui"])
        ],
        Diff(6, 11, 16, 22, 27),
        "newlyWritten"
    ),
    new Music("ボッカデラベリタ",
        [
            Creator("柊キライ", "ttt"),
        ],
        [
            new Vocal("virtual", ["flower"]),
            new Vocal("sekai", ["mafuyu", "mizuki"])
        ],
        mDate(2020, 4, 26),
        mDate(2021, 3, 6),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=wp9Z2wZ-2bs"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm36731216"),
            new MV(2, "https://www.youtube.com/watch?v=ZjNUJUgyoOw", mDate(2021, 5, 27), ["mafuyu", "mizuki"])
        ],
        Diff(7, 13, 18, 25, 28)
    ),
    new Music("みくみくにしてあげる♪【してやんよ】",
        [
            Creator("ika_mo", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"])
        ],
        mDate(2007, 9, 20),
        mDate(2021, 3, 9),
        [
            new Link("原曲", "https://www.nicovideo.jp/watch/sm1097445")
        ],
        Diff(7, 12, 17, 24, 28)
    ),
    new Music("威風堂々",
        [
            Creator("梅とら", "ttt")
        ],
        [
            new Vocal("virtual", ["luka", "miku", "gumi", "ia", "rin"]),
            new Vocal("sekai", ["akito", "toya", "kaito"]),
            new Vocal("another", ["akito"]),
            new Vocal("another", ["toya"]),
            new Vocal("another", ["kaito"]),
            new Vocal("april", ["kaito", "akito", "toya", "tsukasa", "rui"])
        ],
        mDate(2012, 10, 29),
        mDate(2021, 3, 15),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=xGNQOqtGU_E"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm19233263"),
            new MV(3, "https://www.youtube.com/watch?v=KvnS-TCq05Y", mDate(2021, 3, 15), ["kaito", "akito", "toya"]),
            new MV(2, "https://www.youtube.com/watch?v=I36IQ3cEPAo", mDate(2022, 4, 26), ["kaito", "akito", "toya"]),
            new Link("エイプリルフール2022", "https://www.youtube.com/watch?v=6i79cbsbRrs")
        ],
        Diff(6, 12, 17, 24, 28)
    ),
    new Music("from Y to Y",
        [
            Creator("ジミーサムP", "ttf")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["miku", "ichika", "saki", "honami", "shiho"]),
            new Vocal("another", ["ichika", "honami"]),
            new Vocal("another", ["saki", "shiho"])
        ],
        mDate(2009, 3, 24),
        mDate(2021, 3, 22),
        [
            new Link("原曲", "https://www.nicovideo.jp/watch/sm6529016")
        ],
        Diff(5, 11, 16, 24, 26)
    ),
    new Music("初音ミクの激唱",
        [
            Creator("GAiA", "tff"),
            Creator("cosMo@暴走P", "ftt")
        ],
        [
            new Vocal("virtual", ["miku"])
        ],
        mDate(2010, 7, 9),
        mDate(2021, 3, 30),
        [
            new Link("原曲(2018Remake)", "https://www.youtube.com/watch?v=MFEaIgMkR_0"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm11328911")
        ],
        Diff(9, 14, 20, 30, 33)
    ),
    new Music("天使のクローバー",
        [
            Creator("DIVELA", "ttt")
        ],
        [
            new Vocal("virtual", ["rin"]),
            new Vocal("sekai", ["minori", "haruka", "airi", "shizuku", "rin"]),
            new Vocal("another", ["minori"]),
            new Vocal("another", ["airi"])
        ],
        mDate(2021, 3, 30),
        mDate(2021, 3, 30),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=lFJA9muTUDM"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm38510568"),
            new MV(3, "https://www.youtube.com/watch?v=fYhFyk41rSw", mDate(2021, 3, 30), ["minori", "airi", "haruka", "shizuku", "rin"])
        ],
        Diff(9, 13, 17, 27, 31),
        "newlyWritten"
    ),
    new Music("お気に召すまま",
        [
            Creator("Eve", "ttf"),
            Creator("Numa", "fft")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["tsukasa", "emu", "nene", "rui", "len"]),
            new Vocal("another", ["rui"])
        ],
        mDate(2017, 11, 28),
        mDate(2021, 4, 5),
        [
            new Link("セルフカバー", "https://www.youtube.com/watch?v=nROvY9uiYYk"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm32338124"),
            new MV(3, "https://www.youtube.com/watch?v=M_9lPZyS-eQ", mDate(2021, 4, 5), ["len", "emu", "tsukasa", "rui", "nene"])
        ],
        Diff(6, 12, 18, 24, 28)
    ),
    new Music("どりーみんチュチュ",
        [
            Creator("emon(Tes.)", "ttt")
        ],
        [
            new Vocal("virtual", ["luka"]),
            new Vocal("sekai", ["luka", "minori", "haruka", "airi", "shizuku"]),
            new Vocal("another", ["haruka"]),
            new Vocal("another", ["airi"]),
            new Vocal("another", ["shizuku"])
        ],
        mDate(2014, 2, 28),
        mDate(2021, 4, 12),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=WdHRGH1Qv70"),
            new MV(2, "https://www.youtube.com/watch?v=ZVnD_K972P8", mDate(2022, 2, 14), ["luka", "minori", "haruka", "airi", "shizuku"])
        ],
        Diff(6, 13, 17, 23, 27)
    ),
    new Music("アイディスマイル",
        [
            Creator("とあ", "ttt")
        ],
        [
            new Vocal("virtual", ["miku", "rin"]),
            new Vocal("sekai", ["mizuki", "meiko", "kanade", "mafuyu", "ena"]),
            new Vocal("another", ["kanade"]),
            new Vocal("another", ["mafuyu"]),
            new Vocal("another", ["ena"]),
            new Vocal("another", ["mizuki"])
        ],
        mDate(2021, 5, 1, 25, 0),
        mDate(2021, 4, 20),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=X_6EPkvIAGg"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm38667465"),
            new MV(3, "https://www.youtube.com/watch?v=QdYji4SVH3A", mDate(2021, 4, 19), ["mizuki", "ena", "kanade", "meiko", "mafuyu"])
        ],
        Diff(7, 12, 17, 25, 28),
        "newlyWritten"
    ),
    new Music("「１」",
        [
            Creator("164", "ttt")
        ],
        [
            new Vocal("virtual", ["luka"]),
            new Vocal("sekai", ["shiho", "ichika", "luka", "saki", "honami"]),
            new Vocal("another", ["ichika"]),
            new Vocal("another", ["honami"]),
            new Vocal("another", ["shiho"])
        ],
        mDate(2021, 4, 21),
        mDate(2021, 4, 21),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=fobQOAOAdoE"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm38662481"),
            new MV(2, "https://www.youtube.com/watch?v=_GdIO1AANg4", mDate(2021, 4, 28), ["shiho", "ichika", "luka", "saki", "honami"])
        ],
        Diff(8, 13, 16, 23, 26),
        "newlyWritten"
    ),
    new Music("花を唄う",
        [
            Creator("シノ", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"])
        ],
        mDate(2021, 1, 28),
        mDate(2021, 4, 26),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=gmIcg1EHIac"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm38186882")
        ],
        Diff(6, 12, 19, 25, 30),
        "next_2"
    ),
    new Music("夜に駆ける",
        [
            Creator("Ayase", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["kanade", "miku"]),
            new Vocal("another", ["ichika"]),
            new Vocal("another", ["shizuku"]),
            new Vocal("another", ["kohane"]),
            new Vocal("another", ["nene"]),
            new Vocal("another", ["kanade"])
        ],
        mDate(2019, 11, 20),
        mDate(2021, 5, 1),
        [
            new Link("オリジナル", "https://www.youtube.com/watch?v=x8VYWazR5mE"),
            new Link("オリジナル", "https://www.nicovideo.jp/watch/sm35979548")
        ],
        Diff(6, 11, 18, 25, 29),
        "tieup_Ayase"
    ),
    new Music("幽霊東京",
        [
            Creator("Ayase", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["kaito", "akito", "toya"]),
            new Vocal("another", ["toya"])
        ],
        mDate(2019, 12, 3),
        mDate(2021, 5, 3),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=lWl5viCqGSc"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm36036629"),
            new Link("セルフカバー", "https://www.youtube.com/watch?v=DtBoAqkIJzI"),
            new Link("セルフカバー", "https://www.nicovideo.jp/watch/sm36036629")
        ],
        Diff(7, 13, 17, 24, 27),
        "tieup_Ayase"
    ),
    new Music("シネマ",
        [
            Creator("Ayase", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["akito", "kaito", "kohane", "an", "toya"]),
            new Vocal("another", ["akito"])
        ],
        mDate(2021, 5, 8),
        mDate(2021, 5, 8),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=EEbWRjavSVw"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm38708262"),
            new MV(3, "https://www.youtube.com/watch?v=mfYruS61p48", mDate(2021, 5, 8), ["kaito", "kohane", "toya", "akito", "an"]),
            new MV(2, "https://www.youtube.com/watch?v=8m1cUgLepmY", mDate(2021, 8, 17), ["akito", "kaito", "kohane", "an", "toya"])
        ],
        Diff(6, 12, 18, 24, 29),
        "newlyWritten"
    ),
    new Music("KING",
        [
            Creator("Kanaria", "ttf")
        ],
        [
            new Vocal("virtual", ["gumi"]),
            new Vocal("sekai", ["tsukasa", "rui"]),
            new Vocal("another", ["tsukasa"]),
            new Vocal("another", ["rui"])
        ],
        mDate(2020, 8, 2),
        mDate(2021, 5, 17),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=cm-l2h6GB8Q"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm37287661"),
            new MV(2, "https://www.youtube.com/watch?v=B45Q1AbiBWg", mDate(2021, 12, 23), ["tsukasa", "rui"])
        ],
        Diff(7, 14, 19, 25, 29)
    ),
    new Music("アイノマテリアル",
        [
            Creator("Junky", "ttt")
        ],
        [
            new Vocal("virtual", ["miku", "rin"]),
            new Vocal("sekai", ["haruka", "shizuku", "meiko", "minori", "airi"]),
            new Vocal("another", ["minori"]),
        ],
        mDate(2021, 5, 29),
        mDate(2021, 5, 21),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=YsVmtXmpGEI"),
            new MV(2, "https://www.youtube.com/watch?v=miLfbcfdqus", mDate(2021, 5, 29), ["haruka", "shizuku", "meiko", "minori", "airi"])
        ],
        Diff(6, 11, 16, 22, 26),
        "newlyWritten"
    ),
    new Music("いかないで",
        [
            Creator("想太", "ttf")
        ],
        [
            new Vocal("virtual", ["yuki"]),
            new Vocal("sekai", ["ichika", "saki", "miku"]),
            new Vocal("another", ["saki"])
        ],
        mDate(2013, 10, 9),
        mDate(2021, 5, 28),
        [
            new Link("原曲", "https://www.nicovideo.jp/watch/sm22001720"),
            new Link("原曲(remaster)", "https://www.youtube.com/watch?v=L0tcMxp8Iy8"),
            new MV(3, "https://www.youtube.com/watch?v=x7_chKm37m8", mDate(2021, 5, 28), ["ichika", "saki", "honami", "shiho", "miku_leo"])
        ],
        Diff(8, 13, 18, 25, 29)
    ),
    new Music("ロミオとシンデレラ",
        [
            Creator("doriko", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["miku", "airi", "shizuku"]),
            new Vocal("another", ["airi"]),
            new Vocal("another", ["shizuku"])
        ],
        mDate(2009, 4, 6),
        mDate(2021, 6, 7),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=kp-plPYAPq8"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm6666016"),
            new MV(3, "https://www.youtube.com/watch?v=mlTSkRO92S0", mDate(2021, 6, 7), ["miku_more", "airi", "shizuku"])
        ],
        Diff(7, 12, 17, 24, 27)
    ),
    new Music("泡沫未来",
        [
            Creator("加賀(ネギシャワーP)", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"])
        ],
        mDate(2021, 2, 26),
        mDate(2021, 6, 14),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=juOJFUVF12k"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm38333228")
        ],
        Diff(8, 12, 17, 25, 29),
        "next_3"
    ),
    new Music("トンデモワンダーズ",
        [
            Creator("sasakure.UK", "ttt"),
            Creator("岸田勇気(有形ランペイジ)", "fff", "Key")
        ],
        [
            new Vocal("virtual", ["miku", "kaito"]),
            new Vocal("sekai", ["tsukasa", "kaito", "emu", "nene", "rui"]),
            new Vocal("another", ["tsukasa"]),
            new Vocal("another", ["emu"]),
            new Vocal("another", ["nene"]),
            new Vocal("another", ["rui"])
        ],
        mDate(2021, 6, 19),
        mDate(2021, 6, 19),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=dBQg24mx45Y"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm38907008"),
            new MV(3, "https://www.youtube.com/watch?v=vI5xihka9hw", mDate(2021, 6, 19), ["kaito", "emu", "tsukasa", "nene", "rui"])
        ],
        Diff(9, 14, 19, 27, 32),
        "newlyWritten"
    ),
    new Music("カナデトモスソラ",
        [
            Creator("Sasanomaly", "ttt")
        ],
        [
            new Vocal("sekai", ["kanade", "luka", "mafuyu", "ena", "mizuki"]),
            new Vocal("another", ["kanade"]),
            new Vocal("another", ["mafuyu"]),
            new Vocal("another", ["ena"]),
            new Vocal("another", ["mizuki"])
        ],
        mDate(2022, 2, 10),
        mDate(2021, 6, 21),
        [
            new Link("原曲", "https://www.nicovideo.jp/watch/sm40015219"),
            new MV(2, "https://www.youtube.com/watch?v=GTlQhMRHXIg", mDate(2021, 6, 28), ["kanade", "luka", "mafuyu", "ena", "mizuki"])
        ],
        Diff(6, 11, 15, 22, 26),
        "newlyWritten"
    ),
    new Music("トラフィック・ジャム",
        [
            Creator("煮ル果実", "ttt")
        ],
        [
            new Vocal("virtual", ["flower"]),
            new Vocal("sekai", ["rin", "kohane", "an", "akito", "toya"]),
            new Vocal("another", ["kohane", "toya"]),
            new Vocal("another", ["an", "akito"])
        ],
        mDate(2019, 8, 25),
        mDate(2021, 6, 30),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=oUevY6uH4Qg"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm35586514"),
            new MV(2, "https://www.youtube.com/watch?v=UyDytd1EZSk", mDate(2021, 12, 9), ["rin", "kohane", "an", "akito", "toya"])
        ],
        Diff(6, 13, 18, 24, 28)
    ),
    new Music("フロムトーキョー",
        [
            Creator("夏代孝明", "ttf"),
            Creator("渡辺拓也", "ftt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["saki", "ichika", "miku", "honami", "shiho"]),
            new Vocal("another", ["saki"]),
            new Vocal("another", ["honami"]),
            new Vocal("another", ["shiho"])
        ],
        mDate(2021, 7, 23),
        mDate(2021, 7, 7),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=mMiLWxuffdQ"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm39105923"),
            new MV(3, "https://www.youtube.com/watch?v=ydf6PIlMuyE", mDate(2021, 7, 7), ["ichika", "saki", "honami", "shiho", "miku_leo"])
        ],
        Diff(6, 12, 18, 24, 28),
        "newlyWritten"
    ),
    new Music("Beat Eater",
        [
            Creator("ポリスピカデリー", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["kohane", "len", "an", "akito", "toya"]),
            new Vocal("another", ["kohane"]),
            new Vocal("another", ["an"])
        ],
        mDate(2021, 7, 18),
        mDate(2021, 7, 9),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=Rcc_BreWEMI"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm39046046"),
            new MV(2, "https://www.youtube.com/watch?v=DaWbq6KeJq4", mDate(2021, 7, 18), ["kohane", "len", "an", "akito", "toya"])
        ],
        Diff(6, 11, 17, 25, 28),
        "newlyWritten"
    ),
    new Music("六兆年と一夜物語",
        [
            Creator("kemu", "ttt")
        ],
        [
            new Vocal("virtual", ["ia"]),
            new Vocal("sekai", ["miku", "ichika"]),
            new Vocal("another", ["ichika"]),
            new Vocal("another", ["miku"])
        ],
        mDate(2012, 4, 11),
        mDate(2021, 7, 12),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=Om3MTou2kPg"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm17520775"),
            new MV(2, "https://www.youtube.com/watch?v=uDgikBUvIlQ", mDate(2021, 7, 12), ["miku_leo", "ichika"])
        ],
        Diff(9, 14, 20, 29, 34)
    ),
    new Music("地球最後の告白を",
        [
            Creator("kemu", "ttt")
        ],
        [
            new Vocal("virtual", ["gumi"]),
            new Vocal("sekai", ["luka", "haruka", "shizuku"]),
            new Vocal("another", ["haruka"]),
            new Vocal("another", ["luka"])
        ],
        mDate(2012, 6, 26),
        mDate(2021, 7, 19),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=s8KBk8ZRH54"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm18198019"),
            new MV(2, "https://www.youtube.com/watch?v=jSwRwYVjRg8", mDate(2021, 7, 19), ["luka", "haruka", "shizuku"])
        ],
        Diff(8, 13, 18, 25, 31)
    ),
    new Music("ビターチョコデコレーション",
        [
            Creator("syudou", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["miku", "kanade", "mafuyu", "ena", "mizuki"]),
            new Vocal("another", ["mafuyu"]),
            new Vocal("another", ["ena"]),
            new Vocal("another", ["mizuki"])
        ],
        mDate(2019, 1, 4),
        mDate(2021, 7, 28),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=XCyKJD6uQyg"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm34425299"),
            new MV(3, "https://www.youtube.com/watch?v=vnTW9sS-9P4", mDate(2021, 7, 28), ["miku_night", "mizuki", "mafuyu", "kanade", "ena"])
        ],
        Diff(7, 12, 19, 25, 31)
    ),
    new Music("そうだった！",
        [
            Creator("タケノコ少年", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"])
        ],
        mDate(2021, 4, 25),
        mDate(2021, 8, 6),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=gfdzYIPjhBU"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm38613334")
        ],
        Diff(8, 14, 19, 27, 31),
        "next_4"
    ),
    new Music("カゲロウデイズ",
        [
            Creator("じん", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["ichika", "saki", "honami", "shiho", "miku"]),
            new Vocal("another", ["ichika"]),
            new Vocal("another", ["saki"]),
            new Vocal("another", ["honami"]),
            new Vocal("another", ["shiho"])
        ],
        mDate(2011, 9, 30),
        mDate(2021, 8, 15, 12, 30),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=EMGyiiTC7sg"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm15751190")
        ],
        Diff(9, 14, 19, 27, 31)
    ),
    new Music("アイスドロップ",
        [
            Creator("aqu3ra", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["airi", "len", "minori", "haruka", "shizuku"]),
            new Vocal("another", ["airi"])
        ],
        mDate(2021, 8, 18),
        mDate(2021, 8, 18),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=WXvm5XfkXrk"),
            new MV(3, "https://www.youtube.com/watch?v=3_HXYLEP7aU", mDate(2021, 8, 18), ["len", "airi", "haruka", "shizuku", "minori"])
        ],
        Diff(7, 12, 18, 24, 27),
        "newlyWritten"
    ),
    new Music("Glory Steady Go!",
        [
            Creator("キノシタ", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["nene", "luka", "tsukasa", "emu", "rui"])
        ],
        mDate(2021, 8, 29),
        mDate(2021, 8, 20),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=Y-QhzXC9NbI"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm39258986"),
            new MV(2, "https://www.youtube.com/watch?v=JoM4JGqQyCU", mDate(2021, 8, 28), ["nene", "luka", "tsukasa", "emu", "rui"])
        ],
        Diff(7, 12, 18, 25, 30),
        "newlyWritten"
    ),
    new Music("チルドレンレコード",
        [
            Creator("じん", "ttt")
        ],
        [
            new Vocal("virtual", ["ia"]),
            new Vocal("sekai", ["kohane", "an", "akito", "toya", "len"]),
            new Vocal("another", ["kohane", "akito"]),
            new Vocal("another", ["an", "toya"])
        ],
        mDate(2012, 7, 21),
        mDate(2021, 8, 23),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=oh9UGmqtdMg"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm18406343"),
            new Link("Re:boot", "https://www.youtube.com/watch?v=WEVgkh_7_0k"),
            new MV(3, "https://www.youtube.com/watch?v=jzecTyD0ljs", mDate(2021, 8, 23), ["len", "toya", "an", "akito", "kohane"])
        ],
        Diff(9, 14, 19, 27, 32)
    ),
    new Music("magic number",
        [
            Creator("伊東健人", "ttf"),
            Creator("OSTER project", "fft")
        ],
        [
            new Vocal("virtual", ["miku"])
        ],
        mDate(2021, 9, 1),
        mDate(2021, 9, 1),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=fzRWpcvPJYo")
        ],
        Diff(6, 11, 18, 25, 29),
        "newlyWritten"
    ),

    new Music("流星のパルス",
        [
            Creator("*Luna", "ttt")
        ],
        [
            new Vocal("virtual", ["len", "miku", "rin", "luka", "meiko", "kaito"]),
            new Vocal("sekai", ["ichika", "meiko", "saki", "honami", "shiho"]),
        ],
        mDate(2021, 9, 19),
        mDate(2021, 9, 10),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=8Zds1FvEtKw"),
            new MV(2, "https://www.youtube.com/watch?v=hZgbqUQI64E", mDate(2021, 9, 19), ["ichika", "meiko", "saki", "honami", "shiho"]),
        ],
        Diff(8, 13, 17, 25, 30),
        "newlyWritten_leo"
    ),
    new Music("カトラリー",
        [
            Creator("有機酸", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["miku", "kanade", "mafuyu"]),
            new Vocal("another", ["kanade"]),
            new Vocal("another", ["mafuyu"])
        ],
        mDate(2017, 12, 25),
        mDate(2021, 9, 21),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=HHhFX9zUV2s"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm32479585")
        ],
        Diff(5, 12, 18, 25, 28)
    ),
    new Music("再生",
        [
            Creator("Picon", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["mafuyu", "rin", "kanade", "ena", "mizuki"]),
            new Vocal("another", ["kanade"]),
            new Vocal("another", ["mafuyu"])
        ],
        mDate(2021, 9, 29),
        mDate(2021, 9, 29),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=purlnb5K_jM"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm39408553"),
            new MV(3, "https://www.youtube.com/watch?v=LLoHF639Jes", mDate(2021, 9, 29), ["mafuyu", "mizuki", "kanade", "ena", "rin"]),
        ],
        Diff(5, 11, 15, 22, 26),
        "newlyWritten_night"
    ),
    new Music("群青讃歌",
        [
            Creator("Eve", "ttf"),
            Creator("Numa", "fft")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["miku", "ichika", "minori", "kohane", "tsukasa", "kanade"]),
            new Vocal("another", ["ichika"]),
            new Vocal("another", ["minori"]),
            new Vocal("another", ["kohane"]),
            new Vocal("another", ["tsukasa"]),
            new Vocal("another", ["kanade"])
        ],
        mDate(2021, 9, 30),
        mDate(2021, 9, 30),
        [
            new Link("原曲", "https://www.nicovideo.jp/watch/sm39411572"),
            new Link("セルフカバー", "https://www.youtube.com/watch?v=sgZjbk9eH6g"),
            new MV(3, "https://www.youtube.com/watch?v=xs4RPTt4J0M", mDate(2021, 9, 30), ["ichika", "minori", "kohane", "tsukasa", "kanade", "miku"]),
            new Link("セカライ", "https://www.youtube.com/watch?v=xtLPqIeA07I")
        ],
        Diff(7, 13, 17, 24, 27),
        "newlyWritten,theme"
    ),
    new Music("炉心融解",
        [
            Creator("kuma(alfred)", "tff"),
            Creator("iroha(sasaki)", "ftf")
        ],
        [
            new Vocal("virtual", ["rin"])
        ],
        mDate(2009, 8, 30),
        mDate(2021, 10, 1),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=dSw8CucthGc"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm8089993")
        ],
        Diff(7, 12, 17, 24, 27)
    ),
    new Music("ロストワンの号哭",
        [
            Creator("Neru", "ttf")
        ],
        [
            new Vocal("virtual", ["rin"]),
            new Vocal("virtual", ["rin", "luka", "meiko"]),
            new Vocal("sekai", ["rin", "ichika", "shiho"]),
            new Vocal("another", ["shiho"]),
            new Vocal("another", ["miku"]),
            new Vocal("another", ["len"])
        ],
        mDate(2013, 3, 4),
        mDate(2021, 10, 2),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=8oBV3jPTW4s"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm20244918"),
            new MV(3, "https://www.youtube.com/watch?v=kIvTE89Yj2A", mDate(2021, 10, 2), ["ichika", "saki", "honami", "shiho", "rin"])
        ],
        Diff(7, 14, 19, 26, 32)
    ),
    new Music("マシンガンポエムドール",
        [
            Creator("cosMo@暴走P", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"])
        ],
        mDate(2021, 10, 3),
        mDate(2021, 10, 3),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=UgZFpO_Y6qo"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm39426624")
        ],
        Diff(9, 14, 23, 31, 34),
        "newlyWritten_virtual"
    ),
    new Music("ベノム",
        [
            Creator("かいりきベア", "ttf")
        ],
        [
            new Vocal("virtual", ["flower"]),
            new Vocal("sekai", ["ena", "mizuki"]),
            new Vocal("another", ["ena"]),
            new Vocal("another", ["mizuki"]),
            new Vocal("april", ["honami", "minori", "nene", "mizuki"])
        ],
        mDate(2018, 8, 2),
        mDate(2021, 10, 4),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=oRJBwaZ59fQ"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm33624822"),
            new Link("エイプリルフール2022", "https://www.youtube.com/watch?v=S3lC1oBfVNQ")
        ],
        Diff(7, 13, 18, 26, 29)
    ),
    new Music("拝啓ドッペルゲンガー",
        [
            Creator("kemu", "ttt")
        ],
        [
            new Vocal("virtual", ["gumi"])
        ],
        mDate(2017, 5, 31),
        mDate(2021, 10, 5),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=grdy6rLbQ-c"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm31314079")
        ],
        Diff(9, 13, 19, 28, 32)
    ),
    new Music("テレキャスタービーボーイ",
        [
            Creator("すりぃ", "ttt")
        ],
        [
            new Vocal("virtual", ["len"]),
            new Vocal("sekai", ["len", "tsukasa", "emu", "nene", "rui"]),
            new Vocal("another", ["emu"]),
            new Vocal("another", ["nene"])
        ],
        mDate(2019, 4, 13),
        mDate(2021, 10, 6),
        [
            new Link("原曲(long ver.)", "https://www.youtube.com/watch?v=i-DZukWFR64"),
            new Link("原曲(long ver.)", "https://www.nicovideo.jp/watch/sm37507315"),
            new Link("原曲", "https://www.youtube.com/watch?v=pWLhidOSYOs"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm34963198")
        ],
        Diff(8, 13, 18, 25, 29)
    ),
    new Music("トキヲ・ファンカ",
        [
            Creator("takamatt", "ttt")
        ],
        [
            new Vocal("virtual", ["gumi"])
        ],
        mDate(2013, 5, 27),
        mDate(2021, 10, 7),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=bcLYdxMusHc"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm20973557")
        ],
        Diff(6, 11, 18, 25, 28)
    ),
    new Music("悪魔の踊り方",
        [
            Creator("キタニタツヤ", "ttf")
        ],
        [
            new Vocal("virtual", ["rin"]),
            new Vocal("sekai", ["rin", "kohane", "an", "akito", "toya"])
        ],
        mDate(2018, 5, 2),
        mDate(2021, 10, 8),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=v7_Jo4SfICk"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm33141569"),
            new MV(3, "https://www.youtube.com/watch?v=lu0AF-JByA8", mDate(2021, 10, 8), ["rin", "kohane", "toya", "akito", "an"])
        ],
        Diff(5, 12, 19, 26, 30)
    ),
    new Music("だれかの心臓になれたなら",
        [
            Creator("ユリイ・カノン", "ttt")
        ],
        [
            new Vocal("virtual", ["gumi"])
        ],
        mDate(2018, 2, 12),
        mDate(2021, 10, 9),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=hZFBTnzKa54"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm32727744")
        ],
        Diff(7, 12, 18, 25, 29)
    ),
    new Music("マシュマリー",
        [
            Creator("MIMI", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["miku", "minori", "airi"]),
            new Vocal("another", ["airi"])
        ],
        mDate(2018, 1, 4),
        mDate(2021, 10, 10),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=qtuX4cHk-vE"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm32528864")
        ],
        Diff(8, 11, 18, 26, 29)
    ),
    new Music("右肩の蝶",
        [
            Creator("水野悠良", "tff"),
            Creator("のりぴー", "ftt")
        ],
        [
            new Vocal("virtual", ["len"])
        ],
        mDate(2009, 5, 3),
        mDate(2021, 10, 11),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=9gRWXcyAfBI"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm6928368"),
            new Link("原曲(リンVer)", "https://www.youtube.com/watch?v=3b9fLkmgtdo"),
            new Link("原曲(リンVer)", "https://www.nicovideo.jp/watch/sm6609407"),
        ],
        Diff(6, 12, 18, 25, 31)
    ),
    new Music("ray",
        [
            Creator("藤原基央", "ttf")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["ichika", "miku"])
        ],
        mDate(2014, 3, 13),
        mDate(2021, 10, 12),
        [
            new Link("オリジナル", "https://www.youtube.com/watch?v=yT_ylSCgY6Q"),
            new MV(3, "https://www.youtube.com/watch?v=S-okMR4YUlo", mDate(2021, 10, 12), ["ichika", "saki", "honami", "shiho", "miku_leo"]),
            new MV(2, "https://www.youtube.com/watch?v=YkP0JMByjRM", mDate(2021, 10, 12), ["ichika", "miku_leo"])
        ],
        Diff(6, 12, 16, 24, 26)
    ),
    new Music("Hello,world!",
        [
            Creator("藤原基央", "ttf")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["ichika", "saki", "honami", "shiho", "miku"]),
        ],
        mDate(2015, 5, 1),
        mDate(2021, 10, 13),
        [
            new Link("オリジナル", "https://www.youtube.com/watch?v=rOU4YiuaxAM"),
            new MV(2, "https://www.youtube.com/watch?v=B1nUc7LfZYA", mDate(2021, 10, 14), ["ichika", "saki", "honami", "shiho", "miku_leo"])
        ],
        Diff(9, 13, 17, 25, 29)
    ),
    new Music("しっくおぶはうす！",
        [
            Creator("オゾン", "ttt")
        ],
        [
            new Vocal("virtual", ["rin", "len"])
        ],
        mDate(2021, 7, 18),
        mDate(2021, 10, 22),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=B4A-edPIz-s"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm39049587")
        ],
        Diff(7, 13, 17, 26, 30),
        "next_5"
    ),
    new Music("ショウタイム・ルーラー",
        [
            Creator("烏屋茶房", "ttt")
        ],
        [
            new Vocal("virtual", ["rin"]),
            new Vocal("sekai", ["rui", "rin", "tsukasa", "emu", "nene"]),
            new Vocal("another", ["tsukasa"]),
            new Vocal("another", ["rui"])
        ],
        mDate(2021, 10, 29),
        mDate(2021, 10, 29),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=uDBVetc5JKo"),
            new MV(3, "https://www.youtube.com/watch?v=bKKxLK_1ae8", mDate(2021, 10, 29), ["rui", "tsukasa", "emu", "nene", "rin"])
        ],
        Diff(9, 13, 19, 25, 31),
        "newlyWritten_wonder"
    ),
    new Music("Happy Halloween",
        [
            Creator("Junky", "ttt")
        ],
        [
            new Vocal("virtual", ["rin"]),
            new Vocal("sekai", ["rin", "minori", "haruka", "airi", "shizuku"]),
            new Vocal("another", ["haruka"]),
            new Vocal("another", ["airi"]),
            new Vocal("another", ["shizuku"])
        ],
        mDate(2014, 10, 10),
        mDate(2021, 10, 30),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=1DcgczDzQPk")
        ],
        Diff(5, 12, 16, 25, 30)
    ),
    new Music("ロウワー",
        [
            Creator("ぬゆり", "ttt")
        ],
        [
            new Vocal("virtual", ["flower"]),
            new Vocal("sekai", ["mizuki", "meiko", "kanade", "mafuyu", "ena"]),
            new Vocal("another", ["ena"]),
            new Vocal("another", ["mizuki"]),
            new Vocal("another", ["miku"])
        ],
        mDate(2021, 11, 11),
        mDate(2021, 10, 31),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=3sEptl-psU0"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm39608927"),
            new MV(2, "https://www.youtube.com/watch?v=16M9oC-a5bY", mDate(2021, 11, 9), ["mizuki", "meiko", "kanade", "mafuyu", "ena"])
        ],
        Diff(6, 12, 17, 26, 31),
        "newlyWritten_night"
    ),
    new Music("初音天地開闢神話",
        [
            Creator("cosMo@暴走P", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"])
        ],
        mDate(2021, 8, 20),
        mDate(2021, 11, 5),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=8J6SMoVd5BY"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm39209934")
        ],
        Diff(9, 14, 20, 28, 32)
    ),
    new Music("オルターエゴ",
        [
            Creator("Misumi", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["miku", "kohane", "an", "akito", "toya"])
        ],
        mDate(2019, 8, 16),
        mDate(2021, 11, 10),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=DlIREQyaxu8"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm35546354")
        ],
        Diff(8, 12, 17, 26, 31)
    ),
    new Music("STAGE OF SEKAI",
        [
            Creator("針原翼(はりーP)", "ttf"),
            Creator("棚橋 EDDY テルアキ", "fft")
        ],
        [
            new Vocal("sekai", ["honami", "ichika", "len", "saki", "shiho"])
        ],
        mDate(2021, 12, 22),
        mDate(2021, 11, 18),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=YVD1RLI7klc"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm39782705"),
            new MV(3, "https://www.youtube.com/watch?v=BNdJWYHa_xg", mDate(2021, 11, 18), ["ichika", "saki", "honami", "shiho", "len"])
        ],
        Diff(8, 12, 17, 25, 30),
        "newlyWritten_leo"
    ),
    new Music("からくりピエロ",
        [
            Creator("40mP", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["miku", "minori", "haruka", "airi", "shizuku"]),
            new Vocal("another", ["minori", "haruka"]),
            new Vocal("another", ["airi", "shizuku"])
        ],
        mDate(2011, 7, 15),
        mDate(2021, 11, 29),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=xxFkW3PCT5M"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm15022913"),
            new MV(3, "https://www.youtube.com/watch?v=R3CGPv9oeDk", mDate(2021, 11, 29), ["miku_more", "airi", "haruka", "minori", "shizuku"])
        ],
        Diff(5, 11, 16, 23, 27)
    ),
    new Music("ワールドワイドワンダー",
        [
            Creator("TOKOTOKO", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["minori", "kaito", "haruka", "airi", "shizuku"]),
        ],
        mDate(2021, 12, 18),
        mDate(2021, 12, 10),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=6NdOqVypgCM"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm39771984"),
            new MV(2, "https://www.youtube.com/watch?v=aO_ZCaoojh4", mDate(2021, 12, 18), ["minori", "kaito", "haruka", "airi", "shizuku"])
        ],
        Diff(6, 13, 18, 24, 28),
        "newlyWritten_more"
    ),
    new Music("悪ノ娘",
        [
            Creator("mothy", "ttt")
        ],
        [
            new Vocal("virtual", ["rin"])
        ],
        mDate(2008, 4, 6),
        mDate(2021, 12, 13),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=W77q-kK8iA8"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm2916956")
        ],
        Diff(6, 12, 17, 24, 27),
        "collab_悪ノ大罪"
    ),
    new Music("悪ノ召使",
        [
            Creator("mothy", "ttt")
        ],
        [
            new Vocal("virtual", ["len"])
        ],
        mDate(2008, 4, 29),
        mDate(2021, 12, 14),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=yzpNpaS0uLc"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm3133304")
        ],
        Diff(6, 12, 17, 24, 27),
        "collab_悪ノ大罪"
    ),
    new Music("去り人達のワルツ",
        [
            Creator("mothy", "ttt")
        ],
        [
            new Vocal("virtual", ["rin"])
        ],
        mDate(2022, 2, 28),
        mDate(2021, 12, 15),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=jNBRyo54Tks")
        ],
        Diff(8, 13, 17, 23, 28),
        "collab_悪ノ大罪, newlyWritten"
    ),
    new Music("ラストスコア",
        [
            Creator("せきこみごはん", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"])
        ],
        mDate(2021, 8, 30),
        mDate(2021, 12, 20),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=zAWu9BK_V5M"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm39267476")
        ],
        Diff(7, 13, 18, 26, 30),
        "next_6"
    ),
    new Music("フィクサー",
        [
            Creator("ぬゆり", "ttt")
        ],
        [
            new Vocal("virtual", ["flower"]),
            new Vocal("sekai", ["tsukasa", "rui"]),
            new Vocal("another", ["tsukasa"]),
            new Vocal("another", ["rui"])
        ],
        mDate(2017, 3, 22),
        mDate(2021, 12, 28),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=srH34Tjjo9U"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm30868619")
        ],
        Diff(6, 12, 19, 26, 31)
    ),
    new Music("ミライ",
        [
            Creator("有機酸", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["toya", "luka", "kohane", "an", "akito"]),
            new Vocal("another", ["akito"]),
            new Vocal("another", ["toya"]),
        ],
        mDate(2021, 12, 29),
        mDate(2021, 12, 29),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=zTokBPAXHW4"),
            new MV(3, "https://www.youtube.com/watch?v=7ub8n1J8ruY", mDate(2021, 12, 29), ["toya", "kohane", "an", "akito", "luka"]),
            new MV(2, "https://www.youtube.com/watch?v=X_u5UtcgrKw", mDate(2021, 12, 29), ["toya", "luka", "kohane", "an", "akito"])
        ],
        Diff(6, 12, 18, 24, 28),
        "newlyWritten_vivid"
    ),
    new Music("ゴーストルール",
        [
            Creator("DECO*27", "ttf"),
            Creator("Naoki Itai(MUSIC FOR MUSIC)", "fft")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["miku", "ichika"]),
            new Vocal("another", ["rin", "len"]),
            new Vocal("another", ["luka", "meiko"])
        ],
        mDate(2016, 1, 8),
        mDate(2021, 12, 30),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=KushW6zvazM"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm27965309")
        ],
        Diff(9, 14, 19, 27, 32)
    ),
    new Music("ヴィラン",
        [
            Creator("てにをは", "ttt")
        ],
        [
            new Vocal("virtual", ["flower"]),
            new Vocal("sekai", ["mafuyu", "mizuki"]),
            new Vocal("another", ["mafuyu"]),
            new Vocal("another", ["mizuki"])
        ],
        mDate(2020, 2, 7),
        mDate(2021, 12, 31),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=p9FJXfGHtDA"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm36332327"),
            new MV(3, "https://www.youtube.com/watch?v=gQD4GfgIqZA", mDate(2021, 12, 31), ["mizuki", "mafuyu"])
        ],
        Diff(6, 13, 18, 25, 29)
    ),
    new Music("サンドリヨン 10th Anniversary",
        [
            Creator("orange", "tff"),
            Creator("Dios/シグナルP", "ftt")
        ],
        [
            new Vocal("virtual", ["miku", "kaito"])
        ],
        mDate(2018, 8, 27),
        mDate(2022, 1, 1),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=mXfnndMDFPs"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm33759466"),
            new Link("原曲(無印)", "https://www.nicovideo.jp/watch/sm4410647")
        ],
        Diff(6, 12, 17, 25, 28)
    ),
    new Music("少女レイ",
        [
            Creator("みきとP", "ttf")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["miku", "haruka", "shizuku"])
        ],
        mDate(2018, 7, 18),
        mDate(2022, 1, 2),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=JW3N-HvU0MA"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm33546451"),
            new MV(3, "https://www.youtube.com/watch?v=NpOR2QwvjPk", mDate(2022, 1, 2), ["miku_more", "haruka", "shizuku"])
        ],
        Diff(7, 14, 17, 24, 27)
    ),
    new Music("ガランド",
        [
            Creator("ピコン", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["len", "akito", "toya"])
        ],
        mDate(2018, 5, 11),
        mDate(2022, 1, 3),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=SXC2wO1XdMI"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm33189938")
        ],
        Diff(7, 13, 18, 24, 28),
    ),

    new Music("エンドマークに希望と涙を添えて",
        [
            Creator("cosMo@暴走P", "ftt")
        ],
        [
            new Vocal("inst")
        ],
        mDate(2015, 12, 4),
        mDate(2022, 1, 8),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=r3FFOl-LAM8"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm27724530")
        ],
        Diff(9, 15, 23, 31, 35),
        "performai"
    ),
    new Music("the EmpErroR",
        [
            Creator("sasakure.UK", "ftt")
        ],
        [
            new Vocal("inst")
        ],
        mDate(2020, 4, 28),
        mDate(2022, 1, 9),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=eImN9Ov-tJg"),
        ],
        Diff(9, 15, 23, 31, 36),
        "performai"
    ),
    new Music("Don't Fight The Music",
        [
            Creator("黒魔", "ftt")
        ],
        [
            new Vocal("inst")
        ],
        null,
        mDate(2022, 1, 10),
        [
            new PlayingMovie(DiffParam.MASTER, "https://www.youtube.com/watch?v=yyBsUVFFSKA")
        ],
        Diff(9, 15, 23, 30, 36),
        "performai"
    ),
    new Music("にっこり^^調査隊のテーマ",
        [
            Creator("じーざす", "ttf"),
            Creator("ワンダフル☆オポチュニティ！", "fft")
        ],
        [
            new Vocal("virtual", ["rin", "len"]),
            new Vocal("sekai", ["emu", "miku", "tsukasa", "nene", "rui"])
        ],
        mDate(2022, 1, 19),
        mDate(2022, 1, 19),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=C_Fc1x_aeFQ"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm39919568"),
            new MV(3, "https://www.youtube.com/watch?v=v7SYWS2jarw", mDate(2022, 1, 19), ["emu", "tsukasa", "nene", "miku_wonder", "rui"])
        ],
        Diff(8, 12, 18, 27, 31),
        "newlyWritten_wonder"
    ),
    new Music("トリコロージュ",
        [
            Creator("煮ル果実", "ttt")
        ],
        [
            new Vocal("virtual", ["flower"]),
            new Vocal("sekai", ["kanade", "miku", "mafuyu", "ena", "mizuki"]),
            new Vocal("another", ["miku"])
        ],
        mDate(2022, 1, 29),
        mDate(2022, 1, 21),
        [
            new Link("バーチャル・シンガーver(flower)", "https://www.youtube.com/watch?v=BPh4m2VnfNo"),
            new Link("バーチャル・シンガーver(ミク)", "https://www.nicovideo.jp/watch/sm40094958"),
            new MV(2, "https://www.youtube.com/watch?v=M_ijFuoASt0", mDate(2022, 1, 29), ["kanade", "miku_night", "mafuyu", "ena", "mizuki"])
        ],
        Diff(7, 13, 18, 24, 28),
        "newlyWritten_night"
    ),
    new Music("心拍数♯0822",
        [
            Creator("蝶々P", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["miku", "ichika", "honami"]),
            new Vocal("another", ["ichika"]),
            new Vocal("another", ["honami"])
        ],
        mDate(2010, 8, 22),
        mDate(2022, 1, 24),
        [
            new Link("原曲", "https://www.nicovideo.jp/watch/sm11834233")
        ],
        Diff(5, 11, 16, 23, 26)
    ),
    new Music("うっせぇわ",
        [
            Creator("syudou", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["mafuyu", "mizuki"]),
            new Vocal("another", ["mafuyu"]),
            new Vocal("another", ["mizuki"])
        ],
        mDate(2020, 10, 23),
        mDate(2022, 1, 31),
        [
            new Link("バーチャル・シンガーver.", "https://www.youtube.com/watch?v=hh3W_FjUn9s"),
            new Link("Ado ver.", "https://www.youtube.com/watch?v=Qp3b-RXtz4w"),
            new Link("Ado ver.", "https://www.nicovideo.jp/watch/sm37761910")
        ],
        Diff(8, 12, 17, 24, 28),
        "tieup_Ado"
    ),
    new Music("踊",
        [
            Creator("Giga", "ftt"),
            Creator("TeddyLoid", "ftt"),
            Creator("DECO*27", "tff")
        ],
        [
            new Vocal("virtual", ["rin", "len"]),
            new Vocal("sekai", ["kohane", "an"]),
            new Vocal("another", ["kohane"]),
            new Vocal("another", ["an"])
        ],
        mDate(2021, 4, 27),
        mDate(2022, 2, 4),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=QuLwvlw6_uU"),
            new Link("Ado ver.", "https://www.youtube.com/watch?v=YnSW8ian29w"),
            new Link("Ado ver.", "https://www.nicovideo.jp/watch/sm38668379")
        ],
        Diff(6, 13, 18, 26, 29),
        "tieup_Ado"
    ),
    new Music("君色マリンスノウ",
        [
            Creator("カルロス袴田(サイゼP)", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"])
        ],
        mDate(2021, 12, 28),
        mDate(2022, 2, 5),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=NwSriMki_UA"),
            new Link("原曲", "https://www.nicovideo.jp/watch/so39817429")
        ],
        Diff(9, 14, 19, 28, 31),
        "collab_SNOW MIKU2022"
    ),
    new Music("愛して愛して愛して",
        [
            Creator("きくお", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["miku", "mafuyu", "ena"])
        ],
        mDate(2015, 3, 6),
        mDate(2022, 2, 7),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=NTrm_idbhUk"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm25724827"),
            new MV(3, "https://www.youtube.com/watch?v=DsFlCC96EgU", mDate(2022, 2, 7), ["miku_night", "ena", "mafuyu"])
        ],
        Diff(5, 12, 16, 25, 28)
    ),
    new Music("Flyer!",
        [
            Creator("Chinozo", "ttt")
        ],
        [
            new Vocal("virtual", ["flower"]),
            new Vocal("sekai", ["kohane", "len", "an", "akito", "toya"]),
            new Vocal("another", ["miku"])
        ],
        mDate(2022, 2, 16),
        mDate(2022, 2, 16),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=nfpYhYtHuKo"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm40047025"),
            new MV(3, "https://www.youtube.com/watch?v=5fQRNjyRuSY", mDate(2022, 2, 16), ["kohane", "toya", "an", "akito", "len"])
        ],
        Diff(9, 12, 18, 24, 29),
        "newlyWritten_vivid"
    ),
    new Music("Peaky Peaky",
        [
            Creator("みきとP", "ttt")
        ],
        [
            new Vocal("virtual", ["miku", "rin"]),
            new Vocal("sekai", ["shiho", "ichika", "kaito", "saki", "honami"])
        ],
        mDate(2022, 2, 26),
        mDate(2022, 2, 18),
        [
            new Link("バーチャル・シンガーver", "https://www.youtube.com/watch?v=GWuI8LXceYc"),
            new MV(2, "https://www.youtube.com/watch?v=IPIwkhKdQxM", mDate(2022, 2, 26), ["shiho", "ichika", "kaito", "saki", "honami"])
        ],
        Diff(6, 12, 18, 25, 28),
        "newlyWritten_leo"
    ),
    new Music("ジウダス",
        [
            Creator("すこやか大聖堂", "ttt")
        ],
        [
            new Vocal("virtual", ["kaito"])
        ],
        mDate(2021, 11, 27),
        mDate(2022, 2, 21),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=3pl9alka_-A"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm39675720")
        ],
        Diff(7, 12, 18, 25, 28),
        "next_7"
    ),
    new Music("ナンセンス文学",
        [
            Creator("Eve", "ttf"),
            Creator("Numa", "fft")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["len", "tsukasa", "rui"]),
            new Vocal("another", ["tsukasa"]),
            new Vocal("another", ["rui"])
        ],
        mDate(2017, 5, 19),
        mDate(2022, 2, 24),
        [
            new Link("原曲", "https://www.nicovideo.jp/watch/sm31241401"),
            new Link("Eve ver.", "https://www.youtube.com/watch?v=OskXF3s0UT8"),
            new MV(2, "https://www.youtube.com/watch?v=aFx6y9HxDt0", mDate(2022, 2, 24), ["len", "tsukasa", "rui"])
        ],
        Diff(7, 11, 18, 25, 29),
        "tieup_Eve"
    ),
    new Music("心予報",
        [
            Creator("Eve", "ttf"),
            Creator("TAKU INOUE", "fft"),
            Creator("Numa", "fft")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["miku", "minori", "haruka", "airi", "shizuku"]),
            new Vocal("another", ["minori", "haruka"]),
            new Vocal("another", ["airi", "shizuku"])
        ],
        mDate(2020, 1, 30),
        mDate(2022, 3, 2),
        [
            new Link("Eve ver.", "https://www.youtube.com/watch?v=dJf4wCdLU18"),
            new MV(2, "https://www.youtube.com/watch?v=t5c8D1xbXtw", mDate(2022, 4, 7), ["miku_more", "minori", "haruka", "airi", "shizuku"])
        ],
        Diff(6, 12, 18, 24, 28),
        "tieup_Eve"
    ),
    new Music("僕らまだアンダーグラウンド",
        [
            Creator("Eve", "ttf"),
            Creator("Numa", "fft")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["miku", "ichika", "shiho"]),
            new Vocal("another", ["shiho"])
        ],
        mDate(2019, 1, 24),
        mDate(2022, 3, 4),
        [
            new Link("Eve ver.", "https://www.youtube.com/watch?v=nBteO-bU78Y"),
            new MV(2, "https://www.youtube.com/watch?v=eb46opRRyLc", mDate(2022, 3, 4), ["miku_leo", "ichika", "shiho"])
        ],
        Diff(7, 12, 18, 25, 28),
        "tieup_Eve"
    ),
    new Music("Miku",
        [
            Creator("Peter B", "tff"),
            Creator("Ary W", "tff"),
            Creator("Josh K", "tff"),
            Creator("David M", "tff"),
            Creator("Stella M", "tff"),
            Creator("Anamanaguchi", "ftt")
        ],
        [
            new Vocal("virtual", ["miku"])
        ],
        mDate(2016, 5, 28),
        mDate(2022, 3, 9),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=NocXEwsJGOQ"),
            new MV(3, "https://www.youtube.com/watch?v=Z21UcyNdXSQ", mDate(2022, 3, 9), ["minori", "kanade", "tsukasa", "kohane", "ichika", "miku"])
        ],
        Diff(6, 12, 17, 24, 28)
    ),
    new Music("メタモリボン",
        [
            Creator("emon(Tes.)", "ttt"),
            Creator("Tudiken", "tff")
        ],
        [
            new Vocal("virtual", ["rin"]),
            new Vocal("sekai", ["shizuku", "rin", "minori", "haruka", "airi"]),
            new Vocal("another", ["shizuku"])
        ],
        mDate(2022, 3, 18),
        mDate(2022, 3, 11),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=PulLO9CgBE0"),
            new MV(2, "https://www.youtube.com/watch?v=0BHY0Gs0ZZM", mDate(2022, 3, 18), ["shizuku", "rin", "minori", "haruka", "airi"])
        ],
        Diff(5, 11, 16, 23, 26),
        "newlyWritten_more"
    ),
    new Music("いーあるふぁんくらぶ",
        [
            Creator("みきとP", "ttt")
        ],
        [
            new Vocal("virtual", ["gumi", "rin"]),
            new Vocal("sekai", ["rin", "tsukasa", "emu", "nene", "rui"]),
        ],
        mDate(2012, 8, 15),
        mDate(2022, 3, 14),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=oBgADhsOoog"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm18623327"),
            new MV(3, "https://www.youtube.com/watch?v=v_VDb-gxF5Y", mDate(2022, 3, 14), ["rin", "tsukasa", "nene", "emu", "rui"])
        ],
        Diff(6, 12, 17, 24, 28)
    ),
    new Music("雨とペトラ",
        [
            Creator("バルーン", "ttt")
        ],
        [
            new Vocal("virtual", ["flower"]),
            new Vocal("sekai", ["len", "akito", "toya"])
        ],
        mDate(2017, 3, 9),
        mDate(2022, 3, 22),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=PdfdOhYVU40"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm30789907")
        ],
        Diff(9, 12, 18, 25, 29)
    ),
    new Music("ノマド",
        [
            Creator("バルーン", "ttt")
        ],
        [
            new Vocal("virtual", ["flower"]),
            new Vocal("sekai", ["ena", "rin", "kanade", "mafuyu", "mizuki"]),
            new Vocal("another", ["miku"])
        ],
        mDate(2022, 3, 28),
        mDate(2022, 3, 28),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=mKfwzOgorXs"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm40227712"),
            new MV(3, "https://www.youtube.com/watch?v=GcuRzFt7juI", mDate(2022, 3, 29), ["ena", "rin", "mizuki", "mafuyu", "kanade"])
        ],
        Diff(5, 11, 16, 23, 26),
        "newlyWritten_night"
    ),

    new Music("マトリョシカ",
        [
            Creator("ハチ", "ttt")
        ],
        [
            new Vocal("virtual", ["miku", "gumi"])
        ],
        mDate(2010, 8, 19),
        mDate(2022, 3, 30),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=HOz-9FzIDf0"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm11809611")
        ],
        Diff(9, 13, 18, 25, 30)
    ),
    new Music("ドーナツホール",
        [
            Creator("ハチ", "ttt")
        ],
        [
            new Vocal("virtual", ["gumi"])
        ],
        mDate(2013, 10, 28),
        mDate(2022, 3, 31),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=qnX2CdOBcDI"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm22138447")
        ],
        Diff(9, 14, 18, 25, 29)
    ),

    new Music("砂の惑星",
        [
            Creator("ハチ", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"])
        ],
        mDate(2017, 7, 21),
        mDate(2022, 4, 1),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=AS4q9yaWJkI"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm31606995")
        ],
        Diff(5, 11, 16, 23, 27)
    ),
    new Music("ルカルカ★ナイトフィーバー",
        [
            Creator("SAM(samfree)", "ttt")
        ],
        [
            new Vocal("virtual", ["luka"])
        ],
        mDate(2009, 2, 12),
        mDate(2022, 4, 2),
        [
            new Link("原曲", "https://www.nicovideo.jp/watch/sm6119955")
        ],
        Diff(7, 13, 18, 25, 29)
    ),
    new Music("ピアノ×フォルテ×スキャンダル",
        [
            Creator("OSTER project", "ttt")
        ],
        [
            new Vocal("virtual", ["meiko"])
        ],
        mDate(2008, 12, 20),
        mDate(2022, 4, 3),
        [
            new Link("原曲", "https://www.nicovideo.jp/watch/sm5597663"),
            new Link("原曲", "https://www.youtube.com/watch?v=JQTl7IvOX0E")
        ],
        Diff(6, 11, 18, 26, 30)
    ),
    new Music("千年の独奏歌",
        [
            Creator("yanagi", "ttt")
        ],
        [
            new Vocal("virtual", ["kaito"])
        ],
        mDate(2008, 4, 27),
        mDate(2022, 4, 4),
        [
            new Link("原曲", "https://www.nicovideo.jp/watch/sm3122624")
        ],
        Diff(5, 11, 16, 23, 27)
    ),
    new Music("88☆彡",
        [
            Creator("まらしぃ", "ttf"),
            Creator("堀江昌太(kemu)", "ftt")
        ],
        [
            new Vocal("sekai", ["tsukasa", "kaito", "emu", "nene", "rui"])
        ],
        mDate(2022, 4, 20),
        mDate(2022, 4, 11),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=505rBX9MNcQ"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm40350149"),
            new MV(2, "https://www.youtube.com/watch?v=giOsLry_orw", mDate(2022, 4, 19), ["tsukasa", "kaito", "emu", "nene", "rui"])
        ],
        Diff(9, 13, 18, 26, 29),
        "newlyWritten_wonder"
    ),
    new Music("ONESELF",
        [
            Creator("Twinfield", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"])
        ],
        mDate(2022, 1, 31),
        mDate(2022, 4, 15),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=0ahJ3_4hcL0"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm39972552")
        ],
        Diff(7, 14, 18, 27, 30),
        "next_8"
    ),
    new Music("PaⅢ.SENSATION",
        [
            Creator("牛肉", "tff"),
            Creator("雄之助", "ftt")
        ],
        [
            new Vocal("virtual", ["miku", "gumi", "rin"]),
            new Vocal("sekai", ["miku", "rin", "kohane", "an"])
        ],
        mDate(2016, 9, 15),
        mDate(2022, 4, 18),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=OMQNhcGZbX4"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm29648328"),
            new MV(3, "https://www.youtube.com/watch?v=VgRSxoqClkw", mDate(2022, 4, 18), ["miku_vivid", "an", "rin", "kohane"])
        ],
        Diff(8, 12, 17, 24, 29)
    ),
    new Music("ダーリンダンス",
        [
            Creator("かいりきベア", "ttf")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["miku", "minori", "haruka"])
        ],
        mDate(2020, 8, 30),
        mDate(2022, 4, 25),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=Rkrm5foi188"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm37441963")
        ],
        Diff(7, 12, 17, 25, 30)
    ),
    new Music("オーダーメイド",
        [
            Creator("傘村トータ(LIVE LAB.)", "ttf"),
            Creator("村田祐一(LIVE LAB.)", "fft")
        ],
        [
            new Vocal("sekai", ["ichika", "luka", "saki", "honami", "shiho"])
        ],
        mDate(2022, 4, 29),
        mDate(2022, 4, 29),
        [
            new Link("傘村家のボカロたちver.", "https://www.youtube.com/watch?v=sHXrqptOU2s"),
            new MV(3, "https://www.youtube.com/watch?v=eEs1PD_33EM", mDate(2022, 4, 29), ["ichika", "saki", "honami", "shiho", "luka"])
        ],
        Diff(5, 11, 16, 21, 26),
        "newlyWritten_leo"
    ),
    new Music("アイデンティティ",
        [
            Creator("Kanaria", "ttf")
        ],
        [
            new Vocal("virtual", ["miku", "gumi"]),
            new Vocal("sekai", ["miku", "kanade"], false)
        ],
        mDate(2022, 1, 9),
        mDate(2022, 5, 1),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=M9moY0hEJRE"),
            new MV(2, "https://www.youtube.com/watch?v=YsSShYaKOvk", mDate(2022, 1, 10), ["miku_night", "kanade"])
        ],
        Diff(9, 13, 18, 26, 31),
        "cupnoodle"
    ),
    new Music("青色絵具",
        [
            Creator("くじら", "ttt")
        ],
        [
            new Vocal("virtual", ["miku", "luka", "meiko"]),
            new Vocal("sekai", ["miku", "shiho", "shizuku"], false)
        ],
        mDate(2022, 1, 20),
        mDate(2022, 5, 2),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=_j5rd9kZIZw"),
            new MV(2, "https://www.youtube.com/watch?v=a-Xnb5Iw6Is", mDate(2022, 1, 21), ["miku", "shiho", "shizuku"])
        ],
        Diff(6, 12, 16, 24, 27),
        "cupnoodle"
    ),
    new Music("コスモスパイス",
        [
            Creator("ピノキオピー", "ttt")
        ],
        [
            new Vocal("virtual", ["miku", "rin", "len"]),
            new Vocal("sekai", ["miku", "saki", "tsukasa"], false)
        ],
        mDate(2022, 1, 26),
        mDate(2022, 5, 3),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=pu1gbwsB9Os"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm39948783"),
            new MV(2, "https://www.youtube.com/watch?v=0qb27SBWZ38", mDate(2022, 2, 1), ["miku", "saki", "tsukasa"])
        ],
        Diff(7, 12, 17, 25, 30),
        "cupnoodle"
    ),
    new Music("徳川カップヌードル禁止令",
        [
            Creator("Mitchie M", "ttt")
        ],
        [
            new Vocal("sekai", ["len", "kaito", "nene", "nenerobo", "mikudayo"], false)
        ],
        mDate(2022, 2, 16),
        mDate(2022, 5, 4),
        [
            new MV(2, "https://www.youtube.com/watch?v=jPXAgWkqbo4", mDate(2022, 2, 16), ["nene", "nenerobo", "mikudayo", "len", "kaito"])
        ],
        Diff(8, 13, 19, 27, 31),
        "cupnoodle"
    ),
    new Music("サラマンダー",
        [
            Creator("DECO*27", "ttf"),
            Creator("Rockwell", "fft")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["miku", "akito", "ena"], false)
        ],
        mDate(2022, 1, 7),
        mDate(2022, 5, 5),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=-H2PCK7DJsQ"),
            new MV(2, "https://www.youtube.com/watch?v=babaG-xuBQM", mDate(2022, 3, 12), ["miku", "akito", "ena"])
        ],
        Diff(8, 12, 18, 25, 30),
        "cupnoodle"
    ),
    new Music("イフ",
        [
            Creator("ユリイ・カノン", "ttf"),
            Creator("月詠み", "fft")
        ],
        [
            new Vocal("sekai", ["haruka", "miku", "minori", "airi", "shizuku"])
        ],
        mDate(2022, 5, 8),
        mDate(2022, 5, 8),
        [
            new Link("原曲", "https://www.nicovideo.jp/watch/sm40435671"),
            new Link("月詠みver.", "https://www.youtube.com/watch?v=Xt1x1s2eAno"),
            new MV(3, "https://www.youtube.com/watch?v=VsfcS_-b4j8", mDate(2022, 5, 8), ["haruka", "airi", "shizuku", "minori", "miku_more"])
        ],
        Diff(6, 12, 18, 23, 27),
        "newlyWritten_more"
    ),
    new Music("ブラック★ロックシューター",
        [
            Creator("ryo", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"])
        ],
        mDate(2008, 6, 13),
        mDate(2022, 5, 10),
        [
            new Link("原曲", "https://www.nicovideo.jp/watch/sm3645817")
        ],
        Diff(7, 12, 16, 24, 27),
        "brsDF"
    ),
    new Music("妄想感傷代償連盟",
        [
            Creator("DECO*27", "ttf"),
            Creator("emon(Tes.)", "fft")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["miku", "kanade", "ena"])
        ],
        mDate(2016, 11, 18),
        mDate(2022, 5, 13),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=8pGRdRhjX3o"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm30067009")
        ],
        Diff(7, 12, 16, 23, 27)
    ),
    new Music("リモコン",
        [
            Creator("じーざす", "ttf"),
            Creator("ワンダフル☆オポチュニティ！", "fft")
        ],
        [
            new Vocal("virtual", ["rin", "len"]),
            new Vocal("sekai", ["rin", "len", "emu", "nene"])
        ],
        mDate(2011, 2, 16),
        mDate(2022, 5, 16),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=1st0XSY0VKQ"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm13612500")
        ],
        Diff(7, 12, 17, 24, 29)
    ),
    new Music("月光",
        [
            Creator("キタニタツヤ", "ttt"),
            Creator("はるまきごはん", "ttt")
        ],
        [
            new Vocal("sekai", ["akito", "meiko", "kohane", "an", "toya"])
        ],
        mDate(2022, 5, 30),
        mDate(2022, 5, 20),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=SaX0By61S3U"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm40545552"),
            new MV(2, "https://www.youtube.com/watch?v=E5Wu8Ir6kdQ", mDate(2022, 5, 29), ["akito", "meiko", "kohane", "an", "toya"])
        ],
        Diff(5, 12, 18, 25, 29),
        "newlyWritten_vivid"
    ),
    new Music("アサガオの散る頃に",
        [
            Creator("ぷす(fromツユ)", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["miku", "ichika", "honami"])
        ],
        mDate(2015, 3, 15),
        mDate(2022, 5, 23),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=ugs4oVUNZ-o"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm25793676")
        ],
        Diff(6, 12, 16, 21, 26)
    ),
    new Music("神のまにまに",
        [
            Creator("れるりり", "ttf")
        ],
        [
            new Vocal("virtual", ["miku", "rin", "gumi"]),
            new Vocal("sekai", ["miku", "tsukasa", "emu", "nene", "rui"])
        ],
        mDate(2012, 4, 17),
        mDate(2022, 5, 30),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=b2GJcYBoVyg"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm22831329"),
            new MV(3, "https://www.youtube.com/watch?v=cb1s5_U0wd0", mDate(2022, 5, 30), ["miku_wonder", "rui", "emu", "tsukasa", "nene"])
        ],
        Diff(6, 13, 18, 25, 29)
    )
];
const future_musics = [
    new Music("Awake Now",
        [
            Creator("雄之助", "fff")
        ],
        [
        ],
        null,
        null,
        [
            new MV(2, "https://www.youtube.com/watch?v=BUyrhLRzAwU", mDate(2022, 6, 1), ["an", "miku_vivid", "kohane", "akito", "toya"])
        ],
        Diff(),
        "newlyWritten_vivid"
    ),
    new Music("未完成讃歌",
        [
            Creator("しゃいと", "fff")
        ],
        [
            new Vocal("virtual", ["miku"])
        ],
        mDate(2022, 3, 29),
        null,
        [
            new Link("原曲", "https://www.youtube.com/watch?v=PmRtXlhzgAU"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm40244309")
        ],
        Diff(),
        "next_9"
    ),
    new Music("脳漿炸裂ガール",
        [
            Creator("れるりり", "ttt")
        ],
        [
        ],
        mDate(2012, 10, 19),
        null,
        [
            new Link("原曲", "https://www.youtube.com/watch?v=Ey_NHZNYTeE"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm19133907")
        ],
        Diff()
    ),
    new Music("阿吽のビーツ",
        [
            Creator("羽生まゐご", "ttt")
        ],
        [
            new Vocal("virtual", ["flower"]),
            new Vocal("sekai", ["akito", "toya"])
        ],
        mDate(2017, 8, 20),
        null,
        [
            new Link("原曲", "https://www.youtube.com/watch?v=SiqjnFhLq2U"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm31775813")
        ],
        Diff()
    ),
    new Music("グッバイ宣言",
        [
            Creator("Chinozo", "ttt")
        ],
        [
            new Vocal("virtual", ["flower"]),
            new Vocal("sekai", ["tsukasa", "emu", "nene", "rui"])
        ],
        mDate(2020, 4, 13),
        null,
        [
            new Link("原曲", "https://www.youtube.com/watch?v=dHXC_ahjtEE"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm36668789")
        ],
        Diff()
    ),
    new Music("ヴァンパイア",
        [
            Creator("DECO*27", "ttf"),
            Creator("Rockwell", "fft")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["miku", "minori", "haruka", "airi", "shizuku"])
        ],
        mDate(2021, 3, 9),
        null,
        [
            new Link("原曲", "https://www.youtube.com/watch?v=e1xCOsgWG0M"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm38387707")
        ],
        Diff()
    ),
    new Music("書き下ろし楽曲(かいりきベア)",
        [
            Creator("かいりきベア", "fff")
        ],
        [
        ],
        null,
        null,
        [
        ],
        Diff(),
        "newlyWritten_night"
    ),
    new Music("書き下ろし楽曲(ぽりふぉ)",
        [
            Creator("ぽりふぉ", "fff")
        ],
        [
        ],
        null,
        null,
        [
        ],
        Diff(),
        "newlyWritten_wonder"
    )
];
/*
    new Music("",
        [
        ],
        [
        ],
        null,
        null,
        [
        ],
        Diff(),
        ""
    ),
    */
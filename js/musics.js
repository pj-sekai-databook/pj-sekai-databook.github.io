const musics = [
    new Music("Tell Your World", "テルユアワールド",
        [
            new Creator("kz", "ttt")
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
        new Diff(5, 10, 16, 22, 26)
    ),
    new Music("ネクストネスト", "ネクストネスト",
        [
            new Creator("さつき が てんこもり", "ttf")
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
        new Diff(6, 13, 18, 27, 29)
    ),
    new Music("メルト", "メルト",
        [
            new Creator("ryo", "ttt")
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
        new Diff(7, 12, 17, 25, 28)
    ),
    new Music("初音ミクの消失", "ハツネミクノショウシツ",
        [
            new Creator("cosMo@暴走P", "ttf")
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
        new Diff(9, 15, 22, 30, 35)
    ),
    new Music("Blessing", "ブレッシング",
        [
            new Creator("halyosy", "ttf")
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
        new Diff(5, 11, 16, 23, 27)
    ),
    new Music("alive", "アライブ",
        [
            new Creator("市瀬るぽ", "ttf")
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
        new Diff(6, 11, 16, 23, 26),
        "contest"
    ),
    new Music("ロキ", "ロキ",
        [
            new Creator("みきとP", "ttt")
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
        new Diff(7, 11, 17, 24, 28)
    ),
    new Music("テオ", "テオ",
        [
            new Creator("Sakurai", "tff"),
            new Creator("Omoi", "ftt")
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
        new Diff(9, 14, 19, 27, 32)
    ),
    new Music("ヒバナ -Reloaded-", "ヒバナリローデッド",
        [
            new Creator("DECO*27", "ttf"),
            new Creator("Rockwell", "fft")
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
        new Diff(9, 14, 19, 28, 32)
    ),
    new Music("ハッピーシンセサイザ", "ハッピーシンセサイザ",
        [
            new Creator("EasyPop", "ttf")
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
        new Diff(6, 11, 18, 24, 28)
    ),
    new Music("Nostalogic", "ノスタロジック",
        [
            new Creator("yuukiss", "ttf")
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
        new Diff(6, 12, 17, 23, 28)
    ),
    new Music("ツギハギスタッカート", "ツギハギスタッカート",
        [
            new Creator("とあ", "ttt")
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
        new Diff(6, 11, 16, 24, 27)
    ),
    new Music("劣等上等", "レットウジョウトウ",
        [
            new Creator("Reol", "tff"),
            new Creator("Giga", "ftt")
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
        new Diff(7, 12, 18, 25, 30)
    ),
    new Music("ドクター＝ファンクビート", "ドクターファンクビート",
        [
            new Creator("nyanyannya(大天才P)", "ttf")
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
            new Link("原曲", "https://www.nicovideo.jp/watch/sm26470008"),
            new MV(2, "https://www.youtube.com/watch?v=t1XM0ECUqTE", mDate(2022, 7, 6), ["kaito", "akito", "toya"])
        ],
        new Diff(8, 13, 19, 27, 32)
    ),
    new Music("フラジール", "フラジール",
        [
            new Creator("ぬゆり", "ttt")
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
        new Diff(6, 11, 17, 24, 27)
    ),
    new Music("ブリキノダンス", "ブリキノダンス",
        [
            new Creator("日向電工", "ttt")
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
        new Diff(8, 13, 18, 25, 29)
    ),
    new Music("スイートマジック", "スイートマジック",
        [
            new Creator("Junky", "ttf")
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
        new Diff(5, 12, 18, 24, 27)
    ),
    new Music("ぼうけんのしょがきえました！", "ボウケンノショガキエマシタ",
        [
            new Creator("じーざす", "ttf")
        ],
        [
            new Vocal("virtual", ["rin", "len"]),
            new Vocal("sekai", ["tsukasa", "emu", "rin", "len"])
        ],
        mDate(2014, 11, 14),
        mDate(2020, 9, 30),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=vqiULULdvMA"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm24909819"),
            new MV(2, "https://www.youtube.com/watch?v=_oe2F3tgKIk", mDate(2022, 6, 23), ["tsukasa", "emu", "rin", "len"])
        ],
        new Diff(8, 13, 19, 26, 31)
    ),
    new Music("シャルル", "シャルル",
        [
            new Creator("バルーン", "ttt")
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
        new Diff(6, 11, 17, 23, 27)
    ),
    new Music("ハロ／ハワユ", "ハロハワユ",
        [
            new Creator("ナノウ", "ttf")
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
        new Diff(5, 10, 15, 22, 26)
    ),
    new Music("自傷無色", "ジショウムショク",
        [
            new Creator("ササノマリイ", "ttf")
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
        new Diff(5, 10, 17, 22, 26)
    ),
    new Music("needLe", "ニードル",
        [
            new Creator("DECO*27", "ttf"),
            new Creator("Rockwell", "fft")
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
        new Diff(7, 12, 17, 25, 29),
        "newlyWritten"
    ),
    new Music("アイドル新鋭隊", "アイドルシンエイタイ",
        [
            new Creator("Mitchie M", "ttt")
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
        new Diff(8, 12, 17, 24, 28),
        "newlyWritten"
    ),
    new Music("Ready Steady", "レディーステディ",
        [
            new Creator("q*Left", "tff"),
            new Creator("Giga", "ftt")
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
        new Diff(5, 10, 16, 25, 29),
        "newlyWritten"
    ),
    new Music("セカイはまだ始まってすらいない", "セカイハマダハジマッテスライナイ",
        [
            new Creator("ピノキオピー", "ttt")
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
        new Diff(6, 13, 16, 24, 29),
        "newlyWritten"
    ),
    new Music("悔やむと書いてミライ", "クヤムトカイテミライ",
        [
            new Creator("まふまふ", "ttt")
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
        new Diff(8, 13, 17, 26, 30),
        "newlyWritten"
    ),
    new Music("セカイ", "セカイ",
        [
            new Creator("DECO*27", "tff"),
            new Creator("堀江昌太(kemu)", "ftf"),
            new Creator("Rockwell", "fft")
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
        new Diff(6, 12, 18, 23, 27),
        "newlyWritten,theme"
    ),
    new Music("ワーワーワールド", "ワーワーワールド",
        [
            new Creator("Mitchie M", "ttf"),
            new Creator("Giga", "ftt")
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
        new Diff(7, 12, 17, 24, 28),
        "newlyWritten,theme"
    ),
    new Music("アスノヨゾラ哨戒班", "アスノヨゾラショウカイハン",
        [
            new Creator("Orangestar", "ttf"),
            new Creator("Rockwell", "fft")
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
        new Diff(8, 12, 17, 25, 28)
    ),
    new Music("ニア", "ニア",
        [
            new Creator("夏代孝明", "ttf"),
            new Creator("渡辺拓也", "fft")
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
        new Diff(6, 11, 16, 22, 26)
    ),
    new Music("Just Be Friends", "ジャストビーフレンズ",
        [
            new Creator("Dixie Flatline", "ttf")
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
        new Diff(6, 11, 17, 23, 27)
    ),
    new Music("脱法ロック", "ダッポウロック",
        [
            new Creator("Neru", "ttf")
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
        new Diff(7, 13, 18, 26, 31)
    ),
    new Music("命に嫌われている", "イノチニキラワレテイル",
        [
            new Creator("カンザキイオリ", "ttt")
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
        new Diff(9, 14, 18, 26, 29)
    ),
    new Music("ワールドイズマイン", "ワールドイズマイン",
        [
            new Creator("ryo", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"])
        ],
        mDate(2008, 5, 31),
        mDate(2020, 10, 6),
        [
            new Link("原曲", "https://www.nicovideo.jp/watch/sm3504435")
        ],
        new Diff(7, 13, 17, 24, 28)
    ),
    new Music("ダンスロボットダンス", "ダンスロボットダンス",
        [
            new Creator("ナユタン星人", "ttt")
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
        new Diff(8, 13, 18, 26, 29)
    ),
    new Music("Hand in Hand", "ハンドインハンド",
        [
            new Creator("kz", "ttt")
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
        new Diff(6, 13, 16, 23, 27)
    ),
    new Music("夜咄ディセイブ", "ヨバナシディセイブ",
        [
            new Creator("じん", "ttt")
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
        new Diff(8, 14, 19, 26, 30)
    ),
    new Music("Gimme×Gimme", "ギミギミ",
        [
            new Creator("q*Left", "tff"),
            new Creator("八王子P", "ftt"),
            new Creator("Giga", "ftt")
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
        new Diff(6, 11, 18, 26, 29)
    ),
    new Music("ビバハピ", "ビバハピ",
        [
            new Creator("Mitchie M", "ttt")
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
        new Diff(6, 12, 17, 24, 28)
    ),
    new Music("ジャンキーナイトタウンオーケストラ", "ジャンキーナイトタウンオーケストラ",
        [
            new Creator("すりぃ", "ttf")
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
        new Diff(6, 13, 18, 26, 31)
    ),
    new Music("ミラクルペイント", "ミラクルペイント",
        [
            new Creator("OSTER project", "ttt")
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
        new Diff(9, 12, 18, 25, 29)
    ),
    new Music("on the rocks", "オンザロックス",
        [
            new Creator("OSTER project", "ttt")
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
        new Diff(7, 11, 16, 23, 27)
    ),
    new Music("携帯恋話", "ケイタイレンワ",
        [
            new Creator("まふまふ", "ttt")
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
        new Diff(8, 12, 18, 25, 29),
        "newlyWritten"
    ),
    new Music("39みゅーじっく！", "サンキューミュージック",
        [
            new Creator("みきとP", "ttf")
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
        new Diff(6, 11, 16, 23, 28)
    ),
    new Music("青く駆けろ！", "アオクカケロ",
        [
            new Creator("まらしぃ", "ttf")
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
        new Diff(8, 13, 17, 24, 27)
    ),
    new Music("ステラ", "ステラ",
        [
            new Creator("じん", "ttf")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["saki", "miku", "honami", "ichika", "shiho"]),
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
        new Diff(8, 13, 17, 26, 30),
        "newlyWritten"
    ),
    new Music("Leia - Remind", "レイアリマインド",
        [
            new Creator("ゆよゆっぺ", "ttt")
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
        new Diff(9, 13, 18, 25, 28)
    ),
    new Music("ジャックポットサッドガール", "ジャックポットサッドガール",
        [
            new Creator("syudou", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["mafuyu", "miku", "kanade", "ena", "mizuki"]),
            new Vocal("another", ["mafuyu"])
        ],
        mDate(2020, 10, 24),
        mDate(2020, 10, 20),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=B2llCEKbxwA"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm37716686"),
            new MV(2, "https://www.youtube.com/watch?v=J9kD9rYR088", mDate(2021, 8, 2), ["mafuyu", "miku_night", "kanade", "ena", "mizuki"])
        ],
        new Diff(9, 13, 18, 26, 29),
        "newlyWritten"
    ),
    new Music("メルティランドナイトメア", "メルティランドナイトメア",
        [
            new Creator("はるまきごはん", "ttt")
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
        new Diff(6, 12, 17, 24, 26)
    ),
    new Music("乙女解剖", "オトメカイボウ",
        [
            new Creator("DECO*27", "ttf"),
            new Creator("emon(Tes.)", "fft"),
            new Creator("Rockwell", "fft")
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
        new Diff(5, 12, 16, 24, 27)
    ),
    new Music("potatoになっていく", "ポテトニナッテイク",
        [
            new Creator("Neru", "ttt")
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
        new Diff(5, 11, 17, 24, 28),
        "newlyWritten"
    ),
    new Music("ローリンガール", "ローリンガール",
        [
            new Creator("wowaka", "ttt")
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
        new Diff(8, 12, 18, 26, 31)
    ),
    new Music("モア！ジャンプ！モア！", "モアジャンプモア",
        [
            new Creator("ナユタン星人", "ttt")
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
        new Diff(9, 13, 18, 26, 31),
        "newlyWritten"
    ),
    new Music("裏表ラバーズ", "ウラオモテラバーズ",
        [
            new Creator("wowaka", "ttt")
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
        new Diff(8, 12, 18, 26, 30)
    ),
    new Music("アンノウン・マザーグース", "アンノウンマザーグース",
        [
            new Creator("wowaka", "ttt")
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
        new Diff(8, 12, 17, 26, 29)
    ),
    new Music("愛されなくても君がいる", "アイサレナクテモキミガイル",
        [
            new Creator("ピノキオピー", "ttt")
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
        new Diff(7, 12, 16, 23, 27)
    ),
    new Music("ウミユリ海底譚", "ウミユリカイテイタン",
        [
            new Creator("n-buna", "ttt")
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
        new Diff(6, 13, 17, 23, 27)
    ),
    new Music("Forward", "フォワード",
        [
            new Creator("R Sound Design", "ttt")
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
        new Diff(6, 11, 16, 24, 28),
        "newlyWritten"
    ),
    new Music("独りんぼエンヴィー", "ヒトリンボエンヴィー",
        [
            new Creator("koyori", "ttt")
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
        new Diff(6, 11, 16, 22, 26)
    ),
    new Music("ニジイロストーリーズ", "ニジイロストーリーズ",
        [
            new Creator("OSTER project", "ttt")
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
        new Diff(9, 13, 18, 25, 29),
        "newlyWritten"
    ),
    new Music("ODDS & ENDS", "オッズアンドエンズ",
        [
            new Creator("ryo", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"])
        ],
        null,
        mDate(2020, 12, 24),
        [
            new PlayingMovie(Diff.param.HARD, "https://www.youtube.com/watch?v=onaipOwQ_Ek"),
            new Link("マジカルミライ2013", "https://www.youtube.com/watch?v=5kEoYWYnIIw")
        ],
        new Diff(8, 12, 18, 24, 29)
    ),
    new Music("ドラマツルギー", "ドラマツルギー",
        [
            new Creator("Eve", "ttf"),
            new Creator("Numa", "fft")
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
        new Diff(7, 12, 17, 25, 28)
    ),
    new Music("グリーンライツ・セレナーデ", "グリーンライツセレナーデ",
        [
            new Creator("Sakurai", "tff"),
            new Creator("Omoi", "ftt")
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
        new Diff(9, 14, 19, 27, 31)
    ),
    new Music("恋愛裁判", "レンアイサイバン",
        [
            new Creator("40mP", "ttt")
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
        new Diff(6, 12, 17, 22, 27)
    ),
    new Music("＊ハロー、プラネット。", "ハロープラネット",
        [
            new Creator("sasakure.UK", "ttt")
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
        new Diff(6, 10, 17, 24, 28)
    ),
    new Music("千本桜", "センボンザクラ",
        [
            new Creator("黒うさ", "ttt")
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
        new Diff(7, 14, 20, 26, 32)
    ),
    new Music("ECHO", "エコー",
        [
            new Creator("Crusher P", "ttf")
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
        new Diff(6, 12, 16, 23, 26)
    ),
    new Music("チュルリラ・チュルリラ・ダッダッダ！", "チュルリラチュルリラダッダッダ",
        [
            new Creator("和田たけあき(くらげP)", "ttt")
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
            new Link("和田たけあきver.", "https://www.youtube.com/watch?v=t2iQNmVfhGY")
        ],
        new Diff(9, 13, 18, 26, 31)
    ),
    new Music("ブレス・ユア・ブレス", "ブレスユアブレス",
        [
            new Creator("和田たけあき", "ttt")
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
        new Diff(7, 13, 17, 24, 28)
    ),
    new Music("とても痛い痛がりたい", "トテモイタイイタガリタイ",
        [
            new Creator("EZFG", "ttt")
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
        new Diff(6, 13, 18, 23, 28)
    ),
    new Music("霽れを待つ", "ハレヲマツ",
        [
            new Creator("Orangestar", "ttt")
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
        new Diff(7, 12, 17, 26, 30),
        "newlyWritten"
    ),
    new Music("ワールズエンド・ダンスホール", "ワールズエンドダンスホール",
        [
            new Creator("wowaka", "ttt")
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
        new Diff(7, 12, 18, 26, 30)
    ),
    new Music("ヒビカセ", "ヒビカセ",
        [
            new Creator("れをる", "tff"),
            new Creator("ギガ", "ftt")
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
        new Diff(7, 12, 17, 25, 28)
    ),
    new Music("Color of Drops", "カラーオブドロップス",
        [
            new Creator("40mP", "ttt")
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
        new Diff(6, 12, 16, 23, 27),
        "newlyWritten"
    ),
    new Music("RAD DOGS", "ラッドドッグス",
        [
            new Creator("q*Left", "tff"),
            new Creator("八王子P", "ftt")
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
        new Diff(6, 12, 18, 26, 30),
        "newlyWritten"
    ),
    new Music("ミルククラウン・オン・ソーネチカ", "ミルククラウンオンソーネチカ",
        [
            new Creator("ユジー", "ttt")
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
        new Diff(7, 13, 18, 26, 30)
    ),
    new Music("タイムマシン", "タイムマシン",
        [
            new Creator("164", "tff"),
            new Creator("40mP", "ftf"),
            new Creator("1640mP", "fft")
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
        new Diff(6, 11, 16, 23, 26)
    ),
    new Music("drop pop candy", "ドロップポップキャンディー",
        [
            new Creator("れをる", "tff"),
            new Creator("ギガ", "ftt")
        ],
        [
            new Vocal("virtual", ["rin", "luka"]),
            new Vocal("sekai", ["rin", "luka", "kohane", "an"]),
            new Vocal("another", ["kohane"]),
            new Vocal("another", ["an"])
        ],
        mDate(2014, 7, 18),
        mDate(2021, 2, 15),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=4sq2lPNxi7M"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm24029703"),
            new MV(3, "https://www.youtube.com/watch?v=KxNII3csgw4", mDate(2021, 2, 15), ["kohane", "an", "rin", "luka"])
        ],
        new Diff(6, 12, 17, 25, 28)
    ),
    new Music("ポジティブ☆ダンスタイム", "ポジティブダンスタイム",
        [
            new Creator("キノシタ", "ttt")
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
        new Diff(9, 14, 18, 26, 31)
    ),
    new Music("Brand New Day", "ブランドニューデイ",
        [
            new Creator("いるかアイス", "ttt")
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
        new Diff(9, 14, 19, 28, 32),
        "next_1"
    ),
    new Music("限りなく灰色へ", "カギリナクハイイロヘ",
        [
            new Creator("すりぃ", "ttt")
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
        new Diff(6, 12, 18, 26, 30),
        "newlyWritten"
    ),
    new Music("ワンスアポンアドリーム", "ワンスアポンアドリーム",
        [
            new Creator("YASUHIRO(康寛)", "ttt"),
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
        new Diff(6, 11, 16, 22, 27),
        "newlyWritten"
    ),
    new Music("ボッカデラベリタ", "ボッカデラベリタ",
        [
            new Creator("柊キライ", "ttt"),
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
        new Diff(7, 13, 18, 25, 28)
    ),
    new Music("みくみくにしてあげる♪【してやんよ】", "ミクミクニシテアゲルシテヤンヨ",
        [
            new Creator("ika_mo", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"])
        ],
        mDate(2007, 9, 20),
        mDate(2021, 3, 9),
        [
            new Link("原曲", "https://www.nicovideo.jp/watch/sm1097445")
        ],
        new Diff(7, 12, 17, 24, 28)
    ),
    new Music("威風堂々", "イフウドウドウ",
        [
            new Creator("梅とら", "ttt")
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
        new Diff(6, 12, 17, 24, 28)
    ),
    new Music("from Y to Y", "フロムワイトゥーワイ",
        [
            new Creator("ジミーサムP", "ttf")
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
        new Diff(5, 11, 16, 24, 26)
    ),
    new Music("初音ミクの激唱", "ハツネミクノゲキショウ",
        [
            new Creator("GAiA", "tff"),
            new Creator("cosMo@暴走P", "ftt")
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
        new Diff(9, 14, 20, 30, 33)
    ),
    new Music("天使のクローバー", "テンシノクローバー",
        [
            new Creator("DIVELA", "ttt")
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
        new Diff(9, 13, 17, 27, 31),
        "newlyWritten"
    ),
    new Music("お気に召すまま", "オキニメスママ",
        [
            new Creator("Eve", "ttf"),
            new Creator("Numa", "fft")
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
        new Diff(6, 12, 18, 24, 28)
    ),
    new Music("どりーみんチュチュ", "ドリーミンチュチュ",
        [
            new Creator("emon(Tes.)", "ttt")
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
        new Diff(6, 13, 17, 23, 27)
    ),
    new Music("アイディスマイル", "アイディスマイル",
        [
            new Creator("とあ", "ttt")
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
        new Diff(7, 12, 17, 25, 28),
        "newlyWritten"
    ),
    new Music("「１」", "イチ",
        [
            new Creator("164", "ttt")
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
        new Diff(8, 13, 16, 23, 26),
        "newlyWritten"
    ),
    new Music("花を唄う", "ハナヲウタウ",
        [
            new Creator("シノ", "ttt")
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
        new Diff(6, 12, 19, 25, 30),
        "next_2"
    ),
    new Music("夜に駆ける", "ヨルニカケル",
        [
            new Creator("Ayase", "ttt")
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
        new Diff(6, 11, 18, 25, 29),
        "tieup_Ayase"
    ),
    new Music("幽霊東京", "ユウレイトウキョウ",
        [
            new Creator("Ayase", "ttt")
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
        new Diff(7, 13, 17, 24, 27),
        "tieup_Ayase"
    ),
    new Music("シネマ", "シネマ",
        [
            new Creator("Ayase", "ttt")
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
        new Diff(6, 12, 18, 24, 29),
        "newlyWritten"
    ),
    new Music("KING", "キング",
        [
            new Creator("Kanaria", "ttf")
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
        new Diff(7, 14, 19, 25, 29)
    ),
    new Music("アイノマテリアル", "アイノマテリアル",
        [
            new Creator("Junky", "ttt")
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
        new Diff(6, 11, 16, 22, 26),
        "newlyWritten"
    ),
    new Music("いかないで", "イカナイデ",
        [
            new Creator("想太", "ttf")
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
        new Diff(8, 13, 18, 25, 29)
    ),
    new Music("ロミオとシンデレラ", "ロミオトシンデレラ",
        [
            new Creator("doriko", "ttt")
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
        new Diff(7, 12, 17, 24, 27)
    ),
    new Music("泡沫未来", "ウタカタミライ",
        [
            new Creator("加賀(ネギシャワーP)", "ttt")
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
        new Diff(8, 12, 17, 25, 29),
        "next_3"
    ),
    new Music("トンデモワンダーズ", "トンデモワンダーズ",
        [
            new Creator("sasakure.UK", "ttt"),
            new Creator("岸田勇気(有形ランペイジ)", "fff", "Key")
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
        new Diff(9, 14, 19, 27, 32),
        "newlyWritten"
    ),
    new Music("カナデトモスソラ", "カナデトモスソラ",
        [
            new Creator("Sasanomaly", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
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
        new Diff(6, 11, 15, 22, 26),
        "newlyWritten"
    ),
    new Music("トラフィック・ジャム", "トラフィックジャム",
        [
            new Creator("煮ル果実", "ttt")
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
        new Diff(6, 13, 18, 24, 28)
    ),
    new Music("フロムトーキョー", "フロムトーキョー",
        [
            new Creator("夏代孝明", "ttf"),
            new Creator("渡辺拓也", "ftt")
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
        new Diff(6, 12, 18, 24, 28),
        "newlyWritten"
    ),
    new Music("Beat Eater", "ビートイーター",
        [
            new Creator("ポリスピカデリー", "ttt")
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
        new Diff(6, 11, 17, 25, 28),
        "newlyWritten"
    ),
    new Music("六兆年と一夜物語", "ロクチョウネントイチヤモノガタリ",
        [
            new Creator("kemu", "ttt")
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
        new Diff(9, 14, 20, 29, 34)
    ),
    new Music("地球最後の告白を", "チキュウサイゴノコクハクヲ",
        [
            new Creator("kemu", "ttt")
        ],
        [
            new Vocal("virtual", ["gumi"]),
            new Vocal("sekai", ["luka", "haruka", "shizuku"]),
            new Vocal("another", ["haruka"]),
            new Vocal("another", ["luka"]),
            new Vocal("another", ["meiko"])
        ],
        mDate(2012, 6, 26),
        mDate(2021, 7, 19),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=s8KBk8ZRH54"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm18198019"),
            new MV(2, "https://www.youtube.com/watch?v=jSwRwYVjRg8", mDate(2021, 7, 19), ["luka", "haruka", "shizuku"])
        ],
        new Diff(8, 13, 18, 25, 31)
    ),
    new Music("ビターチョコデコレーション", "ビターチョコデコレーション",
        [
            new Creator("syudou", "ttt")
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
        new Diff(7, 12, 19, 25, 31)
    ),
    new Music("そうだった！", "ソウダッタ",
        [
            new Creator("タケノコ少年", "ttt")
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
        new Diff(8, 14, 19, 27, 31),
        "next_4"
    ),
    new Music("カゲロウデイズ", "カゲロウデイズ",
        [
            new Creator("じん", "ttt")
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
        new Diff(9, 14, 19, 27, 31)
    ),
    new Music("アイスドロップ", "アイスドロップ",
        [
            new Creator("aqu3ra", "ttt")
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
        new Diff(7, 12, 18, 24, 27),
        "newlyWritten"
    ),
    new Music("Glory Steady Go!", "グローリーステディーゴー",
        [
            new Creator("キノシタ", "ttt")
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
        new Diff(7, 12, 18, 25, 30),
        "newlyWritten"
    ),
    new Music("チルドレンレコード", "チルドレンレコード",
        [
            new Creator("じん", "ttt")
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
        new Diff(9, 14, 19, 27, 32)
    ),
    new Music("magic number", "マジックナンバー",
        [
            new Creator("伊東健人", "ttf"),
            new Creator("OSTER project", "fft")
        ],
        [
            new Vocal("virtual", ["miku"])
        ],
        mDate(2021, 9, 1),
        mDate(2021, 9, 1),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=fzRWpcvPJYo")
        ],
        new Diff(6, 11, 18, 25, 29),
        "newlyWritten"
    ),

    new Music("流星のパルス", "リュウセイノパルス",
        [
            new Creator("*Luna", "ttt")
        ],
        [
            new Vocal("virtual", ["len", "miku", "rin", "luka", "meiko", "kaito"]),
            new Vocal("sekai", ["ichika", "meiko", "saki", "honami", "shiho"]),
            new Vocal("another", ["ichika"]),
            new Vocal("another", ["shiho"])
        ],
        mDate(2021, 9, 19),
        mDate(2021, 9, 10),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=8Zds1FvEtKw"),
            new MV(2, "https://www.youtube.com/watch?v=hZgbqUQI64E", mDate(2021, 9, 19), ["ichika", "meiko", "saki", "honami", "shiho"]),
        ],
        new Diff(8, 13, 17, 25, 30),
        "newlyWritten_leo"
    ),
    new Music("カトラリー", "カトラリー",
        [
            new Creator("有機酸", "ttt")
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
        new Diff(5, 12, 18, 25, 28)
    ),
    new Music("再生", "サイセイ",
        [
            new Creator("Picon", "ttt")
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
        new Diff(5, 11, 15, 22, 26),
        "newlyWritten_night"
    ),
    new Music("群青讃歌", "グンジョウサンカ",
        [
            new Creator("Eve", "ttf"),
            new Creator("Numa", "fft")
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
        new Diff(7, 13, 17, 24, 27),
        "newlyWritten,theme"
    ),
    new Music("炉心融解", "ロシンユウカイ",
        [
            new Creator("kuma(alfred)", "tff"),
            new Creator("iroha(sasaki)", "ftf")
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
        new Diff(7, 12, 17, 24, 27)
    ),
    new Music("ロストワンの号哭", "ロストワンノゴウコク",
        [
            new Creator("Neru", "ttf")
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
        new Diff(7, 14, 19, 26, 32)
    ),
    new Music("マシンガンポエムドール", "マシンガンポエムドール",
        [
            new Creator("cosMo@暴走P", "ttt")
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
        new Diff(9, 14, 23, 31, 34),
        "newlyWritten_virtual"
    ),
    new Music("ベノム", "ベノム",
        [
            new Creator("かいりきベア", "ttf")
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
        new Diff(7, 13, 18, 26, 29)
    ),
    new Music("拝啓ドッペルゲンガー", "ハイケイドッペルゲンガー",
        [
            new Creator("kemu", "ttt")
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
        new Diff(9, 13, 19, 28, 32)
    ),
    new Music("テレキャスタービーボーイ", "テレキャスタービーボーイ",
        [
            new Creator("すりぃ", "ttt")
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
        new Diff(8, 13, 18, 25, 29)
    ),
    new Music("トキヲ・ファンカ", "トキヲファンカ",
        [
            new Creator("takamatt", "ttt")
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
        new Diff(6, 11, 18, 25, 28)
    ),
    new Music("悪魔の踊り方", "アクマノオドリカタ",
        [
            new Creator("キタニタツヤ", "ttf")
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
        new Diff(5, 12, 19, 26, 30)
    ),
    new Music("だれかの心臓になれたなら", "ダレカノシンゾウニナレタナラ",
        [
            new Creator("ユリイ・カノン", "ttt")
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
        new Diff(7, 12, 18, 25, 29)
    ),
    new Music("マシュマリー", "マシュマリー",
        [
            new Creator("MIMI", "ttt")
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
        new Diff(8, 11, 18, 26, 29)
    ),
    new Music("右肩の蝶", "ミギカタノチョウ",
        [
            new Creator("水野悠良", "tff"),
            new Creator("のりぴー", "ftt")
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
        new Diff(6, 12, 18, 25, 31)
    ),
    new Music("ray", "レイ",
        [
            new Creator("藤原基央", "ttf")
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
        new Diff(6, 12, 16, 24, 26)
    ),
    new Music("Hello,world!", "ハローワールド",
        [
            new Creator("藤原基央", "ttf")
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
        new Diff(9, 13, 17, 25, 29)
    ),
    new Music("しっくおぶはうす！", "シックオブハウス",
        [
            new Creator("オゾン", "ttt")
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
        new Diff(7, 13, 17, 26, 30),
        "next_5"
    ),
    new Music("ショウタイム・ルーラー", "ショウタイムルーラー",
        [
            new Creator("烏屋茶房", "ttt")
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
        new Diff(9, 13, 19, 25, 31),
        "newlyWritten_wonder"
    ),
    new Music("Happy Halloween", "ハッピーハロウィン",
        [
            new Creator("Junky", "ttt")
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
        new Diff(5, 12, 16, 25, 30)
    ),
    new Music("ロウワー", "ロウワー",
        [
            new Creator("ぬゆり", "ttt")
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
        new Diff(6, 12, 17, 26, 31),
        "newlyWritten_night"
    ),
    new Music("初音天地開闢神話", "ハツネテンチカイビャクシンワ",
        [
            new Creator("cosMo@暴走P", "ttt")
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
        new Diff(9, 14, 20, 28, 32)
    ),
    new Music("オルターエゴ", "オルターエゴ",
        [
            new Creator("Misumi", "ttt")
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
        new Diff(8, 12, 17, 26, 31)
    ),
    new Music("STAGE OF SEKAI", "ステージオブセカイ",
        [
            new Creator("針原翼(はりーP)", "ttf"),
            new Creator("棚橋 EDDY テルアキ", "fft")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["honami", "ichika", "len", "saki", "shiho"])
        ],
        mDate(2021, 12, 22),
        mDate(2021, 11, 18),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=YVD1RLI7klc"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm39782705"),
            new MV(3, "https://www.youtube.com/watch?v=BNdJWYHa_xg", mDate(2021, 11, 18), ["ichika", "saki", "honami", "shiho", "len"])
        ],
        new Diff(8, 12, 17, 25, 30),
        "newlyWritten_leo"
    ),
    new Music("からくりピエロ", "カラクリピエロ",
        [
            new Creator("40mP", "ttt")
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
        new Diff(5, 11, 16, 23, 27)
    ),
    new Music("ワールドワイドワンダー", "ワールドワイドワンダー",
        [
            new Creator("TOKOTOKO", "ttt")
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
        new Diff(6, 13, 18, 24, 28),
        "newlyWritten_more"
    ),
    new Music("悪ノ娘", "アクノムスメ",
        [
            new Creator("mothy", "ttt")
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
        new Diff(6, 12, 17, 24, 27),
        "collab_悪ノ大罪"
    ),
    new Music("悪ノ召使", "アクノメシツカイ",
        [
            new Creator("mothy", "ttt")
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
        new Diff(6, 12, 17, 24, 27),
        "collab_悪ノ大罪"
    ),
    new Music("去り人達のワルツ", "サリヒトタチノワルツ",
        [
            new Creator("mothy", "ttt")
        ],
        [
            new Vocal("virtual", ["rin"])
        ],
        mDate(2022, 2, 28),
        mDate(2021, 12, 15),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=jNBRyo54Tks")
        ],
        new Diff(8, 13, 17, 23, 28),
        "collab_悪ノ大罪, newlyWritten"
    ),
    new Music("ラストスコア", "ラストスコア",
        [
            new Creator("せきこみごはん", "ttt")
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
        new Diff(7, 13, 18, 26, 30),
        "next_6"
    ),
    new Music("フィクサー", "フィクサー",
        [
            new Creator("ぬゆり", "ttt")
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
        new Diff(6, 12, 19, 26, 31)
    ),
    new Music("ミライ", "ミライ",
        [
            new Creator("有機酸", "ttt")
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
        new Diff(6, 12, 18, 24, 28),
        "newlyWritten_vivid"
    ),
    new Music("ゴーストルール", "ゴーストルール",
        [
            new Creator("DECO*27", "ttf"),
            new Creator("Naoki Itai(MUSIC FOR MUSIC)", "fft")
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
        new Diff(9, 14, 19, 27, 32)
    ),
    new Music("ヴィラン", "ヴィラン",
        [
            new Creator("てにをは", "ttt")
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
        new Diff(6, 13, 18, 25, 29)
    ),
    new Music("サンドリヨン 10th Anniversary", "サンドリヨンテンスアニバーサリー",
        [
            new Creator("orange", "tff"),
            new Creator("Dios/シグナルP", "ftt")
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
        new Diff(6, 12, 17, 25, 28)
    ),
    new Music("少女レイ", "ショウジョレイ",
        [
            new Creator("みきとP", "ttf")
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
            new MV(3, "https://www.youtube.com/watch?v=NpOR2QwvjPk", mDate(2022, 1, 2), ["miku_more", "haruka", "shizuku"]),
            new MV(2, "https://www.youtube.com/watch?v=3VT85q-E-UU", mDate(2022, 7, 18), ["miku_more", "haruka", "shizuku"])
        ],
        new Diff(7, 14, 17, 24, 27)
    ),
    new Music("ガランド", "ガランド",
        [
            new Creator("ピコン", "ttt")
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
        new Diff(7, 13, 18, 24, 28),
    ),

    new Music("エンドマークに希望と涙を添えて", "エンドマークニキボウトナミダヲソエテ",
        [
            new Creator("cosMo@暴走P", "ftt")
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
        new Diff(9, 15, 23, 31, 35),
        "performai"
    ),
    new Music("the EmpErroR", "ジエンペラー",
        [
            new Creator("sasakure.UK", "ftt")
        ],
        [
            new Vocal("inst")
        ],
        mDate(2020, 4, 28),
        mDate(2022, 1, 9),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=eImN9Ov-tJg"),
        ],
        new Diff(9, 15, 23, 31, 36),
        "performai"
    ),
    new Music("Don't Fight The Music", "ドントファイトザミュージック",
        [
            new Creator("黒魔", "ftt")
        ],
        [
            new Vocal("inst")
        ],
        null,
        mDate(2022, 1, 10),
        [
            new PlayingMovie(Diff.param.MASTER, "https://www.youtube.com/watch?v=yyBsUVFFSKA")
        ],
        new Diff(9, 15, 23, 30, 36),
        "performai"
    ),
    new Music("にっこり^^調査隊のテーマ", "ニッコリチョウサタイノテーマ",
        [
            new Creator("じーざす", "ttf"),
            new Creator("ワンダフル☆オポチュニティ！", "fft")
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
        new Diff(8, 12, 18, 27, 31),
        "newlyWritten_wonder"
    ),
    new Music("トリコロージュ", "トリコロージュ",
        [
            new Creator("煮ル果実", "ttt")
        ],
        [
            new Vocal("virtual", ["flower"]),
            new Vocal("sekai", ["kanade", "miku", "mafuyu", "ena", "mizuki"]),
            new Vocal("another", ["kanade"]),
            new Vocal("another", ["miku"])
        ],
        mDate(2022, 1, 29),
        mDate(2022, 1, 21),
        [
            new Link("バーチャル・シンガーver(flower)", "https://www.youtube.com/watch?v=BPh4m2VnfNo"),
            new Link("バーチャル・シンガーver(ミク)", "https://www.nicovideo.jp/watch/sm40094958"),
            new MV(2, "https://www.youtube.com/watch?v=M_ijFuoASt0", mDate(2022, 1, 29), ["kanade", "miku_night", "mafuyu", "ena", "mizuki"])
        ],
        new Diff(7, 13, 18, 24, 28),
        "newlyWritten_night"
    ),
    new Music("心拍数♯0822", "シンパクスウゼロハチニーニー",
        [
            new Creator("蝶々P", "ttt")
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
            new Link("原曲", "https://www.nicovideo.jp/watch/sm11834233"),
            new MV(2, "https://www.youtube.com/watch?v=g6hGN-WNig0", mDate(2022, 6, 9), ["miku_leo", "ichika", "honami"])
        ],
        new Diff(5, 11, 16, 23, 26)
    ),
    new Music("うっせぇわ", "ウッセェワ",
        [
            new Creator("syudou", "ttt")
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
        new Diff(8, 12, 17, 24, 28),
        "tieup_Ado"
    ),
    new Music("踊", "オド",
        [
            new Creator("Giga", "ftt"),
            new Creator("TeddyLoid", "ftt"),
            new Creator("DECO*27", "tff")
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
        new Diff(6, 13, 18, 26, 29),
        "tieup_Ado"
    ),
    new Music("君色マリンスノウ", "キミイロマリンスノウ",
        [
            new Creator("カルロス袴田(サイゼP)", "ttt")
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
        new Diff(9, 14, 19, 28, 31),
        "collab_SNOW MIKU2022"
    ),
    new Music("愛して愛して愛して", "アイシテアイシテアイシテ",
        [
            new Creator("きくお", "ttt")
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
        new Diff(5, 12, 16, 25, 28)
    ),
    new Music("Flyer!", "フライヤー",
        [
            new Creator("Chinozo", "ttt")
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
        new Diff(9, 12, 18, 24, 29),
        "newlyWritten_vivid"
    ),
    new Music("Peaky Peaky", "ピーキーピーキー",
        [
            new Creator("みきとP", "ttt")
        ],
        [
            new Vocal("virtual", ["miku", "rin"]),
            new Vocal("sekai", ["shiho", "ichika", "kaito", "saki", "honami"]),
            new Vocal("another", ["saki"]),
            new Vocal("another", ["honami"]),
            new Vocal("another", ["shiho"])
        ],
        mDate(2022, 2, 26),
        mDate(2022, 2, 18),
        [
            new Link("バーチャル・シンガーver", "https://www.youtube.com/watch?v=GWuI8LXceYc"),
            new MV(2, "https://www.youtube.com/watch?v=IPIwkhKdQxM", mDate(2022, 2, 26), ["shiho", "ichika", "kaito", "saki", "honami"])
        ],
        new Diff(6, 12, 18, 25, 28),
        "newlyWritten_leo"
    ),
    new Music("ジウダス", "ジウダス",
        [
            new Creator("すこやか大聖堂", "ttt")
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
        new Diff(7, 12, 18, 25, 28),
        "next_7"
    ),
    new Music("ナンセンス文学", "ナンセンスブンガク",
        [
            new Creator("Eve", "ttf"),
            new Creator("Numa", "fft")
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
        new Diff(7, 11, 18, 25, 29),
        "tieup_Eve"
    ),
    new Music("心予報", "ココロヨホウ",
        [
            new Creator("Eve", "ttf"),
            new Creator("TAKU INOUE", "fft"),
            new Creator("Numa", "fft")
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
        new Diff(6, 12, 18, 24, 28),
        "tieup_Eve"
    ),
    new Music("僕らまだアンダーグラウンド", "ボクラマダアンダーグラウンド",
        [
            new Creator("Eve", "ttf"),
            new Creator("Numa", "fft")
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
        new Diff(7, 12, 18, 25, 28),
        "tieup_Eve"
    ),
    new Music("Miku", "ミク",
        [
            new Creator("Peter B", "tff"),
            new Creator("Ary W", "tff"),
            new Creator("Josh K", "tff"),
            new Creator("David M", "tff"),
            new Creator("Stella M", "tff"),
            new Creator("Anamanaguchi", "ftt")
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
        new Diff(6, 12, 17, 24, 28)
    ),
    new Music("メタモリボン", "メタモリボン",
        [
            new Creator("emon(Tes.)", "ttt"),
            new Creator("Tudiken", "tff")
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
        new Diff(5, 11, 16, 23, 26),
        "newlyWritten_more"
    ),
    new Music("いーあるふぁんくらぶ", "イーアルファンクラブ",
        [
            new Creator("みきとP", "ttt")
        ],
        [
            new Vocal("virtual", ["gumi", "rin"]),
            new Vocal("sekai", ["rin", "tsukasa", "emu", "nene", "rui"]),
            new Vocal("another", ["tsukasa", "emu"])
        ],
        mDate(2012, 8, 15),
        mDate(2022, 3, 14),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=oBgADhsOoog"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm18623327"),
            new MV(3, "https://www.youtube.com/watch?v=v_VDb-gxF5Y", mDate(2022, 3, 14), ["rin", "tsukasa", "nene", "emu", "rui"])
        ],
        new Diff(6, 12, 17, 24, 28)
    ),
    new Music("雨とペトラ", "アメトペトラ",
        [
            new Creator("バルーン", "ttt")
        ],
        [
            new Vocal("virtual", ["flower"]),
            new Vocal("sekai", ["len", "akito", "toya"]),
            new Vocal("another", ["toya"]),
            new Vocal("another", ["luka"]),
            new Vocal("another", ["meiko"])
        ],
        mDate(2017, 3, 9),
        mDate(2022, 3, 22),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=PdfdOhYVU40"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm30789907")
        ],
        new Diff(9, 12, 18, 25, 29)
    ),
    new Music("ノマド", "ノマド",
        [
            new Creator("バルーン", "ttt")
        ],
        [
            new Vocal("virtual", ["flower"]),
            new Vocal("sekai", ["ena", "rin", "kanade", "mafuyu", "mizuki"]),
            new Vocal("another", ["ena"]),
            new Vocal("another", ["miku"])
        ],
        mDate(2022, 3, 28),
        mDate(2022, 3, 28),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=mKfwzOgorXs"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm40227712"),
            new MV(3, "https://www.youtube.com/watch?v=GcuRzFt7juI", mDate(2022, 3, 29), ["ena", "rin", "mizuki", "mafuyu", "kanade"])
        ],
        new Diff(5, 11, 16, 23, 26),
        "newlyWritten_night"
    ),

    new Music("マトリョシカ", "マトリョシカ",
        [
            new Creator("ハチ", "ttt")
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
        new Diff(9, 13, 18, 25, 30)
    ),
    new Music("ドーナツホール", "ドーナツホール",
        [
            new Creator("ハチ", "ttt")
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
        new Diff(9, 14, 18, 25, 29)
    ),

    new Music("砂の惑星", "スナノワクセイ",
        [
            new Creator("ハチ", "ttt")
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
        new Diff(5, 11, 16, 23, 27)
    ),
    new Music("ルカルカ★ナイトフィーバー", "ルカルカナイトフィーバー",
        [
            new Creator("SAM(samfree)", "ttt")
        ],
        [
            new Vocal("virtual", ["luka"])
        ],
        mDate(2009, 2, 12),
        mDate(2022, 4, 2),
        [
            new Link("原曲", "https://www.nicovideo.jp/watch/sm6119955")
        ],
        new Diff(7, 13, 18, 25, 29)
    ),
    new Music("ピアノ×フォルテ×スキャンダル", "ピアノフォルテスキャンダル",
        [
            new Creator("OSTER project", "ttt")
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
        new Diff(6, 11, 18, 26, 30)
    ),
    new Music("千年の独奏歌", "センネンノドクソウカ",
        [
            new Creator("yanagi", "ttt")
        ],
        [
            new Vocal("virtual", ["kaito"])
        ],
        mDate(2008, 4, 27),
        mDate(2022, 4, 4),
        [
            new Link("原曲", "https://www.nicovideo.jp/watch/sm3122624")
        ],
        new Diff(5, 11, 16, 23, 27)
    ),
    new Music("88☆彡", "ハチジュウハチ",
        [
            new Creator("まらしぃ", "ttf"),
            new Creator("堀江昌太(kemu)", "ftt")
        ],
        [
            new Vocal("virtual", ["miku", "kaito"]),
            new Vocal("sekai", ["tsukasa", "kaito", "emu", "nene", "rui"])
        ],
        mDate(2022, 4, 20),
        mDate(2022, 4, 11),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=505rBX9MNcQ"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm40350149"),
            new MV(2, "https://www.youtube.com/watch?v=giOsLry_orw", mDate(2022, 4, 19), ["tsukasa", "kaito", "emu", "nene", "rui"])
        ],
        new Diff(9, 13, 18, 26, 29),
        "newlyWritten_wonder"
    ),
    new Music("ONESELF", "ワンセルフ",
        [
            new Creator("Twinfield", "ttt")
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
        new Diff(7, 14, 18, 27, 30),
        "next_8"
    ),
    new Music("PaⅢ.SENSATION", "パッショネートスリードットセンセーション",
        [
            new Creator("牛肉", "tff"),
            new Creator("雄之助", "ftt")
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
        new Diff(8, 12, 17, 24, 29)
    ),
    new Music("ダーリンダンス", "ダーリンダンス",
        [
            new Creator("かいりきベア", "ttf")
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
        new Diff(7, 12, 17, 25, 30)
    ),
    new Music("オーダーメイド", "オーダーメイド",
        [
            new Creator("傘村トータ(LIVE LAB.)", "ttf"),
            new Creator("村田祐一(LIVE LAB.)", "fft")
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
        new Diff(5, 11, 16, 21, 26),
        "newlyWritten_leo"
    ),
    new Music("アイデンティティ", "アイデンティティ",
        [
            new Creator("Kanaria", "ttf")
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
        new Diff(9, 13, 18, 26, 31),
        "cupnoodle"
    ),
    new Music("青色絵具", "アオイロエノグ",
        [
            new Creator("くじら", "ttt")
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
        new Diff(6, 12, 16, 24, 27),
        "cupnoodle"
    ),
    new Music("コスモスパイス", "コスモスパイス",
        [
            new Creator("ピノキオピー", "ttt")
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
        new Diff(7, 12, 17, 25, 30),
        "cupnoodle"
    ),
    new Music("徳川カップヌードル禁止令", "トクガワカップヌードルキンシレイ",
        [
            new Creator("Mitchie M", "ttt")
        ],
        [
            new Vocal("sekai", ["len", "kaito", "nene", "nenerobo", "mikudayo"], false)
        ],
        mDate(2022, 2, 16),
        mDate(2022, 5, 4),
        [
            new MV(2, "https://www.youtube.com/watch?v=jPXAgWkqbo4", mDate(2022, 2, 16), ["nene", "nenerobo", "mikudayo", "len", "kaito"])
        ],
        new Diff(8, 13, 19, 27, 31),
        "cupnoodle"
    ),
    new Music("サラマンダー", "サラマンダー",
        [
            new Creator("DECO*27", "ttf"),
            new Creator("Rockwell", "fft")
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
        new Diff(8, 12, 18, 25, 30),
        "cupnoodle"
    ),
    new Music("イフ", "イフ",
        [
            new Creator("ユリイ・カノン", "ttf"),
            new Creator("月詠み", "fft")
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
        new Diff(6, 12, 18, 23, 27),
        "newlyWritten_more"
    ),
    new Music("ブラック★ロックシューター", "ブラックロックシューター",
        [
            new Creator("ryo", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"])
        ],
        mDate(2008, 6, 13),
        mDate(2022, 5, 10),
        [
            new Link("原曲", "https://www.nicovideo.jp/watch/sm3645817")
        ],
        new Diff(7, 12, 16, 24, 27),
        "brsDF"
    ),
    new Music("妄想感傷代償連盟", "モウソウカンショウダイショウレンメイ",
        [
            new Creator("DECO*27", "ttf"),
            new Creator("emon(Tes.)", "fft")
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
        new Diff(7, 12, 16, 23, 27)
    ),
    new Music("リモコン", "リモコン",
        [
            new Creator("じーざす", "ttf"),
            new Creator("ワンダフル☆オポチュニティ！", "fft")
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
        new Diff(7, 12, 17, 24, 29)
    ),
    new Music("月光", "ゲッコウ",
        [
            new Creator("キタニタツヤ", "ttt"),
            new Creator("はるまきごはん", "ttt")
        ],
        [
            new Vocal("virtual", ["miku", "rin"]),
            new Vocal("sekai", ["akito", "meiko", "kohane", "an", "toya"])
        ],
        mDate(2022, 5, 30),
        mDate(2022, 5, 20),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=SaX0By61S3U"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm40545552"),
            new MV(2, "https://www.youtube.com/watch?v=E5Wu8Ir6kdQ", mDate(2022, 5, 29), ["akito", "meiko", "kohane", "an", "toya"])
        ],
        new Diff(5, 12, 18, 25, 29),
        "newlyWritten_vivid"
    ),
    new Music("アサガオの散る頃に", "アサガオノチルコロニ",
        [
            new Creator("ぷす(fromツユ)", "ttt")
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
        new Diff(6, 12, 16, 21, 26)
    ),
    new Music("神のまにまに", "カミノマニマニ",
        [
            new Creator("れるりり", "ttf")
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
        new Diff(6, 13, 18, 25, 29)
    ),
    new Music("Awake Now", "アウェイクナウ",
        [
            new Creator("牛肉", "tff"),
            new Creator("雄之助", "ftt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["an", "miku", "kohane", "akito", "toya"])
        ],
        mDate(2022, 5, 31),
        mDate(2022, 5, 31),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=gtYydJJtQdg"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm40550223"),
            new MV(2, "https://www.youtube.com/watch?v=BUyrhLRzAwU", mDate(2022, 6, 1), ["an", "miku_vivid", "kohane", "akito", "toya"])
        ],
        new Diff(6, 12, 17, 24, 30),
        "newlyWritten_vivid"
    ),
    new Music("阿吽のビーツ", "アウンノビーツ",
        [
            new Creator("羽生まゐご", "ttt")
        ],
        [
            new Vocal("virtual", ["flower"]),
            new Vocal("sekai", ["akito", "toya"])
        ],
        mDate(2017, 8, 20),
        mDate(2022, 6, 6),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=SiqjnFhLq2U"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm31775813")
        ],
        new Diff(6, 13, 18, 23, 28)
    ),
    new Music("バグ", "バグ",
        [
            new Creator("かいりきベア", "ttf")
        ],
        [
            new Vocal("sekai", ["mafuyu", "len", "kanade", "ena", "mizuki"])
        ],
        mDate(2022, 6, 25),
        mDate(2022, 6, 10),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=FkO8ub83wss"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm40676162"),
            new MV(2, "https://www.youtube.com/watch?v=2Ii7UBMxWVw", mDate(2022, 6, 18), ["mafuyu", "len", "kanade", "ena", "mizuki"])
        ],
        new Diff(9, 13, 19, 26, 32),
        "newlyWritten_night"
    ),
    new Music("グッバイ宣言", "グッバイセンゲン",
        [
            new Creator("Chinozo", "ttt")
        ],
        [
            new Vocal("virtual", ["flower"]),
            new Vocal("sekai", ["tsukasa", "emu", "nene", "rui"]),
            new Vocal("another", ["nene", "rui"])
        ],
        mDate(2020, 4, 13),
        mDate(2022, 6, 13),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=dHXC_ahjtEE"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm36668789")
        ],
        new Diff(7, 12, 17, 26, 30)
    ),
    new Music("ヴァンパイア", "ヴァンパイア",
        [
            new Creator("DECO*27", "ttf"),
            new Creator("Rockwell", "fft")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["miku", "minori", "haruka", "airi", "shizuku"])
        ],
        mDate(2021, 3, 9),
        mDate(2022, 6, 20),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=e1xCOsgWG0M"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm38387707"),
            new MV(3, "https://www.youtube.com/watch?v=8q-iWdjIbB0", mDate(2022, 6, 20), ["miku_more", "minori", "haruka", "airi", "shizuku"])
        ],
        new Diff(7, 12, 18, 25, 29)
    ),
    new Music("未完成讃歌", "ミカンセイサンカ",
        [
            new Creator("しゃいと", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"])
        ],
        mDate(2022, 3, 29),
        mDate(2022, 6, 24),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=PmRtXlhzgAU"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm40244309")
        ],
        new Diff(8, 12, 18, 27, 31),
        "next_9"
    ),
    new Music("星空のメロディー", "ホシゾラノメロディー",
        [
            new Creator("ぽりふぉ", "ttt")
        ],
        [
            new Vocal("sekai", ["nene", "meiko", "tsukasa", "emu", "rui"]),
            new Vocal("another", ["emu"]),
            new Vocal("another", ["nene"])
        ],
        mDate(2022, 6, 28),
        mDate(2022, 6, 28),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=VznMASce0CM"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm40691459"),
            new MV(3, "https://www.youtube.com/watch?v=22x2JzhqKnI", mDate(2022, 6, 28), ["nene", "rui", "tsukasa", "emu", "meiko"])
        ],
        new Diff(5, 11, 16, 24, 27),
        "newlyWritten_wonder"
    ),
    new Music("脳漿炸裂ガール", "ノウショウサクレツガール",
        [
            new Creator("れるりり", "ttt")
        ],
        [
            new Vocal("virtual", ["miku", "gumi"])
        ],
        mDate(2012, 10, 19),
        mDate(2022, 6, 30),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=Ey_NHZNYTeE"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm19133907")
        ],
        new Diff(7, 13, 18, 28, 32)
    ),
    new Music("ぼくらの16bit戦争", "ボクラノシックスティーンビットウォーズ",
        [
            new Creator("sasakure.UK", "ttt"),
            new Creator("佐々木秀尚(有形ランペイジ)", "fff", "Gt"),
            new Creator("二家元亮介(有形ランペイジ)", "fff", "Ba")
        ],
        [
            new Vocal("virtual", ["gumi"])
        ],
        mDate(2009, 7, 12),
        mDate(2022, 7, 1),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=XKTDNQ2sTvM"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm7610111"),
            new Link("Remaster Ver", "https://www.youtube.com/watch?v=dHa5U03ebak")
        ],
        new Diff(6, 13, 17, 28, 33)
    ),
    new Music("メリュー", "メリュー",
        [
            new Creator("n-buna", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["miku", "kanade", "mafuyu"])
        ],
        mDate(2015, 5, 12),
        mDate(2022, 7, 4),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=Jak2qiq_jJo"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm26238908"),
            new MV(3, "https://www.youtube.com/watch?v=JsORTuF4438", mDate(2022, 7, 4), ["miku_night", "kanade", "mafuyu"])
        ],
        new Diff(6, 11, 15, 22, 26)
    ),
    new Music("エイリアンエイリアン", "エイリアンエイリアン",
        [
            new Creator("ナユタン星人", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["miku", "emu", "nene"])
        ],
        mDate(2016, 4, 5),
        mDate(2022, 7, 11),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=2t1NMRse6aI"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm28576299")
        ],
        new Diff(7, 12, 18, 25, 29)
    ),
    new Music("街", "マチ",
        [
            new Creator("jon-YAKITORY", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["an", "rin", "kohane", "akito", "toya"]),
            new Vocal("another", ["an"])
        ],
        null,
        mDate(2022, 7, 19),
        [
            new PlayingMovie(Diff.param.HARD, "https://www.youtube.com/watch?v=FdOCN-cLHtw"),
            new MV(3, "https://www.youtube.com/watch?v=YF3cVIzd0oc", mDate(2022, 7, 19), ["an", "akito", "kohane", "rin", "toya"])
        ],
        new Diff(6, 12, 16, 23, 27),
        "newlyWritten_vivid"
    ),
    new Music("てらてら", "テラテラ",
        [
            new Creator("和田たけあき", "ttt")
        ],
        [
            new Vocal("sekai", ["saki", "miku", "ichika", "honami", "shiho"])
        ],
        mDate(2022, 7, 29),
        mDate(2022, 7, 21),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=03IyS_9Dt0g"),
            new Link("和田たけあきver.", "https://www.youtube.com/watch?v=dDuyz3Mw720"),
            new MV(2, "https://www.youtube.com/watch?v=diDsFjpV8yw", mDate(2022, 7, 29), ["saki", "miku_leo", "ichika", "honami", "shiho"])
        ],
        new Diff(8, 13, 18, 24, 30),
        "newlyWritten_leo"
    ),
    new Music("フロイライン＝ビブリォチカ", "フロイラインビブリォチカ",
        [
            new Creator("nyanyannya(大天才P)", "ttt")
        ],
        [
            new Vocal("virtual", ["meiko"])
        ],
        mDate(2015, 3, 11),
        mDate(2022, 7, 30),
        [
            new Link("原曲", "https://www.youtube.com/watch?v=t4gP6cC55p0"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm25763619")
        ],
        new Diff(9, 14, 18, 27, 31),
    )
];
const future_musics = [
    new Music("それでもいいんだよ", "ソレデモイインダヨ",
        [
            new Creator("Ponchi♪", "fff")
        ],
        [
            new Vocal("virtual", ["miku"])
        ],
        mDate(2022, 5, 27),
        null,
        [
            new Link("原曲", "https://www.youtube.com/watch?v=1AS0Mve80jQ"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm40524295")
        ],
        new Diff(),
        "next_10"
    ),
    new Music("踊れオーケストラ", "オドレオーケストラ",
        [
            new Creator("YASUHIRO(康寛)", "ttt")
        ],
        [
            new Vocal("virtual", ["ia"]),
            new Vocal("sekai", ["luka", "tsukasa", "emu", "nene", "rui"])
        ],
        mDate(2016, 4, 23),
        null,
        [
            new Link("原曲", "https://www.youtube.com/watch?v=5XcRbKUKSdY"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm28694937")
        ],
        new Diff()
    ),
    new Music("ロストエンファウンド", "ロストエンファウンド",
        [
            new Creator("sasakure.UK", "ttf"),
            new Creator("有形ランペイジ", "fft")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["miku", "ichika", "saki", "honami", "shiho"])
        ],
        mDate(2010, 7, 9),
        null,
        [
            new Link("原曲", "https://www.youtube.com/watch?v=l7tqkjBKjkw"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm11323864")
        ],
        new Diff()
    ),
    new Music("YY", "ワイワイ",
        [
            new Creator("23.exe", "ttt")
        ],
        [
            new Vocal("virtual", ["miku"]),
            new Vocal("sekai", ["miku", "kohane", "an", "akito", "toya"])
        ],
        mDate(2019, 10, 9),
        null,
        [
            new Link("原曲", "https://www.youtube.com/watch?v=TcHvEFxk_78"),
            new Link("原曲", "https://www.nicovideo.jp/watch/sm35791694")
        ],
        new Diff()
    ),
    new Music("書き下ろし楽曲(ナナホシ管弦楽団)", "",
        [
            new Creator("ナナホシ管弦楽団", "fff")
        ],
        [
        ],
        null,
        null,
        [
        ],
        new Diff(),
        "newlyWritten_more"
    ),
    new Music("書き下ろし楽曲(古川本舗)", "",
        [
            new Creator("古川本舗", "fff")
        ],
        [
        ],
        null,
        null,
        [
        ],
        new Diff(),
        "newlyWritten_night"
    ),
    new Music("ポカリコラボ楽曲(HoneyWorks)", "",
        [
            new Creator("HoneyWorks", "fff")
        ],
        [
            new Vocal("sekai", ["miku", "ichika", "shiho"])
        ],
        null,
        null,
        [
        ],
        new Diff(),
        "pocari"
    ),
];
/*
    new Music("", "",
        [
        ],
        [
        ],
        null,
        null,
        [
        ],
        new Diff(),
        ""
    ),
    */
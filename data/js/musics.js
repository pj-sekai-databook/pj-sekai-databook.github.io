const musics = [
    Music(1, "Tell Your World",
        [
            Creator("kz", "ttt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("3DMV", ["miku"])
        ],
        mDate(2012, 3, 12),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=PqJNc9KVIZE"),
            mURL("3DMV", "https://www.youtube.com/watch?v=UUaVUWCPv_Y", mDate(2020, 12, 9))
        ],
        Diff(5, 10, 16, 22, 26)
    ),
    Music(2, "ネクストネスト",
        [
            Creator("さつき が てんこもり", "ttf")
        ],
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2014, 6, 27),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=ajlDAQeWQKE"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm23881953")
        ],
        Diff(6, 13, 18, 27, 29)
    ),
    Music(3, "メルト",
        [
            Creator("ryo", "ttt")
        ],
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2007, 12, 7),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm1715919"),
            mURL("10th ANNIVERSARY MIX", "https://www.youtube.com/watch?v=4YHUamjfJ0k")
        ],
        Diff(7, 12, 17, 25, 28)
    ),
    Music(4, "初音ミクの消失",
        [
            Creator("cosMo@暴走P", "ttf")
        ],
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2008, 4, 8),
        mDate(2020, 9, 30),
        [
            mURL("10周年リメイク", "https://www.youtube.com/watch?v=VWVtIg5cdDU"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm2937784")
        ],
        Diff(9, 15, 21, 29, 33)
    ),
    Music(5, "Blessing",
        [
            Creator("halyosy", "ttf")
        ],
        [
            Vocal("virtual", ["miku", "rin", "len", "luka", "meiko", "kaito"])
        ],
        mDate(2014, 4, 11),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=E4tIHBx7bqc"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm23304692")
        ],
        Diff(5, 11, 16, 23, 27)
    ),
    Music(6, "alive",
        [
            Creator("市瀬るぽ", "ttf")
        ],
        [
            Vocal("virtual", ["rin"])
        ],
        mDate(2020, 9, 30),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=y7RfoyBJxCg"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm37597218")
        ],
        Diff(6, 11, 16, 23, 26),
        "contest"
    ),
    Music(7, "ロキ",
        [
            Creator("みきとP", "ttt")
        ],
        [
            Vocal("virtual", ["rin"]),
            Vocal("sekai", ["miku", "ichika"]),
            Vocal("another", ["len", "kaito"]),
            Vocal("3DMV", ["ichika", "saki", "honami", "shiho", "miku_leo"])
        ],
        mDate(2018, 2, 27),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=Xg-qfsKN2_E"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm32798041"),
            mURL("3DMV", "https://www.youtube.com/watch?v=PD8PHqWuSUI", mDate(2020, 12, 25))
        ],
        Diff(7, 11, 17, 24, 28)
    ),
    Music(8, "テオ",
        [
            Creator("Sakurai", "tff"),
            Creator("Omoi", "ftt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["ichika", "miku"]),
            Vocal("another", ["ichika"]),
            Vocal("another", ["saki"]),
            Vocal("another", ["miku", "luka"]),
            Vocal("3DMV", ["ichika", "saki", "honami", "shiho", "miku_leo"])
        ],
        mDate(2017, 7, 8),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=bmkY2yc1K7Q"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm31533883"),
            mURL("3DMV", "https://www.youtube.com/watch?v=RCULeLioEnc", mDate(2021, 1, 18))
        ],
        Diff(9, 14, 19, 27, 31)
    ),
    Music(9, "ヒバナ -Reloaded-",
        [
            Creator("DECO*27", "ttf"),
            Creator("Rockwell", "fft")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["miku", "ichika"]),
            Vocal("another", ["meiko"]),
            Vocal("another", ["ichika"]),
            Vocal("2DMV", ["miku_leo", "ichika"])
        ],
        mDate(2017, 8, 4),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=hxSg2Ioz3LM"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm31685272"),
            mURL("2DMV", "https://www.youtube.com/watch?v=i16qWEUjd4o", mDate(2021, 2, 20))
        ],
        Diff(9, 14, 19, 28, 32)
    ),
    Music(10, "ハッピーシンセサイザ",
        [
            Creator("EasyPop", "ttf")
        ],
        [
            Vocal("virtual", ["luka", "gumi"]),
            Vocal("virtual", ["miku", "luka", "rin", "meiko"]),
            Vocal("sekai", ["minori", "haruka", "airi", "shizuku"]),
            Vocal("another", ["minori", "haruka"]),
            Vocal("another", ["airi", "shizuku"]),
            Vocal("3DMV", ["minori", "haruka", "airi", "shizuku"]),
            Vocal("2DMV", ["minori", "haruka", "airi", "shizuku"])
        ],
        mDate(2010, 11, 22),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=poiZSEjQBgw"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm12825985"),
            mURL("3DMV", "https://www.youtube.com/watch?v=4x2oA5vy2_U", mDate(2021, 1, 6)),
            mURL("2DMV", "https://www.youtube.com/watch?v=xD3amnjfxac", mDate(2021, 3, 19))
        ],
        Diff(6, 11, 18, 24, 28)
    ),
    Music(11, "Nostalogic",
        [
            Creator("yuukiss", "ttf")
        ],
        [
            Vocal("virtual", ["meiko"]),
            Vocal("sekai", ["haruka", "shizuku", "meiko"]),
            Vocal("another", ["haruka"]),
            Vocal("another", ["shizuku"])
        ],
        mDate(2014, 11, 5),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm24848610")
        ],
        Diff(6, 12, 17, 23, 28)
    ),
    Music(12, "ツギハギスタッカート",
        [
            Creator("とあ", "ttt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("virtual", ["miku", "rin", "meiko"]),
            Vocal("sekai", ["miku", "airi", "shizuku"]),
            Vocal("3DMV", ["airi", "shizuku", "miku_more"])
        ],
        mDate(2014, 6, 12),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=p2Irc9NPCtk"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm23762151"),
            mURL("3DMV", "https://www.youtube.com/watch?v=6iwD9hM9ND4", mDate(2021, 1, 20))
        ],
        Diff(6, 11, 16, 24, 27)
    ),
    Music(13, "劣等上等",
        [
            Creator("Reol", "tff"),
            Creator("Giga", "ftt")
        ],
        [
            Vocal("virtual", ["rin", "len"]),
            Vocal("sekai", ["rin", "len", "kohane", "an"]),
            Vocal("3DMV", ["kohane", "an", "rin", "len"])
        ],
        mDate(2018, 7, 13),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=oEkGC2HV7rc"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm33510542"),
            mURL("3DMV", "https://www.youtube.com/watch?v=mjbDHb4B5NY", mDate(2021, 1, 8)),
            mURL("マジカルミライ2018", "https://www.youtube.com/watch?v=T7-AXotDMDE"),
            mURL("マジカルミライ2018", "https://www.nicovideo.jp/watch/so33838374")
        ],
        Diff(7, 12, 18, 25, 30)
    ),
    Music(14, "ドクター＝ファンクビート",
        [
            Creator("nyanyannya", "ttf")
        ],
        [
            Vocal("virtual", ["kaito"]),
            Vocal("sekai", ["kaito", "akito", "toya"]),
            Vocal("another", ["len"])
        ],
        mDate(2015, 6, 12),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=CPxxurEcGTw"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm26470008")
        ],
        Diff(8, 13, 19, 27, 32)
    ),
    Music(15, "フラジール",
        [
            Creator("ぬゆり", "ttt")
        ],
        [
            Vocal("virtual", ["gumi"]),
            Vocal("virtual", ["len", "kaito"]),
            Vocal("sekai", ["akito", "toya"]),
            Vocal("another", ["akito"]),
            Vocal("another", ["toya"]),
            Vocal("3DMV", ["akito", "toya"]),
            Vocal("2DMV", ["akito", "toya"])
        ],
        mDate(2016, 9, 10),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=a_rrj1Xh5LI"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm29610327"),
            mURL("3DMV", "https://www.youtube.com/watch?v=WDWgBLrw-Jg", mDate(2021, 1, 22)),
            mURL("2DMV", "https://www.youtube.com/watch?v=9kZ6MPqj9Tg", mDate(2020, 12, 3))
        ],
        Diff(6, 11, 17, 24, 27)
    ),
    Music(16, "ブリキノダンス",
        [
            Creator("日向電工", "ttt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["tsukasa", "rui", "len"]),
            Vocal("another", ["tsukasa"]),
            Vocal("another", ["rui"]),
            Vocal("3DMV", ["len", "rui", "tsukasa"])
        ],
        mDate(2013, 3, 10),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm20296308"),
            mURL("3DMV", "https://www.youtube.com/watch?v=msnpPsYN2oM", mDate(2021, 1, 25))
        ],
        Diff(8, 13, 18, 25, 29)
    ),
    Music(17, "スイートマジック",
        [
            Creator("Junky", "ttf")
        ],
        [
            Vocal("virtual", ["rin"]),
            Vocal("virtual", ["miku", "rin", "len", "meiko", "kaito"]),
            Vocal("sekai", ["rin", "emu", "nene", "tsukasa", "rui"]),
            Vocal("another", ["emu"]),
            Vocal("another", ["nene"]),
            Vocal("3DMV", ["rin", "tsukasa", "emu", "nene", "rui"]),
            Vocal("2DMV", ["rin", "tsukasa", "emu", "nene", "rui"])
        ],
        mDate(2011, 4, 2),
        mDate(2020, 9, 30),
        [
            mURL("オリジナル", "https://www.youtube.com/watch?v=Vz1C44EDkYA"),
            mURL("オリジナル", "https://www.nicovideo.jp/watch/sm14044008"),
            mURL("3DMV", "https://www.youtube.com/watch?v=gPimbh-jxCo", mDate(2021, 1, 11)),
            mURL("2DMV", "https://www.youtube.com/watch?v=nNe6o3ivrXA", mDate(2021, 6, 4))
        ],
        Diff(5, 12, 18, 24, 27)
    ),
    Music(18, "ぼうけんのしょがきえました！",
        [
            Creator("じーざす", "ttf")
        ],
        [
            Vocal("virtual", ["rin", "len"]),
            Vocal("sekai", ["tsukasa", "emu", "rin", "len"])
        ],
        mDate(2014, 11, 14),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=vqiULULdvMA"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm24909819")
        ],
        Diff(8, 13, 19, 26, 31)
    ),
    Music(19, "シャルル",
        [
            Creator("バルーン", "ttt")
        ],
        [
            Vocal("virtual", ["flower"]),
            Vocal("sekai", ["ena", "mizuki"]),
            Vocal("another", ["mizuki"]),
            Vocal("another", ["ena"]),
            Vocal("another", ["len", "kaito"]),
            Vocal("3DMV", ["ena", "mizuki"])
        ],
        mDate(2016, 10, 12),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=TA5OFS_xX0c"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm29854242"),
            mURL("3DMV", "https://www.youtube.com/watch?v=diTjDNKgjLE", mDate(2021, 1, 27))
        ],
        Diff(6, 11, 17, 23, 27)
    ),
    Music(20, "ハロ／ハワユ",
        [
            Creator("ナノウ", "ttf")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["mafuyu", "ena", "miku"])
        ],
        mDate(2010, 7, 20),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=-M4sAQYi6r4"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm11448603")
        ],
        Diff(5, 10, 15, 22, 26)
    ),
    Music(21, "自傷無色",
        [
            Creator("ササノマリイ", "ttf")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["miku", "kanade", "mafuyu"]),
            Vocal("3DMV", ["miku_night", "kanade", "mafuyu"]),
            Vocal("2DMV", ["miku_night", "kanade", "mafuyu"])
        ],
        mDate(2013, 1, 20),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm19870840"),
            mURL("3DMV", "https://www.youtube.com/watch?v=LEEyYKrEvvk", mDate(2021, 1, 15)),
            mURL("2DMV", "https://www.youtube.com/watch?v=n7ZmBBf5-7g", mDate(2021, 6, 15))
        ],
        Diff(5, 10, 17, 22, 26)
    ),
    Music(22, "needLe",
        [
            Creator("DECO*27", "ttf"),
            Creator("Rockwell", "fft")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["ichika", "saki", "honami", "shiho", "miku"]),
            Vocal("another", ["honami"]),
            Vocal("another", ["shiho"]),
            Vocal("another", ["saki"]),
            Vocal("3DMV", ["ichika", "saki", "honami", "shiho", "miku_leo"])
        ],
        mDate(2020, 8, 14),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=buoYwfZG4vQ"),
            mURL("3DMV", "https://www.youtube.com/watch?v=kXGtXnq1iF8", mDate(2020, 12, 11))
        ],
        Diff(7, 12, 17, 25, 29),
        "newlyWritten"
    ),
    Music(23, "アイドル新鋭隊",
        [
            Creator("Mitchie M", "ttt")
        ],
        [
            Vocal("virtual", ["miku", "rin", "luka", "meiko"]),
            Vocal("sekai", ["minori", "haruka", "airi", "shizuku", "miku"]),
            Vocal("3DMV", ["miku_more", "airi", "haruka", "minori", "shizuku"])
        ],
        mDate(2020, 9, 9),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=4QL9tLfVFJg"),
            mURL("3DMV", "https://www.youtube.com/watch?v=3yQWZcYXcgg", mDate(2020, 12, 14))
        ],
        Diff(8, 12, 17, 24, 28),
        "newlyWritten"
    ),
    Music(24, "Ready Steady",
        [
            Creator("q*Left", "tff"),
            Creator("Giga", "ftt")
        ],
        [
            Vocal("virtual", ["miku", "rin", "len"]),
            Vocal("sekai", ["kohane", "an", "akito", "toya", "miku"]),
            Vocal("3DMV", ["miku_vivid", "kohane", "akito", "toya", "an"])
        ],
        mDate(2020, 9, 30),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=XAg1jDDG49Y"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm37601066"),
            mURL("3DMV", "https://www.youtube.com/watch?v=cj3y6DBjyvs", mDate(2020, 12, 16))
        ],
        Diff(5, 10, 16, 25, 29),
        "newlyWritten"
    ),
    Music(25, "セカイはまだ始まってすらいない",
        [
            Creator("ピノキオピー", "ttt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["tsukasa", "emu", "nene", "rui", "miku"]),
            Vocal("another", ["tsukasa", "emu"]),
            Vocal("another", ["nene", "rui"]),
            Vocal("3DMV", ["miku_wonder", "tsukasa", "nene", "emu", "rui"])
        ],
        mDate(2020, 4, 17),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=1s8NNPgdl5g"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm36685972"),
            mURL("3DMV", "https://www.youtube.com/watch?v=cFExVIRuGso", mDate(2020, 12, 18))
        ],
        Diff(6, 13, 16, 24, 29),
        "newlyWritten"
    ),
    Music(26, "悔やむと書いてミライ",
        [
            Creator("まふまふ", "ttt")
        ],
        [
            Vocal("sekai", ["kanade", "mafuyu", "ena", "mizuki", "miku"]),
            Vocal("another", ["kanade"]),
            Vocal("another", ["mafuyu"]),
            Vocal("another", ["ena"]),
            Vocal("another", ["mizuki"]),
            Vocal("3DMV", ["miku_night", "mizuki", "kanade", "mafuyu", "ena"])
        ],
        mDate(2020, 4, 22),
        mDate(2020, 9, 30),
        [
            mURL("セルフカバー", "https://www.youtube.com/watch?v=r2OS97F6P_U"),
            mURL("セルフカバー", "https://www.nicovideo.jp/watch/sm36723146"),
            mURL("3DMV", "https://www.youtube.com/watch?v=an_gDTrVdHo", mDate(2020, 12, 21))
        ],
        Diff(8, 13, 17, 26, 30),
        "newlyWritten"
    ),
    Music(27, "セカイ",
        [
            Creator("DECO*27", "tff"),
            Creator("堀江昌太(kemu)", "ftf"),
            Creator("Rockwell", "fft")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["ichika", "tsukasa", "kanade", "miku"]),
            Vocal("3DMV", ["ichika", "tsukasa", "kanade", "miku"])
        ],
        mDate(2020, 7, 31),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=9vyIPWBeRes"),
            mURL("3DMV", "https://www.youtube.com/watch?v=jxP2_vihhpM", mDate(2020, 12, 4))
        ],
        Diff(6, 12, 18, 23, 27),
        "newlyWritten"
    ),
    Music(28, "ワーワーワールド",
        [
            Creator("Mitchie M", "ttf"),
            Creator("Giga", "ftt")
        ],
        [
            Vocal("virtual", ["miku", "rin"]),
            Vocal("sekai", ["minori", "kohane", "miku"]),
            Vocal("3DMV", ["miku", "kohane", "minori"])
        ],
        mDate(2020, 8, 5),
        mDate(2020, 9, 30),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=okJ9Vk6owG8"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm37301259"),
            mURL("3DMV", "https://www.youtube.com/watch?v=GJbEn1srk3Y", mDate(2020, 12, 7))
        ],
        Diff(7, 12, 17, 24, 28),
        "newlyWritten"
    ),
    Music(29, "アスノヨゾラ哨戒班",
        [
            Creator("Orangestar", "ttf"),
            Creator("Rockwell", "fft")
        ],
        [
            Vocal("sekai", ["ichika"])
        ],
        mDate(2014, 8, 19),
        mDate(2020, 10, 1),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=XogSflwXgpw"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm24276234")
        ],
        Diff(8, 12, 17, 25, 28)
    ),
    Music(30, "ニア",
        [
            Creator("夏代孝明", "ttf"),
            Creator("渡辺拓也", "fft")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["minori", "haruka", "miku"]),
            Vocal("another", ["haruka"]),
            Vocal("3DMV", ["minori", "haruka", "miku_more"])
        ],
        mDate(2017, 7, 2),
        mDate(2020, 10, 2),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm31477166"),
            mURL("セルフカバー", "https://www.youtube.com/watch?v=7uacnNTk7I8"),
            mURL("3DMV", "https://www.youtube.com/watch?v=mzZOoZqDly4", mDate(2021, 2, 1))
        ],
        Diff(6, 11, 16, 22, 26)
    ),
    Music(31, "Just Be Friends",
        [
            Creator("Dixie Flatline", "ttf")
        ],
        [
            Vocal("virtual", ["luka"]),
            Vocal("sekai", ["kohane", "an", "luka"]),
            Vocal("another", ["kohane"]),
            Vocal("another", ["an"]),
            Vocal("2DMV", ["luka"])
        ],
        mDate(2009, 7, 4),
        mDate(2020, 10, 3),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm7528841"),
            mURL("2DMV", "https://www.youtube.com/watch?v=esaV1kjzg_Q", mDate(2020, 10, 3))
        ],
        Diff(6, 11, 17, 23, 27)
    ),
    Music(32, "脱法ロック",
        [
            Creator("Neru", "ttf")
        ],
        [
            Vocal("virtual", ["len"]),
            Vocal("sekai", ["tsukasa", "rui", "len"]),
            Vocal("another", ["kaito"])
        ],
        mDate(2016, 6, 19),
        mDate(2020, 10, 4),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=u5mHVUwDf_0"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm29081909")
        ],
        Diff(7, 13, 18, 26, 31)
    ),
    Music(33, "命に嫌われている",
        [
            Creator("カンザキイオリ", "ttt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["kanade", "miku"]),
            Vocal("another", ["kanade"]),
            Vocal("another", ["rin"]),
            Vocal("another", ["luka"]),
            Vocal("2DMV", ["miku_night", "kanade"]),
            Vocal("2DMV(アナザー)", ["kanade"])
        ],
        mDate(2017, 8, 6),
        mDate(2020, 10, 5),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=0HYm60Mjm0k"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm31700140"),
            mURL("2DMV", "https://www.youtube.com/watch?v=F7iqxHOth58", mDate(2020, 9, 26, 0)),
            mURL("2DMV(アナザー)", "https://www.youtube.com/watch?v=wNxrGUf6G0A", mDate(2020, 9, 26, 1))
        ],
        Diff(9, 14, 18, 26, 29)
    ),
    Music(34, "ワールドイズマイン",
        [
            Creator("ryo", "ttt")
        ],
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2008, 5, 31),
        mDate(2020, 10, 6),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm3504435")
        ],
        Diff(7, 13, 17, 24, 28)
    ),
    Music(35, "ダンスロボットダンス",
        [
            Creator("ナユタン星人", "ttt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["emu", "nene", "miku"]),
            Vocal("another", ["emu"]),
            Vocal("3DMV", ["miku_wonder", "emu", "nene"])
        ],
        mDate(2016, 12, 6),
        mDate(2020, 10, 7),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=g7dvpD_zlIM"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm30177801"),
            mURL("3DMV", "https://www.youtube.com/watch?v=rLt45Ylw5Ks", mDate(2022, 1, 1))
        ],
        Diff(8, 13, 18, 26, 29)
    ),
    Music(36, "Hand in Hand",
        [
            Creator("kz", "ttt")
        ],
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2015, 7, 8),
        mDate(2020, 10, 8),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=RKtoreimcQ8"),
            mURL("原曲", "https://www.nicovideo.jp/watch/so26654381"),
            mURL("マジカルミライ2015", "https://www.youtube.com/watch?v=s7h9tkfc7Eg")
        ],
        Diff(6, 13, 16, 23, 27)
    ),
    Music(37, "夜咄ディセイブ",
        [
            Creator("じん", "ttt")
        ],
        [
            Vocal("virtual", ["ia"]),
            Vocal("sekai", ["akito", "toya", "len"]),
            Vocal("another", ["akito"]),
            Vocal("another", ["toya"]),
            Vocal("another", ["len"])
        ],
        mDate(2013, 2, 17),
        mDate(2020, 10, 9),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=aPDaFGqMX4I"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm20116702")
        ],
        Diff(8, 14, 19, 26, 30)
    ),
    Music(38, "Gimme×Gimme",
        [
            Creator("q*Left", "tff"),
            Creator("八王子P", "ftt"),
            Creator("Giga", "ftt")
        ],
        [
            Vocal("virtual", ["miku", "rin"])
        ],
        mDate(2019, 10, 26),
        mDate(2020, 10, 10),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=ERo-sPa1a5g"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm35866152")
        ],
        Diff(6, 11, 18, 26, 29)
    ),
    Music(39, "ビバハピ",
        [
            Creator("Mitchie M", "ttt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["minori", "haruka", "airi", "shizuku", "miku"]),
            Vocal("another", ["minori", "airi"]),
            Vocal("2DMV", ["miku_more", "minori", "haruka", "airi", "shizuku"])
        ],
        mDate(2013, 7, 26),
        mDate(2020, 10, 11),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=WiUjG9fF3zw"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm21443197"),
            mURL("2DMV", "https://www.youtube.com/watch?v=zAkqd6iw-lo", mDate(2020, 10, 11))
        ],
        Diff(6, 12, 17, 24, 28)
    ),
    Music(40, "ジャンキーナイトタウンオーケストラ",
        [
            Creator("すりぃ", "ttf")
        ],
        [
            Vocal("virtual", ["len"])
        ],
        mDate(2019, 12, 20),
        mDate(2020, 10, 12),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=E1PGiyRjqkU"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm36109943")
        ],
        Diff(6, 13, 18, 26, 31)
    ),
    Music(41, "ミラクルペイント",
        [
            Creator("OSTER project", "ttt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["tsukasa", "emu", "nene", "rui", "miku"]),
            Vocal("2DMV", ["miku_wonder", "tsukasa", "emu", "nene", "rui"])
        ],
        mDate(2007, 11, 22),
        mDate(2020, 10, 13),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=gqPWXe0dCC4"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm1588476"),
            mURL("2DMV", "https://www.youtube.com/watch?v=kU4Rth300FM", mDate(2020, 11, 2))
        ],
        Diff(9, 12, 18, 25, 29)
    ),
    Music(42, "on the rocks",
        [
            Creator("OSTER project", "ttt")
        ],
        [
            Vocal("virtual", ["meiko", "kaito"])
        ],
        mDate(2014, 7, 8),
        mDate(2020, 10, 14),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=hk1L0ZV2bVc"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm23954284")
        ],
        Diff(7, 11, 16, 23, 27)
    ),
    Music(43, "携帯恋話",
        [
            Creator("まふまふ", "ttt")
        ],
        [
            Vocal("sekai", ["ena", "mizuki", "miku"]),
            Vocal("another", ["ena"]),
            Vocal("2DMV", ["miku_night", "ena", "mizuki"])
        ],
        mDate(2020, 5, 22),
        mDate(2020, 10, 15),
        [
            mURL("セルフカバー", "https://www.youtube.com/watch?v=bNagYg_YGbU"),
            mURL("セルフカバー", "https://www.nicovideo.jp/watch/sm36903498"),
            mURL("2DMV", "https://www.youtube.com/watch?v=kNLyqES4fC8", mDate(2020, 10, 15))
        ],
        Diff(8, 12, 18, 25, 29),
        "newlyWritten"
    ),
    Music(44, "39みゅーじっく！",
        [
            Creator("みきとP", "ttf")
        ],
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2016, 6, 29),
        mDate(2020, 10, 16),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=OuLZlZ18APQ"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm29145868")
        ],
        Diff(6, 11, 16, 23, 28)
    ),
    Music(45, "青く駆けろ！",
        [
            Creator("まらしぃ", "ttf")
        ],
        [
            Vocal("sekai", ["miku", "ichika"])
        ],
        mDate(2020, 8, 13),
        mDate(2020, 10, 17),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=_qbKRIwkTCc"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm37349785"),
            mURL("WEBムービー", "https://www.youtube.com/watch?v=w3VTDaAYvmQ")
        ],
        Diff(8, 13, 17, 24, 27)
    ),
    Music(46, "ステラ",
        [
            Creator("じん", "ttf")
        ],
        [
            Vocal("sekai", ["ichika", "saki", "honami", "shiho", "miku"]),
            Vocal("another", ["honami"]),
            Vocal("another", ["shiho"]),
            Vocal("3DMV", ["ichika", "saki", "honami", "shiho", "miku_leo"])
        ],
        mDate(2020, 11, 16),
        mDate(2020, 10, 18),
        [
            mURL("セカイVer.", "https://www.youtube.com/watch?v=AL6hWKN0WQo", mDate(2020, 11, 16)),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm37828296")
        ],
        Diff(8, 13, 17, 26, 30),
        "newlyWritten"
    ),
    Music(47, "Leia - Remind",
        [
            Creator("ゆよゆっぺ", "ttt")
        ],
        [
            Vocal("virtual", ["luka"]),
        ],
        mDate(2011, 1, 1),
        mDate(2020, 10, 19),
        [
            mURL("原曲(Remind)", "https://www.youtube.com/watch?v=e0ddGWxyhUQ"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm13185918")
        ],
        Diff(9, 13, 18, 25, 28)
    ),
    Music(48, "ジャックポットサッドガール",
        [
            Creator("syudou", "ttt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["kanade", "mafuyu", "ena", "mizuki", "miku"]),
            Vocal("another", ["mafuyu"]),
            Vocal("2DMV", ["kanade", "mafuyu", "ena", "mizuki", "miku_night"])
        ],
        mDate(2020, 10, 24),
        mDate(2020, 10, 20),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=B2llCEKbxwA"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm37716686"),
            mURL("2DMV", "https://www.youtube.com/watch?v=J9kD9rYR088", mDate(2021, 8, 2))
        ],
        Diff(9, 13, 18, 26, 29),
        "newlyWritten"
    ),
    Music(49, "メルティランドナイトメア",
        [
            Creator("はるまきごはん", "ttt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["miku", "minori", "haruka", "airi", "shizuku"]),
            Vocal("3DMV", ["minori", "shizuku", "haruka", "airi", "miku_more"])
        ],
        mDate(2018, 2, 16),
        mDate(2020, 10, 25),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=ZEy36W1xX8c"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm32748202"),
            mURL("3DMV", "https://www.youtube.com/watch?v=ZKbnmy82DZE", mDate(2021, 2, 3))
        ],
        Diff(6, 12, 17, 24, 26)
    ),
    Music(50, "乙女解剖",
        [
            Creator("DECO*27", "ttf"),
            Creator("emon(Tes.)", "fft"),
            Creator("Rockwell", "fft")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["mafuyu", "mizuki", "miku"]),
            Vocal("2DMV", ["mafuyu", "mizuki", "miku_night"]),
            Vocal("another", ["mafuyu"]),
            Vocal("another", ["mizuki"])
        ],
        mDate(2019, 1, 18),
        mDate(2020, 11, 1),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=7zwCIz-Ohn4"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm34470195"),
            mURL("2DMV", "https://www.youtube.com/watch?v=JluOv0KD9Wc", mDate(2022, 1, 14))
        ],
        Diff(5, 12, 16, 24, 27)
    ),
    Music(51, "potatoになっていく",
        [
            Creator("Neru", "ttt")
        ],
        [
            Vocal("virtual", ["rin", "len"]),
            Vocal("virtual", ["len", "meiko", "luka", "kaito", "miku"]),
            Vocal("sekai", ["rui", "miku", "tsukasa", "emu", "nene"]),
            Vocal("3DMV", ["miku_wonder", "emu", "rui", "tsukasa", "nene"])
        ],
        mDate(2020, 3, 30),
        mDate(2020, 11, 7),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=Dun11cIEo9s"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm36594334"),
            mURL("3DMV", "https://www.youtube.com/watch?v=h_h1uJcLsAE", mDate(2021, 2, 8))
        ],
        Diff(5, 11, 17, 24, 28),
        "newlyWritten"
    ),
    Music(52, "ローリンガール",
        [
            Creator("wowaka", "ttt")
        ],
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2010, 2, 14),
        mDate(2020, 11, 14),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=vnw8zURAxkU"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm9714351"),
        ],
        Diff(8, 12, 18, 26, 31)
    ),
    Music(53, "モア！ジャンプ！モア！",
        [
            Creator("ナユタン星人", "ttt")
        ],
        [
            Vocal("sekai", ["airi", "miku", "minori", "haruka", "shizuku"]),
            Vocal("2DMV", ["airi", "miku_more", "minori", "haruka", "shizuku"]),
            Vocal("2DMV(ゲームサイズ)", ["airi", "miku_more", "minori", "haruka", "shizuku"])
        ],
        null,
        mDate(2020, 11, 19),
        [
            mURL("2DMV", "https://www.youtube.com/watch?v=SKbutknpQ_I", mDate(2021, 6, 21)),
            mURL("2DMV(ゲームサイズ)", "https://www.youtube.com/watch?v=vjCfKbwD17c", mDate(2020, 11, 19))
        ],
        Diff(9, 13, 18, 26, 31),
        "newlyWritten"
    ),
    Music(54, "裏表ラバーズ",
        [
            Creator("wowaka", "ttt")
        ],
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2009, 8, 30),
        mDate(2020, 11, 21),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=b_cuMcDWwsI"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm8082467")
        ],
        Diff(8, 12, 18, 26, 30)
    ),
    Music(55, "アンノウン・マザーグース",
        [
            Creator("wowaka", "ttt")
        ],
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2017, 8, 22),
        mDate(2020, 11, 23),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=P_CSdxSGfaA"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm31791630")
        ],
        Diff(8, 12, 17, 26, 29)
    ),
    Music(56, "愛されなくても君がいる",
        [
            Creator("ピノキオピー", "ttt")
        ],
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2020, 7, 22),
        mDate(2020, 11, 30),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=ygY2qObZv24"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm37223770")
        ],
        Diff(7, 12, 16, 23, 27)
    ),
    Music(57, "ウミユリ海底譚",
        [
            Creator("n-buna", "ttt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["ichika", "miku", "honami"]),
            Vocal("another", ["honami"]),
            Vocal("3DMV", ["ichika", "saki", "honami", "shiho", "miku_leo"])
        ],
        mDate(2014, 2, 24),
        mDate(2020, 12, 1),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=7JANm3jOb2k"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm22960446"),
            mURL("3DMV", "https://www.youtube.com/watch?v=7y8ufRaaZC4", mDate(2022, 1, 1))
        ],
        Diff(6, 13, 17, 23, 27)
    ),
    Music(58, "Forward",
        [
            Creator("R Sound Design", "ttt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("virtual", ["rin", "meiko", "miku", "kaito", "len"]),
            Vocal("sekai", ["an", "kohane", "miku", "akito", "toya"]),
            Vocal("another", ["an", "kohane"]),
            Vocal("3DMV", ["miku_vivid", "an", "akito", "toya", "kohane"])
        ],
        mDate(2020, 12, 11),
        mDate(2020, 12, 8),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=crCS77wqxTI"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm37937383"),
            mURL("3DMV", "https://www.youtube.com/watch?v=t7hnsVAsWCo", mDate(2020, 12, 8))
        ],
        Diff(6, 11, 16, 24, 28),
        "newlyWritten"
    ),
    Music(59, "独りんぼエンヴィー",
        [
            Creator("koyori", "ttt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("virtual", ["miku", "luka", "rin"]),
            Vocal("sekai", ["miku", "kanade", "mizuki"]),
            Vocal("another", ["kanade"]),
            Vocal("another", ["mizuki"]),
            Vocal("3DMV", ["miku_night", "mizuki", "kanade"])
        ],
        mDate(2012, 11, 29),
        mDate(2020, 12, 14),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=UKVioegPPds"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm19466301"),
            mURL("3DMV", "https://www.youtube.com/watch?v=luujC_Y4Wsw", mDate(2020, 12, 14))
        ],
        Diff(6, 11, 16, 22, 26)
    ),
    Music(60, "ニジイロストーリーズ",
        [
            Creator("OSTER project", "ttt")
        ],
        [
            Vocal("virtual", ["miku", "rin", "len", "luka", "meiko", "kaito"]),
            Vocal("sekai", ["nene", "rui", "meiko", "kaito"]),
            Vocal("another", ["nene", "rui"]),
            Vocal("another", ["meiko", "kaito"]),
            Vocal("2DMV", ["nene", "rui", "meiko", "kaito", "tsukasa", "emu"]),
            Vocal("2DMV(ゲームサイズ)", ["nene", "rui", "meiko", "kaito", "tsukasa", "emu"])
        ],
        mDate(2020, 12, 20),
        mDate(2020, 12, 20),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=WztzykQSkgM"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm37987111"),
            mURL("2DMV", "https://www.youtube.com/watch?v=eLIUBridZsw", mDate(2022, 3, 14)),
            mURL("2DMV(ゲームサイズ)", "https://www.youtube.com/watch?v=EIUO-fPrkSo", mDate(2020, 12, 20))
        ],
        Diff(9, 13, 18, 25, 28),
        "newlyWritten"
    ),
    Music(61, "ODDS & ENDS",
        [
            Creator("ryo", "ttt")
        ],
        [
            Vocal("virtual", ["miku"])
        ],
        null,
        mDate(2020, 12, 24),
        [
            mURL("マジカルミライ2013", "https://www.youtube.com/watch?v=5kEoYWYnIIw")
        ],
        Diff(8, 12, 18, 24, 28)
    ),
    Music(62, "ドラマツルギー",
        [
            Creator("Eve", "ttf"),
            Creator("Numa", "fft")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["miku", "ichika"]),
            Vocal("another", ["ichika"])
        ],
        mDate(2017, 10, 10),
        mDate(2020, 12, 28),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm32076378"),
            mURL("Eve ver.", "https://www.youtube.com/watch?v=jJzw1h5CR-I")
        ],
        Diff(7, 12, 17, 25, 28)
    ),
    Music(63, "グリーンライツ・セレナーデ",
        [
            Creator("Sakurai", "tff"),
            Creator("Omoi", "ftt")
        ],
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2018, 7, 6),
        mDate(2020, 12, 29),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=XSLhsjepelI"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm33480697"),
            mURL("マジカルミライ2018", "https://www.nicovideo.jp/watch/so33838432"),
            mURL("マジカルミライ2018", "https://www.youtube.com/watch?v=U1oeOZVtA84")
        ],
        Diff(9, 14, 19, 27, 31)
    ),
    Music(64, "恋愛裁判",
        [
            Creator("40mP", "ttt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["airi", "miku", "minori"]),
            Vocal("another", ["minori"]),
            Vocal("another", ["airi"]),
            Vocal("2DMV", ["airi", "miku_more", "minori"])
        ],
        mDate(2014, 6, 10),
        mDate(2020, 12, 30),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=TXzfQ0cP1P0"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm23750267"),
            mURL("2DMV", "https://www.youtube.com/watch?v=mqrp4SfMJwk", mDate(2021, 8, 26))
        ],
        Diff(6, 12, 17, 22, 27)
    ),
    Music(65, "＊ハロー、プラネット。",
        [
            Creator("sasakure.UK", "ttt")
        ],
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2009, 5, 24),
        mDate(2020, 12, 31),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm7138245"),
            mURL("10周年記念アレンジ", "https://www.youtube.com/watch?v=9IwAL4fCJzg"),
            mURL("10周年記念アレンジ", "https://www.nicovideo.jp/watch/sm35168447")
        ],
        Diff(6, 10, 17, 24, 28)
    ),
    Music(66, "千本桜",
        [
            Creator("黒うさ", "ttt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("virtual", ["miku", "rin", "len", "luka", "meiko", "kaito"])
        ],
        mDate(2011, 9, 17),
        mDate(2021, 1, 1),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm15630734")
        ],
        Diff(7, 14, 20, 26, 32)
    ),
    Music(67, "ECHO",
        [
            Creator("Crusher P", "ttf")
        ],
        [
            Vocal("virtual", ["gumi"]),
            Vocal("sekai", ["luka", "kohane", "an", "akito", "toya"]),
            Vocal("another", ["kohane", "toya"]),
            Vocal("another", ["an", "akito"]),
            Vocal("2DMV", ["luka", "kohane", "an", "akito", "toya"])
        ],
        mDate(2014, 10, 8),
        mDate(2021, 1, 2),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=cQKGUgOfD8U"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm24643818"),
            mURL("2DMV", "https://www.youtube.com/watch?v=4z9Mg8sbFeU", mDate(2021, 5, 4))
        ],
        Diff(6, 12, 16, 23, 26)
    ),
    Music(68, "チュルリラ・チュルリラ・ダッダッダ！",
        [
            Creator("和田たけあき(くらげP)", "ttt")
        ],
        [
            Vocal("sekai", ["tsukasa", "emu", "nene", "rui"]),
            Vocal("another", ["tsukasa", "nene"]),
            Vocal("3DMV", ["emu", "nene", "tsukasa", "rui"]),
            Vocal("2DMV", ["emu", "nene", "tsukasa", "rui"])
        ],
        mDate(2016, 2, 22),
        mDate(2021, 1, 3),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=_j0kfGNwIlw"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm28276238"),
            mURL("3DMV", "https://www.youtube.com/watch?v=QOU2jkl30Vs", mDate(2021, 1, 3)),
            mURL("2DMV", "https://www.youtube.com/watch?v=ZiZkXbivmh4", mDate(2022, 1, 26)),
            mURL("セルフカバー", "https://www.youtube.com/watch?v=t2iQNmVfhGY")
        ],
        Diff(9, 13, 18, 26, 31)
    ),
    Music(69, "ブレス・ユア・ブレス",
        [
            Creator("和田たけあき", "ttt")
        ],
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2019, 5, 31),
        mDate(2021, 1, 4),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=a-Nf3QUFkOU"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm35199769"),
            mURL("マジカルミライ2019", "https://www.youtube.com/watch?v=7EEUU-yIN5c"),
            mURL("マジカルミライ2019", "https://www.nicovideo.jp/watch/so35671517")
        ],
        Diff(7, 13, 17, 24, 28)
    ),
    Music(70, "とても痛い痛がりたい",
        [
            Creator("EZFG", "ttt")
        ],
        [
            Vocal("virtual", ["vy2v3"]),
            Vocal("sekai", ["miku", "mafuyu", "ena"])
        ],
        mDate(2012, 10, 3),
        mDate(2021, 1, 5),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=dBa8emykxEo"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm19037197")
        ],
        Diff(6, 13, 18, 23, 28)
    ),
    Music(71, "霽れを待つ",
        [
            Creator("Orangestar", "ttt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["honami", "ichika", "miku", "saki", "shiho"]),
            Vocal("another", ["saki"]),
            Vocal("another", ["honami"]),
            Vocal("2DMV", ["miku_leo", "ichika", "saki", "honami", "shiho"])
        ],
        mDate(2021, 1, 10),
        mDate(2021, 1, 10),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=wvlUWjqGQSA"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm38099931"),
            mURL("2DMV", "https://www.youtube.com/watch?v=70ZLvDTonqI", mDate(2021, 1, 10))
        ],
        Diff(7, 12, 17, 26, 30),
        "newlyWritten"
    ),
    Music(72, "ワールズエンド・ダンスホール",
        [
            Creator("wowaka", "ttt")
        ],
        [
            Vocal("virtual", ["miku", "luka"])
        ],
        mDate(2010, 5, 18),
        mDate(2021, 1, 14),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=ZB75e7vzX0I"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm10759623")
        ],
        Diff(7, 12, 18, 26, 30)
    ),
    Music(73, "ヒビカセ",
        [
            Creator("れをる", "tff"),
            Creator("ギガ", "ftt")
        ],
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2014, 9, 24),
        mDate(2021, 1, 18),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=TkroHwQYpFE"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm24536934")
        ],
        Diff(7, 12, 17, 25, 28)
    ),
    Music(74, "Color of Drops",
        [
            Creator("40mP", "ttt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["shizuku", "luka", "minori", "haruka", "airi"]),
            Vocal("another", ["haruka"]),
            Vocal("another", ["shizuku"]),
            Vocal("another", ["luka"]),
            Vocal("3DMV", ["shizuku", "minori", "haruka", "airi", "luka"])
        ],
        mDate(2021, 1, 29),
        mDate(2021, 1, 29),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=i5rl-NGSYoo"),
            mURL("3DMV", "https://www.youtube.com/watch?v=vU-tfn7yyrQ", mDate(2021, 1, 29))
        ],
        Diff(6, 12, 16, 23, 27),
        "newlyWritten"
    ),
    Music(75, "RAD DOGS",
        [
            Creator("q*Left", "tff"),
            Creator("八王子P", "ftt")
        ],
        [
            Vocal("sekai", ["toya", "akito", "kohane", "an", "miku"]),
            Vocal("another", ["akito", "toya"]),
            Vocal("another", ["kohane", "an"]),
            Vocal("2DMV", ["toya", "akito", "kohane", "an", "miku_vivid"])
        ],
        mDate(2021, 2, 7),
        mDate(2021, 1, 31),
        [
            mURL("2DMV", "https://www.youtube.com/watch?v=ZMbWDpC1N7s", mDate(2021, 2, 7))
        ],
        Diff(6, 12, 18, 26, 30),
        "newlyWritten"
    ),
    Music(76, "ミルククラウン・オン・ソーネチカ",
        [
            Creator("ユジー", "ttt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["minori", "shizuku", "miku"]),
            Vocal("another", ["minori"]),
            Vocal("another", ["shizuku"])
        ],
        mDate(2014, 4, 25),
        mDate(2021, 2, 6),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=zRar5r3TieE"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm23404002")
        ],
        Diff(7, 13, 18, 26, 29)
    ),
    Music(77, "タイムマシン",
        [
            Creator("164", "tff"),
            Creator("40mP", "ftf"),
            Creator("1640mP", "fft")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("virtual", ["miku", "luka", "meiko"]),
            Vocal("sekai", ["miku", "ichika", "saki"]),
            Vocal("another", ["saki"]),
            Vocal("3DMV", ["ichika", "saki", "honami", "shiho", "miku_leo"]),
            Vocal("2DMV", ["ichika", "saki", "miku_leo"])
        ],
        mDate(2010, 9, 13),
        mDate(2021, 2, 10),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=EgOWe9ByNaE"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm12098837"),
            mURL("3DMV", "https://www.youtube.com/watch?v=NHR3b9v_S0I", mDate(2021, 2, 10)),
            mURL("2DMV", "https://www.youtube.com/watch?v=s1yW2jPJiVE", mDate(2021, 7, 3))
        ],
        Diff(6, 11, 16, 23, 26)
    ),
    Music(78, "drop pop candy",
        [
            Creator("れをる", "tff"),
            Creator("ギガ", "ftt")
        ],
        [
            Vocal("virtual", ["rin", "luka"]),
            Vocal("sekai", ["rin", "luka", "kohane", "an"]),
            Vocal("3DMV", ["kohane", "an", "rin", "luka"])
        ],
        mDate(2014, 7, 18),
        mDate(2021, 2, 15),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=4sq2lPNxi7M"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm24029703"),
            mURL("3DMV", "https://www.youtube.com/watch?v=KxNII3csgw4", mDate(2021, 2, 15))
        ],
        Diff(6, 12, 17, 25, 28)
    ),
    Music(79, "ポジティブ☆ダンスタイム",
        [
            Creator("キノシタ", "ttt")
        ],
        [
            Vocal("virtual", ["una", "rin"]),
            Vocal("sekai", ["rin", "emu", "nene"]),
            Vocal("another", ["emu"]),
            Vocal("another", ["nene"]),
            Vocal("2DMV", ["rin", "emu", "nene"])
        ],
        mDate(2017, 10, 12),
        mDate(2021, 2, 19),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=FT91CrPPAqc"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm32087162"),
            mURL("2DMV", "https://www.youtube.com/watch?v=BdTf_uKTqos", mDate(2021, 7, 20))
        ],
        Diff(9, 14, 18, 26, 31)
    ),
    Music(80, "Brand New Day",
        [
            Creator("いるかアイス", "ttt")
        ],
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2020, 11, 30),
        mDate(2021, 2, 22),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=2KrCmAWrrKI"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm37894731")
        ],
        Diff(9, 14, 19, 28, 32),
        "contest"
    ),
    Music(81, "限りなく灰色へ",
        [
            Creator("すりぃ", "ttt")
        ],
        [
            Vocal("virtual", ["len"]),
            Vocal("sekai", ["ena", "rin", "kanade", "mafuyu", "mizuki"]),
            Vocal("another", ["ena"]),
            Vocal("another", ["rin"]),
            Vocal("3DMV", ["ena", "mizuki", "kanade", "rin", "mafuyu"])
        ],
        mDate(2021, 2, 26),
        mDate(2021, 2, 26),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=cwLlHFMlBNQ"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm38335870"),
            mURL("3DMV", "https://www.youtube.com/watch?v=qtJ6U4c0_fQ", mDate(2021, 4, 6))
        ],
        Diff(6, 12, 18, 26, 30),
        "newlyWritten"
    ),
    Music(82, "ワンスアポンアドリーム",
        [
            Creator("YASUHIRO(康寛)", "ttt"),
        ],
        [
            Vocal("virtual", ["rin"]),
            Vocal("sekai", ["emu", "len", "tsukasa", "nene", "rui"]),
            Vocal("another", ["emu"]),
            Vocal("2DMV", ["emu", "len", "tsukasa", "nene", "rui"])
        ],
        mDate(2021, 3, 8),
        mDate(2021, 2, 28),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=S84mvlha5Fc"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm38385642"),
            mURL("2DMV", "https://www.youtube.com/watch?v=1RoDmN9n8xE", mDate(2021, 4, 21))
        ],
        Diff(6, 11, 16, 22, 27),
        "newlyWritten"
    ),
    Music(83, "ボッカデラベリタ",
        [
            Creator("柊キライ", "ttt"),
        ],
        [
            Vocal("virtual", ["flower"]),
            Vocal("sekai", ["mafuyu", "mizuki"]),
            Vocal("2DMV", ["mafuyu", "mizuki"])
        ],
        mDate(2020, 4, 26),
        mDate(2021, 3, 6),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=wp9Z2wZ-2bs"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm36731216"),
            mURL("2DMV", "https://www.youtube.com/watch?v=ZjNUJUgyoOw", mDate(2021, 5, 27))
        ],
        Diff(7, 13, 18, 25, 28)
    ),
    Music(84, "みくみくにしてあげる♪【してやんよ】",
        [
            Creator("ika_mo", "ttt")
        ],
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2007, 9, 20),
        mDate(2021, 3, 9),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm1097445")
        ],
        Diff(7, 12, 17, 24, 28)
    ),
    Music(85, "威風堂々",
        [
            Creator("梅とら", "ttt")
        ],
        [
            Vocal("virtual", ["luka", "miku", "gumi", "ia", "rin"]),
            Vocal("sekai", ["akito", "toya", "kaito"]),
            Vocal("another", ["akito"]),
            Vocal("another", ["toya"]),
            Vocal("another", ["kaito"]),
            Vocal("3DMV", ["kaito", "akito", "toya"])
        ],
        mDate(2012, 10, 29),
        mDate(2021, 3, 15),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=xGNQOqtGU_E"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm19233263"),
            mURL("3DMV", "https://www.youtube.com/watch?v=KvnS-TCq05Y", mDate(2021, 3, 15))
        ],
        Diff(6, 12, 17, 24, 28)
    ),
    Music(86, "from Y to Y",
        [
            Creator("ジミーサムP", "ttf")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["miku", "ichika", "saki", "honami", "shiho"]),
            Vocal("another", ["ichika", "honami"]),
            Vocal("another", ["saki", "shiho"])
        ],
        mDate(2009, 3, 24),
        mDate(2021, 3, 22),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm6529016")
        ],
        Diff(5, 11, 16, 24, 26)
    ),
    Music(87, "初音ミクの激唱",
        [
            Creator("GAiA", "tff"),
            Creator("cosMo@暴走P", "ftt")
        ],
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2010, 7, 9),
        mDate(2021, 3, 30),
        [
            mURL("原曲(2018Remake)", "https://www.youtube.com/watch?v=MFEaIgMkR_0"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm11328911")
        ],
        Diff(9, 14, 20, 29, 33)
    ),
    Music(88, "天使のクローバー",
        [
            Creator("DIVELA", "ttt")
        ],
        [
            Vocal("virtual", ["rin"]),
            Vocal("sekai", ["minori", "haruka", "airi", "shizuku", "rin"]),
            Vocal("another", ["minori"]),
            Vocal("another", ["airi"]),
            Vocal("3DMV", ["minori", "airi", "haruka", "shizuku", "rin"])
        ],
        mDate(2021, 3, 30),
        mDate(2021, 3, 30),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=lFJA9muTUDM"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm38510568"),
            mURL("3DMV", "https://www.youtube.com/watch?v=fYhFyk41rSw", mDate(2021, 3, 30))
        ],
        Diff(9, 13, 17, 26, 31),
        "newlyWritten"
    ),
    Music(89, "お気に召すまま",
        [
            Creator("Eve", "ttf"),
            Creator("Numa", "fft")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["tsukasa", "emu", "nene", "rui", "len"]),
            Vocal("another", ["rui"]),
            Vocal("3DMV", ["len", "emu", "tsukasa", "rui", "nene"])
        ],
        mDate(2017, 11, 28),
        mDate(2021, 4, 5),
        [
            mURL("セルフカバー", "https://www.youtube.com/watch?v=nROvY9uiYYk"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm32338124"),
            mURL("3DMV", "https://www.youtube.com/watch?v=M_9lPZyS-eQ", mDate(2021, 4, 5))
        ],
        Diff(6, 12, 18, 24, 28)
    ),
    Music(90, "どりーみんチュチュ",
        [
            Creator("emon(Tes.)", "ttt")
        ],
        [
            Vocal("virtual", ["luka"]),
            Vocal("sekai", ["luka", "minori", "haruka", "airi", "shizuku"]),
            Vocal("another", ["haruka"]),
            Vocal("another", ["airi"]),
            Vocal("another", ["shizuku"]),
            Vocal("2DMV", ["luka", "minori", "haruka", "airi", "shizuku"])
        ],
        mDate(2014, 2, 28),
        mDate(2021, 4, 12),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=WdHRGH1Qv70"),
            mURL("2DMV", "https://www.youtube.com/watch?v=ZVnD_K972P8", mDate(2022, 2, 14))
        ],
        Diff(6, 13, 17, 23, 27)
    ),
    Music(91, "アイディスマイル",
        [
            Creator("とあ", "ttt")
        ],
        [
            Vocal("virtual", ["miku", "rin"]),
            Vocal("sekai", ["mizuki", "meiko", "kanade", "mafuyu", "ena"]),
            Vocal("another", ["kanade"]),
            Vocal("another", ["mafuyu"]),
            Vocal("another", ["ena"]),
            Vocal("another", ["mizuki"]),
            Vocal("3DMV", ["mizuki", "ena", "kanade", "meiko", "mafuyu"])
        ],
        mDate(2021, 5, 1, 25, 0),
        mDate(2021, 4, 20),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=X_6EPkvIAGg"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm38667465"),
            mURL("3DMV", "https://www.youtube.com/watch?v=QdYji4SVH3A", mDate(2021, 4, 19))
        ],
        Diff(7, 12, 17, 25, 28),
        "newlyWritten"
    ),
    Music(92, "「１」",
        [
            Creator("164", "ttt")
        ],
        [
            Vocal("virtual", ["luka"]),
            Vocal("sekai", ["shiho", "ichika", "luka", "saki", "honami"]),
            Vocal("another", ["ichika"]),
            Vocal("another", ["honami"]),
            Vocal("another", ["shiho"]),
            Vocal("2DMV", ["shiho", "ichika", "luka", "saki", "honami"])
        ],
        mDate(2021, 4, 21),
        mDate(2021, 4, 21),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=fobQOAOAdoE"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm38662481"),
            mURL("2DMV", "https://www.youtube.com/watch?v=_GdIO1AANg4", mDate(2021, 4, 28))
        ],
        Diff(8, 13, 16, 23, 26),
        "newlyWritten"
    ),
    Music(93, "花を唄う",
        [
            Creator("シノ", "ttt")
        ],
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2021, 1, 28),
        mDate(2021, 4, 26),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=gmIcg1EHIac"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm38186882")
        ],
        Diff(6, 12, 19, 25, 30),
        "contest"
    ),
    Music(94, "夜に駆ける",
        [
            Creator("Ayase", "ttt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["kanade", "miku"]),
            Vocal("another", ["ichika"]),
            Vocal("another", ["shizuku"]),
            Vocal("another", ["kohane"]),
            Vocal("another", ["nene"]),
            Vocal("another", ["kanade"])
        ],
        mDate(2019, 11, 20),
        mDate(2021, 5, 1),
        [
            mURL("オリジナル", "https://www.youtube.com/watch?v=x8VYWazR5mE"),
            mURL("オリジナル", "https://www.nicovideo.jp/watch/sm35979548")
        ],
        Diff(6, 11, 18, 25, 29)
    ),
    Music(95, "幽霊東京",
        [
            Creator("Ayase", "ttt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["kaito", "akito", "toya"]),
            Vocal("another", ["toya"])
        ],
        mDate(2019, 12, 3),
        mDate(2021, 5, 3),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=lWl5viCqGSc"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm36036629"),
            mURL("セルフカバー", "https://www.youtube.com/watch?v=DtBoAqkIJzI"),
            mURL("セルフカバー", "https://www.nicovideo.jp/watch/sm36036629")
        ],
        Diff(7, 13, 17, 24, 27)
    ),
    Music(96, "シネマ",
        [
            Creator("Ayase", "ttt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["akito", "kaito", "kohane", "an", "toya"]),
            Vocal("another", ["akito"]),
            Vocal("3DMV", ["kaito", "kohane", "toya", "akito", "an"]),
            Vocal("2DMV", ["akito", "kaito", "kohane", "an", "toya"])
        ],
        mDate(2021, 5, 8),
        mDate(2021, 5, 8),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=EEbWRjavSVw"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm38708262"),
            mURL("3DMV", "https://www.youtube.com/watch?v=mfYruS61p48", mDate(2021, 5, 8)),
            mURL("2DMV", "https://www.youtube.com/watch?v=8m1cUgLepmY", mDate(2021, 8, 17))
        ],
        Diff(6, 12, 18, 24, 29),
        "newlyWritten"
    ),
    Music(97, "KING",
        [
            Creator("Kanaria", "ttf")
        ],
        [
            Vocal("virtual", ["gumi"]),
            Vocal("sekai", ["tsukasa", "rui"]),
            Vocal("another", ["tsukasa"]),
            Vocal("another", ["rui"]),
            Vocal("2DMV", ["tsukasa", "rui"])
        ],
        mDate(2020, 8, 2),
        mDate(2021, 5, 17),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=cm-l2h6GB8Q"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm37287661"),
            mURL("2DMV", "https://www.youtube.com/watch?v=B45Q1AbiBWg", mDate(2021, 12, 23))
        ],
        Diff(7, 14, 19, 25, 29)
    ),
    Music(98, "アイノマテリアル",
        [
            Creator("Junky", "ttt")
        ],
        [
            Vocal("virtual", ["miku", "rin"]),
            Vocal("sekai", ["haruka", "shizuku", "meiko", "minori", "airi"]),
            Vocal("another", ["minori"]),
            Vocal("2DMV", ["haruka", "shizuku", "meiko", "minori", "airi"])
        ],
        mDate(2021, 5, 29),
        mDate(2021, 5, 21),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=YsVmtXmpGEI"),
            mURL("2DMV", "https://www.youtube.com/watch?v=miLfbcfdqus", mDate(2021, 5, 29))
        ],
        Diff(6, 11, 16, 22, 26),
        "newlyWritten"
    ),
    Music(99, "いかないで",
        [
            Creator("想太", "ttf")
        ],
        [
            Vocal("virtual", ["yuki"]),
            Vocal("sekai", ["ichika", "saki", "miku"]),
            Vocal("another", ["saki"]),
            Vocal("3DMV", ["ichika", "saki", "honami", "shiho", "miku_leo"])
        ],
        mDate(2013, 10, 9),
        mDate(2021, 5, 28),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm22001720"),
            mURL("原曲(remaster)", "https://www.youtube.com/watch?v=L0tcMxp8Iy8"),
            mURL("3DMV", "https://www.youtube.com/watch?v=x7_chKm37m8", mDate(2021, 5, 28))
        ],
        Diff(8, 13, 18, 25, 29)
    ),
    Music(100, "ロミオとシンデレラ",
        [
            Creator("doriko", "ttt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["miku", "airi", "shizuku"]),
            Vocal("another", ["airi"]),
            Vocal("another", ["shizuku"]),
            Vocal("3DMV", ["miku_more", "airi", "shizuku"])
        ],
        mDate(2009, 4, 6),
        mDate(2021, 6, 7),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=kp-plPYAPq8"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm6666016"),
            mURL("3DMV", "https://www.youtube.com/watch?v=mlTSkRO92S0", mDate(2021, 6, 7))
        ],
        Diff(7, 12, 17, 24, 27)
    ),
    Music(101, "泡沫未来",
        [
            Creator("加賀(ネギシャワーP)", "ttt")
        ],
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2021, 2, 26),
        mDate(2021, 6, 14),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=juOJFUVF12k"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm38333228")
        ],
        Diff(8, 12, 17, 25, 29),
        "contest"
    ),
    Music(102, "トンデモワンダーズ",
        [
            Creator("sasakure.UK", "ttt"),
            Creator("岸田勇気(有形ランペイジ)", "fff", "Key")
        ],
        [
            Vocal("virtual", ["miku", "kaito"]),
            Vocal("sekai", ["tsukasa", "kaito", "emu", "nene", "rui"]),
            Vocal("3DMV", ["kaito", "emu", "tsukasa", "nene", "rui"]),
            Vocal("another", ["tsukasa"]),
            Vocal("another", ["emu"]),
            Vocal("another", ["nene"]),
            Vocal("another", ["rui"])
        ],
        mDate(2021, 6, 19),
        mDate(2021, 6, 19),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=dBQg24mx45Y"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm38907008"),
            mURL("3DMV", "https://www.youtube.com/watch?v=vI5xihka9hw", mDate(2021, 6, 19))
        ],
        Diff(9, 14, 19, 27, 32),
        "newlyWritten"
    ),
    Music(103, "カナデトモスソラ",
        [
            Creator("Sasanomaly", "ttt")
        ],
        [
            Vocal("sekai", ["kanade", "luka", "mafuyu", "ena", "mizuki"]),
            Vocal("another", ["kanade"]),
            Vocal("another", ["mafuyu"]),
            Vocal("another", ["ena"]),
            Vocal("another", ["mizuki"]),
            Vocal("2DMV", ["kanade", "luka", "mafuyu", "ena", "mizuki"])
        ],
        mDate(2022, 2, 10),
        mDate(2021, 6, 21),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm40015219"),
            mURL("2DMV", "https://www.youtube.com/watch?v=GTlQhMRHXIg", mDate(2021, 6, 28))
        ],
        Diff(6, 11, 15, 22, 26),
        "newlyWritten"
    ),
    Music(104, "トラフィック・ジャム",
        [
            Creator("煮ル果実", "ttt")
        ],
        [
            Vocal("virtual", ["flower"]),
            Vocal("sekai", ["rin", "kohane", "an", "akito", "toya"]),
            Vocal("another", ["kohane", "toya"]),
            Vocal("another", ["an", "akito"]),
            Vocal("2DMV", ["rin", "kohane", "an", "akito", "toya"])
        ],
        mDate(2019, 8, 25),
        mDate(2021, 6, 30),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=oUevY6uH4Qg"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm35586514"),
            mURL("2DMV", "https://www.youtube.com/watch?v=UyDytd1EZSk", mDate(2021, 12, 9))
        ],
        Diff(6, 13, 18, 24, 28)
    ),
    Music(105, "フロムトーキョー",
        [
            Creator("夏代孝明", "ttf"),
            Creator("渡辺拓也", "ftt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["saki", "ichika", "miku", "honami", "shiho"]),
            Vocal("another", ["saki"]),
            Vocal("another", ["honami"]),
            Vocal("another", ["shiho"]),
            Vocal("3DMV", ["ichika", "saki", "honami", "shiho", "miku_leo"])
        ],
        mDate(2021, 7, 23),
        mDate(2021, 7, 7),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=mMiLWxuffdQ"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm39105923"),
            mURL("3DMV", "https://www.youtube.com/watch?v=ydf6PIlMuyE", mDate(2021, 7, 7))
        ],
        Diff(6, 12, 18, 24, 28),
        "newlyWritten"
    ),
    Music(106, "Beat Eater",
        [
            Creator("ポリスピカデリー", "ttt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["kohane", "len", "an", "akito", "toya"]),
            Vocal("another", ["kohane"]),
            Vocal("another", ["an"]),
            Vocal("2DMV", ["kohane", "len", "an", "akito", "toya"])
        ],
        mDate(2021, 7, 18),
        mDate(2021, 7, 9),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=Rcc_BreWEMI"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm39046046"),
            mURL("2DMV", "https://www.youtube.com/watch?v=DaWbq6KeJq4", mDate(2021, 7, 18))
        ],
        Diff(6, 11, 17, 25, 28),
        "newlyWritten"
    ),
    Music(107, "六兆年と一夜物語",
        [
            Creator("kemu", "ttt")
        ],
        [
            Vocal("virtual", ["ia"]),
            Vocal("sekai", ["miku", "ichika"]),
            Vocal("another", ["ichika"]),
            Vocal("another", ["miku"]),
            Vocal("2DMV", ["miku_leo", "ichika"])
        ],
        mDate(2012, 4, 11),
        mDate(2021, 7, 12),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=Om3MTou2kPg"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm17520775"),
            mURL("2DMV", "https://www.youtube.com/watch?v=uDgikBUvIlQ", mDate(2021, 7, 12))
        ],
        Diff(9, 14, 20, 29, 33)
    ),
    Music(108, "地球最後の告白を",
        [
            Creator("kemu", "ttt")
        ],
        [
            Vocal("virtual", ["gumi"]),
            Vocal("sekai", ["luka", "haruka", "shizuku"]),
            Vocal("another", ["haruka"]),
            Vocal("another", ["luka"]),
            Vocal("2DMV", ["luka", "haruka", "shizuku"])
        ],
        mDate(2012, 6, 26),
        mDate(2021, 7, 19),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=s8KBk8ZRH54"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm18198019"),
            mURL("2DMV", "https://www.youtube.com/watch?v=jSwRwYVjRg8", mDate(2021, 7, 19))
        ],
        Diff(8, 13, 18, 25, 31)
    ),
    Music(109, "ビターチョコデコレーション",
        [
            Creator("syudou", "ttt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["miku", "kanade", "mafuyu", "ena", "mizuki"]),
            Vocal("another", ["mafuyu"]),
            Vocal("another", ["ena"]),
            Vocal("another", ["mizuki"]),
            Vocal("3DMV", ["miku_night", "mizuki", "mafuyu", "kanade", "ena"])
        ],
        mDate(2019, 1, 4),
        mDate(2021, 7, 28),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=XCyKJD6uQyg"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm34425299"),
            mURL("3DMV", "https://www.youtube.com/watch?v=vnTW9sS-9P4", mDate(2021, 7, 28))
        ],
        Diff(7, 12, 19, 25, 31)
    ),
    Music(110, "そうだった！",
        [
            Creator("タケノコ少年", "ttt")
        ],
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2021, 4, 25),
        mDate(2021, 8, 6),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=gfdzYIPjhBU"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm38613334")
        ],
        Diff(8, 14, 19, 27, 31),
        "contest"
    ),
    Music(111, "カゲロウデイズ",
        [
            Creator("じん", "ttt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["ichika", "saki", "honami", "shiho", "miku"]),
            Vocal("another", ["ichika"]),
            Vocal("another", ["saki"]),
            Vocal("another", ["honami"]),
            Vocal("another", ["shiho"])
        ],
        mDate(2011, 9, 30),
        mDate(2021, 8, 15, 12, 30),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=EMGyiiTC7sg"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm15751190")
        ],
        Diff(9, 14, 19, 27, 31)
    ),
    Music(112, "アイスドロップ",
        [
            Creator("aqu3ra", "ttt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["airi", "len", "minori", "haruka", "shizuku"]),
            Vocal("another", ["airi"]),
            Vocal("3DMV", ["len", "airi", "haruka", "shizuku", "minori"])
        ],
        mDate(2021, 8, 18),
        mDate(2021, 8, 18),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=WXvm5XfkXrk"),
            mURL("3DMV", "https://www.youtube.com/watch?v=3_HXYLEP7aU", mDate(2021, 8, 18))
        ],
        Diff(7, 12, 18, 24, 27),
        "newlyWritten"
    ),
    Music(113, "Glory Steady Go!",
        [
            Creator("キノシタ", "ttt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["nene", "luka", "tsukasa", "emu", "rui"]),
            Vocal("2DMV", ["nene", "luka", "tsukasa", "emu", "rui"])
        ],
        mDate(2021, 8, 29),
        mDate(2021, 8, 20),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=Y-QhzXC9NbI"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm39258986"),
            mURL("2DMV", "https://www.youtube.com/watch?v=JoM4JGqQyCU", mDate(2021, 8, 28))
        ],
        Diff(7, 12, 18, 25, 29),
        "newlyWritten"
    ),
    Music(114, "チルドレンレコード",
        [
            Creator("じん", "ttt")
        ],
        [
            Vocal("virtual", ["ia"]),
            Vocal("sekai", ["kohane", "an", "akito", "toya", "len"]),
            Vocal("another", ["kohane", "akito"]),
            Vocal("another", ["an", "toya"]),
            Vocal("3DMV", ["len", "toya", "an", "akito", "kohane"])
        ],
        mDate(2012, 7, 21),
        mDate(2021, 8, 23),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=oh9UGmqtdMg"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm18406343"),
            mURL("Re:boot", "https://www.youtube.com/watch?v=WEVgkh_7_0k"),
            mURL("3DMV", "https://www.youtube.com/watch?v=jzecTyD0ljs", mDate(2021, 8, 23))
        ],
        Diff(9, 14, 19, 27, 31)
    ),
    Music(115, "magic number",
        [
            Creator("伊東健人", "ttf"),
            Creator("OSTER project", "fft")
        ],
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2021, 9, 1),
        mDate(2021, 9, 1),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=fzRWpcvPJYo")
        ],
        Diff(6, 11, 18, 25, 29),
        "newlyWritten"
    ),

    Music(116, "流星のパルス",
        [
            Creator("*Luna", "ttt")
        ],
        [
            Vocal("virtual", ["len", "miku", "rin", "luka", "meiko", "kaito"]),
            Vocal("sekai", ["ichika", "meiko", "saki", "honami", "shiho"]),
            Vocal("2DMV", ["ichika", "meiko", "saki", "honami", "shiho"])
        ],
        mDate(2021, 9, 19),
        mDate(2021, 9, 10),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=8Zds1FvEtKw"),
            mURL("2DMV", "https://www.youtube.com/watch?v=hZgbqUQI64E", mDate(2021, 9, 19)),
        ],
        Diff(8, 13, 17, 25, 30),
        "newlyWritten_leo"
    ),
    Music(117, "カトラリー",
        [
            Creator("有機酸", "ttt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["miku", "kanade", "mafuyu"]),
            Vocal("another", ["kanade"]),
            Vocal("another", ["mafuyu"])
        ],
        mDate(2017, 12, 25),
        mDate(2021, 9, 21),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=HHhFX9zUV2s"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm32479585")
        ],
        Diff(5, 12, 18, 25, 28)
    ),
    Music(118, "再生",
        [
            Creator("Picon", "ttt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["mafuyu", "rin", "kanade", "ena", "mizuki"]),
            Vocal("another", ["kanade"]),
            Vocal("another", ["mafuyu"]),
            Vocal("3DMV", ["mafuyu", "mizuki", "kanade", "ena", "rin"])
        ],
        mDate(2021, 9, 29),
        mDate(2021, 9, 29),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=purlnb5K_jM"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm39408553"),
            mURL("3DMV", "https://www.youtube.com/watch?v=LLoHF639Jes", mDate(2021, 9, 29)),
        ],
        Diff(5, 11, 15, 22, 26),
        "newlyWritten_night"
    ),
    Music(119, "群青讃歌",
        [
            Creator("Eve", "ttf"),
            Creator("Numa", "fft")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["ichika", "minori", "kohane", "tsukasa", "kanade", "miku"]),
            Vocal("another", ["ichika"]),
            Vocal("another", ["minori"]),
            Vocal("another", ["kohane"]),
            Vocal("another", ["tsukasa"]),
            Vocal("another", ["kanade"]),
            Vocal("3DMV", ["miku", "ichika", "kanade", "kohane", "tsukasa", "minori"])
        ],
        mDate(2021, 9, 30),
        mDate(2021, 9, 30),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm39411572"),
            mURL("セルフカバー", "https://www.youtube.com/watch?v=sgZjbk9eH6g"),
            mURL("3DMV", "https://www.youtube.com/watch?v=xs4RPTt4J0M", mDate(2021, 9, 30))
        ],
        Diff(7, 13, 17, 24, 27),
        "newlyWritten"
    ),
    Music(120, "炉心融解",
        [
            Creator("kuma(alfred)", "tff"),
            Creator("iroha(sasaki)", "ftf")
        ],
        [
            Vocal("virtual", ["rin"])
        ],
        mDate(2009, 8, 30),
        mDate(2021, 10, 1),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=dSw8CucthGc"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm8089993")
        ],
        Diff(7, 12, 17, 24, 27)
    ),
    Music(121, "ロストワンの号哭",
        [
            Creator("Neru", "ttf")
        ],
        [
            Vocal("virtual", ["rin"]),
            Vocal("virtual", ["rin", "luka", "meiko"]),
            Vocal("sekai", ["rin", "ichika", "shiho"]),
            Vocal("another", ["shiho"]),
            Vocal("another", ["miku"]),
            Vocal("3DMV", ["ichika", "saki", "honami", "shiho", "rin"])
        ],
        mDate(2013, 3, 4),
        mDate(2021, 10, 2),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=8oBV3jPTW4s"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm20244918"),
            mURL("3DMV", "https://www.youtube.com/watch?v=kIvTE89Yj2A", mDate(2021, 10, 2))
        ],
        Diff(7, 14, 19, 26, 32)
    ),
    Music(122, "マシンガンポエムドール",
        [
            Creator("cosMo@暴走P", "ttt")
        ],
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2021, 10, 3),
        mDate(2021, 10, 3),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=UgZFpO_Y6qo"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm39426624")
        ],
        Diff(9, 14, 21, 30, 33),
        "newlyWritten_virtual"
    ),
    Music(123, "ベノム",
        [
            Creator("かいりきベア", "ttf")
        ],
        [
            Vocal("virtual", ["flower"]),
            Vocal("sekai", ["ena", "mizuki"]),
            Vocal("another", ["ena"]),
            Vocal("another", ["mizuki"])
        ],
        mDate(2018, 8, 2),
        mDate(2021, 10, 4),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=oRJBwaZ59fQ"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm33624822")
        ],
        Diff(7, 13, 18, 26, 29)
    ),
    Music(124, "拝啓ドッペルゲンガー",
        [
            Creator("kemu", "ttt")
        ],
        [
            Vocal("virtual", ["gumi"])
        ],
        mDate(2017, 5, 31),
        mDate(2021, 10, 5),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=grdy6rLbQ-c"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm31314079")
        ],
        Diff(9, 13, 19, 28, 32)
    ),
    Music(125, "テレキャスタービーボーイ",
        [
            Creator("すりぃ", "ttt")
        ],
        [
            Vocal("virtual", ["len"]),
            Vocal("sekai", ["len", "tsukasa", "emu", "nene", "rui"]),
            Vocal("another", ["emu"]),
            Vocal("another", ["nene"])
        ],
        mDate(2019, 4, 13),
        mDate(2021, 10, 6),
        [
            mURL("原曲(long ver.)", "https://www.youtube.com/watch?v=i-DZukWFR64"),
            mURL("原曲(long ver.)", "https://www.nicovideo.jp/watch/sm37507315"),
            mURL("原曲", "https://www.youtube.com/watch?v=pWLhidOSYOs"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm34963198")
        ],
        Diff(8, 13, 18, 25, 29)
    ),
    Music(126, "トキヲ・ファンカ",
        [
            Creator("takamatt", "ttt")
        ],
        [
            Vocal("virtual", ["gumi"])
        ],
        mDate(2013, 5, 27),
        mDate(2021, 10, 7),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=bcLYdxMusHc"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm20973557")
        ],
        Diff(6, 11, 18, 25, 28)
    ),
    Music(127, "悪魔の踊り方",
        [
            Creator("キタニタツヤ", "ttf")
        ],
        [
            Vocal("virtual", ["rin"]),
            Vocal("sekai", ["rin", "kohane", "an", "akito", "toya"]),
            Vocal("3DMV", ["rin", "kohane", "toya", "akito", "an"])
        ],
        mDate(2018, 5, 2),
        mDate(2021, 10, 8),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=v7_Jo4SfICk"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm33141569"),
            mURL("3DMV", "https://www.youtube.com/watch?v=lu0AF-JByA8", mDate(2021, 10, 8))
        ],
        Diff(5, 12, 19, 26, 30)
    ),
    Music(128, "だれかの心臓になれたなら",
        [
            Creator("ユリイ・カノン", "ttt")
        ],
        [
            Vocal("virtual", ["gumi"])
        ],
        mDate(2018, 2, 12),
        mDate(2021, 10, 9),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=hZFBTnzKa54"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm32727744")
        ],
        Diff(7, 12, 18, 25, 29)
    ),
    Music(129, "マシュマリー",
        [
            Creator("MIMI", "ttt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["miku", "minori", "airi"]),
            Vocal("another", ["airi"])
        ],
        mDate(2018, 1, 4),
        mDate(2021, 10, 10),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=qtuX4cHk-vE"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm32528864")
        ],
        Diff(8, 11, 18, 26, 29)
    ),
    Music(130, "右肩の蝶",
        [
            Creator("水野悠良", "tff"),
            Creator("のりぴー", "ftt")
        ],
        [
            Vocal("virtual", ["len"])
        ],
        mDate(2009, 5, 3),
        mDate(2021, 10, 11),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=9gRWXcyAfBI"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm6928368"),
            mURL("原曲(リンVer)", "https://www.youtube.com/watch?v=3b9fLkmgtdo"),
            mURL("原曲(リンVer)", "https://www.nicovideo.jp/watch/sm6609407"),
        ],
        Diff(6, 12, 18, 25, 31)
    ),
    Music(131, "ray",
        [
            Creator("藤原基央", "ttf")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["ichika", "miku"]),
            Vocal("3DMV", ["ichika", "saki", "honami", "shiho", "miku_leo"]),
            Vocal("2DMV", ["ichika", "miku_leo"])
        ],
        mDate(2014, 3, 13),
        mDate(2021, 10, 12),
        [
            mURL("オリジナル", "https://www.youtube.com/watch?v=yT_ylSCgY6Q"),
            mURL("3DMV", "https://www.youtube.com/watch?v=S-okMR4YUlo", mDate(2021, 10, 12)),
            mURL("2DMV", "https://www.youtube.com/watch?v=YkP0JMByjRM", mDate(2021, 10, 12))
        ],
        Diff(6, 12, 16, 24, 26)
    ),
    Music(132, "Hello,world!",
        [
            Creator("藤原基央", "ttf")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["ichika", "saki", "honami", "shiho", "miku"]),
            Vocal("2DMV", ["ichika", "saki", "honami", "shiho", "miku_leo"])
        ],
        mDate(2015, 5, 1),
        mDate(2021, 10, 13),
        [
            mURL("オリジナル", "https://www.youtube.com/watch?v=rOU4YiuaxAM"),
            mURL("2DMV", "https://www.youtube.com/watch?v=B1nUc7LfZYA", mDate(2021, 10, 14))
        ],
        Diff(9, 13, 17, 25, 29)
    ),
    Music(133, "しっくおぶはうす！",
        [
            Creator("オゾン", "ttt")
        ],
        [
            Vocal("virtual", ["rin", "len"])
        ],
        mDate(2021, 7, 18),
        mDate(2021, 10, 22),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=B4A-edPIz-s"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm39049587")
        ],
        Diff(7, 13, 17, 26, 30),
        "contest_virtual"
    ),
    Music(134, "ショウタイム・ルーラー",
        [
            Creator("烏屋茶房", "ttt")
        ],
        [
            Vocal("virtual", ["rin"]),
            Vocal("sekai", ["rui", "rin", "tsukasa", "emu", "nene"]),
            Vocal("another", ["tsukasa"]),
            Vocal("another", ["rui"]),
            Vocal("3DMV", ["rui", "tsukasa", "emu", "nene", "rin"])
        ],
        mDate(2021, 10, 29),
        mDate(2021, 10, 29),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=uDBVetc5JKo"),
            mURL("3DMV", "https://www.youtube.com/watch?v=bKKxLK_1ae8", mDate(2021, 10, 29))
        ],
        Diff(9, 13, 19, 25, 31),
        "newlyWritten_wonder"
    ),
    Music(135, "Happy Halloween",
        [
            Creator("Junky", "ttt")
        ],
        [
            Vocal("virtual", ["rin"]),
            Vocal("sekai", ["rin", "minori", "haruka", "airi", "shizuku"]),
            Vocal("another", ["haruka"]),
            Vocal("another", ["airi"]),
            Vocal("another", ["shizuku"])
        ],
        mDate(2014, 10, 10),
        mDate(2021, 10, 30),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=1DcgczDzQPk")
        ],
        Diff(5, 12, 16, 25, 30)
    ),
    Music(136, "ロウワー",
        [
            Creator("ぬゆり", "ttt")
        ],
        [
            Vocal("virtual", ["flower"]),
            Vocal("sekai", ["mizuki", "meiko", "kanade", "mafuyu", "ena"]),
            Vocal("another", ["ena"]),
            Vocal("another", ["mizuki"]),
            Vocal("another", ["miku"]),
            Vocal("2DMV", ["mizuki", "meiko", "kanade", "mafuyu", "ena"])
        ],
        mDate(2021, 11, 11),
        mDate(2021, 10, 31),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=3sEptl-psU0"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm39608927"),
            mURL("2DMV", "https://www.youtube.com/watch?v=16M9oC-a5bY", mDate(2021, 11, 9))
        ],
        Diff(6, 12, 17, 26, 30),
        "newlyWritten_night"
    ),
    Music(137, "初音天地開闢神話",
        [
            Creator("cosMo@暴走P", "ttt")
        ],
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2021, 8, 20),
        mDate(2021, 11, 5),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=8J6SMoVd5BY"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm39209934")
        ],
        Diff(9, 14, 20, 28, 32)
    ),
    Music(138, "オルターエゴ",
        [
            Creator("Misumi", "ttt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["miku", "kohane", "an", "akito", "toya"])
        ],
        mDate(2019, 8, 16),
        mDate(2021, 11, 10),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=DlIREQyaxu8"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm35546354")
        ],
        Diff(8, 12, 17, 26, 31)
    ),
    Music(139, "STAGE OF SEKAI",
        [
            Creator("針原翼(はりーP)", "ttf"),
            Creator("棚橋 EDDY テルアキ", "fft")
        ],
        [
            Vocal("sekai", ["honami", "ichika", "len", "saki", "shiho"]),
            Vocal("3DMV", ["ichika", "saki", "honami", "shiho", "len"])
        ],
        mDate(2021, 12, 22),
        mDate(2021, 11, 18),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=YVD1RLI7klc"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm39782705"),
            mURL("3DMV", "https://www.youtube.com/watch?v=BNdJWYHa_xg", mDate(2021, 11, 18))
        ],
        Diff(8, 12, 17, 25, 30),
        "newlyWritten_leo"
    ),
    Music(140, "からくりピエロ",
        [
            Creator("40mP", "ttt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["miku", "minori", "haruka", "airi", "shizuku"]),
            Vocal("another", ["minori", "haruka"]),
            Vocal("another", ["airi", "shizuku"]),
            Vocal("3DMV", ["miku_more", "airi", "haruka", "minori", "shizuku"])
        ],
        mDate(2011, 7, 15),
        mDate(2021, 11, 29),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=xxFkW3PCT5M"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm15022913"),
            mURL("3DMV", "https://www.youtube.com/watch?v=R3CGPv9oeDk", mDate(2021, 11, 29))
        ],
        Diff(5, 11, 16, 23, 27)
    ),
    Music(141, "ワールドワイドワンダー",
        [
            Creator("TOKOTOKO", "ttt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["minori", "kaito", "haruka", "airi", "shizuku"]),
            Vocal("2DMV", ["minori", "kaito", "haruka", "airi", "shizuku"])
        ],
        mDate(2021, 12, 18),
        mDate(2021, 12, 10),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=6NdOqVypgCM"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm39771984"),
            mURL("2DMV", "https://www.youtube.com/watch?v=aO_ZCaoojh4", mDate(2021, 12, 18))
        ],
        Diff(6, 13, 18, 24, 28),
        "newlyWritten_more"
    ),
    Music(142, "悪ノ娘",
        [
            Creator("mothy", "ttt")
        ],
        [
            Vocal("virtual", ["rin"])
        ],
        mDate(2008, 4, 6),
        mDate(2021, 12, 13),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=W77q-kK8iA8"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm2916956")
        ],
        Diff(6, 12, 17, 24, 27)
    ),
    Music(143, "悪ノ召使",
        [
            Creator("mothy", "ttt")
        ],
        [
            Vocal("virtual", ["len"])
        ],
        mDate(2008, 4, 29),
        mDate(2021, 12, 14),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=yzpNpaS0uLc"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm3133304")
        ],
        Diff(6, 12, 17, 24, 27)
    ),
    Music(144, "去り人達のワルツ",
        [
            Creator("mothy", "ttt")
        ],
        [
            Vocal("virtual", ["rin"])
        ],
        mDate(2022, 2, 28),
        mDate(2021, 12, 15),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=jNBRyo54Tks")
        ],
        Diff(8, 13, 17, 23, 28),
        "newlyWritten_virtual"
    ),
    Music(145, "ラストスコア",
        [
            Creator("せきこみごはん", "ttt")
        ],
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2021, 8, 30),
        mDate(2021, 12, 20),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=zAWu9BK_V5M"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm39267476")
        ],
        Diff(7, 13, 18, 26, 30),
        "contest_virtual"
    ),
    Music(146, "フィクサー",
        [
            Creator("ぬゆり", "ttt")
        ],
        [
            Vocal("virtual", ["flower"]),
            Vocal("sekai", ["tsukasa", "rui"]),
            Vocal("another", ["tsukasa"]),
            Vocal("another", ["rui"])
        ],
        mDate(2017, 3, 22),
        mDate(2021, 12, 28),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=srH34Tjjo9U"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm30868619")
        ],
        Diff(6, 12, 19, 26, 30)
    ),
    Music(147, "ミライ",
        [
            Creator("有機酸", "ttt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["toya", "luka", "kohane", "an", "akito"]),
            Vocal("another", ["akito"]),
            Vocal("another", ["toya"]),
            Vocal("3DMV", ["toya", "kohane", "an", "akito", "luka"]),
            Vocal("2DMV", ["toya", "luka", "kohane", "an", "akito"])
        ],
        mDate(2021, 12, 29),
        mDate(2021, 12, 29),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=zTokBPAXHW4"),
            mURL("3DMV", "https://www.youtube.com/watch?v=7ub8n1J8ruY", mDate(2021, 12, 29)),
            mURL("2DMV", "https://www.youtube.com/watch?v=X_u5UtcgrKw", mDate(2021, 12, 29))
        ],
        Diff(6, 12, 18, 24, 28),
        "newlyWritten_vivid"
    ),
    Music(148, "ゴーストルール",
        [
            Creator("DECO*27", "ttf"),
            Creator("Naoki Itai(MUSIC FOR MUSIC)", "fft")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["miku", "ichika"])
        ],
        mDate(2016, 1, 8),
        mDate(2021, 12, 30),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=KushW6zvazM"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm27965309")
        ],
        Diff(9, 14, 19, 27, 32)
    ),
    Music(149, "ヴィラン",
        [
            Creator("てにをは", "ttt")
        ],
        [
            Vocal("virtual", ["flower"]),
            Vocal("sekai", ["mafuyu", "mizuki"]),
            Vocal("another", ["mafuyu"]),
            Vocal("another", ["mizuki"]),
            Vocal("3DMV", ["mizuki", "mafuyu"])
        ],
        mDate(2020, 2, 7),
        mDate(2021, 12, 31),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=p9FJXfGHtDA"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm36332327"),
            mURL("3DMV", "https://www.youtube.com/watch?v=gQD4GfgIqZA", mDate(2021, 12, 31))
        ],
        Diff(6, 13, 18, 25, 29)
    ),
    Music(150, "サンドリヨン 10th Anniversary",
        [
            Creator("orange", "tff"),
            Creator("Dios/シグナルP", "ftt")
        ],
        [
            Vocal("virtual", ["miku", "kaito"])
        ],
        mDate(2018, 8, 27),
        mDate(2022, 1, 1),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=mXfnndMDFPs"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm33759466"),
            mURL("原曲(無印)", "https://www.nicovideo.jp/watch/sm4410647")
        ],
        Diff(6, 12, 17, 25, 28)
    ),
    Music(151, "少女レイ",
        [
            Creator("みきとP", "ttf")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["miku", "haruka", "shizuku"]),
            Vocal("3DMV", ["miku_more", "haruka", "shizuku"])
        ],
        mDate(2018, 7, 18),
        mDate(2022, 1, 2),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=JW3N-HvU0MA"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm33546451"),
            mURL("3DMV", "https://www.youtube.com/watch?v=NpOR2QwvjPk", mDate(2022, 1, 2))
        ],
        Diff(7, 14, 17, 24, 27)
    ),
    Music(152, "ガランド",
        [
            Creator("ピコン", "ttt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["len", "akito", "toya"])
        ],
        mDate(2018, 5, 11),
        mDate(2022, 1, 3),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=SXC2wO1XdMI"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm33189938")
        ],
        Diff(7, 13, 18, 24, 28),
    ),

    Music(153, "エンドマークに希望と涙を添えて",
        [
            Creator("cosMo@暴走P", "ftt")
        ],
        [
            Vocal("inst")
        ],
        mDate(2015, 12, 4),
        mDate(2022, 1, 8),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=r3FFOl-LAM8"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm27724530")
        ],
        Diff(9, 15, 21, 30, 34)
    ),
    Music(154, "the EmpErroR",
        [
            Creator("sasakure.UK", "ftt")
        ],
        [
            Vocal("inst")
        ],
        mDate(2020, 4, 28),
        mDate(2022, 1, 9),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=eImN9Ov-tJg"),
        ],
        Diff(9, 15, 21, 30, 34)
    ),
    Music(155, "Don't Fight The Music",
        [
            Creator("黒魔", "ftt")
        ],
        [
            Vocal("inst", [])
        ],
        null,
        mDate(2022, 1, 10),
        [
        ],
        Diff(9, 15, 21, 30, 34),
        "instOnly"
    ),
    Music(156, "にっこり^^調査隊のテーマ",
        [
            Creator("じーざす", "ttf"),
            Creator("ワンダフル☆オポチュニティ！", "fft")
        ],
        [
            Vocal("virtual", ["rin", "len"]),
            Vocal("sekai", ["emu", "miku", "tsukasa", "nene", "rui"]),
            Vocal("3DMV", ["emu", "tsukasa", "nene", "miku_wonder", "rui"])
        ],
        mDate(2022, 1, 19),
        mDate(2022, 1, 19),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=C_Fc1x_aeFQ"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm39919568"),
            mURL("3DMV", "https://www.youtube.com/watch?v=v7SYWS2jarw", mDate(2022, 1, 19))
        ],
        Diff(8, 12, 18, 26, 31),
        "newlyWritten_wonder"
    ),
    Music(157, "トリコロージュ",
        [
            Creator("煮ル果実", "ttt")
        ],
        [
            Vocal("virtual", ["flower"]),
            Vocal("sekai", ["kanade", "miku", "mafuyu", "ena", "mizuki"]),
            Vocal("another", ["miku"]),
            Vocal("2DMV", ["kanade", "miku_night", "mafuyu", "ena", "mizuki"])
        ],
        mDate(2022, 1, 29),
        mDate(2022, 1, 21),
        [
            mURL("バーチャル・シンガーver(flower)", "https://www.youtube.com/watch?v=BPh4m2VnfNo"),
            mURL("バーチャル・シンガーver(ミク)", "https://www.nicovideo.jp/watch/sm40094958"),
            mURL("2DMV", "https://www.youtube.com/watch?v=M_ijFuoASt0", mDate(2022, 1, 29))
        ],
        Diff(7, 13, 18, 24, 28),
        "newlyWritten_night"
    ),
    Music(158, "心拍数♯0822",
        [
            Creator("蝶々P", "ttt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["miku", "ichika", "honami"])
        ],
        mDate(2010, 8, 22),
        mDate(2022, 1, 24),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm11834233")
        ],
        Diff(5, 11, 16, 23, 26)
    ),
    Music(159, "うっせぇわ",
        [
            Creator("syudou", "ttt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["mafuyu", "mizuki"]),
            Vocal("another", ["mafuyu"]),
            Vocal("another", ["mizuki"])
        ],
        mDate(2020, 10, 23),
        mDate(2022, 1, 31),
        [
            mURL("バーチャル・シンガーver.", "https://www.youtube.com/watch?v=hh3W_FjUn9s"),
            mURL("Ado ver.", "https://www.youtube.com/watch?v=Qp3b-RXtz4w"),
            mURL("Ado ver.", "https://www.nicovideo.jp/watch/sm37761910")
        ],
        Diff(8, 12, 17, 24, 28)
    ),
    Music(160, "踊",
        [
            Creator("Giga", "ftt"),
            Creator("TeddyLoid", "ftt"),
            Creator("DECO*27", "tff")
        ],
        [
            Vocal("virtual", ["rin", "len"]),
            Vocal("sekai", ["kohane", "an"]),
            Vocal("another", ["kohane"]),
            Vocal("another", ["an"])
        ],
        mDate(2021, 4, 27),
        mDate(2022, 2, 4),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=QuLwvlw6_uU"),
            mURL("Ado ver.", "https://www.youtube.com/watch?v=YnSW8ian29w"),
            mURL("Ado ver.", "https://www.nicovideo.jp/watch/sm38668379")
        ],
        Diff(6, 13, 18, 26, 29)
    ),
    Music(161, "君色マリンスノウ",
        [
            Creator("カルロス袴田(サイゼP)", "ttt")
        ],
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2021, 12, 28),
        mDate(2022, 2, 5),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=NwSriMki_UA"),
            mURL("原曲", "https://www.nicovideo.jp/watch/so39817429")
        ],
        Diff(9, 14, 19, 27, 31)
    ),
    Music(162, "愛して愛して愛して",
        [
            Creator("きくお", "ttt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["miku", "mafuyu", "ena"]),
            Vocal("3DMV", ["miku_night", "ena", "mafuyu"])
        ],
        mDate(2015, 3, 6),
        mDate(2022, 2, 7),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=NTrm_idbhUk"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm25724827"),
            mURL("3DMV", "https://www.youtube.com/watch?v=DsFlCC96EgU", mDate(2022, 2, 7))
        ],
        Diff(5, 12, 16, 25, 28)
    ),
    Music(163, "Flyer!",
        [
            Creator("Chinozo", "ttt")
        ],
        [
            Vocal("virtual", ["flower"]),
            Vocal("sekai", ["kohane", "len", "an", "akito", "toya"]),
            Vocal("another", ["miku"]),
            Vocal("3DMV", ["kohane", "toya", "an", "akito", "len"])
        ],
        mDate(2022, 2, 16),
        mDate(2022, 2, 16),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=nfpYhYtHuKo"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm40047025"),
            mURL("3DMV", "https://www.youtube.com/watch?v=5fQRNjyRuSY", mDate(2022, 2, 16))
        ],
        Diff(9, 12, 18, 24, 29),
        "newlyWritten_vivid"
    ),
    Music(164, "Peaky Peaky",
        [
            Creator("みきとP", "ttt")
        ],
        [
            Vocal("sekai", ["shiho", "ichika", "kaito", "saki", "honami"]),
            Vocal("2DMV", ["shiho", "ichika", "kaito", "saki", "honami"])
        ],
        mDate(2022, 2, 26),
        mDate(2022, 2, 18),
        [
            mURL("バーチャル・シンガーver", "https://www.youtube.com/watch?v=GWuI8LXceYc"),
            mURL("2DMV", "https://www.youtube.com/watch?v=IPIwkhKdQxM", mDate(2022, 2, 26))
        ],
        Diff(6, 12, 18, 25, 28),
        "newlyWritten_leo"
    ),
    Music(165, "ジウダス",
        [
            Creator("すこやか大聖堂", "ttt")
        ],
        [
            Vocal("virtual", ["kaito"])
        ],
        mDate(2021, 11, 27),
        mDate(2022, 2, 21),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=3pl9alka_-A"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm39675720")
        ],
        Diff(7, 12, 18, 25, 28),
        "contest"
    ),
    Music(166, "ナンセンス文学",
        [
            Creator("Eve", "ttf"),
            Creator("Numa", "fft")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["len", "tsukasa", "rui"]),
            Vocal("another", ["tsukasa"]),
            Vocal("another", ["rui"]),
            Vocal("2DMV", ["len", "tsukasa", "rui"])
        ],
        mDate(2017, 5, 19),
        mDate(2022, 2, 24),
        [
            mURL("原曲", "https://www.nicovideo.jp/watch/sm31241401"),
            mURL("Eve ver.", "https://www.youtube.com/watch?v=OskXF3s0UT8"),
            mURL("2DMV", "https://www.youtube.com/watch?v=aFx6y9HxDt0", mDate(2022, 2, 24))
        ],
        Diff(7, 11, 18, 25, 29)
    ),
    Music(167, "心予報",
        [
            Creator("Eve", "ttf"),
            Creator("TAKU INOUE", "fft"),
            Creator("Numa", "fft")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["miku", "minori", "haruka", "airi", "shizuku"]),
            Vocal("another", ["minori", "haruka"]),
            Vocal("another", ["airi", "shizuku"])
        ],
        mDate(2020, 1, 30),
        mDate(2022, 3, 2),
        [
            mURL("Eve ver.", "https://www.youtube.com/watch?v=dJf4wCdLU18")
        ],
        Diff(6, 12, 18, 24, 28)
    ),
    Music(168, "僕らまだアンダーグラウンド",
        [
            Creator("Eve", "ttf"),
            Creator("Numa", "fft")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["miku", "ichika", "shiho"]),
            Vocal("another", ["shiho"]),
            Vocal("2DMV", ["miku_leo", "ichika", "shiho"])
        ],
        mDate(2019, 1, 24),
        mDate(2022, 3, 4),
        [
            mURL("Eve ver.", "https://www.youtube.com/watch?v=nBteO-bU78Y"),
            mURL("2DMV", "https://www.youtube.com/watch?v=eb46opRRyLc", mDate(2022, 3, 4))
        ],
        Diff(7, 12, 18, 25, 28)
    ),
    Music(169, "Miku",
        [
            Creator("Peter B", "tff"),
            Creator("Ary W", "tff"),
            Creator("Josh K", "tff"),
            Creator("David M", "tff"),
            Creator("Stella M", "tff"),
            Creator("Anamanaguchi", "ftt")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("3DMV", ["minori", "kanade", "tsukasa", "kohane", "ichika", "miku"])
        ],
        mDate(2016, 5, 28),
        mDate(2022, 3, 9),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=NocXEwsJGOQ"),
            mURL("3DMV", "https://www.youtube.com/watch?v=Z21UcyNdXSQ", mDate(2022, 3, 9))
        ],
        Diff(6, 12, 17, 24, 28)
    ),
    Music(170, "メタモリボン",
        [
            Creator("emon(Tes.)", "ttt"),
            Creator("Tudiken", "tff")
        ],
        [
            Vocal("sekai", ["shizuku", "rin", "minori", "haruka", "airi"])
        ],
        mDate(2022, 3, 18),
        mDate(2022, 3, 11),
        [
            mURL("2DMV", "https://www.youtube.com/watch?v=0BHY0Gs0ZZM", mDate(2022, 3, 18))
        ],
        Diff(5, 11, 16, 23, 26),
        "newlyWritten_more"
    ),
    Music(171, "いーあるふぁんくらぶ",
        [
            Creator("みきとP", "ttt")
        ],
        [
            Vocal("virtual", ["gumi", "rin"]),
            Vocal("sekai", ["rin", "tsukasa", "emu", "nene", "rui"]),
            Vocal("3DMV", ["rin", "tsukasa", "nene", "emu", "rui"])
        ],
        mDate(2012, 8, 15),
        mDate(2022, 3, 14),
        [
            mURL("原曲", "https://www.youtube.com/watch?v=oBgADhsOoog"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm18623327"),
            mURL("3DMV", "https://www.youtube.com/watch?v=v_VDb-gxF5Y", mDate(2022, 3, 14))
        ],
        Diff(6, 12, 17, 24, 28)
    ),
];
const future_musics = [
    Music(172, "ONESELF",
        [
            Creator("Twinfield", "fff")
        ],
        [
            Vocal("virtual", ["miku"])
        ],
        mDate(2022, 1, 31),
        null,
        [
            mURL("原曲", "https://www.youtube.com/watch?v=0ahJ3_4hcL0"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm39972552")
        ],
        Diff(),
        "contest"
    ),

    Music(173, "書き下ろし楽曲(バルーン)",
        [
            Creator("バルーン", "fff")
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
    Music(174, "雨とペトラ",
        [
            Creator("バルーン", "ttt")
        ],
        [
            Vocal("virtual", ["flower"]),
            Vocal("sekai", ["len", "akito", "toya"])
        ],
        mDate(2017, 3, 9),
        null,
        [
            mURL("原曲", "https://www.youtube.com/watch?v=PdfdOhYVU4"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm30789907")
        ],
        Diff()
    ),
    Music(175, "アイデンティティ",
        [
            Creator("Kanaria", "fff")
        ],
        [
            Vocal("virtual", ["gumi", "miku"]),
            Vocal("sekai", ["miku", "kanade"])
        ],
        mDate(2022, 1, 9),
        null,
        [
            mURL("原曲", "https://www.youtube.com/watch?v=M9moY0hEJRE"),
            mURL("セカイVer.", "https://www.youtube.com/watch?v=YsSShYaKOvk", mDate(2022, 1, 10))
        ],
        Diff(),
        "cupNoodle"
    ),
    Music(176, "サラマンダー",
        [
            Creator("DECO*27", "fff")
        ],
        [
            Vocal("virtual", ["miku"]),
            Vocal("sekai", ["miku", "akito", "ena"])
        ],
        mDate(2022, 1, 7),
        null,
        [
            mURL("原曲", "https://www.youtube.com/watch?v=-H2PCK7DJsQ"),
            mURL("セカイver", "https://www.youtube.com/watch?v=babaG-xuBQM")
        ],
        Diff(),
        "cupNoodle"
    ),
    Music(177, "青色絵具",
        [
            Creator("くじら", "fff")
        ],
        [
            Vocal("virtual", ["miku", "luka", "meiko"]),
            Vocal("sekai", ["miku", "shiho", "shizuku"])
        ],
        mDate(2022, 1, 20),
        null,
        [
            mURL("原曲", "https://www.youtube.com/watch?v=_j5rd9kZIZw"),
            mURL("セカイver.", "https://www.youtube.com/watch?v=a-Xnb5Iw6Is")
        ],
        Diff(),
        "cupNoodle"
    ),
    Music(178, "コスモスパイス",
        [
            Creator("ピノキオピー", "fff")
        ],
        [
            Vocal("virtual", ["miku", "rin", "len"]),
            Vocal("sekai", ["miku", "saki", "tsukasa"])
        ],
        mDate(2022, 1, 26),
        null,
        [
            mURL("原曲", "https://www.youtube.com/watch?v=pu1gbwsB9Os"),
            mURL("原曲", "https://www.nicovideo.jp/watch/sm39948783"),
            mURL("セカイver.", "https://www.youtube.com/watch?v=0qb27SBWZ38")
        ],
        Diff(),
        "cupNoodle"
    ),
    Music(179, "徳川カップヌードル禁止令",
        [
            Creator("Mitchie M", "fff")
        ],
        [
            Vocal("sekai", ["nene", "nenerobo", "mikudayo", "len", "kaito"])
        ],
        mDate(2022, 2, 16),
        null,
        [
            mURL("セカイver.", "https://www.youtube.com/watch?v=jPXAgWkqbo4")
        ],
        Diff(),
        "cupNoodle"
    ),
];
/*
    Music(000, "",
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
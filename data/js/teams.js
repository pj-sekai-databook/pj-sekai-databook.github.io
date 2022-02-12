const teams = [
    Team(["ichika", "shiho", "ichika", "shiho", "kanade"],
        ["いつも同じご飯チーム"]
    ),
    Team(["ichika", "ichika", "shiho", "nene", "kanade"],
        ["実は趣味が合いそうチーム"]
    ),
    Team(["airi", "miku_leo", "saki", "saki", "tsukasa"],
        ["天馬家チーム"]
    ),
    Team(["ena", "ichika", "kohane", "toya", "ichika"],
        ["秘めた想いは熱いチーム"]
    ),
    Team(["kohane", "emu", "kohane", "ichika", "rui"],
        ["発想が奇想天外チーム", "ひとりだけ学校違うチーム", "サニサニとハムハムチーム", "たい焼き真ん中から食べるチーム",
            "フェニラン好きチーム"]
    ),
    Team(["kohane", "ena", "miku_wonder", "kanade", "ena"],
        ["わたしが認めるよチーム", "絵を見てくれてありがとうチーム"]
    ),
    Team(["kohane", "tsukasa", "minori", "toya", "rui"],
        ["飼育委員会チーム", "秘めた想いは熱いチーム", "尊敬と親愛チーム", "オレにもNGはあるぞチーム", "小動物チーム",
            "ドローンで追跡チーム", "トッピングありとブラックチーム", "兄弟のような距離感チーム"]
    ),
    Team(["emu", "akito", "kohane", "miku_night", "rin_vivid"],
        ["ひとりだけ学校違うチーム", "ストリートキュートチーム", "サニサニとハムハムチーム", "フェニラン好きチーム",
            "ハムハムと猫かぶりチーム", "誰かさんを思い出すチーム"]
    ),
    Team(["ichika", "luka", "tsukasa", "rin", "nene"],
        ["歌の練習チーム"]
    ),
    Team(["akito", "miku_vivid", "kohane", "minori", "kanade"],
        ["ストイックに努力チーム", "高校で初めてできた友達チーム", "小動物チーム", "薄色ツインテチーム", "誰に何を言われてもチーム",
            "ハムハムと猫かぶりチーム", "わんちゃんにびっくりチーム", "飼育委員会チーム"]
    ),
    Team(["kanade", "ichika", "ichika", "miku", "mafuyu"],
        ["必ず救うからチーム"]
    ),
    Team(["mafuyu", "luka", "rui", "saki", "kohane"],
        ["焦らなくていいのよチーム", "ストレートうらやましいなチーム", "チームパープル"]
    ),
    Team(["kanade", "honami", "kanade", "kanade", "tsukasa"],
        ["お世話します・されますチーム"]
    ),
    Team(["tsukasa", "akito", "minori", "rui", "ichika"],
        ["わんちゃんにびっくりチーム", "野菜なしでも生きられるよチーム", "オレにもNGはあるぞチーム",
            "野菜と仲良くなれないチーム", "ドローンで追跡チーム", "チームミク好き", "弱点は野菜チーム"]
    ),
    Team(["kanade", "mizuki", "kanade", "ichika", "miku_wonder"],
        ["オススメ作品教えてチーム"]
    ),
    Team(["kohane", "an", "rui", "ena", "kanade"],
        ["運命の出会いチーム", "絵を見てくれてありがとうチーム", "Vividsチーム", "わたしが認めるよチーム", "最高の相棒"]
    ),
    Team(["kanade", "kanade", "minori", "akito", "haruka"],
        ["いつでもイェーイ！チーム"]
    ),
    Team(["rui", "akito", "miku_vivid", "akito", "rui"],
        ["勝負ごとには真剣チーム"]
    ),
    Team(["kanade", "an", "haruka", "rui", "shizuku"],
        ["実は親友チーム", "見た目はクールチーム", "小学校からのライバルチーム", "心許せる親友チーム"]
    ),
    Team(["mafuyu", "tsukasa", "luka", "minori", "ichika"],
        ["チーム学級委員長"]
    ),
    Team(["honami", "rui", "miku_wonder", "minori", "miku_night"],
        ["頭の中が大爆発チーム", "犬のお散歩友達チーム", "ワンちゃん大好きチーム", "わんわん飼い主チーム"]
    ),
    Team(["mafuyu", "rui", "minori", "kohane", "mafuyu"],
        ["チームパープル", "飼育委員会チーム", "小動物チーム", "高校で初めてできた友達チーム"]
    ),
    Team(["rui", "rui", "tsukasa", "miku_wonder", "kohane"],
        ["ミクダヨー♪にびっくりチーム"]
    ),
    Team(["ichika", "rui", "saki", "ichika", "emu"],
        ["Leo/needの始まりチーム", "ストレートとくせっ毛チーム", "どんな時も笑顔チーム", "たい焼き真ん中から食べるチーム",
            "発想が奇想天外チーム"]
    ),
    Team(["mafuyu", "toya", "kohane", "mafuyu", "kohane"],
        ["トッピングありとブラックチーム"]
    ),
    Team(["emu", "kanade", "toya", "honami", "tsukasa"],
        ["宮女1-Bコンビチーム", "尊敬と親愛チーム", "いたれりつくせりチーム", "ごはんの時間ですよチーム", "みんなにありがとうチーム",
            "兄弟のような距離感チーム", "ええいどうにでもなれチーム", "アップルパイ天国チーム", "家事代行中チーム", "人の話を聞けチーム",
            "お世話します・されますチーム"]
    ),
    Team(["kanade", "miku_wonder", "luka", "mafuyu", "ichika"],
        ["必ず救うからチーム"]
    ),
    Team(["emu", "kaito_wonder", "kanade", "mafuyu", "honami"],
        ["家事代行中チーム", "お兄さんと遊ぼうチーム", "2月誕生日&記念日チーム", "不思議な先輩後輩チーム", "曲作りの要チーム",
            "ごはんの時間ですよチーム", "みんなにありがとうチーム", "センパイを笑顔にしたいチーム", "いたれりつくせりチーム"]
    ),
    Team(["kanade", "mafuyu", "kohane", "kohane", "miku_wonder"],
        ["必ず救うからチーム"]
    ),
    Team(["nene", "saki", "minori", "rui", "honami"],
        ["だって柔らかいんだもんチーム", "犬のお散歩友達チーム", "変なお隣さんチーム", "わんわん飼い主チーム", "ゆるふわヘアーチーム",
            "チームお隣さん"]
    ),
    Team(["rin", "rin", "minori", "ichika", "toya"],
        ["チームミク好き"]
    ),
    Team(["saki", "rin", "luka", "miku_night", "honami"],
        ["ゆるふわヘアーチーム", "だって柔らかいんだもんチーム"]
    ),
    Team(["an", "minori", "ichika", "airi", "rui"],
        ["チームブラック"]
    ),
    Team(["kohane", "len", "kohane", "honami", "minori"],
        ["小動物チーム", "わんわん飼い主チーム", "飼育委員会チーム", "高校で初めてできた友達チーム", "犬のお散歩友達チーム",
            "ワンちゃん大好きチーム"]
    ),
    Team(["rin_vivid", "akito", "honami", "miku_wonder", "kohane"],
        ["ストイックに努力チーム", "ハムハムと猫かぶりチーム", "ストリートキュートチーム", "誰かさんを思い出すチーム"]
    ),
    Team(["kanade", "saki", "shiho", "kanade", "rui"],
        ["チーム偏食家"]
    ),
    Team(["honami", "mafuyu", "emu", "ichika", "kohane"],
        ["好きなものはいくつでもチーム", "不思議な先輩後輩チーム", "アップルパイ天国チーム", "宮女1-Bコンビチーム",
            "みんなにありがとうチーム", "サニサニとハムハムチーム", "フェニラン好きチーム", "センパイを笑顔にしたいチーム"]
    ),
    Team(["an", "honami", "shiho", "kanade", "ichika"],
        ["お世話します・されますチーム"]
    ),
    Team(["miku_night", "kohane", "honami", "mizuki", "mafuyu"],
        ["ドキドキしたいじゃんかチーム", "ふわふわヘアーチーム", "2人だけの秘密チーム", "あやとりチーム", "落ち着く居場所チーム"]
    ),
    Team(["kanade", "ichika", "ena", "rin", "mafuyu"],
        ["実は同級生チーム"]
    ),
    Team(["haruka", "ena", "an", "minori", "honami"],
        ["わんわん飼い主チーム", "犬のお散歩友達チーム", "4月誕生日チーム", "心許せる親友チーム", "LOVE遥チーム", "実は親友チーム",
            "10月誕生日チーム", "小学校からのライバルチーム", "海のような景色の中でチーム", "ワンちゃん大好きチーム"]
    ),
    Team(["miku_leo", "rui", "ichika", "haruka", "miku_wonder"],
        ["チームツインギター"]
    ),
    Team(["mafuyu", "minori", "airi", "an", "ichika"],
        ["チームブラック", "アイドルガチ勢", "チームミク好き", "スパルタ指導チーム"]
    ),
    Team(["saki", "honami", "toya", "miku_vivid", "rui"],
        ["ゆるふわヘアーチーム"]
    ),
    Team(["mafuyu", "miku_night", "ichika", "rui", "kanade"],
        ["落ち着く居場所チーム", "2人だけの秘密チーム", "必ず救うからチーム", "チームまっしろ", "チームパープル",
            "曲作りの要チーム"]
    ),
    Team(["miku_vivid", "miku_night", "ena", "nene", "haruka"],
        ["お姉ちゃん力発揮チーム"]
    ),
    Team(["kanade", "saki", "ichika", "nene", "kohane"],
        ["Leo/needの始まりチーム", "いつも同じご飯チーム", "ストレートとくせっ毛チーム", "そこそこ口下手チーム", "一緒に歌の練習チーム",
            "人見知りと物静かチーム"]
    ),
    Team(["rui", "ena", "mafuyu", "miku_wonder", "ichika"],
        ["チームパープル"]
    ),
    Team(["ichika", "haruka", "kanade", "miku_night", "miku_leo"],
        ["いつも同じご飯チーム", "理想の先輩と後輩チーム", "チームまっしろ", "理想の先輩と後輩チーム", "秘密の特訓チーム",
            "チームツインギター"]
    ),
    Team(["kohane", "kanade", "airi", "miku_vivid", "minori"],
        ["小動物チーム"]
    ),
    Team(["ichika", "kanade", "toya", "kohane", "miku_wonder"],
        ["いつも同じご飯チーム", "トッピングありとブラックチーム", "秘めた想いは熱いチーム"]
    ),
    Team(["miku_leo", "minori", "miku_vivid", "ichika", "miku_leo"],
        ["秘密の特訓チーム", "理想の先輩と後輩チーム", "チームミク好き", "チームツインギター"]
    ),
    Team(["toya", "saki", "ichika", "miku_wonder", "airi"],
        ["Leo/needの始まりチーム"]
    ),
    Team(["miku_wonder", "kohane", "ichika", "kanade", "kanade"],
        ["いつも同じご飯チーム"]
    ),
    Team(["miku_wonder", "mafuyu", "ichika", "kanade", "len"],
        ["必ず救うからチーム", "いつも同じご飯チーム", "曲作りの要チーム"]
    ),
    Team(["miku_vivid", "miku_vivid", "rin", "saki", "tsukasa"],
        ["天馬家チーム"]
    ),
    Team(["kanade", "tsukasa", "airi", "ena", "emu"],
        ["決めポーズ持ちチーム", "わたしが認めるよチーム", "人の話を聞けチーム", "大切な親友チーム", "中学からの友達チーム",
            "気の置けない仲チーム"]
    ),
    Team(["kohane", "akito", "miku_vivid", "kanade", "mafuyu"],
        ["ハムハムと猫かぶりチーム"]
    ),
    Team(["miku_more", "kanade", "an", "ena", "luka"],
        ["わたしが認めるよチーム", "絵を見てくれてありがとうチーム"]
    ),
    Team(["kohane", "tsukasa", "ichika", "ichika", "miku_vivid"],
        ["誰に何を言われてもチーム"]
    ),
    Team(["miku_night", "miku_wonder", "miku_vivid", "mafuyu", "kanade"],
        ["必ず救うからチーム", "2人だけの秘密チーム", "曲作りの要チーム", "チームまっしろ", "落ち着く居場所チーム"]
    ),
    Team(["mafuyu", "saki", "kohane", "haruka", "tsukasa"],
        ["チーム☆ペガサス"]
    ),
    Team(["tsukasa", "kanade", "miku_wonder", "haruka", "miku_vivid"],
        ["ミクダヨー♪にびっくりチーム"]
    ),
    Team(["kohane", "an", "mafuyu", "minori", "rui"],
        ["小動物チーム"]
    ),
    Team(["ichika", "kohane", "miku_vivid", "kanade", "kanade"],
        ["薄色ツインテチーム", "誰に何を言われてもチーム", "いつも同じご飯チーム"]
    ),
    Team(["miku_vivid", "miku_leo", "tsukasa", "kohane", "ichika"],
        ["秘密の特訓チーム"]
    ),
    Team(["akito", "akito", "miku_wonder", "shiho", "toya"],
        ["いつでもセットチーム", "信頼度抜群の相棒チーム", "BAD DOGSチーム"]
    ),
    Team(["luka_leo", "ichika", "rui", "len", "rin"],
        ["緑とピンクのお花教えてチーム"]
    ),
    Team(["tsukasa", "minori", "rin_more", "shiho", "mizuki"],
        ["新米アイドルチーム", "一緒にステップアップ！チーム"]
    ),
    Team(["tsukasa", "toya", "kanade", "ena", "mizuki"],
        ["わたしが認めるよチーム"]
    ),
    Team(["haruka", "nene", "mafuyu", "kanade", "shiho"],
        ["クールビューティーチーム", "曲作りの要チーム", "実は趣味が合いそうチーム", "必ず救うからチーム"]
    ),
    Team(["shiho", "toya", "rin", "len", "mafuyu"],
        ["コーヒー飲めてカッコイイチーム", "ブラックで飲めるチーム", "実はなつかれてるチーム"]
    ),
    Team(["mafuyu", "kohane", "ichika", "an", "haruka"],
        ["実は親友チーム"]
    ),

    //ここからバチャシンのサブユニット確認済み

    Team(["kanade", "toya", "kohane", "rin_night", "ena"],
        ["素直じゃないよねチーム", "絵を見てくれてありがとうチーム", "ちょっぴりツンツンチーム", "トッピングありとブラックチーム",
            "髪の毛いじられチーム", "あの子をよろしくチーム", "秘めた想いは熱いチーム"]
    ),
    Team(["saki", "nene", "tsukasa", "toya", "kanade"],
        ["なんだかんだ信頼は厚いチーム"]
    ),
    Team(["rin_night", "kanade", "tsukasa", "miku_night", "rui"],
        ["チームまっしろ", "もうひとりぼっちじゃないチーム", "髪の毛いじられチーム", "誰もいないセカイチーム", "オレにもNGはあるぞチーム"]
    ),
    Team(["len_vivid", "miku_vivid", "honami", "kanade", "airi"],
        ["愛情一番チーム"]
    ),
    Team(["luka_wonder", "luka_leo", "akito", "mafuyu", "kanade"],
        ["曲作りの要チーム", "必ず救うからチーム", "表と裏がありますチーム"]
    ),
    Team(["kanade", "ena", "haruka", "rin_more", "rin_vivid"],
        ["絵を見てくれてありがとうチーム"]
    ),
    Team(["minori", "kanade", "haruka", "luka_wonder", "kaito_wonder"],
        ["海のような景色の中でチーム", "LOVE遥チーム", "2月誕生日&記念日チーム"]
    ),
    Team(["rui", "kohane", "kaito_wonder", "luka_leo", "miku_night"],
        ["迷い子達との語らいチーム"]
    ),
    Team(["kohane", "saki", "emu", "rin_night", "miku_night"],
        ["ひとりだけ学校違うチーム", "誰もいないセカイチーム", "もうひとりぼっちじゃないチーム", "フェニラン好きチーム",
            "どんな時も笑顔チーム"]
    ),
    Team(["minori", "honami", "honami", "ichika", "toya"],
        ["チームミク好き"]
    ),
    Team(["rin", "ichika", "ichika", "kanade", "kanade"],
        ["いつも同じご飯チーム"]
    ),
    Team(["kanade", "toya", "ena", "minori", "kohane"],
        ["秘めた想いは熱いチーム"]
    ),
    Team(["kanade", "mafuyu", "len_vivid", "mafuyu", "an"],
        ["ケンカもほどほどにねチーム", "まるで仲良し姉弟？チーム", "曲作りの要チーム", "必ず救うからチーム"]
    ),
    Team(["airi", "nene", "minori", "saki", "kanade"],
        ["隠れファンチーム"]
    ),
    Team(["kohane", "meiko_vivid", "miku_night", "ichika", "kanade"],
        ["チームまっしろ", "いつも同じご飯チーム", "今日のトッピングは？チーム", "ほのぼのカフェタイムチーム"]
    ),
    Team(["nene", "mizuki", "rui", "len_wonder", "kanade"],
        ["楽しい装置で遊ぼうチーム"]
    ),
    Team(["kanade", "ichika", "ichika", "kanade", "emu"],
        ["いつも同じご飯チーム"]
    ),
    Team(["ichika", "ichika", "miku_night", "nene", "ichika"],
        ["歌の練習チーム"]
    ),
    Team(["emu", "miku_night", "kanade", "honami", "mafuyu"],
        ["体育祭二人三脚チーム", "いたれりつくせりチーム", "みんなにありがとうチーム", "必ず救うからチーム", "ごはんの時間ですよチーム",
            "チームデッドヒート", "アップルパイ天国チーム", "チームまっしろ", "家事代行中チーム", "宮女1-Bコンビチーム"]
    ),
    Team(["ichika", "miku_vivid", "kohane", "an", "miku_night"],
        ["薄色ツインテチーム"]
    ),
    Team(["haruka", "kohane", "honami", "emu", "mafuyu"],
        ["サニサニとハムハムチーム", "ひとりだけ学校違うチーム", "宮女1-Bコンビチーム", "不思議な先輩後輩チーム", "体育祭二人三脚チーム",
            "アップルパイ天国チーム", "いたれりつくせりチーム"]
    ),
    Team(["rui", "kohane", "kanade", "ichika", "saki"],
        ["Leo/needの始まりチーム"]
    ),
    Team(["kanade", "miku_vivid", "shizuku", "saki", "emu"],
        ["チームグリーン", "どんな時も笑顔チーム"]
    ),
    Team(["miku_leo", "emu", "rui", "mafuyu", "kanade"],
        ["たい焼き真ん中から食べるチーム"]
    ),
    Team(["ichika", "miku_night", "miku_vivid", "emu", "kohane"],
        ["誰に何を言われてもチーム", "薄色ツインテチーム", "フェニラン好きチーム", "ひとりだけ学校違うチーム", "サニサニとハムハムチーム"]
    ),
    Team(["emu", "saki", "kohane", "ichika", "luka_more"],
        ["ひとりだけ学校違うチーム", "Leo/needの始まりチーム", "フェニラン好きチーム", "サニサニとハムハムチーム", "ストレートとくせっ毛チーム"]
    ),
    Team(["airi", "emu", "toya", "toya", "meiko_vivid"],
        ["大人数きょうだいチーム"]
    ),
    Team(["ichika", "toya", "emu", "len_wonder", "mizuki"],
        ["覚める暇もなくチーム", "ぬいぐるみとお友達チーム"]
    ),
    Team(["mafuyu", "kanade", "luka_leo", "kanade", "miku_night"],
        ["必ず救うからチーム"]
    ),
    Team(["kohane", "minori", "saki", "emu", "shiho"],
        ["小動物になつかれてチーム", "飼育委員会チーム", "うさぎさんかわいいねチーム", "ポジティブシンキングチーム", "フェニラン好きチーム",
            "サニサニとハムハムチーム", "しつこいけどふり払えないチーム"]
    ),
    Team(["kaito_wonder", "kanade", "kanade", "akito", "mafuyu"],
        ["表と裏がありますチーム"]
    ),
    Team(["mizuki", "miku_night", "airi", "emu", "ichika"],
        ["あやとりチーム", "8月誕生日&記念日チーム", "ふわふわヘアーチーム"]
    ),
    Team(["an", "toya", "toya", "ichika", "kanade"],
        ["チームブラック"]
    ),
    Team(["an", "tsukasa", "mizuki", "toya", "mafuyu"],
        ["音楽センスは親譲りチーム"]
    ),
    Team(["ichika", "akito", "miku_leo", "mizuki", "miku_leo"],
        ["8月誕生日&記念日チーム", "コーデ知識抜群チーム", "絵名の弟くんチーム", "ファッションリーダーチーム", "チームツインギター",
            "弟って呼ぶのやめろチーム", "マイファッションを貫くチーム", "秘密の特訓チーム", "理想の先輩と後輩チーム"]
    ),
    Team(["ichika", "akito", "mafuyu", "saki", "mafuyu"],
        ["ストレートとくせっ毛チーム"]
    ),
    Team(["kanade", "mafuyu", "mafuyu", "mizuki", "kanade"],
        ["必ず救うからチーム", "実はシンパシーを感じてるチーム", "曲作りの要チーム", "オススメ作品教えてチーム"]
    ),
    Team(["kohane", "emu", "rui", "haruka", "akito"],
        ["ひとりだけ学校違うチーム"]
    ),
    Team(["kohane", "rin_vivid", "mizuki", "kanade", "kohane"],
        ["ストリートキュートチーム", "オススメ作品教えてチーム"]
    ),
    Team(["kohane", "rui", "an", "emu", "ena"],
        ["たい焼き真ん中から食べるチーム"]
    ),
    Team(["emu", "emu", "mizuki", "kohane", "minori"],
        ["小動物チーム", "飼育委員会チーム", "サニサニとハムハムチーム", "フェニラン好きチーム", "高校で初めてできた友達チーム"]
    ),
    Team(["tsukasa", "emu", "ena", "kohane", "kanade"],
        ["サニサニとハムハムチーム"]
    ),
    Team(["rin_night", "ena", "emu", "haruka", "miku_vivid"],
        ["ちょっぴりツンツンチーム", "素直じゃないよねチーム"]
    ),
    Team(["haruka", "ichika", "shizuku", "luka_leo", "saki"],
        ["元アイドルと普通の高校生チーム"]
    ),
    Team(["haruka", "kohane", "rin_night", "ena", "mafuyu"],
        ["素直じゃないよねチーム", "ケンカするほど仲がいい？チーム", "ちょっぴりツンツンチーム", "ちょっぴりクセっ毛チーム"]
    ),
    Team(["kanade", "mafuyu", "tsukasa", "ena", "miku_vivid"],
        ["クラスのリーダーチーム"]
    ),
    Team(["kanade", "mafuyu", "rui", "rin_night", "tsukasa"],
        ["ドローンで追跡チーム", "ちょっぴりクセっ毛チーム", "あの子をよろしくチーム", "曲作りの要チーム", "チームパープル",
            "オレにもNGはあるぞチーム"]
    ),
    Team(["rin_night", "kanade", "mafuyu", "ena", "minori"],
        ["実は同級生チーム", "4月誕生日チーム", "ケンカするほど仲がいい？チーム", "素直じゃないよねチーム", "わたしが認めるよチーム",
            "絵を見てくれてありがとうチーム", "ちょっぴりツンツンチーム", "必ず救うからチーム"]
    ),
    Team(["kanade", "kanade", "mafuyu", "rui", "meiko_wonder"],
        ["必ず救うからチーム"]
    ),
    Team(["kanade", "miku_wonder", "emu", "saki", "kanade"],
        ["超ハイテンションチーム", "どんな時も笑顔チーム"]
    ),
    Team(["miku_more", "tsukasa", "rin_vivid", "kanade", "nene"],
        ["毒舌のえじきチーム"]
    ),
    Team(["kanade", "rui", "miku_more", "miku_vivid", "len_wonder"],
        ["機械いじりチーム", "楽しい装置で遊ぼうチーム"]
    ),
    Team(["mafuyu", "luka_leo", "ichika", "emu", "akito"],
        ["緑とピンクのお花教えてチーム"]
    ),
    Team(["nene", "miku_vivid", "len_wonder", "toya", "kanade"],
        ["お姉さんになれちゃう？チーム", "チームわたあめ屋さん", "ちゃんと話したことないチーム", "神高1-Bコンビチーム",
            "コーヒー通チーム", "実は趣味が合いそうチーム", "気が散るからあっち行ってチーム", "クールな安定感チーム"]
    ),
    Team(["ichika", "kohane", "len_wonder", "emu", "miku_wonder"],
        ["フェニラン好きチーム", "ぬいぐるみとお友達チーム", "覚める暇もなくチーム", "超ハイテンションチーム",
            "ひとりだけ学校違うチーム"]
    ),
    Team(["kohane", "len_wonder", "rui", "rui", "ichika"],
        ["楽しい装置で遊ぼうチーム", "機械いじりチーム"]
    ),
    Team(["kanade", "an", "mafuyu", "tsukasa", "toya"],
        ["クラスのリーダーチーム"]
    ),
    Team(["kanade", "mafuyu", "rui", "len_wonder", "miku_wonder"],
        ["必ず救うからチーム", "楽しい装置で遊ぼうチーム", "頭の中が大爆発チーム", "チームパープル", "曲作りの要チーム"]
    ),
    Team(["ichika", "rui", "mizuki", "miku_wonder", "mafuyu"],
        ["チームパープル"]
    ),
    Team(["len_vivid", "emu", "miku_wonder", "shizuku", "minori"],
        ["超ハイテンションチーム", "チームグリーン", "天然ぎみチーム", "努力家チーム"]
    ),
    Team(["shiho", "an", "minori", "kanade", "ichika"],
        ["チームミク好き"]
    ),
    Team(["tsukasa", "saki", "kanade", "miku_wonder", "shizuku"],
        ["天馬家チーム", "チーム☆ペガサス", "チームグリーン", "ケンカ中も挨拶はするチーム", "悪口の語彙力皆無チーム",
            "ミクダヨー♪にびっくりチーム"]
    ),
    Team(["akito", "an", "toya", "kohane", "emu"],
        ["伝説の夜を超えようチーム"]
    ),
    Team(["miku_more", "mafuyu", "luka_leo", "shizuku", "mafuyu"],
        ["ブルーグリーンのアイドルチーム", "宮女弓道部", "チームグリーン"]
    ),
    Team(["kanade", "kanade", "mafuyu", "miku_wonder", "mafuyu"],
        ["必ず救うからチーム"]
    ),
    Team(["emu", "an", "shizuku", "kohane", "saki"],
        ["フェニラン好きチーム", "Vividsチーム", "サニサニとハムハムチーム", "ひとりだけ学校違うチーム", "運命の出会いチーム",
            "どんな時も笑顔チーム", "最高の相棒"]
    ),
    Team(["miku_more", "mafuyu", "miku_vivid", "mafuyu", "emu"],
        ["センパイを笑顔にしたいチーム"]
    ),
    Team(["ena", "airi", "tsukasa", "akito", "rin_vivid"],
        ["明日起こしてチーム", "食べ物の好み一緒チーム", "突っ込まずにはいられないチーム", "ある意味苦労性チーム", "気の置けない仲チーム",
            "誰かさんを思い出すチーム", "大切な親友チーム", "決めポーズ持ちチーム"]
    ),
    Team(["kanade", "toya", "ichika", "ena", "honami"],
        ["家事代行中チーム"]
    ),
    Team(["honami", "kanade", "rin_more", "kaito_wonder", "luka_leo"],
        ["2月誕生日&記念日チーム"]
    ),
    Team(["kohane", "saki", "rin_more", "mafuyu", "airi"],
        ["アイドルは笑顔でチーム", "元気印のパワフルアイドルチーム", "隠れファンチーム", "3月誕生日チーム"]
    ),
    Team(["miku_wonder", "ena", "nene", "kohane", "nene"],
        ["もっとお話ししたいなチーム"]
    ),
    Team(["toya", "miku_night", "saki", "airi", "kohane"],
        ["秘めた想いは熱いチーム", "隠れファンチーム", "3月誕生日チーム", "トッピングありとブラックチーム"]
    ),
    Team(["kanade", "kanade", "luka_more", "kanade", "minori"],
        ["チームお魚さんのボックス"]
    ),
    Team(["len_wonder", "miku_night", "airi", "mafuyu", "kanade"],
        ["落ち着く居場所チーム", "曲作りの要チーム", "2人だけの秘密チーム", "チームまっしろ", "必ず救うからチーム"]
    ),
    Team(["rui", "miku_leo", "shizuku", "kohane", "mafuyu"],
        ["チームグリーン"]
    ),
    Team(["tsukasa", "len_vivid", "miku_vivid", "shizuku", "miku_night"],
        ["チームグリーン"]
    ),
    Team(["kohane", "mafuyu", "emu", "kanade", "shiho"],
        ["曲作りの要チーム", "ひとりだけ学校違うチーム", "体育祭二人三脚チーム", "チームデッドヒート", "不思議な先輩後輩チーム",
            "サニサニとハムハムチーム", "フェニラン好きチーム", "センパイを笑顔にしたいチーム"]
    ),
    Team(["kanade", "saki", "kohane", "kanade", "an"],
        ["運命の出会いチーム"]
    ),
    Team(["kanade", "ichika", "kohane", "shiho", "rui"],
        ["どちらかと言えばツッコミチーム", "いつも同じご飯チーム", "同じレベルになりたいチーム"]
    ),
    Team(["an", "rin_vivid", "tsukasa", "ichika", "saki"],
        ["天馬家チーム"]
    ),
    Team(["minori", "tsukasa", "luka_leo", "mafuyu", "rin_more"],
        ["クラスのリーダーチーム", "一緒にステップアップ！チーム", "新米アイドルチーム"]
    ),
    Team(["kanade", "miku_night", "ichika", "mafuyu", "haruka"],
        ["落ち着く居場所チーム"]
    ),
    Team(["ena", "akito", "shiho", "rui", "rin_more"],
        ["明日起こしてチーム", "才能とか関係ないチーム", "食べ物の好み一緒チーム", "明日起こしてチーム", "東雲家チーム"]
    ),
    Team(["ena", "kanade", "ichika", "mafuyu", "rui"],
        ["曲作りの要チーム"]
    ),
    Team(["shizuku", "rin_more", "an", "mizuki", "kohane"],
        ["最高の相棒", "幽霊のウワサチーム", "クラスで一番気が合うチーム", "そよ風と太陽のぽかぽかチーム", "Vividsチーム",
            "神高1-Aコンビチーム"]
    ),
    Team(["mizuki", "miku_wonder", "kohane", "ichika", "ena"],
        ["なんだかんだ仲良しチーム"]
    ),
    Team(["mizuki", "rui", "kanade", "ichika", "kohane"],
        ["チーム腐れ縁"]
    ),
    Team(["saki", "rui", "kohane", "miku_wonder", "luka_leo"],
        ["ストレートうらやましいなチーム"]
    ),
    Team(["miku_leo", "haruka", "kanade", "rin_more", "mizuki"],
        ["フィジカルアイドルチーム", "オススメ作品教えてチーム"]
    ),
    Team(["mafuyu", "rin_wonder", "ichika", "kaito_wonder", "luka_leo"],
        ["練習は厳しいわよチーム"]
    ),
    Team(["rin_more", "honami", "nene", "nene", "kanade"],
        ["実は趣味が合いそうチーム", "ごはんの時間ですよチーム", "お世話します・されますチーム", "家事代行中チーム"]
    ),
    Team(["ena", "tsukasa", "mafuyu", "emu", "ichika"],
        ["チーム学級委員長"]
    ),
    Team(["nene", "miku_vivid", "miku_wonder", "kohane", "rin"],
        ["誰に何を言われてもチーム", "薄色ツインテチーム", "もっとお話ししたいなチーム", "ネネロボちゃんと遊ぼチーム"]
    ),
    Team(["rui", "emu", "saki", "emu", "nene"],
        ["変なお隣さんチーム"]
    ),
    /* ここからSTRAY BAD DOG */
    Team(["ichika", "rui", "kohane", "kohane", "emu"],
        ["フェニラン好きチーム"]
    ),
    Team(["kanade", "rin_wonder", "mizuki", "len_vivid", "miku_night"],
        ["チーム独りんぼ"]
    ),
    Team(["an", "rui", "shiho", "ichika", "akito"],
        ["チームブラック", "どちらかと言えばツッコミチーム", "オレの私の相棒が最高チーム"]
    ),
    Team(["an", "an", "miku_vivid", "kanade", "rin_more"],
        ["オシャレガールチーム"]
    ),
    Team(["mafuyu", "akito", "minori", "ichika", "an"],
        ["チームブラック", "チームミク好き"]
    ),
    Team(["an", "akito", "mafuyu", "kanade", "mizuki"],
        ["神高1-Aコンビチーム"]
    ),
    Team(["ichika", "ena", "akito", "akito", "ichika"],
        ["東雲家チーム", "明日起こしてチーム"]
    ),
    Team(["tsukasa", "akito", "ichika", "kanade", "ichika"],
        ["いつも同じご飯チーム", "チーム顔は知らずとも"]
    ),
    Team(["kaito_vivid", "ena", "ena", "kohane", "toya"],
        ["秘めた想いは熱いチーム"]
    ),
    Team(["luka_more", "kohane", "toya", "kohane", "airi"],
        ["トッピングありとブラックチーム", "3月誕生日チーム"]
    ),
    Team(["toya", "kaito_vivid", "ena", "len_vivid", "kohane"],
        ["トッピングありとブラックチーム"]
    ),
    Team(["akito", "shizuku", "akito", "akito", "kohane"],
        ["ハムハムと猫かぶりチーム", "人知れない努力家チーム"]
    ),
    Team(["kanade", "an", "akito", "rui", "kaito_vivid"],
        ["2月誕生日&記念日チーム"]
    ),
    Team(["kaito_wonder", "kohane", "minori", "luka_leo", "len_wonder"],
        ["飼育委員会チーム"]
    ),
    Team(["akito", "an", "ichika", "shizuku", "kaito_wonder"],
        ["ヤマ勘と一夜漬けが頼りチーム"]
    ),
    Team(["akito", "mizuki", "kohane", "kaito_wonder", "toya"],
        ["BAD DOGSチーム"]
    ),
    /*
    Team(["akito", "an", "an", "emu", "tsukasa"],
        ["赤点だけは避けたいチーム"]
    ),
    */
    Team(["an", "kaito_wonder", "kanade", "akito", "kohane"],
        ["Vividsチーム", "2月誕生日&記念日チーム"]
    ),
    Team(["kanade", "kaito_vivid", "kanade", "kaito_wonder", "tsukasa"],
        ["2月誕生日&記念日チーム"]
    ),
    Team(["miku_wonder", "an", "kohane", "mafuyu", "miku_night"],
        ["運命の出会いチーム", "Vividsチーム"]
    ),
    Team(["haruka", "akito", "an", "kaito_wonder", "an"],
        ["実は親友チーム"]
    ),
    Team(["akito", "kanade", "kohane", "kanade", "kanade"],
        ["ハムハムと猫かぶりチーム", "ストイックに努力チーム"]
    ),
    Team(["kohane", "len_vivid", "ichika", "akito", "luka_leo"],
        ["ストリートライブの先輩チーム", "ハムハムと猫かぶりチーム"]
    ),
    Team(["ena", "toya", "shiho", "rui", "kanade"],
        ["天才肌チーム"]
    ),
    Team(["nene", "meiko_wonder", "kohane", "miku_more", "ena"],
        ["慎重と豪快チーム"]
    ),
    Team(["mafuyu", "an", "kohane", "akito", "len_vivid"],
        ["表と裏がありますチーム"]
    ),
    Team(["kohane", "akito", "miku_more", "kanade", "honami"],
        ["ストイックに努力チーム", "お世話します・されますチーム"]
    ),
    Team(["kohane", "nene", "toya", "an", "luka_leo"],
        ["トッピングありとブラックチーム", "Vividsチーム"]
    ),
    Team(["an", "kohane", "an", "minori", "toya"],
        ["飼育委員会チーム"]
    ),
    Team(["kanade", "kohane", "kohane", "airi", "kaito_wonder"],
        ["2月誕生日&記念日チーム", "3月誕生日チーム"]
    ),
    Team(["haruka", "meiko_leo", "mafuyu", "akito", "toya"],
        ["BAD DOGSチーム"]
    ),
    Team(["airi", "airi", "kohane", "akito", "ena"],
        ["器用貧乏チーム", "東雲家チーム", "3月誕生日チーム"]
    ),
    Team(["an", "kohane", "minori", "akito", "rui"],
        ["Vividsチーム"]
    ),
    Team(["kaito_vivid", "kohane", "ichika", "ichika", "kanade"],
        ["2月誕生日&記念日チーム", "いつも同じご飯チーム"]
    ),
    Team(["kanade", "nene", "akito", "kanade", "akito"],
        ["実は趣味が合いそうチーム"]
    ),
    Team(["shizuku", "an", "kaito_wonder", "kohane", "toya"],
        ["運命の出会いチーム", "Vividsチーム", "魅力的なほくろチーム"]
    ),
    Team(["kaito_wonder", "toya", "toya", "honami", "kaito_vivid"],
        ["チームちゃんと頼らせよう"]
    ),
    Team(["kohane", "rui", "emu", "toya", "miku_vivid"],
        ["フェニラン好きチーム"]
    ),
    Team(["kohane", "ichika", "akito", "toya", "kohane"],
        ["信頼度抜群の相棒チーム", "BAD DOGSチーム"]
    ),
    Team(["an", "kohane", "akito", "kohane", "kaito_wonder"],
        ["Vividsチーム"]
    ),
    Team(["kohane", "kohane", "emu", "shizuku", "ena"],
        ["ひとりだけ学校違うチーム", "フェニラン好きチーム"]
    ),
    /*
    Team(["toya", "akito", "akito", "toya", "honami"],
        ["赤点だけは避けたいチーム"]
    ),
    */
    Team(["tsukasa", "kohane", "akito", "akito", "kohane"],
        ["ストイックに努力チーム", "ハムハムと猫かぶりチーム"]
    ),
    Team(["mafuyu", "len_wonder", "kohane", "tsukasa", "an"],
        ["クラスのリーダーチーム"]
    ),
    Team(["shiho", "kohane", "akito", "akito", "haruka"],
        ["ハムハムと猫かぶりチーム"]
    ),
    Team(["kanade", "an", "miku_vivid", "meiko_leo", "honami"],
        ["オシャレガールチーム"]
    ),
    Team(["an", "honami", "kohane", "kaito_vivid", "kohane"],
        ["運命の出会いチーム", "Vividsチーム"]
    ),
    Team(["kohane", "kohane", "rin_more", "an", "kohane"],
        ["最高の相棒", "Vividsチーム"]
    ),
    Team(["kohane", "mafuyu", "kohane", "shiho", "toya"],
        ["秘めた想いは熱いチーム", "トッピングありとブラックチーム"]
    ),
    Team(["haruka", "toya", "kanade", "akito", "an"],
        ["BAD DOGSチーム"]
    ),
    Team(["miku_night", "mafuyu", "kaito_wonder", "len_vivid", "toya"],
        ["コーヒー飲めてカッコイイチーム"]
    ),
    Team(["akito", "kohane", "luka_leo", "haruka", "kaito_vivid"],
        ["ストイックに努力チーム", "ハムハムと猫かぶりチーム"]
    ),
    Team(["ichika", "akito", "ena", "akito", "len_wonder"],
        ["明日起こしてチーム"]
    ),
    Team(["kanade", "haruka", "kohane", "akito", "tsukasa"],
        ["ハムハムと猫かぶりチーム", "ストイックに努力チーム"]
    ),
    Team(["kohane", "emu", "an", "ena", "honami"],
        ["サニサニとハムハムチーム", "Vividsチーム", "宮女1-Bコンビチーム"]
    ),
    Team(["rui", "kanade", "tsukasa", "honami", "tsukasa"],
        ["オレにもNGはあるぞチーム"]
    ),
    Team(["kohane", "meiko_vivid", "ena", "kohane", "kanade"],
        ["絵を見てくれてありがとうチーム", "わたしが認めるよチーム"]
    ),
    Team(["shizuku", "mafuyu", "akito", "toya", "mafuyu"],
        ["チーム今度は俺の番だ"]
    ),
    Team(["an", "rui", "honami", "luka_more", "kohane"],
        ["Vividsチーム"]
    ),
    Team(["akito", "honami", "haruka", "kaito_vivid", "an"],
        ["ヤマ勘と一夜漬けが頼りチーム"]
    )
];

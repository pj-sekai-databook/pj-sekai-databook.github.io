const teams_general = [ // 汎用的なチーム名、キーワードは"+"で区切る
    Team(["mizuki", "saki", "rin_more", "honami", "shiho"],
        ["元気な歌姫+ひとりが好きチーム"]
    ),
    Team(["mafuyu", "len_vivid", "shiho", "rin_more", "miku_vivid"],
        ["余裕の笑み+やんちゃ少年チーム", "余裕の笑み+元気な歌姫チーム", "カフェ手伝い+アクアリウムチーム", "一匹狼+キラキラ笑顔チーム",
            "余裕の笑み+活発シンガーチーム", "元気な歌姫+お団子結びチーム", "「優等生」+やんちゃ少年チーム", "正直者+背伸びしたいチーム",
            "余裕の笑み+正直者チーム", "やんちゃ少年+濃い味が好きチーム", "アクアリウム+キラキラ笑顔チーム", "正直者+格子柄リボンチーム",
            "正直者+DJボーイチーム", "活発シンガー+カフェ手伝いチーム", "「優等生」+ひとりが好きチーム"]
    ),
    Team(["saki", "len", "miku_vivid", "rui", "minori"],
        ["お団子結び+青春しよう！チーム"]
    ),
    Team(["emu", "emu", "luka", "rin_vivid", "minori"],
        ["わんだほーい+もっともっとチーム", "何でも食べる+こたつチーム", "元気な歌姫+はちゃめちゃチーム", "やんちゃ少女+何でも食べるチーム",
            "もっともっと+やんちゃ少女チーム", "やんちゃ少女+何でも食べるチーム", "もっともっと+やんちゃ少女チーム",
            "はちゃめちゃ+お姉さまチーム", "はちゃめちゃ+DJガールチーム", "たい焼きラブ+推しが尊いチーム", "クールリボン+こたつチーム",
            "こたつ+何でも食べるチーム", "お姉さま+やんちゃ少女チーム", "DJガール+たい焼きラブチーム", "わんだほーい+ミステリアスチーム",
            "元気な歌姫+たい焼きラブチーム", "サーモン好き+わんだほーいチーム", "たい焼きラブ+お姉さまチーム"]
    ),
    Team(["rui", "luka_leo", "kanade", "len_vivid", "miku_vivid"],
        ["天才演出家+ジャージ常備チーム"]
    ),
    Team(["miku_vivid", "airi", "miku_night", "miku_vivid", "emu"],
        ["オッドアイ+不屈の精神チーム", "オッドアイ+カフェ手伝いチーム", "何でも食べる+お団子結びチーム", "しっかり者+余裕の笑みチーム",
            "不屈の精神+いつも隣にチーム", "余裕の笑み+不屈の精神チーム", "余裕の笑み+オッドアイチーム", "不屈の精神+オッドアイチーム",
            "お団子結び+余裕の笑みチーム", "余裕の笑み+しっかり者チーム", "たい焼きラブ+八重歯キランチーム", "アイドル好き+お団子結びチーム",
            "何でも食べる+不屈の精神チーム", "不屈の精神+カフェ手伝いチーム", "たい焼きラブ+カフェ手伝いチーム", "わんだほーい+猫好きチーム",
            "オッドアイ+八重歯キランチーム", "お団子結び+不屈の精神チーム", "ホワイトヘア+余裕の笑みチーム", "カフェ手伝い+お団子結びチーム",
            "はちゃめちゃ+お団子結びチーム"]
    ),
    Team(["rin_vivid", "len_vivid", "tsukasa", "airi", "miku_vivid"],
        ["余裕の笑み+オレだ！チーム", "やんちゃ少年+カフェ手伝いチーム", "アイドル好き+カフェ手伝いチーム", "八重歯キラン+演出NGなしチーム",
            "お魚シャツ+しっかり者チーム", "カフェ手伝い+未来のスターチーム", "元気な歌姫+未来のスターチーム", "やんちゃ少年+自称座長チーム",
            "クールリボン+活発シンガーチーム", "お団子結び+背伸びしたいチーム", "不屈の精神+背伸びしたいチーム",
            "活発シンガー+しっかり者チーム", "未来のスター+クールリボンチーム", "やんちゃ少年+元気な歌姫チーム",
            "お魚シャツ+余裕の笑みチーム", "やんちゃ少年+自称座長チーム", "不屈の精神+お魚シャツチーム", "活発シンガー+元気な歌姫チーム",
            "未来のスター+やんちゃ少年チーム", "自称座長+やんちゃ少年チーム", "未来のスター+アイドル好きチーム", "活発シンガー+自称座長チーム",
            "不屈の精神+元気な歌姫チーム", "未来のスター+猫好きチーム", "猫好き+背伸びしたいチーム", "やんちゃ少女+やんちゃ少年チーム",
            "活発シンガー+余裕の笑みチーム"]
    ),
    Team(["kanade", "rin_more", "kanade", "len_vivid", "kanade"],
        ["ジャージ常備+Kチーム", "作らなくちゃチーム", "K+体内時計チーム", "ジャージ常備+背伸びしたいチーム", "新米アイドル+活発シンガーチーム",
            "カップ麺生活+作らなくちゃチーム", "新米アイドル+体内時計チーム", "日光苦手+カップ麺生活チーム", "体内時計+日光苦手チーム",
            "ジャージ常備+カップ麺生活チーム", "キラキラ笑顔+活発シンガーチーム", "背伸びしたい+新米アイドルチーム",
            "やんちゃ少年+体内時計チーム", "キラキラ笑顔+背伸びしたいチーム", "作らなくちゃ+Kチーム", "体内時計+新米アイドルチーム",
            "日光苦手+活発シンガーチーム", "作らなくちゃ+日光苦手チーム", "カップ麺生活+格子柄リボンチーム", "DJボーイ+格子柄リボンチーム",
            "作らなくちゃ+DJボーイチーム", "DJボーイ+カップ麺生活チーム", "作らなくちゃ+新米アイドルチーム", "日光苦手+カップ麺生活チーム",
            "体内時計+活発シンガーチーム", "背伸びしたい+体内時計チーム"]
    ),
    Team(["rin_more", "ena", "miku_more", "nene", "kohane"],
        ["もう逃げない+新米アイドルチーム", "えななん+ハムハムチーム", "ゲーマー+衣装いろいろチーム", "自撮り上手+趣味はカメラチーム",
            "ステージの花+ミント系NGチーム", "ステージの花+もう逃げないチーム", "新米アイドル+衣装いろいろチーム",
            "格子柄リボン+ステージの花チーム", "ペットはヘビ+格子柄リボンチーム", "新米アイドル+ゲーマーチーム",
            "衣装いろいろ+今日のタグはチーム", "キラキラ笑顔+ステージの花チーム", "ステージの花+今日のタグはチーム",
            "キラキラ笑顔+毒舌チーム", "キラキラ笑顔+ケモノの闘志チーム", "もう逃げない+格子柄リボンチーム",
            "抜群の歌声+衣装いろいろチーム", "キラキラ笑顔+もう逃げないチーム", "えななん+ステージの花チーム",
            "キラキラ笑顔+衣装いろいろチーム", "映え主義+もう逃げないチーム", "ゲーマー+ステージの花チーム", "えななん+ミント系NGチーム",
            "衣装いろいろ+毒舌チーム", "ケモノの闘志+えななんチーム", "人見知り+元気な歌姫チーム", "格子柄リボン+ペットはヘビチーム",
            "趣味はカメラ+えななんチーム", "自撮り上手+ゲーマーチーム", "ステージの花+もう逃げないチーム"]
    ),
    Team(["akito", "luka_leo", "akito", "akito", "akito"],
        ["犬は天敵チーム"]
    ),
    Team(["meiko_leo", "rin_more", "rui", "rui", "an"],
        ["格子柄リボン+野菜NGチーム"]
    ),
    Team(["shizuku", "kohane", "kaito_wonder", "kohane", "kohane"],
        ["もう逃げない+方向音痴チーム", "王子の風格+美しほくろチーム", "ハムハム+方向音痴チーム", "方向音痴+ペットはヘビチーム",
            "ペットはヘビ+ケモノの闘志チーム", "ハムハム+清涼シンガーチーム", "ケモノの闘志+もう逃げないチーム", "もう逃げない+天然お姉さんチーム",
            "妹ラブ+もう逃げないチーム", "ペットはヘビ+もう逃げないチーム", "方向音痴+ケモノの闘志チーム", "趣味はカメラ+ペットはヘビチーム",
            "趣味はカメラ+清涼シンガーチーム"]
    ),
    Team(["kohane", "kohane", "tsukasa", "luka_more", "tsukasa"],
        ["演出NGなしチーム", "穏やかな歌姫+ペットはヘビチーム", "ハムハムお魚シャツチーム", "カリスマ+自称座長チーム", "ペットはヘビチーム",
            "お魚シャツ+趣味はカメラチーム", "お魚シャツ+ペットはヘビチーム", "未来のスター+お魚シャツチーム"]
    )
];

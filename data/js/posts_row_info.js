const parented_row_name_list = {
    "3dmv": "3DMV",
    "2dmv": "2DMV",
    "youtube_live": "生放送",
    "youtube_radio": "ラジオ",
    "youtube_video": "動画",
    "twitter_post": "Twitter連載",
    "anniversary": "記念イラスト",
    "championship": "大会",
    "cd": "CD",
    "2022_newyear": "2022年お正月企画"
};
const parented_row_info_list = {
    "3dmv": {
        "3dmv": new RowInfo("3DMV", "youtube", getMVJson(3))
    },
    "2dmv": {
        "2dmv": new RowInfo("2DMV", "youtube", getMVJson(2))
    },
    "youtube_live": {
        "wonder_channel": new RowInfo("ワンダショちゃんねる", "youtube"),
        "after_talk": new RowInfo("アフタートーク", "youtube"),
        "story_theater": new RowInfo("ストーリーシアター", "youtube"),
        "more_live": new RowInfo("モモジャン生放送", "youtube"),
        "live": new RowInfo("その他の生放送", "youtube"),
    },
    "youtube_video": {
        "more_voice": new RowInfo("モモジャンボイスドラマ", "youtube"),
        "vivid_archive": new RowInfo("ビビバスアーカイブ", "youtube"),
        "youtube_250k_voice": new RowInfo("YouTube25万人記念ボイスドラマ", "youtube"),
        "movie": new RowInfo("その他の動画", "youtube"),
    },
    "youtube_radio": {
        "night_radio": new RowInfo("25時、ナイトラジオで。", "youtube"),
        "sekai_station": new RowInfo("セカイ・ステーション", "youtube"),
        "summer_radio_2021": new RowInfo("なつやすみラジオ2021", "youtube"),
    },
    "puchiseka": {
        "puchiseka": new RowInfo("ぷちセカ", "youtube"),
    },
    "four_frame": {
        "four_frame": new RowInfo("セカイの4コマ", "four_frame")
    },
    "twitter_post": {
        "leo_everyday": new RowInfo("レオニの日常", "leo_everyday"),
        "birthday_img": new RowInfo("誕生日/記念日イラスト", "twitter"),
        "anniversary_img": new RowInfo("その他の記念イラスト", "twitter"),
        "countdown_1st_img": new RowInfo("1周年記念/カウントダウンイラスト", "twitter_a3"),
        "countdown_release_img": new RowInfo("サービス開始カウントダウンイラスト", "twitter"),
        "kakizome_2022": new RowInfo("書き初め", "twitter"),
        "cupnoodle_illust": new RowInfo("カップヌードル記念イラスト", "twitter"),
        "cupnoodle_intro": new RowInfo("カップヌードル紹介イラスト", "cd")
    },
    "championship": {
        "championship": new RowInfo("大会", "youtube")
    },
    "cd": {
        "single": PostsRowInfo("シングル", singleList, "cd"),
        "album": PostsRowInfo("アルバム", albumList, "cd")
    }
};
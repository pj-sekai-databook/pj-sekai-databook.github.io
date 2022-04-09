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
        "3dmv": PostsRowInfo("3DMV", getMVList("3DMV"), "youtube")
    },
    "2dmv": {
        "2dmv": PostsRowInfo("2DMV", getMVList("2DMV"), "youtube")
    },
    "youtube_live": {
        "wonder_channel": new RowInfo("ワンダショちゃんねる", "youtube"),
        "after_talk": new RowInfo("アフタートーク", "youtube"),
        "story_theater": new RowInfo("ストーリーシアター", "youtube"),
        "more_showroom": PostsRowInfo("モモジャンSHOWROOM", more_showroom_list, "youtube"),
        "live": PostsRowInfo("その他の生放送", liveList, "youtube"),
    },
    "youtube_video": {
        "more_voice": new RowInfo("モモジャンボイスドラマ", "youtube"),
        "vivid_archive": new RowInfo("ビビバスアーカイブ", "youtube"),
        "youtube_250k_voice": new RowInfo("YouTube25万人記念ボイスドラマ", "youtube"),
        "movie": PostsRowInfo("その他の動画", movieList, "youtube"),
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
        "kakizome": PostsRowInfo("書き初め", newyearKakizomeList, "twitter"),
        "cupnoodle_illust": PostsRowInfo("カップヌードル記念イラスト", cupnoodle_illust_list, "twitter"),
        "cupnoodle_intro": PostsRowInfo("カップヌードル紹介イラスト", cupnoodle_intro_list, "cupnoodle_intro")
    },
    "championship": {
        "championship": new RowInfo("大会", "youtube")
    },
    "cd": {
        "single": PostsRowInfo("シングル", singleList, "cd"),
        "album": PostsRowInfo("アルバム", albumList, "cd")
    }
};
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
        "wonder_channel": PostsRowInfo("ワンダショちゃんねる", wonderChannelList, "youtube"),
        "after_talk": PostsRowInfo("アフタートーク", afterTalkList, "youtube"),
        "story_theater": PostsRowInfo("ストーリーシアター", storyTheaterList, "youtube"),
        "more_showroom": PostsRowInfo("モモジャンSHOWROOM", more_showroom_list, "youtube"),
        "live": PostsRowInfo("その他の生放送", liveList, "youtube"),
    },
    "youtube_video": {
        "more_voice": NewPostsRowInfo("モモジャンボイスドラマ", "youtube"),
        "vivid_archive": NewPostsRowInfo("ビビバスアーカイブ", "youtube"),
        "youtube_250k_voice": PostsRowInfo("YouTube25万人記念ボイスドラマ", youtube_250k_voice_list, "youtube"),
        "movie": PostsRowInfo("その他の動画", movieList, "youtube"),
    },
    "youtube_radio": {
        "night_radio": PostsRowInfo("25時、ナイトラジオで。", nightRadioList, "youtube"),
        "sekai_station": NewPostsRowInfo("セカイ・ステーション", "youtube"),
        "summer_radio": PostsRowInfo("なつやすみラジオ", summerRadioList, "youtube"),
    },
    "puchiseka": {
        "puchiseka": NewPostsRowInfo("ぷちセカ", "youtube"),
    },
    "four_frame": {
        "four_frame": PostsRowInfo("セカイの4コマ", fourFrameList, "four_frame")
    },
    "twitter_post": {
        "leo_everyday": PostsRowInfo("レオニの日常", leoEverydayList, "leo_everyday"),
        "birthday_img": PostsRowInfo("誕生日/記念日イラスト", birthdayImgList, "twitter"),
        "anniversary_img": PostsRowInfo("その他の記念イラスト", anniversaryImgList, "twitter"),
        "countdown_1st_img": PostsRowInfo("1周年記念/カウントダウンイラスト", countdown_1st_img_list, "twitter_a3"),
        "countdown_img": PostsRowInfo("サービス開始カウントダウンイラスト", countdownImgList, "twitter"),
        "kakizome": PostsRowInfo("書き初め", newyearKakizomeList, "twitter"),
        "cupnoodle_illust": PostsRowInfo("カップヌードル記念イラスト", cupnoodle_illust_list, "twitter"),
        "cupnoodle_intro": PostsRowInfo("カップヌードル紹介イラスト", cupnoodle_intro_list, "cupnoodle_intro")
    },
    "championship": {
        "championship": PostsRowInfo("大会", championshipList, "youtube")
    },
    "cd": {
        "single": PostsRowInfo("シングル", singleList, "cd"),
        "album": PostsRowInfo("アルバム", albumList, "cd")
    }
};
class Creator {
    constructor(name, part, note = null) {
        this.name = name;
        this.isLyricist = part[0] == "t";
        this.isComposer = part[1] == "t";
        this.isArranger = part[2] == "t";
        this.note = note;
        this.href = Creator.links[name];
        this.hasRole = this.isLyricist || this.isComposer || this.isArranger || this.note != null;
    }
    getAnchorTag() {
        if (!PjUtil.isEmpty(this.href)) {
            const span = PjElm.getSpan();
            span.appendChild(PjElm.getFavicon(Link.getDomain(this.href)));
            span.appendChild(PjElm.getA(this.name, this.href));
            return span;
        }
        else {
            return PjElm.getSpan(this.name);
        }
    }
    static isSame(c1, c2) {
        if (c1.name == c2.name) {
            return true;
        }
        if (c1.href == c2.href && !PjUtil.isEmpty(c1.href)) {
            return true;
        }
        return false;
    }
    static links = {
        "kz": "https://twitter.com/kz_lt",
        "さつき が てんこもり": "https://twitter.com/tenkomori",
        "ryo": "https://twitter.com/ryo_spcl",
        "cosMo@暴走P": "https://twitter.com/cosmobsp",
        "halyosy": "https://twitter.com/halyosy",
        "市瀬るぽ": "https://twitter.com/LUPO_Reportage",
        "みきとP": "https://twitter.com/mikito_p_",
        "Omoi": "https://twitter.com/Omoi3965",
        "Sakurai": "https://twitter.com/Omoi3965",
        "DECO*27": "https://twitter.com/DECO27",
        "Rockwell": "https://twitter.com/69l_rockwell",
        "EasyPop": "https://twitter.com/easypop_betti",
        "yuukiss": "https://twitter.com/yuukiss",
        "とあ": "https://twitter.com/o0toa0o",
        "Reol": "https://twitter.com/RRReol",
        "Giga": "https://twitter.com/GigaMozuku",
        "nyanyannya(大天才P)": "https://twitter.com/neko_nekokan",
        "ぬゆり": "https://twitter.com/nulut",
        "日向電工": "https://twitter.com/hinataEW",
        "Junky": "https://twitter.com/Junky_Box",
        "じーざす": "https://twitter.com/WAN_OPO",
        "ワンダフル☆オポチュニティ！": "https://twitter.com/WAN_OPO",
        "バルーン": "https://twitter.com/balloon0120",
        "ナノウ": "https://twitter.com/koyama_nanou",
        "ササノマリイ": "https://twitter.com/nekobolo",
        "Mitchie M": "https://twitter.com/_MitchieM",
        "q*Left": "https://twitter.com/q_Left",
        "ピノキオピー": "https://twitter.com/pinocchiop",
        "まふまふ": "https://twitter.com/uni_mafumafu",
        "堀江昌太(kemu)": "https://twitter.com/kemu8888",
        "Orangestar": "https://twitter.com/MikanseiP",
        "夏代孝明": "https://twitter.com/_natsushiro_",
        "渡辺拓也": "https://twitter.com/takuya88699231",
        "Dixie Flatline": "https://twitter.com/DixieF_Yeheyuan",
        "Neru": "https://twitter.com/neru_sleep",
        "カンザキイオリ": "https://twitter.com/kurogaki0311",
        "ナユタン星人": "https://twitter.com/NayutalieN",
        "じん": "https://twitter.com/jin_jin_suruyo",
        "八王子P": "https://twitter.com/8_Prince",
        "すりぃ": "https://twitter.com/iii0303_8",
        "OSTER project": "https://twitter.com/fuwacina",
        "まらしぃ": "https://twitter.com/marasy8",
        "ゆよゆっぺ": "https://twitter.com/yupeyupe",
        "syudou": "https://twitter.com/tikandame",
        "はるまきごはん": "https://twitter.com/harumaki_gohan",
        "emon(Tes.)": "https://twitter.com/emon316",
        "wowaka": "https://twitter.com/wowaka",
        "n-buna": "https://twitter.com/nbuna_staff",
        "R Sound Design": "https://twitter.com/R_SoundDesign",
        "koyori": "https://twitter.com/koyokoyokoyori",
        "Eve": "https://twitter.com/oO0Eve0Oo",
        "Numa": "https://twitter.com/tomoki_numano",
        "40mP": "https://twitter.com/40mP",
        "sasakure.UK": "https://twitter.com/sasakure__UK",
        "黒うさ": "https://twitter.com/kurousa_no",
        "Crusher P": "https://twitter.com/CCrusherr",
        "和田たけあき(くらげP)": "https://twitter.com/WADATAKEAKI",
        "和田たけあき": "https://twitter.com/WADATAKEAKI",
        "EZFG": "https://twitter.com/EZFG",
        "れをる": "https://twitter.com/RRReol",
        "ギガ": "https://twitter.com/GigaMozuku",
        "ユジー": "https://twitter.com/hsURanus_yuzy",
        "164": "https://twitter.com/164203",
        "キノシタ": "https://twitter.com/k1n0shita",
        "いるかアイス": "https://twitter.com/irucaice",
        "YASUHIRO(康寛)": "https://twitter.com/yasuhiro_vanq",
        "柊キライ": "https://twitter.com/Kirai_dark",
        "梅とら": "https://twitter.com/umetorara",
        "ジミーサムP": "https://twitter.com/jimmythumb",
        "DIVELA": "https://twitter.com/MIX_Destroy",
        "GAiA": "https://twitter.com/GAiAcsle",
        "シノ": "https://twitter.com/shino_mr4",
        "加賀(ネギシャワーP)": "https://twitter.com/kaga_qwerty",
        "Kanaria": "https://twitter.com/Kanaria390",
        "Ayase": "https://twitter.com/Ayase_0404",
        "伊東健人": "https://twitter.com/21s_ken",
        "doriko": "https://twitter.com/doriko_",
        "煮ル果実": "https://twitter.com/vinegar_vinegar",
        "岸田勇気(有形ランペイジ)": "https://twitter.com/yukikishida",
        "Sasanomaly": "https://twitter.com/nekobolo",
        "タケノコ少年": "https://twitter.com/TA_MOR_Is",
        "kemu": "https://twitter.com/kemu8888",
        "ポリスピカデリー": "https://twitter.com/_policep",
        "aqu3ra": "https://twitter.com/AQU3RA_music",
        "有機酸": "https://twitter.com/Yuki_Jouet",
        "*Luna": "https://twitter.com/Luna_miko00",
        "Picon": "https://twitter.com/picon_bs",
        "オゾン": "https://twitter.com/ozon_541",
        "烏屋茶房": "https://twitter.com/tghgworks_krsy",
        "iroha(sasaki)": "https://twitter.com/iroha_sasaki",
        "kuma(alfred)": "https://twitter.com/kuma_alfred",
        "かいりきベア": "https://twitter.com/kairiki_bear",
        "takamatt": "https://twitter.com/takamatt",
        "キタニタツヤ": "https://twitter.com/TatsuyaKitani",
        "ユリイ・カノン": "https://twitter.com/yurryCanon",
        "MIMI": "https://twitter.com/mimi_3mi",
        "水野悠良": "https://twitter.com/yura_mizuno",
        "のりぴー": "https://twitter.com/noripy929",
        "Misumi": "https://twitter.com/zeitms",
        "針原翼(はりーP)": "https://twitter.com/harirozeo",
        "棚橋 EDDY テルアキ": "https://twitter.com/Terutanaeddy",
        "せきこみごはん": "https://twitter.com/p_akiaki",
        "TOKOTOKO": "https://twitter.com/NishizawasanP",
        "mothy": "https://twitter.com/mothy_akuno",
        "Naoki Itai(MUSIC FOR MUSIC)": "https://twitter.com/NaokI_Edge",
        "てにをは": "https://twitter.com/edogawa_sampo",
        "orange": "https://twitter.com/orangewk",
        "Dios/シグナルP": "https://twitter.com/Hiroaki_Arai_",
        "ピコン": "https://twitter.com/picon_bs",
        "黒魔": "https://twitter.com/c_h_r_o_m_a",
        "すこやか大聖堂": "https://twitter.com/SukoyaCathedral",
        "TeddyLoid": "https://twitter.com/TeddyLoidSpace",
        "蝶々P": "https://twitter.com/papiyon_cyoucyo",
        "きくお": "https://twitter.com/kikuo_sound",
        "Chinozo": "https://twitter.com/chinozo_",
        "カルロス袴田(サイゼP)": "https://twitter.com/hakamad",
        "Twinfield": "https://twitter.com/Twinfieldnex",
        "TAKU INOUE": "https://twitter.com/ino_tac",
        "Anamanaguchi": "https://twitter.com/anamanaguchi",
        "Tudiken": "https://twitter.com/tudiken",
        "ハチ": "https://twitter.com/hachi_08",
        "SAM(samfree)": "https://twitter.com/samfree33",
        "yanagi": "https://mobile.twitter.com/yanagi4126",
        "牛肉": "https://twitter.com/gyuniku32",
        "雄之助": "https://twitter.com/bass_ynk",
        "傘村トータ(LIVE LAB.)": "https://twitter.com/machiomiii",
        "しゃいと": "https://twitter.com/shaito_otiahs",
        "ぷす(fromツユ)": "https://twitter.com/pusu_kun",
        "村田祐一(LIVE LAB.)": "https://twitter.com/muranco1225",
        "れるりり": "https://twitter.com/rerulili",
        "くじら": "https://twitter.com/WhaleDontSleep",
        "月詠み": "https://twitter.com/Tsukuyomi_JP",
        "羽生まゐご": "https://twitter.com/maigo_hanyuu",
        "ぽりふぉ": "https://twitter.com/Tomoya_PB",
        "Ponchi♪": "https://twitter.com/ponchi_pop",
        "jon-YAKITORY": "https://twitter.com/jon_408",
        "有形ランペイジ": "https://twitter.com/UKRampage_info",
        "23.exe": "https://twitter.com/23_twt",
        "ナナホシ管弦楽団": "https://twitter.com/sosite_iwamikun",
        "古川本舗": "https://twitter.com/fullkawa_ryo",
        "HoneyWorks": "https://twitter.com/HoneyWorks_828"
    }
}
const maxInitPostLen = 5;
const initPostLen = 3;
const initAllOfficialPostLinks = () => {
    initOfficialPostLink("wonder_channel", mURL("公式再生リスト", "https://www.youtube.com/playlist?list=PLiFNg5fXiX31ouaNzNwuG-hRIUV8bjqD4"));
    initOfficialPostLink("night_radio", mURL("公式再生リスト", "https://www.youtube.com/playlist?list=PLiFNg5fXiX31l6tO4ngO0ZzVtJAaTS4Ho"));
    initOfficialPostLink("after_talk", mURL("公式再生リスト", "https://www.youtube.com/playlist?list=PLiFNg5fXiX31hUX7AG7GaARqbe114ZWcL"));
    initOfficialPostLink("story_theater", mURL("公式再生リスト", "https://www.youtube.com/playlist?list=PLiFNg5fXiX304IOtpvuGDfkOI0mBQvbqv"));
    initOfficialPostLink("3dmv", mURL("公式再生リスト", "https://www.youtube.com/playlist?list=PLiFNg5fXiX33oJoBNfuq2yO7exoc_9qJW"));
    initOfficialPostLink("2dmv", mURL("公式再生リスト", "https://www.youtube.com/playlist?list=PLiFNg5fXiX32G3fNBC7U02t19zVkHAmdD"));
    initOfficialPostLink("four_frame", mURL("公式モーメント", "https://twitter.com/i/events/1342319919799496704"));
    initOfficialPostLink("countdown_img", mURL("公式モーメント", "https://twitter.com/i/events/1297344743932747776"));
};
const initOfficialPostLink = (id, url) => {
    let span = document.createElement("span");
    span.appendChild(getAFromURL(url));
    span.appendChild(getBr());
    insertAfter(document.getElementById(id), span);
    //document.getElementById(id).appendChild(getAFromURL(url));
}
const setPosts = () => {
    const cFilter = getCharactersFilter();
    setPostSpan("leo_everyday", leoEverydayList, "twitterLeo", false, cFilter);
    setPostSpan("more_voice", moreVoiceList, "youtube", false, cFilter);
    setPostSpan("vivid_archive", vividArchiveList, "youtube", false, cFilter);
    setPostSpan("wonder_channel", wonderChannelList, "youtube", false, cFilter);
    setPostSpan("night_radio", nightRadioList, "youtube", false, cFilter);
    setPostSpan("after_talk", afterTalkList, "youtube", false, cFilter);
    setPostSpan("story_theater", storyTheaterList, "youtube", false, cFilter);
    setPostSpan("youtube_250k_voice", youtube_250k_voice_list, "youtube", false, cFilter);
    setPostSpan("summer_radio", summerRadioList, "youtube", false, cFilter);
    setPostSpan("live", liveList, "youtube", false, cFilter);
    setPostSpan("movie", movieList, "youtube", false, cFilter);
    setPostSpan("3dmv", getMVList("3DMV"), "youtube", false, cFilter);
    setPostSpan("2dmv", getMVList("2DMV"), "youtube", false, cFilter);
    //setPostSpan("four_frame", fourFrameList, "twitter4Frame", false, cFilter);
    setPostSpan("birthday_img", birthdayImgList, "twitter", true, cFilter);
    setPostSpan("countdown_1st_img", countdown_1st_img_list, "twitterA3", true, cFilter);
    setPostSpan("countdown_img", countdownImgList, "twitter", true, cFilter);
    setPostSpan("anniversary_img", anniversaryImgList, "twitter", true, cFilter);
    setPostSpan("championship", championshipList, "youtube", false, cFilter);
    setPostSpan("single", singleList, "cd", false, cFilter);
    setPostSpan("album", albumList, "cd", false, cFilter);
    /*
    let script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.body.appendChild(script);
    */
};
const setPostSpan = (id, list, className, dispDate, cFilter) => {
    resetElement("span_" + id);
    let pSpan = document.createElement("span");
    pSpan.id = "span_" + id;
    pSpan.classList.add("thumbList");
    list = getFilteredThumbnails(list, cFilter);
    if (list.length == 0) {
        pSpan.innerText = "※該当データなし※";
        return;
    }
    let len = list.length > maxInitPostLen ? initPostLen : list.length;
    for (let l of list.slice(0, len)) {
        pSpan.appendChild(getSpanFromThumbnail(l, className, dispDate));
    }
    if (list.length > maxInitPostLen) {
        let rSpan = document.createElement("span");
        rSpan.className = "showRemainBlock";
        rSpan.id = getShowRemainId(id);
        rSpan.innerText = "残り" + (list.length - initPostLen) + "件を表示する";
        rSpan.onclick = function () {
            setRemainPostSpan(id, list.slice(initPostLen), className, dispDate);
        };
        pSpan.appendChild(rSpan);
    }
    pSpan.appendChild(getClearDiv(id));
    insertAfter(document.getElementById(id), pSpan);
};
const setRemainPostSpan = (id, remainList, className, dispDate) => {
    let pSpan = document.getElementById("span_" + id);
    let clearDiv = document.getElementById(getClearDivId(id));
    //pSpan.removeChild(document.getElementById(id + "_showRemain"));
    //pSpan.removeChild(document.getElementById(id + "_clear"));
    for (let l of remainList) {
        pSpan.insertBefore(getSpanFromThumbnail(l, className, dispDate), clearDiv);
    }
    document.getElementById(getShowRemainId(id)).style.display = "none";
};
const getSpanFromThumbnail = (t, className, dispDate = false) => {
    let span = document.createElement("span");
    span.className = "thumbBlock";
    let b = document.createElement("b");
    b.innerText = t.url.title;
    if (dispDate && t.url.date != null) {
        b.innerText += "(" + getStrFromDate(t.url.date) + ")";
    }
    span.appendChild(b);
    span.appendChild(getBr());
    let src = "";
    switch (t.url.domain) {
        case "twitter.com":
        case "bushiroad-music.com":
        case "pocarisweat.jp":
            src = t.src;
            break;
        /*
        let spanTweet = document.createElement("span");
        spanTweet.style.maxWidth = "300px";
        let block = document.createElement("blockquote");
        block.className = "twitter-tweet";
        let aTweet = document.createElement("a");
        aTweet.href = t.link;
        aTweet.dataset.width = "200";
        aTweet.innerText = "(Twitter)";
        block.appendChild(aTweet);
        spanTweet.appendChild(block);
        span.appendChild(spanTweet);
        */
        case "www.youtube.com":
            src = getYouTubeThumbnailSrc(t.url.link);
            break;
        default:
            break;
    }
    let a = document.createElement("a");
    a.href = t.url.link;
    a.target = "_blank";
    a.appendChild(getImg(src, className));
    span.appendChild(a);
    return span;
};
const getClearDiv = (id = null) => {
    let div = document.createElement("div");
    div.className = "clear";
    if (id != null) {
        div.id = getClearDivId(id);
    }
    return div;
};
const getShowRemainId = (id) => {
    return id + "_showRemain";
};
const getClearDivId = (id) => {
    return id + "_clear";
};
const getFilteredThumbnails = (tArr, cArr) => {
    let arr = [];
    for (let t of tArr) {
        let tcArr = t.characters;
        if (tcArr == null) {
            arr.push(t);
            continue;
        }
        for (let c of tcArr) {
            if (cArr.indexOf(c) >= 0) {
                arr.push(t);
                break;
            }
        }
    }
    return arr;
}
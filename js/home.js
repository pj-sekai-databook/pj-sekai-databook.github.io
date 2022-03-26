let current_index = 0;
let music_id_list = [];
let link_obj_list = [];
const initSlider = () => {
    const s = getSizeInfo();
    link_obj_list = [];
    musics_id_list = [];
    addLinkObj("four_frame");
    addLinkFromMusics(3, "www.youtube.com");
    addLinkFromMusics(2, "www.youtube.com");
    addLinkFromMusics(3, "www.youtube.com");
    addLinkFromMusics(2, "www.youtube.com");
    link_obj_list = shuffleArr(link_obj_list);
    for (let i = 0; i < link_obj_list.length; ++i) {
        let d = getSliderDiv(link_obj_list[i], s, "youtube");
        document.getElementById("slick-body").appendChild(d);
    }
    document.getElementById("slick-body").style.width = s.slider_width + "px";
    document.getElementById("slick-body").style.height = s.slider_height + "px";
    document.getElementById("slick-caption").style.maxWidth = s.slider_width + "px";
    $(".slider").slick({
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 500,
        dots: true,
        arrows: true,
        infinite: true,
        pauseOnHover: true,
        pauseOnFocus: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: s.centerPadding,
        focusOnSelect: true
    });
    $("#slick-caption").text(link_obj_list[0].text);
    $(".slider").on("beforeChange", (slick, currentSlide) => {
        current_index = -1;
    });
    $(".slider").on("afterChange", (slick, currentSlide) => {
        current_index = currentSlide["currentSlide"];
        $("#slick-caption").text(link_obj_list[current_index].text);
    });
}
const getSliderDiv = (link_obj, s, css_class) => {
    let div = document.createElement("div");
    div.classList.add("slider-head");
    div.style.width = s.slider_width + "px";
    div.style.height = s.slider_height + "px";
    div.onclick = (e) => {
        const parent = $(e.currentTarget.parentNode.parentNode);
        const index = $(parent).attr("data-slick-index");
        if (index == current_index) {
            const a_click = $(e.currentTarget).children("a")[0];
            window.open(a_click.href, "_blank");
        }
        else {
            // $(".slider").slick("slickGoTo", index);
        }
    }
    let a = document.createElement("a");
    a.href = link_obj.link;
    a.target = "_blank";
    a.style.display = "none";
    let img = document.createElement("img");
    switch (link_obj.type) {
        case "mv":
            img.src = link_obj.src;
            img.style.width = s.img_width + "px";
            img.style.height = s.img_height + "px";
            img.classList.add("youtube");
            break;
        case "after_talk":
            img.src = getYouTubeThumbnailSrc(link_obj.link);
            img.style.width = s.img_width + "px";
            img.style.height = s.img_height + "px";
            img.classList.add("youtube");
            break;
        case "four_frame":
            img.src = link_obj.thumbnail.src;
            img.style.width = s.img_width_4frame + "px";
            img.style.height = s.img_height_4frame + "px";
            img.classList.add("twitter4Frame");
            break;
    }
    div.appendChild(img);
    div.appendChild(a);
    return div;
}
const addLinkFromMusics = (d, domain) => {
    while (true) {
        let link_obj = null;
        while (link_obj == null) {
            link_obj = findLinkFromMusics(d, domain);
        }
        if (music_id_list.indexOf(link_obj.id) < 0) {
            music_id_list.push(link_obj.id);
            link_obj_list.push(link_obj);
            break;
        }
    }
}
const findLinkFromMusics = (d, domain) => {
    let m = musics[randomInt(musics.length)];
    for (let u of m.urls) {

        if (u instanceof MV && u.d == d && u.domain == domain) {
            return { id: m.id, type: "mv", link: "./musics/?id=" + m.id, src: u.thumb_src, text: `【${d}DMV】${m.title}` };
        }
    }
    return null;
}
const addLinkObj = (type) => {
    let thumbnail;
    let text;
    switch (type) {
        case "2dmv":
        case "four_frame":
            thumbnail = fourFrameList[randomInt(fourFrameList.length)];
            text = "【セカイの4コマ】" + thumbnail.url.title;
            break;
        case "after_talk":
            thumbnail = afterTalkList[randomInt(afterTalkList.length)];
            text = "【アフタートーク】" + thumbnail.url.title;
            break;
    }
    link_obj_list.push({ type, thumbnail, link: thumbnail.url.link, text });
}
const addLinkFromFourFrames = () => {
    const t = fourFrameList[randomInt(fourFrameList.length)];
    link_obj_list.push({ type: "four_frame", thumbnail: t, link: t.url.link, text: "【セカイの4コマ】" + t.url.title });
}
const getSizeInfo = () => {
    /*
    1.もともとの画像サイズが高さ50vhに収まらない場合は高さ50vhに圧縮する
    2.幅が100vwに収まらない場合は幅100vwに圧縮する
    3.最大で幅の1.5倍までのサイズでスライダーを作成する
    */
    const vw = $("#container").width();
    const vh = $(window).height();
    const base_width = 576;
    const base_height = 324;
    let temp_width, temp_height;
    let img_width, img_height;
    let slider_width, slider_height;
    let centerPadding;
    if (base_height > vh / 2) {
        console.log("overflow height");
        temp_width = base_width * (vh / 2) / base_height;
        temp_height = vh / 2;
    }
    else {
        temp_width = base_width;
        temp_height = base_height;
    }
    if (temp_width > vw) {
        console.log("overflow_width");
        img_width = vw;
        img_height = temp_height * vw / temp_width;
    }
    else {
        img_width = temp_width;
        img_height = temp_height;
    }
    slider_width = Math.min(vw, img_width * 1.5);
    slider_height = img_height;
    let padding_size = (slider_width - img_width) / 2;
    centerPadding = padding_size + "px";

    const img_width_4frame = 250 / 185 * img_height;
    const img_height_4frame = img_height;

    return {
        vw, vh, img_width, img_height, slider_width, slider_height, img_width_4frame, img_height_4frame, centerPadding
    };
}
window.addEventListener("load", () => {
    initSlider();
});
window.addEventListener("resize", () => {

});
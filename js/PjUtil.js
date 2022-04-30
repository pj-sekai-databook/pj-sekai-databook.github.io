class PjYtHelper {
    static domain = "www.youtube.com";
    static thumbnailImgName = "hqdefault.jpg";
    static thumbnailNaturalWidth = 480;
    static thumbnailNaturalHeight = 360;
    static getId = (link) => {
        if (link.match(/www\.youtube\.com\/watch\?v=/)) {
            return link.split("?")[1].split("=")[1];
        }
        if (link.match(/youtu\.be\//)) {
            return link.split("youtu.be/")[1];
        }
        return undefined;
    }
    static getThumbnailSrc = (link) => {
        return `https://img.youtube.com/vi/${this.getId(link)}/${this.thumbnailImgName}`;
    }
}
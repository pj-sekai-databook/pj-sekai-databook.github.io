class PjContents {
    static _json = null;
    static getContents = (i = null) => {
        if (this._json == null) {
            $.ajax({
                url: "https://pj-sekai-databook.github.io/json/posts.json",
                type: "GET",
                dataType: "json",
                async: false
            }).done((e) => {
                console.log(new Date(e.created_date));
                this._json = e;
            }).fail((e) => {
                window.alert(e);
            });
        }
        return i != null ? this._json.contents[i] : this._json.contents;
    }
}
class PjContents {
    static _json = null;
    static getContents = (i = null) => {
        if (this._json == null) {
            this.initJson();
        }
        return i != null ? this._json.contents[i] : this._json.contents;
    }
    static initJson = () => {
        const is_develop = getQueryParameters().mode == "develop";
        $.ajax({
            url: "https://pj-sekai-databook.github.io/json/posts" + (is_develop ? "_dev" : "") + ".json",
            type: "GET",
            dataType: "json",
            async: false
        }).done((e) => {
            console.log(new Date(e.created_date));
            this._json = e;
            return true;
        }).fail((e) => {
            window.alert(e);
            return false;
        });
    }
}
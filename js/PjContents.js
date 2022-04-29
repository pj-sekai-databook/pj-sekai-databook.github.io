class PjContents {
    static _json = null;
    static getContents = (i = null) => {
        if (this._json == null) {
            this.initJson();
        }
        switch (this._json.version) {
            case 1:
                return i != null ? this._json.contents[i] : this._json.contents;
            case 2:
                if (i == null) {
                    return this._json.contents;
                }
                const idx = this._json.contents.findIndex(x => x.id == i);
                if (idx >= 0) {
                    return this._json.contents[idx].content;
                }
                return undefined;
        }
        return undefined;
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
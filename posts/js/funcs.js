const getMVJson = (d) => {
    let arr = [];
    for (let m of musics) {
        for (let u of m.urls) {
            if (u instanceof MV && u.d == d) {
                if (typeof u.c_arr == "undefined") {
                    console.log("undefined MV vocals: " + m.title + u.title);
                }
                arr.push({
                    title: `${m.title}${u.option_str}`,
                    characters: u.c_arr,
                    link: u.href,
                    posted_date: u.date
                });
            }
        }
    }
    return arr.sort((a, b) => {
        return compareDate(a.posted_date, b.posted_date, false);
    });
};
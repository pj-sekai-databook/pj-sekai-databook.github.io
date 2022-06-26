const mDate = (y, m, d, h = 0, mi = 0) => {
    return new Date(y, m - 1, d, h, mi);
};
class PjDate {
    static compare(a, b, isAsc = true) {
        if (PjUtil.isEmpty(a)) {
            if (PjUtil.isEmpty(b)) {
                return 0;
            }
            else {
                return 1;
            }
        }
        else {
            if (PjUtil.isEmpty(b)) {
                return -1;
            }
            else {
                const dig = isAsc ? 1 : -1;
                return dig * (a.getTime() - b.getTime());
            }
        }
    }
    static format(date, format) {
        if (date instanceof Date) {
            return format
                .replace("yyyy", PjUtil.zeroPad(date.getFullYear(), 4))
                .replace("MM", PjUtil.zeroPad(date.getMonth() + 1, 2))
                .replace("dd", PjUtil.zeroPad(date.getDate(), 2))
                .replace("HH", PjUtil.zeroPad(date.getHours(), 2))
                .replace("mm", PjUtil.zeroPad(date.getMinutes(), 2))
                .replace("ss", PjUtil.zeroPad(date.getSeconds(), 2));
        }
        else {
            return format.replace(/[yMdHms]/g, "-");
        }
    }
}
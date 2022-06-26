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
}
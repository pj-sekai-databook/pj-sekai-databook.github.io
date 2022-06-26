class PjUtil {
    static isEmpty(x) {
        return typeof x == "undefined" || x == null || String(x).length == 0;
    }
    static compareDate(a, b, isAsc = true) {
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
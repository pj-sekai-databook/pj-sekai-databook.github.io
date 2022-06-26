
const DiffParam = {
    EASY: 0,
    NORMAL: 1,
    HARD: 2,
    EXPERT: 3,
    MASTER: 4
};
const Diff = (easy = 0, normal = 0, hard = 0, expert = 0, master = 0) => {
    return [easy, normal, hard, expert, master];
};
const getStrFromDiff = (diff) => {
    if (diff == null) {
        return "-- / -- / -- / -- / --";
    }
    else {
        return diff.map(x => x == 0 ? "--" : x).join(" / ");
    }
};
const isValidDiff = (diff) => {
    return !diff.some(x => x == 0);
}
const Result = (easy, normal, hard, expert, master) => {
    return [easy, normal, hard, expert, master];
}
const ResultParam = {
    NC: 0, // Not Cleared
    CL: 1, // Cleared
    FC: 2, // Full Combo
    AP: 3  // All Perfect
};
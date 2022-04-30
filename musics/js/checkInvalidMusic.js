const checkInvalidMusic = () => {
    for (const m of musics) {
        if (m.creators.findIndex(c => !(c.isLyricist || c.isComposer || c.isArranger || (c.note != null))) >= 0) {
            console.log(`Undefined creator role: ${m.title}`);
        }
    }
}
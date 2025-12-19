export function hitsCountRange(data) {
    const hitsCounts = data.map(el => el.hits_count);
    const minHitsCount = Math.min(...hitsCounts);
    const maxHitsCount = Math.max(...hitsCounts);
    return {minHitsCount, maxHitsCount};
}

export function getFreqCategory(hitsCount, ratio) {
    const EPS = 1e-12;
    let category;
    if (hitsCount === 0) {
        category = 'none';
    } else if (ratio <= 0.7 + EPS) {
        category = 'cold';
    } else if (ratio <= 1.5 + EPS) {
        category = 'middle';
    } else {
        category = 'hot';
    }

    return category;
}

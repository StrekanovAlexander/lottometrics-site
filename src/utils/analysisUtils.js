export function hitsCountRange(data) {
    const hitsCounts = data.map(el => el.hits_count);
    const minHitsCount = Math.min(...hitsCounts);
    const maxHitsCount = Math.max(...hitsCounts);
    return {minHitsCount, maxHitsCount};
}

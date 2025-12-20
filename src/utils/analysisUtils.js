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

export function computeGaps(hits, windowDraws) {
    const indexMap = new Map();
    windowDraws.forEach((d, i) => indexMap.set(d.id, i));
    
    const groups = new Map();
    for (const hit of hits) {
        const idx = indexMap.get(hit.draw_id);
        if (!groups.has(hit.draw_number)) {
            groups.set(hit.draw_number, []);
        }
        groups.get(hit.draw_number).push(idx);
    }

    const result = [];
    for (const [draw_number, positions] of groups.entries()) {
        positions.sort((a, b) => a - b);
        const gaps = [];
        for (let i = 1; i < positions.length; i++) {
            gaps.push(positions[i] - positions[i - 1] - 1);
        }
        const reversed = gaps.reverse();
        result.push({ draw_number, gaps: reversed });
    }
    return result;
}

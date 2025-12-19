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

export function buildGapsSeries(gaps) {
    const numbers = gaps.map(el => el.draw_number); 
    const uniqueNumbers = Array.from(new Set(numbers));

    return uniqueNumbers.reduce((acc, el) => {
        const arr = gaps.filter(n => n.draw_number === el).map(s => s.series_length);
        acc.push({draw_number: el, series: arr});
        return acc;
    }, []);
}

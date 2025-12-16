import * as cheerio from 'cheerio';

export async function getMegamillions() {
    const res = await fetch('https://www.lotteryusa.com/mega-millions/', {
        cache: 'no-store'
    });
    const html = await res.text();
    const $ = cheerio.load(html);
    const box = $('.o-game-layout-grid__col--results').first();
    
    let dateText = box.find('.c-draw-card__draw-date-sub').first().text().trim();
    const [monthStr, dayStr, yearStr] = dateText.replace(',', '').split(' ');
    const months = {
        Jan: '01', Feb: '02', Mar: '03', Apr: '04',
        May: '05', Jun: '06', Jul: '07', Aug: '08',
        Sep: '09', Oct: '10', Nov: '11', Dec: '12'
    };
    const drawDate = `${yearStr}-${months[monthStr]}-${dayStr.padStart(2, '0')}`;
    
    const mainNumbers = [];
    box.find('.c-draw-card__ball-list .c-ball.c-ball--sm').slice(0, 5).each((_, el) => {
        mainNumbers.push($(el).text().trim());
    });

    const megaBall = box.find('.c-result__bonus .c-ball--yellow').first().text().trim();
    
    let jackpotRaw = box.find('.c-draw-card__prize-value').first().text().trim();
    const jackpotAmount = jackpotRaw.replace(/[^\d]/g, '');
    const jackpotFinal = jackpotAmount ? `${parseInt(jackpotAmount) * 1000000}` : null;

    const isCorrect = mainNumbers.every(el => /^\d+$/.test(el));
    if (!isCorrect) {
        return null;
    }

    return {
        lotteryId: 4,
        drawDate,
        mainNumbers: mainNumbers.join(','),
        extraNumbers: megaBall,
        jackpotAmount: jackpotFinal
    };
}
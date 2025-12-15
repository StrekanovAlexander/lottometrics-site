import * as cheerio from 'cheerio';

export async function getEuromillions() {
    const res = await fetch('https://www.lottery.co.uk/euromillions/results');
    const html = await res.text();
    const $ = cheerio.load(html);
    
    const box = $('.resultBox').first();
    
    let dateText = box.find('.latestHeader.euromillions .smallerHeading').first().text().trim();
    dateText = dateText.replace(/(\d+)(st|nd|rd|th)/, '$1');
    
    const [dayStr, monthStr, yearStr] = dateText.split(' ');
    const day = parseInt(dayStr, 10);
    const year = parseInt(yearStr, 10);
    
    const months = {
        January: 0, February: 1, March: 2, April: 3,
        May: 4, June: 5, July: 6, August: 7,
        September: 8, October: 9, November: 10, December: 11
    };
    
    const monthIndex = months[monthStr];
    const drawDateUtc = new Date(Date.UTC(year, monthIndex, day));
    const drawDate = drawDateUtc.toISOString().slice(0, 10);
    
    const mainNumbers = [];
    box.find('.result.euromillions-ball').each((_, el) => {
        mainNumbers.push($(el).text().trim());
    });
    
    const luckyStars = [];
    box.find('.result.euromillions-lucky-star').each((_, el) => {
        luckyStars.push($(el).text().trim());
    });
    
    let jackpotRaw = box.find('.resultJackpot').first().text().trim();
    const jackpotAmount = jackpotRaw.replace(/[^\d]/g, '');

    return {
        lotteryId: 3,
        drawDate,
        mainNumbers: mainNumbers.join(','),
        extraNumbers: luckyStars.join(','),
        jackpotAmount
    };
}
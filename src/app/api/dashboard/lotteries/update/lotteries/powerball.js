import * as cheerio from 'cheerio';

export async function getPowerball() {
    const res = await fetch('https://www.powerball.com/draw-result');
    const html = await res.text();
    const $ = cheerio.load(html);
    
    const dateText = $('.title-date').first().text().trim();
    const drawDate = new Date(dateText).toLocaleDateString('en-CA', {timeZone: 'America/New_York'});
    
    const mainNumbers = [];
    $('.white-balls.item-powerball').each((_, el) => {
        mainNumbers.push($(el).text().trim());
    });
    
    const extraNumbers = $('.powerball.item-powerball').first().text().trim();
    // const jackpotText = $('.estimated-jackpot span').last().text().trim();

    return {
        lotteryId: 2,
        drawDate,
        mainNumbers: mainNumbers.join(','),
        extraNumbers,
        jackpotAmount: 0 // jackpotText
    };
}
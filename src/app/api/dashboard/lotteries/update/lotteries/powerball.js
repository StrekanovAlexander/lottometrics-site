import * as cheerio from 'cheerio';

export async function getPowerball() {
    const res = await fetch('https://www.powerball.com/draw-result');
    const html = await res.text();
    const $ = cheerio.load(html);
    
    const dateText = $('.title-date').first().text().trim(); 
    const cleanDate = dateText.replace(/^[A-Za-z]+,\s*/, '');
    const [monthStr, dayStr, yearStr] = cleanDate.replace(',', '').split(' ');

    const months = {
        Jan: '01', Feb: '02', Mar: '03', Apr: '04',
        May: '05', Jun: '06', Jul: '07', Aug: '08',
        Sep: '09', Oct: '10', Nov: '11', Dec: '12'
    };

    const drawDate = `${yearStr}-${months[monthStr]}-${dayStr.padStart(2, '0')}`;
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
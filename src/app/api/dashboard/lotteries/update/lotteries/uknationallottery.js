import * as cheerio from 'cheerio';

export async function getUKNanionalLottery() {
    const res = await fetch('https://www.lottery.co.uk/lotto/results');
    const html = await res.text();
    const $ = cheerio.load(html);
    
    const box = $('.resultBox').first();
    
    let dateText = box.find('.latestHeader.lotto .smallerHeading').first().text().trim();
    dateText = dateText.replace(/(\d+)(st|nd|rd|th)/, '$1');
    const [day, monthStr, year] = dateText.split(' ');
    
    const months = {
        January: '01', February: '02', March: '03', April: '04',
        May: '05', June: '06', July: '07', August: '08',
        September: '09', October: '10', November: '11', December: '12'
    };
    
    const drawDate = `${year}-${months[monthStr]}-${day.padStart(2, '0')}`;
    
    const mainNumbers = [];
    box.find('.result.lotto-ball').each((_, el) => {
        mainNumbers.push($(el).text().trim());
    });
    
    const bonusBall = box.find('.result.lotto-bonus-ball').first().text().trim();
    
    let jackpotRaw = box.find('.resultJackpot').first().text().trim();
    const jackpotAmount = jackpotRaw.replace(/[^\d]/g, '');

    return {
        lotteryId: 6,
        drawDate,                          
        mainNumbers: mainNumbers.join(','),
        extraNumbers: bonusBall,
        jackpotAmount
    };
}
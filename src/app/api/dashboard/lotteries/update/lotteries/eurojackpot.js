import * as cheerio from 'cheerio';

export async function getEurojackpot() {
    const res = await fetch('https://euroj.eu/en/eurojackpot-results.aspx');
    const html = await res.text();
    const $ = cheerio.load(html);
    
    const row = $('section.container table tbody tr').first();
    
    const dateText = row.find('td').eq(0).text().trim();
    const [day, month, year] = dateText.split('.');
    const drawDate = `${year}-${month}-${day}`;
    
    const mainNumbers = row.find('td').eq(2).text().trim().replace(/\s+/g, '');
    const extraNumbers = row.find('td').eq(3).text().trim().replace(/\s+/g, '');
    
    return {
        lotteryId: 5,
        drawDate,
        mainNumbers,
        extraNumbers,
        jackpotAmount: 0
    };
}
import * as cheerio from 'cheerio';

export async function getLotto6aus49() {
    const res = await fetch('https://www.lotto-bayern.de/lotto6aus49/gewinnzahlen');
    const html = await res.text();
    const $ = cheerio.load(html);
    const box = $('article.col-xs-16').first();
    
    let dateText = box.find('h2').first().text().trim();
    const dateMatch = dateText.match(/(\d{2}\.\d{2}\.\d{4})/);
    let drawDate = null;
    if (dateMatch) {
        const [day, month, year] = dateMatch[1].split('.');
        drawDate = `${year}-${month}-${day}`; 
    }
    
    const mainNumbers = [];
    box.find('.numbers li[aria-label]').each((_, el) => {
        const label = $(el).attr('aria-label');
        if (label && !label.startsWith('Superzahl')) {
            mainNumbers.push(label);
        }
    });
    
    const superzahl = box.find('.numbers li.additional').attr('aria-label')?.replace('Superzahl ', '');

    return {
        lotteryId: 1,
        drawDate,                          
        mainNumbers: mainNumbers.join(','),
        extraNumbers: superzahl,
        jackpotAmount: 0
    };
}

export async function getLotto6aus49() {
    const res = await fetch('https://www.lotto.de/api/stats/entities.lotto');
    const data = await res.json();

    const latest = data[data.length - 1];
    const drawDate = new Date(latest.drawDate).toLocaleDateString('en-CA', {timeZone: 'Europe/Berlin'});

    return {
        lotteryId: 1,
        drawDate,
        mainNumbers: latest.drawNumbersCollection.map(n => n.drawNumber).sort((a, b) => a - b).join(','),
        extraNumbers: String(latest.superNumber),
        jackpotAmount: 0
    };
}

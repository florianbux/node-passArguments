module.exports.printStarsAndHeader = (header = 'hi',stars = 10) => {
        let starsStr = '*'.repeat(stars);
        console.log(`${starsStr}\n${header}\n${starsStr}`);
}
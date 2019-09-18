const { printStarsAndHeader } = require('./stars');

const stars = process.argv[2];
const header = process.argv[3];
printStarsAndHeader(header, stars);
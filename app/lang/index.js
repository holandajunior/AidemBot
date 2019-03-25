const args = require('yargs').argv;
module.exports = require(`./${args.lang}`);
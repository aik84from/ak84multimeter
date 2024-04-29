'use strict';

/*

Author: Kalinin Alexandr

Email: aik84from@gmail.com

Github: https://github.com/aik84from

8b7521f0bc0057306aeee70bf6603feb

*/


const volts = (amperes, ohms) => amperes * ohms;

const amperes = (volts, ohms) => volts / ohms;

const ohms = (volts, amperes) => volts / amperes;

const watts = (volts, amperes) => volts * amperes;

const voltageDivider = (volts, r1, r2) => volts * (r2 / (r1 + r2));


module.exports = {
    volts: volts,
    amperes: amperes,
    ohms: ohms,
    watts: watts,
    voltageDivider: voltageDivider
};

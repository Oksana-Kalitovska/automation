// 81. Data Helpers - Get Random Number
// 82. Data Helpers - Get Random String

const crypto = require('crypto');    // — імпортує вбудований модуль crypto у Node.js.

export async function getRandomNumber() {

    return Math.floor(Math.random() * 1000 + 1); // генерує випадкове ціле число від 1 до 1000 (включно).

}


export async function getRandomString() {

    return crypto.randomBytes(20).toString('hex');   // генерує випадковий рядок довжиною 40 символів (20 байт у шістнадцятковому форматі).

}
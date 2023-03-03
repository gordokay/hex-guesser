const hexLetters = {
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
};

const hexNumbers = {
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F",
};

function convertHexComponentToDecimal(hex) {
  const firstDigit = hexLetters[hex.charAt(1)] || +hex.charAt(1);
  const secondDigit = hexLetters[hex.charAt(0)] || +hex.charAt(0);
  return firstDigit + secondDigit * 16;
}

function convertDecimalToHexComponent(decimal) {
  if (decimal === 0) return "00";
  let hex = "";
  let value = decimal;
  while (value > 0) {
    const digit = String(value % 16);
    hex = (hexNumbers[digit] || digit) + hex;
    value = Math.floor(value / 16);
  }
  if (decimal < 16) hex = "0" + hex;
  return hex;
}

function getRandomHexCode() {
  const r = convertDecimalToHexComponent(Math.floor(Math.random() * 256));
  const g = convertDecimalToHexComponent(Math.floor(Math.random() * 256));
  const b = convertDecimalToHexComponent(Math.floor(Math.random() * 256));
  return r + g + b;
}

function compareHexCodes(x, y) {
  const xR = convertHexComponentToDecimal(x.substring(0, 2));
  const xG = convertHexComponentToDecimal(x.substring(2, 4));
  const xB = convertHexComponentToDecimal(x.substring(4));
  const yR = convertHexComponentToDecimal(y.substring(0, 2));
  const yG = convertHexComponentToDecimal(y.substring(2, 4));
  const yB = convertHexComponentToDecimal(y.substring(4));
  return Math.abs(xR - yR + (xG - yG) + (xB - yB));
}

function getScore(difference) {
  if (difference >= 100) return 0;
  return 100 - difference;
}

const hex = {
  getRandomHexCode,
  compareHexCodes,
  getScore,
};

export default hex;

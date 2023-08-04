module.exports = function toReadable(number) {
  const words = [
    '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];

  const tens = [
    '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
  ];

  if (number === 0) {
    return 'zero';
  } else if (number < 20) {
    return words[number];
  } else if (number < 100) {
    return `${tens[Math.floor(number / 10)]} ${words[number % 10]}`.trim();
  } else {
    const remainder = number % 100;
    if (remainder === 0) {
      return `${words[Math.floor(number / 100)]} hundred`.trim();
    } else {
      return `${words[Math.floor(number / 100)]} hundred ${toReadable(remainder)}`.trim();
    }
  }
}
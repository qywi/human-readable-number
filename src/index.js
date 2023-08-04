module.exports = function toReadable (number) {
  const words = [
    '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];

  const tens = [
    '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
  ];

  if (number === 0) {
    return 'zero';
  } else if (number < 20) {
    return words[number];
  } else if (number < 100) {
    const tensPart = tens[Math.floor(number / 10)];
    const onesPart = words[number % 10];
    return onesPart !== 'zero' ? `${tensPart} ${onesPart}` : tensPart;
  } else {
    const hundredsPart = `${words[Math.floor(number / 100)]} hundred`;
    const remainingPart = toReadable(number % 100);
    const zeroPart = number % 100 === 0 ? 'zero' : '';
    return `${hundredsPart}${remainingPart !== 'zero' ? ' ' : ''}${remainingPart}${zeroPart !== '' ? ' ' : ''}${zeroPart}`;
  }
} 

const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' ',
};

function decode(expr) {
    let arr = expr.match(/.{1,10}/g);  
    let newarr = [];
    for (let i = 0; i < arr.length; i++){
      newarr.push(arr[i].replace(/^0+/, '').match(/.{1,2}/g));
    }
    for (let i = 0; i < newarr.length; i++) {
      for (let j = 0; j < newarr[i].length; j++) {
          if (newarr[i][j] === '10') newarr[i][j] = '.';
      if (newarr[i][j] === '11') newarr[i][j] = '-';
        }
    }
    for (let i = 0; i < newarr.length; i++){
      newarr[i] = newarr[i].join('');
      newarr[i] = MORSE_TABLE[newarr[i]];
    }
  
  return newarr.join('');
}

module.exports = {
    decode
}

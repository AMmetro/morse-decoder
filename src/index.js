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
};

function decode(expr) {


       let ansver = ''

    for ( k = 0; k < expr.length; k=k + 10) {

        let sub = expr.substring(k, k + 10);
        
        if (sub == '**********') {
        
          ansver =ansver + ' ';
        
          continue;
        }

        let variab = '';
        
        for (let x = 0; x < 10; x= x+2) {
        
          if (sub.substring(x, x + 2) == '10') variab =variab + '.'
        
          else if (sub.substring(x, x + 2) == '11') variab =variab + '-';
        }
       
        ansver =ansver + MORSE_TABLE[variab];
    }

    return ansver;



    }

    module.exports = {
        decode
    }
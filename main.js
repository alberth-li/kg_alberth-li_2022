//get input
let input = process.argv.slice(2);

//setup phonetic dic
const PHONETIC = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'];

/**
 * Single digit to alphabet converter.
 * 
 * Convert input single digit to corresponding alphabet as output
 * 
 * @param {Number} digit single digit to be converted to alphabet.
 * 
 * @returns {String} converted alphabet
 */
let numberToAlpha = function(digit){
    return PHONETIC[digit];
}

/**
 * Whole number to phonetic equivalent converter.
 * 
 * Convert input whole number to their phonetic equivalent.
 * 
 * @param {String} number string representation of a whole number to be converted.
 * 
 * @returns {String} single string of concatenated convertion result
 */
let convertFunction = function(number){
    //split the number to array of single digits
    //map numberToAlpha function and name as convertedNumber
    const convertedNumber = number.split('').map(numberToAlpha);
    //return concatenated result
    return convertedNumber.join('');
}

//map convertFunction on input and name as output
//concatenate array of converted alphabets with comma as required.
const output = input.map(convertFunction).join(',');

//print result to stdout
console.log(output);
/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = s => {
    const baseValue = new Map([["I", 1], ["V", 5], ["X", 10], ["L", 50], ["C", 100], ["D", 500], ["M", 1000]]);
    let intVal = 0;

    for (let inputStringItr = 0; inputStringItr < s.length; inputStringItr++) {
        const romanDigitVal = baseValue.get(s[inputStringItr]);

        if (s[inputStringItr + 1] && romanDigitVal < baseValue.get(s[inputStringItr + 1])) {
            intVal -= romanDigitVal;
        }else{
            intVal += romanDigitVal;
        }
    }

    return intVal;
};
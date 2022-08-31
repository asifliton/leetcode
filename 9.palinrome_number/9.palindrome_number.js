/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => {
    let revNum = 0;
    let inputNum = x;

    if(inputNum < 0) return false;

    while(inputNum !== 0) {
        revNum = (revNum * 10) + Math.trunc(inputNum % 10);
        inputNum = Math.floor(inputNum / 10);
    }

    return revNum === x;
}
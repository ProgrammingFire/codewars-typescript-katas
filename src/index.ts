import { maskify } from "./maskify"
import { narcissistic } from "./narcissistic"
import { descendingOrder } from "./descending-order"
import { isPangram } from "./detect-pangram";
import { comp } from "./are-they-same"
import { numberOfPeople } from "./bus-stop"
import { removeNb } from "./is-my-friend-cheating";
import { findOdd } from "./find-the-odd-int";
import { findOutlier } from "./parity-outlier"
import { nbMonths } from "./buying-a-car";
import { findUniq } from "./unique-string";
import { wave } from "./mexican-wave";
import { makeLooper } from "./lazy-repeater";
import { perimeter } from "./perimeter-of-squares";
import { closest } from "./closest-and-smallest";
import { sumPairs } from "./sum-of-pairs";
import { playPass } from "./playing-with-passphrases";

console.log(`MASKIFY: ${maskify("12345")}`)
console.log(`NARCISSISTIC: ${narcissistic(153)}`)
console.log(`DESCENDING ORDER: ${descendingOrder(291)}`)

let a = [121, 144, 19, 161, 19, 144, 19, 11]
let b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
console.log(`ARE THEY SAME: ${comp(a, b)}`)

console.log(`NUMBER OF PEOPLE IN BUS: ${numberOfPeople([[10, 0], [3, 5], [5, 8]])}`)

console.log(`IS PANGAM: ${isPangram("The quick brown fox jumps over the lazy dog.")}`)
console.log(`IS PANGAM: ${isPangram("This is not a pangram.")}`)

console.log(`IS MY FRIEND CHEATING: ${removeNb(26)}`)
console.log(`FIND THE ODD INT: ${findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])}`)
console.log(`FIND THE OUTLIER: ${findOutlier([160, 3, 1719, 19, 11, 13, -21])}`)
console.log(`BUYING A CAR: ${nbMonths(2000, 8000, 1000, 1.5)}`)
console.log(`FIND UNIQUE STRING${findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a'])}`)
console.log(`MEXICAN WAVE: ${wave("hello")}`)

const abc = makeLooper('abc');
console.log(`MAKE LOOPER: ${abc()}`)
console.log(`MAKE LOOPER: ${abc()}`)
console.log(`MAKE LOOPER: ${abc()}`)
console.log(`MAKE LOOPER: ${abc()}`)
console.log(`MAKE LOOPER: ${abc()}`)

console.log(`PERIMETER OF SQUARES: ${perimeter(5)}`)
console.log(`CLOSEST AND SMALLEST: ${closest("103 123 4444 99 2000")}`)
console.log(`PLAYING WITH PASSPHRASES: ${playPass("BORN IN 2015!", 1)}`)
console.log(`SUM PAIRS: ${sumPairs([11, 3, 7, 5], 10)}`)

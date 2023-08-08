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

console.log(maskify("12345"))
console.log(narcissistic(153))
console.log(descendingOrder(5415))

let a = [121, 144, 19, 161, 19, 144, 19, 11]
let b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
console.log(comp(a, b))

console.log(numberOfPeople([[10, 0], [3, 5], [5, 8]]))

console.log(isPangram("The quick brown fox jumps over the lazy dog."))
console.log(isPangram("This is not a pangram."))

console.log(removeNb(26))
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]))
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))
console.log(nbMonths(2000, 8000, 1000, 1.5))
console.log(findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a']))

import { maskify } from "./maskify"
import { narcissistic } from "./narcissistic"
import { descendingOrder } from "./descending-order"
import { isPangram } from "./detect-pangram";
import { comp } from "./are-they-same"
import { numberOfPeople } from "./bus-stop"

console.log(maskify("12345"))
console.log(narcissistic(153))
console.log(descendingOrder(5415))

let a = [121, 144, 19, 161, 19, 144, 19, 11]
let b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
console.log(comp(a, b))

console.log(numberOfPeople([[10, 0], [3, 5], [5, 8]]))

console.log(isPangram("The quick brown fox jumps over the lazy dog."))
console.log(isPangram("This is not a pangram."))

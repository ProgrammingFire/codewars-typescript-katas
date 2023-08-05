import { maskify } from "./maskify"
import { narcissistic } from "./narcissistic"
import { descendingOrder } from "./descending-order"

import { comp } from "./are-they-same"

console.log(maskify("12345"))
console.log(narcissistic(153))
console.log(descendingOrder(5415))

let a = [121, 144, 19, 161, 19, 144, 19, 11]
let b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

console.log(comp(a, b))

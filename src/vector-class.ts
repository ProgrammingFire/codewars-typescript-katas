export class Vector {
  private numbers: number[]

  add(vect: Vector): Vector {
    return new Vector(this.numbers.map((n, i) => n + vect.numbers[i]))
  }
  subtract(vect: Vector): Vector {
    return new Vector(this.numbers.map((n, i) => n - vect.numbers[i]))
  }
  dot(vect: Vector): number {
    return this.numbers.map((n, i) => n * vect.numbers[i]).reduce((a, b) => a + b)
  }
  norm(): number {
    let num = this.numbers.map((n) => Math.pow(n, 2)).reduce((a, b) => a + b)
    return Math.sqrt(num)
  }
  equals(vect: Vector): boolean {
    return this.numbers.every((n, i) => n === vect.numbers[i])
  }
  toString(): string {
    return `(${this.numbers.map((n) => n.toString()).join(',')})`
  }

  constructor(components: number[]) {
    this.numbers = components
  }
};

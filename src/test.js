
let a = {
    name: "it",
    arr: ['a','b','c']
}

let c = { ...a}

c.arr.push("s")

c.name = 'it dimich'

console.log(a)
console.log(c)


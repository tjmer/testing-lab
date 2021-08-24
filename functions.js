
module.exports = {
    returnTwo: ()=> {
        return 2
    },
    greeting: (name) => {
        return `Hello, ${name}`
    },
    add: (num1, num2)=> {
        let sum = num1 + num2
        return sum
    },
    subtract: (num1, num2)=> {
        let sub = num1 - num2
        return sub
    },
    multiply: (num1, num2)=> {
        let mult = num1 * num2
        return mult
    },
    divide: (num1, num2)=> {
        let div = num1 / num2
        return div
    }
}
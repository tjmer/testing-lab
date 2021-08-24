const {returnTwo, greeting, add, subtract, multiply, divide}= require("./functions")

test('Should return 2', ()=>{
    expect(returnTwo()).toEqual(2)
})

test('Should return with Hello name', ()=>{
    expect(greeting('James')).toContain('Hello, James')
    
    expect(greeting('Jill')).toContain('Hello, Jill')
})

describe("Math functions", ()=>{
    
    
    test('Should return a sum of two numbers', ()=>{
        expect(add(1,2)).toEqual(3)
        
        expect(add(5, 9)).toEqual(14)
    })
    
    test("Should subtract two numbers", ()=>{
        expect(subtract(5, 4)).toEqual(1)
        
        expect(subtract(5, 6)).toEqual(-1)
    })
    
    test('Should multiply two numbers', ()=>{
        expect(multiply(2, 5)).toEqual(10)
        
        expect(multiply(3, 3)).toEqual(9)
    })
    
    test('Should divide two numbers', ()=>{
        expect(divide(4, 2)).toEqual(2)
        
        expect(divide(12, 3)).toEqual(4)
    })
})
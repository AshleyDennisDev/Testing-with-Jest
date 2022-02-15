

const {sum, square, cube} = require("./index")

describe("Should contain tests for sum", () => {
    it("should add 2 numbers", () => {
        // Arrange
        const a = 4
        const b = 6
        const expectedResult = 10  
        // can also be: const expectedResult = a + b
       
        // Act
        const actual = sum(a,b)

        // Assert
        expect(actual).toBe(expectedResult)
    })
})

it("should return error for invalid input", () => {
    // Arrange
    const a = null
    const b = 6
    const expectedResult = "Invalid Input"  
    // can also be: const expectedResult = a + b
   
    // Act
    const actual = sum(a,b)

    // Assert
    expect(actual).toBe(expectedResult)
})

describe("should contain tests for square", () => {
    it("should square a number", () => {
        // Arrange
        const num = 8
        const expectedResult = 64

        //Act
        const actual = square(num)

        // Assert
        expect(actual).toBe(expectedResult)
    })
})

it("should return error for invalid input", () => {
    // Arrange
    const a = null
    const expectedResult = "Invalid Input"  
   
    // Act
    const actual = square(a)

    // Assert
    expect(actual).toBe(expectedResult)
})

describe("should contain tests for cube", () => {
    it("should cube a number", () => {
        // Arrange
        const num = 2
        const expectedResult = 8

        //Act
        const actual = cube(num)

        // Assert
        expect(actual).toBe(expectedResult)
    })
})
it("should return error for invalid input", () => {
    // Arrange
    const a = null
    const expectedResult = "Invalid value"  
   
    // Act
    const actual = cube(a)

    // Assert
    expect(actual).toBe(expectedResult)
})
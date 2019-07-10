import { add, subtract, divide, multiply } from '../src/calculator'

describe('Calculator tests', () => {
  test('add 2 numbers', () => {
    expect(add(1, 2)).toBe(3)
  })

  test('subtract 2 numbers', () => {
    expect(subtract(5, 2)).toBe(3)
  })

  test('divide 2 numbers', () => {
    expect(divide(10, 2)).toBe(5)
  })

  test('multiply 2 numbers', () => {
    expect(multiply(3, 4)).toBe(12)
  })
})
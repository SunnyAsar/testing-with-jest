'use strick'
import { wrap } from '../src/caesar_cipher'
import { cipher } from '../src/caesar_cipher'



describe('Ceaser Cipher Tests', () => {
  
  test('word transposition same case', () => {
    expect(cipher('a', 1)).toBe('b')
  })

  test('wrap z to a',() => {
    expect(cipher('z',1)).toBe('a')
  })

  test('punctuation!',() => {
    expect(cipher('man!',2)).toBe('ocp')
  })

  
})

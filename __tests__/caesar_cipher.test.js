'use strick'
import { caesarCipher } from '../src/caesar_cipher'



describe('Ceaser Cipher Tests', () => {

  test('word transposition same case', () => {
    expect(caesarCipher('Microverse', 7)).toBe('Tpjyvclyzl')
  })

  test('wrap z to a',() => {
    expect(caesarCipher('Zero',1)).toBe('Afsp')
  })

  test('punctuation!',() => {
    expect(caesarCipher('microverse.<?1', 7)).toBe('tpjyvclyzl.<?1')
  })


})

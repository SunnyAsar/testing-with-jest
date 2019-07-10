import  { captialize , reverseString}  from '../src/main'

test.todo('This is a todo test example')

test('Captialize word', () => {
  expect(captialize('hello')).toBe('HELLO')
})

test('Reverse string', () => {
  expect(reverseString('boy')).toBe('yob')
})

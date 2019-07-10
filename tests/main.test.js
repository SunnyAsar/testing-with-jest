import  { captialize , reverseString}  from '../src/main'



test.todo('hello')
test('Captialize word',()=>{
  expect(captialize('hello')).toBe('HELLO')
})

test('reverseString', ()=>{
  expect(reverseString('boy')).toBe('yob')
})

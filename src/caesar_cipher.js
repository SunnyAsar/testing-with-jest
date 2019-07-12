'user strict'

export function caesarCipher(word, shift){
  let output = ''

  if(shift < 0){
    cipher(word, shift+26)
  }

  word.split('').forEach((letter) =>{
    if(letter.match(/[a-z]/i)){
      letter = letter.charCodeAt()

      if ((letter >= 65) && (letter <= 90)) {
        output += String.fromCharCode(((letter - 65 + shift) % 26) + 65);
      }else if ((letter >= 97) && (letter <= 122)) {
        output += String.fromCharCode(((letter - 97 + shift) % 26) + 97);
      }
    } else {
      output += letter
    }
  })

  return output
}

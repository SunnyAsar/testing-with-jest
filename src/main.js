'use strict'

import { reverse } from "dns";

export function captialize(word){
  const arrWord = word.split('')
  arrWord[0] = arrWord[0].toUpperCase()
  return arrWord.join('')
}

export function reverseString(word){
  return word.split("").reverse().join("")
}

'use strict'

import { reverse } from "dns";

export function captialize(word){
  return word.toUpperCase()
}

export function reverseString(word){
  return word.split("").reverse().join("")
}



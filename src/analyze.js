'use strict'

const sum = (sum, el) => sum + el
const minimum = (min, el) => el < min ? el : min
const maximum = (max, el) => el > max ? el : max

export function analyze(arr) {
  return {
    average: arr.reduce(sum) / arr.length,
    min: arr.reduce(minimum),
    max: arr.reduce(maximum),
    length: arr.length
  }
}
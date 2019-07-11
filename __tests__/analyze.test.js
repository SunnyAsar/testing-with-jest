import { analyze } from '../src/analyze'

describe('Analyze function', () => {
  const object = analyze([1, 8, 3, 4, 2, 6])
  it('object result match', () => {
    expect(object).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    })
  })
})
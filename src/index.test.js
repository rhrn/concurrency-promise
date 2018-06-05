import { promiseAll, split } from './'

describe('array chunks', () => {
  let chunks
  const a1 = [1, 2, 3, 4, 5]

  it('split', () => {
    chunks = split(a1, 2)

    expect(chunks[0]).toEqual([1, 2])
    expect(chunks[1]).toEqual([3, 4])
    expect(chunks[2]).toEqual([5])
  })
})

describe('promise concurrency', () => {
  it('concurrency', async () => {
    const result = []

    const promises = new Array(10).fill().map((v, i) => {
      return () => {
        result.push(i)
        return Promise.resolve(i)
      }
    })

    const resolved = await promiseAll(promises, 3)

    expect(resolved).toEqual(result)
  })
})

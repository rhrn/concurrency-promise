export function split (array, limit = 1) {
  const chunks = []

  while (array.length > 0) {
    chunks.push(array.splice(0, limit))
  }

  return chunks
}

export async function promiseAll (promises, limit) {
  if (!promises.length) {
    return []
  }

  let result = []

  const chunks = split(promises, limit)

  const last = chunks.reduce(async (a, b) => {
    const data = await a

    result = result.concat(data)

    return Promise.all(b.map(f => f()))
  }, Promise.all([]))

  const data = await last

  result = result.concat(data)

  return result
}

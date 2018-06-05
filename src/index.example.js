// import { promiseAll } from 'concurrency-promise'
import { promiseAll } from './'

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const wrapped = data.map(i => {
  return () => {
    // Here your promise
    return Promise.resolve(i * i)
  }
})

async function run () {
  // will split in chunks and execute by Promise.all
  const result = await promiseAll(wrapped, 3)
  console.log(result) //  [ 0, 1, 4, 9, 16, 25, 36, 49, 64, 81 ]
}

run()

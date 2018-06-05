# concurrency-promise
```
Split promises in chunks and execute by Promise.all
```

## install
```
npm install --save concurrency-promise
```


## Usage
```
import { promiseAll } from 'concurrency-promise'

const data = [0,1,2,3,4,5,6,7,8,9]

// First wrap promises by function
const wrapped = data.map(i => {

  return () => {
    // Here your promise
    return Promise.resolve(i * i)
  }

})


async function run() {
  // will split in chunks and execute by Promise.all
  const result = await promiseAll(wrapped, 3)
  console.log(result)
}

run()
```

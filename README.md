# promise-count

Come in handy a few times; an alternative to `Promise.all` but without the fail-fast behaviour
```js
const promise1 = new Promise((resolve, reject) => setTimeout(() => reject(1), 5000))
const promise2 = new Promise((resolve, reject) => resolve(2))
promises = [promise1, promise2, promise2]
```
```js
// calling PromiseCount(promises) would resolve to 
[{success: true, value: 2}, {success: true, value: 2}, { success: false, value: 1}]
```

Example usage
```js
async () => {
  const promises = [promise1, promise2, promise2]

  const results = await PromiseCount(promises)

  console.log('Number of resolved promises:', results.filter(r => r.success).length)
  console.log('Number of rejected promises:', results.filter(r => !r.success).length)
}
```


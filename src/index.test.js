const PromiseCount = require('./index.js')

describe('the promiseCount function', () => {
  let promises
  beforeEach(() => {
    const promise1 = new Promise((resolve, reject) => setTimeout(() => reject(1), 500))
    const promise2 = new Promise((resolve, reject) => resolve(2))
    promises = [promise1, promise2, promise2]
  })

  test('works as expected', async () => {
    expect(await PromiseCount(promises)).toEqual(
      [{ success: true, value: 2 }, { success: true, value: 2 }, { success: false, value: 1 }]
    )
  })

  test('throw a custom error if an argument is not a promise', async () => {
    promises[1] = 'Not a promise'
    let error
    try {
      await PromiseCount(promises)
    } catch(e) {
      error = e
    }
    expect(error).toEqual(Error('Argument 2 is not a promise'))
  })
})
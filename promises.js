let fifteen = Promise.resolve(14)
// fifteen.then((val) => console.log(val))

const apiPromise = () =>
  new Promise((resolve, reject) => {
    const randomNum = Math.floor(Math.random() * 10)
    console.log(randomNum)
    if (randomNum <= 5) {
      let success = { id: 123, userName: 'Hello' }
      resolve(success)
    }
    if (randomNum > 5) {
      let error = { error: '404' }
      reject(error)
    }
  })

apiPromise()
  .then((res) => console.log(res))
  .catch((err) => console.log(err))

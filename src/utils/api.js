export const loginRequest = async (login, password) => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 200)
  }).then(() => {
    if (login === 'admin' && password === 'admin') {
      return 'www.mwp.io'
    } else {
      return 'invalid'
    }
  })
}

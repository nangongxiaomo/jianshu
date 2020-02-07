import axios from 'axios'

axios.defaults.timeout = '10000'
// axios.defaults.baseURL = 'https://easy-mock.com/mock/5e09ca2b08f7e84791397423/react'

export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, params)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

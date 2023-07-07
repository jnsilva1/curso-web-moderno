import axios from 'axios'
const UNAUTHORIZED = 401

const success = (res) => res
const failure = (error) => {
  if (UNAUTHORIZED === error.response.status) {
    window.location = '/'
  } else {
    return Promise.reject(error)
  }
}

axios.interceptors.response.use(success, failure)

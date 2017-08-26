import axios from 'axios'

export const fetchStores = (before, after) => {
  before()

  axios.get(`/api/stores`)
    .then(function (response) {
      after(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

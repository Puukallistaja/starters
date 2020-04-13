import axios from "axios"

const apiClient =  axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: { Auth: `Bearer ${localStorage.getItem("accessToken")}` },
  timeout: 3000,
})

apiClient.interceptors.request.use((success) => {
  console.log("intercepted successful request")
  console.log(success)
  return success
}, (error) => {
  console.log("intercepted errored request")
  console.error(error)
  return error
})

apiClient.interceptors.response.use((success) => {
  console.log("intercepted successful response")
  console.log(success)
  return success
}, (error) => {
  console.log("intercepted errored response")
  console.error(error)
  return error
})

export default apiClient
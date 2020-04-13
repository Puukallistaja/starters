import apiClient from "src/api"

const todoService = {
  getTodo(id) {
    return apiClient.get(`todos/${id}`)
  },
}

export default todoService
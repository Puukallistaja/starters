import api from "src/api/todos"

export const actions = {
  async fetchTodos(ctx, id) {
    return (await api.getTodo(id)).data
  },
}

<template lang="pug">
  div ComponentTemplate
</template>

<script>
import { mapActions } from "vuex"

export default {
  name: "ComponentTemplate",
  data() {
    return {}
  },
  methods: {
    ...mapActions("todos", ["fetchTodos"]),
  },
  async mounted() {
    await this.fetchTodos(1)
  },
}
</script>

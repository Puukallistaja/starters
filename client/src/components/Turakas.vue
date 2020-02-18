<template lang="pug">
  .turakas
    keep-alive
    q-fab.fixed-center(
      external-label
      outline
      round
      aria-label="Show actions"
      color="primary"
      direction="right"
      icon="add"
      label="open"
      label-position="top"
      size="6rem"
      vertical-actions-align="left"
      v-model="open"
      @click="changeRoute"
    )
       q-fab-action(external-label label-position="top" label="opene" color="primary" icon="person_add") 
</template>

<script>
export default {
  name: "Turakas",
  data: {
    open: true,
  },
  methods: {
    changeRoute() {
      setTimeout(() => {
        this.$router.push(this.$route.name === 'turakas' ? '/' : 'turakas')
      }, 500)
    }
  },
  destroyed() {
    console.log('gone')
  }
}
</script>

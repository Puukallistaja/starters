<template lang="pug">
  .turakas
    q-expansion-item.fixed-center(
      expand-separator
      icon="perm_identity"
      label="Account settings"
      caption="John Doe"
      v-model="open"
      @click.stop.prevent.native="changeRoute"
    )
</template>

<script>
export default {
  name: "Turakas",
  data() {
    return{
      open: true,
    }
  },
  methods: {
    changeRoute() {
      setTimeout(() => {
        this.$router.push(this.$route.name === 'turakas' ? '/' : 'turakas')
      }, 500)
    }
  },
  updated() {
    console.log('will update')
  },
  destroyed() {
    console.log('gone')
  },
  watch: {
    open: {
      handler(is, was) {
        console.log(is, was)
      },
      immediate: true,
    }
  }
}
</script>

<template lang="pug">
  q-layout
    q-page-container
      router-view
        h1.text-h1 Route: {{ $route.name }}
      turakas
</template>

<script>
import Turakas from "components/Turakas"
import Expansion from "components/Expansion"
export default {
  name: "Canvas",
  components: {
    Turakas,
    Expansion,
  },
  data() {
    return {
      test: 3,
    }
  },
  mounted() {
    setTimeout(() => {
      this.test++
    }, 3000)
  }
}
</script>

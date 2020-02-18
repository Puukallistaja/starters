<template lang="pug">
  q-layout
    q-page-container
      router-view
        h1.text-h1 Route:  {{ $route.name }}
      turakas
</template>

<script>
import Turakas from "components/Turakas"
export default {
  name: "Canvas",
  components: {
    Turakas,
  },
  data() {
    return {}
  },
}
</script>

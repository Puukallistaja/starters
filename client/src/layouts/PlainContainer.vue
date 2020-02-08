<template lang="pug">
  q-layout

    q-page-container
      router-view
      the-turakas
</template>

<script>
import TheTurakas from "components/TheTurakas"
export default {
  name: "PlainContainer",
  components: {
    TheTurakas,
  },
  data() {
    return {}
  },
}
</script>

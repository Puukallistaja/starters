<template lang="pug">
q-layout

  q-page-container
    router-view
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

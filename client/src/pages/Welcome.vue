<template lang="pug">
  q-page.flex.flex-center
    slot Welcome {{ $route.name }}
</template>

<script>
export default {
  name: 'PageContainer'
}
</script>

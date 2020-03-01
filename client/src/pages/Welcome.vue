<template lang="pug">
  q-page.flex.flex-center.bg-light-blue-4
    slot {{ $route.name }}
</template>

<script>
export default {
  name: 'PageContainer'
}
</script>

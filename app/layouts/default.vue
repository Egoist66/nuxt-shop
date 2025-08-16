<script setup lang="ts">

</script>

<template>
  <header  v-if="$slots.header">
    <slot  name="header" />
  </header>

  <main>
    <slot />
  </main>

  <footer  v-if="$slots.footer">
    <slot name="footer" />
  </footer>
</template>

<style scoped></style>

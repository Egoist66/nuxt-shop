<script setup lang="ts">

</script>

<template>
  <header  v-if="$slots.header">
    <div class="container px-5 m-auto">
      <slot  name="header" />
    </div>
  </header>

  <main>
    <div class="container px-5 m-auto">
      <slot />
    </div>
  </main>

  <footer  v-if="$slots.footer">
    <div class="container px-5 m-auto">
      <slot name="footer" />
    </div>
  </footer>
</template>

<style scoped></style>

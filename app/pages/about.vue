<script setup lang="ts">


 const data = await new Promise((res, rej) => {
  setTimeout(() => {
    res('Pusy tight tonight! Pusy tiyaaayt!! 😁')
  }, 2000)
 })


console.log(data);
</script>
<template>
  <section>
    
    Page: about

    
  </section>
</template>

<style scoped></style>

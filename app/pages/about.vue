<script setup lang="ts">


 const data = await new Promise((res, rej) => {
  setTimeout(() => {
    res('Pusy tight tonight! Pusy tiyaaayt!! 😁')
  }, 2000)
 })


console.log(data);
</script>

<template>
  <div>
    
    Page: about

    
  </div>
</template>

<style scoped></style>

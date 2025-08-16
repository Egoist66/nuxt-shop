<script setup lang="ts">
const cssConfig = {
  class: ["bg-blue-500 text-white p-3 rounded-md w-[200px] block"],
  id: 'navigator',
  
};

const val = ref('')

</script>

<template>
  <div class="p-5">
    <h1>{{ $route?.name?.toString().toUpperCase() }}</h1>

    <NuxtLink no-prefetch to="/about">Go to About</NuxtLink>
    <button @click="navigateTo({ name: 'about', query: { id: 1 } })" v-bind="cssConfig">
      Перейти
    </button>


    <UiInputField placeholder="Input" v-model:data="val" variant="gray" />

    <Icon size="30" name="entypo-social:twitter" />

  </div>
</template>

<style scoped></style>

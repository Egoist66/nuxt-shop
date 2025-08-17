<script setup lang="ts">

    const [emailValue] = defineModel<string>("data", { required: true });

</script>
<template>
  <form class="flex items-center" @submit.prevent="(e) => console.log(e)">
    <UiInputField
      v-model:data="emailValue"
      pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
      type="email"
      name="email"
      placeholder="Ваш email для акций и предложений"
      variant="black"
    />
    <button type="submit" class="flex items-center">
      <Icon size="30" name="ant-design:arrow-right-outlined" />
    </button>
  </form>
</template>

<style scoped></style>

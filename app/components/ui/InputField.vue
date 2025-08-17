<script setup lang="ts">
const { variant = "gray" } = defineProps<{
  variant?: "gray" | "black";
}>();
const [model] = defineModel<string>("data", { required: true });
</script>

<template>
    <input type="text" 
        :class="[variant, 'input']" 
        v-model.trim="model" 
        :data-value="model" 
    />
</template>

<style scoped lang="postcss">
.input {
  @apply py-3 px-0 bg-transparent border-none text-black w-full outline-none;

  &::placeholder {
    @apply text-[#707070];
  }

  &.gray {
    @apply border-b border-solid border-[#d8d8d8];
  }

  &.black {
    @apply border-b border-solid border-[#000];
  }
}
</style>

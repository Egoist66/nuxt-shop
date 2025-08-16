<script setup lang="ts">

const {color = 'primary'} = defineProps<{
    color?: 'primary' | 'ghost'
}>()


</script>

<template>
    <button  :class="color">
        <slot />
    </button>
</template>

<style scoped lang="postcss">

.primary {
    @apply border-none rounded transition duration-300 hover:bg-[#222] will-change-contents cursor-pointer font-semibold text-base bg-black text-white p-3 w-[200px] block;

}

.ghost {
    @apply border border-black transition duration-300 hover:bg-[black] hover:text-white  will-change-contents bg-white rounded cursor-pointer font-semibold text-base text-black p-3 w-[200px] block;
}
</style>
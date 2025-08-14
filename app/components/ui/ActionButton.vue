<script setup lang="ts">

const {color = 'primary'} =defineProps<{
    color: 'primary' | 'ghost'
}>()

</script>

<template>
    <button :class="color">
        <slot />
    </button>
</template>

<style scoped lang="postcss">
.primary {

}
</style>
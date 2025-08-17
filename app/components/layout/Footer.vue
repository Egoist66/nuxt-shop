<script setup lang="ts">
const footerLinks: Array<{ name: string; url: string }> = [
  {
    name: "Контакты",
    url: "/contacts",
  },
  {
    name: "Условия покупки",
    url: "/conditions",
  },
  {
    name: "Доставка и возврат",
    url: "/delivery-and-return",
  },
];

const emailValue = shallowRef<string>("");
</script>

<template>
    <div class="flex items-center pb-5 justify-between">
        <div class="links">
        <ul class="flex items-center gap-5">
            <li :key="idx" v-for="(link, idx) in footerLinks">
            <NuxtLink :to="link.url">
                {{ link.name }}
            </NuxtLink>
            </li>
        </ul>
        </div>

        <div class="email">
            <SharedSubscribeForm v-model:data="emailValue" />
        </div>
    </div>

    <div class="flex items-center justify-between">
        <p>&copy; {{ new Date().getFullYear() }} Все права защищены Shoppe</p>
        <SharedSocials />

    </div>
</template>

<style scoped></style>

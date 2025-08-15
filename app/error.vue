<script setup lang="ts">
import type { NuxtError } from "#app";



const { error } = defineProps<{ error: NuxtError }>();

useHead({
  title: `Ошибка ${error.statusCode} - ${error.message}`,
})

const computedEmoji = computed(() => {
  switch (error.statusCode) {
    case 404:
      return "👀";
    case 500:
      return "🤯";
    default:
      return "😔";
  }
});

const computedMessage = computed(() => {
  switch (error.statusCode) {
    case 404:
      return "Страница не найдена - попробуйте перейти на главную";
    case 500:
      return "Что-то пошло не так";
    case 403:
      return "Доступ запрещен";
    case 503:
      return "Сервис временно недоступен";
    default:
      return "Что-то пошло не так";
  }
});


</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-5xl text-center pb-3">  {{ computedEmoji }} {{ error?.statusCode }} - Ошибка</h1>
    <h3 class="pb-10 text-[#222]">{{ computedMessage }}</h3>

    <UiActionButton @click="$router.replace('/')" color="ghost"
      >На главную</UiActionButton
    >
  </div>
</template>

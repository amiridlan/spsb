<template>
  <div v-if="isLoading" class="fixed inset-0 z-50 flex items-center justify-center bg-primary">
    <div class="text-center">
      <div class="relative w-24 h-24 mx-auto mb-4">
        <div class="absolute inset-0 border-4 border-secondary/30 rounded-full"></div>
        <div class="absolute inset-0 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
      </div>
      <p class="text-white text-lg font-semibold">Loading...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isLoading = ref<boolean>(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1500)
})
</script>
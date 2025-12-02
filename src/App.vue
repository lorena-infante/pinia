<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';

</script>

<template>
  <Header />
  <main class="container mx-auto mt-8">
    <RouterView />
  </main>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import DetalleReceta from './components/DetalleReceta.vue';
</script>

<template>
  <Header />
  <main class="container mx-auto mt-8">
    <RouterView />
  </main>
  <DetalleReceta />
</template>
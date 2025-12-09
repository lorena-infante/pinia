<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';
import { computed } from 'vue';
import { useBebidasStore } from '@/stores/bebidas';

interface Categoria {
    strCategory: string;
}

const route = useRoute();
const paginaInicio = computed(() => route.name === 'inicio');

const bebidasStore = useBebidasStore();

// typed wrapper so template type-checking knows the shape of each category
const categorias = computed<Categoria[]>(() => (bebidasStore.categorias as unknown) as Categoria[]);

console.log(bebidasStore.categorias)

</script>

<template>
    <header class="bg-slate-800" :class="{ header: paginaInicio }">
        <div class="mx-auto container px-5 py-16">
            <div class="flex justify-between items-center">
                <div>
                    <RouterLink :to="{ name: 'inicio' }">
                        <img class="w-32" src="../img/logo.svg" alt="Logotipo">
                    </RouterLink>

                </div>
                <nav class="flex gap-4 text-white font-bold uppercase">
                    <RouterLink :to="{ name: 'inicio' }" active-class="text-orange-500">Inicio</RouterLink>
                    <RouterLink :to="{ name: 'favoritos' }" active-class="text-orange-500">Favoritos</RouterLink>
                </nav>
            </div>
            <form v-if="paginaInicio" class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6">

                <div class="space-y-4">
                    <label class="block text-white uppercase font-extrabold text-lg" for="ingrediente">
                        Nombre o Ingredientes </label>
                    <input id="ingrediente" type="text" class="p-3 w-full rounded-lg focus:outline-none bg-white"
                        placeholder="Nombre o ingrediente: Ej. Vodka, Tequila, etc"
                        v-model="bebidasStore.busqueda.nombre" />

                    <select id="categoria" type="text" class="p-3 w-full rounded-lg focus:outline-none bg-white"
                        v-model="bebidasStore.busqueda.categoria">
                        <option value="">-- Selecciona --</option>
                        <option v-for="categoria in bebidasStore.categorias" :key="categoria.strCategory"
                            :value="categoria.strCategory">
                            {{ categoria.strCategory }}
                        </option>

                    </select>
                </div>
                <input type="submit"
                    class="bg-orange-800 hover:bg-orange-900 cursor-pointer text-white font-extrabold w-full p-2 rounded-lg uppercase"
                    value="Buscar Recetas" />

            </form>
        </div>
    </header>
</template>



<style lang="scss" scoped>
.header {
    background-image: url('../img/bg.jpg');
    background-size: cover;
    background-position: center center;
}
</style>
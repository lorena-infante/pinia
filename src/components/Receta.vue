<script setup lang="ts">
import { useBebidasStore } from '@/stores/bebidas'
import { useDetalleRecetaStore } from '@/stores/detalleReceta';
interface Receta {
    idDrink: string,
    strDrink: string,
    strDrinkThumb: string
}
defineProps<{ receta: Receta }>()

const bebidasStore = useBebidasStore();
const detalleRecetaStore = useDetalleRecetaStore();


function verReceta(id: string) {
    bebidasStore.obtenerDetalleReceta(id);
    detalleRecetaStore.showModal = true;
}

</script>
<template>
    <div class="relative border-cyan-950 shadow-lg rounded-lg overflow-hidden ">
        <div>
            <img class="max-h-85 w-full object-cover object-top hover:scale-125 transition-transform hover:rotate-2"
                :src="receta.strDrinkThumb" :alt="'Imagen de ' + receta.strDrink" />
            <h2
                class="absolute left-0 right-0 top-1/2 -translate-y-1/2 text-center text-lg md:text-2xl lg:text-3xl font-extrabold text-white bg-[rgba(128,122,137,0.5)]">
                {{
                    receta.strDrink }}</h2>
        </div>
        <button type="button" class="bg-orange-400 mt-5 w-full p-3 font-bold text-white text-lg"
            @click="verReceta(receta.idDrink)">
            Ver Receta
        </button>

        <DetalleReceta v-if="detalleRecetaStore.showModal" :showModal="detalleRecetaStore.showModal" />
    </div>
</template>
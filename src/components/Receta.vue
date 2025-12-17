<script setup lang="ts">
interface Receta {
    idDrink: string,
    strDrink: string,
    strDrinkThumb: string
}
defineProps<{ receta: Receta }>()

</script>
<template>
    <div class="relative border-cyan-950 shadow-lg rounded-lg max-h-85 overflow-hidden ">
        <div class="max-h-85">
            <h2
                class="absolute left-0 right-0 top-1/2 -translate-y-1/2 text-center text-lg md:text-2xl lg:text-3xl font-extrabold text-white bg-[rgba(128,122,137,0.5)]">
                {{
                    receta.strDrink }}</h2>
            <img class="max-h-85 w-full object-cover object-top hover:scale-125 transition-transform hover:rotate-2"
                :src="receta.strDrinkThumb" :alt="'Imagen de ' + receta.strDrink" />
        </div>

    </div>
</template>
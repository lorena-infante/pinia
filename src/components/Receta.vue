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
            <h2 class="beverage-title">{{
                receta.strDrink }}</h2>
            <img class="max-h-85 w-full object-cover object-top hover:scale-125 transition-transform hover:rotate-2"
                :src="receta.strDrinkThumb" :alt="'Imagen de ' + receta.strDrink" />
        </div>

    </div>
</template>

<style scoped>
.beverage-title {
    font-size: 1.9rem;
    font-weight: 500;
    text-overflow: ellipsis;
    position: absolute;
    top: 70%;
    text-align: center;
    width: 100%;
    height: fit-content;
    bottom: 50%;
    color: floralwhite;
    background-color: rgba(128, 122, 137, .5);
}
</style>
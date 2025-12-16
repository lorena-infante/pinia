<script setup lang="ts">
interface Receta {
    idDrink: string,
    strDrink: string,
    strDrinkThumb: string
}
defineProps<{ receta: Receta }>()

</script>
<template>
    <div>
        <h2>{{ receta.strDrink }}</h2>
    </div>
</template>

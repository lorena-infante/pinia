import { defineStore } from "pinia";
import { ref } from "vue";

export const useDetalleRecetaStore = defineStore('detalleReceta', () => {
    const showModal = ref(false);

    function handleclickModal() {
        showModal.value = !showModal.value;
    }
    return {
        showModal,
        handleclickModal
    }
});
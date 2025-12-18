import { ref, reactive, onMounted } from 'vue'
import { defineStore } from 'pinia'
import APIService from '@/services/APIService'
import { useDetalleRecetaStore } from './detalleReceta'

export const useBebidasStore = defineStore('bebidas', () => {
  const detalleRecetaStore = useDetalleRecetaStore();
  const categorias = ref([])
  const busqueda = reactive({
    nombre: '',
    categoria: '',
  })
  const recetas = ref([])
  const idBebida = ref('');

  onMounted(async () => {
    const {
      data: { drinks },
    } = await APIService.obtenerCategorias()
    console.log(drinks)

    categorias.value = drinks
  })

  async function obtenerRecetas() {
    const {
      data: { drinks },
    } = await APIService.buscarRecetas(busqueda)
    recetas.value = drinks
    console.log(drinks)
  }


  async function obtenerDetalleReceta(id: string) {
    const { data: { drinks } } = await APIService.obtenerDetalleReceta(id);
    console.log(drinks[0]);
    detalleRecetaStore.handleclickModal();
  }

  return {
    categorias,
    busqueda,
    obtenerRecetas,
    recetas,
    obtenerDetalleReceta,

  }
})

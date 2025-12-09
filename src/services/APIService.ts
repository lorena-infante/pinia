import api from '../lib/axios'

export default {
  obtenerCategorias() {
    return api('/list.php?c=list')
  },
  buscarRecetas({ categoria, nombre }: { categoria: string; nombre: string }) {
    return api(`/filter.php?c=${categoria}&i=${nombre}`)
  },
}

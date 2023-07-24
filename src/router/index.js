import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/ClientesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'listado-clientes',
      component: Inicio,
      props: { titulo: 'Listado de Clientes' }
    },
    {
      path: '/agregar-cliente',
      name: 'agregar-cliente',
      component: () => import('../views/NuevoCLiente.vue'),
      props: { titulo: 'Agregar Clientes' }
    },
    {
      path: '/editar-cliente/:id',
      name: 'editar-cliente',
      component: () => import('../views/EditarCLiente.vue'),
      props: { titulo: 'Editar Clientes' }
    }

  ]
})

export default router

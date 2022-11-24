
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/Dashboard', component: () => import('pages/IndexPage.vue') },
      { path: '/Input', component: () => import('pages/Input.vue') }
    ]
  },
  {
    path: '/Login',
    // component: () => import('pages/Acces/LoginPage.vue'),
    children: [
      { path: '/Login', component: () => import('pages/Access/LoginPage.vue') }
      // { path: '/Registrasi', name: 'registrasi', component: () => import('pages/Acces/RegisterPage.vue') }
    ]
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import('pages/Acces/RegisterPage.vue')
  }

  // Always leave this as last one,
  // but you can also remove it

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

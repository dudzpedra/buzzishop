import { createRouter, createWebHistory } from 'vue-router';

import ProductsList from './pages/ProductsList.vue';
import UserCart from './pages/UserCart.vue';
import ShopAdmin from './pages/ShopAdmin.vue';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Brecho from './pages/Brecho.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/products', component: ProductsList },
    { path: '/brecho', component: Brecho },
    { path: '/about', component: About},
    { path: '/cart', component: UserCart },
    { path: '/admin', component: ShopAdmin },
  ]
});

export default router;
require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';

window.Vue.use(VueRouter);

import CompaniesIndex from './components/companies/CompaniesIndex.vue';
import CompaniesCreate from './components/companies/CompaniesCreate.vue';
import CompaniesEdit from './components/companies/CompaniesEdit.vue';
import DashBoardIndex from './components/admin/DashboardIndex.vue';
const routes = [
    {
        path: '/',
        components: {
            dashboardIndex: DashBoardIndex
        }
    },
    {
        path: '/admin/companies',
        components: {
            companiesIndex: CompaniesIndex
        }
    },
    {path: '/admin/companies/create', component: CompaniesCreate, name: 'createCompany'},
    {path: '/admin/companies/edit/:id', component: CompaniesEdit, name: 'editCompany'},
]
Vue.component('dashboard-component', require('./components/admin/DashBoardComponent.vue').default);

const router = new VueRouter({ routes })

const app = new Vue({ router }).$mount('#app')

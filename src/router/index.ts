
import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import SignupForm from "../views/form-demo/SignupForm.vue";
import DynamicForm from "../views/form-demo/DynamicForm.vue";
import ArrayBinding from "../views/form-demo/ArrayBinding.vue";
import DynamicRules from "../views/form-demo/DynamicRules.vue";
import LoadFormData from "../views/form-demo/LoadFormData.vue";
import DynamicObject from "../views/form-demo/DynamicObject.vue";



import Login from '../views/login/Login.vue';
import MainPage from '../views//MainPage.vue';
import FormDemo from '../views/formDemo/FormDemo.vue';


const routes: Array<RouteRecordRaw> = [
   
    {path: '/login', component: Login},
    {
        path: '',
        component: MainPage,
        children: [
            {path: '', redirect: '/demo'},
            {path: '/demo', component: FormDemo},
        ]
    },
   
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

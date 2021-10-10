import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import store from './store'
//import axios from 'axios';
import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
//import "bootstrap/dist/js/bootstrap.min.js";

import "./app.css"
import "./template.css"
import "./app.js"

createApp(App).use(router).use(store).mount("#app");

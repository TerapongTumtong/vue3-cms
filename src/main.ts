import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import store from './store'
import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
//import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "./app.css"
import "./template.css"
import "./app.js"

createApp(App).use(router).use(store).mount("#app");

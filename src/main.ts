import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js";
// data table
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";

// template web
import "./assets/app.css"
import "./assets/template.css"
import "./assets/app.js"
// bootstrap


createApp(App).use(router).use(store).mount("#app");

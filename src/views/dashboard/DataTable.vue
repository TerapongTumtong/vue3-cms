<script>
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import axios from "axios"; //for api calling
import $ from "jquery";

export default {
  props: {
    modelsearch: [],
    resetTable: Boolean
  },
  beforeCreate() {
    console.log("Value of val is: " + this.modelsearch);
  },
  methods: {
    clearTable() {
      setTimeout(function () {
        $("#example").DataTable({
          lengthMenu: [
            [5, 10, 25, 50, -1],
            [5, 10, 25, 50, "All"]
          ],

          //frtiplB
          dom:
            "<'row'f<'col-sm-12 col-md-12'><'col-sm-12 col-md-12 col-lg-12' >>" +
            "<'row'<'col-sm-12 p-1'tr>> " +
            "<'row'<'col-sm-12 col-md-5'l><'col-sm-12 col-md-7'ip>>",

          oLanguage: {
            sSearch: "Filter..",
            sLengthMenu: "Display _MENU_ records per page",
            sZeroRecords: "No records to display",
            sInfo: "total of _TOTAL_  (_START_ to _END_)",
            oPaginate: {
              sNext: "Next",
              sPrevious: "Previous"
            }
          }
        });
      }, 0);
    }
  },
  mounted() {
    if (this.resetTable) {
      this.datas = [];
      this.clearTable();
      return;
    }
    if (this.modelsearch.length == 0) {
      this.datas = [];
      this.clearTable();
      return;
    }
    if (this.modelsearch.email == "" || this.modelsearch.password == "") {
      this.datas = [];
      this.clearTable();
      return;
    }

    axios.get("https://www.testjsonapi.com/users/").then(res => {
      this.datas = res.data;
      this.clearTable();
    });
  },
  data: function () {
    return {
      datas: []
    };
  }
};
</script>
<template>
  <div id="divToPrint">
    <table class="table table-hover table-bordered" id="example">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Job Title</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in datas" :key="data.id">
          <td>{{ data.id }}</td>
          <td>{{ data.name }}</td>
          <td>{{ data.email }}</td>
          <td>{{ data.job_title }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
table.dataTable thead .sorting {
  background-image: url("#");
}
table.dataTable thead .sorting_asc {
  background-image: url("#") !important;
}
table.dataTable thead .sorting_desc {
  background-image: url("#") !important;
}
table.dataTable thead .sorting_asc_disabled {
  background-image: url("#");
}
</style>
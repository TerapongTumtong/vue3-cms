<script>
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import pdfMake from "pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import htmlToPdfmake from "html-to-pdfmake";
import $ from "jquery";
import axios from "axios"; //for api calling
export default {
  mounted() {
    //Web api calling for dynamic data and you can also use into your demo project
    axios.get("https://www.testjsonapi.com/users/").then(res => {
      this.users = res.data;
      setTimeout(function () {
        $("#example").DataTable({
          lengthMenu: [[-1], ["All"]],
          //frtiplB
          dom: "B",

          oLanguage: {
            sSearch: "filter..",
            sLengthMenu: "Display _MENU_ records per page",
            sZeroRecords: "No records to display",
            sInfo: "total of _TOTAL_  (_START_ to _END_)",
            oPaginate: {
              sNext: "Next",
              sPrevious: "Previous"
            }
          },
          buttons: [
            {
              text: "Export To PDF",
              action: function () {
                //get table html
                const pdfTable = document.getElementById("divToPrint");
                //html to pdf format
                let html = htmlToPdfmake(pdfTable.innerHTML);
                let documentDefinition = { content: html };
                pdfMake.vfs = pdfFonts.pdfMake.vfs;
                pdfMake.createPdf(documentDefinition).open();
              }
            }
          ]
        });
      }, 0);
    });
  },
  data: function () {
    return {
      users: []
    };
  }
};
</script>
<template>
  <div id="divToPrint">
    <table class="table" id="example">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Job Title</th>
          <th>Job Title</th>
          <th>Job Title</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.job_title }}</td>
          <td>{{ user.job_title }}</td>
          <td>{{ user.job_title }}</td>
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
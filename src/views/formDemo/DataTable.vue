<script>
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
   checkResetTable(){
      if (this.resetTable) {
      this.datas = [];
      this.showTable();
      return;
    }},
     checkModelSearch(){
      if (this.resetTable) {
      this.datas = [];
      this.showTable();
      return;
    }
    },
    showTable() {
      setTimeout(function () {
        $("#example").DataTable({
          length: 25,
          lengthMenu: [
            [  25, 50,100,500 -1],
            [  25, 50,100,500, "All"]
          ],

          //frtiplB
          dom:
            "f<'row'<'col-sm-12 col-md-12'><'col-sm-12 col-md-12 col-lg-12' >>" +
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
    await this.checkResetTable();
    await this.checkModelSearch();
    let modll =   localStorage.getItem("Search-demo");

if(!modll){
 modll=[];
 modll.push("Kiwi");
}

    axios.get("https://www.testjsonapi.com/users/").then(res => {
      this.datas = res.data;
      this.showTable();
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


    <table class="borderless" id="example">
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


</template>
<style scoped>


table.dataTable thead th {
  border-bottom: 0;
  border-style: none;
}
table.dataTable tfoot th {
  border-top: 0;
  border-style: none;
}
table.dataTable .no-footer {
  border-bottom: 0;
}

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
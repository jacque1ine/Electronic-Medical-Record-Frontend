<template>
  <br><br>
  <div class="container">
    <h1>Visit Reports</h1>
    <hr>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">Date</th>
        <th scope="col">Patient Health Number</th>
        <th scope="col">Doctor Id</th>
        <th>&nbsp;</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(visit, index) in visit_reports.data" :key="index">
        <th scope="row">{{ visit.dateTime }}</th>
        <th>{{ visit.patientHCNumber }}</th>
        <th>{{ visit.doctorID }}</th>
        <th><a :href="'/visit-reports/view/'+visit._id ">View</a></th>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
import noteDataService from "@/services/noteDataService.js";
export default {
  name: "all_visit_reports",
  data(){
    return {
      visit_reports: []
    }
  },
  async mounted(){
    this.visit_reports = await noteDataService.findAll();

  }
}
</script>


<style scoped>

</style>
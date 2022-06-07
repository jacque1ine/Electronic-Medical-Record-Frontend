<template>
  <br><br>
  <div class="container">
    <h1>All Patients</h1>
    <hr>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">Health Care Number</th>
        <th scope="col">Name</th>
        <th scope="col">Status</th>
        <th scope="col">Age</th>
        <th scope="col">Phone Number</th>
        <th>&nbsp;</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(patient, index) in patients.data" :key="index">
        <th scope="row">{{ patient.HCNumber }}</th>
        <th>{{ patient.firstName }} {{ patient.lastName }}</th>
        <th>{{ patient.status }}</th>
        <th>{{ patient.age }}</th>
        <th>{{ patient.phoneNumber }}</th>
        <th><a :href="'/patient/details/'+patient.HCNumber ">View</a></th>
      </tr>
      </tbody>
    </table>
  </div>

</template>
<script>
import patientDataService from "@/services/patientDataService.js";
export default {
  name: "ListAll",
  data(){
    return {
      patients: []
    }
  },
  async mounted(){
    this.patients = await patientDataService.findAll();

  }
}
</script>


<style scoped>

</style>
<template>

    <div class="card">
      <h5 class="card-header">Recent Patients</h5>
      <div class="card-body">
        <div v-for="(patient, index) in patients.data" :key="index">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ patient.firstName }} {{ patient.lastName }}</h5>
            <!-- <p class="card-text">{{ patient.age }} year old {{ patient.sex }}.</p> -->
            <a :href="'/patient/details/'+patient.HCNumber " class="btn btn-primary">View Profile</a>
          </div>
        </div>
          <br>
          </div>
      </div>
    </div>

</template>

<script>
import patientDataService from "@/services/patientDataService.js";
export default {
  name: "recent_patients",
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

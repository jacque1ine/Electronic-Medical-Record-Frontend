<template>
  <br><br>
  <div class="container">
    <h1>Create Visit Report</h1>
    <hr>
    <div v-if="success">
      <div class="alert alert-success" role="alert">
        Visit report has been created!
      </div>

    </div>

    <div class="mb-3">
      <label for="health_card" class="form-label">Patient Health Card Number</label>
      <input type="text" v-model="patientHCNumber" name="patientHCNumber" class="form-control" id="health_card">
    </div>
    <div class="mb-3">
      <label for="doctor_id" class="form-label">Doctor Id</label>
      <input type="text" v-model="doctorID" name="doctorID" class="form-control" id="doctor_id">
    </div>
    <div class="form-floating">
      <textarea class="form-control" v-model="notes" name="notes" placeholder="Leave a comment here" id="floatingTextarea" style="height: 100px"></textarea>
      <label for="floatingTextarea">Notes</label>
    </div>
    <br>
    <button class="btn is-primary" @click="submit">Submit</button>
  </div>
</template>

<script>
import noteDataService from "@/services/noteDataService.js";

export default {
  name: "create_visit_report",
  data(){
    return  {
      patientHCNumber: "",
      doctorID: "",
      notes: "",
      today: new Date(),
      success: false
    }
  },
  methods: {
    async submit() {
      const new_visit_report = {
        patientHCNumber: this.patientHCNumber,
        doctorID: this.doctorID,
        noteContent: this.notes,
        dateTime: this.today.toLocaleDateString("en-US")
      };
      console.log(JSON.stringify(new_visit_report));
      const res = await noteDataService.create(new_visit_report);
      console.log(res);
      this.patientHCNumber="";
      this.doctorID = "";
      this.notes = "";
      this.success = true;
    }
  },
}
</script>

<style scoped>

</style>
<template>
  <br><br>
  <div class="container">
    <h1>Visit Report</h1>
    <hr>
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
    <button class="btn btn-primary" @click="submit">Submit</button>
    <button class="btn btn-danger" @click="remove">Delete</button>
  </div>
</template>
<script>
import noteDataService from "@/services/noteDataService.js";
export default {
  name: "edit_lab_record",
  data(){
    return{
      visit_report:{},
      id: "",
      patientHCNumber: "",
      doctorID: "",
      notes: "",
      today: new Date(),
    }
  },
  async created(){
    const visit_id = this.$route.params.id;
    this.lab = await noteDataService.get(visit_id);
    this.id = this.lab.data._id;
    this.patientHCNumber = this.lab.data.patientHCNumber;
    this.doctorID = this.lab.data.doctorID;
    this.notes = this.lab.data.noteContent;
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
      const res = await noteDataService.update(this.id, new_visit_report);
      this.patientHCNumber="";
      this.doctorID = "";
      this.notes = "";
      window.location.href = "/visit-reports"

    },
    async remove(){
      const res = await noteDataService.delete(this.id);
      window.location.href = "/visit-reports"
    }
  },
}
</script>

<style scoped>

</style>
<template>
  <br><br>
  <div class="container">
    <h1>Edit Lab Record</h1>
    <hr>
    <div class="mb-3">
      <label for="health_card" class="form-label">Patient Health Card Number</label>
      <input type="text" v-model="patientHCNumber" name="patientHCNumber" class="form-control" id="health_card">
    </div>
    <div class="mb-3">
      <label for="lab_result" class="form-label">Lab Result</label>
      <input type="text" v-model="result" name="result" class="form-control" id="lab_result">
    </div>
    <div class="form-floating">
      <textarea class="form-control" v-model="notes" name="notes" placeholder="Leave a comment here" id="floatingTextarea" style="height: 100px"></textarea>
      <label for="floatingTextarea">Notes</label>
    </div>
    <br>
    <button class="btn btn-primary" @click="submit">Update</button>
    <button class="btn btn-danger" @click="remove">Delete</button>
  </div>
</template>

<script>
import labRecordDataService from "@/services/labRecDataService";
export default {
  name: "edit_lab_record",
  data(){
    return{
      lab:{},
      id: "",
      patientHCNumber: "",
      result: "",
      notes: "",
      today: new Date(),
    }
  },
  async created(){
    const lab_record_id = this.$route.params.id;
    this.lab = await labRecordDataService.get(lab_record_id);
    this.id = this.lab.data._id;
    this.patientHCNumber = this.lab.data.patientHCNumber;
    this.result = this.lab.data.result;
    this.notes = this.lab.data.notes;
  },
  methods: {
    async submit() {
      const new_lab_result = {
        patientHCNumber: this.patientHCNumber,
        result: this.result,
        notes: this.notes,
        dateIssued: this.today.toLocaleDateString("en-US")
      };
      console.log(JSON.stringify(new_lab_result));
      const res = await labRecordDataService.update(this.id, new_lab_result);
      this.result="";
      this.notes = "";
      this.patientHCNumber = "";
      window.location.href = "/lab-records"

    },
    async remove(){
      const res = await labRecordDataService.delete(this.id);
      window.location.href = "/lab-records"
    }
  },
}
</script>

<style scoped>

</style>
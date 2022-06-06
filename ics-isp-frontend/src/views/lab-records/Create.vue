<template>
  <br><br>
  <div class="container">
    <h1>Create Lab Record</h1>
    <hr>
    <div v-if="success">
      <div class="alert alert-success" role="alert">
        Lab record has been created!
      </div>

    </div>

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
      <button class="btn is-primary" @click="submit">Submit</button>
  </div>
</template>

<script>
import labRecordDataService from "@/services/labRecDataService.js";

export default {
  name: "create_lab_record",
  data(){
    return  {
      patientHCNumber: "",
      result: "",
      notes: "",
      today: new Date(),
      success: false
    }
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
      const res = await labRecordDataService.create(new_lab_result);
      console.log(res);
      this.result="";
      this.notes = "";
      this.patientHCNumber = "";
      this.success = true;
    }
  },
}
</script>

<style scoped>

</style>
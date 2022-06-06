<template>
  <br><br>
  <div class="container">
    <h1>Recent Lab Records</h1>
    <hr>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">Date</th>
        <th scope="col">Health Number</th>
        <th scope="col">Result</th>
        <th scope="col">Notes</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(record, index) in records.data" :key="index">
        <th scope="row">{{ record.dateIssued }}</th>
        <th>{{ record.patientHCNumber }}</th>
        <th>{{ record.result }}</th>
        <th>{{ record.notes }}</th>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
import labRecordDataService from "@/services/labRecDataService";
export default {
  name: "Recent",
  data(){
    return {
      records: []
    }
  },
  async mounted(){
    this.records = await labRecordDataService.findAll();
  }
}
</script>

<style scoped>

</style>
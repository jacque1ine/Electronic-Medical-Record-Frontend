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
        <th>&nbsp;</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(record, index) in records.data" :key="index">
        <th scope="row">{{ record.dateIssued }}</th>
        <th>{{ record.patientHCNumber }}</th>
        <th>{{ record.result }}</th>
        <th>{{ record.notes }}</th>
        <th><a :href="'/lab-records/edit/'+record._id ">Edit</a></th>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
import labRecordDataService from "@/services/labRecDataService";
import router from "@/router";
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
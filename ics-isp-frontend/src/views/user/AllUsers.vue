<template>
 
  <div class="container mt-10">
    <h1>All Staff</h1>
    <hr>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">Staff ID</th>
        <th scope="col">Staff First Name</th>
        <th scope="col">Staff Last Name</th>
        <th>&nbsp;</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(user, index) in users.data" :key="index">
        <th scope="row">{{ user.doctorID }}</th>
        <th>{{ user.doctorFirstName }}</th>
        <th>{{ user.doctorLastName }}</th>
      </tr>
      </tbody>
    </table>
  </div>

</template>
<script>
import userDataService from "@/services/userDataService.js";
export default {
  name: "ListAll",
  data(){
    return {
      users: []
    }
  },
  async mounted(){
    this.users = await userDataService.findAll();

  }
}
</script>


<style scoped>

</style>
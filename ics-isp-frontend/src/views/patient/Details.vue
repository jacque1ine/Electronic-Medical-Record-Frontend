<template>
  <v-container>
    <v-card>
      <v-card-title>
        <span class="ml-3 font-weight-bold">{{patientInfo.firstName}} {{patientInfo.lastName}}</span>

        <v-spacer></v-spacer>
        <v-btn class="float-right" color="red" @click="goBack">Back</v-btn>
      </v-card-title>

      <v-divider dark></v-divider>

      <v-card-title>
        <span>HC Number: </span>
        <span class="ml-3">{{patientInfo.HCNumber}}</span>
      </v-card-title>

      <v-card-title>
        <span>Address: </span>
        <span class="ml-3">{{patientInfo.address}}</span>
      </v-card-title>

      <v-card-title>
        <span>Email: </span>
        <span class="ml-3">{{patientInfo.email}}</span>
      </v-card-title>

      <v-card-title>
        <span>Phone number: </span>
        <span class="ml-3">{{patientInfo.phoneNumber}}</span>
      </v-card-title>

      <v-card-title>
        <span>Sex: </span>
        <span class="ml-3">{{patientInfo.sex}}</span>
      </v-card-title>

      <v-card-title>
        <span>Age: </span>
        <span class="ml-3">{{patientInfo.age}}</span>
      </v-card-title>

      <v-card-title>
        <span>Height: </span>
        <span class="ml-3">{{patientInfo.height}}</span>
      </v-card-title>

      <v-card-title>
        <span>Weight: </span>
        <span class="ml-3">{{patientInfo.weight}}</span>
      </v-card-title>

      <v-card-title>
        <span>Status: </span>
        <span class="ml-3">{{patientInfo.status}}</span>
      </v-card-title>
      <br>
      <button class="btn btn-danger" @click="remove">Delete</button>
      <br>
    </v-card>
  </v-container>
</template>

<script>

import patientDataService from "../../services/patientDataService";

export default {
  name: 'PatientDetails',
  data(){
    return {
      patientInfo: {}
    };
  },
  methods: {
    goBack(){
      if(window.history.length > 2){
        this.$router.go(-1);
      }else{
        this.$router.push('/');
      }
    },
    patientInitial(){
      return this.patientInfo.firstName.substring(0,1).toUpperCase() + this.patientInfo.lastName.substring(0, 1).toUpperCase();
    },
    patientFullName(){
      return `${this.patientInfo.firstName} ${this.patientInfo.lastName}`;
    },
    async remove(){
      const res = await patientDataService.delete(this.$route.params.HCNumber);
      window.location.href = "/patients"

    }
  },
  async created(){
    const hcNumber = this.$route.params.HCNumber;

    // Retrieve the patient's full name
    const res = await patientDataService.get(hcNumber);
    this.patientInfo = res.data;
    console.log(this.patientInfo);
  }
};
</script>

<style>
</style>

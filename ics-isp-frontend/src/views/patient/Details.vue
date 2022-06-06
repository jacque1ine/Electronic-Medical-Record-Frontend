<template>
  <v-container>
    <v-card>
      <v-card-title>
        <v-avatar color="red">
          <span class="white--text text-h5">{{patientInitial}}</span>
        </v-avatar>
        <span class="ml-3 font-weight-bold" v-html="patientFullName"></span>

        <v-spacer></v-spacer>
        <v-btn class="float-right" color="red" @click="goBack">Back</v-btn>
      </v-card-title>

      <v-divider dark></v-divider>

      <v-card-title>
        <span>HC Number: </span>
        <span class="ml-3">{{patientInfo.HCNumber}}</span>
      </v-card-title>

      <v-card-title>
        <span>First name: </span>
        <span class="ml-3">{{patientInfo.firstName}}</span>
      </v-card-title>

      <v-card-title>
        <span>Last name: </span>
        <span class="ml-3">{{patientInfo.lastName}}</span>
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
    </v-card>

  </v-container>
</template>

<script>

import patientDataService from "../../services/patientDataService";

export default {
  name: 'PatientDetails',
  data(){
    return {
      patientInfo: {
        firstName: '',
        lastName: ''
      }
    };
  },
  computed:{
    patientInitial(){
      return this.patientInfo.firstName.substring(0,1).toUpperCase() + this.patientInfo.lastName.substring(0, 1).toUpperCase();
    },
    patientFullName(){
      return `${this.patientInfo.firstName} ${this.patientInfo.lastName}`;
    }
  },
  methods: {
    goBack(){
      if(window.history.length > 2){
        this.$router.go(-1);
      }else{
        this.$router.push('/');
      }
    }
  },
  async created(){
    const hcNumber = this.$route.params.HCNumber;

    // Retrieve the patient's full name
    const res = await patientDataService.get(hcNumber);
    this.patientInfo = res.data;
  }
};
</script>

<style>
</style>

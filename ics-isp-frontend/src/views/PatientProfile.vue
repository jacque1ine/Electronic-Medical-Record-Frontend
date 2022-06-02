<template>
  <v-container>
    <v-card-title>
      <v-avatar color="red">
        <span class="white--text text-h5">{{patientInitial}}</span>
      </v-avatar>
      <span class="ml-3 font-weight-bold" v-html="patientFullName"></span>
    </v-card-title>

    <v-divider dark></v-divider>



    <v-form ref="form" lazy-validation>
      <v-row align="center"
          justify="center">
          <v-col  cols="12" sm="6" md="6">
            <v-btn
              color="success"
              block
              xlarge
              height="70"
              @click="viewPatientInfo">
              Patient Info
            </v-btn>
          </v-col>
      </v-row>
      <v-row align="center"
          justify="center">
          <v-col  cols="12"  sm="6"  md="6">
            <v-btn
              color="success"
              block
              height="70"
              xlarge
              @click="viewVisitHistory">
              Vist History
            </v-btn>
          </v-col>
      </v-row>
      <v-row align="center"
          justify="center">
          <v-col  cols="12"  sm="6"  md="6">
            <v-btn
              color="success"
              height="70"
              block
              xlarge
              @click="viewLabRecords">
              Lab Records
            </v-btn>
          </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>

import patientDataService from "../services/patientDataService";

export default {
  name: 'PatientProfile',
  data(){
    return {
      patientInfo: null
    };
  },
  computed:{
    patientInitial(){
      if(!this.patientInfo || !this.patientInfo.firstName || !this.patientInfo.lastName)
        return '';

      return this.patientInfo.firstName.substring(0,1).toUpperCase() + this.patientInfo.lastName.substring(0, 1).toUpperCase();
    },
    patientFullName(){
      if(!this.patientInfo)
        return '';

      return `${this.patientInfo.firstName} ${this.patientInfo.lastName}`;
    }
  },
  methods: {
    viewPatientInfo(){
        this.$router.push({ name: 'patientDetails', params: {'HCNumber': this.patientInfo.HCNumber} });
    },
    viewVisitHistory(){
        this.$router.push({ name: 'visitHistory', params: {'HCNumber': this.patientInfo.HCNumber} });
    },
    viewLabRecords(){
        this.$router.push({ name: 'labRecords' });
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

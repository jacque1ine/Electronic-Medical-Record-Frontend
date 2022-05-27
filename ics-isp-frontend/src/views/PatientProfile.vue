<template>
  <v-container fluid>
    <v-form ref="form" lazy-validation>
      <v-row align="center"
          justify="center">
          <v-col  cols="12"  sm="6"  md="3">
            <v-btn
              color="success"
              block
              xlarge
              @click="patientInfo">
              Patient Info
            </v-btn>
          </v-col>
      </v-row>
      <v-row align="center"
          justify="center">
          <v-col  cols="12"  sm="6"  md="3">
            <v-btn
              color="success"
              block
              xlarge
              @click="latestVisits">
              Vist History
            </v-btn>
          </v-col>
      </v-row>
      <v-row align="center"
          justify="center">
          <v-col  cols="12"  sm="6"  md="3">
            <v-btn
              color="success"
              block
              xlarge
              @click="labRecords">
              Lab Records
            </v-btn>
          </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'PatientProfile',
  methods: {
    patientInfo(){
        this.$router.push({ name: 'PatientInfo' });
    },
    latestVisits(){
        this.$router.push({ name: 'VisitHistory' });
    },
    labRecords(){
        this.$router.push({ name: 'LabRecords' });
    }
  }
};
</script>

<style>
</style>

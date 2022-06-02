<template>
  <v-container>
    <v-card>
      <v-card-title>
        <h1>Visit History</h1>

        <v-spacer></v-spacer>

        <v-btn class="float-right" color="red" @click="goBack">Back</v-btn>
      </v-card-title>
    </v-card>

  </v-container>
</template>

<script>

export default {
  name: 'VisitHistory',
  methods:{
    goBack(){
      if(window.history.length > 2){
        this.$router.go(-1);
      }else{
        this.$router.push('/');
      }
    }
  },
  created(){
    const hcNumber = this.$route.params.HCNumber;

    console.log('Patient HC Number: ', hcNumber);
  }
};
</script>

<style>
</style>

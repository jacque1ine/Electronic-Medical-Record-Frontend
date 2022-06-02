<template>
  <LabRecord :searchKeyword="searchKeyword"></LabRecord>
</template>

<script>

import LabRecord from "@/components/LabRecord";

export default {
  name: 'PatientProfile',
  components:{
    LabRecord
  },
  data(){
    return {
      searchKeyword: ''
    };
  },
  methods: {
  },
  async created(){

  }
};
</script>

<style>
</style>

<template>
  <button @click="saveCalendar">Submit</button>
</template>

<script>
import { defineComponent } from 'vue';
import calendarDataService from "../services/calDataService"

export default defineComponent({
  name: 'HomeView',

  methods: {
    saveCalendar() {
      var data = {
        appointmentTitle: "sample",
        dateTime: "sample",
        patientHCNumber: "sample",
        appointmentdesc: "sample",
        notes: "sample"
      };

      calendarDataService.create(data)
        .then(response => {
          console.log(response.data);
          console.log("Success")
        })
        .catch(e => {
          console.log(e);
        })
    }
  }
});
</script>

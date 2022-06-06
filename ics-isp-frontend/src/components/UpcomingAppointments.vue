<template>
  <div v-for="(appointment, index) in appointments.data" :key="index">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ appointment.appointmentTitle }}</h5>
        <p class="card-text">{{ appointment.dateTime }}</p>
        <p class="card-text">{{ appointment.appointmentdesc }}</p>
      </div>

    </div>
    <br>
  </div>

</template>

<script>
import calendarDataService from '../services/calDataService.js';
export default {
  name: "UpcomingAppointments",
  data(){
    return {
        appointments: []
    }
  },
  async mounted(){
    this.appointments = await calendarDataService.findAll();
  }
}
</script>

<style scoped>

</style>
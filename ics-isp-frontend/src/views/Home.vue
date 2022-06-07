<template>
  <br>
  <div class="container">
    <h1>Home</h1>
    <hr>
    <div class="row">
      <div class="col align-self-start">
        <RecentPatients/>
      </div>
      <div class="col align-self-center">
        <div class="card">
          <h5 class="card-header">Upcoming Appointments</h5>
          <div class="card-body">
            <UpcomingAppointments/>
          </div>
        </div>
      </div>
    </div>
  </div>

<br>

</template>

<script>
import UpcomingAppointments from "@/components/UpcomingAppointments";
import RecentPatients from "@/components/RecentPatients";
export default {
  name: "Home",
  components: {
    UpcomingAppointments,
    RecentPatients
  }
}
</script>

<style scoped>

.h1{
  
}

</style>


<template>
  <br>
  <div class="container">
    <h1>Home</h1>
    <hr>
    <div class="row">
      <div class="col align-self-start">
        <div class="card">
          <h5 class="card-header">Recent Patients</h5>
          <div class="card-body">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Patient Name</h5>
                <p class="card-text">Visit notes.</p>
                <a href="#" class="btn btn-primary">Review</a>
              </div>
            </div>
          </div>
        </div>
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
export default {
  name: "Home",
  components: {
    UpcomingAppointments
  }
}
</script>

<style scoped>

.h1{
  
}

</style>


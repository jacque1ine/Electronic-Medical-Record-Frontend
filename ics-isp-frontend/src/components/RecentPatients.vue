<template>
<div class="container mt-10">
  <h1>Current Patients</h1>

<table class="table align-middle mb-0 bg-white">
  <thead class="bg-light">
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Gender</th>
      <th>Status</th>
      <th>Actions</th>
      <th>Reason for Visi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div class="d-flex align-items-center">
       

              <!--Change so that the letters are first letter of Name in database-->
              <v-avatar color="red">
                  <span class="text-white text-h5">JD</span>
              </v-avatar>


          <div class="ms-3">
            <!--Name + Email from DB-->
            <p class="fw-bold mb-1">John Doe</p>
            <p class="text-muted mb-0">john.doe@gmail.com</p>
          </div>
        </div>
      </td>

      <td>
        <!--Age from DB-->
        <p class="fw-normal mb-1">20</p>
        <!-- <p class="text-muted mb-0">40</p> -->
      </td>

       <!--gender from DB-->
      <td>
        <p class="fw-normal mb-1">Male</p>
        <!-- <p class="text-muted mb-0">40</p> -->
      </td>

      <td>
        <span class="badge badge-success rounded-pill d-inline">In Room</span>
      </td>

      <td>
        <button type="button" class="btn btn-link btn-sm btn-rounded">
          Edit
        </button>
      </td>
    </tr>

    <tr>
      <td>
        <div class="d-flex align-items-center">
       

              <!--Change so that the letters are first letter of Name in database-->
              <v-avatar color="blue">
                  <span class="text-white text-h5">JD</span>
              </v-avatar>


          <div class="ms-3">
            <!--Name + Email from DB-->
            <p class="fw-bold mb-1">Alex Carter</p>
            <p class="text-muted mb-0">alex.carter@gmail.com</p>
          </div>
        </div>
      </td>

      <td>
        <!--Age from DB-->
        <p class="fw-normal mb-1">47</p>
        <!-- <p class="text-muted mb-0">40</p> -->
      </td>

       <!--gender from DB-->
      <td>
        <p class="fw-normal mb-1">Male</p>
        <!-- <p class="text-muted mb-0">40</p> -->
      </td>

      <td>
       <span class="badge badge-primary rounded-pill d-inline"
              >Waiting Room</span
          >
      </td>

      <td>
        <button type="button" class="btn btn-link btn-sm btn-rounded">
          Edit
        </button>
      </td>
    </tr>

    <tr>
      <td>
        <div class="d-flex align-items-center">
       

              <!--Change so that the letters are first letter of Name in database-->
              <v-avatar color="green">
                  <span class="text-white text-h5">MW</span>
              </v-avatar>


          <div class="ms-3">
            <!--Name + Email from DB-->
            <p class="fw-bold mb-1">Macy Wong</p>
            <p class="text-muted mb-0">macy.wong@gmail.com</p>
          </div>
        </div>
      </td>

      <td>
        <!--Age from DB-->
        <p class="fw-normal mb-1">32</p>
        <!-- <p class="text-muted mb-0">40</p> -->
      </td>

       <!--gender from DB-->
      <td>
        <p class="fw-normal mb-1">Female</p>
        <!-- <p class="text-muted mb-0">40</p> -->
      </td>

      <td>
        <span class="badge badge-warning rounded-pill d-inline">Awaiting</span> 
      </td>

      <td>
        <button type="button" class="btn btn-link btn-sm btn-rounded">
          Edit
        </button>
      </td>
    </tr>
    
  </tbody>
</table>


<!--Yellow-->
 <!-- <span class="badge badge-warning rounded-pill d-inline">Awaiting</span> --> 

 <!--BLUE-->

<!-- <td>
        <span class="badge badge-primary rounded-pill d-inline"
              >Onboarding</span
          >
      </td> -->


  <!-- <button @click="saveCalendar">Submit</button> -->
</div>
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

<template>
  <MDBNavbar expand="lg" light bg="light" container>
    <MDBNavbarBrand to="/home">
    <img src="dlomed.png" height="50">
    
    <!-- <v-img src="../assets/dlomedlogo.png" height="100"></v-img> -->
    
    
    </MDBNavbarBrand>
    <MDBNavbarToggler
        @click="collapse1 = !collapse1"
        target="#navbarSupportedContent"
    ></MDBNavbarToggler>
    <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
      <MDBNavbarNav class="mb-2 mb-lg-0">

        <MDBNavbarItem to="/home" active>
          Home
        </MDBNavbarItem>

        <MDBNavbarItem to="/calendar">
          Calendar
        </MDBNavbarItem>
        <MDBNavbarItem>
          <!-- Navbar dropdown -->
          <MDBDropdown class="nav-item" v-model="dropdown2">
            <MDBDropdownToggle
                tag="a"
                class="nav-link"
                @click="dropdown2 = !dropdown2"
            >Lab Records</MDBDropdownToggle
            >
            <MDBDropdownMenu aria-labelledby="dropdownMenuButton">
              <MDBDropdownItem to="/lab-records">View All</MDBDropdownItem>
              <MDBDropdownItem to="/lab-records/create">Create Record</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavbarItem>



        <MDBNavbarItem>
          <!-- Navbar dropdown -->
          <MDBDropdown class="nav-item" v-model="dropdown3">
            <MDBDropdownToggle
                tag="a"
                class="nav-link"
                @click="dropdown3 = !dropdown3"
            >Visit Reports</MDBDropdownToggle
            >
            <MDBDropdownMenu aria-labelledby="dropdownMenuButton">
              <MDBDropdownItem to="/visit-reports">View All</MDBDropdownItem>
              <MDBDropdownItem to="/visit-reports/create">Create Record</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavbarItem>

        <MDBNavbarItem>
          <!-- Navbar dropdown -->
          <MDBDropdown class="nav-item" v-model="dropdown1">
            <MDBDropdownToggle
                tag="a"
                class="nav-link"
                @click="dropdown1 = !dropdown1"
            >Patients</MDBDropdownToggle
            >
            <MDBDropdownMenu aria-labelledby="dropdownMenuButton">
              <MDBDropdownItem to="/patients">View All</MDBDropdownItem>
              <MDBDropdownItem to="/patient/new">Add Patient</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavbarItem>

        <MDBNavbarItem>
      
          <MDBDropdown class="nav-item" v-model="dropdown4">
            <MDBDropdownToggle
                tag="a"
                class="nav-link"
                @click="dropdown4 = !dropdown4"
            >Staff</MDBDropdownToggle
            >
            <MDBDropdownMenu aria-labelledby="dropdownMenuButton">
              <MDBDropdownItem to="/staff">View All</MDBDropdownItem>
              <MDBDropdownItem to="/staff/new">Add Staff</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavbarItem>


      </MDBNavbarNav>
    </MDBCollapse>
  </MDBNavbar>
</template>


<script>
import {
  MDBBtn,
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from 'mdb-vue-ui-kit';
import { ref } from 'vue';
export default {
  components: {
    MDBBtn,
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem
  },
  setup() {
    const collapse1 = ref(false);
    const dropdown1 = ref(false);
    const dropdown2 = ref(false);
    const dropdown3 = ref(false);
    const dropdown4 = ref(false);
    return {
      collapse1,
      dropdown1,
      dropdown2,
      dropdown3,
      dropdown4
    }
  }
};
</script>

<style scoped>

</style>
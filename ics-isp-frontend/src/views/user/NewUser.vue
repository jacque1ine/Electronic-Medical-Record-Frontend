<template>

<div class = "container mt-10">
  <h1>Add a New Staff</h1>
  <v-form ref="form"
    v-model="valid"
    lazy-validation
      @submit="onSubmit" class="add-form">

    <v-text-field
      v-model="doctorID"
      name="doctorID"
      label="Doctor ID"
      required
    ></v-text-field>

    <v-text-field
      v-model="signInID"
      name="signInID"
      label="Sign-In ID"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      name="password"
      label="password"
      required
    ></v-text-field>

 <!-- <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Normal with hint text"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field> -->


      <v-text-field
      v-model="doctorFirstName"
      name="doctorFirstName"
      label="Staff First Name"
      required
    ></v-text-field>

     <v-text-field
      v-model="doctorLastName"
      name="doctorLastName"
      label="Staff Last Name"
      required
    ></v-text-field>
    
 
    <v-btn
      input type="submit" 
      value="Save"
      color="success"
      >
      Save</v-btn>

   
  </v-form>
 </div>

</template>
 
<script>
import userDataService from "../../services/userDataService";

export default {
  data(){
    return  {
      doctorID: "",
      signInID: "",
      password: "",
      doctorFirstName: "",
      doctorLastName: "",
    }
  },


  methods: {


    async onSubmit(e) {
      e.preventDefault();
 
      if (!this.doctorID ||!this.signInID || !this.password || !this.doctorFirstName || !this.doctorLastName ) {
        alert("All fields are mandatory");
        return;
      }
 
      const newUser = {
        doctorID: this.doctorID,
        signInID: this.signInID,
        password: this.password,
        doctorFirstName: this.doctorFirstName,
        doctorLastName: this.doctorLastName,
        isAdmin: true
       
       
        
      };

      console.log(JSON.stringify(newUser));
    
      const res = await userDataService.create(newUser);
 

      console.log(res);
      this.doctorID="";
      this.signInID = "";
      this.password = "";
      this.doctorLastName="";
      this.doctorFirstName = ""
     
 
      document.querySelector("v-form").reset();
    }
  },
};
</script>
 

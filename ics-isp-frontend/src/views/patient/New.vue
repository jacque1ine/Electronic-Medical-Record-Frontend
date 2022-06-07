<template>

<div class = "container mt-10">
  <h1>Add a New Patient</h1>
  <v-form ref="form"
    v-model="valid"
    lazy-validation
      @submit="onSubmit" class="add-form">

    <v-text-field
      v-model="HCNumber"
      name="HCNumber"
      label="Health Card Number"
      required
    ></v-text-field>

    <v-text-field
      v-model="firstName"
      name="firstName"
      label="First Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="lastName"
      name="lastName"
      label="Last Name"
      required
    ></v-text-field>

      <v-text-field
      v-model="phoneNumber"
      name="phoneNumber"
      label="Phone Number"
      required
    ></v-text-field>

     <v-text-field
      v-model="email"
      name="email"
      label="Email"
      required
    ></v-text-field>
    
     <v-text-field
      v-model="address"
      name="address"
      label="Address"
      required
    ></v-text-field>
    
    <v-text-field
      v-model="relations"
      name="relations"
      label="Relations"
      required
    ></v-text-field>

    <v-text-field
      v-model="age"
      name="age"
      label="Age"
      required
    ></v-text-field>
  
    <v-text-field
      v-model="sex"
      name="sex"
      label="Sex"
      required
    ></v-text-field>

    <v-text-field
      v-model="height"
      name="height"
      label="Height"
      required
    ></v-text-field>

    <v-text-field
      v-model="weight"
      name="weight"
      label="Weight"
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
import patientDataService from "../../services/patientDataService";
export default {
  data(){
    return  {
      HCNumber: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      address: "",
      relations: "",
      age:"", 
      sex:"", 
      height:"", 
      weight:"", 
      status:"",
    }
  },


  methods: {


    async onSubmit(e) {
      e.preventDefault();
 
      if (!this.HCNumber ||!this.firstName || !this.lastName || !this.phoneNumber || !this.email ||!this.address || !this.age ||!this.sex || !this.height || !this.weight) {
        alert("All fields are mandatory");
        return;
      }
 
      const newContact = {
        HCNumber: this.HCNumber,
        firstName: this.firstName,
        lastName: this.lastName,
        phoneNumber: this.phoneNumber,
        email: this.email,
        address: this.address, 
        relations: this.relations, 
        age: this.age, 
        height: this.height, 
        weight: this.weight,
        status: "Absent", 
        prescription: [], 
       
       
        
      };

      console.log(JSON.stringify(newContact));
    
      const res = await patientDataService.create(newContact);
 

      console.log(res);
      this.HCNumber="";
      this.firstName = "";
      this.lastName = "";
      this.email="";
      this.phoneNumber = "";
      this.address =""; 
      this.relations=""; 
      this.age=""; 
      this.sex=""; 
      this.height=""; 
      this.weight=""; 
     
 
      document.querySelector("v-form").reset();
    }
  },
};
</script>
 

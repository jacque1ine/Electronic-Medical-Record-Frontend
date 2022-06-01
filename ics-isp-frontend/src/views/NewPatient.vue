<template>

<div class = "container mt-10">
  <v-form ref="form"
    v-model="valid"
    lazy-validation
      @submit="onSubmit" class="add-form">

    <v-text-field
      v-model="HCNumber"
      name="HCNumber"
      label="HCNumber"
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
      label="email"
      required
    ></v-text-field>
    
     <v-text-field
      v-model="address"
      name="address"
      label="address"
      required
    ></v-text-field>
    
    <v-text-field
      v-model="relations"
      name="relations"
      label="relations"
      required
    ></v-text-field>

    <v-text-field
      v-model="age"
      name="age"
      label="age"
      required
    ></v-text-field>
  
    <v-text-field
      v-model="sex"
      name="sex"
      label="sex"
      required
    ></v-text-field>

    <v-text-field
      v-model="height"
      name="height"
      label="height"
      required
    ></v-text-field>

    <v-text-field
      v-model="weight"
      name="weight"
      label="weight"
      required
    ></v-text-field>

    <!-- <v-text-field
      v-model="status"
      name="status"
      label="status"
      required
    ></v-text-field> -->

 
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
import patientDataService from "../services/patientDataService";
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
       
       
        
      };

      console.log(JSON.stringify(newContact));
      //CHANGE /API/CONTACTS TO NEW THING WHEN BACKEND IS CONNECTED
      const res = await patientDataService.create(newContact);
 
      //const data = await res.json();

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
      // this.status=""; 
  
 
      document.querySelector("v-form").reset();
    }
  },
};
</script>
 

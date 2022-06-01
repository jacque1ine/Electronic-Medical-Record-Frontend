<template>

<div class = "content">
  <v-form ref="form"
    v-model="valid"
    lazy-validation
      @submit="onSubmit" class="add-form">

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
      v-model="HCNumber"
      name="HCNumber"
      label="HCNumber"
      required
    ></v-text-field>

     <v-text-field
      v-model="username"
      name="email"
      label="email"
      required
    ></v-text-field>
    
    
     <v-text-field
      v-model="email"
      name="email"
      label="email"
      required
    ></v-text-field>
  

    <v-text-field
      v-model="phone"
      name="phone"
      label="Phone Number"
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
export default {
  data(){
    return  {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      hcnumber: "",
      address: "",
    }
  },


  methods: {
    async onSubmit(e) {
      e.preventDefault();
 
      if (!this.firstName || !this.lastName || !this.HCnumber || !this.phone || !this.email) {
        alert("All fields are mandatory");
        return;
      }
 
      const newContact = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        HCnumber: this.HCnumber,
        phone: this.phone
        
      };

      //CHANGE /API/CONTACTS TO NEW THING WHEN BACKEND IS CONNECTED
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newContact),
      });
 
      const data = await res.json();
 
      this.firstName = "";
      this.lastName = "";
      this.HCnumber="";
      this.email="";
      this.phone = "";
  
 
      document.querySelector("v-form").reset();
    }
  },
};
</script>
 

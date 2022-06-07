<template>
<body>
  <div class="login mt-10">
    <v-container >
      <div class="login-pane">
        <!-- <v-toolbar dark color="primary"> -->
        <v-card>
          <v-card-title>Login</v-card-title>
          <v-card-text>
            <v-text-field
                label="Username"
                hide-details="auto"
                v-model="username"
            >
            </v-text-field>
            <br>
            <v-text-field
                counter
                label="Password"
                type="password"
                v-model="password"
                hide-details="auto"
            ></v-text-field>
            <br>
            <v-btn
                depressed
                color="primary"
                @click="auth()"
            >
              Submit
            </v-btn>
          </v-card-text>
        </v-card>
        <!-- </v-toolbar> -->
      </div>
    </v-container>
  </div>
</body>





</template>

<script>
import userDataService from '@/services/userDataService';

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    }
  },
  components: {
    userDataService
  },
  methods: {
    async auth() {
      let authname = await userDataService.findByCred(this.username,this.password);
      authname = JSON.parse(JSON.stringify(authname));
      if (authname.data[0] == null || authname.data[0] == undefined) {
        alert("Please enter a valid username and password")
      }
      else {
        console.log(this.username + "" + this.password)
        console.log(authname.data[0]);
        sessionStorage.setItem("user", JSON.stringify(authname.data[0]));
        this.$router.push({ name: 'home' }) 
      }

    }
  },

}
</script>

<style scoped>

body{
  /* background-color: lightblue; */
}


</style>
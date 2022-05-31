<template>
  <div class="login">
    <v-container>
      <div class="login-pane">

        <v-card>
          <v-card-title>Login</v-card-title>

          <v-card-text>
            <v-text-field

                label="Username"
                hide-details="auto"
                v-model="username"
            ></v-text-field>
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

      </div>
    </v-container>
  </div>
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
      console.log(this.username + "" + this.password)
      console.log(authname.username + " Success");
    }
  },
}
</script>

<style scoped>
.login{
  background-color: #1867C0;
}
.login-pane{

}
</style>
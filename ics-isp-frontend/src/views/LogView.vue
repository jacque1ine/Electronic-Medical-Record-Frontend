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

                hide-details="auto"
                v-model="password"
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
import { defineComponent } from 'vue';
import userDataService from "../services/userDataService"

export default {
  name: "LogView",
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
      const authname = await userDataService.findByCred(this.username,this.password);
      console.log(authname + " Success");
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
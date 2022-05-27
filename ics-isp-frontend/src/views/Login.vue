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
            ></v-text-field>
            <br>
            <v-text-field
                counter
                label="Password"
                type="password"

                hide-details="auto"
            ></v-text-field>
            <br>
            <v-btn
                depressed
                color="primary"
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
export default {
  name: "Login"
}
</script>

<style scoped>
.login{
  background-color: #1867C0;
}
.login-pane{

}
</style>
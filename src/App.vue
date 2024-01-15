<template>
  <v-app>
    <v-app-bar class="bg-blue-darken-4">
      <v-img src="./assets/CVG-IMAGE.png" height="50" width="50" contain alt="Logo CVG" style="margin-right: 63rem;" />
      <template v-if="this.$store.getters.getUsuario == null">
        <v-btn prepend-icon="mdi-login" to="/">
          Login
        </v-btn>
      </template>

      <template v-if="this.$store.getters.getUsuario !== null">
        <v-btn prepend-icon="mdi-home" to="/welcome">
          Inicio
        </v-btn>
        <v-btn prepend-icon="mdi-account" to="/cliente">
          Proyectos
        </v-btn>
        <v-btn prepend-icon="mdi-logout" @click="logout">
          Logout
        </v-btn>
      </template>


    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({

  }),
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/')
    },
    validarAcceso() {
      let datos = localStorage.getItem('userData');
      if (datos) {
        this.$store.dispatch('login', JSON.parse(datos));
        this.$router.push('/welcome')
      } else {
        this.$router.push('/')
      }
    }
  },
  created() {
    this.validarAcceso()
  },
}
</script>
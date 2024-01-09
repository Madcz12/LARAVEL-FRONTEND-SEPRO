<template>
    <v-container fluid>
        <v-row justify="center">
            <v-col xs="12" sm="4" md="4" lg="4" xl="4" xxl="4">
                <v-card>
                    <v-img height="150" cover
                        src="https://salesforce.com/content/dam/web/es_mx/blog/seguimiento-de-ventas-como-hacer.jpg">
                    </v-img>
                    <v-card-text>
                        <h2 class="text-blue-grey-darken-2">Sistema de Ventas</h2>
                        <p class="text-blue-grey-darken-2"></p>
                        <br>
                        <v-form>
                            <v-text-field label="Correo" placeholder="correo@ventasxperto.com" counter maxLength="70"
                                color="indigo" clearable prepend-inner-icon="mdi-email" v-model="usuario.email">
                            </v-text-field>
                            <v-text-field label="Contraseña" placeholder="XXXXXXXXXX" counter maxLength="15" color="indigo"
                                clearable prepend-inner-icon="mdi-key" v-model="usuario.password" type="password">
                            </v-text-field>
                            <v-btn color="indigo" block @click="login">
                                Iniciar Sesi&oacute;n
                            </v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-snackbar :timeout="1500" color="red-darken4" v-model="alertaEstado">
            {{ alertaMensaje }}
        </v-snackbar>
    </v-container>
</template>

<script>
import axios from 'axios'
export default {
    name: 'LoginView',
    data() {
        return {
            usuario: {
                email: '',
                password: ''
            },
            alertaEstado: false,
            alertaMensaje: ''
        }
    },
    methods: {
        login() {
            axios.post('http://127.0.0.1:8000/api/usuario/login', this.usuario)
                .then(response => {
                    if (response.status == 200) {
                        let datos = {
                            usuario: response.data.data.name,
                            token: response.data.token
                        }
                        // guardar datos en el storage
                        this.$store.dispatch('login', datos)
                        // redireccionar
                        this.$router.push('/welcome')
                    }
                })
                .catch(error => {
                    console.log('Ha Ocurrido un Error' + error);
                    this.alertaEstado = true
                    if (error.response.status == 401) {
                        this.alertaMensaje = error.response.data.data
                    } else {
                        this.alertaMensaje = 'Algo Salio Mal :('
                    }
                })
        }
    },
}
</script>

<style lang="scss" scoped></style>
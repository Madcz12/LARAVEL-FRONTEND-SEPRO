<template>
    <v-container fluid class="bg-image">
        <v-row justify="center">
            <v-col xs="12" sm="4" md="4" lg="4" xl="4" xxl="4">
                <v-card class="card-form">
                    <v-img height="150" width="210" cover src="../assets/CVG-LOGIN-IMG.jpg" style="margin-left: 8.4rem;">
                    </v-img>
                    <v-img class="namesys"></v-img>
                    <v-card-text>
                        <h1 style="margin-left: 11rem;">SEPRO</h1>
                        <br>
                        <v-form>
                            <v-text-field label="Username" placeholder="correo@ventasdiamond.com" counter maxLength="70"
                                color="indigo" clearable prepend-inner-icon="mdi-user" v-model="usuario.username">

                            </v-text-field>
                            <v-text-field label="Contraseña" placeholder="*********" counter maxLength="15" color="indigo"
                                clearable prepend-inner-icon="mdi-key" v-model="usuario.password">
                            </v-text-field>
                            <v-btn color="indigo" block @click="login">
                                Iniciar sesi&oacute;n
                            </v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-snackbar :timeout="1500" color="red-darken-4" v-model="alertaEstado">
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
                username: '',
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
                        this.$router.push('/welcome')
                    }
                })
                .catch(error => {
                    console.log('Ha Ocurrido un Error' + error);
                    this.alertaEstado = true

                    if (error.response.status == 401) {
                        this.alertaMensaje = error.response.data.data
                    } else {
                        this.alertaMensaje = 'Algo Salio Mal!!!'
                    }
                })
        }
    }
}
</script>

<style scoped>
.bg-image {
    background-image: url(/public/bgroad-new.jpg);
    background-size: cover;
    height: 100%;
    /* Ajusta la imagen para cubrir todo el elemento */
    background-position: center;
    /* Centra la imagen */
}

.card-form {
    border: 4px solid black;
}

.namesys {
    background-image: url(/public/SEPRO.jpg);
}
</style>
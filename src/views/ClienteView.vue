<template>
    <v-container fluid>
        <h1>Clientes</h1>
        <!--         <v-row>
            <v-col xs="12" sm="10" md="8" lg="6" xl="4" xxl="3">
                <v-text-field label="Nombre" maxLength="50" counter="indigo" clearable placeholder="Nombre del Cliente"
                    v-model="cliente.nombre"></v-text-field>
                <v-text-field label="Telefono" maxLength="10" counter="indigo" clearable placeholder="Telefono del Cliente"
                    v-model="cliente.telefono"></v-text-field>
                <v-select color="indigo" label="pais" :items="paises" item-value="id" item-title="nombre"
                    v-model="cliente.fk_pais"></v-select>
                <v-btn prepend-icon="mdi-check" color="indigo" block @click="agregarCliente">Agregar</v-btn>
            </v-col>
            <v-col xs="12" sm="11" md="10" lg="9" xl="8" xxl="7">
                <v-card>
                    <v-card-text>
                        <v-table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NOMBRE</th>
                                    <th>PAIS</th>
                                    <th>OPCIONES</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(cliente, i) in clientes" :key="i">
                                    <th>{{ cliente.id }}</th>
                                    <th>{{ cliente.nombre }}</th>
                                    <th>{{ cliente.fk_pais }}</th>
                                    <th><v-btn-group>
                                            <v-btn icon="mdi-eye" color="indigo"
                                                @click="obtenerCliente(cliente.id, 1)"></v-btn>
                                            <v-btn icon="mdi-pencil" color="green"
                                                @click="obtenerCliente(cliente.id, 2)"></v-btn>
                                            <v-btn icon="mdi-delete" color="red"
                                                @click="eliminarCliente(cliente.id)"></v-btn>
                                        </v-btn-group></th>
                                </tr>
                            </tbody>
                        </v-table>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row> -->
        <WizardFormVue />
        <v-snackbar v-model="alertaEstado" color="blue-accent-1" timeout="2000">
            {{ mensaje }}
        </v-snackbar>
        <!-- Modal de detalles -->
        <v-dialog v-model="dialogOne" transition="dialog-top-transition" width="500">
            <v-card title="Ver" subtitle="Datos del Cliente">
                <v-card-text>
                    <v-list>
                        <v-list-item prepend-icon="mdi-account" :title="datos.nombre"></v-list-item>
                        <v-list-item prepend-icon="mdi-phone" :title="datos.telefono"></v-list-item>
                        <v-list-item prepend-icon="mdi-earth" :title="datos.fk_pais"></v-list-item>
                    </v-list>
                </v-card-text>
            </v-card>
        </v-dialog>
        <!-- Modal para editar  -->
        <v-dialog v-model="dialogTwo" transition="dialog-top-transition" width="500">
            <v-card title="Editar" subtitle="Datos del Cliente">
                <v-card-text>
                    <v-text-field label="Nombre" max-length="50" counter color="indigo" clearable
                        placeholder="Nombre del Cliente" v-model="datos.nombre"></v-text-field>
                    <v-text-field label="Telefono" max-length="9" counter color="indigo" clearable
                        placeholder="Telefono del Cliente" v-model="datos.telefono"></v-text-field>
                    <v-select color="indigo" label="Pais" :items="paises" item-value="id" item-title="nombre"
                        v-model="datos.fk_pais"></v-select>
                    <v-btn prepend-icon="mdi-check" color="indigo" block @click="modificarCliente(datos.id)">

                    </v-btn>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
import axios from 'axios'
export default {

    name: 'ClienteView',
    data() {
        return {
            paises: [],
            cliente: {},
            alertaEstado: false,
            mensaje: '',
            clientes: [],
            datos: {}, // datos para el vcard
            dialogOne: false,
            dialogTwo: false,
            config: {
                headers: {
                    'Authorization': 'Bearer ' + this.$store.getters.getToken
                }
            }
        }
    },
    methods: {
        obtenerPaises() {
            axios.get('http://127.0.0.1:8000/api/pais/select', this.config)
                .then(
                    response => {
                        if (response.data.code == 200) {
                            let res = response.data
                            this.paises = res.data
                        }
                    }
                )
                .catch(error => console.log('Ha Ocurrido un Error :(' + error))
        },
        agregarCliente() {
            axios.post('http://127.0.0.1:8000/api/cliente/store', this.cliente, this.config)
                .then(
                    response => {
                        if (response.data.code == 200) {
                            this.alertaEstado = true
                            this.mensaje = response.data.data
                            this.obtenerClientes()
                            this.cliente = {}
                        }
                    }
                )
                .catch(error => console.log('Ha Ocurrido un Error :(' + error))
        },
        obtenerClientes() {
            axios.get('http://127.0.0.1:8000/api/cliente/select', this.config)
                .then(
                    response => {
                        if (response.data.code == 200) {
                            let res = response.data
                            this.clientes = res.data
                        }
                    }
                )
                .catch(error => console.log('Ha Ocurrido un Error :(' + error))
        },
        // metodo para el modal //
        obtenerCliente(id, action) {
            if (action == 1) {
                this.dialogOne = true
                axios.get(`http://127.0.0.1:8000/api/cliente/find/${id}`, this.config)
                    .then(
                        response => {
                            if (response.data.code == 200) {
                                let res = response.data
                                this.datos = res.data
                            }
                        }
                    )
                    .catch(error => console.log('Ha Ocurrido un Error :(' + error))
            } else {
                this.dialogTwo = true
                axios.get(`http://127.0.0.1:8000/api/cliente/find2/${id}`, this.config)
                    .then(
                        response => {
                            if (response.data.code == 200) {
                                let res = response.data
                                this.datos = res.data
                            }
                        }
                    )
                    .catch(error => console.log('Ha Ocurrido un Error :(' + error))
            }
            // realiza la peticion

        },
        // editar cliente
        modificarCliente(id) {
            axios.put(`http://127.0.0.1:8000/api/cliente/update/${id}`, this.datos, this.config)
                .then(
                    response => {
                        if (response.data.code == 200) {
                            // recargar la tabla de clientes 
                            this.obtenerClientes()
                            // ocultar cuadro de dialogo
                            this.dialogTwo = false
                            // cambiar mensaje y visibilidad de la alerta
                            this.alertaEstado = true
                            this.mensaje = response.data.data

                        }
                    }
                )
                .catch(error => console.log('Ha Ocurrido un Error :(' + error))
        },
        eliminarCliente(id) {
            axios.delete(`http://127.0.0.1:8000/api/cliente/delete/${id}`, this.config)
                .then(
                    response => {
                        if (response.data.code == 200) {
                            // cambiar el mensaje y visibibilidad
                            this.alertaEstado = true
                            this.mensaje = response.data.data
                            // recargar tabla 
                            this.obtenerClientes()
                        }
                    }
                )
                .catch(error => console.log('Ha Ocurrido un Error :(' + error))
        }
    },
    created() {
        this.obtenerPaises()
        this.obtenerClientes()
    },
}
</script>

<style lang="scss" scoped></style>
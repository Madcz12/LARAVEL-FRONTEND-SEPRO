<template>
    <v-container fluid>
        <v-card title="Proyectos Especiales" :subtitle="`Bienvenid@ ${this.$store.getters.getUsuario}`">

        </v-card>
    </v-container>
    <v-card>
        <v-card-text>
            <v-table class="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOMBRE</th>
                        <th>PAIS</th>
                        <th>OPCIONES</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </v-table>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'WelcomeView',
    data() {
        return {
            projects: [
                {
                    id: 1,
                    name: "Proyecto 1",
                    description: "Este es el proyecto 1",
                },
                {
                    id: 2,
                    name: "Proyecto 2",
                    description: "Este es el proyecto 2",
                },
            ],
            headers: [
                {
                    text: "ID",
                    value: "id",
                },
                {
                    text: "Nombre",
                    value: "name",
                },
                {
                    text: "Descripción",
                    value: "description",
                },
            ],
        }
    },
    methods: {
        onRowClick(row) {
            this.$modal.open({
                title: "Información del proyecto",
                content: `
          <p>ID: ${row.id}</p>
          <p>Nombre: ${row.name}</p>
          <p>Descripción: ${row.description}</p>
        `,
            });
        },
    },
}
</script>

<style lang="scss" scoped></style>
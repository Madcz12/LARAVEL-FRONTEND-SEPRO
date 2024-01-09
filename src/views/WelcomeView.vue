<template>
    <v-container fluid>
        <v-card title="Sistema de Prueba" :subtitle="`Bienvenid@ ${this.$store.getters.getUsuario}`">
            <v-img src="https://cloudfour.com/examples/img-currentsrc/images/kitten-large.png">

            </v-img>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'WelcomeView'
}
</script>

<style lang="scss" scoped></style>
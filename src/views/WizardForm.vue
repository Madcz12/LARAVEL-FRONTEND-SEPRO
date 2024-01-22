<template>
    <div>
        <form-wizard shape="tab" color="#e67e22" :show-progress="false" vertical-tabs>
            <tab-content title="Fase 1">
                <h1>Inicio Hola mundo</h1>
                <v-row>
                    <v-col xs="12" sm="10" md="10" lg="8" x="10" xxl="10">
                        <v-card variant="outlined">
                            <v-form>
                                <v-container fluid>
                                    <v-row>
                                        <v-col cols="2">
                                            <v-list-subheader style="font-weight: 800;">Nombre del
                                                Proyecto</v-list-subheader>
                                        </v-col>

                                        <v-col cols="8">
                                            <v-text-field variant="outlined" v-model="nombreProyecto"
                                                label="Nombre del Proyecto" required></v-text-field>
                                        </v-col>
                                    </v-row>

                                    <v-row>
                                        <v-col cols="2">
                                            <v-list-subheader style="font-weight: 800;">Sector</v-list-subheader>
                                        </v-col>

                                        <v-col cols="8">
                                            <v-text-field variant="outlined" v-model="sector" label="Sector"
                                                required></v-text-field>
                                        </v-col>
                                    </v-row>

                                    <v-row>
                                        <v-col cols="2">
                                            <v-list-subheader style="font-weight: 800;">Empresa</v-list-subheader>
                                        </v-col>

                                        <v-col cols="8">
                                            <v-text-field variant="outlined" v-model="empresa" label="Empresa"
                                                required></v-text-field>
                                        </v-col>
                                    </v-row>

                                    <v-row>
                                        <v-col cols="2">
                                            <v-list-subheader style="font-weight: 800;">Objetivo del
                                                Proyecto</v-list-subheader>
                                        </v-col>

                                        <v-col cols="8">
                                            <v-textarea variant="outlined" v-model="alcanceProyecto"
                                                label="Objetivo del Proyecto" required></v-textarea>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="2">
                                            <v-list-subheader style="font-weight: 800;">Monto Inicial</v-list-subheader>
                                        </v-col>

                                        <v-col cols="8">
                                            <v-text-field variant="outlined" v-model="montoInicial" label="Monto Inicial"
                                                required type="number"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-form>
                        </v-card>

                    </v-col>
                </v-row>
            </tab-content>
            <tab-content title="Fase 2">
                <h1>Analisis de Opciones</h1>
                <v-row>
                    <v-col xs="12" sm="10" md="10" lg="8" x="10" xxl="10">
                        <v-card variant="outlined">
                            <v-form ref="form">
                                <v-container fluid>
                                    <v-row>
                                        <v-col col="2">
                                            <v-list-subheader style="font-weight: 800;">Designación del
                                                Gerente</v-list-subheader>
                                        </v-col>
                                        <v-col cols="8">
                                            <v-text-field variant="outlined" v-model="designacionGerente"
                                                label="Designación del Gerente" required></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col col="2">
                                            <v-list-subheader style="font-weight: 800;">Tecnologia</v-list-subheader>
                                        </v-col>
                                        <v-col cols="8">
                                            <v-text-field variant="outlined" v-model="tecnologia" label="Tecnologia"
                                                required></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col col="2">
                                            <v-list-subheader style="font-weight: 800;">Ubicación</v-list-subheader>
                                        </v-col>
                                        <v-col cols="8">
                                            <v-text-field variant="outlined" v-model="ubicacion" label="Ubicación"
                                                required></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col col="2">
                                            <v-list-subheader style="font-weight: 800;">Monto Inicial</v-list-subheader>
                                        </v-col>
                                        <v-col cols="8">
                                            <v-text-field variant="outlined" v-model="montoInicial" label="Monto Inicial"
                                                required></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col col="2">
                                            <v-list-subheader style="font-weight: 800;">Cronograma</v-list-subheader>
                                        </v-col>
                                        <v-col cols="8">
                                            <v-date-picker></v-date-picker>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col col="2">
                                            <v-list-subheader style="font-weight: 800;">Alcance
                                                Preliminar</v-list-subheader>
                                        </v-col>
                                        <v-col cols="8">
                                            <v-checkbox variant="outlined" v-model="tieneAlcancePreliminar"
                                                label="Tiene alcance preliminar"></v-checkbox>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col col="2">
                                            <v-list-subheader style="font-weight: 800;">Permisos</v-list-subheader>
                                        </v-col>
                                        <v-col cols="8">
                                            <v-select variant="outlined" v-model="permisologia" :items="permisologias"
                                                label="Permisologia" required></v-select>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col col="2">
                                            <v-list-subheader style="font-weight: 800;">Gestion de adquisición a largo
                                                plazo</v-list-subheader>
                                        </v-col>
                                        <v-col cols="8">

                                            <v-checkbox v-model="gestionAdquisicionLargoPlazo"
                                                label="Gestión de adquisición a largo plazo"></v-checkbox>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col col="2">
                                            <v-list-subheader style="font-weight: 800;">Base del Proyecto</v-list-subheader>
                                        </v-col>
                                        <v-col cols="8">
                                            <v-text-field variant="outlined" v-model="baseProyecto"
                                                label="Base del proyecto" required></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-form>
                        </v-card>
                    </v-col>
                </v-row>
            </tab-content>
            <tab-content title="Fase 3">
                <h1>Definición</h1>
                <v-row>
                    <v-col xs="12" sm="10" md="10" lg="8" x="10" xxl="10">
                        <v-card variant="outlined">
                            <v-form>
                                <v-container fluid>
                                    <v-row>
                                        <v-col col="2">
                                            <v-list-subheader style="font-weight: 800;">Precisión de
                                                Alcance</v-list-subheader>
                                        </v-col>
                                        <v-col cols="8">
                                            <v-text-field variant="outlined" v-model="precisionAlcance"
                                                label="Precision de Alcance" required></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col col="2">
                                            <v-list-subheader style="font-weight: 800;">Aseguramiento de
                                                Tecnologia</v-list-subheader>
                                        </v-col>
                                        <v-col cols="8">
                                            <v-text-field variant="outlined" v-model="asegurarTecnologiaProveedor"
                                                label="Aseguramiento de Tecnologia" required></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col col="2">
                                            <v-list-subheader style="font-weight: 800;">Conclusión de diseño
                                                básico</v-list-subheader>
                                        </v-col>
                                        <v-col cols="8">
                                            <v-textarea v-model="conclusionDisenoBasico" label="Conclusión de diseño básico"
                                                required></v-textarea>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-form>
                        </v-card>

                    </v-col>
                </v-row>
            </tab-content>
            <tab-content title="Fase 4">
                <h1>Ejecución</h1>
                <v-row>
                    <v-col xs="12" sm="10" md="8" lg="6" xl="4" xxl="3">
                        <v-form ref="form">
                            <v-checkbox v-model="procesoContratacion" label="Proceso de contratación"></v-checkbox>
                            <v-row>
                                <v-col cols="6">
                                    <v-text-field v-model="avanceEjecucionProcura" label="Procura" required></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="avanceEjecucionConstruccion" label="Construcción"
                                        required></v-text-field>
                                </v-col>
                            </v-row>
                            <v-text-field v-model="avanceFinanciero" label="Porcentaje de información"
                                required></v-text-field>
                            <v-row>
                                <v-col cols="6">
                                    <v-text-field v-model="avanceDocumentacionManuales" label="Porcentaje de manuales"
                                        required></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="avanceDocumentacionPlanos" label="Planos así construidos"
                                        required></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="6">
                                    <v-text-field v-model="avancePruebasEquipos" label="Equipos en vacio"
                                        required></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="avancePruebasArranque" label="Pruebas de arranque"
                                        required></v-text-field>
                                </v-col>
                            </v-row>
                            <v-checkbox v-model="entrenamientoPersonal" label="Entrenamiento personal"></v-checkbox>
                            <v-text-field v-model="pruebasGarantia" label="Pruebas de garantia" required></v-text-field>
                            <v-text-field v-model="aceptacionProvisional" label="Aceptación Provisional"
                                required></v-text-field>
                            <v-btn color="primary" @click="submit">
                                Enviar
                            </v-btn>
                        </v-form>
                    </v-col>
                </v-row>
            </tab-content>
            <tab-content title="Fase 5">
                <h1>Cierre</h1>
                <v-row>
                    <v-col xs="12" sm="10" md="8" lg="6" xl="4" xxl="3">
                        <v-form ref="form">
                            <v-label for="pruebasAceptacionFinal">Pruebas de aceptación final</v-label>
                            <v-text-field v-model="pruebasAceptacionFinal" label="Pruebas de aceptación final"
                                required></v-text-field>
                            <v-row>
                                <v-col cols="6">
                                    <v-label for="manualesOperacion">Cuantos Manuales de Operación fueron Usados</v-label>
                                    <v-text-field v-model="manualesOperacion"
                                        label="Cuantos Manuales de Operación fueron Usados" required></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-label for="manualesMantenimiento">Cuantos Manuales de Mantenimiento fueron
                                        Usados</v-label>
                                    <v-text-field v-model="manualesMantenimiento"
                                        label="Cuantos Manuales de Mantenimiento fueron Usados" required></v-text-field>
                                </v-col>
                            </v-row>
                            <v-text-field v-model="aceptacionFinal" label="Aceptación Final" required></v-text-field>
                            <v-checkbox v-model="cierreContratos" label="Cierre de Contratos"></v-checkbox>
                            <v-text-field v-model="transferenciaActivos" label="Transferencia de los Activos"
                                required></v-text-field>
                            <v-text-field v-model="transferenciaGarantias" label="Transferencia de Garantias"
                                required></v-text-field>
                            <v-btn color="primary" @click="submit">
                                Enviar
                            </v-btn>
                        </v-form>
                    </v-col>
                </v-row>
            </tab-content>
        </form-wizard>
        <Vue3FormWizard />
    </div>
</template>

<script>
import Vue3FormWizard from 'vue3-form-wizard'
import 'vue3-form-wizard/dist/style.css'
import { FormWizard, TabContent } from 'vue3-form-wizard';
export default {
    components: {
        Vue3FormWizard,
        FormWizard,
        TabContent
    },
    data() {
        return {
            nombreProyecto: "",
            sector: "",
            empresa: "",
            objetivoProyecto: "",
            alcanceProyecto: "",
            estudio: "",
            montoInicial: 0,
            estudios: ["Estudio de mercado", "Estudio de factibilidad", "Estudio de viabilidad"],
            designacionGerente: "",
            tecnologia: "",
            ubicacion: "",
            cronograma: "",
            precisionAlcance: "",
            tieneAlcancePreliminar: false,
            permisologias: ["Ninguna", "Permisos de construcción", "Permisos ambientales", "Permisos de seguridad"],
            permisologia: "",
            gestionAdquisicionLargoPlazo: false,
            baseProyecto: "",
            precisionSitioEjecucion: false,
            precisionInterrelaciones: false,
            obtencionPermisologia: false,
            asegurarTecnologiaProveedor: "",
            conclusionDisenoBasico: "",
            procesoContratacion: false,
            avanceEjecucionProcura: "",
            avanceEjecucionConstruccion: "",
            avanceFinanciero: "",
            avanceDocumentacionManuales: "",
            avanceDocumentacionPlanos: "",
            avancePruebasEquipos: "",
            avancePruebasArranque: "",
            entrenamientoPersonal: false,
            pruebasGarantia: "",
            aceptacionProvisional: "",
            pruebasAceptacionFinal: "",
            manualesOperacion: "",
            manualesMantenimiento: "",
            aceptacionFinal: "",
            cierreContratos: false,
            transferenciaActivos: "",
            transferenciaGarantias: "",
        };
    },
    props: {
        shape: {
            type: String,
            default: 'circle'
        },
    }
}
</script>


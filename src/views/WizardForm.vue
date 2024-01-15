<template>
    <div>
        <form-wizard>
            <tab-content title="Fase 1">
                <v-row>
                    <v-col xs="12" sm="10" md="8" lg="6" xl="4" xxl="3">
                        <v-form ref="form">
                            <v-text-field v-model="nombreProyecto" label="Nombre del Proyecto" required></v-text-field>
                            <v-text-field v-model="sector" label="Sector" required></v-text-field>
                            <v-text-field v-model="empresa" label="Empresa" required></v-text-field>
                            <v-textarea v-model="objetivoProyecto" label="Objetivo del Proyecto" required></v-textarea>
                            <v-textarea v-model="alcanceProyecto" label="Alcance del Proyecto" required></v-textarea>
                            <v-select v-model="estudio" :items="estudios" label="Estudio" required></v-select>
                            <v-text-field v-model="montoInicial" label="Monto Inicial" required
                                type="number"></v-text-field>

                        </v-form>
                    </v-col>
                </v-row>
            </tab-content>
            <tab-content title="Fase 2">
                <v-row>
                    <v-col xs="12" sm="10" md="8" lg="6" xl="4" xxl="3">
                        <v-form ref="form">
                            <v-text-field v-model="designacionGerente" label="Designación del Gerente"
                                required></v-text-field>
                            <v-text-field v-model="tecnologia" label="Tecnologia" required></v-text-field>
                            <v-text-field v-model="ubicacion" label="Ubicación" required></v-text-field>
                            <v-text-field v-model="montoInicial" label="Monto Inicial" required
                                type="number"></v-text-field>
                            <v-text-field v-model="cronograma" label="Cronograma" required></v-text-field>
                            <v-checkbox v-model="tieneAlcancePreliminar" label="Tiene alcance preliminar"></v-checkbox>
                            <v-select v-model="permisologia" :items="permisologias" label="Permisologia"
                                required></v-select>
                            <v-checkbox v-model="gestionAdquisicionLargoPlazo"
                                label="Gestión de adquisición a largo plazo"></v-checkbox>
                            <v-text-field v-model="baseProyecto" label="Base del proyecto" required></v-text-field>
                        </v-form>
                    </v-col>
                </v-row>
            </tab-content>
            <tab-content title="Fase 3">
                <v-row>
                    <v-col xs="12" sm="10" md="8" lg="6" xl="4" xxl="3">
                        <v-form ref="form">
                            <v-checkbox v-model="precisionAlcance" label="Precisión de alcance"></v-checkbox>
                            <v-checkbox v-model="precisionSitioEjecucion"
                                label="Precisión del sitio de ejecución"></v-checkbox>
                            <v-checkbox v-model="precisionInterrelaciones"
                                label="Precisión de interrelaciones"></v-checkbox>
                            <v-checkbox v-model="obtencionPermisologia" label="Obtención de permisologia"></v-checkbox>
                            <v-text-field v-model="asegurarTecnologiaProveedor"
                                label="Aseguramiento de tecnologia o proveedor" required></v-text-field>
                            <v-textarea v-model="conclusionDisenoBasico" label="Conclusión de diseño básico"
                                required></v-textarea>
                            <v-btn color="primary" @click="submit">
                                Enviar
                            </v-btn>
                        </v-form>
                    </v-col>
                </v-row>
            </tab-content>
            <tab-content title="Fase 4">
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
            tieneAlcancePreliminar: false,
            permisologias: ["Ninguna", "Permisos de construcción", "Permisos ambientales", "Permisos de seguridad"],
            permisologia: "",
            gestionAdquisicionLargoPlazo: false,
            baseProyecto: "",
            precisionAlcance: false,
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
}
</script>


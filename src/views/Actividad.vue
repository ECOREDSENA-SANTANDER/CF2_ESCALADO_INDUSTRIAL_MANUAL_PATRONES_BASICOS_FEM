<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Principios de escalado y disposición de los patrones básicos',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> identificar principios del escalado industrial de patrones básicos. ',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'El escalado proporcional incrementa o reduce todas las dimensiones del patrón de forma uniforme entre tallas consecutivas. ',
          imagen: require('@/assets/actividad/imagen1.jpg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un conocimiento claro de los principios del escalado industrial de patrones básicos. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 2,
          texto:
            'El escalado combinado aplica el mismo incremento en todas las zonas del patrón, manteniendo constantes las proporciones globales. ',
          imagen: require('@/assets/actividad/imagen2.jpg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un conocimiento claro de los principios del escalado industrial de patrones básicos. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 3,
          texto:
            'El escalado diferencial se emplea para realizar ajustes puntuales en áreas específicas del patrón, independientemente de la proporción general. ',
          imagen: require('@/assets/actividad/imagen3.jpg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un conocimiento claro de los principios del escalado industrial de patrones básicos. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 4,
          texto:
            'El plano cartesiano se forma por dos ejes perpendiculares, nombrados eje X para el horizontal y eje Y para el vertical. ',
          imagen: require('@/assets/actividad/imagen4.jpg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un conocimiento claro de los principios del escalado industrial de patrones básicos. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 5,
          texto:
            'El origen del plano cartesiano se ubica en las coordenadas (1, 1). ',
          imagen: require('@/assets/actividad/imagen1.jpg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un conocimiento claro de los principios del escalado industrial de patrones básicos. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 6,
          texto:
            'Los puntos de aplome sirven como pivotes de referencia desde los cuales se proyectan los desplazamientos dimensionales en el escalado. ',
          imagen: require('@/assets/actividad/imagen2.jpg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un conocimiento claro de los principios del escalado industrial de patrones básicos. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 7,
          texto:
            'Para la verificación dimensional basta con una inspección visual superficial de las piezas escaladas, sin necesidad de medición. ',
          imagen: require('@/assets/actividad/imagen3.jpg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un conocimiento claro de los principios del escalado industrial de patrones básicos. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 8,
          texto:
            'El patrón base de pantalón considera la integración de costuras, tiros, y medidas anatómicas para asegurar funcionalidad sin incluir elementos estéticos. ',
          imagen: require('@/assets/actividad/imagen4.jpg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un conocimiento claro de los principios del escalado industrial de patrones básicos. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 9,
          texto:
            'La organización espacial de patrones escalados incluye la alineación de todas las piezas según la dirección del hilo. ',
          imagen: require('@/assets/actividad/imagen1.jpg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un conocimiento claro de los principios del escalado industrial de patrones básicos. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 10,
          texto:
            'La cinta métrica de fibra textil es un instrumento digital que automatiza el proceso de escalado. ',
          imagen: require('@/assets/actividad/imagen2.jpg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un conocimiento claro de los principios del escalado industrial de patrones básicos. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
      ],
      mensaje_final_aprobado:
        'Se evidencia un conocimiento claro de los principios del escalado industrial de patrones básicos.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica. ',
    },
  }),
}
</script>

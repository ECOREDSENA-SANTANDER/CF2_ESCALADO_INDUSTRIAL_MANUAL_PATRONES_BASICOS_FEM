<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-4
      .col-lg-8(data-aos="fade-right")
        .bg-1.tarjeta.p-4.h-100
          p.mb-0 El componente formativo integra de manera progresiva los conocimientos esenciales para la graduación de moldes en la industria de la confección. En una primera etapa, se abordan los fundamentos del escalado, partiendo de su definición, objetivos y principios técnicos aplicados a las prendas de vestir, con énfasis en los métodos proporcional, combinado y diferencial, que permiten adaptar volúmenes y proporciones de forma coherente con las exigencias de ajuste, ergonomía y producción en serie. Asimismo, se describen las condiciones del entorno de trabajo, incluyendo la distribución funcional del espacio del taller, la disponibilidad de instrumentos tradicionales (como reglas, escuadras y plantillas) y el uso de herramientas digitales, todo ello bajo criterios de ergonomía y eficiencia productiva.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/intro/1.png', alt='')

    .row.justify-content-center.mb-5
      .col-lg-4.col-md-8.col-11.mb-4.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/intro/2.png', alt='')
      .col-lg-8(data-aos="fade-left")
        p.mb-4 Posteriormente, se aplican técnicas específicas a los patrones básicos, a partir del uso del plano cartesiano como sistema de referencia geométrica. Este enfoque permite realizar el trazado y la reproducción de piezas mediante coordenadas y vectores, lo que garantiza precisión en la ubicación de los puntos de aplome y en la transferencia exacta de medidas. Se ejercitan métodos de escalado tanto para prendas superiores como inferiores, realizando los ajustes necesarios en hombros, contornos y largos, según las tipologías corporales correspondientes. 
        .bg-2.tarjeta.p-4
          p.mb-0 Es así, como el módulo concluye con la disposición técnica de los patrones graduados, que incluye la organización espacial, la secuenciación lógica para su presentación, la marcación y señalización técnica de líneas de corte y costura, y la verificación dimensional que asegura la fidelidad de cada pieza al diseño original. De esta manera, los y las aprendices consolidan competencias analíticas, operativas y comunicativas alineadas con los estándares de calidad del sector moda.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Qo8WWebVqZE?si=L7GZIKPgm3QdONaj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    figcaption Video. Principios de escalado y disposición de los patrones básicos 


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

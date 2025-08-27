<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p.mb-4 El proceso de escalado y disposición técnica de los patrones básicos constituye una etapa fundamental en la industria del vestuario, ya que permite adaptar moldes a diferentes tallas sin alterar su proporción, forma ni funcionalidad. Esta síntesis organiza de manera estructurada los conocimientos esenciales que integran el escalado, desde los fundamentos teóricos hasta la aplicación práctica en el diseño y producción de prendas superiores e inferiores.    

    .row.justify-content-center
      .col-lg-12.mb-5.p-3
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis articula cuatro ejes temáticos: los fundamentos del escalado, que comprenden su definición, objetivos y tipos; el entorno y herramientas, enfocados en las condiciones del espacio de trabajo; las técnicas aplicadas, que incluyen el uso del plano cartesiano, los puntos de aplome y métodos de escalado; y la disposición técnica de patrones, donde se destaca la organización espacial, la señalización y la verificación dimensional para asegurar precisión en el proceso productivo. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

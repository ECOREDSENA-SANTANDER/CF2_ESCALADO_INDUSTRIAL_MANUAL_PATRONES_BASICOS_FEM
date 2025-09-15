<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Disposición técnica de patrones

    .bloque-texto-g.bg-3.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t4/1.jpg')})`}")
      .bloque-texto-g__texto.tarjeta.p-4.py-5
        p.mb-0 La disposición técnica de los patrones representa una fase clave entre el proceso de escalado y el corte. Su objetivo principal es asegurar que cada pieza se ubique, marque y verifique de manera precisa, funcional y organizada, lo cual resulta fundamental para la calidad final de la prenda. Esta etapa se estructura en tres momentos: 
    
    .py-2
    .subt.d-flex.align-items-end.mb-4(data-aos="fade-right")
      .subt--img
        img(src='@/assets/curso/temas/t2/subt.svg', alt='')
      .subt--text
        h3.mb-0 Organización espacial y secuencia lógica de patrones escalados

    .bg-1.mb-4(data-aos="fade")
      .row.align-items-center
        .col-lg-5.col-md-9
          img(src='@/assets/curso/temas/t4/2.png', alt='')
        .col-lg-7
          p.p-4 Organizar los patrones de manera coherente y estratégica permite optimizar el flujo de trabajo, evitar errores en la manipulación de tallas y asegurar la trazabilidad durante el proceso de confección. Esta organización se realiza en dos niveles: manual, sobre la mesa de trabajo, y digital, mediante sistemas de diseño asistido por computador (CAD). A continuación, se detallan los criterios que guían la disposición física:
    
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-3.col-md-6.col-11.mb-3
        .tarj-hov1.tarjeta.text-center.h-100.p-4
          .ico.mb-4
            img(src='@/assets/curso/temas/t4/tarj1-1.svg', alt='')
          h4 Agrupación por tipo de prenda y talla
          p.mb-0 Se reúnen las piezas que conforman cada prenda (delantero, espalda, mangas, cuello, entre otras) y se organizan en orden ascendente de tallas. Esta clasificación facilita la identificación y previene errores al mezclar moldes de diferentes tamaños.
      .col-lg-3.col-md-6.col-11.mb-3
        .tarj-hov1.tarjeta.text-center.h-100.p-4
          .ico.mb-4
            img(src='@/assets/curso/temas/t4/tarj1-2.svg', alt='')
          h4 Alineación según la dirección del hilo
          p.mb-0 Todas las piezas deben orientarse en función del sentido de la urdimbre del tejido. Esta alineación asegura que las propiedades mecánicas del textil se mantengan uniformes y que la caída de la prenda sea la esperada.
      .col-lg-3.col-md-6.col-11.mb-3
        .tarj-hov1.tarjeta.text-center.h-100.p-4
          .ico.mb-4
            img(src='@/assets/curso/temas/t4/tarj1-3.svg', alt='')
          h4 Espacio mínimo entre patrones
          p.mb-0 Se deja una separación uniforme entre moldes para permitir el trazado, la manipulación y el corte sin comprometer la integridad del material. Esta distancia se verifica con herramientas de medición y mediante inspección táctil.
      .col-lg-3.col-md-6.col-11.mb-3
        .tarj-hov1.tarjeta.text-center.h-100.p-4
          .ico.mb-4
            img(src='@/assets/curso/temas/t4/tarj1-4.svg', alt='')
          h4 Secuencia lógica de disposición
          p.mb-0 Las piezas se colocan siguiendo un orden funcional: primero las partes principales del cuerpo, luego las complementarias y finalmente los acabados. Este orden favorece la continuidad en las etapas de marcación y corte.

    .py-2
    .subt.d-flex.align-items-end.mb-4(data-aos="fade-right")
      .subt--img
        img(src='@/assets/curso/temas/t2/subt.svg', alt='')
      .subt--text
        h3.mb-0 Marcación y señalización técnica del patrón escalado

    p La marcación técnica tiene como propósito facilitar la interpretación y el ensamblaje de los patrones. Consiste en incorporar símbolos, líneas y anotaciones que garanticen claridad durante el montaje y la confección, adaptándose tanto a entornos físicos como digitales e incluyendo accesibilidad táctil cuando se requiere. Los principales elementos son:

    .row.justify-content-center.mb-5
      .col-lg-3.col-md-6.col-10.mb-4
        .tarjetas-up
          img(src='@/assets/curso/temas/t4/tarj2-1.png' alt='')
          .tarjetas-up_card.p-4
            .title.row.align-items-center.mb-3
              .col-2.pe-0
                span.flecha
                  i.fas.fa-chevron-up
                  i.fas.fa-chevron-down
              .col-10
                h5.mb-0 Líneas de corte y márgenes de costura
            p Se diferencian mediante trazos de distinto grosor o texturas. La línea de corte se señala de manera más destacada, mientras que la margen de costura se presenta con trazos más finos o en relieve.
      .col-lg-3.col-md-6.col-10.mb-4
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/t4/tarj2-2.png' alt='')
          .tarjetas-up_card.p-4
            .title.row.align-items-center.mb-4
              .col-2.pe-0
                span.flecha
                  i.fas.fa-chevron-up
                  i.fas.fa-chevron-down
              .col-10
                h5.mb-0 Ejes centrales
            p Se marcan la línea central del delantero y de la espalda con puntos o perforaciones equidistantes, lo que permite una orientación clara al unir las piezas.
      .col-lg-3.col-md-6.col-10.mb-4
        .tarjetas-up
          img(src='@/assets/curso/temas/t4/tarj2-3.png' alt='')
          .tarjetas-up_card.p-4
            .title.row.align-items-center.mb-4
              .col-2.pe-0
                span.flecha
                  i.fas.fa-chevron-up
                  i.fas.fa-chevron-down
              .col-10
                h5.mb-0 Dirección del hilo
            p Indicada mediante una flecha con línea segmentada, acompañada de texto en relieve que indica “dirección de hilo”. Este elemento es esencial para garantizar la correcta colocación de los moldes sobre el tejido.      
      .col-lg-3.col-md-6.col-10.mb-4
        .tarjetas-up
          img(src='@/assets/curso/temas/t4/tarj2-4.png' alt='')
          .tarjetas-up_card.p-4
            .title.row.align-items-center.mb-4
              .col-2.pe-0
                span.flecha
                  i.fas.fa-chevron-up
                  i.fas.fa-chevron-down
              .col-10
                h5.mb-0 Muescas y piquetes
            p Se aplican en puntos estratégicos para facilitar el empalme de piezas. Generalmente se ubican de forma simétrica y en número suficiente (usualmente tres) para evitar errores de alineación.  
      .col-lg-3.col-md-6.col-10.mb-4
        .tarjetas-up
          img(src='@/assets/curso/temas/t4/tarj2-5.png' alt='')
          .tarjetas-up_card.p-4
            .title.row.align-items-center.mb-3
              .col-2.pe-0
                span.flecha
                  i.fas.fa-chevron-up
                  i.fas.fa-chevron-down
              .col-10
                h5.mb-0 Puntos de referencia adicionales
            p Se marcan zonas clave como hombros, sisas y caderas mediante pequeños orificios o relieves, los cuales ayudan a comprobar la progresión entre tallas y a ubicar correctamente los componentes.
      .col-lg-3.col-md-6.col-10.mb-4
        .tarjetas-up
          img(src='@/assets/curso/temas/t4/tarj2-6.png' alt='')
          .tarjetas-up_card.p-4
            .title.row.align-items-center.mb-4
              .col-2.pe-0
                span.flecha
                  i.fas.fa-chevron-up
                  i.fas.fa-chevron-down
              .col-10
                h5.mb-0 Etiquetado de piezas
            p Cada molde debe incluir un bloque informativo con el nombre de la pieza, la talla, el código y la versión del escalado. Esta información se incorpora en relieve o en formato digital como metadatos.
      .col-lg-3.col-md-6.col-10.mb-4
        .tarjetas-up
          img(src='@/assets/curso/temas/t4/tarj2-7.png' alt='')
          .tarjetas-up_card.p-4
            .title.row.align-items-center.mb-3
              .col-2.pe-0
                span.flecha
                  i.fas.fa-chevron-up
                  i.fas.fa-chevron-down
              .col-10
                h5.mb-0 Indicaciones de procesos especiales
            p Se señalan elementos como dobleces, pliegues, refuerzos o márgenes de volteo mediante líneas discontinuas o símbolos normalizados, orientando sobre tratamientos posteriores en la confección.


    .py-2
    .subt.d-flex.align-items-end.mb-4(data-aos="fade-right")
      .subt--img
        img(src='@/assets/curso/temas/t2/subt.svg', alt='')
      .subt--text
        h3.mb-0 Verificación dimensional

    p La verificación dimensional tiene como finalidad asegurar que las piezas escaladas se ajusten con exactitud a las medidas del cuadro de tallas y cumplan con los parámetros de calidad establecidos. Esta validación se lleva a cabo mediante inspecciones visuales y táctiles, aplicando instrumentos de medición y criterios técnicos. Las acciones principales son:

    .row.mb-4(data-aos="fade-down")
      .col-md-6.col-lg-cinco.mb-4.mb-lg-0
        .tarjeta-numerada.color-primario.h-100.p-4.pb-4
          .tarjeta-numerada__numero
            .h2 1
          h5.text-center.px-3 Medición de cotas críticas
          p.text-center.mb-0 Se evalúan medidas fundamentales como busto, cintura, cadera o largo de pernera, dependiendo del tipo de prenda. Se utiliza regla graduada o calibrador para comparar las dimensiones reales con los valores estipulados.
      .col-md-6.col-lg-cinco.mb-4.mb-lg-0
        .tarjeta-numerada.color-secundario.h-100.p-4.pb-4
          .tarjeta-numerada__numero
            .h2 2
          h5.text-center.px-3 Control de tolerancias
          p.text-center.mb-0 Se verifican los márgenes permitidos de variación establecidos por normas del sector o lineamientos de marca. Cualquier desviación se registra y se analiza para aplicar ajustes correctivos, si es necesario.
      .col-md-6.col-lg-cinco.mb-4.mb-lg-0
        .tarjeta-numerada.color-acento-botones.h-100.p-4.pb-4
          .tarjeta-numerada__numero
            .h2 3
          h5.text-center.px-3 Revisión de simetría
          p.text-center.mb-0 Se comparan piezas espejadas (como delantero y espalda o piernas derecha e izquierda) a fin de garantizar que las medidas y formas sean equivalentes, lo cual es crucial para la apariencia y funcionalidad del producto final.
      .col-md-6.col-lg-cinco.mb-4.mb-lg-0
        .tarjeta-numerada.color-acento-contenido.h-100.p-4.pb-4
          .tarjeta-numerada__numero
            .h2 4
          h5.text-center.px-3 Validación de ángulos y alineaciones
          p.text-center.mb-0 Con escuadra técnica y plantillas angulares, se revisan los perfiles de sisas, hombros y costuras. Se busca asegurar que los ángulos estén correctamente definidos para facilitar el ensamble y la comodidad de uso.
      .col-md-6.col-lg-cinco.mb-4.mb-lg-0
        .tarjeta-numerada.color-adicional-1.h-100.p-4.pb-4
          .tarjeta-numerada__numero
            .h2.text-white E
          h5.text-center.px-3 Registro y documentación
          p.text-center.mb-0 Todos los resultados se consignan en formatos estandarizados, ya sea en fichas físicas con relieve táctil o en sistemas digitales con campos estructurados. Esta información es clave para auditorías, trazabilidad y control de calidad en procesos industriales.


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
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

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos del escalado
        
    .bloque-texto-g.bg-5.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/1.jpg')})`}")
      .bloque-texto-g__texto.tarjeta.p-4
        p.mb-0 El escalado industrial es una etapa fundamental en la cadena de producción textil, ya que permite generar la diversidad de tallas requeridas por el mercado a partir de un único patrón base; el cual es elaborado con medidas específicas adaptadas a las proporciones del cuerpo humano, sirve como punto de partida para obtener múltiples tallas de una misma prenda. Para realizar este proceso con precisión, es indispensable comprender los fundamentos técnicos que lo sustentan, basados en criterios geométricos, anatómicos y antropométricos, los cuales garantizan la coherencia dimensional y funcional de todas las tallas derivadas.

    p Dominar los principios conceptuales y metodológicos del escalado permite al aprendiz aplicar correctamente las técnicas sobre distintos tipos de patrones, optimizando así la generación ordenada, precisa y eficiente de tallas para su posterior uso en la producción industrial de prendas.


    Separador    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1  Concepto y objetivos del escalado

    p.mb-4 El escalado es un procedimiento técnico y sistemático mediante el cual se generan distintas tallas a partir de un patrón base ajustado a un conjunto definido de medidas anatómicas, por ello, el proceso consiste en incrementar o reducir de forma controlada las dimensiones del molde original, siguiendo parámetros establecidos por normas técnicas y tablas antropométricas.

    .bloque-texto-g.bloque-texto-g--inverso.bg-3.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/2.jpg')})`}")
      .bloque-texto-g__texto.tarjeta.p-4.py-5.d-flex.flex-column
        .subt2.py-1.ps-3.pe-4.mb-3
          h4.mb-0 El objetivo principal del escalado es:
        p.mb-0 Lograr que cada talla mantenga una adecuada correspondencia entre las proporciones anatómicas del usuario y la funcionalidad prevista de la prenda, garantizando así uniformidad, precisión y confiabilidad en la producción a gran escala.

    .py-2
    .subt.d-flex.align-items-end.mb-4(data-aos="fade-right")
      .subt--img
        img(src='@/assets/curso/temas/t2/subt.svg', alt='')
      .subt--text
        h3.mb-0 Objetivos específicos

    .row.justify-content-center.align-items-center
      .col-lg-9.mb-4(data-aos="fade-right")
        ol.lista-ol--cuadro.lista-ol--separador.fa-lista
          li 
            .lista-ol--cuadro__vineta
              span.fw-bold 1
            span.mb-0 Generar múltiples tallas a partir de un solo patrón base, conservando las proporciones funcionales y anatómicas definidas.
          li 
            .lista-ol--cuadro__vineta
              span.fw-bold 2
            span.mb-0 Facilitar la producción industrial de prendas mediante patrones técnicamente validados y adaptados al mercado.
          li 
            .lista-ol--cuadro__vineta
              span.fw-bold 3
            span.mb-0 Optimizar los recursos productivos minimizando errores, reprocesos y pérdidas de material.
          li 
            .lista-ol--cuadro__vineta
              span.fw-bold 4
            span.mb-0 Garantizar consistencia dimensional y calidad en el ajuste de las prendas, mejorando la experiencia del usuario final.
          li 
            .lista-ol--cuadro__vineta
              span.fw-bold 5
            span.mb-0 Adaptar las prendas a la diversidad corporal de la población objetivo, utilizando referencias antropométricas reconocidas internacionalmente.
      .col-lg-3.col-md-9.col-11.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/3.png', alt='')

    .cajon.color-secundario.bg-1.p-4      
      p.mb-0 El escalado es un proceso clave para la estandarización técnica del vestuario, permitiendo responder a los requerimientos productivos y comerciales de la industria textil y de confección.


    Separador    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2  Principios técnicos del escalado en prendas de vestir

    .bloque-texto-g.bloque-texto-g--inverso.bg-3.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/4.jpg')})`}")
      .bloque-texto-g__texto.tarjeta.p-4
        p.mb-0 Los principios técnicos del escalado constituyen la base metodológica que permite transformar el patrón base en distintas tallas sin perder su integridad funcional, ergonómica ni estética. Estos principios orientan el proceso técnico, asegurando que los resultados se alineen con el diseño original y las normas antropométricas aplicables.

    .py-2
    .subt.d-flex.align-items-end.mb-4(data-aos="fade-right")
      .subt--img
        img(src='@/assets/curso/temas/t2/subt.svg', alt='')
      .subt--text
        h3.mb-0 Principios fundamentales

    .row.mb-4(data-aos="fade-down")
      .col-md-6.col-lg-cinco.mb-4.mb-lg-0
        .tarjeta-numerada.color-primario.h-100.p-4.pb-4
          .tarjeta-numerada__numero
            .h2 A
          h5.text-center.px-3 Principio de proporcionalidad anatómica
          p.text-center.mb-0 Preserva las relaciones proporcionales entre las distintas partes del patrón, de manera que el aumento o reducción entre tallas refleje fielmente las proporciones del cuerpo humano.
      .col-md-6.col-lg-cinco.mb-4.mb-lg-0
        .tarjeta-numerada.color-secundario.h-100.p-4.pb-4
          .tarjeta-numerada__numero
            .h2 B
          h5.text-center.px-3 Principio de puntos de referencia (pivotes)
          p.text-center.mb-0 Establece puntos estratégicos en el patrón desde donde se controlan los cambios dimensionales. Estos puntos permiten que las modificaciones no alteren la estructura ni funcionalidad de la prenda.
      .col-md-6.col-lg-cinco.mb-4.mb-lg-0
        .tarjeta-numerada.color-acento-botones.h-100.p-4.pb-4
          .tarjeta-numerada__numero
            .h2 C
          h5.text-center.px-3 Principio de correspondencia dimensional
          p.text-center.mb-0 Asegura que las dimensiones modificadas mantengan coherencia con las áreas relacionadas del patrón, evitando desajustes en elementos complementarios como sisas, mangas o contornos.
      .col-md-6.col-lg-cinco.mb-4.mb-lg-0
        .tarjeta-numerada.color-acento-contenido.h-100.p-4.pb-4
          .tarjeta-numerada__numero
            .h2 D
          h5.text-center.px-3 Principio de precisión técnica
          p.text-center.mb-0 Exige el uso riguroso de normas técnicas y tablas antropométricas validadas para definir los incrementos o reducciones, asegurando exactitud y funcionalidad en cada talla.
      .col-md-6.col-lg-cinco.mb-4.mb-lg-0
        .tarjeta-numerada.color-adicional-1.h-100.p-4.pb-4
          .tarjeta-numerada__numero
            .h2.text-white E
          h5.text-center.px-3 Principio de funcionalidad ergonómica
          p.text-center.mb-0 Garantiza que las variaciones entre tallas conserven la capacidad de movimiento natural del cuerpo humano, aspecto crucial en prendas diseñadas para actividades físicas específicas.
    
    .cajon.color-acento-contenido.bg-2.p-4      
      p.mb-0 La aplicación coherente de estos principios asegura que el escalado cumpla con las exigencias técnicas y ergonómicas de la confección industrial moderna.      


    Separador    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3  Tipos de escalado: proporcional, combinado y diferencial

    .row.justify-content-center.mb-5
      .col-lg-4.col-md-9.col-11.mb-3.mb-lg-0
        img(src='@/assets/curso/temas/t1/6.png' alt='')
      .col-lg-8
        .bg-3.p-4.tarjeta.h-100.d-flex.align-items-center
          p.mb-0 En el contexto técnico del escalado industrial, se emplean distintos métodos para adaptar un patrón base a diversas tallas, dependiendo de las características de la prenda, el público objetivo y los requerimientos funcionales. 
      
    .row.mb-5(data-aos="fade")
        .col-lg-10.position-relative
          .avatar
            img(src="@/assets/curso/temas/t1/img-conect.svg", alt="").img250          
          .crd.crd--avatarHorizontal.crd--first.py-4
            .row.align-items-center
              .col-auto
                img(src="@/assets/curso/temas/t1/img-con-1.svg", alt="")
              .col
                h4 Escalado proporcional
                p Consiste en aplicar aumentos o reducciones uniformes y constantes a todas las dimensiones del patrón base. Se utiliza en prendas de diseño básico, donde la estructura general no requiere ajustes diferenciales. Es un método de baja complejidad técnica.
          .crd.crd--avatarHorizontal.py-4
            .row.align-items-center
              .col-auto
                img(src="@/assets/curso/temas/t1/img-con-2.svg", alt="")
              .col
                h4 Escalado combinado
                p Implica aplicar ajustes diferenciados en zonas específicas del patrón según criterios anatómicos o funcionales. Se usa frecuentemente en prendas como chaquetas o vestidos, que demandan un ajuste más preciso en determinadas áreas del cuerpo. Presenta una complejidad técnica media-alta.
          .crd.crd--avatarHorizontal.crd--last.py-4
            .row.align-items-center
              .col-auto
                img(src="@/assets/curso/temas/t1/img-con-3.svg", alt="")
              .col
                h4 Escalado diferencial
                p Este método aplica modificaciones puntuales y localizadas en áreas concretas del patrón, sin seguir proporciones generales. Es común en ropa deportiva o técnica, donde se requiere un alto grado de adaptación ergonómica para garantizar comodidad y rendimiento. Tiene alta complejidad técnica.

    .mb-4(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido
        h5 Tabla 1.
        span Comparativa de tipos de escalado
      .tabla-a.color-acento-contenido.tab-p
        table(alt="Cuadro comparativo con tres tipos de escalado: proporcional, combinado y diferencial. Se presentan características técnicas como tipo de incremento, complejidad del patrón, aplicación frecuente, precisión anatómica y adaptabilidad ergonómica.")
          caption Fuente: SENA, (2025)
          thead
            tr.bg-4
              th Característica técnica
              th Escalado proporcional
              th Escalado combinado
              th Escalado diferencial
          tbody
            tr
              td Tipo de incremento
              td Uniforme y constante
              td Variable por zonas
              td Específico y localizado
            tr
              td Complejidad del patrón
              td Baja
              td Media - alta
              td Alta
            tr
              td Aplicación más frecuente
              td Prendas básicas y simples
              td Prendas anatómicas
              td Prendas técnicas / deportivas
            tr
              td Precisión anatómica
              td Estándar
              td Alta
              td Muy alta
            tr
              td Adaptabilidad ergonómica
              td Limitada
              td Moderada a alta
              td Alta

    .bloque-texto-g.bloque-texto-g--inverso.bg-5.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/7.jpg')})`}")
      .bloque-texto-g__texto.tarjeta.p-4.py-5
        p.mb-0 La elección del tipo de escalado adecuado depende de un análisis técnico previo del patrón, el diseño de la prenda y las características del público objetivo. Este análisis permite seleccionar el método que mejor garantice funcionalidad, ajuste anatómico y eficiencia en la producción.

  </template>

<script>
export default {
  name: 'Tema1',
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

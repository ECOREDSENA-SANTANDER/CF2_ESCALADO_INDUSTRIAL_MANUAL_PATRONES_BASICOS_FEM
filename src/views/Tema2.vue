<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Entorno y herramientas de escalado

    .bloque-texto-g.bg-3.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t2/1.jpg')})`}")
      .bloque-texto-g__texto.tarjeta.p-4
        p.mb-0 La configuración adecuada del espacio de trabajo y la selección de herramientas especializadas son aspectos fundamentales para garantizar la precisión y eficiencia en el proceso de escalado de patrones. #[br] #[br]
        p.mb-0 Un entorno ergonómico, con una superficie de trabajo estable y bien iluminada, facilita el manejo preciso del patrón base y contribuye a la correcta aplicación de las técnicas de graduación. La elección de los instrumentos debe responder a criterios de exactitud, durabilidad y funcionalidad, lo que permite minimizar errores durante la trazabilidad de líneas y puntos de referencia.

    .py-2
    .subt.d-flex.align-items-end.mb-4(data-aos="fade-right")
      .subt--img
        img(src='@/assets/curso/temas/t2/subt.svg', alt='')
      .subt--text
        h3.mb-0 Herramientas manuales esenciales

    .row.justify-content-center.mb-3(data-aos="fade-down") 
      .col-lg-4.col-md-6.col-10.mb-3
        .tarj-hov2.bgi-2.tarjeta.p-4.h-100
          .ico.mb-3
            img(src='@/assets/curso/temas/t2/tarj1-1.svg', alt='')
          .bg-white.text-center.w-fit.py-1.px-4.m-auto.mb-3
            h4.mb-0 Reglas graduadas
          p.text-center.mb-0 Permiten medir e incrementar dimensiones de forma uniforme.
      .col-lg-4.col-md-6.col-10.mb-3
        .tarj-hov2.bgi-2.tarjeta.p-4.h-100
          .ico.mb-3
            img(src='@/assets/curso/temas/t2/tarj1-2.svg', alt='')
          .bg-white.text-center.w-fit.py-1.px-4.m-auto.mb-3
            h4.mb-0 Escuadras técnicas
          p.text-center.mb-0 Garantizan la correcta alineación de ángulos y vértices en el patrón.
      .col-lg-4.col-md-6.col-10.mb-3
        .tarj-hov2.bgi-2.tarjeta.p-4.h-100
          .ico.mb-3
            img(src='@/assets/curso/temas/t2/tarj1-3.svg', alt='')
          .bg-white.text-center.w-fit.py-1.px-4.m-auto.mb-3
            h4.mb-0 Curvas especializadas (sisa, cadera, entrepierna) 
          p.text-center.mb-0 Posibilitan trazos suaves y precisos en zonas anatómicas específicas.

    .cajon.color-secundario.bg-1.p-4.mb-4(data-aos="fade")      
      p.mb-0 Además, el uso de sistemas digitales de escalado (CAD / CAM) complementa el trabajo manual, incorporando funcionalidades avanzadas que permiten:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5(data-aos="fade-right")
        ul.lista-ul--color.lista-ul--separador.ico-lista2.fa-lista
          li 
            img(src='@/assets/curso/temas/t4/lista.svg' alt='')
            span.mb-0 Ajustar medidas con precisión milimétrica.
          li 
            img(src='@/assets/curso/temas/t4/lista.svg' alt='')
            span.mb-0 Aplicar gradaciones automáticas según tablas antropométricas.
          li 
            img(src='@/assets/curso/temas/t4/lista.svg' alt='')
            span.mb-0 Guardar versiones y trazos de forma ordenada y segura.
      .col-lg-7(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/2.png', alt='')

    .cajon.color-acento-contenido.bg-2.p-4.mb-4(data-aos="fade")      
      p.mb-0 En conjunto, una infraestructura bien organizada y equipada promueve resultados consistentes y de alta calidad en el desarrollo de tallas, tanto en entornos formativos como industriales.

    .bgi-1.p-lg-5.p-4.mb-4(data-aos="fade")   
      .tarjeta.tarjeta--blanca.p-4.p-lg-5
        .subt2.py-1.ps-3.pe-4.mb-3
          h4.mb-0 Importante:
        p.mb-0 La sigla CAD (#[em Computer-Aided Design] – Diseño Asistido por Computador), corresponde a un sistema que permite crear, modificar y optimizar diseños de patrones de forma digital y la sigla CAM (#[em Computer-Aided Manufacturing] – Manufactura Asistida por Computador), se refiere a un sistema que automatiza el proceso de fabricación a partir de los diseños realizados en CAD.

    .mb-3(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Figura 1.
        span Patronaje y escalado
      figure.px-lg-5
        img.px-lg-5(src='@/assets/curso/temas/t2/fig1.png', alt='Tela extendida junto a una hoja de patrón, acompañada por una tiza de sastre triangular, una cinta métrica y unas tijeras metálicas de costura.')


    Separador    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1  Características y organización del entorno de trabajo

    .bloque-texto-g.bloque-texto-g--inverso.bg-5.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t2/4.jpg')})`}")
      .bloque-texto-g__texto.tarjeta.p-4.py-5
        p.mb-0 El entorno de trabajo para el escalado industrial debe estar diseñado para asegurar precisión, eficiencia y ergonomía. Debe contar con una superficie plana y estable, buena iluminación, mobiliario adecuado y condiciones ambientales óptimas. La organización incluye zonas delimitadas para trazado manual y digital, disposición accesible de herramientas como reglas, escuadras y curvas, y una gestión visual que facilite el orden y la seguridad. Estas condiciones optimizan el proceso y contribuyen a la calidad técnica del producto final. 

    p.mb-4 Sus principales características y organización se describen al detalle a continuación:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/5.jpg', alt='')
      .col-lg-9(data-aos="fade-left")
        SlyderF.circl-arrow.mb-4(columnas="col-lg-4 col-md-6")
          .tarjeta.bg-2.p-4
            .row.justify-content-center.mb-3
              .col-5.col-md-8
                img(src='@/assets/curso/temas/t2/tarj2-1.png' alt='')
            .bg-color-acento-contenido.w-fit.py-1.px-2.m-auto.mb-3
              h4.text-center.mb-0 Superficie de trabajo estable y nivelada
            p.text-center.mb-0 La mesa se construye con materiales rígidos que impiden desplazamientos de los moldes y soportan la presión de herramientas de medición sin deformarse.
          .tarjeta.bg-2.p-4
            .row.justify-content-center.mb-3
              .col-5.col-md-8
                img(src='@/assets/curso/temas/t2/tarj2-2.png' alt='')
            .bg-color-acento-contenido.w-fit.py-1.px-2.m-auto.mb-3
              h4.text-center.mb-0 Ergonomía ajustable
            p.text-center.mb-0 La altura del puesto se regula según la estatura de la persona responsable mediante sistemas mecánicos o hidráulicos, favoreciendo posturas alineadas y reduciendo la fatiga muscular.
          .tarjeta.bg-2.p-4
            .row.justify-content-center.mb-3
              .col-5.col-md-8
                img(src='@/assets/curso/temas/t2/tarj2-3.png' alt='')
            .bg-color-acento-contenido.w-fit.py-1.px-2.m-auto.mb-3
              h4.text-center.mb-0 Iluminación homogénea
            p.text-center.mb-0 La fuente lumínica se dispone de modo uniforme sobre la superficie, evitando contrastes excesivos y sombras que dificulten la lectura de las dimensiones y líneas de referencia.
          .tarjeta.bg-2.p-4
            .row.justify-content-center.mb-3
              .col-5.col-md-8
                img(src='@/assets/curso/temas/t2/tarj2-4.png' alt='')
            .bg-color-acento-contenido.w-fit.py-1.px-2.m-auto.mb-3
              h4.text-center.mb-0 Orden y accesibilidad  de instrumentos
            p.text-center.mb-0 Las reglas, escuadras, curvas y plantillas se ubican en módulos etiquetados en relieve y braille, accesibles sin necesidad de desplazarse, lo que optimiza el flujo de trabajo y facilita la localización de cada recurso.

    .mb-5(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido
        h5 Tabla 2.
        span Instrumentos para escalado de patrones 
      .tabla-a.color-acento-contenido.tab-p
        table(alt="Cuadro con ocho instrumentos clasificados como manuales o digitales, acompañados por su función principal. Incluye herramientas para medición, trazado, transferencia de medidas, edición digital y producción de patrones.")
          caption Fuente: SENA, (2025)
          thead
            tr.bg-4
              th Instrumento
              th Tipo
              th Función principal
          tbody
            tr
              td Regla graduada.
              td Manual
              td Medir longitudes y marcar líneas rectas con precisión milimétrica.
            tr
              td Escuadra técnica.
              td Manual
              td Trazar y verificar ángulos rectos al escalar esquinas y alinear segmentos del patrón.
            tr
              td Curva francesa.
              td Manual
              td Dibujar contornos suaves en sisas y delinear curvas anatómicas.
            tr
              td Plantilla de pivotes.
              td Manual
              td Señalar puntos de referencia que facilitan el control y la uniformidad del crecimiento dimensional.
            tr
              td Cinta métrica de fibra textil.
              td Manual
              td Tomar medidas anatómicas y transferirlas al patrón con flexibilidad mínima.
            tr
              td #[em Software] CAD especializado.
              td Digital
              td Ejecutar escalado automático mediante coordenadas cartesianas y aplicar progresiones de talla.
            tr
              td Tableta digital para diseño.
              td Digital
              td Interactuar directamente con trazados de patrones y editar ajustes dimensionales.
            tr
              td Impresora de gran formato.
              td Digital
              td Generar copias físicas de patrones escalados para revisión y corte.

    .bgi-5.p-4.mb-5
      SlyderA.color-acento-contenido(data-aos="fade-down" tipo="b")
        .row.justify-content-center
          .col-lg-10.col-11
            h4.mb-4 Regla graduada
            .titulo-sexto.color-acento-contenido.mb-2
              h5 Figura 2.
              span Regla graduada
            figure
              img(src='@/assets/curso/temas/t2/fig2.png', alt='Dos reglas graduadas de 10 centímetros, con divisiones milimétricas uniformes; una sin borde y otra enmarcada por un contorno rectangular.')
        .row.justify-content-center
          .col-lg-10.col-11      
            h4.mb-4 Escuadra técnica
            .titulo-sexto.color-acento-contenido.mb-2
              h5 Figura 3.
              span Escuadra técnica
            figure
              img(src='@/assets/curso/temas/t2/fig3.png', alt='Escuadra triangular transparente con marcas de medición en centímetros en dos de sus lados, y abertura interior con forma triangular hueca.')
        .row.justify-content-center
          .col-lg-10.col-11 
            h4.mb-4 Curva francesa
            .titulo-sexto.color-acento-contenido.mb-2
              h5 Figura 4.
              span Curva francesa
            figure
              img(src='@/assets/curso/temas/t2/fig4.png', alt='Manos dibujando sobre papel de patronaje con lápiz y regla curva, apoyadas sobre líneas impresas. En la mesa también hay una regla recta metálica y una escuadra.')
        .row.justify-content-center
          .col-lg-10.col-11 
            h4.mb-4 Cinta métrica de fibra textil
            .titulo-sexto.color-acento-contenido.mb-2
              h5 Figura 5.
              span Cinta métrica
            figure
              img(src='@/assets/curso/temas/t2/fig5.png', alt='Cinta métrica enrollada en varias capas, con segmentos numerados visibles y líneas de medición en tramos diferenciados.')
        .row.justify-content-center
          .col-lg-10.col-11 
            h4.mb-4 Escalímetro
            .titulo-sexto.color-acento-contenido.mb-2
              h5 Figura 6.
              span Escalímetro
            figure
              img(src='@/assets/curso/temas/t2/fig6.png', alt='Regla articulada de múltiples secciones unidas por un tornillo, con marcas de medición a lo largo de cada segmento.')
            figcaption Fuente: 
              a(href="https://www.papelerialagaviota.com/pagina-del-producto/escalimetro-de-abanico" target="_blank") https://www.papelerialagaviota.com/pagina-del-producto/escalimetro-de-abanico
        .row.justify-content-center
          .col-lg-10.col-11 
            h4.mb-4 #[em Software] CAD especializado")
            .titulo-sexto.color-acento-contenido.mb-2
              h5 Figura 7.
              span #[em Software] para escalado Audaces
            figure
              img(src='@/assets/curso/temas/t2/fig7.png', alt='Interfaz digital con piezas de patronaje dispuestas sobre fondo oscuro, delimitadas por líneas curvas y rectas con medidas visibles, organizadas para su trazado o escalado.')
            figcaption Fuente: 
              a(href="https://audaces.com/es/blog/patronaje-digital" target="_blank") https://audaces.com/es/blog/patronaje-digital


    .py-3
    .subt.d-flex.align-items-end.mb-4(data-aos="fade-right")
      .subt--img
        img(src='@/assets/curso/temas/t2/subt.svg', alt='')
      .subt--text
        h3.mb-0 Condiciones de conservación y almacenamiento técnico de patrones

    .tarjeta--container.row.mb-4(data-aos="fade")
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6.col-md-8.col-lg-5
            img(src='@/assets/curso/temas/t2/tarj3-1.png', alt='')
        h3.text-center Archivado táctil de patrones y documentos
        p.mb-0 Los moldes base y los cuadros de tallas se almacenan en carpetas con señalización táctil, organizadas por tipo de prenda y secuencia de tallas, garantizando una gestión sistemática de la información.
      .col-md.tarjeta.bg-6.p-5
        .row.justify-content-center.mb-4
          .col-6.col-md-8.col-lg-5
            img(src='@/assets/curso/temas/t2/tarj3-2.png', alt='')
        h3.text-center.text-white Control ambiental
        p.text-white.mb-0 La temperatura y la humedad se mantienen constantes mediante sistemas de climatización, minimizando la expansión o contracción de los materiales y asegurando la estabilidad de las dimensiones.

    .mb-3(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Figura 8.
        span Espacio de trabajo
      figure.px-lg-5
        img.px-lg-5(src='@/assets/curso/temas/t2/fig8.png', alt='Persona en espacio de trabajo de confección, inclinada sobre una mesa marcando moldes sobre tela. Alrededor hay herramientas de costura, maniquí, máquina, textiles y tablero de notas.')

    


</template>

<script>
export default {
  name: 'Tema2',
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

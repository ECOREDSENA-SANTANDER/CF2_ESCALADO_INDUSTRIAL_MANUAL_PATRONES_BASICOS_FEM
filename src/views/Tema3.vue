<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Técnicas de escalado aplicadas a patrones básicos

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-botones.p-3.p-sm-4.p-md-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t3/1.jpg')})`}")
      .bloque-texto-g__texto.tarjeta.p-4.py-5
        p.mb-0 En los procesos de escalado industrial, las técnicas empleadas sobre los patrones básicos constituyen la columna vertebral para garantizar que cada talla derivada conserve la integridad morfológica y funcional del diseño original. Estas técnicas combinan métodos geométricos, principios antropométricos y criterios ergonómicos, e integran procedimientos manuales y digitales para optimizar la precisión y reproducibilidad. 


    Separador    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1  Proceso técnico de escalado en plano cartesiano

    img.mb-4(src='@/assets/curso/temas/t3/2.png', alt='')

    p.mb-5 El uso del plano cartesiano permite arbitrar un sistema de coordenadas que sirva de referencia para ubicar y desplazar cada punto del patrón base. En primera instancia, se establece un origen de coordenadas en un punto estratégico, por ejemplo, la intersección de la línea central posterior y la línea de cintura; a partir de él, se trazan ejes ortogonales, que corresponden a las dimensiones longitudinal y transversal de la prenda. Sobre estos ejes, se calcula el desplazamiento de cada nodo del patrón según las progresiones de talla definidas. Todo esto para reconstruir los contornos y líneas de costura uniendo con curvas suaves o trazos rectilíneos los nuevos puntos generados, de forma que el contorno resultante mantenga la continuidad y proporción del patrón original.

    .py-2
    .subt.d-flex.align-items-end.mb-4(data-aos="fade-right")
      .subt--img
        img(src='@/assets/curso/temas/t2/subt.svg', alt='')
      .subt--text
        h3.mb-0 Plano cartesiano

    .bloque-texto-g.bloque-texto-g--inverso.bg-3.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t3/3.jpg')})`}")
      .bloque-texto-g__texto.tarjeta.p-4
        p.mb-0 El plano cartesiano es un sistema de referencia bidimensional que organiza los puntos en un espacio mediante dos ejes perpendiculares: el eje horizontal, denominado #[b X], y el eje vertical, denominado #[b Y]. Cada punto se ubica a partir de un par ordenado de #[b coordenadas (X, Y)] que indica su distancia y sentido respecto al origen, punto de intersección de ambos ejes. Este sistema permite cuantificar y representar con precisión posiciones, desplazamientos y transformaciones geométricas, lo que lo convierte en una herramienta fundamental para el escalado de patrones, al facilitar el cálculo y traslado de cada vértice del molde base.

    .mb-5(data-aos="fade")
      .row.justify-content-center
        .col-lg-12
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 9.
            span Plano cartesiano
        .col-lg-7 
          figure.mb-3
            img(src='@/assets/curso/temas/t3/fig9.svg', alt='Plano cartesiano con líneas horizontales y verticales que se cruzan en el centro, marcando el punto de origen. Está dividido en cuatro cuadrantes numerados, con los ejes identificados como X y Y.')
          figcaption Fuente: 
            a(href="https://mariacolon-hatonuevo-4r.weebly.com/matemaacuteticas/el-plano-cartesiano" target="_blank") https://mariacolon-hatonuevo-4r.weebly.com/matemaacuteticas/el-plano-cartesiano

    .py-2
    .subt.d-flex.align-items-end.mb-4(data-aos="fade-right")
      .subt--img
        img(src='@/assets/curso/temas/t2/subt.svg', alt='')
      .subt--text
        h3.mb-0 Proceso de marcado en un plano cartesiano

    p.mb-4 En el #[b sistema de coordenadas cartesianas], dos rectas perpendiculares se cruzan en un punto denominado #[b origen]. La recta horizontal se llama #[b eje X] y la vertical, #[b eje Y]. Estos ejes dividen el plano en #[b cuatro regiones] conocidas como #[b cuadrantes], cuya disposición facilita la localización de puntos en el espacio bidimensional.

    .row.justify-content-center.mb-4
      .col-lg-8.mb-3.mb-lg-0(data-aos="fade-right")
        .bg-2.h-100.p-4
          ul.lista-ul--color.ico-lista2.fa-lista
            li 
              img(src='@/assets/curso/temas/t4/lista.svg' alt='')
              span.mb-0 #[b Primer cuadrante:] ubicado en la parte #[b superior derecha] respecto al origen. Aquí, ambas coordenadas (#[b X] y #[b Y]) son #[b positivas], lo que indica posiciones hacia la derecha y hacia arriba.
            li 
              img(src='@/assets/curso/temas/t4/lista.svg' alt='')
              span.mb-0 #[b Segundo cuadrante:] se encuentra en la #[b zona superior] izquierda del plano. En esta región, #[b X] es #[b negativo] y para este caso #[b Y] es #[b positivo], representando desplazamientos hacia la izquierda y hacia arriba.
            li 
              img(src='@/assets/curso/temas/t4/lista.svg' alt='')
              span.mb-0 #[b Tercer cuadrante:] corresponde a la #[b parte inferior izquierda]. En este cuadrante, tanto #[b X] como #[b Y] son #[b negativos], lo que sitúa los puntos hacia la izquierda y hacia abajo.
            li 
              img(src='@/assets/curso/temas/t4/lista.svg' alt='')
              span.mb-0 #[b Cuarto cuadrante:] ubicado en la #[b parte inferior derecha]. Aquí, #[b X] es #[b positivo] y por ende #[b Y] es #[b negativo], reflejando desplazamientos hacia la derecha y hacia abajo.
      .col-lg-4.col-md-9(data-aos="fade-left")
        .bgi-4
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 10.
            span Ejes en coordenadas
          figure.mb-3
            img(src='@/assets/curso/temas/t3/fig10.svg', alt='Plano cartesiano con líneas perpendiculares que representan los ejes X y Y, señalados como abscisa y ordenada, respectivamente. El punto de intersección marca el origen del sistema.')
          figcaption Fuente: 
            a(href=" https://www.significados.com/plano-cartesiano/" target="_blank") https://www.significados.com/plano-cartesiano/
      

    .bg-1.mb-4(data-aos="fade")
      .row.align-items-center
        .col-lg-5.col-md-9
          img(src='@/assets/curso/temas/t3/4.png', alt='')
        .col-lg-7
          .p-4
            p La orientación de los ejes y la división del plano en cuadrantes permite ubicar con precisión cualquier punto mediante un par ordenado #[b (X, Y)]. Esta estructura es fundamental para aplicar transformaciones geométricas, como el escalado de patrones, ya que proporciona un marco de referencia uniforme y replicable para el trazado y manipulación de vértices, líneas y figuras en el diseño técnico.
            p El punto cero, también denominado origen, se sitúa en la intersección del #[b eje X (horizontal)] y del #[b eje Y (vertical)], marcando las #[b coordenadas (0, 0)]. Para iniciar el trabajo sobre el plano cartesiano a partir de este punto, se siguen estos pasos:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8(data-aos="fade-right")
        ul.lista-ul--color.lista-ul--separador.ico-lista2.fa-lista
          li 
            img(src='@/assets/curso/temas/t4/lista.svg' alt='')
            span.mb-0 #[b Localización del origen:] es el punto donde convergen ambas líneas centrales.
          li 
            img(src='@/assets/curso/temas/t4/lista.svg' alt='')
            span.mb-0 #[b Definición de sentidos positivos:] sobre el eje X se considera positivo el recorrido de izquierda a derecha; sobre el eje Y, el de abajo hacia arriba.
          li 
            img(src='@/assets/curso/temas/t4/lista.svg' alt='')
            span.mb-0 #[b Referencia de las unidades:] a partir del origen, cada marca sobre el eje X y el eje Y representa una unidad de longitud; estas graduaciones permiten medir desplazamientos horizontales y verticales.
          li 
            img(src='@/assets/curso/temas/t4/lista.svg' alt='')
            span.mb-0 #[b Establecimiento de coordenadas iniciales:] para cualquier punto, la primera componente (X) se mide a lo largo del eje X desde el origen, y la segunda (Y) a lo largo del eje Y. Así, empezar en (0, 0) garantiza un punto de partida común y fiable para todos los cálculos y trazados posteriores.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/5.png', alt='')

    .mb-5(data-aos="fade")
      .row.justify-content-center
        .col-lg-12
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 11.
            span Origen o punto 0
        .col-lg-6.col-md-9
          figure.mb-3
            img(src='@/assets/curso/temas/t3/fig11.svg', alt='Plano cartesiano con numeración positiva y negativa sobre los ejes X y Y. El punto de intersección está señalado como origen o punto cero mediante una flecha descriptiva.')
          figcaption Fuente: 
            a(href="https://www.significados.com/plano-cartesiano/" target="_blank") https://www.significados.com/plano-cartesiano/

    .row.justify-content-center.mb-5
      .col-lg-8
        .bg-1.tarjeta.p-4
          .row.justify-content-center.align-items-center
            .col-lg-7.col-md-9.mb-4.mb-lg-0
              img(src='@/assets/curso/temas/t3/6.svg', alt='')
            .col-lg-5
              .subt2.py-1.ps-3.pe-4.mb-3
                h4.mb-0 Ejemplo de aplicación
              p.mb-1 Cuadrante I, punto (2, 3).
              p.mb-1 Cuadrante II, punto (-3, 1).
              p.mb-1 Cuadrante III, punto (-3, -1). 
              p.mb-1 Cuadrante IV, punto (3, -2).              
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t3/7.png', alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 12.
          span Ejemplo de aplicación paso 1
        figure.mb-3
          img(src='@/assets/curso/temas/t3/fig12.svg', alt='Plano cartesiano con fondo cuadriculado, dividido en cuatro cuadrantes numerados con cifras romanas. Incluye cuatro puntos con coordenadas señaladas mediante líneas punteadas desde los ejes, ubicados en distintas posiciones del plano.')
        figcaption Fuente: 
          a(href=" https://www.significados.com/plano-cartesiano/" target="_blank") https://www.significados.com/plano-cartesiano/
      .col-lg-6(data-aos="fade-left")
        p En el plano cartesiano presentado en la figura 12, cada par ordenado (X, Y) se ubica según la distancia y el sentido desde el origen (0, 0) a lo largo de los ejes:
        .tarjeta.bg-4.p-4
          p El punto (2, 3) se sitúa en el primer cuadrante, donde ambos valores son positivos; su desplazamiento parte de dos unidades a la derecha sobre el eje X y tres unidades hacia arriba sobre el eje Y.
          p El punto (-3, 1) corresponde al segundo cuadrante, caracterizado por valores negativos en X y positivos en Y; su posición se obtiene desplazándose tres unidades a la izquierda y una unidad hacia arriba desde el origen.
          p El punto (-3, -1) se localiza en el tercer cuadrante, con ambas coordenadas negativas; se desplaza tres unidades a la izquierda y una unidad hacia abajo partiendo del origen.
          p.mb-0 El punto (3, -2) pertenece al cuarto cuadrante, donde X es positivo e Y es negativo; su trazado inicia con tres unidades a la derecha y continúa con dos unidades hacia abajo desde el origen.

    p.mb-4 Cada uno de estos puntos se marca trazando líneas paralelas a los ejes: primero horizontalmente hasta alcanzar la coordenada X, luego verticalmente hasta la coordenada Y, o viceversa, asegurando así la exactitud en la ubicación de los vértices. 

    .mb-5(data-aos="fade")
      .row.justify-content-center
        .col-lg-12
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 13.
            span Ejemplo de aplicación paso 2
        .col-lg-7.col-md-10
          figure.mb-3
            img(src='@/assets/curso/temas/t3/fig13.svg', alt='Se presenta un plano cartesiano en el que el punto de origen del trazo es P(-4, -3), ubicado en el tercer cuadrante, y el punto final es P(3, 4), situado en el primer cuadrante. Ambos están unidos por un segmento de recta que representa la conexión entre sus coordenadas. ')
          figcaption Fuente: 
            a(href=" https://www.significados.com/plano-cartesiano/" target="_blank") https://www.significados.com/plano-cartesiano/

    p.mb-4 Explicación de la figura 13.

    TabsA.color-acento-contenido.mb-4(data-aos="fade-down")
      .tarjeta.bgi-3.p-4(titulo="Ubicación de los puntos")
        ol.lista-ol.fa-lista
          li
            span a. 
            span.mb-0 El punto P₁ (-4, -3) se marca partiendo del origen: cuatro unidades a la izquierda sobre el eje X y tres unidades hacia abajo sobre el eje Y. 
          li
            span b. 
            span.mb-0 El punto P₂ (3, 4) se localiza con tres unidades a la derecha y cuatro unidades hacia arriba desde el origen. 
      .tarjeta.bgi-3.p-4(titulo="Trazado del segmento")
        ol.lista-ol.fa-lista
          li
            span a. 
            span.mb-0 Se une P₁ con P₂ mediante una línea recta, que representa el vector de desplazamiento entre ambas posiciones. 
      .tarjeta.bgi-3.p-4(titulo="Cálculo de la pendiente (m)")
        ol.lista-ol.fa-lista
          li
            span a. 
            span.mb-0 Se calcula la diferencia horizontal: ΔX = 3 - (-4) = 7. 
          li
            span b. 
            span.mb-0 Se calcula la diferencia vertical: ΔY = 4 - (-3) = 7.   
          li
            span c. 
            span.mb-0 La pendiente es la relación ΔY/ΔX = 7/7 = 1. Esto significa que por cada unidad que avanza en X, sube una unidad en Y, lo cual indica un ángulo de 45° respecto al eje X.  
      .tarjeta.bgi-3.p-4(titulo="Ecuación de la recta")
        ol.lista-ol.fa-lista
          li
            span a. 
            span.mb-0 A partir del punto P₁ y la pendiente m = 1, se usa la forma punto - pendiente: #[br]
              span.mb-0 #[b Y – (Y₁) = M * (X - X₁)] #[br]
              span.mb-0 Y - (-3) = 1 * (X - (-4))
          li
            span b. 
            span.mb-0 Simplificando, queda: #[br]
              span.mb-0 Y + 3 = X + 4 #[br]
              span.mb-0 Y = X + 1

    .bgi-1.p-lg-5.p-4.mb-4(data-aos="fade")   
      .tarjeta.tarjeta--blanca.p-4.p-lg-5
        .subt2.py-1.ps-3.pe-4.mb-3
          h4.mb-0 Importante:
        p ΔX representa la variación en la componente horizontal entre dos puntos en el plano cartesiano. Se calcula restando la coordenada X del punto de partida de la coordenada X del punto de llegada, de modo que ΔX = X₂ -X₁, y refleja el desplazamiento sobre el eje X.
        p.mb-0 ΔY representa la variación en la componente vertical entre dos puntos en el plano cartesiano. Se calcula restando la coordenada Y del punto de partida de la coordenada Y del punto de llegada, de modo que ΔY = Y₂ - Y₁, y refleja el desplazamiento sobre el eje Y.

    .bloque-texto-g.bloque-texto-g--inverso.bg-5.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t3/8.jpg')})`}")
      .bloque-texto-g__texto.tarjeta.p-4.py-5.d-flex.flex-column
        p De este modo, la recta que conecta P₁ y P₂ se expresa como Y = X + 1, fórmula que permite proyectar cualquier punto intermedio o prolongar la dirección del vector, conservando la proporción 1:1 entre los ejes.
        p.mb-0 El plano cartesiano constituye una herramienta fundamental para el escalado de patrones básicos al ofrecer un sistema de referencia bidimensional, que facilita la localización y transformación exacta de cada vértice del molde original. Al asignar a cada punto #[b coordenadas (X, Y)] respecto a un origen común, se logra cuantificar con precisión los desplazamientos horizontales y verticales necesarios para generar nuevas tallas, garantizando que las proporciones anatómicas permanezcan inalteradas.
    
    .cajon.color-secundario.bg-1.p-4.mb-4      
      p.mb-0 Asimismo, este sistema permite aplicar progresiones de talla de forma metódica y reproducible; al trabajar sobre ejes ortogonales, las variaciones dimensionales se proyectan de manera uniforme y se evita la acumulación de errores en contornos complejos. En entornos digitales, el uso del plano cartesiano facilita la integración con programas de diseño asistido, donde las operaciones de escalado se realizan mediante coordenadas, acelerando el proceso técnico y reduciendo la dependencia de mediciones manuales. De este modo, el plano cartesiano no solo aporta rigor geométrico, sino que también optimiza la eficiencia y la consistencia en el desarrollo de series multitalle.

    .tarjeta.color-secundario.p-3
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/t3/video.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1.text-white Introducción y contextualización - escalado
              p.mb-0 Para ampliar y profundizar en los contenidos abordados, se recomienda consultar el siguiente enlace:
            .col-sm-auto
              a.boton.text-white(:href="('https://www.youtube.com/watch?v=q62l2sbPAaE&t=101s&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA')" target="_blank")
                span Ir al sitio
                i.fas.fa-circle-play


    Separador    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2  Identificación y función de los puntos de aplome

    p.mb-4 La identificación de los puntos de aplome se basa en la ubicación precisa de referencias anatómicas y el trazado de líneas ortogonales, que actúan como ejes guía para el crecimiento proporcional y la verificación dimensional del patrón. Este procedimiento permite asegurar la correcta disposición y simetría del molde. El proceso se desarrolla de la siguiente manera: 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8(data-aos="fade-right")
        ul.lista-ul--color.lista-ul--separador.ico-lista2.fa-lista
          li 
            img(src='@/assets/curso/temas/t4/lista.svg' alt='')
            span.mb-0 #[b Determinación de la línea de cintura:] se localiza el contorno de la cintura en el patrón y se identifica su punto medio, que servirá como base para trazar el eje vertical de aplome.
          li 
            img(src='@/assets/curso/temas/t4/lista.svg' alt='')
            span.mb-0 #[b Trazado del eje vertical:] desde el punto medio de cintura, se proyecta una línea perpendicular hacia el borde inferior del patrón. Esta línea representa el eje de largo y funciona como referencia central para el alineamiento del molde.
          li 
            img(src='@/assets/curso/temas/t4/lista.svg' alt='')
            span.mb-0 #[b Ubicación del pivote principal:] se identifica la línea central posterior, marcando la intersección entre la línea de cintura y el eje vertical previamente trazado. Este cruce se denomina #[b pivote principal], punto clave para estructurar el patrón.
          li 
            img(src='@/assets/curso/temas/t4/lista.svg' alt='')
            span.mb-0 #[b Trazado del eje horizontal:] con ayuda de una escuadra técnica, se traza una línea perpendicular al eje vertical desde el pivote principal. Esta línea constituye el eje de ancho, garantizando la perpendicularidad y la exactitud geométrica del molde.
          li 
            img(src='@/assets/curso/temas/t4/lista.svg' alt='')
            span.mb-0 #[b Marcación de puntos secundarios:] sobre los ejes definidos, se localizan puntos de referencia en zonas anatómicas clave, como la cadera media, la sisa y el hombro. Para asegurar la uniformidad en el escalado de tallas, se emplean plantillas de pivote.
          li 
            img(src='@/assets/curso/temas/t4/lista.svg' alt='')
            span.mb-0 #[b Verificación de simetría:] se replican estos pasos en el lado opuesto del patrón y se comprueba la correspondencia de los puntos mediante contacto táctil o marcaciones en relieve, garantizando la simetría y el equilibrio del diseño.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/9.png', alt='')

    .bgi-1.p-lg-5.p-4.mb-5(data-aos="fade")   
      .tarjeta.tarjeta--blanca.p-4.p-lg-5
        .subt2.py-1.ps-3.pe-4.mb-3
          h4.mb-0 Importante:
        p.mb-0 En patronaje, las líneas #[b ortogonales] son esenciales porque permiten construir patrones con exactitud y simetría, ya que forman estructuras perpendiculares (90°). Este término es el adecuado cuando se habla de ejes guía, aplome y trazado técnico.

    p.mb-4 Las principales funciones de los puntos de aplome son:

    .row.mb-4(data-aos="fade-down")
      .col-md-6.col-lg-cinco.mb-4.mb-lg-0
        .tarjeta-numerada.color-primario.h-100.p-4.pb-4
          .tarjeta-numerada__numero
            .h2 A
          h5.text-center.px-3 Servir como pivotes de crecimiento
          p.text-center.mb-0 Permiten establecer el origen de los desplazamientos dimensionales al proyectar las progresiones de talla, de modo que cada incremento o reducción parta de un punto fijo y evite distorsiones.
      .col-md-6.col-lg-cinco.mb-4.mb-lg-0
        .tarjeta-numerada.color-secundario.h-100.p-4.pb-4
          .tarjeta-numerada__numero
            .h2 B
          h5.text-center.px-3 Mantener la simetría del patrón
          p.text-center.mb-0 Facilitan la verificación de que los incrementos aplicados en ambos lados del molde sean idénticos, soportando el equilibrio geométrico entre piezas opuestas.
      .col-md-6.col-lg-cinco.mb-4.mb-lg-0
        .tarjeta-numerada.color-acento-botones.h-100.p-4.pb-4
          .tarjeta-numerada__numero
            .h2 C
          h5.text-center.px-3 Asegurar la orientación correcta del hilo
          p.text-center.mb-0 Guían la alineación de la dirección de tejido o de la trama de la tela, de manera que la prenda resultante respete las propiedades mecánicas y viceversa.
      .col-md-6.col-lg-cinco.mb-4.mb-lg-0
        .tarjeta-numerada.color-acento-contenido.h-100.p-4.pb-4
          .tarjeta-numerada__numero
            .h2 D
          h5.text-center.px-3 Comprobar la congruencia entre áreas adyacentes
          p.text-center.mb-0 Permiten contrastar que las modificaciones en una zona del patrón no generen desajustes en contornos colindantes, como sisa, costados o línea de cintura.
      .col-md-6.col-lg-cinco.mb-4.mb-lg-0
        .tarjeta-numerada.color-adicional-1.h-100.p-4.pb-4
          .tarjeta-numerada__numero
            .h2.text-white E
          h5.text-center.px-3 Facilitar la ubicación en el proceso de corte
          p.text-center.mb-0 Actúan como referencias táctiles o visuales para posicionar correctamente el molde sobre el tejido, optimizando el aprovechamiento de material y reduciendo errores de alineación.


    Separador    
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3 Aplicación de técnicas específicas para escalado en prendas superiores e inferiores
    
    p.mb-5 La implementación de técnicas de escalado en prendas superiores e inferiores requiere adaptar los incrementos de talla a las particularidades morfológicas y funcionales de cada tipo de vestuario. A continuación, se exponen las fases y consideraciones principales:

    .py-2
    .subt.d-flex.align-items-end.mb-4(data-aos="fade-right")
      .subt--img
        img(src='@/assets/curso/temas/t2/subt.svg', alt='')
      .subt--text
        h3.mb-0 Prendas superiores

    .bloque-texto-g.bloque-texto-g--inverso.bg-5.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t3/11.jpg')})`}")
      .bloque-texto-g__texto.tarjeta.p-4
        ul.lista-ul--color.ico-lista2.fa-lista.mb-0
          li 
            img(src='@/assets/curso/temas/t4/lista.svg' alt='')
            span.mb-0 #[b Identificación de pivotes clave:] se ubican puntos de referencia en hombro, busto y sisa, que servirán como ejes de proyección del crecimiento o reducción.
          li 
            img(src='@/assets/curso/temas/t4/lista.svg' alt='')
            span.mb-0 #[b Distribución de progresiones en contornos:] a partir de las medidas de tórax y busto, se calculan los incrementos de cada talla y se reparten de forma equilibrada entre costados y centro delantero, asegurando la comodidad en el movimiento de brazos.
          li 
            img(src='@/assets/curso/temas/t4/lista.svg' alt='')
            span.mb-0 #[b Adaptación de la línea de sisa:] se modifica el contorno de sisa según la progresión aritmética o geométrica, preservando el rango de flexión y abducción del brazo.
          li 
            img(src='@/assets/curso/temas/t4/lista.svg' alt='')
            span.mb-0 #[b Ajuste de la inclinación de hombro:] se corrige el ángulo del hombro en cada talla para mantener la caída natural de la prenda sobre la fisonomía, evitando tiranteces o exceso de holgura.
          li.mb-0 
            img(src='@/assets/curso/temas/t4/lista.svg' alt='')
            span.mb-0 #[b Verificación de alineación de hombros y costuras:] se comprueba táctilmente la correspondencia entre hombros delantero y trasero, garantizando la simetría y la integridad estructural.

    .py-2
    .subt.d-flex.align-items-end.mb-4(data-aos="fade-right")
      .subt--img
        img(src='@/assets/curso/temas/t2/subt.svg', alt='')
      .subt--text
        h3.mb-0 Prendas inferiores

    .bloque-texto-g.texto-g-70.bg-5.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t3/12.jpg')})`}")
      .bloque-texto-g__texto.tarjeta.p-4
        ul.lista-ul--color.ico-lista2.fa-lista.mb-0
          li 
            img(src='@/assets/curso/temas/t4/lista.svg' alt='')
            span.mb-0 #[b Definición de pivotes en cadera y tiro:] se señalan puntos en la cadera media y en la intersección de contorno de cintura con línea central posterior, que guiarán la proyección vertical y horizontal.
          li 
            img(src='@/assets/curso/temas/t4/lista.svg' alt='')
            span.mb-0 #[b Cálculo y reparto de incrementos de cadera:] se determinan los valores de ampliación o reducción y se aplican de manera uniforme en contornos delantero y trasero, respetando la ergonomía al sentarse.
          li 
            img(src='@/assets/curso/temas/t4/lista.svg' alt='')
            span.mb-0 #[b Ajuste de altura de tiro:] se modifica la distancia entre la cintura y la entrepierna según la progresión de talla, para conservar la proporción y la comodidad al flexionar las piernas.
          li 
            img(src='@/assets/curso/temas/t4/lista.svg' alt='')
            span.mb-0 #[b Distribución de progresiones en pernera:] se reparte el crecimiento en el ancho de muslo, rodilla y tobillo, de manera que la prenda se adapte a diferentes biotipos, sin restringir el movimiento.
          li.mb-0
            img(src='@/assets/curso/temas/t4/lista.svg' alt='')
            span.mb-0 #[b Confirmación de continuidad de costuras:] se revisa la transición entre piezas (como costura interna y externa de pierna) para asegurar que no existan desalineaciones o tensiones irregulares.

      

</template>

<script>
export default {
  name: 'Tema3',
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

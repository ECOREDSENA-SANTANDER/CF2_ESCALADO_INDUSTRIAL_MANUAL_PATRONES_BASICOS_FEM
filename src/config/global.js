export default {
  global: {
    Name: 'Principios de escalado y disposición de los patrones básicos',
    Description:
      'El componente “Principios de escalado y disposición de los patrones básicos” aborda conceptos, métodos y técnicas del escalado, incluyendo trazado en plano cartesiano, puntos de aplome y uso de herramientas. Además, enseña la disposición, señalización y verificación de moldes para garantizar su precisión y calidad en la producción industrial de prendas superiores e inferiores.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos del escalado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto y objetivos del escalado',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Principios técnicos del escalado en prendas de vestir',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Tipos de escalado: proporcional, combinado y diferencial',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Entorno y herramientas de escalado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Características y organización del entorno de trabajo',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Técnicas de escalado aplicadas a patrones básicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Proceso técnico de escalado en plano cartesiano',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Identificación y función de los puntos de aplome',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Identificación y función de los puntos de aplome',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Disposición técnica de patrones',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Fundamentos del escalado ',
      referencia:
        'Vélez Sánchez, M., García Vasco, M. E., Hincapié Echeverry, L. A. (1995). Patronaje y escalado línea femenina. Servicio Nacional de Aprendizaje (SENA). ',
      tipo: 'Artículo',
      link:
        'https://www.academia.edu/111186988/Patronaje_y_escalado_l%C3%ADnea_femenina',
    },
  ],
  glosario: [
    {
      termino: 'Antropometría',
      significado:
        'disciplina que estudia y aplica las mediciones del cuerpo humano para definir proporciones y elaborar cuadros de tallas en el diseño de prendas.',
    },
    {
      termino: 'Anatomía',
      significado:
        'ciencia que describe la estructura y disposición de los órganos y sistemas corporales, base para la confección y ajuste de patrones.',
    },
    {
      termino: 'Biomecánica',
      significado:
        'estudio de las fuerzas y movimientos del cuerpo humano, utilizado para garantizar la funcionalidad y confort de las prendas en movimiento.',
    },
    {
      termino: 'Cuadro de tallas',
      significado:
        'matriz organizada de medidas estandarizadas que clasifica las diferentes tallas de una prenda según progresiones y deducciones específicas.',
    },
    {
      termino: 'Curva de crecimiento',
      significado:
        'serie de valores que describe la progresión aritmética o geométrica aplicada a las medidas base para generar distintas tallas.',
    },
    {
      termino: 'Deducción de medidas',
      significado:
        'operación técnica que reduce las dimensiones de un patrón base para producir tallas menores dentro de un cuadro de tallas.',
    },
    {
      termino: 'Disposición espacial',
      significado:
        'organización lógica y ergonómica de los patrones escalados sobre la mesa o en un entorno CAD para optimizar el flujo de trabajo.',
    },
    {
      termino: 'Ejes del plano cartesiano',
      significado:
        'rectas perpendiculares X (horizontal) y Y (vertical) que sirven de referencia para ubicar y transformar puntos de un patrón.',
    },
    {
      termino: 'Entorno de trabajo',
      significado:
        'condiciones físicas, ambientales y ergonómicas del espacio donde se realiza el escalado, incluyendo iluminación y disposición de herramientas.',
    },
    {
      termino: 'Ergonomía',
      significado:
        'disciplina que adapta el diseño de productos y espacios a las características y necesidades del cuerpo humano para mejorar confort y seguridad.',
    },
    {
      termino: 'Escalado combinado',
      significado:
        'método que aplica incrementos variables en distintas zonas de un patrón según requerimientos anatómicos o de diseño específicos.',
    },
    {
      termino: 'Escalado diferencial',
      significado:
        'técnica que modifica puntualmente áreas concretas de un patrón, independientemente de las proporciones generales, para atender necesidades especiales.',
    },
    {
      termino: 'Escalado proporcional',
      significado:
        'procedimiento que incrementa o reduce todas las dimensiones de un patrón de forma uniforme y constante entre tallas consecutivas.',
    },
    {
      termino: 'Puntos de aplome',
      significado:
        'marcas estratégicas en el patrón que actúan como pivotes para proyectar los desplazamientos dimensionales durante el escalado.',
    },
    {
      termino: 'Progresión de tallas',
      significado:
        'secuencia de ampliaciones o reducciones expuestas en un cuadro de tallas, calculadas según métodos aritméticos o geométricos.',
    },
  ],
  referencias: [
    {
      referencia:
        "Aldrich, W. (2015). Metric pattern cutting for women's wear (6<sup>th</sup> ed.). Bloomsbury Publishing.",
    },
    {
      referencia:
        "Cooklin, G. (2008). Pattern grading for women's clothes: The technology of sizing. OM Books",
    },
    {
      referencia:
        "Handford, J. (2001). Professional pattern grading for women's, men's, and children's apparel. TechStyle Publishing.",
    },
    {
      referencia:
        'Joseph-Amstrong, H. (2014). Patternmaking for fashion design (5<sup>th</sup> ed.). Pearson Education.',
    },
    {
      referencia:
        'Mallet, K. K., & Zamkoff, B. (2002). Grading techniques for fashion design. Fairchild Books.',
    },
    {
      referencia:
        "Muller & Sohn. (2020). Grading for women's and children's clothing. Verlag Müller & Sohn.",
    },
    {
      referencia:
        'Inexmoda. (2023). Informe sectorial del sistema moda: industria textil y confección en Colombia. Observatorio de Moda Inexmoda.',
    },
    {
      referencia:
        'Muñoz, A. (2019). Manual de patronaje industrial para hombre: Trazado y escalado. Editorial Textil.',
    },
    {
      referencia:
        'Price, J., & Zamkoff, B. (2002). Concepts of pattern grading: Techniques for manual and computer grading. Fairchild Books.',
    },
    {
      referencia:
        'Rodríguez, L. (2020). Patronaje industrial de prendas de vestir: Estudios y aplicaciones. Editorial Bogotá.',
    },
    {
      referencia:
        'Sevi Heidi. (2024). Ultimate guide to grading garments for production. Successful Fashion Designer.',
    },
    {
      referencia: "Studio Faro. (2022). Grading women's patterns. Studio Faro.",
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Angélica Castro Salazar ',
          cargo: 'Experta temática ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}

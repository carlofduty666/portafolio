const data = {
  "personalInfo": {
    "name": "Carlos Longa",
    "title": "Desarrollador Web Full Stack",
    "description": "Transformo necesidades en soluciones digitales efectivas. Código limpio, arquitectura escalable y atención al detalle."
  },
  "technologies": [
    "JavaScript",
    "Python",
    "PHP",
    "Dart",
    "Node.js",
    "Flutter",
    "Flask",
    "Django",
    "Laravel",
    "React",
    "Angular",
    "Tailwind",
    "SQL",
    "MongoDB",
    "PostgreSQL",
    "Git"
  ],
  "socialMedia": {
    "github": "https://github.com/carlofduty666",
    "linkedin": "https://www.linkedin.com/in/carlos-longa-0a419b336/",
    "facebook": "",
    "instagram": "https://instagram.com/cyber_tsvet",
    "whatsapp": "https://wa.me/584248020169",
    "telegram": "",
    "threads": "",
    "x": "",
    "pinterest": "",
    "tumblr": ""
  },
  "projects": [
    {
      "id": 1,
      "title": "Pizzeria Triangolari",
      "description": "Una aplicación web comercial con sistema de pedidos en línea",
      "image": "https://via.placeholder.com/400x300/0ea5e9/ffffff?text=Proyecto+1",
      "link": "https://carlofduty666.github.io/proyectopizzeria/",
      "tags": ["CSS puro", "HTML puro", "Responsive Design", "SEO Friendly"],
      "challenge": "Diseñar una interfaz atractiva y funcional sin frameworks, garantizando alta velocidad de carga y compatibilidad SEO.",
      "solution": "Se implementó una arquitectura basada en HTML5 semántico y CSS3 con Flexbox/Grid, optimizando assets para rendimiento.",
      "technologies": ["HTML5", "CSS3", "JavaScript Vanilla"],
      "result": "Sitio web con puntuación 95+ en Lighthouse y experiencia de usuario fluida en móviles."
    },
    {
      "id": 2,
      "title": "Bot Pokemon de Discord",
      "description": "Bot interactivo multilenguaje de Pokemon desarrollado con PokeDex-api",
      "image": "https://via.placeholder.com/400x300/06b6d4/ffffff?text=Proyecto+2",
      "link": "https://botdiscord-wuvc.onrender.com/",
      "tags": ["JavaScript", "NodeJS", "API"],
      "challenge": "Gestionar múltiples solicitudes concurrentes y ofrecer respuestas rápidas consultando una API externa.",
      "solution": "Uso de Node.js para manejo asíncrono y caché local para reducir llamadas a la API de PokeAPI.",
      "technologies": ["Node.js", "Discord.js", "PokeAPI", "Axios"],
      "result": "Bot activo en más de 50 servidores con tiempo de respuesta promedio menor a 200ms."
    },
    {
      "id": 3,
      "title": "SmartBoletin",
      "description": "Sistema integral de gestión académica diseñado para automatizar la generación de reportes y boletines. Permite transformar plantillas de Excel preexistentes en motores de inyección de datos dinámicos, eliminando la creación manual de documentos.",
      "image": "https://via.placeholder.com/400x300/0284c7/ffffff?text=SmartBoletin",
      "link": "https://smartboletin-demo.onrender.com/",
      "tags": ["Python", "Flask", "SQLAlchemy", "Excel-Automation"],
      "challenge": "Eliminar el cuello de botella administrativo donde una sola persona procesaba manualmente miles de calificaciones, y evitar la tediosa tarea de programar desde cero el diseño de reportes institucionales complejos en Excel.",
      "solution": "Desarrollé una arquitectura de roles (Admin/Profesor) que descentraliza la carga de datos. Implementé un motor con OpenPyXL capaz de importar archivos Excel, clonar sus estilos y formatos originales, y utilizarlos como plantillas maestras para la inyección automática de calificaciones mediante rangos dinámicos.",
      "result": "Se redujo el tiempo de generación de reportes finales de días a segundos. La institución logra mantener sus formatos estéticos originales sin intervención de un programador, garantizando integridad de datos y autonomía para el personal docente."
    },
    {
      "id": 4,
      "title": "Generador de Memes",
      "description": "Aplicación recreativa para crear memes de gatos",
      "image": "https://via.placeholder.com/400x300/0284c7/ffffff?text=Proyecto+3",
      "link": "https://carlofduty666.github.io/Generador-de-Memes/",
      "tags": ["HTML", "CSS", "Javascript", "API"],
      "challenge": "Crear una interfaz intuitiva para generar memes permitiendo cargar imágenes, añadir texto personalizado y exportar el resultado final.",
      "solution": "Implementé Canvas API para manipular imágenes en tiempo real, permitiendo posicionar texto, cambiar estilos de fuente y aplicar filtros básicos sin necesidad de librerías externas.",
      "technologies": ["HTML", "CSS", "Canvas", "Javascript"],
      "result": "Aplicación funcional con capacidad de crear y descargar memes personalizados en formato PNG, interfaz responsive y experiencia de usuario fluida."
    }

  ]
};

module.exports = data;

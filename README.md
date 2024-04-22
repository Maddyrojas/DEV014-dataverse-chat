# Dataverse Chat

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Funcionalidades](#3-funcionalidades)
* [4. Consideraciones técnicas](#4-consideraciones-técnicas)
* [5. Definición del producto](#5-definición-del-producto)
* [6. Objetivos de aprendizaje](#6-objetivos-de-aprendizaje)
* [7. Agradecimiento](#7-agradecimiento)

***

## 1. Preámbulo
¿Qué tal si pudiéramos conversar con un guía que te invite a conocer los mejores lugares de Costa Rica? Hoy en dia la inteligencia artificial nos brinda un mundo de posibilidades, con el acceso de informacion inmediata y veraz de lugares que nunca hemos visitado y nos encantaria conocer con tan solo enviar una pregunta. Es por esta razon que hemos creado la SPA: [Pura Vida Tours](https://puravida-tours.netlify.app/).

  ![vista Principal 1](https://raw.githubusercontent.com/PemRug/DEV014-dataverse-chat/main/imgs/vistaPrincipal.png)
  ![vista Principal 2](https://raw.githubusercontent.com/PemRug/DEV014-dataverse-chat/main/imgs/vistaPrincipal2.png)

## 2. Resumen del proyecto
Es una [Single Page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application), que le permite al usuario visualizar, filtrar y ordenar una data de lugares turisticos de Costa Rica desde la vista de "Home". Tambien tiene vista de más detalles de cada tour y vita para poder chatear con Guias turísticos que te invitan a disfrutar de cada tour, adicional se encuentra un chat grupal donde todos los tours son los que chatean con el usuario a traves de [API de OpenAI](https://openai.com/product).

### Los objetivos generales de este proyecto son los siguientes

* Desarrollar una [Single Page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)
* Aplicar los conceptos de responsividad en el desarrollo de las vistas
* Implementar un router para la navegación entre las diferentes vistas de la aplicación
* Integrar una API externa
* Entender la asincronía en JavaScript
* Crear una suite de pruebas unitarias que permitan testear código asíncrono


## 3. Funcionalidades

La Single Page Application (SPA) permite, además de **visualizar la data, filtrarla, ordenarla y calcular alguna estadística**, permite acceder a una página de detalle de cada tour e interactuar a traves de un chat individual y grupal con OpenAI.

Funcionalidades mínimas que debe tener:

* La aplicación debe ser _responsive_
* La aplicación debe ser una SPA con múltiples vistas:
  - Implementar un sistema de enrutamiento que permita la navegación dentro de la aplicación.
  - Cada vista de la aplicación debe ser cargada dinámicamente mediante JavaScript.
  - Asegurarse de que la URL se actualice de manera acorde a la vista cargada al igual que el title del documento (la pestaña del navegador).
  - La aplicación debe ser capaz de cargar la vista correspondiente a la URL actual al iniciar la aplicación.
* La aplicación debe mantener las funcionalidades de Dataverse: visualizar, filtrar, ordenar y calcular estadística de la data.
* Al hacer clic en una tarjeta de personaje/entidad, la aplicación debe redirigirse a una vista **con su propia URL** que muestre la información detallada sobre ese personaje/entidad en particular
* La aplicación debe permitir a la usuaria configurar la API Key para interactuar con la API de Open AI
* Usando la API de Open AI, la aplicación debe permitir al usuario interactuar con un personaje/entidad a través de un chat.
  

![Individual Chat](https://raw.githubusercontent.com/PemRug/DEV014-dataverse-chat/main/imgs/IndividualChat.png)

* La aplicación debe  permitir al usuario interactuar de manera simultánea con **todos** los personajes/entidades a través de un chat:
  - Esta funcionalidad debe cargarse en la URL `/panel`
  - La usuaria puede ingresar su pregunta o mensaje para todos los personajes/entidades en un cuadro de texto y enviarlo con un botón
  - El mensaje de la usuaria debe ser ajustado para cada personaje/entidad, con el objetivo que este genere una respuesta basada en su personalidad y conocimiento
  - Las respuestas de todos los personajes se muestran de acuerdo al orden respuesta.
  - Indicar visualmente cuando uno o varios personajes/entidades esten generando una respuesta al mensaje enviado
* La aplicación debe informar a la usuaria los errores que puedan surgir al interactuar con la API, como por ejemplo alcanzar la cuota de tokens por minuto o cualquier otro error relacionado con la API. Debería proporcionarse una descripción clara de la causa del problema y posibles soluciones.

![Group Chat](https://raw.githubusercontent.com/PemRug/DEV014-dataverse-chat/main/imgs/GrupalChat.png)

### Funcionalidades en Home:
#### Zona de Ordenar y filtrar
Este espacio permite dar control al usuario sobre los datos que quieren visualizar podran filtar por provincias de Costa Rica y ordenar por orden alfabetico y por costo promedio, ademas podran resetar las busquedas a traves del botón limpiar.

![imageVizualizarPorcentajes](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image1.png)

#### Tambien se encuenta la Zona de 'Compute Stats'
 - Nos indica cual es el % porcentaje de lugares turísticos por provincia con determinado tipo de turismo como: playa, aventura y cultural.

![imageVizualizarPorcentajes](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image3.png)

#### Beneficios:

`Información completa:` Accede a toda la información relevante para tomar decisiones informadas sobre tu viaje.

`Fácil de usar:` Interfaz intuitiva y amigable para que encuentres lo que necesitas rápidamente.

`Personalizable:` Filtra y compara lugares según tus preferencias para encontrar tu experiencia ideal.

`Planificación eficiente:` Ahorra tiempo y dinero al tener una mejor idea de lo que te espera en tu viaje.

#### Pura Vida Tour es la herramienta perfecta para:

`Viajeros primerizos:` Que buscan información completa y organizada para planificar su viaje a Costa Rica.

`Turistas experimentados:` Que desean explorar nuevos lugares y comparar diferentes opciones.

`Cualquier persona que desee:` Tomar decisiones informadas sobre su viaje a Costa Rica.


## 4. Consideraciones técnicas

El _boilerplate_ tiene la siguiente estructura de archivos:

```text
.
├── src
|  ├── assets
|  |  ├── chats.css
|  |  ├── computeZone.css
|  |  ├── description.css
|  |  ├── filterZone.css
|  |  ├── footer.css
|  |  ├── header.css
|  |  ├── renderItem.css
|  |  └── style.css
|  ├── components
|  |  ├── footer.js
|  |  ├── groupchating.js
|  |  ├── header.js
|  |  ├── mainDescription.js
|  |  ├── mainHome.js
|  |  ├── mainTours.js
|  |  └── nav.js
|  ├── data
|  |  └── dataset.js
|  ├── images
|  ├── lib
|  |  ├── apiKey.js
|  |  ├── dataFunctions.js
|  |  └── openAIApi.js
|  ├── views
|  |  ├── GroupChat.js
|  |  ├── Home.js
|  |  ├── IndividualChat.js
|  |  └── TourLayaout.js
|  ├── index.html
|  ├── index.js
|  └── router.js
├── test
|  ├── apiKey.spec.js
|  ├── dataFunctions.spec.js
|  └── openAIApi.spec.js
├── README.md
└── package.json

```


## 5. Definición del producto

### Historias de usuaria
Se realizaron 5 historia de usuario que podrán ser visualizadas en estre link: https://www.notion.so/Que-quieren-los-turistas-al-vistar-Costa-Rica-ec371c3b51934df1b9d930a19bcd1b0a?pvs=4

![imageHusuario](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image28.png)

### Diseño de la Interfaz de Usuaria
Se han creado vistas para mobile, tablet y desktop.
Se ha utilizado un diseño responsive para que la aplicación se adapte a diferentes dispositivos.

### Despliegue:
La aplicación se ha desplegado en Netlify.
https://puravida-tours.netlify.app/

### Prototipo de Alta Fidelidad

En Dataverse, nos preocupamos por la experiencia de nuestros usuarios. Por eso, hemos diseñado un prototipo intuitivo y fácil de usar para nuestro nuevo producto.
Visita nuestro prototipo: https://www.figma.com/file/lSXlrTfCcIirOGRveTxuk6/Costa-Rica-te-enamora?type=design&node-id=0%3A1&mode=design&t=0UHfhUdKZJfTRe9Y-1

Header
![imageheader](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image6.png)
Body
![imagebody](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image21.png)
![imagestats](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image26.png)
Footer
![imagefooter](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image16.png)

### Testeos de usabilidad
#### Problemas detectados en pruebas de usabilidad:
Los usuarios nos han contado:
 
 - "¡Demasiada información en las tarjetas! Me costaba encontrar lo que buscaba."
 
 - "No pude usar la página en mi celular. La información se veía muy pequeña y los botones no responden."
 
 - "Los porcentajes no funcionaban bien. Cuando limpio, no se reinicia la información."
 
 - "Encontré algunos botones que no hacían nada. Parece que la página aún está en desarrollo."

#### Solucionamos:
estos problemas para que tu experiencia en Pura Vida Tour sea optima.
 
 - Más sencilla: Información clara y concisa en las tarjetas.
 
 - Adaptable: Diseño responsive para una experiencia óptima en cualquier dispositivo.
 
 - Funcional: Filtros y botones que funcionan correctamente.

 - Completa: Página web con todas las funcionalidades disponibles.

### Tecnologías:

  * Front-end: JavaScript, HTML, CSS, Jest.

  * Back-end: Node.js.

  * Librerías: Chart.js (opcional).

### Herramientas:

  * Git, GitHub, GitHub Pages, Chat-gpt, Gemini, OHs Laboratoria, Figma, Trello, Notion.
* [Jest](https://jestjs.io/)
* [Vercel](https://vercel.com/)
* [Netlify](https://www.netlify.com/)

## 6. Objetivos de aprendizaje


Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

### HTML

- [x] **Uso de HTML semántico**

  <details><summary>Links</summary><p>

  * [HTML semántico](https://curriculum.laboratoria.la/es/topics/html/html5/semantic-html)
  * [Semantics - MDN Web Docs Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
</p></details>

### CSS

- [x] **Uso de selectores de CSS**

  <details><summary>Links</summary><p>

  * [Intro a CSS](https://curriculum.laboratoria.la/es/topics/css/css/intro-css)
  * [CSS Selectors - MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors)
</p></details>

- [x] **Modelo de caja (box model): borde, margen, padding**

  <details><summary>Links</summary><p>

  * [Box Model & Display](https://curriculum.laboratoria.la/es/topics/css/css/boxmodel-and-display)
  * [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  * [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  * [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  * [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
</p></details>

- [x] **Uso de flexbox en CSS**

  <details><summary>Links</summary><p>

  * [A Complete Guide to Flexbox - CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  * [Flexbox Froggy](https://flexboxfroggy.com/#es)
  * [Flexbox - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
</p></details>

- [x] **Uso de CSS Grid Layout**

  <details><summary>Links</summary><p>

  * [A Complete Guide to Grid - CSS Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)
  * [Grids - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids)
</p></details>

### Web APIs

- [x] **Uso de selectores del DOM**

  <details><summary>Links</summary><p>

  * [Manipulación del DOM](https://curriculum.laboratoria.la/es/topics/browser/dom/1-dom-methods-selection)
  * [Introducción al DOM - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Localizando elementos DOM usando selectores - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
</p></details>

- [x] **Manejo de eventos del DOM (listeners, propagación, delegación)**

  <details><summary>Links</summary><p>

  * [Introducción a eventos - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events)
  * [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)
  * [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/removeEventListener)
  * [El objeto Event](https://developer.mozilla.org/es/docs/Web/API/Event)
</p></details>

- [x] **Manipulación dinámica del DOM**

  <details><summary>Links</summary><p>

  * [Introducción al DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Node.appendChild() - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/appendChild)
  * [Document.createElement() - MDN](https://developer.mozilla.org/es/docs/Web/API/Document/createElement)
  * [Document.createTextNode()](https://developer.mozilla.org/es/docs/Web/API/Document/createTextNode)
  * [Element.innerHTML - MDN](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML)
  * [Node.textContent - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/textContent)
</p></details>

- [x] **Ruteado (History API, evento hashchange, window.location)**

  <details><summary>Links</summary><p>

  * [Manipulando el historial del navegador - MDN](https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador)
</p></details>

- [x] **Browser storage (localStorage, sessionStorage)**

  <details><summary>Links</summary><p>

  * [Window.localStorage - MDN](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
</p></details>

- [x] **Fetch API**

  <details><summary>Links</summary><p>

  * [Fetch API - MDN](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
</p></details>

### JavaScript

- [x] **Callbacks**

  <details><summary>Links</summary><p>

  * [Función Callback - MDN](https://developer.mozilla.org/es/docs/Glossary/Callback_function)
</p></details>

- [x] **Promesas**

  <details><summary>Links</summary><p>

  * [Promise - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  * [How to Write a JavaScript Promise - freecodecamp (en inglés)](https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/)
</p></details>

- [x] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

- [x] **Variables (declaración, asignación, ámbito)**

  <details><summary>Links</summary><p>

  * [Valores, tipos de datos y operadores](https://curriculum.laboratoria.la/es/topics/javascript/basics/values-variables-and-types)
  * [Variables](https://curriculum.laboratoria.la/es/topics/javascript/basics/variables)
</p></details>

- [x] **Funciones (params, args, return)**

  <details><summary>Links</summary><p>

  * [Funciones (control de flujo)](https://curriculum.laboratoria.la/es/topics/javascript/flow-control/functions)
  * [Funciones clásicas](https://curriculum.laboratoria.la/es/topics/javascript/functions/classic)
  * [Arrow Functions](https://curriculum.laboratoria.la/es/topics/javascript/functions/arrow)
  * [Funciones — bloques de código reutilizables - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions)
</p></details>

- [x] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

  <details><summary>Links</summary><p>

  * [Estructuras condicionales y repetitivas](https://curriculum.laboratoria.la/es/topics/javascript/flow-control/conditionals-and-loops)
  * [Tomando decisiones en tu código — condicionales - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals)
</p></details>

- [x] **Diferenciar entre tipos de datos primitivos y no primitivos**

- [x] **Arrays (arreglos)**

  <details><summary>Links</summary><p>

  * [Arreglos](https://curriculum.laboratoria.la/es/topics/javascript/arrays)
  * [Array - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/)
  * [Array.prototype.sort() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
  * [Array.prototype.forEach() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  * [Array.prototype.map() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  * [Array.prototype.filter() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  * [Array.prototype.reduce() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
</p></details>

- [x] **Objetos (key, value)**

  <details><summary>Links</summary><p>

  * [Objetos en JavaScript](https://curriculum.laboratoria.la/es/topics/javascript/objects/objects)
</p></details>

- [x] **Diferenciar entre expresiones (expressions) y sentencias (statements)**

- [x] **Uso de bucles/ciclos (while, for, for..of)**

  <details><summary>Links</summary><p>

  * [Bucles (Loops)](https://curriculum.laboratoria.la/es/topics/javascript/flow-control/loops)
  * [Bucles e iteración - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)
</p></details>

- [x] **Módulos de ECMAScript (ES Modules)**

  <details><summary>Links</summary><p>

  * [import - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import)
  * [export - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export)
</p></details>

- [x] **Pruebas unitarias (unit tests)**

  <details><summary>Links</summary><p>

  * [Empezando con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/getting-started)
</p></details>

- [x] **Pruebas asíncronas**

  <details><summary>Links</summary><p>

  * [Tests de código asincrónico con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/asynchronous)
</p></details>

- [x] **Uso de mocks y espías**

  <details><summary>Links</summary><p>

  * [Manual Mocks con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/manual-mocks)
</p></details>

### HTTP

- [x] **Cabeceras (headers)**

  <details><summary>Links</summary><p>

  * [HTTP headers - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Headers)
</p></details>

- [x] **Consulta o petición (request) y respuesta (response).**

  <details><summary>Links</summary><p>

  * [Generalidades del protocolo HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Overview)
  * [Mensajes HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Messages)
</p></details>

- [x] **Códigos de status de HTTP**

  <details><summary>Links</summary><p>

  * [Códigos de estado de respuesta HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Status)
  * [The Complete Guide to Status Codes for Meaningful ReST APIs - dev.to](https://dev.to/khaosdoctor/the-complete-guide-to-status-codes-for-meaningful-rest-apis-1-5c5)
</p></details>

### AI Prompting

- [x] **Priming Chatbots**

  <details><summary>Links</summary><p>

  * [Priming Chatbots | Learn Prompting: Your Guide to Communicating with AI](https://learnprompting.org/es/docs/basics/priming_prompt)
</p></details>

- [x] **OpenAI API**

  <details><summary>Links</summary><p>

  * [Introduction - API Reference - OpenAI API](https://platform.openai.com/docs/introduction)
  * [Authentication - API Reference - OpenAI API](https://platform.openai.com/docs/api-reference/authentication)
  * [Making requests - API Reference - OpenAI API](https://platform.openai.com/docs/api-reference/making-requests)
  * [The chat completion object - API Reference - OpenAI API](https://platform.openai.com/docs/api-reference/chat/object)
</p></details>

### Control de Versiones (Git y GitHub)

- [x] **Git: Instalación y configuración**

- [x] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [x] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**

- [x] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [x] **GitHub: Despliegue con GitHub Pages**

  <details><summary>Links</summary><p>

  * [Sitio oficial de GitHub Pages](https://pages.github.com/)
</p></details>

- [x] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

### Centrado en el usuario

- [x] **Diseñar y desarrollar un producto o servicio poniendo a las usuarias en el centro**

### Diseño de producto

- [x] **Crear prototipos de alta fidelidad que incluyan interacciones**

- [x] **Seguir los principios básicos de diseño visual**

### Investigación

- [x] **Planear y ejecutar testeos de usabilidad de prototipos en distintos niveles de fidelidad**

  <details><summary>Links</summary><p>

  * [Intro a testeos usabilidad](https://coda.io/@bootcamp-laboratoria/contenido-ux/test-de-usabilidad-15)
  * [Pruebas con Usuarios 1 — ¿Qué, cuándo y para qué testeamos?](https://eugeniacasabona.medium.com/pruebas-con-usuarios-1-qu%C3%A9-cu%C3%A1ndo-y-para-qu%C3%A9-testeamos-7c3a89b4b5e7)
</p></details>

## 7. Agradecimiento
  A Laboratoria por el reto.

  A la comunidad de GitHub por su apoyo.

  Al equipo de trabajo.
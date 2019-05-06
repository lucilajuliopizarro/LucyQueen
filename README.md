# LucyQueen
nuevo repositorio para utilizar angular
Burger Queen
Preámbulo

Nos acaban de enviar un correo con una solicitud para un nuevo proyecto. Hay un restaurante que nos ha contactado porque quieren que alguien les construya una interfaz donde puedan tomar pedidos usando una tablet.

burger-queen

Como punto de partida, nos comparten el siguiente correo recibido del cliente:

    Somos Burguer Queen, una cadena de comida rápida 24hrs.

    Nuestra propuesta de servicio 24hrs ha tenido muy buena acogida, y para expandirnos necesitamos un sistema que nos ayude a tomar los pedidos de los clientes.

    Tenemos 2 menús: uno para el desayuno, que es bien sencillo:
    Item 	Precio
    Cafe americano 	500
    Cafe con leche 	700
    Sandwich de jamón y queso 	1000
    Jugo natural 	700

    Y un menú para el resto del dia:
    Hamburguesas 	Acompañamientos ($500) 	Bebidas
    Simple 	$1500 	Papas fritas 		500ml 	750ml
    Doble 	$2500/td> 	Onion Rings 	Agua 	$500 	$800
    			Gaseosa 	$700 	$1000

    Los clientes pueden escoger entre hamburguesas de res, de pollo, o vegetariana. Y por $500 pueden agregarle queso o huevo.

    Nuestros clientes son bastante indecisos, por lo que es muy común que cambien el pedido varias veces antes de finalizarlo.

Introducción

Partiendo de los requerimientos de negocio detallados en el correo del cliente, nos piden construir una interfaz que permita a lxs cajerxs tomar los pedidos en una tablet, y desde ahí se puedan enviar a cocina a través de un backend del que nos darán detalles más adelante.

El primer paso de este proyecto debe ser convertir el menú descrito por el cliente en una estructura que podamos poner en un archivo JSON para después pintar en la pantalla.

Nuestra interfaz debe mostrar los dos menús (desayuno y resto del día), cada uno con todos sus productos. El usuario debe poder ir eligiendo que productos agregar y la interfaz debe ir mostrando el resumen del pedido con el total.

out
Objetivos

El objetivo principal de aprendizaje de este proyecto es construir una interfaz web usando el framework elegido (React, Vue o Angular). Todos estos frameworks de front-end atacan el mismo problema: cómo mantener la interfaz y el estado sincronizados. Así que esta experiencia espera familiarizarse con el concepto de estado de pantalla, y cómo cada cambio sobre el estado se va a ir reflejando en la interfaz (por ejemplo, cada vez que agregamos un producto a un pedido, la interfaz debe actualizar la lista del pedido y el total).

Como objetivo secundario, la implementación debe además seguir las recomendaciones para PWAs (Progressive Web Apps), lo cual incluye conceptos como offline. Para guiarte con respecto a este tema te recomendamos usar Lighthouse, que es una herramienta de Google que nos ayuda a asegurar que nuestras web apps sigan buenas prácticas. De hecho, usaremos Lighthouse a la hora de evaluar el proyecto.

Finalmente, la interfaz debe estar diseñada específicamente para correr en tablets.

Tópicos: react, angular, vue, pwa, offline-first, service-worker.
Consideraciones generales

Este proyecto se debe "resolver" de forma individual.

La lógica del proyecto debe estar implementada completamente en JavaScript (ES6+), HTML y CSS y empaquetada de manera automatizada. En este proyecto SI está permitido usar librerías o frameworks (debes elegir entre React o Angular).

La aplicación debe ser un Single Page App. Los pedidos los tomaremos desde una tablet, pero no queremos una app nativa, sino una web app que sea responsive y pueda funcionar offline. También necesitamos botones grandes para escoger los productos, y el estado actual del pedido siempre visible para poder confirmar con el cliente.

La aplicación desplegada debe tener 80% o más el las puntuaciones de Performance, Progressive Web App, Accessibility y Best Practices de Lighthouse.

La aplicación debe hacer uso de npm-scripts y contar con scripts start, test, build y deploy, que se encarguen de arrancar, correr las pruebas, empaquetar y desplegar la aplicación respectivamente.

Los tests unitarios deben cubrir un mínimo del 70% de statements, functions, lines y branches.

Este proyecto incluye un boilerplate con el código necesario para arrancar con la parte de backend ya resuelta. El boilerplate incluye los siguientes archivos/carpetas con la configuración de Fierbase (hosting, firestore y functions):

./04-burger-queen/
├── firebase.json
├── firestore.indexes.json
├── firestore.rules
├── functions
│   ├── index.js
│   ├── package.json
└── README.md

Por otro lado, la parte de la interfaz no está incluida, por lo cual, deberás de definir la estructura de carpetas y archivos que consideres necesaria, puedes guiarte de las convenciones del framework elegido. Por ende, los tests y el setup necesario para ejecutarlos serán realizados por ti.

Para comenzar este proyecto tendrás que hacer un fork y clonar este repositorio.
Criterios de aceptación del proyecto
Definición del producto

El product owner del proyecto ha conversado con el cliente y luego de una reunión con el project manager han logrado crear el siguiente backlog:
[Historia de usuario] Mesero/a debe poder tomar orden de una persona

Yo como mesero o mesara debería poder tomar la orden de un cliente para saber fácilmente cuanto cobrar y que la cocina tenga las órdenes de manera inmediata y según cuando van llegando.
Definición de terminado

    Anotar nombre de cliente
    Agregar productos al pedido
    Eliminar productos
    Ver resumen y el total de la compra
    Enviar pedido a cocina (guardar en alguna base de datos)
    Se ve y funciona bien en una tablet

Criterios de aceptación

    Debes haber recibido code review de al menos una compañera
    Hiciste tests de usabilidad e incorporaste el feedback del mesero o mesera
    Haces test unitarios y has testeado tu producto por tu cuenta
    Desplegaste tu aplicación y has etiquetado tu versión desplegada (git tag)

[Historia de usuario] Jefe de cocina debe poder ver ordenes

Yo como cocinero o cocinera debería poder ver las órdenes de los clientes y marcar cuales están listas para saber qué se debe cocinar y avisar al mesero que una orden está lista.
Definición de terminado

    Ver los pedidos ordenados según van llegando
    Marcar los pedidos que se han terminado
    Ver el tiempo que tomó el pedido

Criterios de aceptación

    Debes haber recibido code review de al menos una compañera
    Hiciste tests de usabilidad e incorporaste el feedback del cocinero o cocinera
    Haces test unitarios y has testeado tu producto por tu cuenta
    Desplegaste tu aplicación y has etiquetado tu versión desplegada (git tag)

[Historia de usuario] Mesero/a debe poder ver órdenes listas para servir para entregarlas a los clientes

Yo como mesero o mesera debería poder ver las órdenes que han sido cocinadas y están listas para servir a los clientes, para así entregarlas y que el cliente se vaya feliz con su comida.
Definición de terminado

    Ver listado de órdenes terminadas
    Marcar pedidos que han sido entregados

Criterios de aceptación

    Los datos se deben mantener íntegros, incluso después de que un pedido ha terminado. Todo esto para tener estadísticas de lo que ha hecho Burger queen
    Debes haber recibido code review de al menos una compañera
    Hiciste tests de usabilidad e incorporaste el feedback del mesero o mesera
    Haces test unitarios y has testeado tu producto por tu cuenta
    Desplegaste tu aplicación y has etiquetado tu versión desplegada (git tag)

Primeros pasos

    Haz un fork de este repo (en GitHub).

    Clona tu fork en tu computadora:

    git clone git@github.com:<tu-usuario-de-github>/<cohortid>-burger-queen.git
    cd <cohortid>-burger-queen

    Crea una rama a partir de master para empezar a trabajar. Por ejemplo:

    git checkout -b develop

    Crear proyecto en Firebase

    Habilitar Firestore (comenzar en modo bloqueado) en sección de "Bases de Datos" de Firebase console.

    Instalar utilidad de línea de comando de Firebase:

    npm i -g firebase-tools

    Agregamos entorno de producción para desplegar:

    firebase use --add

    Instalar dependencias de cloud functions:

    # usando yarn
    cd functions && yarn && cd ..
    # alternativamente, usando npm
    cd functions && npm install && cd ..

    Desplegar:

    firebase deploy

    Llegado a este punto ya puedes comenzar con el front-end wink

Nota para estudiantes que elijan React y quieran usar create-react-app:

Si tratas de usar create-react-app en el directorio del proyecto recibirás un error diciendo que hay archivos que podrían presentar un conflicto. Para evitar este problema puedes crear una nueva app usando create-react-app y de ahí mezclarla con la carpeta del proyecto:

# si estabase en la carpeta del proyecto, salimos a la carpeta de más arriba
cd ..

create-react-app burger-queen-tmp
cp -r burger-queen/* burger-queen-tmp/
cp -r burger-queen-tmp/.gitignore burger-queen-tmp/* burger-queen/
rm -rf burger-queen-tmp
cd burger-queen

Pistas / Tips
Frameworks / libraries

    React
    Angular

Herramientas

    npm-scripts
    Babel
    webpack

PWA

    Tu primera Progressive Web App - Google developers
    Progressive Web Apps - codigofacilito.com
    offlinefirst.org
    Usando Service Workers - MDN
    Cómo habilitar datos sin conexión - Firebase Docs

Serverless

    Qué es eso de serverless? - @PamRucinque en Medium
    Qué es Serverless? | FooBar - YouTube
    Firebase
    Serverless Architectures - Martin Fowler

Cloud functions

    Cloud functions - Firebase Docs

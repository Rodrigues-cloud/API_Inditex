# API_Inditex
Proceso de selección de Inditex, código de resolución del ejercicio.

# Sobre o ejercicio
Para algunas unidades de propuesta de distribución determinadas, el sistema debe gestionar el stock de almacén, acudiendo a diferentes zonas para “buscar” las unidades que se necesitan, siguiendo el orden predeterminado para priorizar los pedidos de las tiendas online.

# Tecnologías utilizadas
## Back end
- JavaScript
- Express
- Nodemon
- Insomnia / Postman
## Banco de datos  
- PostgreSql

## Cómo ejecutar el proyecto 
- después de clonar el proyecto, en github.
- Inicie sesión en VSCode y ejecute el comando npm init para generar los archivos package.json y node_modules.
- Ejecute el comando npm start en la terminal.

## 2. Describe cómo implementarías esta solución si tuvieras que acabar mostrando el resultado en un sistema low code.
-a Consideraciones de rendimiento.
-b Requisitos que necesitarías del API.

- a: En un sistema de low code, es crucial optimizar el rendimiento y la eficiencia, especialmente cuando se trata de grandes volúmenes de datos como un JSON de 20 GB. Algunas técnicas para mejorar el rendimiento incluyen:
Procesamiento por lotes: divida el archivo en lotes más pequeños para su procesamiento en paralelo. Por ejemplo, dividir el archivo en varios archivos de menos de 1 GB y procesarlos en paralelo.
Lectura en streaming: en lugar de cargar el archivo completo en la memoria, lea el archivo en un flujo, procesándolo línea por línea o en fragmentos más pequeños. Esto reducirá el consumo de memoria.
Índices y almacenamiento en caché: utilice índices para acelerar las operaciones de búsqueda y almacenamiento en caché para almacenar temporalmente los resultados a los que se accede con frecuencia.

- b: Para procesar de manera eficiente grandes volúmenes de datos, la API debe admitir:
Operaciones de filtrado y búsqueda: capacidad de filtrar y buscar datos según criterios específicos para reducir el volumen de datos procesados.
Operaciones de agregación: funcionalidades para agregar datos, como suma, promedio y recuento, para proporcionar información resumida.
Procesamiento paralelo: soporte para procesamiento paralelo para distribuir la carga de trabajo entre múltiples núcleos o servidores.

## 3. Si el json real del prerepato ocupase 20Gb, explica si el problema de forma distitna y por qué.
- Trabajar con un JSON de 20 GB presenta desafíos importantes debido al volumen de datos y los recursos de memoria limitados. Un enfoque eficaz sería utilizar técnicas de procesamiento de datos en streaming y algoritmos de búsqueda optimizados para extraer información relevante del archivo sin sobrecargar la memoria.
Técnicas de procesamiento de streaming:
El procesamiento de streaming le permite leer y procesar archivos grandes de forma incremental, sin tener que cargar el archivo completo en la memoria. Esto es crucial para manejar archivos grandes como un JSON de 20 GB.

## 4. Si tuvieras que de forma visual presentar en una pantalla desde que partes de un almacen se rellena un pedido, que propuesta de visualizacion plantearías teniendo en cuenta que se quiere implementar con una herramienta low code.

- Para visualizar visualmente qué partes del almacén se completan en un pedido utilizando una herramienta de low code, un enfoque eficaz sería utilizar componentes gráficos interactivos que representen el almacén y las existencias disponibles.
Diagrama de flujo interactivo: utilice un diagrama de flujo interactivo donde cada nodo representa una zona de stock (ZAR, MSR, SILO). Al seleccionar un pedido, se resaltan las áreas relevantes del almacén y se muestra la cantidad de stock a mover de cada zona.
Mapa interactivo del almacén: cree un mapa interactivo del almacén donde se puede hacer clic en cada área y muestra detalles del stock disponible y las acciones necesarias para cumplir con el pedido.
Ejemplo de implementación en una herramienta low code:
Usar componentes gráficos como "Cards" o "Tiles" para representar cada zona de stock.
Al hacer clic en un componente, muestra una ventana emergente o modal con detalles del stock disponible y las acciones necesarias para cumplir con el pedido.



# Autor
Uesley Rodrigues da Silva
- Desarrollador Full Stack NodeJS y ReactJS

## LinkedIn
https://www.linkedin.com/in/uesley-rodrigues-da-silva-261aab190/



  

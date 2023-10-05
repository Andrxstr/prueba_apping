# Prueba Técnica Desarrollador Frontend Apping

Esta es una prueba tecnica para desarrollador Frontend con extraccion de datos de una API e implementacion de Vue Router.

## Requisitos

- Consumir API.
- Mostrar listado de Usuarios.
- Permitir ver los detalles del usuario.
- Utilizar el enrutador Vue Router.
- Pagina de detalles de usuario.
- Agregar spinner para carga de datos.
- Estructuracion del codigo de manera modular y buenas practicas de ES6.
- Aplicar estilos CSS utilizando SASS/SCSS.
- Implementación de estados con Pinia.

## Puntos Adicionales

- Implementar paginación para la lista de usuarios.
- Agregar campo de busqueda (filtro), por nombre o correo.
- Implementar manejo de errores en situacion donde la API no este disponible

### Clona el Repositorio

```bash
https://github.com/Andrxstr/prueba_apping.git
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Acceder a la aplicacion por medio del navegador

Abrir el navegador y acceder a http://localhost:PUERTO, donde el Puerto por defecto suele ser el 8080.

### Estrutura del Proyecto

- src/: Contiene los archivos fuente de la aplicacion
  -assets/: Contiene las imagenes utilizadas en el proyecto
  -components/: Contiene cada uno de los componentes utilizados en la aplicacion
  -router/: Contiene el direccionamiento del proyecto
  -store/: Manejo de estados con Pinia
  -views/: Contiene las vistas utilizadas en el proyecto
  -App.vue: Contiene el template principal e invoca los demas componentes
  -main.js: importa el App.vue y monta la aplicacion
  -README.md: Este contiene detalles del proyecto
  -vue.config.js: Contiene la configuracion del proyecto con Vue CLI

### IMPORTANTE

Es importante que se tenga en la maquina instalado vue y vue CLI para no tener ningun error a la hora de instalar las dependencias o para ejecutar el aplicativo

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

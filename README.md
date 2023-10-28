# Rick y Morty App
La Rick y Morty App es una aplicación web construida con HTML, CSS, React, Redux y TypeScript que te permite explorar un listado de personajes de la famosa serie "Rick y Morty". La aplicación también incluye un campo de búsqueda en tiempo real para encontrar personajes específicos.

## Características
- Carga y muestra personajes de la serie "Rick y Morty" desde la API (https://rickandmortyapi.com/).
- Filtra los personajes en tiempo real a medida que escribes en el campo de búsqueda.
- Muestra imágenes y detalles de los personajes en una retícula atractiva.
- Interfaz de usuario amigable y diseño responsive.

## Demo
Puedes probar aplicación de Rick y Morty App visitando la página de la aplicación [aquí](https://rick-y-morty-app-img27.netlify.app/).

## Uso
1. Abre la aplicación en tu navegador web.
2. Utiliza el campo de búsqueda para encontrar personajes específicos escribiendo sus nombres en tiempo real.
3. Explora el listado de personajes y descubre sus imágenes, nombres, si están vivos o no, su raza y el planeta en el que residen.

## Captura de pantalla
![Screenshot](https://imaginario27.com/wp-content/uploads/2023/10/aplicacion-rick-y-morty-captura-pantalla.jpg)

## Contacto
Si tienes alguna pregunta, sugerencia o simplemente quieres ponerte en contacto, no dudes en escribir a designer@imaginario27.com. 

## Documentación 
### Tecnologías utilizadas
- **HTML**: Lenguaje de marcado para la estructura de la página web.
- **CSS**: Lenguaje de estilos para el diseño de la aplicación.
- **React**: Biblioteca de JavaScript para construir la interfaz de usuario.
- **Redux**: Biblioteca de gestión de estado para manejar los datos de la aplicación.
- **TypeScript**: Superset de JavaScript que proporciona tipado estático para una mejor robustez y desarrollo.

### Estructura de la aplicación 
SRC:
- App.css
- App.tsx
- main.tsx
- vite-env.d.ts
- app/
  - store.ts
- assets/
  - img/
    - rick-and-morty.png
    - rick-and-morty.svg
- components/
  - Header.tsx
- features/
  - characters/
    - Character.tsx
    - CharactersGrid.tsx
    - CharactersSearch.tsx
    - charactersSlice.ts

#### /src
- **App.css**: Archivo de hoja de estilos para la aplicación.
- **App.tsx**: Archivo principal de la aplicación.
- **main.tsx**: Punto de entrada principal de la aplicación.
- **vite-env.d.ts**: Archivo de definición de tipos para Vite (un entorno de desarrollo).

#### /app
- **store.ts**: Este archivo contiene el almacenamiento global de los estados de la aplicación de Redux.

#### /assets
  - **img**: Este subdirectorio contiene imágenes utilizadas en la aplicación.
    - **rick-and-morty.png**: Imagen "Rick and Morty" en formato PNG.
    - **rick-and-morty.svg**: Imagen "Rick and Morty" en formato SVG.

#### /components
Los componentes reutilizables de la aplicación se organizan en este directorio.

- **Header.tsx**: Componente que representa el encabezado de la aplicación.

#### /features
Los directorios dentro de "features" contiene los módulos o características específicas de la aplicación.

- **Character.tsx**: Componente que define la estructura del personaje.
- **CharactersGrid.tsx**: Componente que crea la cuadrícula de personajes.
- **CharactersSearch.tsx**: Componente que permite buscar personajes.
- **charactersSlice.ts**: Archivo relacionado con la gestión del estado de los personajes y la carga de los datos de API.
   
### Implementación Local
Para implementar y ejecutar la aplicación "La Rick y Morty App" en tu entorno local, sigue estos pasos:

#### Requisitos Previos
Asegúrate de tener instalado Node.js en tu sistema. Si no lo tienes, puedes descargarlo desde [el sitio oficial de Node.js](https://nodejs.org/).

#### Pasos de Implementación
1. **Clona el repositorio**
Abre una terminal y clona el repositorio de la aplicación desde GitHub:

```bash
git clone https://github.com/Imaginario27/la-rick-y-morty-app.git
```
   
2. **Navega al directorio del proyecto**
Accede al directorio de la aplicación:

```bash
cd la-rick-y-morty-app
```

3. **Instala las dependencias**
Ejecuta el siguiente comando para instalar todas las dependencias del proyecto:

```bash
npm install
```
   
4. **Inicia el servidor de desarrollo**
Utiliza el siguiente comando para iniciar el servidor de desarrollo proporcionado por Vite:

```bash
npm run dev
```

Esto ejecutará la aplicación en un servidor local y mostrará la URL en la que puedes acceder a ella desde tu navegador.

5. **Explora la aplicación**

Esta es una aplicación basada en Create React App. Te permite explorar la informaciòn de usuarios utilizando Redux, navegación y componentes funcionales.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes elementos en tu entorno de desarrollo:

- [Node.js](https://nodejs.org) (versión 12 o superior)
- [npm](https://www.npmjs.com/) (normalmente se instala junto con Node.js)

## Instalación

Sigue estos pasos para configurar el proyecto localmente:

1. Clona este repositorio en tu máquina local.

   ```bash
   git clone https://github.com/joalcapa/table.git
   ```

2. Navega hasta el directorio del proyecto.

   ```bash
   cd table
   ```

3. Instala las dependencias del proyecto.

   ```bash
   npm install
   ```

## Configuración

Antes de ejecutar la aplicación, necesitarás agregar un archivo `env.js` en la carpeta `config` con el siguiente contenido:

```javascript
export const ENV = 'local';

export const API = {
    local: "https://randomuser.me/api", 
};

export const ENDPOINTS = {
    local: {
        users: {
            get: {
                url: "?results=100",
                method: "get",
            },
        },
    },
};
```

Asegúrate de que los valores de las URLs en el archivo `env.js` se ajusten a tus necesidades.

## Uso

Para ejecutar la aplicación en tu entorno de desarrollo local, utiliza el siguiente comando:

```bash
npm start
```

Esto iniciará el servidor de desarrollo y podrás acceder a la aplicación en tu navegador web, preferiblemente en Google Chrome.

## Recomendaciones adicionales

Es importante mencionar que aunque Create React App ya no se recomienda como herramienta inicial para proyectos React, se sugiere considerar alternativas como Next.js, Gatsby u otras opciones, ya que ofrecen beneficios adicionales para aplicaciones más complejas.

Sin embargo, he decidido utilizar Create React App en este caso particular para demostrar mis habilidades con Redux, navegación y componentes funcionales.

## Mejoras

- Estilos de componentes nativos como input, button y ajuste de contenido en el table
- Si se decide aumentar la cantidad de registros (usuarios) a mostrar, se debe implementar un sistema de paginaciòn
- Sistema de autenticaciòn (cabeceras de autenticaciòn en el middleware apiCall)
- Protecciòn de rutas
# CASTE SPA - Sitio Web Oficial

Este es el repositorio oficial del sitio web de CASTE SPA, una empresa tecnológica chilena especializada en automatización, integración y análisis de datos.

## Características

- 🌟 Diseño moderno y minimalista inspirado en Apple/Tesla
- 📱 Completamente responsive (móvil y escritorio)
- 🔄 Animaciones fluidas con Framer Motion
- ⚡ Desarrollado con Next.js y Tailwind CSS
- 🚀 Alto rendimiento y optimización SEO

## Configuración de Desarrollo

### Prerequisitos

- Node.js (v14 o superior)
- npm o yarn

### Instalación

1. Clonar el repositorio
```bash
git clone <url-del-repositorio>
cd castespa-website
```

2. Instalar dependencias
```bash
npm install
# o
yarn install
```

3. Iniciar el servidor de desarrollo
```bash
npm run dev
# o
yarn dev
```

El sitio estará disponible en `http://localhost:3000`

## Estructura del Proyecto

```
├── public/             # Archivos estáticos (imágenes, favicons, etc.)
├── src/
│   ├── app/            # Estructura de Next.js App Router
│   ├── components/     # Componentes React reutilizables
│   └── styles/         # Archivos CSS globales
├── package.json        # Dependencias y scripts
└── README.md           # Documentación
```

## Modificar Contenido

Para modificar el contenido del sitio, puedes editar los siguientes archivos:

- `src/components/Hero.tsx` - Sección principal
- `src/components/WhatWeDo.tsx` - Sección de servicios
- `src/components/RealCases.tsx` - Casos de estudio
- `src/components/HowWeWork.tsx` - Metodología
- `src/components/Contact.tsx` - Información de contacto

## Imágenes

Las imágenes utilizadas en el sitio se encuentran en la carpeta `public/images/`. Para reemplazar cualquier imagen, simplemente coloque una nueva imagen con el mismo nombre en esta carpeta.

## Despliegue

El sitio está configurado para ser desplegado en Vercel. Simplemente conecte su repositorio a Vercel para un despliegue automático.

## Contacto

Para cualquier consulta sobre este proyecto, contactar a:
- Felipe Carrasco - felipe.carrasco@inversionescaste.cl 
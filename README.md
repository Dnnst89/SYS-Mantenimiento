# SYS Mantenimiento

Sitio corporativo construido con **Next.js** (App Router), **React** y **Tailwind CSS v4**. Incluye **español** (rutas sin prefijo) e **inglés** (bajo `/en`).

Este documento mezcla **referencia técnica** y una **guía para quien empieza** con React/Next.js.

---

## Tabla de contenidos

1. [Stack y requisitos](#stack-y-requisitos)
2. [Inicio rápido](#inicio-rápido)
3. [Scripts NPM](#scripts-npm)
4. [Internacionalización (ES / EN)](#internacionalización-es--en)
5. [Rutas principales](#rutas-principales)
6. [Estructura del repositorio](#estructura-del-repositorio)
7. [Configuración relevante](#configuración-relevante)
8. [CI/CD (GitHub Actions + Netlify)](#cicd-github-actions--netlify)
9. [ESLint y calidad](#eslint-y-calidad)
10. [Git y flujo en equipo](#git-y-flujo-en-equipo)
11. [Aprender más (enlaces)](#aprender-más-enlaces)
12. [Opcionales (Prettier, shadcn/ui)](#opcionales-prettier-shadcnui)
13. [Problemas frecuentes](#problemas-frecuentes)
14. [Resumen día 1](#resumen-día-1)

---

## Stack y requisitos

| Tecnología | Versión orientativa |
|------------|---------------------|
| [Node.js](https://nodejs.org/) | **22** (`.nvmrc`; Netlify también fija Node 22) |
| [Next.js](https://nextjs.org/docs) | 16.x (App Router) |
| [React](https://react.dev/) | 19.x |
| [Tailwind CSS](https://tailwindcss.com/docs) | 4.x (`@tailwindcss/postcss`) |

**También:** [Git](https://git-scm.com/downloads) y un editor (p. ej. [VS Code](https://code.visualstudio.com/)).

Comprobar en terminal:

```bash
node -v   # debe ser v22.x si sigues .nvmrc
npm -v
git --version
```

Si usas [nvm](https://github.com/nvm-sh/nvm) / nvm-windows: `nvm use` en la raíz del repo respeta `.nvmrc`.

---

## Inicio rápido

```bash
git clone <URL-del-repositorio>
cd SYS-Mantenimiento
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). Si el puerto está ocupado, Next suele usar el siguiente (mira la salida en consola).

**Producción local:**

```bash
npm run build
npm run start
```

---

## Scripts NPM

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo con recarga rápida. |
| `npm run build` | Compilación de producción (`next build`). |
| `npm run start` | Sirve la build (tras `npm run build`). |
| `npm run lint` | ESLint según `eslint.config.mjs` y `eslint-config-next`. |

---

## Internacionalización (ES / EN)

- **Español:** rutas en la raíz (`/`, `/proyectos`, `/servicios`, …).
- **Inglés:** mismas ideas bajo **`/en`** (`/en`, `/en/projects`, `/en/services`, …).

La lógica de enlaces alternos y navegación vive sobre todo en **`lib/locale.js`**. Convenciones y mapas ES ↔ EN están documentados ahí mediante constantes como `NAV_ES` / `NAV_EN` y `getAlternateLocalePath`.

Componentes que muestran textos por idioma reciben a veces una prop **`locale`** (`'es' | 'en'`), p. ej. la landing principal y los bloques del home.

---

## Rutas principales

### Español (sin prefijo)

| Ruta | Contenido (resumen) |
|------|----------------------|
| `/` | Home: banner, rejilla de sectores, carrusel de marcas, bloque intro. |
| `/proyectos` | Misma landing que `/` (migas y título orientados a “Proyectos”). |
| `/servicios`, `/nosotros`, `/proveedores`, `/contacto` | Páginas de contenido (plantilla tipo `SimpleRoutePage`). |
| `/sectores/[slug]` | Detalle por sector (`residencial`, `comercial`, `industrial`, `institucional`). Definiciones en `lib/sectors.js`. |

### Inglés (`/en/...`)

| Ruta | Notas |
|------|--------|
| `/en`, `/en/projects`, `/en/services`, `/en/about`, `/en/suppliers`, `/en/contact` | Equivalentes a las páginas ES. |
| `/en/sectors/[slug]` | Sectores con slugs en inglés (`residential`, `commercial`, etc.). |

---

## Estructura del repositorio

| Ruta | Uso |
|------|-----|
| `app/` | App Router: layouts, páginas, `globals.css`. |
| `app/layout.js` | Layout raíz (fuentes, header, footer, envoltorio de página). |
| `app/page.js`, `app/en/page.js` | Home por idioma; delegan en `HomeLanding`. |
| `components/` | UI reutilizable (`header/`, `footer/`, `home/`, etc.). |
| `components/home/HomeLanding.jsx` | Landing compartida (grid + carrusel + artículo intro). |
| `lib/locale.js` | Rutas de navegación y alternancia de idioma. |
| `lib/sectors.js` | Datos de sectores (URLs, textos ES/EN, imágenes). |
| `lib/homeShowcaseContent.js` | Nombres para el carrusel de marcas (placeholders hasta logos en `/public`). |
| `public/` | Estáticos (p. ej. `logo-sys-mantenimiento.png`). |
| `next.config.mjs` | Next (`images.remotePatterns` para Unsplash, etc.). |
| `eslint.config.mjs` | ESLint. |
| `netlify.toml` | Build y opciones para despliegue en Netlify. |
| `.github/workflows/ci.yml` | Pipeline CI (lint + build). |
| `.nvmrc` | Versión de Node recomendada (22). |
| `AGENTS.md` | Notas para contribuidores/IA sobre convenciones de Next en este repo. |

**Nota sobre Next:** las APIs pueden diferir entre versiones; si cambias Next, revisa la guía oficial y avisos de deprecación aplicables a vuestra versión.

---

## Configuración relevante

### Variables de entorno

El proyecto puede crecer hacia `.env.local` para secretos y URLs privadas (no subir al repo; `.gitignore` ignora `.env*`).

### Imágenes remotas

`next.config.mjs` decl **`images.remotePatterns`** para `images.unsplash.com`. Si añades otro dominio de imágenes, extiende ahí las reglas o usa archivos en `public/`.

### Netlify (`netlify.toml`)

- **Build:** `npm run build`
- **Publish:** `.next`
- **Node:** 22 (`[build.environment]`)
- Cabeceras opcionales para caché de `/_next/static/*`

Si en el panel de Netlify defines otro comando o directorio de publicación, lo que está en **`netlify.toml`** suele prevalecer al importar el repo.

---

## CI/CD (GitHub Actions + Netlify)

### GitHub Actions (`.github/workflows/ci.yml`)

En **push** y **pull request** contra `main` o `master`:

1. Checkout del código  
2. Node según `.nvmrc`, caché de `npm`  
3. **`npm ci`** → **`npm run lint`** → **`npm run build`**

Así CI valida lo mismo que una build exitosa antes de fusionar cambios.

### Netlify (CD)

1. Cuenta en [Netlify](https://www.netlify.com/) → **Importar desde Git**.  
2. Conectar este repositorio; el archivo **`netlify.toml`** puede rellenar comando y carpeta de publicación.  
3. Tras cada push a la rama de producción, Netlify ejecuta la build configurada.

**Local:** carpeta `.netlify` (estado del CLI) está en `.gitignore`.

---

## ESLint y calidad

```bash
npm run lint
```

Ayuda a mantener código consistente y evita patrones problemáticos. La configuración extiende reglas recomendadas de Next (`eslint-config-next`).

---

## Git y flujo en equipo

### Conceptos rápidos

- **Repo:** historial Git del proyecto.  
- **Commit:** cambio etiquetado con mensaje descriptivo.  
- **Rama:** línea de trabajo paralela antes de integrar en `main`.  

### Flujo habitual

```bash
git checkout main && git pull origin main
git checkout -b mi-rama

# trabajo…

git status
git add .
git commit -m "Breve descripción del cambio"
git push -u origin mi-rama
```

Abrir **Pull Request** en GitHub hacia `main` para revisión antes de fusionar.

Más ayuda:

- [Documentación Git](https://git-scm.com/doc)  
- [GitHub — colaboración](https://docs.github.com/en/get-started/quickstart/hello-world)  
- [Learn Git Branching](https://learngitbranching.js.org/)  

---

## Aprender más (enlaces)

1. React: [react.dev/learn](https://react.dev/learn)  
2. Next.js: [nextjs.org/learn](https://nextjs.org/learn) y [documentación](https://nextjs.org/docs)  
3. Tailwind: [tailwindcss.com/docs](https://tailwindcss.com/docs)  
4. Next — despliegue: [Deploying](https://nextjs.org/docs/app/building-your-application/deploying)

---

## Opcionales (Prettier, shadcn/ui)

**Prettier** no viene instalado; si el equipo quiere formato unificado:

```bash
npm install -D prettier
```

Crear `.prettierrc` y, en VS Code, “format on save” con la extensión Prettier. [prettier.io](https://prettier.io/docs/en/)

**shadcn/ui** copia componentes al proyecto sobre Tailwind. Útil más adelante para piezas UI accesibles. [ui.shadcn.com](https://ui.shadcn.com/) — acordad `init` del equipo antes de distribuir rutas/componentes distintos.

---

## Problemas frecuentes

| Síntoma | Qué probar |
|---------|------------|
| `command not found` con `node` / `npm` | Reinstalar Node, cerrar y abrir la terminal. Usar `.nvmrc` / Node 22. |
| Errores tras cambiar de rama | Borrar `node_modules` y `npm install` de nuevo (`npm ci` en CI). |
| Cambios sin verse en el navegador | Guardar archivos; `Ctrl+C` y `npm run dev` de nuevo. |
| Conflictos Git | Resolver con calma siguiendo [guía GitHub sobre conflictos](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts). |
| Build falla en Netlify igual que en local | Comparar logs con `npm run build` tras `npm ci`; mismas ramas Node (22). |

---

## Resumen día 1

1. Instalar **Node 22**, **Git**, editor recomendado.  
2. `git clone` → `npm install`.  
3. `npm run dev` → http://localhost:3000  
4. Revisar `app/` y `components/` siguiendo la [tabla de estructura](#estructura-del-repositorio).  
5. Antes de subir: **`npm run lint`** y **`npm run build`** (o confiar en el PR + CI).  
6. Rama + PR antes de llevar código a producción (`main`).  

¿Dudas sobre React o Next? Revisa [Aprender más](#aprender-más-enlaces) — aprender en equipo suele ir más rápido.

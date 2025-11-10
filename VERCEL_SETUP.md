# Configuración de Vercel para Pre-rendering

## Cambios necesarios en Vercel

### 1. Configuración automática (¡Ya está lista!)

El proyecto ya está configurado para Vercel:

- **Script `vercel-build`**: Vercel ejecutará automáticamente `npm run build:prerender` durante el deploy
- **`vercel.json`**: Configura los rewrites para servir las rutas pre-renderizadas
- **Output directory**: Vercel detecta automáticamente `build/` como directorio de salida

**¡No necesitas configurar nada manualmente!** Solo haz push a tu repositorio y Vercel hará el deploy con pre-rendering automáticamente.

### 2. Configuración manual (si es necesario)

Si Vercel no detecta automáticamente la configuración, puedes configurarla manualmente:

1. Ve a tu proyecto en Vercel Dashboard
2. Settings → General → Build & Development Settings
3. Configura:
   - **Build Command**: `npm run build:prerender`
   - **Output Directory**: `build`
   - **Install Command**: `npm install` (o déjalo en auto)

### 3. Variables de entorno

Si tienes variables de entorno, asegúrate de configurarlas en:
- Vercel Dashboard → Settings → Environment Variables

### 4. Verificar el deploy

Después del deploy, verifica que:

1. **Las rutas sin hash funcionan**:
   - `https://tudominio.com/privacy` - Debe mostrar la página de privacidad
   - `https://tudominio.com/terms` - Debe mostrar los términos
   - `https://tudominio.com/cookies` - Debe mostrar las cookies

2. **Las rutas con hash siguen funcionando** (para la SPA):
   - `https://tudominio.com/#/privacy` - Debe funcionar la navegación
   - `https://tudominio.com/#/terms` - Debe funcionar la navegación

3. **El contenido está pre-renderizado**:
   - Ver el código fuente de cualquier página
   - Debe contener el texto completo renderizado (no solo `<div id="root"></div>`)

### 5. Verificar en Google Search Console

1. Ve a Google Search Console
2. Usa la herramienta "Inspeccionar URL"
3. Prueba las URLs sin hash:
   - `https://tudominio.com/privacy`
   - `https://tudominio.com/terms`
4. Verifica que Google puede ver el contenido renderizado

### 6. Sitemap

Asegúrate de que el sitemap esté accesible:
- `https://tudominio.com/sitemap.xml`

Y que esté configurado en Google Search Console:
- Google Search Console → Sitemaps → Agregar sitemap → `sitemap.xml`

## Troubleshooting

### El pre-rendering no se ejecuta en Vercel

1. Verifica que `puppeteer` esté en `devDependencies` (ya está)
2. Verifica que `tsx` esté en `devDependencies` (ya está)
3. Revisa los logs de build en Vercel para ver errores

### Las rutas no funcionan

1. Verifica que `vercel.json` esté en la raíz del proyecto
2. Verifica que los archivos HTML estén en `build/` después del build
3. Revisa los logs de deploy en Vercel

### El contenido no se renderiza

1. Verifica que el script de pre-rendering se ejecute correctamente
2. Revisa los logs de build en Vercel
3. Prueba el build localmente: `npm run build:prerender`
4. Verifica que los archivos HTML generados contengan contenido

## Notas importantes

- **Tiempo de build**: El pre-rendering puede aumentar el tiempo de build (agrega ~30-60 segundos)
- **Límites de Vercel**: Vercel tiene un límite de tiempo de build (generalmente 45 minutos para proyectos gratis)
- **Puppeteer**: Puppeteer puede ser pesado, pero Vercel lo soporta en el build

## Comandos útiles

```bash
# Build local con pre-rendering
npm run build:prerender

# Solo pre-rendering (después de build)
npm run prerender

# Verificar archivos generados
ls -la build/*.html
```


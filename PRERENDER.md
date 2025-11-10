# Pre-rendering para SEO

Este proyecto incluye un sistema de pre-rendering que genera versiones estáticas del contenido para mejorar la indexación por parte de buscadores y agentes de IA.

## ¿Cómo funciona?

El pre-rendering utiliza Puppeteer para:
1. Iniciar el servidor de preview de Vite
2. Visitar cada ruta de la aplicación
3. Esperar a que React renderice todo el contenido
4. Capturar el HTML completamente renderizado
5. Guardar archivos HTML estáticos con el contenido ya renderizado

## Uso

### Build con pre-rendering (recomendado para producción)

```bash
npm run build:prerender
```

Este comando:
1. Ejecuta el build normal de Vite (`npm run build`)
2. Ejecuta el script de pre-rendering (`npm run prerender`)

### Solo pre-rendering (después de un build)

```bash
npm run prerender
```

## Archivos generados

El script genera los siguientes archivos HTML en el directorio `build/`:

- `index.html` - Homepage con contenido pre-renderizado
- `privacy.html` - Política de privacidad pre-renderizada
- `terms.html` - Términos de servicio pre-renderizados
- `cookies.html` - Política de cookies pre-renderizada

## Configuración del servidor

### Vercel

El archivo `vercel.json` está configurado para:
- Servir `/privacy` desde `privacy.html`
- Servir `/terms` desde `terms.html`
- Servir `/cookies` desde `cookies.html`

Esto permite que los bots accedan a las rutas sin hash (`/privacy`) y vean el contenido pre-renderizado, mientras que los usuarios pueden seguir usando las rutas con hash (`/#/privacy`) en la SPA.

### Otros servidores

Si usas otro servidor, necesitas configurar rewrites similares:

**Nginx:**
```nginx
location /privacy {
    try_files /privacy.html =404;
}
```

**Apache (.htaccess):**
```apache
RewriteRule ^privacy$ /privacy.html [L]
```

## Beneficios

1. **SEO mejorado**: Los buscadores pueden indexar el contenido sin necesidad de ejecutar JavaScript
2. **Indexación por IA**: Los agentes de IA pueden acceder directamente al texto renderizado
3. **Tiempo de carga**: El contenido visible inmediatamente (aunque la SPA se hidrate después)
4. **Compatibilidad**: Funciona con todos los crawlers, incluso los que no ejecutan JavaScript

## Notas importantes

- El pre-rendering se ejecuta durante el build, no en tiempo de ejecución
- Los archivos HTML generados contienen el contenido completo renderizado
- La SPA sigue funcionando normalmente después de la hidratación
- Las rutas con hash (`/#/privacy`) siguen funcionando para la navegación en la SPA
- Las rutas sin hash (`/privacy`) se usan para SEO y bots

## Troubleshooting

### El script falla al iniciar el servidor

Asegúrate de que el puerto 4173 esté disponible. Puedes cambiarlo en `scripts/prerender.ts`.

### El contenido no se renderiza correctamente

- Aumenta los tiempos de espera en `scripts/prerender.ts`
- Verifica que los selectores `waitFor` sean correctos
- Revisa la consola para ver advertencias sobre contenido no renderizado

### Los archivos HTML no contienen el texto esperado

- Verifica que React esté renderizando correctamente en el servidor de preview
- Asegúrate de que las rutas con hash estén funcionando correctamente
- Revisa los logs del script para ver advertencias

## Actualizar rutas

Para agregar una nueva ruta al pre-rendering:

1. Edita `scripts/prerender.ts`
2. Agrega la ruta al array `routes`:
```typescript
{ path: "/#/nueva-ruta", output: "nueva-ruta.html", waitFor: "main h1" }
```
3. Agrega un rewrite en `vercel.json` (si usas Vercel):
```json
{
  "source": "/nueva-ruta",
  "destination": "/nueva-ruta.html"
}
```
4. Actualiza el sitemap.xml con la nueva ruta sin hash


# Fátima Sánchez & Pablo Cabrejos · Tango Argentino

Web de presentación de la pareja de tango: clases grupales y privadas, shows (con o sin
músicos en vivo) y organización de milongas, con formulario de reserva/contratación y
WhatsApp. Bilingüe **español / inglés**.

Es una web estática (HTML + CSS + JavaScript): no necesita servidor, base de datos ni
instalar nada. Se puede abrir con doble clic en `index.html` y publicar gratis.

## Estructura

```
index.html          Página completa (textos en ESPAÑOL)
css/styles.css      Diseño (colores y tipografías en las variables del principio)
js/config.js        ★ Vuestros datos: email, WhatsApp, ciudad, redes, formulario, vídeo
js/i18n.js          Textos en INGLÉS y mensajes del formulario
js/main.js          Funcionamiento (menú, formulario, WhatsApp…). No hace falta tocarlo
assets/img/         Fotos (ver assets/img/README.md para nombres y tamaños)
favicon.svg         Icono de la pestaña del navegador
```

## Qué tenéis que personalizar

1. **Datos de contacto** → `js/config.js`
   - `email`, `phoneDisplay`, `whatsapp` (solo dígitos con prefijo de país, p. ej. `34612345678`),
     `baseCity`, redes sociales y `youtubeId` del vídeo.
2. **Biografías** → busca `[PENDIENTE]`:
   - Español: en `index.html` (`about.fatimaBio` y `about.pabloBio`).
   - Inglés: en `js/i18n.js` (mismas claves).
3. **Fotos** → copiad los archivos en `assets/img/` con los nombres indicados en su README.
4. **Formulario** (recomendado): crea una cuenta gratuita en <https://formspree.io>,
   crea un formulario con vuestro email y pega su URL en `formEndpoint` de `js/config.js`.
   Las solicitudes os llegarán por email. Sin esto, el botón “Enviar” abre el programa de
   correo del visitante con la solicitud ya escrita.

> Regla para editar textos: el **español** está en `index.html` y el **inglés** en
> `js/i18n.js`. Cada texto tiene una clave (`data-i18n="..."`) que es la misma en ambos.

## Ver la web en vuestro ordenador

- Doble clic en `index.html`, o bien
- desde la carpeta del proyecto: `python3 -m http.server 8000` y abrir <http://localhost:8000>.

## Descargar el proyecto en la carpeta `paginaweb-tango`

```bash
git clone https://github.com/fatimasanchez87/Paginaweb-tango.git paginaweb-tango
cd paginaweb-tango
git checkout claude/charming-cori-ntjmy4
```

(O en GitHub: botón **Code → Download ZIP** y descomprimir dentro de la carpeta.)

## Publicar gratis

- **GitHub Pages**: en el repositorio → *Settings → Pages* → elegir la rama y la carpeta `/ (root)`.
- **Netlify**: arrastrar la carpeta del proyecto a <https://app.netlify.com/drop>.

Después se puede conectar un dominio propio (p. ej. `fatimaypablotango.com`).

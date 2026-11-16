<p align="center"><img src="logo.png" alt="DL STOCK PRO" width="140"></p>

# 📦 DL STOCK PRO — Inventario Inteligente

**Controla tus productos. Organiza tu negocio. Crece sin límites.**

DL STOCK PRO es una aplicación web para llevar el inventario de tiendas, minimercados, bodegas y distribuidoras desde el celular o el computador. Escanea códigos de barras, lee etiquetas con la cámara, calcula precios por unidad, sixpack y caja, y te avisa antes de que tus productos se venzan.

> Desarrollado por **DL COMPANY TECHNOLOGY** 🇨🇴
> *Antes conocido como "Control de Inventario".*

---

## ✨ Funciones principales

### 📷 Registro rápido de productos
- **Escáner de código de barras** con la cámara (EAN-13, EAN-8, UPC-A, CODE-128, CODE-39), con linterna y zoom.
- **Lectura de etiquetas con foto**: toma una foto o elige una de la galería y la app extrae el código, el nombre y los precios automáticamente.
- **Detección de duplicados**: si el código ya existe, la app avisa con un sonido y abre la ficha del producto para actualizarlo.

### 📊 Control de stock
- Stock en **unidades**, **R1 (sixpack de 6)** y **CX (cajas)**, con conversión automática entre ellos.
- Unidades por caja configurables por producto.
- Precio regular y **precio de promoción**, con cálculo automático del valor por sixpack y por caja.
- **Categorías** y **zonas de bodega** (pasillo, bloque, estante) totalmente personalizables.
- Registro de **temperatura** para refrigerados y congelados.

### ➕➖ Entradas y salidas rápidas
- Botones **+ / −** en cada producto para sumar o restar unidades con un toque, con opción de **Deshacer**.
- **Ajuste por cantidad** en unidades, **cajas** o **sixpacks (R1)**, con vista previa del nuevo stock.
- Cada ajuste queda en el **historial de movimientos** (varios toques seguidos cuentan como un solo movimiento).

### 📈 Resumen y stock mínimo
- Tarjetas con **total de productos**, **valor del inventario**, **stock bajo/agotado** y **productos por vencer**; tócalas para filtrar.
- **Stock mínimo** por producto con etiquetas **BAJO** y **AGOTADO**.
- **Pedido sugerido** listo para enviar al proveedor por **WhatsApp** o descargar en **Excel**.

### ⏰ Alertas de vencimiento
- Semáforo por producto: **OK**, **PRÓXIMO** (30 días), **CRÍTICO** (15 días) y **VENCIDO**.
- Burbuja de alerta y listado de productos por vencer.

### 🕓 Historial de movimientos
- Registro de cada **entrada, salida, edición y eliminación** con fecha, cantidades y usuario.
- Búsqueda por producto o código.

### 📤 Exportación y copias de seguridad
- Exporta el inventario y el historial a **Excel (.xlsx)** con columnas separadas, colores, filtros, totales y valor del stock.
- Descarga una **copia de seguridad** completa (productos, categorías, zonas e historial) y **restáurala** en cualquier dispositivo, combinando o reemplazando el inventario.

### 📱 Diseñada para el celular
- Vista en **tarjetas** en el celular y **tabla completa** en el computador.
- **Tema oscuro y claro**.
- **Barra de navegación inferior** (Inicio, Escanear, Agregar, Alertas y Más) y avisos con el diseño de la app.
- Funciona **sin internet** con los datos guardados en el dispositivo.
- **Búsqueda sin tildes** ("jabon" encuentra "JABÓN") y lista rápida por páginas, incluso con miles de productos.

---

## 💎 Planes

| Plan | Precio (COP) | Precio (USD) | Incluye |
|------|-------------|-------------|---------|
| **GRATIS** | $0 | $0 | Hasta 100 productos, almacenamiento en el dispositivo |
| **PRO** | $19.900 / mes | $5.99 / mes | Productos ilimitados, almacenamiento local, copias de seguridad |
| **PREMIUM** | $39.900 / mes | $9.99 / mes | Todo lo de PRO + **nube** y **sincronización entre varios dispositivos en tiempo real** + soporte prioritario |

Los planes se activan con un **código de activación**, que se solicita por WhatsApp. Cada código se usa una sola vez y tiene una vigencia (30, 90, 180 o 365 días). La app avisa cuando el plan está por vencer.

---

## 🚀 Cómo empezar

1. Abre la app en tu navegador (celular o computador).
2. Toca **Crear Cuenta** y regístrate con tu correo y una contraseña de al menos 6 caracteres.
3. Empieza a registrar productos con **Tomar Foto**, **De Galería**, **Registro Manual** o **Buscar Código**.
4. Para pasar a PRO o PREMIUM, toca la **corona 👑** e ingresa tu código de activación.

> 💡 **Consejo:** en el celular, usa la opción del navegador **"Agregar a pantalla de inicio"** para abrir DL STOCK PRO como si fuera una app instalada.

¿Olvidaste tu contraseña? En la pantalla de inicio toca **"¿Olvidaste tu contraseña?"** y recibirás un correo para crear una nueva.

---

## 🔒 Seguridad

- Inicio de sesión con **Firebase Authentication**: las contraseñas nunca se guardan en el dispositivo.
- Cada usuario solo puede ver y modificar **su propio inventario**.
- Los planes y los códigos de activación se validan en el servidor con **reglas de seguridad de Firestore**.
- Los textos de los productos se muestran de forma segura para evitar la inyección de código.

---

## 🛠️ Tecnologías

- HTML, CSS y JavaScript (un solo archivo, sin instalación)
- [Firebase Authentication](https://firebase.google.com/docs/auth) y [Cloud Firestore](https://firebase.google.com/docs/firestore)
- [html5-qrcode](https://github.com/mebjas/html5-qrcode) para el escáner de códigos de barras
- [Tesseract.js](https://github.com/naptha/tesseract.js) para leer etiquetas (OCR)
- [Font Awesome](https://fontawesome.com/) y la fuente Plus Jakarta Sans
- Publicada con **GitHub Pages**

---

## 📞 Soporte y ventas

¿Necesitas ayuda o quieres comprar un código de activación?

[![WhatsApp](https://img.shields.io/badge/WhatsApp-Escríbenos-25D366?logo=whatsapp&logoColor=white)](https://wa.me/573218641539?text=Hola%20DL%20Company,%20necesito%20ayuda%20con%20DL%20STOCK%20PRO)

---

<p align="center"><img src="dl-company.png" alt="DL COMPANY -TECHNOLOGY-" width="110"></p>

<p align="center">Desarrollado y administrado por <b>DL COMPANY -TECHNOLOGY-</b><br>© 2026 — Todos los derechos reservados.</p>

# 📝 Pendientes — DL STOCK PRO

## 1. Optimizar la sincronización en la nube (Premium)
**Prioridad:** cuando haya muchos clientes Premium o un cliente con miles de productos.

**Situación actual:** cada vez que un cliente Premium abre la app, se lee su inventario completo desde Firestore. El plan gratuito de Firebase (Spark) permite 50.000 lecturas y 20.000 escrituras por día, compartidas entre todos los clientes.

**Qué hacer:**
- Sincronizar solo los productos que cambiaron desde la última vez (usar `updatedTs`), en vez de leer todo el inventario.
- Aprovechar mejor la caché local de Firestore para no repetir lecturas al reabrir la app.
- Reducir las lecturas extra de las reglas de seguridad (verificación del plan Premium).

## 2. Pasar Firebase al plan Blaze
**Cuándo:** si el consumo diario pasa de unas 35.000 lecturas (70% del límite).

**Cómo revisar:** consola de Firebase → Firestore → pestaña **Uso**.

**Al cambiar:** configurar una alerta de presupuesto (por ejemplo, USD 5–10 al mes).

## 3. Documentos legales
- Agregar NIT y dirección comercial en `legal.html` cuando estén disponibles.
- Hacer revisar los Términos, la Política de privacidad y la Política de reembolsos por un abogado.

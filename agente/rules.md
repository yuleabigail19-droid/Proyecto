# SysLab 2.0 — Reglas Operativas del Agente para SYSTEMHOME

1. **Gestión de Solicitudes y Estados:** El agente debe validar que toda nueva solicitud de servicio se inicialice estrictamente en estado `Pendiente`.
2. **Asignación de Mantenimiento y Seguridad:** Al procesar solicitudes de servicios críticos (cercos eléctricos y alarmas), se debe verificar la disponibilidad de técnicos especializados.
3. **Persistencia Centralizada:** Toda consulta de historial de clientes y servicios debe ejecutarse a través de Prisma ORM sobre PostgreSQL.

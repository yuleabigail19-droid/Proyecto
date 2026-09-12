# SysLab 2.0 — Reglas Operativas y Persistencia del Agente

1. **Arquitectura:** Todo servicio backend debe canalizar las operaciones hacia PostgreSQL exclusivamente mediante Prisma ORM.
2. **Variables de Entorno:** Queda prohibido hardcodear credenciales; usar DATABASE_URL desde .env.
3. **Integridad de Datos:** Toda mutación crítica debe ejecutar validaciones previas según las skills de TasteSkill definidas.

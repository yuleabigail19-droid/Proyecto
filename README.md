# Proyecto de Sistemas Paralelos — SYSTEMHOME

> **Integrante del Grupo:**
> * Yulenka Abigail Magne Jimenez
>
> **Docente:** Ing. Elias Cassal Baldiviezo  
> **Materia:** Sistemas Paralelos  
> **Arquitectura Base:** SysLab 2.0  

---

## 1. Descripción del Proyecto

**SYSTEMHOME** es una plataforma web para la gestión integral de servicios tecnológicos y sistemas de seguridad electrónica (cámaras de vigilancia, cercos eléctricos, sistemas de alarmas, climatización y controles de acceso) orientada a hogares, comercios e industrias.

El sistema permite centralizar la administración de clientes, el catálogo de servicios técnicos, la recepción y seguimiento de solicitudes de atención, así como la programación de visitas para instalaciones y mantenimientos preventivos/correctivos bajo la arquitectura distribuida **SysLab 2.0** con persistencia **Prisma ORM** sobre PostgreSQL.

---

## 2. Arquitectura de Tecnologías (SysLab 2.0)

* **Frontend:** Interfaz de usuario web (puerto `3000`).
* **Backend:** API RESTful Node.js/Express (puerto `4000`).
* **Persistencia / Base de Datos:** PostgreSQL (puerto `5432`) con Prisma ORM.
* **Agente de IA:** Reglas operativas (`agente/rules.md`) y skills TasteSkill.

---

## 3. Estructura del Repositorio

```text
.
├── agente/                 # Skills e instrucciones del agente de IA
├── backend/                # Código fuente del Backend y Prisma
├── frontend/               # Código fuente del Frontend
├── docker-compose.yml      # Orquestación multi-contenedor
└── README.md               # Documentación general

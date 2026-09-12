# 😚 Proyecto de Sistemas Paralelos — SYSTEMHOME

> **Integrantes del Grupo:**
1. Yulenka Abigail Magne Jimenez - [Código/Matrícula]
>
> **Docente:** Ing. Elias Cassal Baldiviezo  
> **Materia:** Sistemas Paralelos  
> **Arquitectura Base:** SysLab 2.0  

---

## 📍 1. Descripción del Proyecto

**SYSTEMHOME** es una plataforma web para la gestión integral de servicios tecnológicos y sistemas de seguridad electrónica (cámaras, cercos eléctricos, alarmas, climatización) bajo la arquitectura distribuida **SysLab 2.0** con persistencia Prisma y PostgreSQL.

---

## 📧 2. Arquitectura de Tecnologás (SysLab 2.0)

* **Frontend:** Interfaz de usuario (puerto 3000).
* **Backend:** API RESTful Node.js/Express (puerto 4000).
* **Persistencia / Base de Datos:** PostgreSQL (puerto 5432) con Prisma ORM.
* **Agente de IA:Rewlas (`agente/rules.md`) y skills TasteSkill.

---

## 🔩 3. Estructura del Repositorio

```text
.
├── agente/                 # Skills e instrucciones del agente de IA
╜── backend,                # Código fuente del Backend y Prisma
╜── frontend/               # Código fuente del Frontend
╜── docker-compose.yml      # Orquestación multi-contenedor
└── README.md               # Documentación general
b``
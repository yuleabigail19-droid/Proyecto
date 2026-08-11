
# SYSTEMHOME - Sistema de Gestión de Servicios Tecnológicos

## 1. Descripción del proyecto

**SYSTEMHOME** es una empresa dedicada a brindar soluciones tecnológicas y de seguridad para hogares, empresas y establecimientos comerciales.

El proyecto consiste en desarrollar un sistema web para gestionar de manera organizada los clientes, servicios, productos, instalaciones, mantenimientos y solicitudes de atención realizadas a la empresa.

El sistema permitirá centralizar la información y facilitar el trabajo del personal de SYSTEMHOME, además de mejorar la atención y seguimiento de los servicios solicitados por los clientes.

## 2. Servicios de la empresa

SYSTEMHOME ofrece diferentes soluciones tecnológicas, entre ellas:

* Instalación de cámaras de seguridad.
* Mantenimiento de cámaras de seguridad.
* Instalación de DVR y NVR.
* Instalación de cercos eléctricos.
* Instalación de sistemas de alarmas.
* Instalación y mantenimiento de aires acondicionados.
* Instalación de controles de acceso.
* Configuración de redes y sistemas tecnológicos.
* Mantenimiento de equipos de seguridad.
* Venta de equipos y accesorios tecnológicos.

## 3. Objetivo general

Desarrollar un sistema web para gestionar los clientes, servicios, productos, instalaciones y mantenimientos realizados por SYSTEMHOME, permitiendo mejorar la organización y atención de los clientes.

## 4. Objetivos específicos

* Registrar y administrar clientes.
* Registrar los servicios ofrecidos por la empresa.
* Gestionar productos y equipos tecnológicos.
* Registrar solicitudes de servicios.
* Programar instalaciones y mantenimientos.
* Llevar un historial de servicios realizados.
* Controlar el estado de cada servicio.
* Administrar usuarios del sistema.
* Generar información y reportes de los servicios.

# 5. Requerimientos funcionales

## RF01 - Registro de clientes

El sistema debe permitir registrar clientes con información como nombre, teléfono, dirección y datos de contacto.

## RF02 - Gestión de clientes

El administrador debe poder consultar, modificar y eliminar la información de los clientes.

## RF03 - Registro de servicios

El sistema debe permitir registrar los diferentes servicios que ofrece SYSTEMHOME.

Ejemplos:

* Cámaras de seguridad.
* Cercos eléctricos.
* Aires acondicionados.
* Alarmas.
* Control de acceso.
* Mantenimiento.

## RF04 - Registro de productos

El administrador debe poder registrar los equipos y productos utilizados o comercializados por la empresa.

## RF05 - Solicitud de servicio

El sistema debe permitir registrar una solicitud de servicio realizada por un cliente.

## RF06 - Programación de servicios

El administrador debe poder programar una fecha y hora para realizar una instalación, reparación o mantenimiento.

## RF07 - Asignación de técnicos

El sistema debe permitir asignar un técnico responsable a cada servicio.

## RF08 - Seguimiento de servicios

El sistema debe permitir consultar el estado de una solicitud.

Los estados pueden ser:

* Pendiente.
* Programado.
* En proceso.
* Finalizado.
* Cancelado.

## RF09 - Historial de servicios

El sistema debe almacenar el historial de servicios realizados a cada cliente.

## RF10 - Registro de instalaciones

El sistema debe permitir registrar información sobre las instalaciones realizadas, incluyendo cliente, servicio, técnico, fecha y observaciones.

## RF11 - Registro de mantenimientos

El sistema debe permitir registrar mantenimientos realizados a cámaras, aires acondicionados, cercos eléctricos y otros equipos.

## RF12 - Gestión de usuarios

El administrador debe poder crear y administrar las cuentas de los usuarios que utilizan el sistema.

## RF13 - Control de roles

El sistema debe manejar diferentes tipos de usuarios, por ejemplo:

* Administrador.
* Técnico.
* Recepcionista.

Cada usuario tendrá diferentes permisos.

## RF14 - Consulta de información

El sistema debe permitir realizar búsquedas de clientes, servicios, técnicos e instalaciones.

## RF15 - Reportes

El sistema debe permitir generar reportes sobre los servicios realizados, servicios pendientes, clientes y mantenimientos.

# 6. Requerimientos no funcionales

## RNF01 - Seguridad

El sistema debe proteger la información de los usuarios mediante autenticación y control de acceso.

## RNF02 - Usabilidad

La interfaz debe ser sencilla, intuitiva y fácil de utilizar.

## RNF03 - Rendimiento

Las consultas y operaciones principales deben ejecutarse rápidamente.

## RNF04 - Disponibilidad

El sistema debe estar disponible para el personal autorizado durante el horario de trabajo.

## RNF05 - Compatibilidad

El sistema debe funcionar correctamente en navegadores modernos como Google Chrome, Microsoft Edge y Mozilla Firefox.

## RNF06 - Mantenibilidad

El código debe estar organizado y documentado para facilitar futuras modificaciones.

## RNF07 - Escalabilidad

El sistema debe permitir agregar nuevos servicios y funcionalidades en el futuro.

## RNF08 - Integridad

La información registrada debe mantenerse consistente y evitar datos duplicados o incorrectos.

## RNF09 - Respaldo

La información almacenada debe contar con mecanismos de respaldo para evitar pérdida de datos.

# 7. Historias de usuario

## HU01 - Registrar cliente

**Como** recepcionista
**Quiero** registrar un nuevo cliente
**Para** almacenar sus datos y poder gestionar sus solicitudes.

### Criterios de aceptación

* Se deben registrar los datos básicos del cliente.
* El teléfono debe ser válido.
* El sistema debe evitar registros duplicados.
* El cliente debe aparecer en la lista de clientes.

---

## HU02 - Registrar servicio

**Como** administrador
**Quiero** registrar los servicios que ofrece SYSTEMHOME
**Para** mantener actualizado el catálogo de servicios.

### Criterios de aceptación

* Se puede ingresar el nombre del servicio.
* Se puede agregar una descripción.
* Se puede establecer un precio referencial.
* El servicio queda disponible para nuevas solicitudes.

---

## HU03 - Solicitar un servicio

**Como** cliente
**Quiero** solicitar un servicio
**Para** recibir atención técnica de SYSTEMHOME.

### Criterios de aceptación

* El cliente puede seleccionar el servicio.
* Puede indicar una descripción del problema o necesidad.
* Puede registrar su dirección.
* La solicitud queda registrada como pendiente.

---

## HU04 - Programar servicio

**Como** recepcionista
**Quiero** programar una fecha para el servicio
**Para** organizar correctamente las visitas técnicas.

### Criterios de aceptación

* Se puede seleccionar la fecha.
* Se puede seleccionar la hora.
* Se puede seleccionar al técnico.
* La solicitud cambia a estado programado.

---

## HU05 - Asignar técnico

**Como** administrador
**Quiero** asignar un técnico a una solicitud
**Para** determinar quién realizará el trabajo.

### Criterios de aceptación

* Se muestra la lista de técnicos disponibles.
* Se puede seleccionar un técnico.
* El técnico queda asociado al servicio.

---

## HU06 - Registrar instalación de cámaras

**Como** técnico
**Quiero** registrar una instalación de cámaras
**Para** mantener un historial del trabajo realizado.

### Criterios de aceptación

* Se registra el cliente.
* Se registra la cantidad de cámaras instaladas.
* Se registra el tipo de cámara.
* Se registra la fecha.
* Se pueden agregar observaciones.
* El servicio queda registrado como finalizado.

---

## HU07 - Registrar mantenimiento

**Como** técnico
**Quiero** registrar un mantenimiento
**Para** llevar un control de los equipos atendidos.

### Criterios de aceptación

* Se identifica el equipo.
* Se registra el problema encontrado.
* Se registra el trabajo realizado.
* Se agregan observaciones.
* Se registra la fecha del mantenimiento.

---

## HU08 - Consultar historial del cliente

**Como** recepcionista
**Quiero** consultar el historial de un cliente
**Para** conocer los servicios que ha contratado anteriormente.

### Criterios de aceptación

* Se puede buscar al cliente.
* Se muestran sus servicios anteriores.
* Se muestran las fechas.
* Se muestra el estado de cada servicio.

---

## HU09 - Consultar servicios pendientes

**Como** administrador
**Quiero** consultar los servicios pendientes
**Para** conocer qué trabajos todavía deben realizarse.

### Criterios de aceptación

* Se muestran las solicitudes pendientes.
* Se muestra el cliente.
* Se muestra el servicio solicitado.
* Se muestra la fecha programada cuando corresponda.

---

## HU10 - Generar reportes

**Como** administrador
**Quiero** generar reportes de los servicios
**Para** conocer el funcionamiento de la empresa.

### Criterios de aceptación

* Se pueden consultar servicios realizados.
* Se pueden consultar servicios pendientes.
* Se pueden consultar mantenimientos.
* Se pueden consultar clientes registrados.

# 8. Roles del sistema

### Administrador

Puede:

* Gestionar usuarios.
* Gestionar clientes.
* Gestionar servicios.
* Gestionar productos.
* Asignar técnicos.
* Consultar reportes.
* Administrar todo el sistema.

### Recepcionista

Puede:

* Registrar clientes.
* Registrar solicitudes.
* Programar servicios.
* Consultar clientes.
* Consultar historial.

### Técnico

Puede:

* Consultar servicios asignados.
* Ver información del cliente.
* Registrar instalaciones.
* Registrar mantenimientos.
* Actualizar el estado de los servicios.

# 9. Tecnologías propuestas

* HTML5
* CSS3
* JavaScript
* Node.js
* Express.js
* MySQL
* Git
* GitHub

# 10. Metodología

El proyecto será desarrollado utilizando la metodología **Scrum**.

El desarrollo se dividirá en diferentes **Sprints**, donde cada Sprint tendrá un conjunto de historias de usuario que serán implementadas, probadas y entregadas.

# 11. Primer Sprint

### Sprint 1 - Gestión básica

Historias seleccionadas:

* HU01 - Registrar cliente.
* HU02 - Registrar servicio.
* HU12 - Inicio de sesión.
* HU13 - Gestión de usuarios.

### Objetivo

Crear la estructura inicial del sistema y permitir la administración básica de clientes, servicios y usuarios.

# 12. Segundo Sprint

### Sprint 2 - Solicitudes y programación

Historias:

* HU03 - Solicitar servicio.
* HU04 - Programar servicio.
* HU05 - Asignar técnico.

### Objetivo

Implementar el proceso de solicitud, programación y asignación de servicios.

# 13. Tercer Sprint

### Sprint 3 - Instalaciones y mantenimientos

Historias:

* HU06 - Registrar instalación.
* HU07 - Registrar mantenimiento.
* HU08 - Consultar historial.

### Objetivo

Permitir que los técnicos registren los trabajos realizados y mantener un historial de atención.

# 14. Cuarto Sprint

### Sprint 4 - Reportes

Historias:

* HU09 - Consultar servicios pendientes.
* HU10 - Generar reportes.

### Objetivo

Implementar consultas y reportes para facilitar la administración de SYSTEMHOME.

# 15. Estructura inicial del proyecto

```text
systemhome/
│
├── README.md
│
├── docs/
│   ├── requisitos.md
│   └── historias-usuario.md
│
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── views/
│   └── app.js
│
├── database/
│   └── systemhome.sql
│
├── public/
│   ├── css/
│   ├── js/
│   └── img/
│
├── .gitignore
├── package.json
└── package-lock.json
```

# 16. Estado del proyecto

**Estado:** En desarrollo inicial.

### Próximas actividades

* Crear repositorio GitHub.
* Crear estructura inicial del proyecto.
* Configurar Node.js y Express.
* Crear base de datos.
* Crear módulo de usuarios.
* Crear módulo de clientes.
* Crear módulo de servicios.
* Implementar solicitudes de servicio.
* Implementar programación.
* Implementar gestión de técnicos.
* Implementar instalaciones y mantenimientos.
* Crear reportes.

<div id="top"></div>

<div align="center">
  <h3 align="center">Ingeniería del software de componentes y sistemas distribuidos - PRAC2</h3>
  <p align="center">
	Configuración e instrucciones de ejecución del proyecto
  </p>
</div>

<details>
  <summary>Contenidos</summary>
  <ol>
	<li><a href="#sobre-el-proyecto">Sobre el proyecto</a></li>
	<li><a href="#herramientas-y-tecnologias">Herramientas y tecnologías</a></li>
	<li><a href="#configuraciones-previas">Configuraciones previas necesarias</a></li>
	<li><a href="#instalacion-y-ejecucion">Instalación y ejecución</a></li>
	<li><a href="#accesos-y-puertos">Accesos y puertos</a></li>
  </ol>
</details>

## Sobre el proyecto

Este proyecto forma parte de la segunda práctica (PRAC2) de la asignatura. El objetivo es implementar un subconjunto de microservicios para el proyecto Photo&Film4You. 

Los microservicios que componen esta fase piloto son:
* **Product Catalog**: Gestiona el inventario y las consultas del catálogo de productos. Ya implementado por la plantilla dada por el profesorado.
* **User**: Gestiona altas, datos personales, alertas y contenidos digitales. Ya implementado por la plantilla dada por el profesorado.
* **Course**: Responsable de gestionar los cursos, inscripciones y gestión académica básica. A implementar por el alumnado.
* **Microcredential**: Responsable de gestionar la generación y aprobación de credenciales para cursos completados. A implementar por el alumnado.
* **Notification**: Encargado de emitir notificaciones automáticas a los usuarios mediante la escucha de colas de mensajes. A implementar por el alumnado.

<p align="right">(<a href="#top">volver arriba</a>)</p>

## Herramientas y tecnologías

La plataforma de desarrollo para todos los microservicios requiere el siguiente entorno tecnológico:
* **Entorno de desarrollo**: IntelliJ IDEA / Eclipse
* **JDK**: OpenJDK 17
* **Framework**: Spring / Spring Boot
* **Gestión de dependencias y build**: Maven
* **Servidor HTTP**: Tomcat (integrado por defecto con Spring Boot)
* **Librería de llamadas REST**: Jersey
* **Comunicación asíncrona**: Apache Kafka
* **Base de datos**: PostgreSQL
* **Implementación ORM**: Hibernate
* **Documentación API**: OpenAPI v3 mediante springdoc-openapi.
* **Gestión de logs**: Log4j2.
* **Generación de datos simulados**: Mockneat

<p align="right">(<a href="#top">volver arriba</a>)</p>

## Configuraciones previas necesarias

Para lograr la correcta flexibilidad y ejecución del sistema, se deben considerar las siguientes configuraciones de negocio y arquitectura:

* **Independencia y estado**: Cada microservicio debe poder ejecutarse independientemente, contar con estado propio, acceder a su propia base de datos y gestionar su propio log.
* **Autenticación**: No será necesario implementar ningún tipo de autenticación para las operaciones. Se da por hecho que esta funcionalidad la proporciona el API Gateway.
* **Service discovery & registration**: No se debe implementar ninguna funcionalidad de registro o búsqueda de servicios. Se asume que existe una única instancia en una ubicación conocida.
* **Envío de correos**: No se debe implementar un servidor real de correos electrónicos. El comportamiento se debe simular utilizando Mocks. Cuando el servicio *Notification* procese una alerta, debe demostrarse generando una línea de log con nivel INFO indicando que se ha notificado al usuario correspondiente.
* **Comunicación entre servicios**: Las llamadas necesarias para obtener información entre microservicios se realizarán a través de peticiones REST.

<p align="right">(<a href="#top">volver arriba</a>)</p>

## Instalación y ejecución

1. Asegúrate de tener Docker y Docker Compose instalados.
2. El proyecto incluye un archivo `docker-compose.yml` preconfigurado con la infraestructura básica.
3. Desde el directorio raíz, ejecuta el siguiente comando para levantar los contenedores:
   ```sh
   # Windows
   docker compose up -d

   # Linux
   docker-compose up -d
   ```

   Esto inicializará los servicios base, incluyendo las instancias independientes de PostgreSQL para cada servicio y el servidor de Kafka.
4. Abre los proyectos de los microservicios generados con Spring Boot en tu entorno de desarrollo y compílalos utilizando Maven. Cada esqueleto contiene su propio servidor HTTP empotrado.

## Accesos y puertos

Cuando los microservicios estén en ejecución, se puede acceder a la interfaz web de SwaggerUI autogenerada en formato JSON/OpenAPI v3 para realizar pruebas en las siguientes direcciones:  

* **Product Catalog**: http://localhost:18081/swagger-ui/index.html
* **User**: http://localhost:18082/swagger-ui/index.html
* **Course**: http://localhost:18084/swagger-ui/index.html
* **Microcredential**: http://localhost:18085/swagger-ui/index.html
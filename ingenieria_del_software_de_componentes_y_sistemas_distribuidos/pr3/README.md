# PR3 - Calidad del software distribuido: inherente, transversal y crítico

Para realizar esta PEC, hay que implementar en la [`plantilla`](plantilla/) brindada por el profesorado la funcionalidad que se pide en el archivo `enunciado.pdf`. La entrega se encuentra en el directorio [`entrega/`](entrega/).

Si intentas abrir el archivo `index.html` del reporte de Allure directamente en tu navegador, es probable que no cargue debido al bloqueo de recursos por la política CORS. Para visualizarlo correctamente, no lo abras como un archivo local (`file:///`). En su lugar, levanta un servidor web local utilizando cualquiera de estas opciones:

- **Usando la herramienta de línea de comandos de Allure**: Abre tu terminal y ejecuta el siguiente comando apuntando a la carpeta de resultados o al reporte generado:
	```bash
	# Si tienes la carpeta de resultados:
	allure serve ruta/a/allure-results

	# O si ya generaste la carpeta del reporte:
	allure open ruta/a/allure-report
	```
- **Usando un servidor de Python**: Navega desde tu terminal hasta la carpeta donde se encuentra el archivo `index.html` de Allure y ejecuta:
	```bash
	python3 -m http.server 8000
	```
	Luego, abre tu navegador web y ve a la dirección http://localhost:8000.
- **Extensión Live Server de VS Code**: Si usas Visual Studio Code, abre el archivo `index.html`, haz clic derecho sobre el código y selecciona "Open with Live Server".

## Histórico de PR

El directorio [`historico`](historico/) contiene una recopilación de 3 PR corregidas por el equipo docente desde 2021.

## Recursos de aprendizaje

>[!NOTE]
>- No se incluyen los archivos `pdf` en el repositorio para evitar posibles problemas de copyright.

- [**Richardson, Chris. Microservices patterns. Shelter Island, NY: Manning Publications, 2019. ISBN: 1617294543**](https://learning.oreilly.com/library/view/microservices-patterns/9781617294549/OEBPS/Text/01.html?sso_link=yes&sso_link_from=uoc-edu#ch01)
	- Chapter 9. Testing microservices: Part 1
	- Chapter 10. Testing microservices: Part 2
- [**Richards & Ford. Fundamentals of Software Architecture. O'Reilly, 2020. ISBN: 1492043443**](https://learning.oreilly.com/library/view/fundamentals-of-software/9781492043447/)
	- Chapter 3. Modularity
	- Chapter 6. Measuring and Governing Architecture Characteristics

--- 

## Resultado

### Calificación

>[!WARNING]
>La baja calificación de la entrega se debe a un problema con el plazo de la entrega, no a su calidad en sí. Al compararla con la [solucion oficial](solucion_oficial.pdf), debería tener la máxima puntuación.

<table>
	<thead>
		<tr>
			<th>EVALUABLE</th>
			<th>C. ORIGINAL</th>
			<th>C. SOBRE 10</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Entrega PDF</td>
			<td>11,25 / 25,00</td>
			<td>4,50 / 10,00 (C+)</td>
		</tr>
	</tbody>
</table>

### Detalles sobre la puntuación

![](detalles_puntuacion.png)

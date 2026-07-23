# PR2 - Patrones de diseño y de asignación de responsabilidades

Para realizar esta PEC, hay que resolver los ejercicios que se detallan en el archivo `enunciado.pdf`. El formato de entrega es en `.pdf` ([`entrega_evaluada.pdf`](entrega_evaluada.pdf)) y el directorio `archivos_entrega` contiene los ficheros de Visual Paradigm correspondientes a cada ejercicio junto con su exportación en formato `.png`. 

Se recomienda el uso de [Visual Paradigm](https://www.visual-paradigm.com/) (programa de escritorio) o [diagrams.net](https://app.diagrams.net/) (web) para la elaboración de los diagramas.

## Histórico de PEC

El directorio [`historico`](historico/) contiene una recopilación de 9 PEC corregidas por el equipo docente desde 2015.

## Recursos de aprendizaje

>[!NOTE]
>- No se incluyen los archivos `pdf` en el repositorio para evitar posibles problemas de copyright.

- [Módulo 1. Introducción a los patrones](https://materials.campus.uoc.edu/daisy/Materials/PID_00276107/pdf/PID_00276107.pdf)
- [Módulo 2. Catálogo de patrones](https://materials.campus.uoc.edu/daisy/Materials/PID_00276109/pdf/PID_00276109.pdf)
- [Módulo 3. Caso práctico de aplicación de patrones](https://materials.campus.uoc.edu/daisy/Materials/PID_00276108/pdf/PID_00276108.pdf)
- [Resumen general de la asignatura](recursos/resumen.pdf)

--- 

## Resultado

### Calificación

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
			<td>39,00 / 50,00</td>
			<td>7,80 / 10,00 (B)</td>
		</tr>
	</tbody>
</table>

### Comentarios de retroalimentación

- **1.1(2,5/2,5)**: El patrón esperado era el estrategia. Factory no hacía falta.
- **1.2(12/15)**: Tu modelo se entiende pero tiene los siguientes problemas:
	- las diferentes estrategias de match implementan la estrategia y su método, se modela con una línea de puntos.
- **1.3(7,5/7,5)**: Tu pseudocódigo es correcto.
- **2.1 (5/5)**: El patrón esperado era el Factoría pura
- **2.2 (12/15)**: Tu modelo se entiende pero tiene los siguientes problemas:
	- debe de haber una clase factoría que permita crear los diferentes tipos de evento. Al tener diferentes tipos de evento, la factoría tiene clases hijas para la creación de cada tipo de evento.
- **2.3 (10/10)**: Tu pseudocódigo es correcto.
- **3.1(4/5)**: Los patrones esperados son el iterator y el decorator.
- **3.2(8/15)**: El modelo se entiende pero tiene los siguientes problemas:
	- tanto el iterator como el decorator son interfaces y las clases que cuelgan de ellos se modelan con línea de puntos.
	- las clases que implementan el decorator tienen una composición con la interfaz.
- **3.3(7/10)**: El diagrama de secuencia se entiende pero tiene los siguientes problemas:
	- las líneas de vida son incorrectas.
	- la numeración de los eventos es incorrecta.
- **4.1(5/5)**: El patrón esperado es el Facade / fachada.
- **4.2(5/10)**: El modelo se entiende pero tiene los siguientes problemas:
	- la clase fachada usa el resto de clases involucradas en el cierre.
	- las involucradas en el cierre se modelan dentro de un paquete.

### Detalles sobre la puntuación

![](detalles_puntuacion.png)

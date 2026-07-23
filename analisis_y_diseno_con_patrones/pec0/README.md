# PEC0 - Modelado con UML

Para realizar esta PEC, hay que resolver los ejercicios que se detallan en el archivo `enunciado.pdf`, apoyándose de los archivos proporcionados por el equipo docente contenidos en el directorio `archivos_facilitados`. El formato de entrega es en `.pdf` ([`entrega_evaluada.pdf`](entrega_evaluada.pdf)) y el directorio `archivos_entrega` contiene los ficheros de Visual Paradigm correspondientes a cada ejercicio junto con su exportación en formato `.png`. 

Se recomienda el uso de [Visual Paradigm](https://www.visual-paradigm.com/) (programa de escritorio) o [diagrams.net](https://app.diagrams.net/) (web) para la elaboración de los diagramas.

## Recursos de aprendizaje

>[!NOTE]
>- No se incluyen los archivos `pdf` en el repositorio para evitar posibles problemas de copyright.

- [VisualParadigm - Class Diagram Tutorial](https://www.visual-paradigm.com/guide/uml-unified-modeling-language/uml-class-diagram-tutorial/)
- [VisualParadigm - Sequence Diagram Tutorial](https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-sequence-diagram/)
- [Diagramas de secuencia en español](pec0/recursos/diagramas_secuencia.pdf)
- [Ejercicios iniciales de repaso](recursos/ejercicios_iniciales_repaso.pdf)

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
			<td>7,50 / 10,00</td>
			<td>7,50 / 10,00 (B)</td>
		</tr>
	</tbody>
</table>

### Comentarios de retroalimentación

- **1a (10/10)** has explicado correctamente el diagrama de clases
- **1b (10/10)** has explicado correctamente el diagrama de secuencia
- **2(27/40)**: Tu modelo se entiende pero tiene los siguientes problemas:
	- Entre `campaing` y `player` debería haber dos relaciones de asociación, una para jugadores y otra para master.
	- El enumerado está mal modelado
- **3(28/40)**: Tu modelo de secuencia se entiende pero tiene los siguientes problemas:
	- Para indicar que se llama a una instancia en concreto se tiene que usar los `:` en el nombre de la entidad (Ejemplo `wl:watersense`)
	- Las líneas de vida están mal modeladas

### Detalles sobre la puntuación

![](detalles_puntuacion.png)

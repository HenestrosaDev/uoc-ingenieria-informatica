# PEC1 - Principios de diseño y patrones de análisis

Para realizar esta PEC, hay que resolver los ejercicios que se detallan en el archivo `enunciado.pdf`. El formato de entrega es en `.pdf` ([`entrega_evaluada.pdf`](entrega_evaluada.pdf)) y el directorio `archivos_entrega` contiene los ficheros de Visual Paradigm correspondientes a cada ejercicio junto con su exportación en formato `.png`. 

Se recomienda el uso de [Visual Paradigm](https://www.visual-paradigm.com/) (programa de escritorio) o [diagrams.net](https://app.diagrams.net/) (web) para la elaboración de los diagramas.

Para esta PEC, me tocó realizar la prueba de autoría. La pregunta a la que me tocó responder fue la siguiente:

>En la pregunta 1.2, ¿qué problema/principio se resuelve creando la jerarquía de herencia con las clases `Product`, `Bonds` y `Stocks`?

## Histórico de PEC

El directorio [`historico`](historico/) contiene una recopilación de 10 PEC corregidas por el equipo docente desde 2015.

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
			<td>37,80 / 45,00</td>
			<td>8,40 / 10,00 (B)</td>
		</tr>
	</tbody>
</table>

### Comentarios de retroalimentación

- **1a(5/5)**: Los principios que se incumplen son Ley de Demeter (no hables con extraños), Principio de Abierto Cerrado (OCP) y Alta cohesión.
- **1b(11/15)**: Has detectado bien la herencia, pero eliminaste la relación entre `product` y `risk`.
- **1c(10/10)**: El código es correcto.
- **2.1(5/5)**: Efectivamente los patrones esperados son el patrón rango y cantidad. El de asignación de responsabilidades no lo he contado como incorrecto.
- **2.2.(7.5/15)** el modelo planteado se entiende pero tiene algunos problemas:
	- la region te sobraría. Rango se debe relacionar con el producto y nunca con región, ya que la comisión es de un producto.
	- aunque `money` lo pones como atributo, se debería haber representado con una relación de asociación y no haber puesto el atributo.
- **3.1 (5/5)**: Correcto. El patrón esperado era el objeto compuesto. Se ha justificado correctamente el uso del patrón.
- **3.2 (13/15)** El modelo se entiende pero tiene una serie de observaciones:
	- el producto compuesto tiene una relación de composición con el producto.
	- las cardinalidades son incorrectas
- **3.3(10/10)**: Tu código es correcto.
- **4.1 (2,5/2,5)**: Correcto. Si se incumple el principio de segregación de interfaces, ya que la clase `Product` dispone de dos métodos que obliga a reescribir a todas las clases hijas.
- **4.2 (2,5/2,5)**: Incorrecto. En este caso no se incumple el principio de sustitución de Liskov
- **4.3 (15/15)**: Correcto. Para resolver el problema de la segregación de interfaces se deben de definir interfaces que implementan las clases `CryptoAsset` y `Deposit`.

### Detalles sobre la puntuación

![](detalles_puntuacion.png)

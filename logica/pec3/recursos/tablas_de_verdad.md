# RESUMEN Lógica de enunciados: tablas de verdad

>[!NOTE]
>Este resumen amplía y toma como referencia [este vídeo](https://www.youtube.com/watch?v=MkAoAALyTRc) del canal [Aprende sin Espinas](https://www.youtube.com/@AprendeSinEspinas) en vez del [libro proporcionado por la UOC](http://cvapp.uoc.edu/autors/MostraPDFMaterialAction.do?id=265957&hash=f4eec8d6f2470281eeabfd721755d26ab5429e0b8fd1581689cea334dc3dd6a5).

## Índice

- [Definición](#definición)
- [Estructura](#estructura)
- [Resolución](#resolución)
	- [1. Identificar los átomos](#1-identificar-los-átomos)
	- [2. Determinar el número de filas](#2-determinar-el-número-de-filas)
	- [3. Escribir las combinaciones de valores para los átomos](#3-escribir-las-combinaciones-de-valores-para-los-átomos)
	- [4. Rellenar el resto de columnas en base a los valores de verdad de los átomos](#4-rellenar-el-resto-de-columnas-en-base-a-los-valores-de-verdad-de-los-átomos)
- [Interpretación](#interpretación)
	- [Corrección de razonamientos](#corrección-de-razonamientos)

<br>

## Definición

Las **tablas de verdad** son un método de validación de razonamientos alternativo a la deducción natural para demostrar si existe alguna forma para vincular una serie de premisas a una conclusión.

## Estructura

Dadas las proposiciones del siguiente razonamiento:

1. $A \wedge B$ (**P**remisa)
2. $A \vee B$ (P)
3. $A \rightarrow B$ (**C**onclusión)

Cada proposición representa una columna en la tabla de verdad con la siguiente estructura:

<table>
	<tr>
		<th colspan="5">PROPOSICIONES</th>
	</tr>
	<tr>
		<th colspan="2">ÁTOMOS</th>
		<th>PREMISA</th>
		<th>PREMISA</th>
		<th>CONCLUSIÓN</th>
	</tr>
	<tr>
		<td>$A$</td>
		<td>$B$</td>
		<td>$A \wedge B$</td>
		<td>$A \vee B$</td>
		<td>$A \rightarrow B$</td>
	</tr>
	<tr>
		<td>$V$</td>
		<td>$V$</td>
		<td>$V$</td>
		<td>$V$</td>
		<td>$V$ <sub>interpretación 1</sub></td>
	</tr>
	<tr>
		<td>$V$</td>
		<td>$F$</td>
		<td>$F$</td>
		<td>$V$</td>
		<td>$F$ <sub>interpretación 2</sub></td>
	</tr>
	<tr>
		<td>$F$</td>
		<td>$V$</td>
		<td>$F$</td>
		<td>$V$</td>
		<td>$V$ <sub>interpretación 3</sub></td>
	</tr>
	<tr>
		<td>$F$</td>
		<td>$F$</td>
		<td>$F$</td>
		<td>$F$</td>
		<td>$V$ <sub>interpretación 4</sub></td>
	</tr>
</table>

Donde:
- Las columnas en las que figuran los **átomos** nos permitirán determinar el **valor de verdad** de las premisas y, a su vez, de la conclusión.
- Las filas son **interpretaciones**, las cuales constituyen conjuntos de asignaciones de valores de verdad para cada una de estas proposiciones.
- Las celdas de cada fila de interpretación tienen asignadas un **valor de verdad** (**V**erdadero o **F**also), el cual se determina aplicando unas reglas que veremos en el [tercer paso]() apartado de [Resolución](#resolución).

Una interpretación puede ser escrita en álgebra booleana. Por ejemplo, este sería el equivalente de la tabla de verdad de arriba en dicha notación, donde cada proposición tiene asociada un valor de verdad:

- { $A = V, B = V, A \wedge B = V, A \vee B = V, A \rightarrow B = V$ }
- { $A = V, B = F, A \wedge B = F, A \vee B = V, A \rightarrow B = F$ }
- { $A = F, B = V, A \wedge B = F, A \vee B = V, A \rightarrow B = V$ }
- { $A = F, B = F, A \wedge B = F, A \vee B = F, A \rightarrow B = V$ }

## Resolución

Para asignar un valor de verdad para cada interpretación posible de la tabla de verdad, tenemos que seguir estos pasos:

### 1. Identificar los átomos

Por ejemplo, si tenemos las siguientes proposiciones:

- $\neg B$
- $\neg \wedge C$
- $B \vee \neg C$
- $\therefore (\neg B \wedge C) \rightarrow A$

Podemos identificar estos átomos:

- $A$
- $B$
- $C$

### 2. Determinar el número de filas

Las dimensiones de una tabla de verdad se determinan a partir de esta fórmula:

$$\text{número de interpretaciones} = 2^{\text{número de átomos}}$$

>[!NOTE]
>Tomamos el $2$ porque sólo existen dos valores posibles (**V** o **F**).

Si la aplicamos al ejemplo, obtenemos $2^3 = 6$ interpretaciones posibles.

### 3. Escribir las combinaciones de valores para los átomos

Los valores de verdad de un átomo varía en función de su posición en la tabla. Cada fila (interpretación) representa una combinación única de valores para las variables.

Para determinar la frecuencia de alternancia de los valores de verdad de cada átomo, podemos aplicar la siguiente fórmula:

$$\text{frecuencia de alternancia} = 2^{\text{número de átomos - número de columna del átomo}}$$

Si la aplicamos a nuestro ejemplo, obtenemos:

- $A_{\text{frecuencia de alternancia}} = 2^{3 - 1} = 2^2 = 4$
- $B_{\text{frecuencia de alternancia}} = 2^{3 - 2} = 2^1 = 2$
- $C_{\text{frecuencia de alternancia}} = 2^{3 - 3} = 2^0 = 1$

<br>

<table>
	<tr>
		<td>$A$</td>
		<td>$B$</td>
		<td>$C$</td>
	</tr>
	<tr>
		<td>$V$</td>
		<td>$V$</td>
		<td>$V$</td>
	</tr>
	<tr>
		<td>$V$</td>
		<td>$V$</td>
		<td>$F$</td>
	</tr>
	<tr>
		<td>$V$</td>
		<td>$F$</td>
		<td>$V$</td>
	</tr>
	<tr>
		<td>$V$</td>
		<td>$F$</td>
		<td>$F$</td>
	</tr>
	<tr>
		<td>$F$</td>
		<td>$V$</td>
		<td>$V$</td>
	</tr>
	<tr>
		<td>$F$</td>
		<td>$V$</td>
		<td>$F$</td>
	</tr>
	<tr>
		<td>$F$</td>
		<td>$F$</td>
		<td>$V$</td>
	</tr>
	<tr>
		<td>$F$</td>
		<td>$F$</td>
		<td>$F$</td>
	</tr>
</table>

### 4. Rellenar el resto de columnas en base a los valores de verdad de los átomos

A partir de los valores de verdad para cada interpretación posible, procedemos a evaluar el valor de verdad para las premisas y, finalmente, para la conclusión.

Para ello, seguimos estos criterios para obtener los valores de verdad según las conectivas:

- *Valor de verdad para la conjunción*: Verdadero cuando ambos conjuntandos son **verdaderos** ($V \wedge V$).
- *Valor de verdad para la disyunción*: Verdadero cuando uno o los dos disyuntandos son **verdaderos** ($V \vee F$; $F \vee V$; $V \vee V$)$.
- **Valor de verdad para la implicación**: SÓLO es FALSO cuando el **antecedente es verdadero** y el **consecuente es falso** ($V \rightarrow F$).

<table>
	<tr>
		<th colspan="5">VALORES DE VERDAD SEGÚN CONECTIVAS</th>
	</tr>
	<tr>
		<th colspan="2">ÁTOMOS</th>
		<th colspan="2">PREMISAS</th>
		<th>CONCLUSIÓN</th>
	</tr>
	<tr>
		<td>$A$</td>
		<td>$B$</td>
		<td>$A \wedge B$</td>
		<td>$A \vee B$</td>
		<td>$A \rightarrow B$</td>
	</tr>
	<tr>
		<td>$V$</td>
		<td>$V$</td>
		<td>$V$</td>
		<td>$V$</td>
		<td>$V$</td>
	</tr>
	<tr>
		<td>$V$</td>
		<td>$F$</td>
		<td>$F$</td>
		<td>$V$</td>
		<td>$F$</td>
	</tr>
	<tr>
		<td>$F$</td>
		<td>$V$</td>
		<td>$F$</td>
		<td>$V$</td>
		<td>$V$</td>
	</tr>
	<tr>
		<td>$F$</td>
		<td>$F$</td>
		<td>$F$</td>
		<td>$F$</td>
		<td>$V$</td>
	</tr>
</table>

Si resolvemos el ejemplo planteado en los anteriores pasos, obtenemos esta tabla como solución:

<table>
	<tr>
		<td>$A$</td>
		<td>$B$</td>
		<td>$C$</td>
		<td>$\neg B$</td>
		<td>$\neg \wedge C$</td>
		<td>$B \vee \neg C$</td>
		<td>$(\neg B \wedge C) \rightarrow A$</td>
	</tr>
	<tr>
		<td>$V$</td>
		<td>$V$</td>
		<td>$V$</td>
		<td>$F$</td>
		<td>$F$</td>
		<td>$V$</td>
		<td>$V$</td>
	</tr>
	<tr>
		<td>$V$</td>
		<td>$V$</td>
		<td>$F$</td>
		<td>$F$</td>
		<td>$F$</td>
		<td>$V$</td>
		<td>$V$</td>
	</tr>
	<tr>
		<td>$V$</td>
		<td>$F$</td>
		<td>$V$</td>
		<td>$V$</td>
		<td>$V$</td>
		<td>$F$</td>
		<td>$V$</td>
	</tr>
	<tr>
		<td>$V$</td>
		<td>$F$</td>
		<td>$F$</td>
		<td>$V$</td>
		<td>$F$</td>
		<td>$V$</td>
		<td>$V$</td>
	</tr>
	<tr>
		<td>$F$</td>
		<td>$V$</td>
		<td>$V$</td>
		<td>$F$</td>
		<td>$F$</td>
		<td>$V$</td>
		<td>$V$</td>
	</tr>
	<tr>
		<td>$F$</td>
		<td>$V$</td>
		<td>$F$</td>
		<td>$F$</td>
		<td>$F$</td>
		<td>$V$</td>
		<td>$V$</td>
	</tr>
	<tr>
		<td>$F$</td>
		<td>$F$</td>
		<td>$V$</td>
		<td>$V$</td>
		<td>$V$</td>
		<td>$F$</td>
		<td>$F$</td>
	</tr>
	<tr>
		<td>$F$</td>
		<td>$F$</td>
		<td>$F$</td>
		<td>$V$</td>
		<td>$F$</td>
		<td>$V$</td>
		<td>$V$</td>
	</tr>
</table>

## Interpretación

En función del valor de verdad de un enunciado, tenemos:

- **Tautología** o **teorema**: Razonamiento que se cumple **SIEMPRE**, independientemente de las asignaciones de los valores de verdad para sus premisas.

	<table>
		<tr>
			<th>$A$</th>
			<th>$B$</th>
			<th>$B \rightarrow A$</th>
			<th>$A \rightarrow (B \rightarrow A)$</th>
		</tr>
		<tr>
			<td>$V$</td>
			<td>$V$</td>
			<td>$V$</td>
			<td>$V$</td>
		</tr>
		<tr>
			<td>$V$</td>
			<td>$F$</td>
			<td>$F$</td>
			<td>$V$</td>
		</tr>
		<tr>
			<td>$F$</td>
			<td>$V$</td>
			<td>$V$</td>
			<td>$V$</td>
		</tr>
		<tr>
			<td>$F$</td>
			<td>$F$</td>
			<td>$V$</td>
			<td>$V$</td>
		</tr>
	</table>

- **Antinomia** o **contradicción**: Razonamiento que **no se cumple NUNCA**, independientemente de las asignaciones de los valores de verdad para sus premisas.

	<table>
		<tr>
			<th>$A$</th>
			<th>$B$</th>
			<th>$\neg B$</th>
			<th>$A \wedge B$</th>
			<th>$A \rightarrow \neg B$</th>
			<th>$(A \wedge B) \wedge (A \rightarrow \neg B)$</th>
		</tr>
		<tr>
			<td>$V$</td>
			<td>$V$</td>
			<td>$F$</td>
			<td>$V$</td>
			<td>$F$</td>
			<td>$F$</td>
		</tr>
		<tr>
			<td>$V$</td>
			<td>$F$</td>
			<td>$V$</td>
			<td>$F$</td>
			<td>$V$</td>
			<td>$F$</td>
		</tr>
		<tr>
			<td>$F$</td>
			<td>$V$</td>
			<td>$F$</td>
			<td>$F$</td>
			<td>$V$</td>
			<td>$F$</td>
		</tr>
		<tr>
			<td>$F$</td>
			<td>$F$</td>
			<td>$V$</td>
			<td>$F$</td>
			<td>$V$</td>
			<td>$F$</td>
		</tr>
	</table>

- **Contingencia**: Se da cuando el razonamiento se cumple algunas veces y otras no. Esto depende de los valores de verdad de sus premisas.

### Corrección de razonamientos

- ✅ Si las premisas son consistentes —es decir, que TODAS sean $V$— y observamos que TODAS las conclusiones son VERDADERAS, diremos que el razonamiento es **CORRECTO**
- ✅ Si las premisas son inconsistentes —es decir, no todas son $V$—, diremos que el razonamiento es **VÁLIDO** por inconsistencia de premisas. 
- ❌ Si las premisas son consistentes —es decir, que TODAS sean $V$— observamos que ALGUNA conclusión es FALSA (contraejemplo), diremos que el razonamiento es **INCORRECTO**

**Ejemplo**:

<table>
	<tr>
		<th>$A$</th>	
		<th>$B$</th>	
		<th>$C$</th>	
		<th>$B \vee C$</th>	
		<th>$A \rightarrow B \vee C$</th>	
		<th>$\neg B \wedge C$</th>	
		<th>$A$</th>	
	</tr>
	<tr>
		<td>$V$</td>
		<td>$V$</td>
		<td>$V$</td>
		<td>$V$</td>
		<td>$V$</td>
		<td>$F$</td>
		<td>$V$</td>
	</tr>
	<tr>
		<td>$V$</td>
		<td>$V$</td>
		<td>$F$</td>
		<td>$V$</td>
		<td>$V$</td>
		<td>$F$</td>
		<td>$V$</td>
	</tr>
	<tr>
		<td>$V$</td>
		<td>$F$</td>
		<td>$V$</td>
		<td>$V$</td>
		<td>$V$</td>
		<td>$V$</td>
		<td>$V$</td>
		<td>✅ Premisas consistentes $\rightarrow$ Conclusión cierta</td>
	</tr>
	<tr>
		<td>$V$</td>
		<td>$F$</td>
		<td>$F$</td>
		<td>$F$</td>
		<td>$F$</td>
		<td>$F$</td>
		<td>$V$</td>
	</tr>
	<tr>
		<td>$F$</td>
		<td>$V$</td>
		<td>$V$</td>
		<td>$V$</td>
		<td>$V$</td>
		<td>$F$</td>
		<td>$F$</td>
	</tr>
	<tr>
		<td>$F$</td>
		<td>$V$</td>
		<td>$F$</td>
		<td>$V$</td>
		<td>$V$</td>
		<td>$F$</td>
		<td>$F$</td>
	</tr>
	<tr>
		<td>$F$</td>
		<td>$F$</td>
		<td>$V$</td>
		<td>$V$</td>
		<td>$V$</td>
		<td>$V$</td>
		<td>$F$</td>
		<td>
			❌ Premisas consistentes $\rightarrow$ Conclusión falsa
			<br>
			🚨 <strong>CONTRAEJEMPLO</strong>
		</td>
	</tr>
	<tr>
		<td>$F$</td>
		<td>$F$</td>
		<td>$F$</td>
		<td>$F$</td>
		<td>$V$</td>
		<td>$F$</td>
		<td>$F$</td>
	</tr>
</table>

Como el razonamiento presenta un **contraejemplo**, podemos concluir que NO ES VÁLIDO. 

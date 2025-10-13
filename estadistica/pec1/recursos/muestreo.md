# [RESUMEN] Muestreo (sampling)

## Índice

>[!NOTE]
>El apartado **1. Introducción** ha sido omitido por no contener información relevante.

- [2. Muestreo: población y muestra](#2-muestreo-población-y-muestra)
- [3. Muestreo aleatorio simple](#3-muestreo-aleatorio-simple)
	- [3.1. Elección de una muestra aleatoria: uso de tablas de dígitos aleatorios](#31-elección-de-una-muestra-aleatoria-uso-de-tablas-de-dígitos-aleatorios)
- [4. Muestreo sistemático](#4-muestreo-sistemático)
- [5. Muestreo estratificado](#5-muestreo-estratificado)
- [6. Muestreo por conglomerados](#6-muestreo-por-conglomerados)
- [7. Muestreo polietápico](#7-muestreo-polietápico)
- [8. Muestreo por cuotas](#8-muestreo-por-cuotas)

## 2. Muestreo: población y muestra

- **Población**: Conjunto de individuos que se quiere estudiar, en el que los individuos pueden ser tanto objetos como personas.
- **Muestra** (sample): Subconjunto cualquiera de la población. 
- **Sesgo**: Muestra poco representativa de la población global.

## 3. Muestreo aleatorio simple

El proceso para obtener una **muestra aleatoria simple** tiene dos propiedades:

1. Todos los elementos de la población tienen la misma probabilidad de ser escogidos.
2. Los individuos se seleccionan de manera independiente unos de otros.

### 3.1. Elección de una muestra aleatoria: uso de tablas de dígitos aleatorios

Se selecciona al azar al primer individuo y los siguientes se seleccionan a partir de la tabla.

**Pasos a seguir**:

1. **Enumerar la población**: Cada elemento de la población debe recibir un número único. Por ejemplo, si tenemos 100 individuos, los numeramos del 01 al 100.
2. **Definir el tamaño de la muestra**: Por ejemplo, si queremos una muestra de 10 individuos, todos serán seleccionados aleatoriamente.
3. **Seleccionar una tabla de dígitos aleatorios**: Una tabla de dígitos aleatorios es una matriz de números generados aleatoriamente, que suelen ser secuencias largas de números del 0 al 9 dispuestos de forma aleatoria. Se puede encontrar en libros de estadística o generarlas mediante programas.
4. **Leer la tabla de dígitos aleatorios**:
	- Empezar en cualquier lugar de la tabla.
	- Extraer tantos dígitos como se requieran para obtener el número de elementos que estamos buscando. Por ejemplo, si usamos números de dos dígitos y tienes una población de 100 personas, extraemos dos dígitos a la vez para formar números entre 01 y 100.
5. **Seleccionar los números que no se repiten**: Si extraemos un número que ya fue seleccionado, lo descartamos y seguimos con la selección de los siguientes dígitos.
6. **Finalizar la selección**: Cuando hayamos seleccionado el número necesario de elementos para la muestra, habremos terminado el proceso.

## 4. Muestreo sistemático

Se selecciona al azar al primer individuo de la muestra y los siguientes se seleccionan a intervalos fijos.

**Ejemplo**:

Queremos obtener una lista de 12 ($k$) estudiantes entre los 1400 ($N$) de una universidad.

1. **Enumerar la población**: Se numeran los individuos de la población de $N$. En este caso, del 1 al 1400.
2. **Calcular $m = [N / k]$**, donde $[x]$ designa la parte entera del número $x$. En este caso, $m = [1400 / 12] = 116$; esto corresponde al primer individuo de la muestra. 
3. **Seleccionar un número al azar** entre 1 y $m$, que indicará el primer individuo que formará parte de la muestra. Supongamos que mediante un sistema que garantice aleatoriedad obtenemos el lugar 10.
4. **Sumar $m$** tantas veces como sea necesario al número que indica el primer individuo de la muestra e incluir en la muestra a los individuos que se correspondan con los resultados de estas sumas.

	$10, 10 + 116 = 126, 10 + 2 * 116 = 242, 10 + 3 * 116 = 358 \dots$

	Y así hasta obtener a los doce individuos de la muestra.

## 5. Muestreo estratificado

Los individuos de la población se dividen en grupos disyuntos (**estratos**) => grupos que no tienen elementos en común. La muestra se obtiene seleccionando una muestra aleatoria simple dentro de cada estrato.

**Pasos a seguir**:

1. **Agrupar individuos** de la población en estratos.
2. **Obtener la muestra** asignando un número de individuos a cada estrato.
3. **Seleccionar los individuos** necesarios por muestreo simple dentro de cada estrato.
4. **Combinar los resultados** para analizar la muestra total.

**Ejemplo**:

Dada esta tabla:

<table>
	<tr>
		<th></th>
		<th></th>
		<th>PORCENTAJE SOBRE EL TOTAL</th>
	</tr>
	<tr>
		<td>**1.º ESO**</td>
		<td>200</td>
		<td>16,19%</td>
	</tr>
	<tr>
		<td>**2.º ESO**</td>
		<td>250</td>
		<td>20,24%</td>
	</tr>
	<tr>
		<td>**3.º ESO**</td>
		<td>260</td>
		<td>21,05%</td>
	</tr>
	<tr>
		<td>**4.º ESO**</td>
		<td>250</td>
		<td>20,24%</td>
	</tr>
	<tr>
		<td>**1.º bachillerato**</td>
		<td>150</td>
		<td>12,15%</td>
	</tr>
	<tr>
		<td>**2.º bachillerato**</td>
		<td>125</td>
		<td>10,12%</td>
	</tr>
</table>

Para obtener cuántos individuos de la muestra deben ser cada curso (estrato), repartimos el total de individuos en la muestra según el porcentaje que corresponde a cada estrato:

<table>
	<tr>
		<th></th>
		<th>PORCENTAJE SOBRE EL TOTAL</th>
		<th>INDIVIDUOS EN LA MUESTRA</th>
	</tr>
	<tr>
		<td>**1.º ESO**</td>
		<td>16,19%</td>
		<td>16</td>
	</tr>
	<tr>
		<td>**2.º ESO**</td>
		<td>20,24%</td>
		<td>20</td>
	</tr>
	<tr>
		<td>**3.º ESO**</td>
		<td>21,05%</td>
		<td>21</td>
	</tr>
	<tr>
		<td>**4.º ESO**</td>
		<td>20,24%</td>
		<td>20</td>
	</tr>
	<tr>
		<td>**1.º bachillerato**</td>
		<td>12,15%</td>
		<td>12</td>
	</tr>
	<tr>
		<td>**2.º bachillerato**</td>
		<td>10,12%</td>
		<td>10</td>
	</tr>
	<tr>
		<td></td>
		<td></td>
		<td>99</td>
	</tr>
</table>

A causa del redondeo "hemos perdido" un individuo. Para "recuperarlo", añadimos un alumno a un estrato escogido al azar.

## 6. Muestreo por conglomerados

Los **conglomerados** son unidades (normalmente físicas o geográficas) en las que se distribuyen los individuos de la población que hay que investigar. En el **muestreo por conglomerados** se selecciona una muestra aleatoria de conglomerados y, dentro de cada conglomerado, se selecciona al azar una muestra de sus individuos.

Diferencias entre estrato y conglomerado:

- Los **estratos** son subgrupos **homogéneos** dentro de la población, basados en características comunes. Los miembros de un estrato deben ser similares (edad, género, nivel educativo...).
- Los **conglomerados** son subgrupos **heterogéneos** (normalmente, unidades físicas o geográficas) dentro de la población, que contienen varios elementos de la población. Los miembros de un conglomerado pueden ser distintos entre sí (barrios, escuelas, ciudades...).

**Pasos a seguir**:

1. **Estudiar la población** distribuida en conglomerados.
2. **Seleccionar al azar** alguno de los conglomerados.
3. **Tomar una muestra aleatoria simple** de sus individuos o de todo el conglomerado.
4. **Reunir las muestras** obtenidas en cada conglomerado para la muestra final.

**Ejemplo**:

Imaginemos que tenemos 50 distritos en un país. De estos, seleccionamos 10 de manera aleatoria. En cada uno de esos distritos, seleccionamos 50 hogares de los 500 que existen en cada distrito. Después, dentro de cada hogar, entrevistamos a una persona sobre su satisfacción con el sistema de salud.

1. **Etapa 1**: Seleccionar al azar un número arbitrario de distritos (10) (conglomerados = distritos).
2. **Etapa 2**: Seleccionar al azar un número arbitrario de hogares dentro de cada distrito (50) (conglomerados = hogares).
3. **Etapa 3**: Seleccionar al azar una persona por hogar.
4. **Unir las muestras** obtenidas en cada hogar para obtener la muestra global

En total, tendremos 10 distritos $\times$ 50 hogares = **500 hogares seleccionados** para realizar la encuesta.

## 7. Muestreo polietápico

Combina la estratificación y la conglomeración; se estratifican los conglomerados considerados para después obtener muestras aleatorias de conglomerados dentro de cada estrato. Se usa cuando al agrupar la población físicamente obtenemos individuos con características similares. 

**Ejemplo**:

Si queremos estudiar el uso de internet en el ámbito rural y urbano en un país grande:

1. **Etapa 1**: Seleccionar aleatoriamente 10 regiones del país.
2. **Etapa 2**: Dentro de esas 10 regiones, elegir aleatoriamente 5 municipios por región.
3. **Etapa 3**: En cada uno de esos municipios seleccionados, elegir 20 hogares aleatorios.
4. **Etapa 4**: En cada hogar, seleccionar aleatoriamente a una persona para entrevistar sobre el uso de internet.

## 8. Muestreo por cuotas

Se distribuyen los individuos de la población en diferentes categorías y se asigna un número de individuos a cada categoría, de manera que la proporción de individuos de cada categoría en la muestra es similar a la proporción dentro de la población. El entrevistador va seleccionando a los individuos de la muestra hasta llenar las cuotas.

**Ejemplo**:

A partir de estos datos:

<table>
	<tr>
		<th colspan="4">EDAD DE AÑO EN AÑO DE LA POBLACIÓN DE BARCELONA POR SEXO</th>
	</tr>
	<tr>
		<th>EDADES</th>
		<th>TOTAL</th>
		<th>HOMBRES</th>
		<th>Mujeres</th>
	</tr>
	<tr>
		<td>15 años</td>
		<td>16.362</td>
		<td>8.390</td>
		<td>7.972</td>
	</tr>
	<tr>
		<td>16 años</td>
		<td>17.340</td>
		<td>8.837</td>
		<td>8.503</td>
	</tr>
	<tr>
		<td>17 años</td>
		<td>18.888</td>
		<td>9.663</td>
		<td>9.225</td>
	</tr>
	<tr>
		<td>18 años</td>
		<td>20.238</td>
		<td>10.209</td>
		<td>10.129</td>
	</tr>
	<tr>
		<td>19 años</td>
		<td>21.538</td>
		<td>10.929</td>
		<td>10.609</td>
	</tr>
	<tr>
		<td>20 años</td>
		<td>22.813</td>
		<td>11.614</td>
		<td>11.199</td>
	</tr>
	<tr>
		<td>21 años</td>
		<td>24.098</td>
		<td>12.304</td>
		<td>11.794</td>
	</tr>
	<tr>
		<td>22 años</td>
		<td>23.862</td>
		<td>12.131</td>
		<td>11.731</td>
	</tr>
	<tr>
		<td>23 años</td>
		<td>23.968</td>
		<td>12.131</td>
		<td>11.855</td>
	</tr>
	<tr>
		<td>Total</td>
		<td>189.225</td>
		<td>96.143</td>
		<td>93.082</td>
	</tr>
</table>

1. Resulta claro que para obtener una muestra por cuotas de, por ejemplo, 300 individuos, esta deberá contener (redondeando convenientemente) $300 \cdot (8390 / 189225) = 13$ hombres de 15 años, $300 \cdot (7972 / 189225) = 13$ mujeres de 15 años, y así sucesivamente.

2. **Distribuir el número de individuos (o cuotas)** entre los entrevistadores.

	Por ejemplo, si tenemos 3 entrevistadores:
	- Asignaremos a 6 hombres de 15 años al entrevistador 1.
	- Asignaremos a 4 hombres de 15 años al entrevistador 2.
	- Asignaremos a 3 hombres de 15 años al entrevistador 3.
	
	Haremos esta distribución por cada par edad-género.
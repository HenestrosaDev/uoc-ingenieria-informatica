# [RESUMEN] Estadística descriptiva: Introducción al análisis de datos - Medidas de dispersión

## Índice

- [1. Los cuartiles y la mediana](#1-los-cuartiles-y-la-mediana)
	- [1.1. El rango intercualítico](#11-el-rango-intercualítico)
	- [1.2. Los cinco números resumen y el diagrama de caja](#12-los-cinco-números-resumen-y-el-diagrama-de-caja)
- [2. La desviación típica y la media](#2-la-desviación-típica-y-la-media)
	- [2.1. Propiedades de la varianza y la desviación típica](#21-propiedades-de-la-varianza-y-la-desviación-típica)
	- [2.2. La regla de Tchebichev](#22-la-regla-de-tchebichev)
	- [2.3. Datos estandarizados](#23-datos-estandarizados)
- [3. Usos de la media y la desviación típica o de la mediana y los cinco números resumen](#3-usos-de-la-media-y-la-desviación-típica-o-de-la-mediana-y-los-cinco-números-resumen)
- [4. Varianza y datos tabulados](#4-varianza-y-datos-tabulados)


## 1. Los cuartiles y la mediana

Un **cuartil** divide los datos ordenados en cuatro grupos con aproximadamente el mismo número de individuos para ver el espacio que ocupa cada grupo en relación con los demás.

Cálculo:
1. Ordenar las observaciones de menor a mayor.
2. Calcular $(N + 1) / 2$ y la mediana.
3. Distribuir las observaciones en dos grupos iguales:
	- El grupo de las que ocupan una posición estrictamente menor que $(N + 1) / 2$;
	- El grupo de las que ocupan una posición estrictamente mayor que $(N + 1) / 2$.
4. Organizar por cuartiles:
	- **Primer cuartil (Q1)**: Mediana del grupo de los datos que ocupan una posición estrictamente menor que $(N + 1) / 2$.
	- **Tercer cuartil (Q3)**: Mediana de los datos que ocupan una posición estrictamente mayor que $(N + 1) / 2$.
	- **Segundo cuartil (Q2)**: Mediana.

### 1.1. El rango intercualítico

Diferencia entre el tercer y el primer cuartil.

Un rango intercuartílico pequeño significa que los datos centrales están muy apretados, mientras que un rango intercuartílico grande indica una fuerta dispersión.

### 1.2. Los cinco números resumen y el diagrama de caja

Los cinco números resumen de la distribución de una variable son: el mínimo, Q1, la mediana, Q3 y el máximo.

Estos números se representan en **diagramas de caja** (o _box-plot_).

**Ejemplo**:

Un estudio muestra que los cinco números resumen correspondientes a la distribución de los sueldos mensuales de una empresa determinada son: mínimo = 1.000, Q1 = 1.250, mediana = 1.750, Q3 = 3.000, máximo = 5.000. Dibujamos el diagrama de caja correspondiente y obtenemos:

![](https://github-production-user-asset-6210df.s3.amazonaws.com/60482743/500283292-b7811139-82f9-497a-affb-0d4a1a87c344.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20251012%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251012T173330Z&X-Amz-Expires=300&X-Amz-Signature=ed4bcd80c1136989b0ac2a4541fdea8d1f1ec2d637ab6b233e0978af28012193&X-Amz-SignedHeaders=host)

## 2. La desviación típica y la media

<table>
	<tr>
		<th colspan="4">FÓRMULAS DE VARIANZA Y DESVIACIÓN TÍPICA (O ESTÁNDAR)</th>
	</tr>
	<tr>
		<th></th>
		<th>VARIANZA</th>
		<th>DESVIACIÓN ESTÁNDAR</th>
		<th>MEDIA</th>
	</tr>
	<tr>
		<td><strong>Población</strong></td>
		<td>$\sigma^2 = \frac{\sum^N_{i=1} (x_i - \mu)^2}{N}$</td>
		<td>$\sigma = \sqrt{\sigma^2} = \sqrt{\frac{\sum^N_{i=1} (x_i - \mu)^2}{N}}$</td>
		<td>$\mu = \frac{\sum^N_{i=1} x_i}{N}$</td>
	</tr>
	<tr>
		<td><strong>Muestra</strong></td>
		<td>$s^2 = \frac{\sum^N_{i=1} (x_i - \overline{x})^2}{n - 1}$</td>
		<td>$s = \sqrt{s^2} = \sqrt{\frac{\sum^N_{i=1} (x_i - \overline{x})^2}{n - 1}}$</td>
		<td>$\overline{x} = \frac{\sum^N_{i=1} x_i}{n}$</td>
	</tr>
</table>

Donde:
- $x_i$ son los **valores individuales** de los datos.
- $\sigma$ es la **desviación estándar poblacional**. Representa la dispersión de los datos dentro de **toda la población**.
- $N$ es el **tamaño de la población** (número total de elementos en la población en estudio).
- $s$ es la **desviación estándar muestral**. $s$ representa la dispersión de los datos dentro de **una muestra**.
- $n$ es el **tamaño de la muestra** (número de elementos que se toman de la población en estudio). $n - 1$ corrige el sesgo cuando solo se tiene una muestra.

**Ejemplo de cálculo de la desviación típica** (o estándar):

Dados los valores 7, 4, 6, 5, 5:

<table>
	<tr>
		<th></th>
		<th>$x_i$</th>
		<th>$x_i - \overline{x} = x_i - 5,4$</th>
		<th>$(x_i - \overline{x})^2 = (x_i - 5,4)^2$</th>
	</tr>
	<tr>
		<td></td>
		<td>7</td>
		<td>7 - 5,4 = 1,6</td>
		<td>(1,6)^2 = 2,56</td>
	</tr>
	<tr>
		<td></td>
		<td>4</td>
		<td>4 - 5,4 = -1,4</td>
		<td>(-1,4)^2 = 1,96</td>
	</tr>
	<tr>
		<td></td>
		<td>6</td>
		<td>6 - 5,4 = 0,6</td>
		<td>(0,6)^2 = 0,36</td>
	</tr>
	<tr>
		<td></td>
		<td>5</td>
		<td>5 - 5,4 = -0,4</td>
		<td>(-0,4)^2 = 0,16</td>
	</tr>
	<tr>
		<td></td>
		<td>5</td>
		<td>5 - 5,4 = -0,4</td>
		<td>(-0,4)^2 = 0,16</td>
	</tr>
	<tr>
		<td><strong>Suma de la columna</strong></td>
		<td><strong>27</strong></td>
		<td><strong>0</strong></td>
		<td><strong>2,56 + 1,96 + 0,36 + 0,16 + 0,16 = 5,2</strong></td>
	</tr>
</table>

Donde la media es:

$$\overline{x} = \frac{7 + 4 + 6 + 5+ 5}{5} = \frac{27}{5} = 5,4$$

la varianza es:

$$s^2_x = \frac{5,2}{5} = 1,04$$

y la desviación típica (o estándar) es:

$$s = \sqrt{s^2} = \sqrt{1,04} = 1,02$$

### 2.1. Propiedades de la varianza y la desviación típica

1. Si todas las observaciones tienen el **mismo valor**, la varianza y la desviación típica (o estándar) **valen 0**.
2. Si **sumamos** una misma cantidad $K$ a todas las observaciones, la varianza y la desviación típica (o estándar) **no cambian**. La media de los nuevos valores es $\overline{y} = \overline{x} + K$.
3. Si multiplicamos todas las observaciones por una misma cantidad $K$, la varianza de los valores nuevos se obtiene multiplicando la varianza de los datos originales por $K^2$; la desviación típica (o estándar) de los nuevos valores se obtiene multiplicando la desviación típica (o estándar) de los datos originales por $|K|$. La media de los nuevos valores es $\overline{y} = K \overline{x}$.

### 2.2. La regla de Tchebichev

Dado cualquier conjunto de datos con media $\overline{x}$ y desviación típica (o estándar) $s_x$, si $m$ es un número cualquiera, entonces la proporción de datos que pertenecen al intervalo ($\overline{x} - ms_x, \overline{x} + ms_x$) es, como mínimo:

$$1 - \frac{1}{m^2}$$

Algunos casos concretos:

<table>
	<tr>
		<th>$m$</th>
		<th>INTERVALO</th>
		<th>PORCENTAJE MÍNIMO DE LAS OBSERVACIONES EN EL INTERVALO PREVISTO POR LA REGLA DE TCHEBICHEV</th>
	</tr>
	<tr>
		<td>$1$</td>
		<td>$(\overline{x} - 1 s_x, \overline{x} + 1 s_x$</td>
		<td>$1 - \frac{1}{1^2} = 0$</td>
	</tr>
	<tr>
		<td>$2$</td>
		<td>$(\overline{x} - 2 s_x, \overline{x} + 2 s_x$</td>
		<td>$1 - \frac{1}{2^2} = 0,75 = 75\%$</td>
	</tr>
	<tr>
		<td>$3$</td>
		<td>$(\overline{x} - 3 s_x, \overline{x} + 3 s_x$</td>
		<td>$1 - \frac{1}{3^2} = 0,88 = 88\%$</td>
	</tr>
	<tr>
		<td>$4$</td>
		<td>$(\overline{x} - 4 s_x, \overline{x} + 4 s_x$</td>
		<td>$1 - \frac{1}{4^2} = 0,93 = 93\%$</td>
	</tr>
</table>

**Ejemplo**:

- Tenemos 500 modelos diferentes de portátiles.
- Media de los precios: 2.000 €.
- Desviación típica (o estándar): 100 €.	

El precio de, como mínimo, 375 (75% de 500) portátiles está en el intervalo $(2000. - 2 \cdot 100, 2000 + 2 \cdot 100) = (1800, 2200)$.

El precio de, como mínimo, 440 portátiles (88% de 500) está en en el intervalo $(2000 - 3 \cdot 100, 2000 + 3 \cdot 100) = (1700, 2300)$.

### 2.3. Datos estandarizados

Dado un conjunto de $N$ observaciones de una variable con una serie de valores, cuya media es $\overline{x}$ con desviación típica (o estándar) $s_x$, el valor estandarizado de $x$ es:

$$z = \frac{x - \overline{x}}{s_x}$$

Si se quiere estandarizar un valor en concreto:

$$x_i \overset{\text{Estandarizar}} \longrightarrow z_i = \frac{x_i - \overline{x}}{s_x}$$

Propiedades:

1. $\overline{z} = 0$
2. $s^2_x = 1$
3. $z = \frac{x - \overline{x}}{s_x} \overset{\text{implica}} \longrightarrow x = \overline{x} + zs_x$

## 3. Usos de la media y la desviación típica o de la mediana y los cinco números resumen

- En **distribuciones asimétricas**, la desviación estándar puede no ser útil, ya que se ve afectada por valores extremos. En su lugar, es mejor usar los **cinco números resumen**, ya que reflejan más detalles sobre la distribución sin que los valores extremos la distorsionen.
- La media y la desviación estándar son solo útiles en **distribuciones simétricas**.
- **Siempre** es útil representar los datos **gráficamente** para obtener una visión clara de la distribución y evitar perder información importante.

## 4. Varianza y datos tabulados

Ejemplo de cálculo de la varianza a partir de datos tabulados:

<table>
	<tr>
		<th>$x_i$</th>
		<th>$n_i$</th>
		<th>$(x_i - \overline{x})$</th>
		<th>$(x_i - \overline{x}^2$</th>
		<th>$n_i \cdot (x_i - \overline{x})^2$</th>
	</tr>
	<tr>
		<td>0</td>
		<td>10</td>
		<td>-4,16</td>
		<td>17,3056</td>
		<td>173,056</td>
	</tr>
	<tr>
		<td>5</td>
		<td>15</td>
		<td>0,84</td>
		<td>0,7056</td>
		<td>10,584</td>
	</tr>
	<tr>
		<td>9</td>
		<td>6</td>
		<td>4,84</td>
		<td>23,4256</td>
		<td>140,5536</td>
	</tr>
	<tr>
		<td><strong>Totales</strong></td>
		<td><strong>31</strong></td>
		<td></td>
		<td></td>
		<td><strong>324,1936</strong></td>
	</tr>
</table>

Por tanto, la varianza es $324,1936 / 31 = 10,45$.
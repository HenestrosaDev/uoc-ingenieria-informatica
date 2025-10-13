# [RESUMEN] Estadística descriptiva: Introducción al análisis de datos - Medidas de centro y propiedades

## Índice

- [1. La moda](#1-la-moda)
- [2. La mediana](#2-la-mediana)
- [3. La media](#3-la-media)
	- [3.1. La media como valor central](#31-la-media-como-valor-central)
	- [3.2. Efecto de los valores alejados](#32-efecto-de-los-valores-alejados)
	- [3.3. Efecto de las transformaciones lineales](#33-efecto-de-las-transformaciones-lineales)
- [4. Comparación media-mediana](#4-comparación-media-mediana)
- [5. Medidas de centro y datos tabulados](#5-medidas-de-centro-y-datos-tabulados)


## 1. La moda

Valor más repetido; es decir, el que tiene una mayor frecuencia.

**Ejemplo**:

2, 2, 3, 4, 4

Las modas son 2 y 4, ya que ambos tienen la mayor frecuencia: 2.

## 2. La mediana

Valor numérico que ocupa el lugar central una vez ordenadas las observaciones de menor a mayor.

Pasos para su cálculo ($N$ es el número de observaciones):

1. Ordenar las observaciones de menos a mayor.
2. Si $N$ es impar, la posición de la mediana es $(N + 1) / 2$.
3. Si $N$ es par, calculamos $(N + 1) / 2$ y la mediana será el valor medio de las dos observaciones que ocupan los lugares más cercanos a $(N + 1) / 2$. Por ejemplo, si el resultado es 4.5, se hace la media del valor de la posición 4 y 5.

## 3. La media

Valor medio de todas las observaciones de una variable. Se denota por $\overline{x}$.

### 3.1. La media como valor central

Las diferencias entre los valores de las observaciones y su media ($x_i - \overline{x}$) son **desviaciones con respecto a la media**.

**Ejemplo**:

Dados los valores 0, 1, 4 y 7, cuya media es $\overline{x} = 3$, calculamos sus desviaciones:

<table>
	<tr>
		<th>$x_i$</th>
		<th>$(x_i - \overline{x}) = (x_i - 3)$</th>
	</tr>
	<tr>
		<td>0</td>
		<td>-3</td>
	</tr>
	<tr>
		<td>1</td>
		<td>-2</td>
	</tr>
	<tr>
		<td>4</td>
		<td>1</td>
	</tr>
	<tr>
		<td>7</td>
		<td>4</td>
	</tr>
	<tr>
		<td><strong>Total</strong></td>
		<td><strong>-3 - 2 + 1 + 4 = 0</strong></td>
	</tr>
</table>

![](https://github-production-user-asset-6210df.s3.amazonaws.com/60482743/500277687-997883c9-db7e-40e9-80f0-00fe8618f77b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20251012%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251012T165429Z&X-Amz-Expires=300&X-Amz-Signature=aaee3142ce5b8459372841523be9b8b8bad2ea92e3a5d77f4af522bcccde1d2c&X-Amz-SignedHeaders=host)

### 3.2. Efecto de los valores alejados

La media es sensible a los valores extremos, especialmente cuando hay pocos datos, lo que la hace poco robusta.

### 3.3. Efecto de las transformaciones lineales

1. Si todas las observaciones son iguales, la media coincide con el valor de las observaciones.
2. Si sumamos un mismo número a todas las observaciones, la media aumenta en este mismo número.
3. Si multiplicamos todas las observaciones por un mismo número, la media se multiplica por este número.

## 4. Comparación media-mediana

- Usar **mediana** si hay outliers o distribución sesgada.
- Usar **media** si los datos son simétricos y sin extremos.

## 5. Medidas de centro y datos tabulados

**Ejemplo**:

Se ha hecho un estudio del tiempo (en segundos) que tarda un internauta en salir de la página a partir del momento en la que aparece una foto, y se han obtenido los resultados siguientes:

<table>
	<tr>
		<th>CLASE</th>
		<th>$m_i$</th>
		<th>$f_i$</th>
	</tr>
	<tr>
		<td>[0,1)</td>
		<td>0,5</td>
		<td>80%</td>
	</tr>
	<tr>
		<td>[1,5)</td>
		<td>3</td>
		<td>10%</td>
	</tr>
	<tr>
		<td>[5,15)</td>
		<td>10</td>
		<td>10%</td>
	</tr>
</table>

- **Media**: $\overline{x} = 80\% \cdot 0,5 + 10\% \cdot 3 + 10\% \cdot 10 = 1,7 \text{ segundos}$
# RESUMEN Sucesiones y series de números reales

## Índice

>[!NOTE]
>El apartado **1. Introducción a las sucesiones y las series** es omitido, ya que su contenido es redundante respecto al resto de apartados desarrollados.

- [2. Definición de _sucesión_](#2-definición-de-sucesión)
	- [2.1. Series de números reales](#21-series-de-números-reales)
- [3. Límites de sucesiones](#3-límites-de-sucesiones)
	- [3.1. Álgebra de límites](#31-álgebra-de-límites)
	- [3.2. Indeterminaciones](#32-indeterminaciones)
		- [3.2.1. Indeterminaciones del tipo $\infty - \infty$](#321-indeterminaciones-del-tipo-infty---infty)
			- [Caso 1: Finito](#caso-1-finito)
			- [Caso 2: Infinito](#caso-2-infinito)
			- [Caso 3: No existe (oscilación o indefinido)](#caso-3-no-existe-oscilación-o-indefinido)
			- [¿Cómo resolver estas indeterminaciones?](#cómo-resolver-estas-indeterminaciones)
		- [3.2.2. Indeterminaciones del tipo $0 \cdot \infty$, $\frac{0}{0}$ y $\frac{\infty}{\infty}$](#322-indeterminaciones-del-tipo-0-cdot-infty-frac00-y-fracinftyinfty)
		- [3.2.3. Indeterminaciones del tipo $1^{\infty}$: el número $e$](#323-indeterminaciones-del-tipo-1infty-el-número-e)
- [4. Progresiones](#4-progresiones)
	- [4.1. Progresiones aritméticas](#41-progresiones-aritméticas)
	- [4.2. Progresiones geométricas](#42-progresiones-geométricas)
	- [4.3. Progresiones armónicas](#43-progresiones-armónicas)
		- [4.3.1. Serie armónica](#431-serie-armónica)
- [5. Recurrencias lineales](#5-recurrencias-lineales)

<br>

## 2. Definición de _sucesión_

Una **sucesión de números reales** $(a_n)_{n \ge 0}$ es una colección ordenada de valores reales. Tiene como dominio el conjunto de los números naturales $a: \mathbb{N} \to \mathbb{R}$, $a(n)=a_n$.

### 2.1. Series de números reales

Una **serie** asociada a una sucesión es una suma infinita de términos de dicha sucesión. 

Definición de sumas parciales:

$$S_n = a_0 + a_1 + a_2 + \cdots + a_n$$

Definición de la suma total de todos los términos (**suma de la serie**):

$\sum_{n=0}^{\infty} a_n$

## 3. Límites de sucesiones

El **límite** de una sucesión de números reales describe el comportamiento de sus términos cuando el índice tiende al infinito. Intuitivamente, si los términos de una sucesión se acercan cada vez más a un número fijo, se dice que la sucesión tiene un límite, y que converge a ese número.

Una sucesión puede:
- **Converger**
	$$a_n = \frac{1}{n}, \quad \lim_{n \to \infty} a_n = 0$$  
	$$a_n = \frac{2n + 1}{n + 3}, \quad \lim_{n \to \infty} a_n = 2$$
- **Diverger**
	$$a_n = n, \quad \lim_{n \to \infty} a_n = \infty \text{no converge en } \mathbb{R}$$
- **Oscilar** (no tiene límite)
	$$a_n = (-1)^n \quad \text{oscila entre 1 y -1, no tiene límite}$$

### 3.1. Álgebra de límites

Si $\lim a_n = A$ y $\lim b_n = B$, entonces:

- $\lim_{n \to \infty} (a_n + b_n) = A + B$
- $\lim_{n \to \infty} (a_n - b_n) = A - B$
- $\lim_{n \to \infty} (a_n \cdot b_n) = A \cdot B$
- $\lim_{n \to \infty} (\frac{a_n}{b_n}) = \frac{A}{B}, \text{si} B \neq 0$
- $\lim_{n \to \infty} (a_n)^k = A^k \quad (\text{para } k \exists \mathbb{N})$ 
- $\lim_{n \to \infty} \sqrt[k]{a_n} = \sqrt[k]{A} \quad (\text{si } a_n \ge 0 eventualmente)$ 
- Límites de constantes: $\lim c = c$
- Si $a_n \le b_n$ para todo $n$, entonces $\lim_{a_n} \le \lim_{b_n}$

### 3.2. Indeterminaciones

#### 3.2.1. Indeterminaciones del tipo $\infty - \infty$

Tipos:
- **Finito** (ej. 5, 0, etc.)
- **Infinito** (positivo o negativo)
- **No existir** (oscila, diverge, etc.)

##### Caso 1: Finito

$$a_n = n + 1, \quad b_n = n \quad \Rightarrow \lim (a_n - b_n) = \lim (n + 1 - n) = 1$$

##### Caso 2: Infinito

$$a_n = 2n, \quad b_n = n \quad \Rightarrow \lim (a_n - b_n) = \lim (2n - n) = \infty$$

##### Caso 3: No existe (oscilación o indefinido)

$$a_n = n + (-1)^n, \quad b_n = n \quad \Rightarrow \lim (a_n - b_n) = \lim ((-1)^n)$$

No existe porque oscila entre 1 y -1.

##### ¿Cómo resolver estas indeterminaciones?

Debes **transformar la expresión** para evitar la forma $\infty - \infty$. Algunos métodos útiles:

1. **Factorizar** términos comunes.
2. **Racionalizar** si hay raíces.
3. **Combinar en una fracción común**.
4. **Usar desarrollos de Taylor** (en funciones).
5. **Aplicar el teorema del sándwich** si se puede acotar.

#### 3.2.2. Indeterminaciones del tipo $0 \cdot \infty$, $\frac{0}{0}$ y $\frac{\infty}{\infty}$

Mirar el [resumen de la PEC2](../../pec2/recursos/README.md).

#### 3.2.3. Indeterminaciones del tipo $1^{\infty}$: el número $e$

Mirar el [resumen de la PEC2](../../pec2/recursos/README.md).

## 4. Progresiones

Una **progresión** es una sucesión ordenada de números que siguen una regla fija de formación entre términos consecutivos. Las más comunes son:

### 4.1. Progresiones aritméticas

Progresión en la que **cada término se obtiene sumando una constante** al término anterior.

**Fórmula general**:

$$a_n = a_0 + d \cdot n, \quad n \ge 0$$

**Fórmula de recurrencia**:

$$a_{n + 1} = a_n + d, \quad n \ge 0$$

Donde:
- $a_n$: término general.
- $n$: índice del término dentro de la progresión.
- $d$: diferencia común.

<br>

**Suma de los primeros $n$ términos**:

$$S_n = \frac{n}{2}(a_1 + a_n) \quad \text{o} \quad S_n = \frac{n}{2}\left[2a_1 + (n - 1)d\right]$$

<br>

**Límite de la progresión**:

Si $d \neq 0$, siempre son **divergentes**: $\lim_{n \to + \infty} a_0 + d \cdot n = \text{signo}(d) \infty$

<br>

**Ejemplo**:

La suma de los números naturales hasta $n = 1000$ es:

$$(0 + 1 + 2 + \dots + 1000) = \sum_{n=0}^{1000} n = \frac{1000}{2} \cdot 1001 = 500500$$

### 4.2. Progresiones geométricas

Progresión en la que **cada término se obtiene multiplicando por una constante** al término anterior.

**Fórmula general**:

$$a_n = a_0 \cdot r^{n}, \quad n \ge 0$$

**Fórmula de recurrencia**:

$$a_{n + 1} = a_n \cdot r, \quad n \ge 0$$

Donde:
- $a_n$: término general.
- $n$: índice del término dentro de la progresión.
- $r$: razón común.

<br>

**Suma de los primeros $n$ términos** (si $r \neq 1$):

$$S_n = a_0 \frac{1 - r^{n + 1}}{1 - r}, \quad r \neq 1$$

<br>

**Límite de la progresión**:

- Son **convergentes** en 0 para $|r| < 1$ 
- Son **convergentes** en 1 para $r = 1$.
- Son **divergentes** en 1 para $r > 1$.

<br>

**Ejemplo**:

La suma de la serie geométrica de razón $r = \frac{6}{7}$ es:

$$\sum_{n=0}^{\infty} \left ( \frac{6}{7} \right )^n = \frac{1}{1 - \frac{6}{7}} = 7$$

### 4.3. Progresiones armónicas

Sucesión $(a_n)_{n \ge 0}$ en que **cada término es el inverso de una progresión aritmética**.

**Fórmula general**:

$$a_n = \frac{1}{a + d \cdot n}, \quad n \ge 0$$

**Fórmula de recurrencia**:

$$a_{n + 1} = \frac{1}{\frac{1}{a_n} + d}, \quad n \ge 0$$

Donde:
- $a_n$: término general.
- $n$: índice del término dentro de la progresión.
- $d$: diferencia común de la progresión aritmética de los inversos.

<br>

**Suma de los primeros $n$ términos**:

Ver [4.3.1. Serie armónica](#431-serie-armónica).

<br>

**Límites de la progresión**:

Siempre convergentes hacia 0: $\lim_{n \to + \infty} \frac{1}{a + d \cdot n} = 0$

<br>

**Ejemplo**:

<table>
	<tr>
		<th>TÉRMINO GENERAL</th>
		<th>$a_0^{-1}$</th>
		<th>DIFERENCIA</th>
		<th>PRIMEROS TÉRMINOS</th>
	</tr>
	<tr>
		<td>$a_n = \frac{1}{2n - 1}$</td>
		<td>$a = -1$</td>
		<td>$d = 2$</td>
		<td>$-1,1,\frac{1}{3},\frac{1}{5},\frac{1}{7},\frac{1}{9},\frac{1}{11}, \dots \to 0$</td>
	</tr>
	<tr>
		<td>$a_n = \frac{1}{1 - 4n}$</td>
		<td>$a = 1$</td>
		<td>$d = -4$</td>
		<td>$1,- \frac{1}{3},- \frac{1}{7},- \frac{1}{11},- \frac{1}{15},- \frac{1}{19}, \dots \to 0$</td>
	</tr>
</table>

#### 4.3.1. Serie armónica

**Suma de los primeros $n$ términos**:

A partir de la progresión armónica $a_n = \frac{1}{n}, n \ge 1$ (los inversos de los números naturales mayores que 1), obtenemos:

$$\sum_{n \ge 1} \frac{1}{n^p}$$

Esta serie es convergente para $p > 1$ y divergente para $p \le q$.

### 5. Recurrencias lineales

Una **recurrencia lineal** es una relación que define cada término de una sucesión a partir de una **combinación lineal de términos anteriores**. 

De todas las ecuaciones recurrentes, las ecuaciones recurrentes lineales (homogéneas) las únicas que pueden resolverse. Tienen dos órdenes:

<table>
	<tr>
		<th>ORDEN</th>
		<th>FÓRMULA GENERAL</th>
		<th>FÓRMULA DE RECURRENCIA</th>
		<th>RELACIÓN DE RECURRENCIA</th>
		<th>DESARROLLO DE LA SUCESIÓN</th>
	</tr>
	<tr>
		<td><strong>1º orden</strong></td>
		<td>$a_{n + 1} = f(a_n, n), n \ge 0$, donde el primer término ($a_0$) es conocido.</td>
		<td>$f(x,n) = c_1 \cdot x \quad \text{o} \quad f(x,y,n) = c_1 \cdot x + c_2 \cdot y$ (progresión geométrica)</td>
		<td>$f(x,n)$</td>
		<td>$a_0, a_1 = f(a_0, 0), a_2 = f(a_1, 1), a_3 = f(a_2, 2), a_4 = f(a_3, 3), \dots$</td>
	</tr>
	<tr>
		<td><strong>2º orden</strong></td>
		<td>$a_{n+1} = f(a_n, a_{n-1}, n), n \ge 1$, donde los dos primeros términos ($a_0, a_1$) son conocidos.</td>
		<td>$a_{n+1} = c_1 \cdot a_n + c_2 \cdot a{n-1}, n \ge 1$</td>
		<td>$f(x,y,n)$</td>
		<td>$a_0, a_1, a_2 = f(a_1, a_0, 1), a_3 = f(a_2, a_1, 2), a_4 = f(a_3, a_2, 3), \dots$</td>
	</tr>
</table>

En el caso de la sucesiones **recurrentes lineales de segundo orden**, al aplicar el _principio de superposición_, la solución general $a_n$ se obtiene como una combinación lineal (con constantes $k_1$ y $k_2$) de las soluciones halladas:

- **Raíces diferentes** $r_1 \neq r_2$: El término general de la sucesión recurrente lineal de segundo orden es $a_n = k_1 \cdot r_1^n + k2 \cdot r_2^n, n \ge 0$, con $k_1$ y $k_2$ por determinar a partir de las condiciones iniciales $a_0$ y $a_1$.
- **Raíz doble** $r_1$: El término general de la sucesión recurrente lineal de segundo orden es $a_n = (k_1 + k_2 n) r_1^n, n \ge 0$, con $k_1$ y $k_2$ por determinar a partir de las condiciones iniciales $a_0$ y $a_1$.

El caso en el que la ecuación característica de segundo grado tiene raíces complejas conjugadas queda fuera del alcance de esta asignatura.

<br>

**Ejemplos de sucesiones recurrentes**:

<table>
	<tr>
		<th>RECURRENCIA</th>
		<th>DESCRIPCIÓN</th>
		<th>ORDEN</th>
	</tr>
	<tr>
		<td>$a_{n+1} = a_n + 2, n \ge 0, a_0 = 0$</td>
		<td>números pares</td>
		<td>primer orden</td>
	</tr>
	<tr>
		<td>$a_{n+1} = a_n + 2 a_n (1 - \frac{a_n}{100}), n \ge 0, a_0 = 1$</td>
		<td>logística discreta</td>
		<td>primer orden</td>
	</tr>
	<tr>
		<td>$a_{n+1} = a_n + a_{n-1}, n \ge 1, a_0 = 0, a_1 = 1$</td>
		<td>Fibonacci</td>
		<td>segundo orden</td>
	</tr>
</table>

Para la recurrencia lineal de segundo orden siguiente:

$$a_{n+1} = 5 a_n - 6 a_{n-1}, n \ge 1, \quad a_0 = 0, a_1 = -1$$

Buscamos soluciones del tipo $a_n = r^n$. Simplificando, los valores de $r$ serán las soluciones de:

$$r^2 = 5r - 6 \to r^2 - 5r + 6 = 0 \to r_1 = 2, r_2 = 3$$

Como hemos encontrado dos raíces reales diferentes, la solución de la ecuación recurrente es de la forma $a_n = k_1 \cdot 2^n + k_2 \cdot 3^n, n \ge 0$. Finalmente, para calcular las constantes $k_1$ y $k_2$, usamos las condiciones iniciales $a_0 = 0$ y $a_1 = -1$:

$$a_0 = k_1 \cdot 2^0 + k_2 \cdot 3^0 = 0, \quad a_1 = k_1 \cdot 2 + k_2 \cdot 3 = -1$$

Lo cual es un sistema lineal cuya solución es $k_1 = 1$ y $k_2 = -1$. Por lo tanto, el término general de la sucesión recurrente es:

$$a_n = 2^n - 3^n, n \ge 0$$
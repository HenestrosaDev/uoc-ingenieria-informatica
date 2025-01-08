# 12. Integración de funciones

## 12.1. Integración de una función

### 12.1.2. Definición e interpretación

**Definición**

La integración es la operación opuesta a la derivación. **Si $f(x)$ es la derivada de $F(x)$, entonces $F(x)$ es una primitiva de $f(x)$**.

Toda función de la forma $F(x) + C$ (donde $C$ es un número) también es una primitiva de $f(x)$. El conjunto de todas las primitivas de una función $f(x)$ se denomina **integral indefinida** o, simplemente, integral de la función $f(x)$.

**Expresión**

Para expresar la integración de una función, se utiliza el símbolo de integral $\int$ antepuesto a la función integrando y, a continuación, el símbolo $\mathrm{d}x$, denominado diferencial de $x$, que nos indica respecto de cuál variable integramos. Por lo tanto, la expresión de la integral indefinida de una función $f(x)$ es

<p>
	$$\int \! f(x) \, \mathrm{d}x$$
</p>

### 12.1.3. Tabla de integrales inmediatas

<table>
	<thead>
		<tr align="center">
			<td colspan="3">
				<strong>INTEGRALES INMEDIATAS</strong>
			</td>
		</tr>
		<tr align="center">
			<td><strong>$f(x)$</strong></td>
			<td><strong>$\int \! f(x) \, \mathrm{d}x$</strong></td>
			<td><strong>EJEMPLOS</strong></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>$k$ constante</td>
			<td>$k \cdot x + C$</td>
			<td>$\int \! 7 \, \mathrm{d}x = 7x + C$</td>
		</tr>
		<tr>
			<td>$x^n$ si $n \neq -1$</td>
			<td>$\frac{x^{n + 1}}{n + 1} + C$</td>
			<td>
				<p>$\int \! x^5 \, \mathrm{d}x = \frac{x^6}{6} + C$</p>
				<p>$\int \! 3x^{-\frac{2}{3}} \, \mathrm{d}x = 3 \cdot \frac{x^{\frac{1}{3}}}{\frac{1}{3}} + C = 9x^{\frac{1}{3}} + C$</p>
				<p>$\int \! \left( 5x \cdot \sqrt{x} \right) \, \mathrm{d}x = \int \! \left( 5x \cdot x^{\frac{1}{2}} \right) \, \mathrm{d}x = \frac{10}{3}x^\frac{3}{2} + C$</p>
			</td>
		</tr>
		<tr>
			<td>$\frac{1}{x}$</td>
			<td>$\ln (x) + C$</td>
			<td>$\int \! \frac{5}{x} \, \mathrm{d}x = 5\ln (x) + C$</td>
		</tr>
		<tr>
			<td>$a^{kx}$</td>
			<td>$\frac{a^{kx}}{k \ln (a)} + C$</td>
			<td>
				<p>$\int \! 2^{2x} \, \mathrm{d}x = \frac{2^{2x}}{2 \ln(2)} + C$</p>
				<p>$\int \! e^{3x} \, \mathrm{d}x = \frac{e^{3x}}{3} + C$</p>
			</td>
		</tr>
		<tr>
			<td>$\cos(kx)$</td>
			<td>$\frac{1}{k} \sin(kx) + C$</td>
			<td>$\int \! 5\cos(2x) \, \mathrm{d}x = \frac{5}{2}\sin(2x) + C$</td>
		</tr>
		<tr>
			<td>$\sin(kx)$</td>
			<td>$\frac{1}{k} \cdot (-\cos(x)) + C$</td>
			<td>$\int \! -3\sin(4x) \, \mathrm{d}x = \frac{3}{4}\cos(4x) + C$</td>
		</tr>
		<tr>
			<td>$\frac{1}{\sqrt{1 - x^2}}$</td>
			<td>$\arcsin (x) + C$</td>
			<td>$\int \! \frac{1}{\sqrt{1 - (2x)^2}} \, \mathrm{d}x = \frac{1}{2}\arcsin(2x) + C$</td>
		</tr>
		<tr>
			<td>$\frac{-1}{\sqrt{1 - x^2}}$</td>
			<td>$\arccos (x) + C$</td>
			<td>$\int \! \frac{-3}{\sqrt{1 - (3x)^2}} \, \mathrm{d}x = -\arccos(3x) + C$</td>
		</tr>
		<tr>
			<td>$\frac{1}{1 + x^2}$</td>
			<td>$\arctan (x) + C$</td>
			<td>$\int \! \frac{2}{1 + \left( \frac{x}{2} \right)^2} \, \mathrm{d}x = 2\arctan \left( \frac{x}{2} \right) + C$</td>
		</tr>
	</tbody>
</table>

### 12.1.4. Reglas de cálculo

<p>
	$$\text{Si } g(x) = \int \! f(x) \, \mathrm{d}x \implies g\prime(x) = f(x)$$
</p>

**Suma y resta**

<p>
	$$\int \! \left[ f(x) \pm g(x) \right] \, \mathrm{d}x = \int \! f(x) \, \mathrm{d}x \pm \int \! g(x) \, \mathrm{d}x$$
</p>

**Producto**

<p>
	$$\int \! k \cdot f(x) \, \mathrm{d}x = k \cdot \int \! f(x) \, \mathrm{d}x$$
</p>

**Regla de la cadena**

<p>
	$$\int \! f(g(x)) \cdot g\prime(x) \, \mathrm{d}x = f(g(x)) + C$$
</p>

A partir de esta regla, podemos elaborar esta tabla:

<table>
	<thead>
		<tr align="center">
			<td colspan="3">
				<strong>INTEGRALES CASI INMEDIATAS</strong>
			</td>
		</tr>
		<tr align="center">
			<td><strong>INTEGRAL</strong></td>
			<td><strong>EJEMPLOS</strong></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>$\int \! \left[ f(x) \right ]^n \cdot f\prime(x) \, \mathrm{d}x = \frac{\left[ f(x) \right]^{n + 1}}{n + 1} + C$ si $n \neq 1$</td>
			<td>$\int \! \left[ \sin(x) \right ]^4 \cdot \cos(x) \, \mathrm{d}x = \frac{\left[ \sin(x) \right]^{5}}{5} + C$</td>
		</tr>
		<tr>
			<td>$\int \! \frac{f\prime(x)}{f(x)} \, \mathrm{d}x = \ln |f(x)| + C$</td>
			<td>$\int \! \frac{2x - 3}{x^2 - 3x + 13} \, \mathrm{d}x = \ln \left\lvert x^2 - 3x + 12 \right\rvert + C$</td>
		</tr>
		<tr>
			<td>$\int \! e^{f(x)} \cdot f\prime(x) \, \mathrm{d}x = e^{f(x)} + C$</td>
			<td>$\int \! e^{4x^2 + 3x - 2} \cdot (8x + 3) \, \mathrm{d}x = e^{4x^2 + 3x - 2} + C$</td>
		</tr>
		<tr>
			<td>$\int \! a^{f(x)} \cdot f\prime(x) \, \mathrm{d}x = \frac{a^{f(x)}}{\ln (a)} + C$</td>
			<td>$\int \! 5^{4x^2 + 3x - 2} \cdot (8x + 3) \, \mathrm{d}x = \frac{5^{4x^2 + 3x - 2}}{\ln (5)} + C$</td>
		</tr>
		<tr>
			<td>$\int \! f\prime(x)^{f(x)} \cdot \sin (f(x)) \, \mathrm{d}x = -\cos (f(x)) + C$</td>
			<td>$\int \! \cos (x) \cdot \sin (\sin(x)) \, \mathrm{d}x = -\cos (\sin (x)) + C$</td>
		</tr>
		<tr>
			<td>$\int \! f\prime(x)^{f(x)} \cdot \cos (f(x)) \, \mathrm{d}x = \sin (f(x)) + C$</td>
			<td>$\int \! 6 \cdot \cos (6x - 2) \, \mathrm{d}x = \sin (6x - 2) + C$</td>
		</tr>
		<tr>
			<td>$\int \! \frac{f\prime(x)}{1 + (f(x))^2}  \, \mathrm{d}x = \arctan (f(x)) + C$</td>
			<td>$\int \! \frac{\frac{1}{x}}{1 + (\ln (x))^2}  \, \mathrm{d}x = \arctan (\ln (x)) + C$</td>
		</tr>
		<tr>
			<td>$\int \! \frac{f\prime(x)}{\sqrt{1 - (f(x))^2}}  \, \mathrm{d}x = \arcsin (f(x)) + C$</td>
			<td>$\int \! \frac{e^x}{\sqrt{1 - (e^x)^2}}  \, \mathrm{d}x = \arcsin (e^x) + C$</td>
		</tr>
	</tbody>
</table>

### 12.1.5. Métodos de integración

**Método de sustitución**

Método para transformar una integral en una integral inmediata o casi inmediata mediante un cambio de variable. Los pasos a seguir son:

1. Sustituimos $x$ por $u(t)$ y $\mathrm{d}x$ por $u\prime(t) \mathrm{d}t$:

<p>
	$$\int \! f(x) \, \mathrm{d}x \overset{\mathrm{d}x = u\prime(t) \mathrm{d}t}{\underset{x = u(t)}{\longrightarrow}} \int \! f(u(t)) \cdot u\prime(t) \, \mathrm{d}t$$
</p>

2. Resolvemos la nueva integral:

<p>
	$$\int \! f(u(t)) \cdot u\prime(t) \, \mathrm{d}t = G(t) + C$$
</p>

3. Aislamos la variable $t$ de la igualdad $x = u(t)$ y obtenemos $t = u^{-1}(x)$.

4. Deshacemos el cambio y obtenemos:

<p>
	$$\int \! f(x) \, \mathrm{d}t = G(u^{-1}(x)) + C$$
</p>

**Método de integración por partes**

Método para transformar un integral en una integral inmediata o casi inmediata a partir de la regla de la derivación del producto.

<p>
	$$(f(x) \cdot g(x))\prime = f\prime(x) \cdot g(x) + f(x) \cdot g\prime(x)$$
</p>

Si integramos a los dos lados y los reescribimos, obtenemos:

<p>
	$$\int \! \left[ f(x) \cdot g\prime(x) \right] \, \mathrm{d}x = (f(x) \cdot g(x)) - \int \! \left[ f\prime(x) \cdot g(x) \right] \, \mathrm{d}x$$
</p>

### 12.1.6. Integral definida. Regla de Barrow

Sirve para calcular el área encerrada por una función y el eje X en un cierto intervalo. Esta área se puede aproximar sumando ciertos rectángulos cuya base sea constante y la altura el valor de la función en ciertos puntos elegidos convenientemente. El límite de este cálculo cuando la base de estos rectángulos tiende a $0$ es igual a la integral definida de esta función en este intervalo, es decir, el área que buscamos.

El cálculo de la integral definida se facilita a partir de la **regla de Barrow**:

Si $f(x)$ es una función continua en $[a,b]$ y $F(x)$ es una primitiva cualquiera de $f(x)$,

<p>
	$$\int_a^b \! f(x) \, \mathrm{d}x = F(b) - F(a)$$
</p>

## 12.2. Aplicaciones

### 12.2.1. Cálculo de áreas

1. **Cálculo de área entre $f(x)$ y el eje X** si $f(x) \ge 0$ en el intervalo $[a,b]$.

<p>
	$$A = \int_a^b \! f(x) \, \mathrm{d}x$$
</p>

2. **Cálculo de área $f(x)$ y el eje X** si $f(x) \le 0$ en el intervalo $[a,b]$.

<p>
	$$A = -\int_a^b \! f(x) \, \mathrm{d}x$$
</p>

- De hecho, podemos unir los dos casos anteriores añadiendo un valor absoluto:

<p>
	$$A = \left\lvert \int_a^b \! f(x) \, \mathrm{d}x \right\rvert$$
</p>

3. **Cálculo de área $f(x)$ y el eje X** si $f(x)$ **cambia de signo en el intervalo** $[a,b]$. Así, si tenemos, por ejemplo, 3 raíces $x_1, x_2, x_3$ en el intervalo $[a,b]$ tales que $x_1 < x_2 < x_3$, el área que buscamos es

<p>
	$$A = \left\lvert \int_{a}^{x_1} \! f(x) \, \mathrm{d}x \right\rvert + \left\lvert \int_{x_1}^{x_2} \! f(x) \, \mathrm{d}x \right\rvert + \left\lvert \int_{x_2}^{x_3} \! f(x) \, \mathrm{d}x \right\rvert + \left\lvert \int_{x_3}^{b} \! f(x) \, \mathrm{d}x \right\rvert$$
</p>

4. **Cálculo de área entre dos curvas $f(x)$ y $g(x)$ en el intervalo $[a,b]$**. Podemos aplicar los casos anteriores con una sola función considerando la función diferencia $f(x) - g(x)$. Igual que hemos hecho antes, tendremos que separar los casos según si la diferencia es siempre positiva, siempre negativa o bien si cambia de signo dentro del intervalo $[a, b]$, y en este caso tendremos que separar el intervalo $[a,b]$ en subintervalos cuyos extremos son los puntos en donde la diferencia de las funciones cambia de signo.

5. **Cálculo de área entre dos curvas $f(x)$ y $g(x)$**. En este caso, a diferencia de los anteriores, no nos limita el intervalo, y por lo tanto tendremos que estudiar los puntos en donde se cortan las dos funciones para encontrar los límites de integración. Por lo tanto, tendremos que resolver la ecuación $f(x) = g(x)$ y calcular el área de cada región limitada entre dos puntos de corte seguidos.

### 12.2.2. Cálculo de volúmenes

Si $f(x)$ es una función positiva en un intervalo $[a,b]$, el cálculo del volumen de la figura se obtiene al girar sobre el eje X esta función, o sea que la figura de revolución que tiene por generatriz la función $f(x)$ se puede calcular a partir de una integral.

<p>
	$$V = \int_{a}^{b} \! \pi \cdot \left[ f(x) \right]^2 \, \mathrm{d}x = \pi \int_{a}^{b} \! \left[ f(x) \right]^2 \, \mathrm{d}x$$
</p>

En consecuencia, calcular el volumen de una figura de revolución generada por el área encerrada por dos funciones, $f(x)$ y $g(x)$, en el intervalo $[a,b]$, de manera que $f(x)$, $g(x) \ge 0$.

<p>
	$$V = \pi \left\lvert \int_{a}^{b} \! (f(x))^2 \, \mathrm{d}x - \pi \int_{a}^{b} \! (g(x))^2 \, \mathrm{d}x \right\rvert = \pi \left\lvert \int_{a}^{b} \! \left[ (f(x))^2 - (g(x))^2 \right] \, \mathrm{d}x \right\rvert$$
</p>
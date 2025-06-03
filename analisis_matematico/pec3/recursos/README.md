# RESUMEN Derivación: el problema de la tangente

## Índice

>[!NOTE]
>He eliminado los apartados más teóricos, como la definición formal de una derivada, ya que prefiero ceñirme al proceso de resolución de derivadas y a afrontar el contenido de la PEC y del examen.  
>He invertido el orden del apartado **3.1.** y **3.1.1.** respecto al de los apuntes, ya que me parece más lógico introducir la fórmula de Taylor a partir del polinomio de Taylor. 

- [1. Derivación](#1-derivación)
	- [1.3. Función derivada](#13-función-derivada)
		- [1.3.2. Reglas de derivación](#132-reglas-de-derivación)
		- [1.3.3. Regla de la cadena](#133-regla-de-la-cadena)
		- [1.3.4. Derivada de la función inversa](#134-derivada-de-la-función-inversa)
		- [1.3.5. Tabla de derivadas](#135-tabla-de-derivadas)
	- [1.4. Derivadas laterales](#14-derivadas-laterales)
	- [1.5. Derivadas sucesivas](#15-derivadas-sucesivas)
- [2. Aplicaciones de las derivadas](#2-aplicaciones-de-las-derivadas)
- [3. Aproximación por polinomio de Taylor](#3-aproximación-por-polinomio-de-taylor)
	- [3.1. Polinomio de Taylor](#31-polinomio-de-taylor)
		- [3.1.1. Fórmula de Taylor](#311-fórmula-de-taylor)
		- [3.1.2. Una aproximación al número pi](#32-una-aproximación-al-número-pi)

<br>

## 1. Derivación

### 1.3. Función derivada

Dada una función $f(x)$, su **función derivada** $f' (x)$ es otra función que asigna a cada punto $x$ la derivada de $f(x)$ en ese punto. Es decir, la función derivada expresa la **tasa de cambio instantánea** de $f(x)$ en términos de $x$.

#### 1.3.2. Reglas de derivación

**Suma y resta**

$(f(x) ± g(x))' = f'(x) ± g'(x)$

**Producto**

$(f(x) \cdot g(x))' = f'(x) \cdot g(x) + f(x) \cdot g'(x)$

**Cociente**

$\left(\frac{f(x)}{g(x)}\right)' = \frac{f'(x) \cdot g(x) − f(x) \cdot g'(x)}{g^2(x)}$

#### 1.3.3. Regla de la cadena

La **regla de la cadena** es una fórmula para calcular la derivada de una función **compuesta** (una función dentro de otra).

**Enunciado formal**

Si $y = f(g(x))$ es una función compuesta, donde:

- $g(x)$ es una función diferenciable,
- $f(x)$ es una función diferenciable con $u = g(x)$,

entonces la derivada de $y$ con respecto a $x$ es:

$$\frac{\mathrm{d}}{\mathrm{d}x} f(g(x)) = f' (g(x)) \cdot g' (x)$$

$$(f ○ g)' (x) = (f(g(x)))' = f'(g(x)) \cdot g'(x)$$

<br>

**Ejemplo 1: Derivada de $(3x^2 + 2)^5$**

Sea $f(x) = (3x^2 + 2)^5$, definimos:

- $f(u) = u^5$
- $u = g(x) = 3x^2 + 2$

Derivadas:

- $\frac{\mathrm{d}f}{\mathrm{d}u} = 5u^4$
- $\frac{\mathrm{d}u}{\mathrm{d}x} = 6x$

Aplicamos la regla de la cadena:

$$\frac{\mathrm{d}}{\mathrm{d}x} (3x^2 + 2)^5 = \frac{\mathrm{d}f}{\mathrm{d}u} \cdot \frac{\mathrm{d}u}{\mathrm{d}x} = 5(3x^2 + 2)^4 \cdot (6x) = 30x(3x^2 + 2)^4$$

<br>

**Ejemplo 2: Derivada de $e^{\sin x}$**

Sea $f(x) = e^{\sin x}$, definimos:

- $f(u) = e^u$
- $u = g(x) = \sin x$

Derivadas:

- $\frac{\mathrm{d}f}{\mathrm{d}u} = e^u$
- $\frac{\mathrm{d}u}{\mathrm{d}x} = \cos (x)$

Aplicamos la regla de la cadena:

$$\frac{\mathrm{d}}{\mathrm{d}x} e^{\sin x} = \frac{\mathrm{d}f}{\mathrm{d}u} \cdot \frac{\mathrm{d}u}{\mathrm{d}x} = e^{\sin x} \cdot \cos x$$

<br>

**Ejemplo 3: Derivada de $\ln (2x^3 + 5)$**

Sea $f(x) = \ln (2x^3 + 5)$, definimos:

- $f(u) = \ln u$
- $u = g(x) = 2x^3 + 5$

Derivadas:

- $\frac{\mathrm{d}f}{\mathrm{d}u} = \frac{1}{u}$
- $\frac{\mathrm{d}u}{\mathrm{d}x} = 6x^2$

Aplicamos la regla de la cadena:

$$\frac{\mathrm{d}}{\mathrm{d}x} \ln (2x^3 + 5) = \frac{\mathrm{d}f}{\mathrm{d}u} \cdot \frac{\mathrm{d}u}{\mathrm{d}x} = \frac{1}{2x^3 + 5} \cdot (6x^2) = \frac{6x^2}{2x^3 + 5}$$

#### 1.3.4. Derivada de la función inversa

Si $y = f(x)$ es una función **biyectiva** y **derivable**, y $f^{-1} (y)$ es su inversa, entonces:

$$\boxed{\frac{\mathrm{d}}{\mathrm{d}x} [f^{-1} (y)] = \frac{1}{f'(x)}}$$

En términos de $y$:

$$\frac{\mathrm{d}}{\mathrm{d}x} f^{-1}(y) = \frac{1}{f'(f^{-1}(x))}$$

<br>

**Ejemplo 1: Derivada de $f^{-1} (x) = \sqrt{x}$**

Sabemos que la función original es $f(x) = x^2$ (para $x \ge 0$), cuya derivada es:

$$f'(x) = 2x$$

La inversa de $f(x) = x^2$ es $f^{-1} (x) = \sqrt{x}$. Aplicamos la fórmula:

$$\frac{\mathrm{d}}{\mathrm{d}x} f^{-1} (x) = \frac{1}{f' (\sqrt{x})} = \frac{1}{2 \sqrt{x}}$$

Por lo tanto:

$$\frac{\mathrm{d}}{\mathrm{d}x} \sqrt{x} = \frac{1}{2 \sqrt{x}}$$

<br>

**Ejemplo 2: Derivada de $\ln x$ usando su inversa**

Sabemos que la función $f(x) = e^x$ tiene inversa $f^{-1} (x) = \ln x$, y la derivada de $e^x$ es:

$$f' (x) = e^x$$

Aplicamos la fórmula:

$$\frac{\mathrm{d}}{\mathrm{d}x} \ln x = \frac{1}{e^{\ln x}} = \frac{1}{x}$$

Confirmamos que:

$$\frac{\mathrm{d}}{\mathrm{d}x} \ln x = \frac{1}{x}$$

<br>

#### 1.3.5. Tabla de derivadas

| TIPO DE FUNCIÓN                  | EXPRESIÓN MATEMÁTICA          | FÓRMULA DE DERIVACIÓN                                                                    | EJEMPLO APLICADO                                                                                                                            |
| -------------------------------- | ----------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **Constante**                    | $k, k \in \mathbb{Z}$         | $0$                                                                                      | $f(x) = 5 \Rightarrow f'(x) = 0$                                                                                                            |
| **Lineal**                       | $a \cdot x, a \in \mathbb{R}$ | $a$                                                                                      | $f(x) = 7x \Rightarrow f'(x) = 7$ <br> $g(x) = -\frac{2}{3}x \Rightarrow g'(x) = -\frac{2}{3}$                                              |
| **Potencia**                     | $x^n, n \in \mathbb{Z}$       | $n \cdot x^{n-1}$                                                                        | $f(x) = x^5 \Rightarrow f'(x) = 5x^4$ <br> $g(x) = \frac{1}{x^3} \Rightarrow g'(x) = -\frac{3}{x^4}$                                        |
| **Exponencial (base constante)** | $a^{f(x)}, a \in \mathbb{R}$  | $a^{f(x)} \cdot \ln(a) \cdot f' (x)$                                                    | $f(x) = 2^{2x} \Rightarrow f'(x) = 2^{2x} \cdot \ln(2) \cdot 2$                                                                            |
| **Exponencial (base variable)**  | $f(x)^{g(x)}$                 | $f(x)^{g(x)} \left ( g' (x) \cdot \ln(f(x)) + \frac{g(x) \cdot f' (x)}{f(x)} \right )$ | $f(x) = x^{x} \Rightarrow f'(x) = x^x \left ( 1 \cdot \ln (x) + \frac{x \cdot 1}{x} \right ) = x^x (\ln (x) + 1)$                          |
| **Raíz n-ésima**                 | $\sqrt[n]{f(x)}$              | $\frac{f' (x)}{n \cdot \sqrt[n]{f(x)^{n-1}}}$                                           | $f(x) = \sqrt{-2x^5} \Rightarrow f'(x) = \frac{-5x^4}{\sqrt{-2x^5}}$ <br> $f(x) = \sqrt[3]{-2x^5} \Rightarrow \frac{-5 \sqrt[3]{2x^5}}{3x}$ |
| **Logarítmica (natural)**        | $\ln(f(x))$                   | $\frac{f' (x)}{x}$                                                                      | $f(x) = \ln(x^2) \Rightarrow f'(x) = \frac{2x}{x^2}$                                                                                        |
| **Logarítmica (base $a$)**       | $\log_a(f(x))$                | $\frac{f' (x)}{f(x) \ln (a)}$                                                           | $f(x) = \log_2(x^2) \Rightarrow f'(x) = \frac{2x}{x^2 \cdot \ln (2)}$                                                                       |
| **Seno**                         | $\sin(f(x))$                  | $f' (x) \cos(f(x))$                                                                     | $f(x) = \sin(2x) \Rightarrow f'(x) = 2\cos(2x)$                                                                                             |
| **Coseno**                       | $\cos(f(x))$                  | $-f' (x) \sin(f(x))$                                                                    | $f(x) = \cos(3x) \Rightarrow f'(x) = -3\sin(3x)$                                                                                            |
| **Tangente**                     | $\tan(f(x))$                  | $\frac{f' (x)}{\cos^2(f(x))}$ <br> $f' (x) + \tan^2(f(x))$                             | $f(x) = \tan(\frac{x}{2}) \Rightarrow f'(x) = \frac{1}{2\cos^2(\frac{x}{2})}$                                                               |
| **Arcoseno**                     | $\arcsin(f(x))$               | $\frac{f' (x)}{\sqrt{1-[f(x)]^2}}$                                                      | $f(x) = \arcsin(\frac{x}{2}) \Rightarrow f'(x) = \frac{1}{\sqrt{4-x^2}}$                                                                    |
| **Arcocoseno**                   | $\arccos(f(x))$               | $-\frac{f' (x)}{\sqrt{1-[f(x)]^2}}$                                                     | $f(x) = \arccos(\sqrt{x}) \Rightarrow f'(x) = -\frac{1}{2\sqrt{x}\sqrt{1-x}}$                                                               |
| **Arcotangente**                 | $\arctan(f(x))$               | $\frac{f' (x)}{1+[f(x)]^2}$                                                             | $f(x) = \arctan(3x) \Rightarrow f'(x) = \frac{3}{1+9x^2}$                                                                                   |

### 1.4. Derivadas laterales

Una derivada lateral es un tipo de derivada que analiza la tasa de cambio (pendiente de la recta tangente) de una función en un punto, pero solo desde un lado:

- **Por la derecha** ($h \to 0^+$)
- **Por la izquierda** ($h \to 0^-$)

Se utilizan cuando la función no es derivable en un punto en el sentido tradicional, pero puede tener comportamiento diferenciable por uno de sus lados.

<table>
	<thead>
		<tr>
			<th>CONCEPTO</th>
			<th>DEFINICIÓN</th>
			<th>INTERPRETACIÓN</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><strong>Derivada por la derecha</strong></td>
			<td>$f'_+ (a) = \lim_{h \to 0^+} \frac{f(a + h) - f(a)}{h}$</td>
			<td>
				<ul>
					<li>Pendiente de la recta tangente por la derecha</li>
					<li>Si $f'_+ (a)$ existe, $f$ es continua por la derecha en $a$</li>
					<li>Si $f'_+ (a)$ existe, entonces $f'_+ (a) = f'(a)$</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td><strong>Derivada por la izquierda</strong></td>
			<td>$f'_- (a) = \lim_{h \to 0^-} \frac{f(a + h) - f(a)}{h}$</td>
			<td>
				<ul>
					<li>Pendiente de la recta tangente por la izquierda</li>
					<li>Si $f'_- (a)$ existe, $f$ es continua por la izquierda en $a$</li>
					<li>Si $f'_- (a)$ existe, entonces $f'_- (a) = f'(a)$</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td><strong>Relación con derivada</strong></td>
			<td>
				$f$ es derivable en $a$ $\iff$ $f'_+(a) = f'_-(a)$ y existen finitas.
			</td>
			<td>$f'(a) = f'_+(a) = f'_-(a)$</td>
		</tr>
		<tr>
			<td><strong>Punto anguloso</strong></td>
			<td>Cuando $f'_+(a) \neq f'_-(a)$ (ej: $f(x) = |x|$ en $x = 0$)</td>
			<td>La derivada no existe en estos puntos</td>
		</tr>
		<tr>
			<td><strong>Punto con tangente vertical</strong></td>
			<td>
				Cuando $\lim_{h \to 0} \frac{f(a + h) - f(a)}{h} = \pm \infty$
				<br>
				O, de manera equivalente, $f'(a)$ no existe porque $\lim_{x \to f'(x)} \to \pm \infty$
			</td>
			<td>La función tiene una derivada infinita o una discontinuidad infinita (asintótica) en la derivada en $x = a$</td>
		</tr>
		<tr>
			<td><strong>Condición de diferenciabilidad</strong></td>
			<td>$f'_+ (a) = f'_- (a)$</td>
			<td>Si las derivadas laterales son diferentes, entonces la función no es diferenciable en $x = a$</td>
		</tr>
	</tbody>
</table>

<br>

**Ejemplo 1: Función valor absoluto $f(x) = |x|$**

Sabemos que:

$$
f(x) =
\begin{cases}
x,  & x \ge 0 \\
-x, & x < 0
\end{cases}
$$

**Derivada por la derecha** en $x = 0$:

$$f'_+(0) = \lim_{h \to 0^+} \frac{|0 + h| - |0|}{h} = \lim_{h \to 0^+} \frac{h}{h} = 1$$

**Derivada por la izquierda** en $x = 0$:

$$f'_- (0) = \lim_{h \to 0^-} \frac{|0 + h| - |0|}{h} = \lim_{h \to 0^-} \frac{-h}{h} = -1$$

Como $f'_+ (0) \neq f'_-(0)$, la función **no es diferenciable en $x = 0$**.

<br>

**Ejemplo 2: Función definida a trozos**

$$
f(x) =
\begin{cases}
x + 1, & x \ge 2 \\
x^2,   & x < 2
\end{cases}
$$

Calculamos las derivadas laterales en $x = 2$:

**Por la derecha**:

$$f'_+ (2) = \lim_{h \to 0^+} \frac{(2 + h) + 1 - (2 + 1)}{h} = \lim_{h \to 0^+} \frac{3 + h - 3}{h} = \lim_{h \to 0^+} \frac{h}{h} = 1$$

**Por la izquierda**:

$$f'_- (2) = \lim_{h \to 0^-} \frac{(2 + h)^2 - 2^2}{h}$$

Expandiendo $(2 + h)^2 = 4 + 4h + h^2$:

$$f'_- (2) = \lim_{h \to 0^-} \frac{4 + 4h + h^2 - 4}{h} = \lim_{h \to 0^-} \frac{4h + h^2}{h} = \lim_{h \to 0^-} (4 + h) = 4$$

Como $f'_+ (2) \neq f'_- (2)$, la función **no es diferenciable** en $x = 2$.

### 1.5. Derivadas sucesivas

## 2. Aplicaciones de las derivadas

<table>
	<tbody>
		<tr>
			<th>
				ELEMENTOS PARA EL ANÁLISIS GRÁFICO DE FUNCIONES
			</th>
			<th>
				EJEMPLO: $f(x) = \frac{x^3}{x^2 - 1}$
			</th>
		</tr>
		<tr>
			<td align="center" colspan="2">
				<strong>① DOMINIO</strong>
			</td>
		</tr>
		<tr>
			<td>
				<strong>Definición</strong>: Conjunto de valores de $x$ para los que $f(x)$ existe.
				<br>
				<strong>Método</strong>: Buscar valores que hagan cero el denominador o generen indefiniciones.
			</td>
			<td>
				$Dom\ f = \mathbb{R} \setminus \set{-1, 1}$
				<br>
				<strong>Explicación</strong>: El denominador $x^2 - 1 = 0$ cuando $x = \pm 1$
			</td>
		</tr>
		<tr>
			<td align="center" colspan="2"><strong>② PUNTOS DE CORTE</strong>
		</tr>
		<tr>
			<td>
				<strong>Con eje X</strong>: Raíces de $f(x) = 0$
				<br>
				<strong>Con eje Y</strong>: $(0, f(0))$
			</td>
			<td>
				<strong>Corte X</strong>: $(0,0)$ (triple raíz en $x = 0$)</li>
				<br>
				<strong>Corte Y</strong>: $(0,0)$ (único punto de corte)</li>
			</td>
		</tr>
		<tr>
			<td align="center" colspan="2">
				<strong>③ SIMETRÍA</strong>
			</td>
		</tr>
		<tr>
			<td>
				<strong>Función par</strong>: $f(-x) = f(x)$ (simetría axial)
				<br>
				<strong>Función impar</strong>: $f(-x) = -f(x)$ (simetría central)
			</td>
			<td>
				$f(-x) = \frac{(-x)^3}{(-x)^2 - 1} = -\frac{x^3}{x^2 - 1} = -f(x)$
				<br>
				<strong>Conclusión</strong>: Función impar (simétrica respecto al origen)
			</td>
		</tr>
		<tr>
			<td align="center" colspan="2">
				<strong>④ MONOTONÍA (CRECIMIENTO Y DECRECIMIENTO)</strong>
			</td>
		</tr>
		<tr>
			<td>
				<strong>Derivada primera</strong>:
				<ul>
					<li>$f'(x) > 0 \to$ Creciente</li>
					<li>$f'(x) < 0 \to$ Decreciente</li>
				</ul>
			</td>
			<td>
				$f'(x) = \frac{x^2(x^2 - 3)}{(x^2 - 1)^2}$
				<br>
				<strong>Crece en</strong> $(-\infty, -\sqrt{3}) \cup (\sqrt{3}, +\infty)$ 
				<br>
				<strong>Decrece en</strong> $(-\sqrt{3}, -1) \cup (-1, 1) \cup (1, \sqrt{3})$
			</td>
		</tr>
		<tr>
			<td align="center" colspan="2">
				<strong>⑤ EXTREMOS RELATIVOS (MÁXIMOS Y MÍNIMOS)</strong>
			</td>
		</tr>
		<tr>
			<td>
				<strong>Criterio</strong>:
				<ul>
					<li>Máximo si $f'(x_0) = 0$ y $f''(x_0) < 0$</li>
					<li>Mínimo si $f'(x_0) = 0$ y $f''(x_0) > 0$</li>
				</ul>
			</td>
			<td>
				<strong>Máximo</strong>: $(-\sqrt{3}, f(-\sqrt{3})) = \left(-\sqrt{3}, -\frac{3\sqrt{3}}{2}\right)$  
				<br>
				<strong>Mínimo</strong>: $\left(\sqrt{3}, f(\sqrt{3})) = (\sqrt{3}, \frac{3\sqrt{3}}{2}\right)$
				<br>
				<em>Nota</em>: No hay extremos en $x = \pm 1$ (no pertenecen al dominio)
			</td>
		</tr>
		<tr>
			<td align="center" colspan="2">
				<strong>⑥ CURVATURA (CONCAVIDAD Y CONVEXIDAD)</strong>
			</td>
		</tr>
		<tr>
			<td>
				<strong>Derivada segunda</strong>:
				<ul>
					<li>$f''(x) > 0 \to$ Convexa ($\cup$)</li>
					<li>$f''(x) < 0 \to $ Cóncava ($\cap$)</li>
				</ul>
			</td>
			<td>
				<strong>Convexa</strong> $\cup$: $(-\infty, -1) \cup (0, 1)$
				<br>
				<strong>Cóncava</strong> $\cap$: $(-1, 0) \cup (1, \infty)$
			</td>
		</tr>
		<tr>
			<td align="center" colspan="2">
				<strong>⑦ PUNTOS DE INFLEXIÓN</strong>
			</td>
		</tr>
		<tr>
			<td>
				<strong>Condición</strong>: $f''(x_0) = 0$ con cambio de curvatura (de cóncava a convexa o viceversa)
			</td>
			<td>
				<strong>Punto de inflexión</strong>: $(0, f(0)) = (0, 0)$
				<br>
				<em>Verificación:</em> $f''(0) = 0$ (cambia de cóncava a convexa)
			</td>
		</tr>
		<tr>
			<td align="center" colspan="2">
				<strong>⑧ ASÍNTOTAS</strong>
			</td>
		</tr>
		<tr>
			<td>
				<strong>Tipos:</strong>
				<ul>
					<li>Verticales</li>
					<li>Horizontales</li>
					<li>Oblicuas</li>
				</ul>
			</td>
			<td>
				<strong>Asíntotas verticales</strong>: $x = -1$ y $x = 1$ (al menos uno de los límites laterales cuando $x \to \pm 1 = \pm \infty$)
				<ul>
					<li>$\lim_{x \to -1^-} f(x) = -\infty$</li>
					<li>$\lim_{x \to -1^+} f(x) = +\infty$</li>
					<li>$\lim_{x \to 1^-} f(x) = -\infty$</li>
					<li>$\lim_{x \to 1^+} f(x) = +\infty$</li>
				</ul>
				<br>
				<strong>Asíntota horizontal</strong>: No hay (ambos límites tienen que ser finitos)
				<ul>
					<li>$\lim_{x \to -\infty} f(x) = -\infty$</li>
					<li>$\lim_{x \to +\infty} f(x) = +\infty$</li>
				</ul>
				<br>
				<strong>Asíntota oblicua</strong>: $y = x$
				<ul>
					<li>$m = \lim_{x \to \pm \infty} \frac{f(x)}{x} = 1$</li>
					<li>$n = \lim_{x \to \pm \infty} [f(x) - mx] = 0$</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td align="center" colspan="2">
				<strong>⑨ REPRESENTACIÓN GRÁFICA</strong>
			</td>
		</tr>
		<tr>
			<td colspan="2">
				<img 
					alt="Ejemplo de representación gráfica" 
					src="img/ejemplo_representacion_grafica.png"
				>
				<blockquote>Comportamiento completo de la función con todos los elementos analizados</blockquote>
			</td>
		</tr>
	</tbody>
</table>

### 2.3. Regla de L'Hôpital

La **Regla de L'Hôpital** es un método para evaluar límites que resultan en formas indeterminadas del tipo:

$$\frac{0}{0} \quad \text{o} \quad \frac{\infty}{\infty}$$

Si tenemos un límite de forma:

$$\lim_{x \to a} \frac{f(x)}{g(x)}$$

y resulta en una de las formas indeterminadas mencionadas y se cumplen estas condiciones:

1. Las funciones $f(x)$ y $g(x)$ deben ser **derivables** en un entorno del punto $a$ (excepto, posiblemente, en $a$ mismo).
2. La derivada del denominador $g'(x)$ no debe ser $0$ en un entorno de $a$.

Entonces, podemos calcular el límite como:

$$\boxed{\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}}$$

siempre que el límite del lado derecho exista o tienda a $\pm \infty$.

<br>

**Ejemplo 1: Límite con forma $\frac{0}{0}$**

Calculemos:

$$\lim_{x \to 0} \frac{\sin x}{x}$$

**Paso 1**: Evaluamos directamente:

$$\frac{\sin 0}{0} = \frac{0}{0} \quad \text{(forma indeterminada)}$$

**Paso 2**: Aplicamos L'Hôpital:

$$\lim_{x \to 0} \frac{\sin x}{x} = \lim_{x \to 0} \frac{\cos x}{1}$$

**Paso 3**: Evaluamos el nuevo límite:

$$\cos (0) = 1$$

Por lo tanto,

$$\lim_{x \to \infty} \frac{\sin x}{x} = 1$$

<br>

**Ejemplo 2: Límite con forma $\frac{\infty}{\infty}$**

Calculemos:

$$\lim_{x \to \infty} \frac{x}{e^x}$$

**Paso 1**: Evaluamos directamente:

$$\frac{\infty}{\infty} \quad \text{(forma indeterminada)}$$

**Paso 2**: Aplicamos L'Hôpital:

$$\lim_{x \to \infty} \frac{x}{e^x} = \lim_{x \to \infty} \frac{1}{e^x}$$

**Paso 3**: Evaluamos el nuevo límite:

$$\lim_{x \to \infty} \frac{1}{e^x} = 0$$

Por lo tanto:

$$\lim_{x \to \infty} \frac{x}{e^x} = 0$$

<br>

**Ejemplo 3: Aplicación repetida**

Calculemos:

$$\lim_{x \to 0} \frac{e^x - 1 - x}{x^2}$$

**Paso 1**: Evaluamos directamente:

$$\frac{e^0 - 1 - 0}{0^2} = \frac{0}{0} \quad \text{(forma indeterminada)}$$

**Paso 2**: Aplicamos L'Hôpital:

$$\lim_{x \to 0} \frac{e^x -1 - x}{x^2} = \lim_{x \to 0} \frac{e^x - 1}{2x}$$

**Paso 3**: Evaluamos nuevamente:

$$\frac{e^0 - 1}{2(0)} = \frac{0}{0} \quad \text{(otra vez indeterminado)}$$

**Paso 4**: Aplicamos L'Hôpital nuevamente:

$$\lim_{x \to 0} \frac{e^x - 1}{2x} = \lim_{x \to 0} \frac{e^x}{2} = \frac{1}{2}$$

Por lo tanto:

$$\lim_{x \to 0} \frac{e^x - 1 - x}{x^2} = \frac{1}{22}$$

## 3. Aproximación por polinomio de Taylor

El **polinomio de Taylor** es una herramienta matemática que permite aproximar una función $f(x)$ mediante un polinomio en torno a un punto $x = a$. Se basa en la idea de que si una función es lo suficientemente suave (es decir, tiene derivadas de todos los órdenes necesarios), entonces se puede escribir como una serie de términos polinomiales construidos a partir de sus derivadas en $a$.

### 3.1. Polinomio de Taylor

Para una función real $f(x)$ derivable $n \ge 1$ veces en un punto $a$, definimos el polinomio:

$$P_n(x) = f(a) + f'(a) (x - a) + \frac{f''(a)}{2!} (x - a)^2 + \cdots + \frac{f^{(n)} (a)}{n!} (x - a)^n$$

Si $n \to \infty$, el polinomio se convierte en una **Serie de Taylor**, que representa exactamente la función en el dominio donde converge.

<br>

**Ejemplo 1: Aproximación de $e^x$ en $x = 0$**

Sabemos que la función $e^x$ tiene derivadas de cualquier orden, y todas son iguales a $e^x$, por lo que:

$$f(x) = e^x, \quad f(0) = 1, \quad f'(0) = 1, \quad f''(0) = 1, \quad f'''(0) = 1, \quad \cdots$$

Aplicando la fórmula:

$$P_n(x) = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots + \frac{x^n}{n!}$$

Para $n = 3$:

$$P_3(x) = 1 + x + \frac{x^2}{2} + \frac{x^3}{6}$$

Este polinomio es una aproximación de $e^x$ cerca de $x = 0$.

<br>

**Ejemplo 2: Aproximación de $\sin x$ en $x = 0$**

La función $\sin x$ tiene derivadas:

$$f(x) = \sin x, \quad f(0) = 0$$  
$$f'(x) = \cos x, \quad f'(0) = 1$$  
$$f''(x) = -\sin x, \quad f''(0) = 0$$  
$$f'''(x) = -\cos x, \quad f'''(0) = -1$$  
$$f''''(x) = \sin x, \quad f''''(0) = 0$$  

El polinomio de Taylor de orden $5$ en $x = 0$ es:

$$P_5(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!}$$

Este polinomio es una aproximación de $\sin x$ cerca de $x = 0$.

#### 3.1.1. Fórmula de Taylor

La **Fórmula de Taylor** extiende la idea del Polinomio de Taylor al incluir el **término de error** ($R_n(x)$), que nos indica cuánto difiere $P_n(x)$ de $f(x)$. Se expresa como:

$$f(x) = P_n(x) + R_n(x)$$

donde $R_n(x)$ es el **término de error** o **resto de Lagrange**, dado por:

$$R_n(x) = \frac{f^{n+1}(c)}{(n + 1)!} (x - a)^{(n + 1)}$$

para algún $c$ entre $a$ y $x$.

📌 **Diferencias clave respecto al Polinomio de Taylor**:
- La **Fórmula de Taylor** nos da la función exacta sumando el término de error $R_n(x)$.
- Si el término de error $R_n(x) \to 0$ cuando $n \to \infty$, entonces la serie de Taylor converge a la función $f(x)$.

<br>

### Ejemplo 1: Aproximación de $\sqrt{4.1}$ usando Taylor

Queremos estimar $\sqrt{4.1}$ usando la Fórmula de Taylor centrada en $a = 4$.

**Paso 1: Definir la función**

$$f(x) = \sqrt{x} = x^{1/2}$$

**Paso 2: Calcular las primeras derivadas en $ x = 4 $**

$$f(x) = x^{1/2}$$

$$f'(x) = \frac{1}{2}x^{-1/2} = \frac{1}{2\sqrt{x}}$$

$$f''(x) = -\frac{1}{4}x^{-3/2} = -\frac{1}{4x^{3/2}}$$

$$f'''(x) = \frac{3}{8}x^{-5/2} = \frac{3}{8x^{5/2}}$$

Evaluamos en $ x = 4 $:

$$f(4) = \sqrt{4} = 2$$

$$f'(4) = \frac{1}{2\sqrt{4}} = \frac{1}{4}$$

$$f''(4) = -\frac{1}{4(4)^{3/2}} = -\frac{1}{32}$$

**Paso 3: Aplicar el Polinomio de Taylor de segundo grado**

$$P_2(x) = f(4) + f'(4)(x - 4) + \frac{f''(4)}{2!} (x - 4)^2$$

$$P_2(x) = 2 + \frac{1}{4}(x - 4) - \frac{1}{64}(x - 4)^2$$

**Paso 4: Aproximar $ \sqrt{4.1} $ con $ P_2(4.1) $**

$$P_2(4.1) = 2 + \frac{1}{4}(0.1) - \frac{1}{64}(0.1)^2$$

$$= 2 + 0.025 - 0.00015625$$

$$\approx 2.02484$$

**Paso 5: Comparar con el valor real**

El valor exacto de $ \sqrt{4.1} $ es **2.02484567313**, lo que muestra que nuestra aproximación con la Fórmula de Taylor es bastante precisa.

<br>

### Ejemplo 2: Aproximación de $\sin(0.1)$

Queremos calcular $ \sin(0.1) $ usando Taylor centrado en $ x = 0 $.

**Paso 1: Definir la función y derivadas**

Sabemos que la serie de Taylor de $ \sin x $ en $ x = 0 $ es:

$$\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots$$

**Paso 2: Usar términos hasta $x^3$**

Para $x = 0.1$:

$$\sin(0.1) \approx 0.1 - \frac{(0.1)^3}{6}$$

$$= 0.1 - \frac{0.001}{6}$$

$$= 0.1 - 0.0001667$$

$$\approx 0.09983$$

**Paso 3: Comparar con el valor real**

El valor exacto de $\sin(0.1)$ es **0.09983341665**, lo que muestra que nuestra aproximación es muy precisa.

<br>

### Ejemplo 3: Aplicación en Física – Movimiento bajo Pequeñas Oscilaciones

En física, se usa la Fórmula de Taylor para aproximar funciones en sistemas oscilatorios. Un caso común es la aproximación del **coseno** cuando el ángulo es pequeño:

$$\cos x \approx 1 - \frac{x^2}{2}, \quad \text{para } x \approx 0$$

Esto se usa en la ecuación del **péndulo simple**:

$$\theta'' + \frac{g}{L} \sin \theta = 0$$

Para ángulos pequeños $ \theta $, podemos aproximar $ \sin \theta \approx \theta $, convirtiendo la ecuación en:

$$\theta'' + \frac{g}{L} \theta = 0$$

lo que es una ecuación de oscilador armónico simple, facilitando el análisis del sistema.

### 3.2. Una aproximación al número $\pi$

$$\pi = 12 \int_{0}^{\frac{1}{2}} \sqrt{1 - z^2} \mathrm{d}z - \frac{3 \sqrt{3}}{2} \simeq$$

$$\simeq 12 \int_{0}^{\frac{1}{2}} 1 - \frac{z^2}{2} - \frac{z^4}{8} - \frac{z^6}{16} \mathrm{d}z - \frac{3 \sqrt{3}}{2} =$$

$$= 12 \left [z - \frac{z^3}{6} - \frac{z^5}{40} - \frac{z^7}{112} \right]^{\frac{1}{2}}_{0} - \frac{3 \sqrt{3}}{2} = 3.1417$$

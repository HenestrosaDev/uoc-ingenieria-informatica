# RESUMEN Límites de funciones y continuidad

## Índice

>[!NOTE]
>El apartado del libro **3.1. Tipos de discontinuidad** está unificado con el apartado **3. Continuidad**.

- [1. Límites de una función en un punto](#1-límites-de-una-función-en-un-punto)
	- [1.1. Idea intuitiva](#11-idea-intuitiva)
	- [1.2. Definición informal y formal del concepto de límite](#12-definición-informal-y-formal-del-concepto-de-límite)
	- [1.3. Interpretación geométrica de la definición formal de límite](#13-interpretación-geométrica-de-la-definición-formal-de-límite)
	- [1.4. Cálculo de límite de forma algebraica](#14-cálculo-de-límites-de-forma-algebraica)
	- 1.5. Una primera indeterminación: $\frac{0}{0}$ [(enlace)](#15-una-primera-indeterminación-frac00)
	- [1.6. Criterio «función que tiende a cero por función acotada»](#16-criterio-función-que-tiende-a-cero-por-función-acotada)
	- [1.7. Límites laterales](#17-límites-laterales)
- [2. Extensión del concepto de límite: límite infinito y límite en el infinito](#2-extensión-del-concepto-de-límite-límite-infinito-y-límite-en-el-infinito)
	- [2.1. Límite infinito](#21-límite-infinito)
	- [2.2. Límite de una función en el infinito](#22-límite-de-una-función-en-el-infinito)
		- 2.2.1. Una segunda indeterminación: $\frac{\pm \infty}{\pm \infty}$ [(enlace)](#221-una-segunda-indeterminación-fracinfty-infty)
	- [2.3. Límite infinito en el infinito](#23-límite-infinito-en-el-infinito)
	- [2.4. Álgebra de límites infinitos](#24-álgebra-de-límites-infinitos)
	- [2.5. Indeterminaciones](#25-indeterminaciones)
		- [2.5.1. Órdenes de infinitud](#251-órdenes-de-infinitud)
		- 2.5.2. Indeterminaciones de la forma $(+\infty) - (+\infty)$ [(enlace)](#252-indeterminaciones-de-la-forma-infty---infty)
		- 2.5.3. Indeterminaciones de la forma $\frac{\pm \infty}{\pm \infty}$ [(enlace)](#253-indeterminaciones-de-la-forma-fracinftypm-infty)
		- 2.5.4. Indeterminaciones de la forma $\frac{0}{0}$ [(enlace)](#254-indeterminaciones-de-la-forma-frac00)
		- 2.5.5. Indeterminaciones de la forma $0 \cdot (\pm \infty)$ [(enlace)](#255-indeterminaciones-de-la-forma-0-cdot-pm-infty)
		- 2.5.6. Indeterminaciones de la forma $1^{\pm \infty}$ [(enlace)](#256-indeterminaciones-de-la-forma-1pm-infty)
- [3. Continuidad](#3-continuidad)
	- [3.2. Asíntotas](#32-asíntotas)

<br>

## 1. Límites de una función en un punto

### 1.1. Idea intuitiva

La idea intuitiva de **límite** en cálculo se refiere a la tendencia de una función o una secuencia a acercarse a un valor específico cuando la variable independiente se aproxima a un punto dado.

Por ejemplo, si tenemos una función $f(x)$, decimos que el límite de $f(x)$ cuando $x$ se acerca a $a$ es $L$, y lo escribimos como:

$$\lim_{x \to a} f(x) = L$$

Esto significa que conforme $x$ toma valores cada vez más cercanos a $a$, los valores de $f(x)$ se acercan a $L$.

En un escenario real, podemos plantear la siguiente analogía como ejemplo:

Imagina que quieres cruzar una habitación caminando siempre la mitad de la distancia restante. Nunca llegarás exactamente al otro lado, pero te irás acercando indefinidamente. De manera similar, en un límite, no es necesario que la función alcance exactamente el valor, sino que se acerque tanto como se desee.

### 1.2. Definición informal y formal del concepto de límite

**Definición formal**:

En base a la fórmula planteada más arriba, podemos entender que para **cualquier** número pequeño $\epsilon > 0$, existe otro número pequeño $\delta > 0$ tal que si $x$ está dentro de una distancia $\delta$ de $a$ (excepto posiblemente en $a$ mismo), i $f(x)$ estará dentro de una distancia $\epsilon$ de $L$.

Formalmente:

$$0 < |x - a| < \delta \quad \Rightarrow |f(x) - L| < \epsilon$$

### 1.3. Interpretación geométrica de la definición formal de límite

<div align="center">

![Interpretación geométrica del concepto de límite](https://github-production-user-asset-6210df.s3.amazonaws.com/60482743/427988071-65028289-b523-4958-8d33-273626fddb44.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250328%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250328T111922Z&X-Amz-Expires=300&X-Amz-Signature=5c4929904e121d2504214b1d7b80c9622e09cd60fa1f20bdfa5b8cf8908d4bcf&X-Amz-SignedHeaders=host)
</div>

1. El valor $L$ es el límite al que se acerca $f(x)$.
2. La distancia $\epsilon$ define una banda horizontal alrededor de $L$ (es decir, ($L - \epsilon, L + \epsilon$)).
3. La distancia $\delta$ define una franja vertical alrededor de $x = a$ (es decir, ($a - \delta, a + \delta$)).
4. El objetivo es encontrar un $\delta$ para cualquier $\epsilon$ dado, de manera que todos los valores de $f(x)$ dentro del intervalo ($a - \delta, a + \delta$) queden dentro de la banda horizontal de $\epsilon$.

### 1.4. Cálculo de límites de forma algebraica

Casos de ejemplo:

1. **Sustitución directa**

	Si la función es continua en el punto $a$, simplemente sustituimos $x = a$ en la función.

	**Ejemplo**:

	$$\lim_{x \to 2} (x^2 + 3x - 1)$$

	Sustituyendo $x = 2$:

	$$2^2 + 3(2) - 1 = 4 + 6 - 1 = 9$$

	Si obtenemos un valor definido, ese es el límite.

2. **Racionalización**

	Si hay raíces, multiplicamos por el conjugado.

	**Ejemplo**:

	$$\lim_{x \to 4} \frac{\sqrt{x} - 2}{x - 4}$$

	Multiplicamos por el conjugado $\frac{\sqrt{x} + 2}{\sqrt{x} + 2}$:

	$$\frac{(\sqrt{x} - 2)(\sqrt{x} + 2)}{(x - 4)(\sqrt{x} + 2)}$$

	El numerador se convierte en $x - 4$, que se cancela con el denominador:

	$$\lim_{x \to 4} \frac{1}{\sqrt{x} + 2} = \frac{1}{4}$$

### 1.5. Una primera indeterminación: $\frac{0}{0}$

La expresión $\frac{0}{0}$ es una forma **indeterminada**, lo que significa que no nos da información suficiente para determinar el límite. Es decir, dependiendo del caso, el límite puede existir y tomar un valor finito, ser infinito, o no existir.

Para resolverla, podemos aplicar alguno de estos métodos, según el caso:

1. **Factorización y simplificación**

	Si la función es racional, intentamos factorizar y cancelar términos.

	**Ejemplo**:

	$$\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$$

	Sustituyendo $x = 2$, obtenemos $\frac{0}{0}$. Factorizamos el numerador:

	$$\frac{(x - 2)(x + 2)}{x - 2}$$

	Cancelamos $x - 2$:

	$$\lim{x \to 2} (x + 2) = 2 + 2 = 4$$

2. **Racionalización (si hay raíces)**

	Si hay raíces, multiplicamos por el conjugado.

	**Ejemplo**:

	$$\lim_{x \to 1} \frac{\sqrt{x} - 1}{x - 1}$$

	Sustituyendo $x = 1$, obtenemos $\frac{0}{0}$. Multiplicamos por el conjugado $\frac{\sqrt{x} + 1}{\sqrt{x} + 1}$:

	$$\frac{(\sqrt{x} - 1)(\sqrt{x} + 1)}{(x - 1)(\sqrt{x} + 1)}$$

	El numerador se convierte en $x - 1$, que se cancela con el denominador:

	$$\lim_{x \to 1} \frac{1}{\sqrt{x} + 1} = \frac{1}{2}$$

3. **Regla de L'Hôpital (derivadas en caso de $\frac{0}{0}$)**

	Visto en la PEC3.

### 1.6. Criterio «función que tiende a cero por función acotada»

Este criterio es muy útil para calcular ciertos límites sin necesidad de usar métodos complicados. Se basa en la siguiente idea:

**Enunciado**

Si tenemos dos funciones $f(x)$ y $g(x)$ tales que:

1. $f(x) \to 0$ cuando $x \to a$,
2. $g(x)$ es una función **acotada** en un entorno de $a$ (es decir, existe una constante $M$ tal que $|g(x)| \le M$ para valores de $x$ cercanos a $a$),

Entonces, el producto de ambas funciones también tenderá a cero:

$$\lim_{x \to a} f(x) g(x) = 0$$

**Explicación intuitiva**

La clave es que si una función $f(x)$ se vuelve arbitrariamente pequeña ($\to 0$), mientras que la otra función $g(x)$ se mantiene dentro de ciertos límites (sin volverse infinita), entonces su producto también se vuelve arbitrariamente pequeño.

Podemos pensarlo como multiplicar un número que se acerca a $0$ por otro que nunca se hace demasiado grande:

- Si $f(x)$ es muy pequeño y $g(x)$ está controlado, entonces $f(x)g(x)$ también será muy pequeño.

**Ejemplo**

$$\lim_{x \to 0} \cos \left ( \frac{1}{x} \right )$$

- Sabemos que $x \to 0$ cuando $x \to 0$.
- También sabemos que $\cos \left ( \frac{1}{x} \right )$ está **acotado**, ya que $-1 \le \cos \left ( \frac{1}{x} \right )$.

Por el criterio, el producto de ambas funciones tiende a 0:

$$\lim_{x \to 0} x \cdot \cos \left ( \frac{1}{x} \right ) = 0$$

### 1.7. Límites laterales

Los **límites laterales** permiten analizar el comportamiento de una función cuando $x$ se acerca a un punto $a$ desde la derecha ($x \to a^+$) o desde la izquierda ($x \to a^-$).

Se expresan de la siguiente manera:

- **Límite por la derecha (límite lateral derecho)**:

	$$\lim_{x \to a^+} f(x)$$

	Representa el valor al que se acerca $f(x)$ cuando $x$ se aproxima a $a$ desde valores mayores que $a$.

- **Límite por la izquierda (límite lateral izquierdo)**:

	$$\lim_{x \to a^-} f(x)$$

	Representa el valor al que se acerca $f(x)$ cuando $x$ se aproxima a $a$ desde valores menores que $a$.

**Relación con el límite global**

Para que el límite global en $x = a$ exista, los límites laterales deben ser **iguales**:

$$\lim_{x \to a} f(x) \text{existe si y solo si} \lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x)$$

Si los límites laterales son diferentes, entonces el límite **no existe** en $x = a$.

<br>

**Ejemplo 1: Función escalonada (discontinua)**

Sea la función:

$$
f(x) =
\begin{cases}
2, & \text{si } x < 1 \\ 
5, & \text{si } x > 1
\end{cases}
$$

Los límites laterales en $x = 1$ son:

$$\lim_{x \to 1^-} f(x) = 2, \quad \lim_{x \to 1^+} f(x) = 5$$

Dado que los límites laterales **no coinciden**, el límite en $x = 1$ **no existe**.

<br>

**Ejemplo 2: Función con raíz**

$$\lim_{x \to 0^+} \sqrt{x}$$

Aquí, solo podemos evaluar para $x > 0$, y sabemos que $\sqrt{x}$ se acerca a $0$.

Por lo tanto:

$$\lim_{x \to 0^+} \sqrt{x} = 0$$

Pero el límite por la izquierda **no está definido** porque $\sqrt{x}$ no existe para $x < 0$.

<br>

**Ejemplo 3: Límite con función fraccionaria**

$$\lim_{x \to 0^-} \frac{1}{x}, \lim_{x \to 0^+} \frac{1}{x}$$

Cuando $x \to 0^-$ (valores negativos cercanos a $0$), $\frac{1}{x}$ se vuelve muy negativo:

$$\lim_{x \to 0^-} \frac{1}{x} = -\infty$$

Cuando $x \to 0^+$ (valores positivos cercanos a $0$), $\frac{1}{x}$ se vuelve muy positivo:

$$\lim_{x \to 0^+} \frac{1}{x} = \infty$$

Como los límites laterales son diferentes, el límite en $x = 0$ **no existe**.

## 2. Extensión del concepto de límite: límite infinito y límite en el infinito

### 2.1. Límite infinito

El **límite infinito** describe describe el comportamiento de una función cuando sus valores crecen o decrecen sin acotarse al acercarse a un punto. Se pueden presentar dos situaciones principales:

1. **Cuando $x \to a$, $f(x) \to \infty$ o $f(x) \to -\infty$**

	- Indica que la función **tiende a infinito** (positivo o negativo) cuando $x$ se acerca a un valor $a$.

	- Se expresa como:

		$$\lim_{x \to a} f(x) = \infty \quad \text{o} \quad \lim_{x \to a} f(x) = -\infty$$
	
	- Ejemplo:

		$$\lim_{x \to 0^+} \frac{1}{x} = \infty, \quad \lim_{x \to 0^-} \frac{1}{x} = -\infty$$

	- En este caso, la función presenta una **asíntota vertical** en $x = 0$.

2. **Cuando $x \to \infty, f(x)$ tiende a un número finito o infinito**

	- Se analiza el comportamiento de la función cuando $x$ crece o decrece sin límite.

	- Se expresa como:

		$$\lim_{x \to \infty} f(x) = L \quad \text{o} \lim_{x \to \infty} f(x) = \infty \text{o} -\infty$$

	- Ejemplo:

		$$\lim_{x \to \infty} \frac{2x^2 + 3}{x^2 + 1} = 2$$

	- En este caso, la función tiene una **asíntota horizontal** en $y = 2$.

<br>

**EJEMPLOS COMUNES**

**Ejemplo 1: Límite que tiende a infinito en un punto finito**

$$\lim_{x \to 2} \frac{1}{(x - 2)^2}$$

Si $x$ se acerca a $2$, el denominador $(x - 2)^2$ se vuelve muy pequeño pero siempre positivo. Entonces, el cociente crece indefinidamente:

$$\lim_{x \to 2} \frac{1}{(x - 2)^2} = \infty$$

Esto indica una **asíntota vertical** en $x = 2$.

<br>

**Ejemplo 2: Límite en infinito**

$$\lim_{x \to \infty} \frac{3x^2 + 5x}{2x^2 + 7}$$

Para resolverlo, dividimos el numerador y el denominador por $x^2$ (el mayor exponente en el denominador):

$$\lim_{x \to \infty} \frac{3 + \frac{5}{x}}{2 + \frac{7}{x^2}}$$

Cuando $x \to \infty$, los términos $\frac{5}{x}$ y $\frac{7}{x^2}$ tienden a $0$:

$$\lim_{x \to \infty} \frac{3}{2} = \frac{3}{2}$$

Esto indica una **asíntota horizontal** en $y = \frac{3}{2}$.

### 2.2. Límite de una función en el infinito

El límite de una función cuando $x \to \infty$ analiza el comportamiento de la función cuando $x$ crece indefinidamente. Se denota como:

$$\lim_{x \to +\infty} f(x) = L$$

Puede haber tres casos principales:

1. **El límite es un número finito** $\to$ La función se acerca a una **asíntota horizontal**.
2. **El límite es $\infty$ o $-\infty$** $\to$ La función crece o decrece sin límite.
3. **El límite no existe** $\to$ La función oscila indefinidamente.

<br>

**Ejemplo 1: Función racional**

$$\lim_{x \to \infty} \frac{3x^2 + 5x}{2x^2 + 7}$$

Dividimos el numerador y el denominador por $x^2$ (el mayor exponente en el denominador):

$$\lim_{x \to \infty} \frac{3 + \frac{5}{x}}{2 + \frac{7}{x^2}}$$

Cuando $x \to \infty$, los términos $\frac{5}{x}$ y $\frac{7}{x^2}$ tienden a $0$, dejando:

$$\frac{3}{2}$$

Esto significa que la función tiene una asíntota horizontal en $y = \frac{3}{2}$.

<br>

**Ejemplo 2: Función exponencial**

$$\lim_{x \to \infty} e^{-x}$$

Aquí, $e^{-x} = \frac{1}{e^x}$ y como $e^x \to \infty$, su inverso tiende a $0$.

Por lo tanto:

$$\lim_{x \to \infty} e^{-x} = 0$$

La función tiene una **asíntota horizontal** en $y = 0$.

<br>

**Ejemplo 3: Función con crecimiento infinito**

$$\lim_{x \to \infty} x^3 - 2x$$

El término dominante es $x^3$, que crece indefinidamente.

$$\lim_{x \to \infty} x^3 - 2x = \infty$$

#### 2.2.1. Una segunda indeterminación: $\frac{+\infty}{-\infty}$

En teoría, dividir un número positivo muy grande entre un número negativo muy grande sugiere que el resultado debería ser una **cantidad negativa muy grande**, es decir, $-\infty$.

Sin embargo, esta intuición no siempre es correcta porque en un límite la velocidad de crecimiento del numerador y del denominador puede influir en el resultado. Dependiendo del caso, el límite podría ser:

- $-\infty$
- Un número finito
- $0$
- No existir

<br>

**Ejemplo 1: El límite es finito**

$$\lim_{x \to \infty} \frac{-2x}{x}$$

Dividimos todo entre $x$:

$$\lim{x \to \infty} \frac{\frac{-2x}{x}}{\frac{x}{x}} = \lim_{x \to \infty} \frac{-2}{1} = -2$$

Aunque la forma inicial parecía $\frac{+\infty}{-\infty}$, el límite es simplemente $-2$.

<br>

**Ejemplo 2: El límite es $-\infty$**

$$\lim_{x \to \infty} \frac{-x^2}{x}$$

Dividimos todo entre $x$:

$$\lim_{x \to \infty} \frac{-x}{1} = \lim_{x \to \infty} -x = -\infty$$

Aquí el resultado sí es $-\infty$.

<br>

**Ejemplo 3: Uso de la regla de L'Hôpital**

Visto en la PEC3.

### 2.3. Límite infinito en el infinito

Describe el comportamiento de una función cuando $x \to \infty$ o $x \to -\infty$ y la función crece o decrece sin límite.

Se expresa como:

$$\lim_{x \to \infty} f(x) = \infty \quad \text{o} \quad \lim_{x \to \infty} f(x) = -\infty$$

o también para $x \to -\infty$:

$$\lim_{x \to -\infty} f(x) = \infty \quad \text{o} \quad \lim_{x \to -\infty} f(x) = -\infty$$

Esto significa que la función **no se estabiliza en un valor finito**, sino que crece o decrece indefinidamente.

Para resolver este tipo de límites, podemos considerar lo siguiente:
- Para funciones **racionales**, se analiza el **grado del numerador y denominador**.
- Para funciones **exponenciales**, la **base** determina si el crecimiento es rápido o si decae.

<br>

**Ejemplo 1: Límite de un polinomio**

$$\lim_{x \to \infty} (x^3 - 4x + 2)$$

El término dominante en $x^3 - 4x + 2$ es $x^3$, que crece indefinidamente.

Por lo tanto,

$$\lim_{x \to \infty} (x^3 - 4x + 2) = \infty$$

Y en $x \to -\infty$, el término $x^3$ sigue dominando, pero ahora $(-x)^3 = -x^3$, por lo que:

$$\lim_{x \to -\infty} (x^3 - 4x + 2) = -\infty$$

<br>

**Ejemplo 2: Límite de una función racional**

$$\lim_{x \to \infty} \frac{x^2 + 3x}{5 - x}$$

Dividimos numerador y denominador por $x$, la mayor potencia del denominador:

$$\lim_{x \to \infty} \frac{x + 3}{\frac{5}{x} - 1}$$

Cuando $x \to \infty$, el término $\frac{5}{x} \to 0$, quedando:

$$\lim_{x \to \infty} \frac{x + 3}{-1} = -\infty$$

**Ejemplo 3: Función exponencial**

$$\lim_{x \to \infty} e^x = \infty, \quad \lim_{x \to -\infty} e^x = 0$$

Aquí, la función $e^x$ **crece exponencialmente** hacia $\infty$ cuando $x \to \infty$, pero se acerca a $0$ cuando $x \to -\infty$.

### 2.4. Álgebra de límites infinitos

Consideremos $f, g, h : A \to \mathbb{R}$ tres funciones tales que:

$$\lim_{x \to \overline{a}} f(x) = L \in \mathbb{R}$$

$$\lim_{x \to \overline{a}} g(x) = +\infty$$

$$\lim_{x \to \overline{a}} h(x) = +\infty$$

donde $\overline{a} \in \mathbb{R} = [-\infty, +\infty]$, es decir, $\overline{a}$ puede ser un número real, pero también puede ser $+\infty$ o $-\infty$. 

Entonces:

1. **Límite de la suma y resta**:

	$$\lim_{x \to \overline{a}} (f(x) \pm g(x)) = L \pm (+\infty) = \pm \infty$$

	$$\lim_{x \to \overline{a}} (g(x) + h(x)) = +\infty + (+\infty) = +\infty$$

2. **Límite del producto**:

	$$\lim_{x \to \overline{a}} (g(x) + h(x)) = L \cdot (\pm \infty) = \mathrm{sgn}(L) \cdot (\pm \infty)$$

	$$\lim_{x \to \overline{a}} g(x) \cdot h(x) = (+\infty) \cdot (+\infty) = +\infty$$

3. **Límite del cociente**:

	$$\lim_{x \to \overline{a}} \frac{f(x)}{\pm g(x)} = \frac{L}{\pm \infty} = 0$$

### 2.5. Indeterminaciones

Las **formas indeterminadas** surgen en cálculo cuando una operación matemática no tiene un resultado inmediato y se requiere manipulación algebraica o técnicas avanzadas para resolver el límite.

#### 2.5.1. Órdenes de infinitud

**Infinito de orden superior**

Sean $f(x)$ y $g(x)$ dos infinitos en el punto $a$, decimos que $g(x)$ es un **infinito de orden superior** a $f(x)$ en el punto $a$ si:

$$\lim_{x \to a} \frac{f(x)}{g(x)} = 0$$

y lo denotaremos como:

$$f(x) \ll g(x)$$

En este mismo caso, tendríamos que el límite del cociente inverso sería $+\infty$:

$$\lim_{x \to a} \frac{g(x)}{f(x)} = +\infty$$

siempre que ambas funciones tiendan a un infinito del mismo signo. 

En caso contrario:

$$\lim_{x \to a} \frac{g(x)}{f(x)} = -\infty$$

<br>

**Órdenes de infinitud**

La **jerarquía de crecimiento** es:

$$\ln(x) \ll \sqrt[n]{x} \ll \sqrt[n - 1]{x} \ll x \ll x^n \ll x^{n + 1} \ll 2^x \ll e^x \ll 3^x$$

#### 2.5.2. Indeterminaciones de la forma $(+\infty) - (+\infty)$

Surge cuando dos funciones tienden a $\infty$, pero con tasas de crecimiento distintas. Se resuelve con:

- Factorización
- Racionalización
- Expresión en forma de fracción

Ejemplo:

$$\lim_{x \to \infty} (\sqrt{x^2 + x} - x)$$

Multiplicamos por el conjugado:

$$\frac{(\sqrt{x^2 + x} - x)(\sqrt{x^2 + x}) + x}{\sqrt{x^2 + x} + x}$$

El numerador se convierte en:

$$(x^2 + x) - x^2 = x$$

Dividimos por $\sqrt{x^2 + x} + x$ y evaluamos, obteniendo $\frac{1}{2}$.

#### 2.5.3. Indeterminaciones de la forma $\frac{+\infty}{\pm \infty}$

Ocurre en funciones donde tanto el denominador como el denominador tienden a $\infty$. Se resuelve con:

- División por la mayor potencia de $x$
- Regla de L'Hôpital

Ejemplo:

$$\lim_{x \to \infty} \frac{x^2 + 3x}{2x^2 - 5}$$

Dividimos todo por $x^2$:

$$\frac{1 + \frac{3}{x}}{2 - \frac{5}{x^2}}$$

Cuando $x \to \infty$, los términos $\frac{3}{x}$ y $\frac{5}{x^2}$ tienden a $0$, quedando:

$$\frac{1}{2}$$

#### 2.5.4. Indeterminaciones de la forma $\frac{0}{0}$

Esta forma aparece en funciones donde tanto el numerador como el denominador tienden a $0$. Se resuelve con:

- Factorización
- Racionalización
- Regla de L'Hôpital (PEC3)
- Sustitución algebraica

Ejemplo:

$$\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$$

Factorizamos el numerador:

$$\frac{(x - 2)(x + 2)}{x - 2}$$

Cancelamos $(x - 2)$ y evaluamos $x = 2$, obteniendo $4$.

#### 2.5.5. Indeterminaciones de la forma $0 \cdot (\pm \infty)$

Esta es una forma indeterminada porque combina dos tendencias opuestas:

- Un término que tiende a $0$ (lo que normalmente llevaría el producto a $0$).
- Un término que tiende a $\infty$ (lo que normalmente llevaría el producto a $\infty$).

Sin más información, no podemos determinar si el resultado final será $0$, $\pm \infty$, **o un número finito**.

Para evaluar el límite, la estrategia principal es **reescribir el producto como un cociente**:

$$f(x) \cdot g(x) = \frac{f(x)}{\frac{1}{g(x)}} \quad o \quad \frac{g(x)}{\frac{1}{f(x)}}$$

De esta forma, la indeterminación $0 \cdot \infty$ se convierte en $\frac{0}{0}$ o $\frac{\infty}{\infty}$, que pueden resolverse con técnicas como:

✅ **Factorización**
✅ **Sustitución algebraica**
✅ **Regla de L'Hôpital (PEC3)**
✅ **Racionalización**

**Ejemplos**:

**Ejemplo 1**: 

$$\lim_{x \to 0^+} x \ln x$$

Hacemos el cambio de variable $x = e^{-t }$ con $t \to \infty$ cuando $x \to 0^+$. Sustituyendo:

$$\ln x = \ln (e^{-t}) = -t$$

Entonces, el límite se transforma en:

$$\lim_{t \to \infty} e^{-t} (-t)$$

Ahora escribimos la expresión como:

$$\lim_{t \to \infty} -te^{-t}$$

Sabemos que **las exponenciales decrecen más rápido que cualquier potencia.** Así que $e^t$ crece mucho más rápido que $t$, lo que implica que:

$$\frac{t}{e^t} \to 0 \text{ cuando } t \to \infty$$

Por lo tanto:

$$\lim_{x \to 0^+} x \ln x = 0$$

#### 2.5.6. Indeterminaciones de la forma $1^{\pm \infty}$

Ocurre cuando una función con base $1$ tiene un exponente que tiende a $\infty$. Se resuelve con:

- Logaritmos
- Exponenciales

Ejemplo:

$$\lim_{x \to \infty} \left ( 1 + \frac{1}{x} \right )^x$$

Tomamos el logaritmo:

$$y = \left ( 1 + \frac{1}{x} \right )^x$$

$$\ln y = x \ln \left ( 1 + \frac{1}{x} \right )$$

Usando el límite notable $\lim_{x \to \infty} \left ( 1 + \frac{1}{x} \right )^x = e$, obtenemos $e$.

## 3. Continuidad

La **continuidad** de una función describe su comportamiento sin interrupciones ni saltos. Intuitivamente, una función es **continua** si se puede dibujar sin levantar el lápiz del papel.

Estos son los tipos de continuidad y discontinuidad:

<table>
	<tr>
		<th>TIPO DE CONTINUIDAD</th>
		<th>DEFINICIÓN</th>
		<th>EJEMPLO</th>
	</tr>
	<tr>
		<td><strong>Continua en un punto</strong></td>
		<td>
			Deben cumplirse TODAS estas tres condiciones:  
			<ol>
				<li>$f(a)$ está definida (el valor de $f(a)$ existe)</li>
				<li>$\lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x)$</li>
				<li>$\lim_{x \to a} f(x) = f(a)$</li>
			</ol>
		</td>
		<td>$f(x) = x^2$ en $x = 2$</td>
	</tr>
	<tr>
		<td><strong>Discontinua evitable</strong></td>
		<td>
			$\lim_{x \to a} f(x) = L$, pero $f(x)$ no está definida en $x = 1$
		</td>
		<td>$f(x) = \frac{x^2 - 1}{x - 1}$ en $x = 1$</td>
	</tr>
	<tr>
		<td><strong>Discontinua de salto</strong></td>
		<td>$\lim_{x \to a^-} f(x) \neq \lim_{x \to a^+} f(x)$</td>
		<td><img src="https://github.com/user-attachments/assets/926f7e64-25f5-4840-b853-9da9b1848fae"> en $x = 0$</td>
	</tr>
	<tr>
		<td><strong>Discontinua asintótica (o infinita)</strong></td>
		<td>$\lim_{x \to 0^-} f(x) = -\infty, \quad \lim_{x \to 0^+} f(x) = +\infty$</td>
		<td>$f(x) = \frac{1}{x}$ en $x = 0$</td>
	</tr>
</table>

## Ejemplo

Dado el polinomio $f(x)$, procedemos a estudiar su continuidad:

$$
f(x) = 
\begin{cases} 
\frac{x^2 - 4}{x - 2} & \text{si } x \neq 2, \\
3 & \text{si } x = 2.
\end{cases}
$$

---

### Paso 1: Dominio de definición
- La función está definida para todo $x \in \mathbb{R}$ (incluso en $x = 2$ por la definición por casos).

---

### Paso 2: Continuidad en $x \neq 2$

Factorizamos el numerador:

$$
\frac{x^2 - 4}{x - 2} = \frac{(x - 2)(x + 2)}{x - 2}.
$$

Cancelamos el término común ($x \neq 2$, por lo que $x - 2 \neq 0$):

$$
f(x) = x + 2 \quad \text{para} \quad x \neq 2.
$$

Ahora, queremos probar que $\lim_{x \to a} f(x) = f(a)$.

Usando la expresión simplificada:
$$
\lim_{x \to a} f(x) = \lim_{x \to a} (x + 2) = a + 2.
$$

Evaluamos $f(a)$:

$$
f(a) = a + 2 \quad \text{(para \( a \neq 2 \))}.
$$

Por tanto:

$$
\lim_{x \to a} f(x) = a + 2 = f(a).
$$

Como el límite coincide con el valor de la función para todo $a \neq 2 $, $f(x)$ es **continua** en $\mathbb{R} \setminus \set{2}$.

---

### Paso 3: Continuidad en $x = 2$

1. **¿Existe $f(2)$?**  
	Sí, $f(2) = 3$ (definido por la función).

2. **¿Existe $\lim_{x \to 2} f(x)$?**  
	Sí, y vale $4$:

$$
\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = \lim_{x \to 2} \frac{(x - 2)(x + 2)}{x - 2} = \lim_{x \to 2} (x + 2) = 4.
$$

3. **¿Coincide con $f(2)$?**  
	No, porque $\lim_{x \to 2} f(x) = 4 \neq 3 = f(2)$.

**Conclusión:** $f(x)$ tiene una **discontinuidad evitable** en $x = 2$.

---

### Paso 4: Gráfica (ayuda visual)

- La función original tiene un "hueco" en $(2, 4)$, pero está "rellenado" artificialmente en $(2, 3)$.
- Para "reparar" la discontinuidad, redefinir $f(2) = 4$ haría $f(x)$ continua en $x = 2$.

<div align="center">

![](https://github-production-user-asset-6210df.s3.amazonaws.com/60482743/427993336-3a838324-5a3e-4e45-af61-98c400db5c8b.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250328%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250328T113632Z&X-Amz-Expires=300&X-Amz-Signature=b9cad11cffa0ca0b2bbfdeb06287dbab6724fec3bef8279cf764e907475d23d2&X-Amz-SignedHeaders=host)
</div>

---

### Resumen de continuidad del ejemplo

| **Tipo**                 | **En $x = 2$**                          | **En $x \neq 2$**              |
|--------------------------|----------------------------------------|-------------------------------|
| **¿Es continua?**        | No (discontinuidad evitable).          | Sí (función racional).        |
| **Límite**               | $\lim_{x \to 2} f(x) = 4$.             | $\lim_{x \to a} f(x) = f(a)$. |
| **¿Redefinible?**        | Sí (con $f(2) = 4$).                   | No aplica.                    |

### 3.2. Asíntotas

Las **asíntotas** son líneas rectas a las que una función $f(x)$ se acerca indefinidamente pero **nunca toca** (o lo hace solo en un punto). Existen tres tipos principales de asíntotas:

<table>
	<thead>
		<tr>
			<th>TIPO</th>
			<th>CONDICIÓN</th>
			<th>CÁLCULO</th>
			<th>EJEMPLO</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><strong>Vertical</strong></td>
			<td>$Q(a) = 0$ y $P(a) \neq 0$</td>
			<td>
				$\lim_{x \to a^{\pm}} f(x) = \pm \infty$
				<br>
				$x = a$ (raíces del denominador que no anulan al numerador)
			</td>
			<td>$f(x)=\frac{1}{x-2} \to x=2$</td>
		</tr>
		<tr>
			<td rowspan="3"><strong>Horizontal</strong></td>
			<td>$\text{grado}(P) < \text{grado}(Q)$</td>
			<td rowspan="3">$\lim_{x \to \pm \infty} f(x) = L$</td>
			<td>
				$y = 0$
				<br>
				<strong>Ejemplo:</strong> $f(x)=\frac{x}{x^2+1} \to y=0$
			</td>
		</tr>
		<tr>
			<td>$\text{grado}(P) = \text{grado}(Q)$</td>
			<td>
				$y = \frac{a_n}{b_n}$ (coeficientes líderes) 
				<br>
				<strong>Ejemplo:</strong> $f(x)=\frac{2x^2}{x^2-1} \to y=2$
			</td>
		</tr>
		<tr>
			<td>$\text{grado}(P) > \text{grado}(Q)$</td>
			<td>
				<strong>No existe</strong>
				<br>
				<strong>Ejemplo:</strong> $f(x)=\frac{x^3}{x+1} \to$ No hay asíntota horizontal
			</td>
		</tr>
		<tr>
			<td rowspan="3"><strong>Oblicua</strong></td>
			<td rowspan="3">$\text{grado}(P) = \text{grado}(Q) + 1$</td>
			<td>
				<strong>Paso 1:</strong> $m = \lim_{x \to \pm \infty} \frac{f(x)}{x}$
			</td>
			<td>
				$f(x) = \frac{x^2 + 3x + 1}{x - 2}$:
				<br>
				<br>
				$m = \lim_{x \to \pm \infty} \frac{\frac{x^2 + 3x + 1}{x - 2}}{x} = 1$
			</td>
		</tr>
		<tr>
			<td><strong>Paso 2:</strong> $n = \lim_{x \to \pm \infty} [f(x) - mx]$</td>
			<td>
				$n = \lim_{x \to \pm \infty} \left(\frac{x^2 + 3x + 1}{x - 2} - x \right) = 5$
				<br>
			</td>
		</tr>
		<tr>
			<td><strong>Resultado:</strong> $y = mx + n$</td>
			<td><strong>Resultado:</strong> $y = x + 5$</td>
		</tr>
	</tbody>
</table>

## Ejemplo

Dado el polinomio $f(x) = \frac{2x^2 - 3x + 1}{x - 2}$, procedemos a calcular todas sus asíntotas:

### Asíntota vertical (AV)

**Condición:** Raíces del denominador que no anulan el numerador.
1. Resolvemos $x - 2 = 0 \Rightarrow x = 2$.  
2. Verificamos numerador en $x=2$: $2(2)^2 - 3(2) + 1 = 3 \neq 0$.  
3. Calculamos los límites laterales:  
	$\lim_{x \to 2^-} \frac{2x^2 - 3x + 1}{x - 2} = -\infty, \quad \lim_{x \to 2^+} \frac{2x^2 - 3x + 1}{x - 2} = +\infty$

**Resultado:**  
✅ **AV en $x = 2$** (la función tiende a $\pm\infty$).

---

### Asíntota horizontal (AH)

**Condición:** Comparar grados de numerador ($P$) y denominador ($Q$).
- $\text{grado}(P) = 2$, $\text{grado}(Q) = 1$.
- Como $2 > 1$: **No existe AH** ❌.

**Demostración:**

Simplificamos la expresión dividiendo el numerador y el denominador por $x$ (la mayor potencia del denominador):

$$\lim_{x \to \pm \infty} \frac{2x^2 - 3x + 1}{x - 2} = \lim_{x \to \pm \infty} \frac{x^2 \left(2 - \frac{3}{x} + \frac{1}{x^2}\right)}{x \left(1 - \frac{2}{x}\right)} = \lim_{x \to \pm \infty} \frac{x \left(2 - \frac{3}{x} + \frac{1}{x^2}\right)}{1 - \frac{2}{x}}$$

Evaluamos los términos que tienden a $0$:

$$\frac{3}{x} \to 0, \frac{1}{x^2} \to 0, \frac{2}{x} \to 0$$

Resultado:

$$\lim_{x \to \pm \infty} \frac{x(2 - 0 + 0)}{1 - 0} = \lim_{x \to \pm \infty} 2x = \pm \infty$$

- Cuando $x \to +\infty$: $2x \to +\infty$
- Cuando $x \to -\infty$: $2x \to -\infty$

No existe ningún valor real $L$ que satisfaga la definición de AH.

---

### Asíntota oblicua (AO)

**Condición:** $\text{grado}(P) = \text{grado}(Q) + 1$ (se cumple, pues $2 = 1 + 1$).  

#### Método 1: División de polinomios

Dividimos $2x^2 - 3x + 1$ entre $x - 2$:

$$
\begin{array}{r|rrrr}
 & 2x^2 & -3x & +1 & \\
x - 2 & 2x^2 & -4x & & \\
\hline
 & 0 & +x & +1 & \\
 & & +x & -2 & \\
\hline
 & & 0 & +3 & \\
\end{array}
$$

**Cociente:** $2x + 1$ (pendiente $m=2$ y ordenada $n=1$).  
**Resto:** $3$ (no afecta a la AO).

#### Método 2: Límites

1. **Pendiente ($m$):**  
	$m = \lim_{x \to \pm\infty} \frac{f(x)}{x} = \lim_{x \to \pm\infty} \frac{2x^2 - 3x + 1}{x^2 - 2x} = 2$
2. **Ordenada ($n$):**  
	$n = \lim_{x \to \pm\infty} [f(x) - 2x] = \lim_{x \to \pm\infty} \left(\frac{2x^2 - 3x + 1}{x - 2} - 2x\right) = 1$

**Resultado:**  
✅ **AO en $y = 2x + 1$** (válida para $x \to \pm\infty$).

### Resumen final

| **Tipo**       | **Ecuación**       | **¿Existe?** |
|----------------|--------------------|--------------|
| Vertical       | $x = 2$            | ✅           |
| Horizontal     | No existe          | ❌           |
| Oblicua        | $y = 2x + 1$       | ✅           |
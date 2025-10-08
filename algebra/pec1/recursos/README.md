# RECURSOS Los números: Números naturales, principio de inducción y números complejos

## Índice

- [1. El origen de los números](#1-el-origen-de-los-números)
- [2. Los números naturales: el principio de inducción](#2-los-números-naturales-el-principio-de-inducción)
- [3. Los números complejos](#3-los-números-complejos)
	- [3.1. Representación de los números complejos: forma binómica](#31-representación-de-los-números-complejos-forma-binómica)
		- [Representación gráfica](#representación-gráfica)
		- [3.3.1. Suma y resta de complejos en forma binómica](#331-suma-y-resta-de-complejos-en-forma-binómica)
		- [3.3.2. Producto de complejos en forma binómica](#332-producto-de-complejos-en-forma-binómica)
		- [3.3.3. El conjugado de un número complejo](#333-el-conjugado-de-un-número-complejo)
		- [3.3.4. División de números complejos en forma binómica](#334-división-de-números-complejos-en-forma-binómica)
	- [3.4. Forma polar: alternativa para representar los números complejos](#34-forma-polar-alternativa-para-representar-los-números-complejos)
		- [3.4.1. De la forma binómica a la forma polar](#341-de-la-forma-binómica-a-la-forma-polar)
		- [3.4.2. De la forma polar a la forma binómica](#342-de-la-forma-polar-a-la-forma-binómica)
		- [3.4.3. Operaciones aritméticas con números complejos en forma polar](#343-operaciones-aritméticas-con-números-complejos-en-forma-polar)
			- [Suma y resta de números complejos en forma polar](#suma-y-resta-de-números-complejos-en-forma-polar)
			- [Producto de números complejos en forma polar](#producto-de-números-complejos-en-forma-polar)
			- [División de números complejos en forma polar](#división-de-números-complejos-en-forma-polar)
	- [3.5. Exponencial de un número complejo](#35-exponencial-de-un-número-complejo)
		- [3.5.1. Operaciones de los números complejos en forma exponencial](#351-operaciones-de-los-números-complejos-en-forma-exponencial)
	- [3.6. Las raíces de la unidad](#36-las-raíces-de-la-unidad)
		- [3.6.1. Las raíces cúbicas de la unidad](#361-las-raíces-cúbicas-de-la-unidad)

## 1. El origen de los números

Los números son una creación humana desarrollada para responder a necesidades prácticas, como contar objetos (ovejas, árboles, hijos). De allí surge el conjunto de los números naturales, representado por $\mathbb{N} = \set{1, 2, 3, \dots }$

Los números **enteros** ($\mathbb{Z}$) comprenden a los números naturales, el cero y los números naturales con signo negativo. Se representan como $\mathbb{Z} = \set{\dots, -3, -2, -1, 0, 1, 2, 3, \dots}$.

Los números **racionales** ($\mathbb{Q}$) pueden expresarse como una fracción (donde el dividendo y el divisor son números enteros y el divisor no es cero). Todos los números naturales son racionales, ya que se pueden escribir como una fracción con denominador 1.

Para resolver ecuaciones de la forma $ax + b = 0$ se necesitan los números **racionales**, y para algunas cuadráticas como $x^2 = 2$, los **reales**. Sin embargo, la ecuación $x^2 = -1$ no tiene solución en los números reales, ya que ningún número al cuadrado puede dar negativo. Para superar esta limitación se crea el número **imaginario** $i = \sqrt{-1}$.

De esta forma, podemos resolver todas las ecuaciones de segundo grado de la forma $ax^2 + bx + c = 0$.

## 2. Los números naturales: el principio de inducción

El **principio de inducción** se utiliza para demostrar que una determinada propiedad es cierta para todo número natural $n$. La técnica consiste en lo siguiente:
1. Demostrar que la propiedad es cierta para $n = 1$.
2. Demostrar que si es cierta para $n$, entonces lo es para $n + 1$.

**Analogía**: Si tenemos una fila de fichas de dominó y empujamos la primera, vemos que cada una al caer empuja a la siguiente, por lo que caerán todas.

## 3. Los números complejos

El **número imaginario** $i^2 = -1$ o, dicho de otro modo, $i = \sqrt{-1}$, se usa para encontrar soluciones de raíces con números negativos.

Ejemplo:

$$5 \pm \sqrt{-15} = 5 \pm \sqrt{15 \cdot (-1)} = 5 \pm \sqrt{15} \sqrt{-1} = 5 \pm \sqrt{15} i$$

Así pues, el conjunto de los **números complejos**, representados con el símbolo $\mathbb{C}$, está formado por la expresión $a + bi$, donde $a$ y $b$ son números reales y el cuadrado de $i$ es igual a $-1$. La expresión $a$ representa la parte real y $b$ la parte imaginaria. Formalmente:

$$\mathbb{C} = \set{a + bi \quad \text{tal que} \quad a,b \quad \text{son números reales}}$$

### 3.1. Representación de los números complejos: forma binómica

$$z = a + bi$$

Ejemplos:

<table>
	<tr>
		<th>NÚMERO COMPLEJO</th>
		<th>PARTE REAL</th>
		<th>PARTE IMAGINARIA</th>
	</tr>
	<tr>
		<td>$z_1 = 2 + 3i$</td>
		<td>$2$</td>
		<td>$3$</td>
	</tr>
	<tr>
		<td>$z_2 = 3 - 4i$</td>
		<td>$3$</td>
		<td>$-4$</td>
	</tr>
	<tr>
		<td>$z_3 = -2/3 + 8i$</td>
		<td>$-2/3$</td>
		<td>$8$</td>
	</tr>
	<tr>
		<td>$z_4 = \sqrt{2} + 10i$</td>
		<td>$\sqrt{2}$</td>
		<td>$10$</td>
	</tr>
</table>

#### Representación gráfica

El número complejo $a + bi$ se identifica con el punto $(a, b)$ del plano.

Ejemplos:

<table>
	<tr>
		<th>NÚMERO COMPLEJO</th>
		<th>PARTE REAL</th>
		<th>PARTE IMAGINARIA</th>
		<th>PUNTO DEL PLANO</th>
	</tr>
	<tr>
		<td>$z_1 = 2 + 3i$</td>
		<td>$2$</td>
		<td>$3$</td>
		<td>$(2, 3)$</td>
	</tr>
	<tr>
		<td>$z_2 = 3 - 4i$</td>
		<td>$3$</td>
		<td>$-4$</td>
		<td>$(3, -4)$</td>
	</tr>
	<tr>
		<td>$z_3 = -2/3 + 8i$</td>
		<td>$-2/3$</td>
		<td>$8$</td>
		<td>$(-2/3, 8)$</td>
	</tr>
	<tr>
		<td>$z_4 = \sqrt{2} + 10i$</td>
		<td>$\sqrt{2}$</td>
		<td>$10$</td>
		<td>$(\sqrt{2}, 10)$</td>
	</tr>
</table>

#### 3.3.1. Suma y resta de complejos en forma binómica

Para sumar números complejos, sumamos las partes reales y las partes imaginarias **por separado**. En cierta forma, es como si tratamos el número $i$ como si fuera la variable de un polinomio: agrupamos lo términos que no tienen $i$ por un lado y los términos que sí lo tienen por otro.

**Ejemplo de suma**:

Si tenemos $z_1 = 1 + 2i$ y $z_2 = 4 + 3i$, entonces:

$$z_1 + z_2 = (1 + 2i) + (4 + 3i)$$
$$= (1 + 4) + (2 + 3)i$$
$$= 5 + 5i$$

**Ejemplo de resta**:

$$z_1 - z_2 = z_1 + (-z_2)$$
$$= (2 - i) + (-1 - 3i)$$
$$= (2 - 1) + (-1 - 3)i$$
$$= 1 - 4i$$

#### 3.3.2. Producto de complejos en forma binómica

Para multiplicar un número complejo por un número real, multiplicamos la parte real e imaginaria del número complejo por el número real.

**Ejemplo**:

$$a \cdot z = a \cdot (1 + 2i) = a \cdot 1 + a \cdot 2i = a + 2ai$$

Esto es así porque todo número real $a$ se puede escribir como $a + 0i$.

Para multiplicar números complejos, tenemos que aplicar la propiedad distributiva; es decir, multiplicar todo por todo.

**Ejemplo**:

$$z_1 \cdot z_2 = (1 + 2i) \cdot (4 + 3i)$$
$$= 1 \cdot (4 + 3i) + 2i \cdot (4 + 3i)$$
$$= 1 \cdot 4 + 1 \cdot 3i + 2 \cdot 4i + 2 \cdot 3i^2$$
$$= 1 \cdot 4 + 1 \cdot 3i + 2 \cdot 4i - 2 \cdot 3 \quad \text{(utilizando } i^2 = -1 \text{)}$$
$$= (1 \cdot 4 - 2 \cdot 3) + (1 \cdot 3 + 2 \cdot 4)i$$
$$= -2 + 11i$$

#### 3.3.3. El conjugado de un número complejo

El **conjugado de un número complejo**, $z = a + bi$, es otro número complejo con la misma parte real pero con la parte imaginaria cambiada de signo. El conjugado de un número complejo $z$ se representa como $\overline{z}$.

Si tenemos $z = 1 + 2i$, su conjugado es $\overline{z} = 1 - 2i$.

#### 3.3.4. División de números complejos en forma binómica

Hay dos casos:

1. El denominador es un número real. Por ejemplo:
	$$\frac{z_1}{z_2} = \frac{1 + 2i}{5}$$

	Lo cual tiene fácil solución:

	$$\frac{z_1}{z_2} = \frac{1 + 2i}{5} = \frac{1}{5} + \frac{2}{5}i$$

2. El denominador es un número complejo. Por ejemplo:
	$$\frac{z_1}{z_2} = \frac{1 + 2i}{3 - 4i}$$

	Para resolver esta división, tenemos que multiplicar y dividir por el conjugado del número complejo del denominador. Por ejemplo:

	$$\frac{z_1}{z_2} = \frac{1 + 2i}{3 - 4i}$$
	$$= \frac{1 + 2i}{3 - 4i} \cdot \frac{3 + 4i}{3 + 4i}$$
	$$= \frac{(1 + 2i)(3 + 4i)}{(3 - 4i)(3 + 4i)}$$
	$$= \frac{3 - 8 + 6i + 4i}{3^2 + 4^2}$$
	$$= \frac{-5 + 10i}{25}$$
	$$= -\frac{5}{25} + \frac{10}{25}i$$
	$$= -\frac{1}{5} + \frac{2}{5}i$$

### 3.4. Forma polar: alternativa para representar los números complejos

A partir de la representación de un punto $(a, b)$, la forma polar se basa en:

- La distancia del punto $(a, b)$ al origen de coordenadas, que se denomina **magnitud** o **módulo**, y habitualmente se representa como $r$.
- El ángulo que forma la recta que une los puntos $(a, b)$ y $(0, 0)$ con el eje positivo de abscisas (en el sentido inverso de las agujas de un reloj), que también se puede llamar **argumento** y se representa como $\theta$.

La siguiente forma de representar un número complejo recibe el nombre de **forma polar**:

$$r_\theta$$

<div align="center">

![](https://github-production-user-asset-6210df.s3.amazonaws.com/60482743/495648391-d9e496dd-6e64-466d-85ff-cd36298fa59a.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250930%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250930T110548Z&X-Amz-Expires=300&X-Amz-Signature=01814692b51c1473088882a5c75c9fc84407c9e6db7796c41d9e95243f7044b9&X-Amz-SignedHeaders=host)
</div>

>De coordenadas cartesianas a coordenadas polares

**Ejemplo a partir de $3,2i,-4$ y $-5i$**:

- El número complejo $3$ tiene parte imaginaria igual a cero. Esto implica que está situado en la parte positiva del eje de las $x$ (de hecho, es un número real positivo). En consecuencia, el ángulo que forma la recta que une el origen y este punto con el eje positivo de las $x$ es precisamente $0$. Por otra parte, la distancia de este punto al origen es también $3$. Por lo tanto, podemos escribir

	$$3 = 3 + 0i = 3_\theta$$

- El número complejo $2i$ tiene parte real igual a cero. Su representación como punto sería $(0, 2)$, y esto implica que está situado en la parte positiva del eje de las $y$. Por otra parte, el ángulo que forma la recta que une el origen y este punto con el eje positivo de las $x$ es un ángulo recto, es decir, tiene un valor de $\frac{\pi}{2}$ rad o $90\degree$. Finalmente, la distancia de este punto al origen es $2$. Por lo tanto, podemos escribir:

	$$2i = 0 + 2i = 2_{\frac{\pi}{2}} = 2_{90\degree}$$

- El número complejo $–4$ tiene parte imaginaria igual a cero y parte real negativa. Esto implica que está situado en la parte negativa del eje de las $x$ (de hecho, es un número real negativo). En consecuencia, el ángulo que forma la recta que une el origen y este punto con el eje positivo de las $x$ es un ángulo plano, es decir, su valor es de $\pi$ rad o $180\degree$. Por otra parte, la distancia de este punto al origen es $4$. Por lo tanto, podemos escribir:

	$$–4 = –4 + 0i = 4_{\pi} = 4_{180\degree}$$

- El número complejo –5i tiene parte real igual a cero y parte imaginaria negativa. Su representación como punto sería (0, -5), y esto implica que está situado en la parte negativa del eje de las y. Por otra parte, el ángulo que forma la recta que une el origen y este punto con el eje positivo de las x es la suma de un ángulo recto y un ángulo plano, es decir, tiene un valor de 3π 2 rad o 270◦ (si medimos los ángulos en el sentido contrario al de las agujas de un reloj). La distancia de este punto al origen es 5. Por lo tanto, podemos escribir:

	$$–5i = 0 – 5i = 5_{\frac{3 \pi}{2}} = 5_{270\degree}$$

<div align="center">

![](https://github-production-user-asset-6210df.s3.amazonaws.com/60482743/495651182-3529a374-245a-4ca8-8f77-6d10cd209058.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250930%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250930T111226Z&X-Amz-Expires=300&X-Amz-Signature=d08d8c01c5c0fe2c6fb4a2ff5bef108d98dde9bfd8d91aecde1f877991b7102a&X-Amz-SignedHeaders=host)
</div>

>Forma polar de los números complejos $3, 2i, -4$ y $-5i$.

#### 3.4.1. De la forma binómica a la forma polar

Dado el binomio $a + bi$, sabemos que la distancia del punto $(a,b)$ al origen $(0,0)$ es:

$$r = \sqrt{a^2 + b^2}$$

La relación entre el ángulo qu forma la recta que une los puntos $(a,b)$ y $(0,0)$ con el eje positivo de las $x$ y el mismo punto $(a,b)$ viene determinada por la expresión:

$$\tan(\theta) = \frac{b}{a}$$

Por lo tanto, $\theta$ se puede obtener con:

- $\theta = \arctan(\frac{b}{a})$, si $a$ (parte real) es positivo.
- $\theta = \arctan(\frac{b}{a}) + \pi$ si $a$ es negativo y $b$ (parte imaginaria) es positivo.
- $\theta = \arctan(\frac{b}{a}) - \pi$ si $a$ es negativo y $b$ es también negativo.

En todos los casos, obtendremos un ángulo $\theta$ dentro del intervalo $[-\pi,\pi]$.

**Ejemplo**:

$$z_1 = 1 + i$$
$$z_2 = -1 - i$$

El número complejo $z_1$ está en el _primer cuadrante_, ya que tiene parte real y parte imaginaria positivas. En cambio, el número complejo $z_2$ está en el _tercer cuadrante_, ya que tiene parte real y parte imaginaria negativas.

El módulo de ambos números complejos es:

$$r_1 = \sqrt{1^2 + 1^2} = \sqrt{2}, \quad r_2  = \sqrt{(-1)^2 + (-1)^2} = \sqrt{2}$$

Ahora, calculas su ángulo (o argumento):

- En el caso de $z_1 = 1 + i$, dado que la parte real es positiva, la fórmula es:

	$$\theta = \arctan \left( \frac{1}{1} \right) = \arctan (1) = \frac{\pi}{4} \text{rad}$$

- En el caso de $z_1 = -1 - i$, dado que tanto la parte real como la parte imaginaria son negativas, la fórmula es:

	$$\theta = \arctan \left( \frac{-1}{-1} \right) - \pi = \arctan (1) - \pi = \frac{\pi}{4} - \pi = \frac{3\pi}{4} \text{rad}$$

Por lo tanto, la forma polar de $z_1$ y $z_2$ es:

$$z_1 = 1 + i = \sqrt{2}_{\frac{\pi}{4}}$$
$$z_2 = -1 - i = \sqrt{2}_{-\frac{3\pi}{4}}$$

>[!IMPORTANT]
>**La representación en forma polar no es única**
>
>Si tenemos un número $r_{\theta}$ y le sumamos cualquier múltiplo de $2\pi$ al ángulo, obtenemos el mismo número.
>
><div align="center">
>
>![](https://github-production-user-asset-6210df.s3.amazonaws.com/60482743/495728589-50d198c2-cb7e-47d2-a05b-fdcc327a1f37.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250930%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250930T140418Z&X-Amz-Expires=300&X-Amz-Signature=656222d513217671f19e200cbbee334a17c7278af43e680d91d9ef47bb69ef47&X-Amz-SignedHeaders=host)
></div>

#### 3.4.2. De la forma polar a la forma binómica

$$z = r_{\theta} = r (\underbrace{\cos(\theta)}_{\text{parte real}} + \underbrace{\sin(\theta)}_{\text{parte imaginaria}} i)$$

**Ejemplo**:

$$\sqrt{3}_{\frac{\pi}{6}} = \sqrt{3} \cos \left( \frac{\pi}{6} \right) + \sqrt{3} \sin \left( \frac{\pi}{6} \right) i$$
$$= \sqrt{3} \frac{\sqrt{3}}{2} + \sqrt{3} \frac{1}{2}i$$
$$= \frac{3}{2} + \frac{\sqrt{3}}{2} i$$

Para ángulos del segundo, tercer y cuarto cuadrante, utilizamos estas reglas:

- Si $\theta \in \left( \frac{\pi}{2}, \pi \right)$ (segundo cuadrante), entonces:
	$$\sin(\theta) = \sin(\pi - \theta)$$
	$$\cos(\theta) = -\cos(\pi - \theta)$$
- Si $\theta \in \left( -\pi, -\frac{\pi}{2} \right)$ (tercer cuadrante), entonces:
	$$\sin(\theta) = -\sin(\pi + \theta)$$
	$$\cos(\theta) = -\cos(\pi + \theta)$$
- Si $\theta \in \left( -\frac{\pi}{2}, \pi \right)$ (cuarto cuadrante), entonces:
	$$\sin(\theta) = -\sin(-\theta)$$
	$$\cos(\theta) = \cos(-\theta)$$

<div align="center">

![](https://github-production-user-asset-6210df.s3.amazonaws.com/60482743/495737331-8077ca43-d5a0-422d-a16f-a26a38d4ec2b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250930%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250930T142221Z&X-Amz-Expires=300&X-Amz-Signature=6b037ddf2cdd85655c04e1b34299ae2028de431aa3adbae52baf0a761d0dfd9b&X-Amz-SignedHeaders=host)
</div>

>Relaciones trigonométricas de ángulos del segundo, tercer y cuarto cuadrante.

#### 3.4.3. Operaciones aritméticas con números complejos en forma polar

##### Suma y resta de números complejos en forma polar

Para sumar o restar dos números complejos debemos expresarlos primero en forma binómica ($z = a + bi$) y, después, sumarlos tal como se ha indicado en el subapartado anterior.

**Ejemplo**:

Dados $z_1 = 2 \pi$ y $z_2 = 5_{-\frac{\pi}{2}}$,

1. **Pasamos ambos números a forma binómica**.

	$$z_1 = 2 \underbrace{\cos(\pi)}_{-1} + 2 \underbrace{\sin(\pi)}_{0} i = -2$$  
	$$z_2 = 5 \underbrace{\cos \left( - \frac{\pi}{2} \right)}_{0} + 5 \underbrace{\sin \left( - \frac{\pi}{2} \right)}_{-1} i = -5i$$

2. **Operamos**

	$$z_1 + z_2 = -2 + (-5i) = -2 - 5i$$
	$$z_2 - z_2 = -2 - (-5i) = -2 + 5i$$

##### Producto de números complejos en forma polar

Para multiplicar dos números en forma polar se multiplican los módulos y se suman los argumentos [$r_{\theta_1} \cdot s_{\theta_2} = (r \cdot s)_{\theta_1 + \theta_2}$].

**Ejemplo**:

Dados $z_1 = 2_{\pi}$ y $z_2 = 5_{-\frac{\pi}{2}}$, entonces:

$$z_1 \cdot z_2 = 2_{\pi} \cdot 5_{-\frac{\pi}{2}}$$
$$= (2 \cdot 5)_{\pi + \left( - \frac{\pi}{2} \right)}$$
$$= 10_{\frac{\pi}{2}}$$

##### División de números complejos en forma polar

Para dividir dos números en forma polar se dividen los módulos y se restan los argumentos [$\frac{r_{\theta_1}}{s_{\theta_2} } = (\frac{r}{s})_{\theta_1 - \theta_2}$].

**Ejemplo**:

Dados $z_1 = 2_{\pi}$ y $z_2 = 5_{-\frac{\pi}{2}}$, entonces:

$$\frac{z_1}{z_2} = \frac{2_{\pi}}{5_{-\frac{\pi}{2}}}$$
$$= \left( \frac{2}{5} \right)_{\pi - \left( - \frac{\pi}{2} \right)}$$
$$= 0,4_{\frac{3\pi}{2}}$$

### 3.5. Exponencial de un número complejo

El exponencial de un número complejo imaginario se obtiene a partir de la  **fórmula de Euler**:

$$e^{\theta_i} = \cos (\theta) + \sin (\theta) i$$

Dado que todo número complejo se puede expresar como $z = r(\cos (\theta) + \sin(\theta)i)$ y que, como acabamos de ver, $e^{\theta_i} = \cos (\theta) + \sin (\theta) i$, entonces esto nos permite representar los números complejos en **forma exponencial**, la última de las tres formas posibles que veremos para representar a un número complejo:

$$z = re^{\theta i}$$

Donde:
- $r = |z|$ es el módulo (la distancia del número complejo al origen).
- $\theta$ es el argumento de $z$ (el ángulo con el eje real positivo).

**Ejemplos de representación en las tres formas**:

<table>
	<tr>
		<th>BINÓMICA</th>
		<th>POLAR</th>
		<th>EXPONENCIAL</th>
	</tr>
	<tr>
		<td>$z_1 = 1 + i$</td>
		<td>$z_1 = \sqrt{2}_{\frac{\pi}{4}}$</td>
		<td>$z_1 = \sqrt{2}e^{\frac{\pi}{4}i}$</td>
	</tr>
	<tr>
		<td>$z_2 = i$</td>
		<td>$z_2 = 1_{\frac{\pi}{2}}$</td>
		<td>$z_2 = e^{\frac{\pi}{2}i}$</td>
	</tr>
	<tr>
		<td>$z_3 = 1 + \sqrt{3}i$</td>
		<td>$z_3 = 2_{\frac{\pi}{3}}$</td>
		<td>$z_3 = 2e^{\frac{\pi}{3}i}$</td>
	</tr>
	<tr>
		<td>$z_4 = 1 - \sqrt{3}i$</td>
		<td>$z_4 = 2_{-\frac{\pi}{3}}$</td>
		<td>$z_4 = 2e^{-\frac{\pi}{3}i}$</td>
	</tr>
</table>

#### 3.5.1. Operaciones de los números complejos en forma exponencial

Las operaciones en forma exponencial son equivalentes a las operaciones vistas en forma polar:

- **Producto**: Se multiplican los módulos y se suman los argumentos:

	$$2e^{\frac{\pi}{3}i} \cdot 3e^{\frac{\pi}{2}i} = (2 \cdot 3)e^{\left( \frac{\pi}{3} + \frac{\pi}{2} \right) i}$$
	$$= 6e^{\frac{5\pi}{6} i}$$

	En el caso general:

	$$r_1 e^{\theta_1 i} \cdot r_2 e^{\theta_2 i} = r_1 r_2 e^{(\theta_1 + \theta_2) i}$$

- **División**: Se dividen los módulos y se restan los argumentos:

	$$\frac{2e^{\frac{\pi}{3}i}}{3e^{\frac{\pi}{2}i}} = \frac{2}{3} e^{\left( \frac{\pi}{3} - \frac{\pi}{2} \right) i}$$
	$$= \frac{2}{3} e^{-\frac{\pi}{6} i}$$

	En el caso general:

	$$\frac{r_1 e^{\theta_1 i}}{r_2 e^{\theta_2 i}} = \frac{r_1}{r_2} e^{\left( \theta_1 - \theta_2 \right) i}$$

- **Conjugación**: El conjugado de un complejo expresado en forma exponencial es el número complejo de módulo igual y argumento opuesto:

	$$\overline{2 e^{\frac{\pi}{3} i}} = 2 e^{- \frac{\pi}{3} i}$$

	En el caso general:

	$$\overline{re^{\theta i}} = re^{-\theta i}$$

- **Suma y resta**: Para sumar o restar números complejos en forma exponencial debemos expresarlos en forma binómica:

	$$r_1 e^{\theta_1 i} + r_2 e^{\theta_2 i} = r_1 (\cos (\theta_1) + i \sin (\theta_1)) r_2 (\cos(\theta_2) + i \sin(\theta_2))$$
	$$= (r_1 \cos(\theta_1) + r_2 \cos(\theta_2)) + i (r_1 \sin(\theta_1) + r_2 \sin(\theta_2))$$

La forma exponencial permite calcular potencias de números complejos de manera muy sencilla, utilizando las propiedades de la función exponencial que ya conocíamos cuando trabajábamos con números reales:

- **Potenciación**: Para elevar un número complejo en forma exponencial a la potencia $n$, elevamos a $n$ el módulo y multiplicamos por $n$ el argumento:

	$$\left( re^{\theta i} \right)^n = r^n e^{n \theta i}$$

### 3.6. Las raíces de la unidad

En el conjunto de los números reales

- Las raíces de índice par (raíz cuadrada, raíz cuarta, etc.) no tienen solución si el número es negativo.
- Las raíces de índice par (raíz cuadrada, raíz cuarta, etc.) tienen dos soluciones si el número es positivo.
- Las raíces de índice impar (raíz cúbica, raíz quinta, etc.) tienen siempre una solución.

En el conjunto de los números complejos hay diferencias respecto a lo que sucede en el conjunto de los números reales:

- Una raíz cuadrada tiene siempre dos soluciones.
- Una raíz cúbica tiene siempre tres soluciones.
- Y, de manera general, una raíz enésima tiene siempre $n$ soluciones.

#### 3.6.1. Las raíces cúbicas de la unidad

La ecuación $z^n = re^{\theta i}$ tiene $n$ soluciones, las cuales son todas las raíces enésimas de un número complejo. Se hallan a partir de esta fórmula:

$$z = \sqrt[n]{r} e^{\left( \frac{\theta}{n} + \frac{2\pi}{n} k \right) i}, k=0,1,2,3,\dots,n-1$$

Donde:
- $r$: Módulo del número complejo.
- $n$: Índice de la raíz.
- $k$: Contador de soluciones que toma los valores $0,1,2,\dots,n-1$. Cada valor de $k$ produce una de las $n$ raíces distintas.

**Ejemplo**:

Dada la ecuación $z^3 = -8$, los números $z$ que verifican esta ecuación son **raíces cúbicas de la unidad**. Parar resolverla, tenemos que tener en cuenta que el número -8 es un número complejo que en coordenadas polares tiene módulo 8 y argumento $\pi$:

$$-8 = 8_{\pi} = 8_{\pi + 2\pi} = 8_{\pi + 4\pi} = 8_{\pi + 6\pi} = \dots$$
$$= 8e^{\pi i} = 8e^{(\pi + 2\pi) i} = 8e^{(\pi + 4\pi)i} = 8e^{(\pi + 6\pi)i} = \dots$$
$$= 8e^{(\pi + 2k\pi) i}, k=0,1,2,3,\dots$$

Así pues, la ecuación $z^3=-8$ es equivalente a:

$$z^3 = 8e^{(\pi+2k\pi)i}, \quad k=0,1,2,3,\dots$$

Para resolver esta ecuación, añadimos raíces cúbicas a ambos lados de la ecuación o, lo que es lo mismo, elevar ambas partes de la igualdad a la potencia $\frac{1}{3}$. Obtenemos:

$$(z^3)^{\frac{1}{3}} = z = \underbrace{\sqrt[3]{8}}_2e^{\left( \frac{\pi}{3} + \frac{2k\pi}{3} \right)i}, \quad k=0,1,2,3,\dots$$

Para determinar las soluciones debemos dar valores a $k$. Como sabemos que debemos encontrar exactamente 3 raíces cúbicas, sustituimos el valor de la $k$ por $0, 1$ y $2$:

- $k = 0: \qquad z = \sqrt[3]{8}e^{\frac{\pi}{3}i} = 2 \left( \cos \left( \frac{\pi}{3} \right) + i \sin \left( \frac{\pi}{3} \right) \right) = 2 \left( \frac{1}{2} + \frac{\sqrt{3}}{2} i \right) = 1 + \sqrt{3}i$
- $k = 1: \qquad z = \sqrt[3]{8}e^{\pi i} = 2 (\cos(\pi) + i \sin(\pi)) = 2(-1) = -2$
- $k = 2: \qquad z = \sqrt[3]{8}e^{\left(\frac{5\pi}{3} \right) i} = 2 \left( \cos \left( \frac{5\pi}{3} \right) + i \sin \left( \frac{5\pi}{3} \right) \right) = 2 \left( \frac{1}{2} - \frac{\sqrt{3}}{2} i \right) = 1 - \sqrt{3}i$
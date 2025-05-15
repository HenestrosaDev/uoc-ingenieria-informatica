# 2. Expresiones algebraicas (resumen)

Dada la expresión algebraica:
$$a − 3c + 2d − 5ax$$

Identificamos:
- Términos (hay 4): $a$, $−3c$, $2d$ y $−5ax$
- Variables: $a$, $c$, $d$, $x$.

Recordemos que entre variables o entre números y variables es preferible obviar los signos de multiplicar ⋅ o ×.

**Propiedades de la suma y el producto**:
- **Elemento neutro de la suma**: Es el 0 porque, sumado a cualquier otra letra o número, no lo modifica: $a + 0 = 0 + a = a$.
- **Elemento neutro del producto**: Es el 1 porque, multiplicado por cualquier
otra letra o número, no lo modifica: $a ⋅ 1 = 1 ⋅ a = a$.
- **Elemento opuesto de $a$**. Es $−a$ porque, sumados, el resultado es el elemento neutro de la suma: $a + (−a) = (−a) + a = 0$.
- **Inverso de $a$**. Es \frac{1}{a} (siendo $a ≠ 0$) porque su producto es el elemento neutro del producto: $a \cdot \frac{1}{a} = \frac{1}{a} \cdot a = 1$.
- **Propiedad conmutativa de la suma**: La suma de dos elementos no depende del orden en el que se realiza: $a + b = b + a$.
- **Propiedad asociativa de la suma**: La suma de tres elementos no depende del orden en el que se hagan las diferentes sumas: $a + b + c = (a + b) + c = a + (b + c)$.
- **Propiedad conmutativa del producto**: El producto de dos elementos no depende del orden en el que se realice: $a \cdot b = b \cdot a$.
- **Propiedad distributiva del producto respecto de la suma**: Un producto de un elemento por una suma puede descomponerse como la suma de los productos del elemento por cada uno de los sumandos: $a \cdot (b + c) = (b + c) \cdot a = a \cdot b + a \cdot c$.

### 2.1.3. Manipulación

A partir de las propiedades anteriores, se tienen que simplificar las expresiones algebraicas. La simplificación consiste en convertir la expresión original en otra que sea equivalente, pero con el mínimo número de términos posible.

$a − 4b − 3a + 5a − b$ es equivalente a $3a -5b$.

### 2.1.4. Propiedades

- Una **igualdad numérica es cierta** si el resultado del miembro de la izquierda es igual al resultado del miembro de la derecha. Por ejemplo:

	$$3 \cdot 4 − 5 = 38 − 15 \cdot 2 − 1$$

- Una **igualdad numérica es falsa** si el resultado del miembro de la izquierda no es igual al resultado del miembro de la derecha. Por ejemplo:

	$$4 \cdot (−2) + 8 = 3 − 7 \cdot 11$$

## 2.2. Ecuaciones

### 2.2.1. Definición

Una ecuación es una igualdad entre expresiones algebraicas. Las letras son **incógnitas**. Cada uno de los sumandos de cada uno de los miembros se denomina **término**.  Un término que no contiene ninguna incógnita se denomina término numérico o **término independiente**.

El número de incógnitas que se multiplican es el **grado del término**.

Dada la ecuación

$3xy − 2a + 5x^{2}y^{2} = x + 11a^{2}x$

El término $11a^{2}x$ tiene **3** incógnitas que se multiplican, una $x$ y dos $a$. Por tanto, su grado es **3**.

El grado de la ecuación es **4**, ya que el término con más incógnitas es $5x^{2}y^{2}$,
y tiene **4** (dos $x$ y dos $y$).

### 2.2.2. Soluciones

La solución de una ecuación se define como cada uno de los valores de las variables para las que se cumple la igualdad. Puede tener más de una solución.

### 2.2.3. Ecuaciones equivalentes

Dos ecuaciones que tienen exactamente las mismas soluciones se denominan **ecuaciones equivalentes**. 

$$7x − 3 = 6x − 4 \qquad 14x − 6 = 12x − 8$$

Son equivalentes ya que la única solución para ambas es $-1$.

### 2.2.4. Proceso de resolución

1. **Simplificar la ecuación**.
	
	En los casos en que la ecuación contiene números fraccionarios, conviene (a pesar de que no es imprescindible) transformar la ecuación en otra equivalente que no contenga denominadores.  

	Por ejemplo, dada esta ecuación:

	$$\frac{3x}{5} - \frac{2}{3} = 4x - \frac{1}{3}$$

	1. Buscar mcm de los denominadores: $mcm(5, 3) = 15$
	2.Se escribe el mismo denominador en todos los términos, se divide el mcm entre el denominador que tienen (si no tienen denominador, significa que es igual a $1$) y se multiplica el resultado por el numerador. 
		$$\frac{9x}{15} - \frac{10}{15} = \frac{60x}{15} - \frac{5}{15} \text{ es equivalente a } \frac{9x-10}{15} = \frac{60x-5}{15}$$
	3. Se elimina el denominador de ambos miembros (multiplicándolos por el valor de este mismo denominador). De este modo, queda una ecuación equivalente sin denominadores.
		$$15 \cdot \frac{9x-10}{15} = 15 \cdot \frac{60x-5}{15}$$
		Resulta en
		$$9x - 10 = 60x - 5$$
2. **Agrupar términos numéricos**.

	Siguiendo con la ecuación simplificada anterior, se cambia el signo del término independiente al llevarlo a la otra igualdad para simplificarlo con el otro término independiente:
	
	$$9x = 60x - 5 + 10 \text{ es equivalente a } 9x = 60x + 5$$

3. **Agrupar términos del mismo grado**.

	Mismo procedimiento que en el paso 2:

	$$9x - 60x = 5 \text{ es equivalente a } -51x = 5$$

4. **Dividir ambos lados de la ecuación**.

	$$\frac{-51x}{-51} = \frac{-51}{-51} \text{ es equivalente a } x = -\frac{5}{51}$$

## 2.3. Ecuaciones de primer grado

### 2.3.1. Definición 

Contienen una incógnita de primer grado (con exponente 1).

### 2.3.2. Soluciones

Pueden tener varias soluciones ($5x - 3 = 5x - 3$), una única solución ($2x - 1 = 3x + 4$) o ninguna ($5x - 7 = 5x + 12$ ya que equivale a $0x = 19$).

### 2.3.3. Proceso de resolución

Mirar [2.2.4. Proceso de resolución](#224-proceso-de-resolución).

## 2.4. Ecuaciones de segundo grado

### 2.4.2. Definición

Contienen una incógnita incluyendo términos de segundo grado (con exponente 2).

Tienen que estar igualadas a 0, como $ax^{2} + bx + c = 0$, donde $a \neq 0$, ya que no sería una ecuación de segundo grado.

Es conveniente que el coeficiente de grado 2 sea positivo. Si por algún motivo es negativo, basta con multiplicar ambos miembros de la ecuación por $-1$.  

>Por ejemplo, $-2x^{2} + 10x − 12 = 0$ equivale a $2x^{2} - 10x + 12 = 0$. De hecho, se puede simplificar dividiendo por el $mcm(2, -10, 12) = 2$, por lo que $x^{2} - 5x + 6 = 0$.

### 2.4.2. Proceso de resolución

$$ax^{2} + bx + c = 0$$

1. **Caso $c = 0$**
	1. **Factorizar la ecuación**

		$$ax^{2} + bx = 0 \implies x(ax + b) = 0$$

	2. **Usa la propiedad del producto cero**

		Según la propiedad del producto cero, si el producto de dos factores es igual a 0, entonces al menos uno de los factores debe ser 0. Por lo tanto, tenemos dos casos:
		
		- $x = 0$
		- $ax + b = 0$

	3. **Resuelve cada caso**

		- El primer caso ya es $x = 0$.
		- Para el segundo caso:
			$$ax + b = 0 \implies ax = -b \implies x = -\frac{b}{a}$$

	4. **Solución final**
		$x = 0$ y $x = -\frac{b}{a}$
2. **Caso $b = 0$**
	1. **Despeja $x^{2}$**
		$$ax^{2} = -c$$
	2. **Divide ambos lados entre $a$**

		$$x^{2} = -\frac{c}{a}$$

	3. **Toma la raíz cuadrada**

		Toma la raíz cuadrada en ambos lados. No olvides considerar tanto la raíz positiva como la negativa:

		$$x = \pm \sqrt{-\frac{c}{a}}$$

	4. **Solución final**

		$$x = \pm \sqrt{-\frac{c}{a}}$$

		Siempre que $-\frac{c}{a}$ sea un número positivo.

3. **Caso completo**
	1. **Aplicar la fórmula de Bhaskara**
		$$x = \frac{-b \pm \sqrt{b^{2} - 4ac}}{2a}$$

	Ejemplo para la ecuación $x^{2} - 4x + 4 = 0$:

	$x = \frac{4 \pm \sqrt{(-4)^2 - 4(1)(4)}}{2(1)} = \frac{4 \pm 0}{2} = 2$

### 2.4.3. Soluciones

La expresión contenida en la raíz cuadrada de la solución se denomina **discriminante**, y se indica con la letra griega $\Delta$.

$\Delta = b^{2} - 4ac$

Esto permite saber el número de soluciones para cada solución de cualquier ecuación de segundo grado.

- Si $\Delta > 0$, hay dos soluciones para la ecuación.
- Si $\Delta = 0$, solo hay una posible solución.
- Si $\Delta < 0$, no hay ninguna solución real para la ecuación.

### 2.4.4. Ecuaciones cuadráticas

Son ecuaciones que tienen,en forma normal, tres términos como máximo: el término numérico, un término de cualquier grado y otro término de grado doble del anterior. 

$$x^{4} + 13x^{2} + 36 = 0 \implies (x^{2})^{2} - 13x^{2} + 36 = 0$$

Si consideramos que la incógnita de la ecuación es $x^{2}$, aplicando la fórmula de Bhaskara obtenemos:

$$(x^{2}) = \frac{13 \pm \sqrt{(-13)^{2} - 4 \cdot 1 \cdot 36}}{2} = \frac{13 \pm \sqrt{25}}{2}$$

Por lo tanto, $x^{2} = 4$ o $x^{2} = 9$. Los valores de x son:

- Si $x^{2} = 4$, $x = \pm\sqrt{4} = \pm2$
- Si $x^{2} = 9$, $x = \pm\sqrt{9} = \pm3$

Las posibles soluciones de $x$ son $x = \set{2, -2, 3, -3}$.

---

Otro ejemplo:

$$3x^{8} - 6x^{4} - 9 = 0 \implies 3(x^{4})^{2} - 6x^{4} - 9 = 0$$

Aplicando la fórmula:

$$x^{4} = \frac{6 \pm \sqrt{(-6)^{2} - 4 \cdot 3 \cdot (-9)}}{2 \cdot 3} = \frac{6 \pm 12}{6}$$

Por lo tanto, $x^{4} = 3$ o $x^{4} = -1$. Los valores de x son:

- Si $x^{4} = 3$, $x = \pm\sqrt[4]{3}$.
- Si $x^{4} = -1$, no hay solución, ya que no hay ningún número que, elevado a $4$, dé $−1$.

Las posibles soluciones de $x$ son $x = \set{-\sqrt[4]{3}, +\sqrt[4]{3}}$.

## 2.5. Inecuaciones

### 2.5.1. Definición

Es una desigualdad entre expresiones algebraicas. Se utilizan los signos $<, \leq, >, \geq$.

### 2.5.2. Soluciones

- Una inecuación puede tener más de una solución.
- Dos inecuaciones que tienen las mismas soluciones se llaman **inecuaciones equivalentes**.

### 2.5.3. Proceso de resolución

**Resolución de inecuaciones de primer grado**:

Se resuelven igual que las ecuaciones de primer grado, excepto cuando se pasa un número negativo multiplicando o dividiendo al otro lado, ya que se cambia el símbolo de la inecuación.

Dada la siguiente inecaución:

$$2x + 5 \geq 2 - x \implies 2x + x \geq 2 - 5 \implies 3x \geq -3 \implies x \geq -\frac{3}{3} \implies x \geq -1$$

En cambio, $-3x - 6 \leq 0 \implies -3x \leq 6 \implies x \geq \frac{6}{-3} \implies x \geq -2$

Una vez tenemos el valor de $x$, damos la solución de la inecuación como un intervalo. En el primer caso, sería $[-1, +\infty)$ y en el segundo caso, sería $[-2, +\infty)$.

---

**Resolución de inecuaciones de segundo grado**:

Se sigue el mismo procedimiento que las ecuaciones de segundo grado, teniendo en cuenta el matiz del cambio del símbolo de la inecuación.

Dada la siguiente inecuación: 

$$2x^{2} − 2x − 2 ≤ x^{2} − x + 4 \implies x^{2} - x - 6 \leq 0$$

$$x = \frac{-(-1) \pm \sqrt{(-1)^{2} - 4 \cdot 1 \cdot (-6)}}{2 \cdot 1} = \frac{1 \pm 5}{2}$$

$x = 3$ y $x = -2$, por lo que hay que ver qué pasa con cada una de esas zonas en la recta real. Hay que tener en cuenta que estamos buscando un valor negativo o igual a 0. 

Para ello, sustituimos un valor de $x$ que esté en el intervalo $(-\infty, -2]$. Voy a usar el $-3$. SOLO NOS INTERESA EL SÍMBOLO.

$$(-3)^{2} - (-3) - 6 = 6$$

El resultado es positivo, por lo que **no** aplica para la inecuación planteada. Si ahora probamos con un valor el intervalo $[-2, 3]$ (voy a usar $0$):

$$0^2 - 0 - 6 = -6$$

El resultado es negativo, por lo que **aplica** para la inecuación planteada. Si ahora probamos con un valor en el intervalo $[3, +\infty)$ (voy a usar $4$):

$$4^{2} - 4 - 6 = 6$$

El resultado es positivo, por lo que **no** aplica para la inecuación planteada. 

La solución de la inecuación es $[-2, 3]$.

La solución inversa sería $(-\infty, -2] \cup [3, +\infty)$.

---

Dada la siguiente inecuación:

$$2x^{2} - x + 11 \leq 3 \implies 2x^{2} - x + 8 \leq 0$$

$$\frac{-(-1) \pm \sqrt{(-1)^{2} - 4 \cdot 2 \cdot 8}}{2 \cdot 2} = \frac{1 \pm \sqrt{-63}}{4}$$

Al aplicar la fórmula de Baskhara, comprobamos que la inecuación no tiene solución. No obstante, esto no implica que hayamos acabado el planteamiento, ya que la ecuación puede ser siempre mayor o menor que 0. Por lo tanto, simplemente sustituimos un valor cualquiera en la $x$ para comprobar si va a ser siempre positivo o negativo.

Por ejemplo, si $x = 0$, sale que el resultado es $8$ (positivo), por lo que significa que la inecuación va a ser siempre positiva. Esto implica que la inecuación, efectivamente, no tiene solución.

No obstante, si la inecuación fuese $2x^{2} - x + 11 \geq 3$, la solución de la inecuación son todos los números reales o, lo que es lo mismo, el intervalo $(-\infty, +\infty)$.

---



$$\frac{3x^{2} - 21x - 54}{-x^{2} - 4x - 4} \geq 0$$

Se calcula el numerador y el denominador independientemente, de la siguiente forma:

- $3x^{2} - 21x -54 = 0 \implies x^{2} - 7x - 18 = 0 \implies $

	$$\frac{7 \pm \sqrt{49 - 4 \cdot 1 \cdot (-18)}}{2} = \frac{7 \pm 11}{2}$$
	- $x_1 = \frac{7 + 11}{2} = 9$
	- $x_2 = \frac{7 - 11}{2} = -2$

- $-x^{2} - 4x - 4 = 0$

	$$\frac{4 \pm \sqrt{16 - 4 \cdot (-1) \cdot (-4)}}{-2}$$
	- $x = -2$

Se representa $x_1 = -2$ y $x_2 = 9$ en la recta numérica y se sustituyen valores para los tres segmentos resultantes:

- $(-\infty, -2)$: Se sustituye $x = 3$ y se comprueba si el signo es positivo o negativo. En este caso, es negativo, por lo que no es solución de la inecuación porque $x \geq 0$.
- $(-2, 9]$: Se sustituye $x = 0$ y se comprueba si el signo es positivo o negativo. En este caso, es positivo, por lo que es solución de la inecuación porque $x \geq 0$. 
- $[9. + \infty)$: Se sustituye $x = 10$ y se comprueba si el signo es positivo o negativo. En este caso, es negativo, por lo que no es solución de la inecuación porque $x \geq 0$. 

Es importante no incluir la solución del denominador en el intervalo porque el **denominador nunca puede ser 0**.

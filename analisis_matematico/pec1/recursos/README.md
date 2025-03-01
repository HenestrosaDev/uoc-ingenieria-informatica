# RESUMEN Funciones reales de variable real

>[!NOTE]
>Hay algunos apartados sin numerar, ya que han sido añadidos de forma adicional a la fuente de referencia (_Funciones reales de variable real_ proporcionado por la UOC).

## 1. Conjuntos numéricos

![](img/conjunto_numeros.png)

### 1.1. El conjunto de los números naturales

Conjunto formado por los enteros positivos. NO INCLUYEN el 0.

$$\mathbb{N} = \set{1,2,3,\dots}$$

Generalmente, el $0$ se EXCLUYE de los naturales. No hay consenso al respecto. Cuando se incluye, se escribe:

$$\mathbb{N_0} = \set{0,1,2,3,\dots}$$

**Propiedades de la suma**:
- **Asociativa**: $(a + b) + c = a + (b + c)$
- **Conmutativa**: $a + b = b + a$
- **Elemento neutro**: $a + 0 = a$

**Propiedades del producto**:
- **Asociativa**: $(a \cdot b) \cdot c = a \cdot (b \cdot c)$
- **Conmutativa**: $a \cdot b = b \cdot a$
- **Elemento neutro**: $a \cdot 1 = a$
- **El 0 es absorbente respecto al producto**: $a \cdot 0 = 0$
- **Distributiva de producto respecto a suma**: $a \cdot (b + c) = a \cdot b + a \cdot c$

El conjunto de los números naturales dotado con las dos operaciones de suma y producto $(\mathbb{N}, +, \cdot)$ y con las propiedades anteriormente descritas (excepto la del producto conmutativo) se dice que tiene estructura algebraica de **semianillo**. Si además se cumple la propiedad del producto conmutativo, se trata de un **semianillo conmutativo**.

#### 1.1.1. Ordenación

Consecuencias de la ordenación:
- **Propiedad reflexiva**: $a \le a$
- **Propiedad antisimétrica**: $a \le b \wedge b \le a \rightarrow a = b$
- **Propiedad transitiva**: $a \le b \wedge b \le c \rightarrow a \le c$
- **Propiedad de orden orden total**: $\forall a, b \in \mathbb{N} \rightarrow a \le b \vee b \le a$

### 1.2. El conjunto de los números enteros

Conjunto formado por los números naturales, sus opuestos y el CERO.

$$\mathbb{Z} = \set{\dots,-2,-1,0,1,2,\dots}$$

**Propiedades**:
- Todas las propiedades de los números naturales.
- **Elemento opuesto respecto de la suma**: $a + (-a) = (-a) + a = 0$

El conjunto de los números enteros dotado con las dos operaciones de suma y producto $(\mathbb{Z}, +, \cdot)$ y con las propiedades anteriormente mencionadas tiene estructura de **anillo conmutativo**.

### 1.3. El conjunto de los números racionales

Se pueden expresar como el cociente entre dos enteros, siempre que el divisor sea distinto de $0$.

$$\mathbb{Q} = \set{\frac{a}{b} \vert a,b \in \mathbb{Z}, b \neq 0}$$

Incluye las fracciones, sean o no irreducibles, que representan los números fraccionarios decimales exactos o periódicos.

Todo número decimal finito se puede expresar en forma de fracción generatriz.

**Propiedades**:
- Todas las propiedades de los números enteros.
- **Elemento inverso respecto del producto**: $a \cdot a^{-1} = a^{-1} \cdot a = 1$

El conjunto de los números racionales $(\mathbb{Q}, +, \cdot, \le)$ tiene estructura de **cuerpo ordenado**, que significa que los números racionales están ordenados y con estos todas las operaciones aritméticas funcionan bien.

### El conjunto de los números irracionales

- No expresables vía cociente de enteros (ni decimal exacto ni periódico).
- No se pueden expresar de forma fraccionaria.
- En forma decimal, tienen un número infinito de decimales no periódicos.
- Se evita el uso de $\mathbb{I}$ para prevenir ambigüedad con Imaginarios.

$$\text{irracionales} = \set{ \sqrt{2}, \pi, e \dots}$$

A veces se usa $\mathbb{Q}^*$ para denotarlos, pero no hay una notación consolidada.

Constituye un cuerpo conmutativo y también es un cuerpo ordenado.

### 1.4. El conjunto de los números reales

Conjunto formado por los racionales y los irracionales.

$$\mathbb{R} = \mathbb{Q} \cup \text{irracionales}$$

#### 1.4.1. Intervalos

Subconjunto de la recta real que contiene todos los números entre dos extremos dados. Se clasifica en:

- **Intervalo cerrados**: Incluyen los extremos. 
	$$[a,b] = \set{x \in \mathbb{R} | a \le x \le b}$$
- **Intervalos abiertos**: No incluyen los extremos.
	$$(a,b) = \set{x \in \mathbb{R} | a < x < b}$$
- **Intervalos semiabiertos o semicerrados**: Incluyen solo uno de los extremos.
	- **Cerrado a la izquierda, abierto a la derecha**: $[a,b)$
	- **Abierto a la izquierda, cerrado a la derecha**: $(a,b]$
- **Intervalos infinitos** o no acotados: No tienen límite en un lado.
	- **Desde un número hasta infinito**: $[a,\infty), (a, \infty)$
	- **Desde menos infinito hasta un número**: $(-\infty,b],  (-\infty,b)$

### El conjunto de los números imaginarios

- Conjunto formado por los complejos cuya parte real es nula.
- Se evita el uso de $\mathbb{I}$ para prevenir ambigüedad con Irracionales.

### El conjunto de los números complejos

Conjunto formado por los reales y los imaginarios.

$$\mathbb{C} = \mathbb{R} \cup \text{imaginarios}$$

## 2. Funciones

### 2.1. Funciones de variable real

#### 2.1.1. Concepto de función. Inyectividad. Exhaustividad. Biyectividad.

Una función de una variable es una relación de correspondencia UNÍVOCA entre elementos de 2 conjuntos.

Se denota como:

$$f: A \rightarrow B$$

Donde:
- $A$ es el conjunto de elementos denominado de **ORIGEN** o **SALIDA**.
- $B$ es el conjunto de elementos denominado de **DESTINO**, **LLEGADA** o IMAGEN.

También se puede denotar como:

$$f(x) = y$$

Donde:
- $x$ es el conjunto de elementos denominado de **ORIGEN** o **SALIDA**.
- $y$ es el conjunto de elementos denominado de **DESTINO**, **LLEGADA** o IMAGEN.

La propiedad diferencial de una función es que cada elemento del conjunto de origen tiene asignado **un único** elemento del conjunto de destino.

Una función se puede representar de 3 formas, principalmente:
- **Analíticamente**: Como expresión algebraica. Por ejemplo, $f(x) = 2x^2 + 1$.
- **Como tabla**: 
	<div align="center">
	
	| x  | f(x) |
	|----|------|
	| -2 | 9    |
	| -1 | 3    |
	| 0  | 1    |
	| 1  | 3    |
	| 2  | 9    |
	</div>
- **Gráficamente** en el plano coordenado:

	<div align="center">
		<img width="400" src="https://portalacademico.cch.unam.mx/sites/default/files/M2u2oa01p01.jpg">
	</div>

Dentro de las funciones, distinguimos la siguiente clasificación según cómo asignan los elementos de un conjunto a otro:

**FUNCIONES INYECTIVAS**

Una función $f(x)$ es **inyectiva** si cada valor de salida $y$ corresponde SOLO con UN valor de entrada $x$.

**Ejemplo**:

Si $f(x) = 2x$, entonces:

$$f(1) = 2(1) = 2, \quad f(2) = 2(2) = 4, \quad f(3) = 2(3) = 6$$

Aquí, cada número tiene una imagen única en el codominio, por lo que es inyectiva.

**FUNCIONES EXHAUSTIVAS**

Una función $f(x)$ es **exhaustiva** si cada valor de salida $y$ en el codominio tiene, al menos, un valor de $x$ que lo genera.

**Ejemplo**:

Queremos verificar que para cualquier $y$ real podemos encontrar un valor de $x$ tal que $f(x) = y$.

Tomamos de ejemplo $f(x) = x^3$ y despejamos $x$:

$$x = \sqrt[3]{y}$$

Como para cualquier número real $y$ siempre podemos encontrar un valor de $x$ tal que $x^3 = y$, la función es **exhaustiva**.

Como contraejemplo, tenemos a $f(x) = x^2$, ya que no hay ningún valor de $x$ par el que, por ejemplo, $x^2 = -1$.

**FUNCIONES BIYECTIVAS**

Una función es **biyectiva** si es **tanto biyectiva como exhaustiva**. Esto significa que:

1. Cada $y$ tiene un único $x$ que lo produce (inyectiva).
2. Cada $y$ en el codominio es alcanzado (exhaustiva).

Tomamos de ejemplo $f(x) = 3x + 2$:

1. **Inyectividad**:

	$$f(x_1) = f(x_2) \rightarrow 3x_1 + 2 = 3x_2 + 2$$

	Restamos $2$ en ambos lados:
	$$3x_1 = 3x_2$$

	Dividimos por $3$:
	$$x_1 = x_2$$
	
	Esto confirma que la función es inyectiva.
2. **Exhaustividad**:

	Queremos ver si para **cualquier** $y$ existe un $x$ tal que:

	$$y = 3x + 3$$

	Despejamos $x$:

	$$x = \frac{y - 2}{3}$$

	Como siempre podemos encontrar un $x$ para cualquier $y$, la función es **exhaustiva**.

Como conclusión, podemos ver que $f(x) = 3x + 2$ es biyectiva porque:
- No hay valores de $y$ que queden sin preimagen (exhaustiva).
- Cada $y$ tiene un único $x$ asociado (inyectiva).

#### 2.1.2. Conjuntos importantes

**DOMINIO**

Conjunto de valores de $x$ para los cuales la función existe como imagen definida.

$$\text{Dominio} \equiv \text{Dom}(f) = \set{x \in \mathbb{R} | \exists f(x)}$$

El dominio también se denomina **antiimagen** denotado por $f^{-1}(y)$ y cumple:

$$f^{-1}(y) = \set{x \in X | y = f(x)}$$

**IMAGEN O RECORRIDO**

Conjunto de valores de $y$ para los cuales la función existe.

$$\text{Recorrido} \equiv \text{Im}(f) = \set{y \in \mathbb{R} | \text{ la función existe}}$$

La imagen coincide con el dominio de la función inversa.

#### 2.1.3. Funciones positivas y funciones monótonas

**FUNCIONES POSITIVAS**

Su imagen es **MAYOR o IGUAL** a $0$ en **TODO** su dominio.

$$\forall x \in \text{Dom}(f(x)), f(x) \ge 0$$

**FUNCIONES NEGATIVAS**

Su imagen es **MENOR o IGUAL** a $0$ en **TODO** su dominio.

$$\forall x \in \text{Dom}(f(x)), f(x) \le 0$$

**FUNCIONES MONÓTONAS CRECIENTES**

Se da cuando se encuentra cualquier punto $x$ consecutivo a $x_0$ (por la izquierda o por la derecha) tal que:

$$\frac{f(x) - f(x_0)}{x - x_0} \ge 0$$

- Si se cumple en todo el dominio. se dice que es **monótona creciente**.
- Si en un intervalo la función **solo crece**, se dice que es **estrictamente creciente**.
- Si en un intervalo la función **nunca decrece**, se dice que es **creciente** en el intervalo.

**FUNCIONES MONÓTONAS DECRECIENTES**

Se da cuando se encuentra cualquier punto $x$ consecutivo a $x_0$ (por la izquierda o por la derecha) tal que:

$$\frac{f(x) - f(x_0)}{x - x_0} \le 0$$

- Si se cumple en todo el dominio. se dice que es **monótona decreciente**.
- Si en un intervalo la función **solo crece**, se dice que es **estrictamente decreciente**.
- Si en un intervalo la función **nunca crece**, se dice que es **decreciente** en el intervalo.

#### 2.1.4. Funciones invertibles (e inversas)

Una función $f: A \rightarrow B$ es **invertible** si existe otra función $g: B \rightarrow A$ tal que:

$$g(f(x)) = x, \quad \forall x \in A$$  
$$f(g(y)) = y, \quad \forall y \in B$$

En otras palabras, una función es invertible si se puede "deshacer" su efecto y recuperar el valor original.

Para que una función sea invertible, debe ser **biyectiva** (es decir, inyectiva y exhaustiva).

**Ejemplo**:

$$f(x) = 3x + 5$$

1. **Verificar si es invertible**

	Para que $f(x)$ sea invertible, debe ser **biyectiva**, es decir:

	1. **Inyectiva** (función uno a uno):

		Comprobamos que $f(x)$ es inyectiva si $f(a) = f(b)$ implica que $a = b$.

		$$f(a) = f(b) \rightarrow 3a + 5 = 3b + 5$$

		Restamos $5$ en ambos lados:

		$$3a = 3b$$

		Dividimos por $3$:

		$$a = b$$

		Como no hay dos valores distintos de $x$ que produzcan el mismo $f(x)$, la función es **inyectiva**.

	2. **Exhaustiva (cubre todo el codominio)**:

		Dado que $f(x)$ puede tomar cualquier valor en $\mathbb{R}$, es **exhaustiva**.
		
		Como $f(x)$ es inyectiva y exhaustiva, es **biyectiva**, por lo que es **invertible**.

2. **Encontrar la función inversa**

	Para encontrar $f^{-1}(x)$, hacemos:

	$$y = 3x + 5$$

	Despejamos $x$:

	$$y - 5 j= 3x \rightarrow x = \frac{y - 5}{3}$$

	Por lo tanto, la función inversa es:

	$$f^{-1}(x) = \frac{x - 5}{3}$$

3. **Verificar**

	Debemos comprobar que:

	1. $f(f^{-1}(x)) = x$

		$$f \left( \frac{x - 5}{3} \right) = 3 \left( \frac{x - 5}{3} \right) + 5 = x - 5 + 5 = x$$

	2. $f^{-1}(f(x)) = x$

		$$f^{-1}(3x + 5) = \frac{(3x + 5) - 5}{3} = \frac{3x}{3} = x$$

	Ambas verificaciones confirman que $f^{-1}(x)$ es realmente la inversa de $f(x)$.

#### 2.1.5. Restricción de una función

A veces puede ser interesante reducir el dominio de una función para hacer que la función sea biyectiva o inyectiva y pueda tener una inversa. Esto se consigue mediante la **restricción de la función**.

Si $X \subset A$, llamamos **restricción** de $f$ en $X$ a la aplicación:

$$f_{|X} : X \to B$$

La restricción de una función se refiere al subconjunto del dominio original sobre el cual la función está definida, sin cambiar su regla de correspondencia. En otras palabras, una restricción de una función $f$ es la misma función, pero con un dominio más pequeño.

**Ejemplo**:

Sea la función:

$$f(x) = x^2, \quad \text{definida en } \mathbb{R}$$

Si restringimos su dominio al conjunto $C= [0, \infty)$, la nueva función restringida es:

$$f_{|[0, \infty)} (x) = x^2, \quad \text{para } x \ge 0$$

Aunque la regla de correspondencia sigue siendo $x^2$, la restricción cambia la naturaleza de la función. En este caso, la función pasa de ser par (simétrica respecto al eje Y) a ser estrictamente creciente en su domino restringido.

### 2.2. Operaciones algebraicas con funciones

Dos o más funciones reales $f: A \rightarrow \mathbb{R}$ y $g: B \rightarrow \mathbb{R}$ pueden operarse entre ellas y con escalares $k$. Se definen las operaciones:

- **Suma y resta**:  
	$$f \pm g: A \cap B \rightarrow \mathbb{R}$$  
	$$(f \pm g)(x) = f(x) \pm g(x)$$
- **Producto por un escalar $k$**:  
	$$k \cdot f: A \rightarrow \mathbb{R}$$  
	$$(k \cdot f)(x) = f(x) \cdot g(x)$$
- **Cociente de funciones**:  
	$$\frac{f}{g}: A \cap B - {x | g(x) = 0} \rightarrow \mathbb{R}$$  
	$$\left ( \frac{f}{g} \right) (x) = \frac{f(x)}{g(x)}$$

En el caso del cociente de funciones, se debe excluir del dominio de la función cociente aquellos valores que anulan al divisor, puesto que generan la indeterminación $k / 0$.

### 2.3. Composición de funciones

La composición de funciones entre 2 funciones $f: A \rightarrow B$ y $g: C \rightarrow D$ se denota:

$$(g \circ f)(x) = g(f(x))$$

Y da lugar a la función compuesta $(g \circ f)(x)$, donde $f$ es la función externa y $g$ es la función interna.

Para que la función se pueda definir, es necesario que la imagen $B$ de la función interna $f$ esté incluida en el dominio $C$ de la función externa $g: B \set{C \dots}$

### 2.4. Función inversa

Ver apartado [2.1.4. Funciones invertibles (e inversas)](#214-funciones-invertibles-e-inversas).

## 3. Funciones elementales básicas


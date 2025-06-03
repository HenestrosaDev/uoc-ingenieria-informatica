# 4. Polinomios

## 4.1. Definición y aspectos generales

### 4.1.1. Definición

Un **polinomio** es una expresión algebraica con una única letra, llamada variable.

>Por ejemplo, $9x^{6} - 3x^{4} + x - 6$ es un polinomio de variable $x$.

### 4.1.2. Elementos y características de un polinomio

- **Término**: cada uno de los sumandos.
	>Términos del ejemplo: $9x^{6}, -3x^{4}, x, -6$
- **Grado de un término**: exponente de la variable en este término
	>En el ejemplo, grado de $9x^{6}$: $6$, grado de $-3x^{4}$: $4$, grado de $x$: $1$.
- **Grado de un polinomio**: grado mayor del polinomio.
	>En el ejemplo, grado del polinomio: $6$
- **Término independiente**: El término de grado $0$ (el que no tiene variable).
	>En el ejemplo, término independiente: $-6$
- **Coeficiente de un término**: nombre que multiplica la variable.
	>En el ejemplo, coeficiente de $9x^{6}$: $9$, coeficiente de $x$: $1$...

### 4.1.3. Valor numérico de un polinomio

Es el valor que se obtiene al sustituir la variable por un número determinado. 

Si $p(x) = 5x^{3} - 4x^{2} + 5x - 1$, al sustituir la $x$ por $1$, su valor numérico es:

$$p(1) = 5 \cdot 1^{3} - 4 \cdot 1^{2} + 5 \cdot 1 - 1 = 5$$

5 es el calor numérico de $p(x)$ cuando $x$ es $-1$.

## 4.2. Operaciones y propiedades básicas

### 4.2.1. Operaciones básicas entre monomios

#### Suma y resta

$$5x^{5} - 2x^{5} - 3x^{2} = 3x^{5} - 3x^{2}$$

#### Producto

$$(4x^{3}) \cdot (-5x^{2}) = -20x^{5}$$

#### Cociente

$$\frac{8x^{5}}{2x^{3}} = 4x^{2}$$

### 4.2.2. Operaciones básicas entre polinomios

#### Suma y resta

$$(2x^{3} - 3x^{2} + 4x - 6) + (5x^{4} - 2x^{3} - 5x^{2} - 3x + 16) = 5x^{4} - 8x{2} + x + 10$$

$$(2x^{3} - 3x^{2} + 4x - 6) - (5x^{4} - 2x^{3} - 5x^{2} - 3x + 16) = -5x^{4} + 4x^{3} + 2x{2} + 7x - 22$$

#### Producto de polinomios

1. **Colocamos un polinomio sobre otro situando los términos de mismo grado en una misma columna**.

$$
\begin{align*}
+2x^{4} & -7x^{3} &       & +5x & -8 \\
        &         & x^{2} & -7x & +2 \\ 
\hline
\end{align*}
$$

2. **Empezamos a multiplicar el primer polinomio por el elemento de GRADO MENOR del segundo polinomio y colocamos los resultados de cada término debajo de la columna de los términos del mismo grado**.

$$
\begin{align*}
+2x^{4} & -7x^{3}  &       & +5x  & -8 \\
        &          & x^{2} & -7x  & +2 \\ 
\hline
+4x^{4} & -14x^{3} &       & +10x & -16
\end{align*}
$$

3. **Seguimos multiplicando los términos del primer polinomio por el segundo término más pequeño del segundo polinomio ($-7x$ en este caso)**.

$$
\begin{align*}
         & +2x^{4}  & -7x^{3}  &          & +5x  & -8 \\
         &        &            & x^{2}    & -7x  & +2 \\ 
\hline
         & +4x^{4}  & -14x^{3} &          & +10x & -16 \\
-14x^{5} & -49x^{4} &          & -35x^{2} & +56x &
\end{align*}
$$

4. **Seguimos haciendo lo mismo con el resto de los elementos del primer polinomio**.

$$
\begin{align*}
        &          & +2x^{4}  & -7x^{3}  &          & +5x  & -8 \\
        &  &       &                     & x^{2}    & -7x  & +2 \\ 
\hline
        &          & +4x^{4}  & -14x^{3} &          & +10x & -16 \\
        & -14x^{5} & -49x^{4} &          & -35x^{2} & +56x & \\
+2x^{6} & -7x^{5}  &          & +5x^{3}  & -8x^{2}  &      &
\end{align*}
$$

5. **Sumamos término a término los resultados obtenidos**.

$$
\begin{align*}
        &          & +4x^{4}  & -14x^{3} &          & +10x & -16 \\
        & -14x^{5} & -49x^{4} &          & -35x^{2} & +56x & \\
+2x^{6} & -7x^{5}  &          & +5x^{3}  & -8x^{2}  &      & \\
\hline
+2x^{6} & -21x^{5} & -45x^{4} & -9x^{3}  & -43x^{2} & +66x & -16
\end{align*}
$$

#### Cociente de polinomios

$$6x^4 - 27x^3 + 15x^2 - 48 \div 2x^2 - 3x + 4$$

1. **Hallamos el primer término del cociente**.

	Dividimos el término de mayor grado del dividendo ($6x^{4}$) entre el término de mayor grado del divisor ($2x^{2}$).

	$$\frac{6x^{4}}{2x^{2}} = 3x^{4-2} = 3x^{2}$$

	Este será el primer término del cociente.

2. **Multiplicamos el primer término del cociente ($3x^{2}$) por el divisor**.

	$$3x^{2} (2x^{2} - 3x + 4) = 6x^{4} - 9x^{3} + 12x^{2}$$

3. **Restamos el resultado de la multiplicación anterior del dividendo**.

	$$(6x^{4} - 27x^{3} + 15x^{2} - 48) - (6x^{4} - 9x^{3} + 12x^{2}) = -18x^{3} + 3x^{2} - 48$$

4. **Hallamos el segundo término del cociente**.

	Dividimos el término de mayor grado de la resta anterior ($-18x^{3}$) entre el primer término del divisor $2x^{2}$.

	$$\frac{-18x^{3}}{2x^{2}} = -9x$$

	Este será el segundo término del cociente.

5. **Multiplicamos el segundo término del cociente ($-9x$) por el divisor**.

	$$-9x (2x^{2} - 3x + 4) = -18x^{3} + 27x^{2} - 36x$$

6. **Restamos el resultado de la multiplicación anterior de la expresión restante en el paso 3**.

	$$(-18x^{3} + 3x^{2} - 48) - (-18x^{3} + 27x^{2} - 36x) = -24x^{2} - 36x - 48$$

7. **Hallamos el tercer término del cociente**.

	Dividimos el término de mayor grado de la resta anterior ($-24x^{2}$) entre el primer término del divisor $2x^{2}$.

	$$\frac{-24x^{2}}{2x^{2}} = -12$$

	Este será el tercer término del cociente.

8. **Multiplicamos el tercer término del cociente ($-12$) por el divisor**. 

	$$-12(2x^{2} - 3x + 4) = -24x^{2} + 36x - 48$$

9. **Restamos el resultado de la multiplicación anterior de la expresión restante en el paso 6**.

	$$(-24x^{2} - 36x - 48) - (-24x^{2} + 36x - 48) = 0$$

10. **Resultado final**.

	El cociente es $3x^{2} - 9x - 12$ y el resto es 0.

#### Fracciones algebraicas

$$\frac{a(x)}{b(x)} = \frac{p(x)}{q(x)} \text{ si } a(x) \cdot q(x) = b(x) \cdot p(x)$$

El **producto** y el **cociente** se realiza de la misma forma que las fracciones numéricas, al igual que para la **suma** y la **resta**.

He aquí un ejemplo de suma entre dos fracciones algebraicas:

$$\frac{3x - 4}{x^{2} + 5x + 6} + \frac{5x-2}{x^{2} + 3x + 2}$$

1. **Buscamos el $mcm$ de los denominadores**.

	$$x^{2} + 5x + 6 = (x + 2) \cdot (x + 3)$$
	$$x^{2} + 3x + 2 = (x + 1) \cdot (x + 2)$$

	Por lo tanto,

	$mcm(x^{2} + 5x + 6x^{2} + 3x + 2) = (x + 1)(x + 2)(x + 3) = x^{3} + 6x^{2} + 11x + 6$

2. **Una vez encontrado el $mcm$, reescribimos las fracciones algebraicas originales por sus equivalentes de igual denominador**.

	$$\frac{3x - 4}{x^{2} + 5x + 6} = \frac{(3x - 4)}{(x + 2)(x + 3)} = \frac{(3x - 4)(x + 1)}{(x + 2)(x + 3)(x + 1)} = \frac{3x^{2} - x - 4}{x^{3} + 6x^{2} + 11x + 6}$$
	$$\frac{5x - 2}{x^{2} + 3x + 2} = \frac{(5x - 2)}{(x + 2)(x + 1)} = \frac{(5x - 2)(x + 3)}{(x + 2)(x + 3)(x + 1)} = \frac{5x^{2} + 13x - 6}{x^{3} + 6x^{2} + 11x +6}$$

3. **Sumamos los numeradores y mantenemos el denominador común**.

	$$\frac{3x^{2} - x - 4}{x^{3} + 6x^{2} + 11x + 6} + \frac{5x^{2} + 13x - 6}{x^{3} + 6x^{2} + 11x +6} = \frac{8x^{2} + 12x - 10}{x^{3} + 6x^{2} + 11x +6}$$

### 4.2.3. Regla de Ruffini

Algoritmo que permite dividir un polinomio entre otro de grado 1 con coeficiente de grado 1 igual a 1. Es útil para descomponer polinomios.

Ejemplo: $5x^{3} − 4x^{2} + 5x − 1 \div x − 2$:

1. Situamos los coeficientes del dividendo, de mayor a menor (y poniendo 0 si es necesario en los términos que no existan), en la parte superior. Ponemos a la izquierda el **término independiente del divisor cambiado de signo**.

$$
\begin{array}{r|rrrr}
   & 5 & -4 & 5  & -1 \\
+2 &  \\
\hline
&
\end{array}
$$

2. Bajamos el primer coeficiente, se multiplica por el término independiente del divisor y se sitúa el resultado bajo el coeficiente siguiente.

$$
\begin{array}{r|rrrr}
   & 5 & -4 & 5  & -1 \\
+2 &   & 10 \\
\hline
   & 5
\end{array}
$$

3. Sumamos los dos números de la misma columna (en este caso, $10 + (-4)$) y se multiplica el resultado obtenido por el término independiente cambiado de signo.

$$
\begin{array}{r|rrrr}
   & 5 & -4 & 5  & -1 \\
+2 &   & 10 & 12 \\
\hline
   & 5 & 6
\end{array}
$$

4. Procediendo del mismo modo, la división mediante el método de Ruffini de $5x^{3} - 4x^{2} + 5x - 1 \div x - 2$ se expresa de este modo:

$$
\begin{array}{r|rrrr}
   & 5 & -4 & 5  & -1 \\
+2 &   & 10 & 12 & 34 \\
\hline
   & 5 & 6  & 17 & | +33
\end{array}
$$

5. A partir de la última fila de números, el residuo es el último número obtenido ($33$), mientras que el cociente es un polinomio cuyos coeficientes van de menor a mayor grado, empezando por el de la derecha como término independiente (excluyendo al resto).

Con esto se concluye 

$$5x^{3} - 4x^{2} + 5x - 1 = (5x^{2} + 6x + 17)(x - 2) + 33$$

### 4.2.4. Productos notables

**Identidad**: Igualdad entre dos expresiones matemáticas que se cumple para cualquier calor de sus variables.

**Producto notable**: Tipo de multiplicación algebraica que sigue una fórmula específica y facilita la realización de cálculos.

**Productos de dos expresiones algebraicas**, con variables a y b:

- **Cuadrado de una suma** $(a + b)^{2} = (a + b)(a + b) = a^{2} + 2ab + b^{2}$. 
	>Ejemplo: $(x + 3)^{2} = x^{2} + 2(x)(3) + 3^{2} = x^{2} + 6x + 9$.
- **Cuadrado de una diferencia** $(a - b)^{2} = (a + b)(a - b) = a^{2} - 2ab + b^{2}$. 
	>Ejemplo: $(x - 3)^{2} = x^{2} - 2(x)(3) + 3^{2} = x^{2} - 6x + 9$.
- **Suma por diferencia** $(a + b)(a - b) = a^{2} - b^{2}$. 
	>Ejemplo: $(x + 3)(x - 3) = x^{2} - 3x + 3x - 9 = x^{2} - 9$

**Productos de tres expresiones algebraicas**, con variables a y b:

- **Cubo de una suma** $(a + b)^{3} = (a + b)(a + b)(a + b) = a^{3} + 3a^{2}b + 3ab^{2} + b^{3}$
- **Cubo de una diferencia** $(a + b)^{3} = (a + b)(a + b)(a + b) = a^{3} - 3a^{2}b + 3ab^{2} - b^{3}$

## 4.3. Descomposición de polinomios

### 4.3.1. Teorema del residuo

El residuo del cociente entre el polinomio $p(x)$ y $x − a$ es $p(a)$.
Ejemplo: si $p(x) = x^{2} − 1$, el residuo del cociente de $p(x)$ entre $x − 3$ es $p(3) = 8$. Nótese el cambio de signo del término independiente.

### 4.3.2. Raíces y descomposición de un polinomio

#### Raíces

Un número $a$ es una **raíz** o cero de un polinomio $p(x)$ si $p(a) = 0$.

Ejemplo: $1$ y $-1$ son raíces (o ceros) del polinomio $p(x) = x^{2} − 1$ porque el valor del polinomio es 0 al sustituir la variable $x$ por estos valores. 

$$p(1) \quad = \quad 1^{2} - 1 = 0$$
$$p(-1) \quad = \quad (-1)^{2} - 1 = 0$$

Para hallar las raíces de un polinomio, se puede:

- **Intentar factorizar** el polinomio para sustituir de forma más sencilla.

	Por ejemplo, para $p(x) = -x^{3} + 3x^{2} + 4x$:

	1. Sacamos el factor común de $p(x)$, que es $-x$:
		
		$$p(x) = -x(x^{2} - 3x - 4)$$

	2. Factorizamos $x^{2} - 3x - 4$ buscando dos números que multiplicados den $-4$ y sumados den $-3$, que son $-4$ y $1$.

		$$x^{2} - 3x - 4 = (x - 4)(x + 1)$$

		Entonces, el polinomio $p(x)$ se puede escribir como:

		$$p(x) = -x(x - 4)(x + 1)$$

	3. Sacamos las raíces de $p(x)$ igualando cada factor a cero:

		- $x = 0$
		- $x - 4 = 0 \implies x = 4$
		- $x + 1 = 0 \implies x = -1$

		Por lo tanto, las raíces de $p(x)$ son:

		$$x = 0, \quad x = 4, \quad x = -1$$

- **Aplicar el teorema de las raíces racionales** para probar raíces posibles.

	Si consideramos, por ejemplo, $f(x) = 2x^{3} - 3x^{2} - 8x + 3$:

	1. Identificamos el coeficiente principal ($a_n = 2$) y el término independiente ($a_0 = 3$).
	2. Encontramos los divisores de $a_n$ ($\pm 1, \pm 3$) y $a_0$ ($\pm 1, \pm 2$).
	3. Formamos las posibles raíces racionales con la fórmula $\frac{p}{q}$, donde $p$ es un divisor de $a_0$ y $q$ es un divisor de $a_n$.

		Las posibles raíces racionales, en este caso, son $\pm 1, \pm 3, \pm \frac{1}{2}, \pm \frac{3}{2}$
	
	4. Probamos cada posible raíz sustituyendo cada valor en el polinomio $p(x)$.

		Al aplicarlo, comprobamos que $x = \frac{1}{2}$ es una raíz, ya que $p(\frac{1}{2}) = 0$.

- Sustituir el valor de $x$ por los divisores del término independiente.

Para un polinomio cuadrático o de mayor grado, las **relaciones de Cardano-Vieta** ayudan a determinar la suma y el producto de las raíces a partir de los coeficientes sin resolver la ecuación. Esto no da las raíces directamente, pero permite verificar los resultados una vez encontrados.

Para $ax^{2} + bx + c$:

- **Suma de las raíces** es $-\frac{b}{a}$
- **Producto de las raíces** es $\frac{c}{a}$.

Por ejemplo, si las raíces de $p(x) = x^{2} - 10x + 25$ son $5$ y $5$, la suma de las raíces será $10$, lo cual también se cumple atendiendo a la relación de Cardano-Vieta ($-\frac{-10}{1}$).

#### Descomposición

La **descomposición** de un polinomio consiste en expresar el polinomio en forma de producto de otros polinomios de menor grado. Permite calcular el $mcm$ y el $MCD$ de dos o más polinomios.

Ejemplo: 

$$6x^{4} - 27x^{3} + 15x^{2} - 48 = (2x^{2} - 3x + 4)(3x^{2} - 9x - 12)$$

#### Factorización

La **factorización de un polinomio** consiste en expresar este polinomio como producto de polinomios irreducibles (todos aquellos de grado 1 o de grado 2 con discriminante negativo ($b^{2} - 4ac < 0$)). Se pueden aplicar diferentes propiedades para alcanza este fin, como:

- Quitar factores comunes: $6x^{3} - 3x^{2} = 3x^{2} \cdot (2x - 1)$
- Aplicar productos notables: $x^{2} - 16 = (x + 4) \cdot (x - 4)$
- Resolver la ecuación asociada al polinomio. Por ejemplo, dado el polinomio de segundo grado $p(x) = x^{2} + 4x - 12$, se trata de encontrar la soluciones de la ecuación de segundo grado asociada al polinomio: $x^{2} + 4x - 12 = 0$. Al aplicar la fórmula de la ecuación de segundo grado, se obtienen las soluciones $x = 2$ y $x = -6$ de modo que las raíces del polinomio son exactamente $2$ y $-6$. Por lo tanto, $p(x) = (x - 2)(x + 6)$.
- Aplicar regla de Ruffini. 
	1. Si $p(x) = x^{3} + 2x^{2} - 9x - 18$, probamos a sustituir $x$ por los divisores de $-18$, que son: $\pm 1, \pm 2, \pm 3, \pm 6, \pm 9, \pm 18$. 
	2. Comprobamos que $-2$ es un factor de $p(x)$, ya que al sustituir la $x$ por ese valor obtenemos $0$. 
	3. Usamos $-2$ como el valor para la regla de Ruffini y obtenemos el polinomio $x^{2} - 9$, así que tenemos $p(x) = (x + 2)(x^{2} - 9)$ 
	3. Factorizamos el cociente como $(x^{2} - 9)$ = $(x + 3)(x - 3)$. Por lo tanto, la factorización completa de $p(x)$ es $p(x) = (x - 3)(x + 3)(x + 2)$
# 3. Sistemas de ecuaciones (resumen)

## 3.1. Sistemas lineales de dos ecuaciones y dos incógnitas

### 3.1.1. Definición

Conjunto de dos ecuaciones de primer grado con dos incógnitas cada una como máximo, representadas con las mismas incógnitas.

Ejemplo:

$$
\begin{cases}
4x - 3y = 5 \\ 
2x + 4y = 3 
\end{cases}
$$

### 3.1.2. Soluciones y tipos de sistemas

La solución es un par numérico: un número para cada incógnita. 

Hay **tres** posibles soluciones:

- Un sistema con una **única** solución:

$$
\begin{cases} 
x + 2y = 10 \\
2x - y = 5 
\end{cases}
$$

$$(x, y) = (4, 3)$$

- Un sistema con **infinitas** soluciones:

$$
\begin{cases}
2x + 4y = 20 \\ 
x + 2y = 10 
\end{cases}
$$

$$(x, y) = (4, 3), (x, y) = (2, 4), (x, y) = (0, 5)$$

- Un sistema **sin** soluciones:

$$
\begin{cases}
2x + y = 8 \\ 
2x + y = 1
\end{cases}
$$

### 3.1.3. Métodos de resolución

#### SUSTITUCIÓN

Dado
	
$$
\begin{cases}
2x - 3y = 7 \\ 
x + 4y = -2
\end{cases}
$$

1. Elegir una de las ecuaciones (es conveniente elegir la ecuación en el que el coeficiente de la $x$ o de la $y$ sea 1).

$$x + 4y = -2$$

2. Despejar la incógnita de la ecuación anterior. 
	
$$x = -2 - 4y$$
	
3. Sustituir la incógnita anterior (la $x$) de la otra ecuación ($2x - 3y = 7$) por el valor que hemos hallado al aislarla ($-2 - 4y$) y resolver la ecuación resultante. 
	
$$2 \cdot (-2 -4y) -3y = 7 \implies -4 -11y = 7 \implies -11y = 11 \implies y = 11$$

4. Sustituir el valor obtenido en el anterior paso en una de las dos ecuaciones del sistema inicial. 
	
$$x + 4y = -2 \implies x + 4 \cdot (-1) = -2 \implies x = 2$$

5. Sustituir los valores en el sistema para comprobar que realmente son soluciones válidas:

$$
\begin{cases}
2 \cdot 2 - 3 \cdot (-1) = 7 \\ 
2 + 4 \cdot (-1) = -2
\end{cases}
$$

Así pues, la solución del sistema es $(x, y) = (2, -1)$.

---

#### IGUALACIÓN

Dado el mismo sistema del método anterior:
	
$$
\begin{cases}
2x - 3y = 7 \\ 
x + 4y = -2
\end{cases}
$$

1. Aislar la misma incógnita en ambas ecuaciones:

$$x = \frac{7 + 3y}{2} \qquad x = -2 - 4y$$

2. Igualar las expresiones que resultan de aislar la incógnita:

$$\frac{7 + 3y}{2} = -2 - 4y$$

3. Resolver la ecuación resultante:

$$7 + 3y = 2 \cdot (-2 - 4y)$$  
$$7 + 3y = -4 - 8y$$  
$$3y + 8y = -4 - 7$$  
$$11y = 11$$  
$$y = -1$$

4. Sustituir el valor de esta incógnita en cualquiera de las ecuaciones del sistema inicial y resolver la ecuación resultante.

$$x + 4 \cdot (-1) = -2 \implies x = 2$$

5. Sustituir los valores en el sistema para comprobar que realmente son soluciones válidas:

$$
\begin{cases}
2 \cdot 2 - 3 \cdot (-1) = 7 \\ 
2 + 4 \cdot (-1) = -2
\end{cases}
$$

Así pues, la solución del sistema es $(x, y) = (2, -1)$.

---

#### REDUCCIÓN

Dado el mismo sistema del método anterior:
	
$$
\begin{cases}
2x - 3y = 7 \\ 
x + 4y = -2
\end{cases}
$$

1. Elegimos una de las incógnitas (ejemplo, $x$).
2. Multiplicamos cada ecuación por un número elegido convenientemente, de modo que las ecuaciones resultantes tengan el término idéntico con la incógnita elegida.

	Aplicándolo en el sistema de ejemplo, multiplicamos $2x - 3y = 7$ por 1 (coeficiente de la $x$ en la ecuación $x + 4y = -2$) y multiplicamos $x + 4y = -2$ por 2 (coeficiente de la $x$ en la ecuación $2x - 3y = 7$). Así, obtenemos las ecuaciones con el mismo término en $x$.
		
$$
\begin{cases}
2x - 3y = 7 \\ 
2x + 8y = -4
\end{cases}
$$
		
3. Restamos las ambas ecuaciones resultantes, miembro a miembro:

$$
\begin{align*}
2x & -3y &= 7 \\
-(2x & -8y &= -4) \\ 
\hline
0 & -11y &= 11
\end{align*}
$$

>[!WARNING]  
>En la fecha presente (2024-10-23), las líneas horizontales de LaTeX (`\hline`) no se renderizan en GitHub markdown.

4. Resolvemos la ecuación resultante.

$$-11y = 11 \implies y = -1$$

5. Sustituimos el valor de esta incógnita en cualquiera de la ecuaciones del sistema y resolver la ecuación resultante.

$$x + 4 \cdot (-1) = -2 \implies x = 2$$

## 3.2. Sistemas lineales de tres ecuaciones y tres incógnitas

### 3.2.1. Definición

$$
\begin{cases}
x + y + z = 0 & \quad \text{(1)} \\ 
2x - 5y - 2z = -2 & \quad \text{(2)} \\
3x + 4y + z = 8 & \quad \text{(3)}
\end{cases}
$$

### 3.2.2. Método de resolución

Se puede usar cualquier método visto en los sistemas lineales de dos ecuaciones y dos incógnitas.

1. **Despejamos $x$ de la ecuación (1)**
	
$$x = -y - z$$

2. **Sustituimos $x$ en las otras dos ecuaciones**

	Ecuación (2): $2x - 5y - 2z = -2$

	Sustituyendo $x = -y -z$:  
	
	$$2 (-y -z) - 5y - 2z = -2$$  
	$$-2y -2z - 5y - 2z = -2$$  
	$$-7y -4z = -2 \quad \text{(Ecuación A)}$$ 

	Ecuación (3): $3x + 4y + z = 8$

	Sustituyendo $x = -y -z$:  
	
	$$3(-y -z) + 4y + z = 8$$  
	$$-3y -3z + 4y + z = 8$$  
	$$y - 2z = 8 \quad \text{(Ecuación B)}$$ 

3. **Resolvemos el sistema con dos ecuaciones y dos incógnitas**

$$
\begin{cases}
-7y -4z = -2 & \quad \text{(Ecuación A)} \\ 
y - 2z = 8 & \quad \text{(Ecuación B)}
\end{cases}
$$ 

$$\text{Despejamos $y$ en la ecuación B:}$$

$$y = 2z + 8$$

$$\text{Sustituimos $y = 8 + 2z$ en la ecuación A:}$$

$$-7(8 + 2z) - 4z = -2$$
$$-56 - 14z - 4z = -2$$
$$-18z = 54$$
$$z = \frac{54}{-18} = -3$$

$$\text{Sustituimos $z = -3$ en la ecuación $y = 8 + 2z$:}$$
$$y = 8 + 3(-3) \implies y = 2$$

4. **Hallamos el valor de $x$**

	Sustituimos $y = 2$ y $z = -3$ en la ecuación $x = -y - z$:

	$$x = -(2) - (-3) = -2 + 3 = 1$$

	La solución final del sistema es $(x, y, z) = (1, 2, -3)$

## 3.3. Sistemas lineales de $m$ ecuaciones y $n$ incógnitas

### 3.3.1. Definición

El objetivo de un sistema de este tipo es encontrar los valores de las incógnitas que satisfacen simultáneamente todas las ecuaciones del sistema.

Tipos de sistemas:

- **Sistema incompatible** (sin solución):

$$
\begin{pmatrix}
1 & 2 & 3 & | & 4 \\
0 & 1 & 2 & | & 3 \\
0 & 0 & 0 & | & 5
\end{pmatrix}
$$

- **Sistema compatible determinado** (una única solución):

$$
\begin{pmatrix}
1 & 2 & 3 & | & 4 \\
0 & 1 & 2 & | & 3 \\
0 & 0 & 1 & | & 2
\end{pmatrix}
$$

- **Sistema compatible indeterminado** (infinitas soluciones):

$$
\begin{pmatrix}
1 & 2 & 3 & | & 4 \\
0 & 1 & 2 & | & 3 \\
0 & 0 & 0 & | & 0
\end{pmatrix}
$$

### 3.3.2. Método de Gauss

Consiste en utilizar las tres transformaciones elementales entre ecuaciones (intercambiar, reescalar y pivotar) para encontrar un sistema equivalente en el inicial en forma escalonada. Así, empezando por la última incógnita, podremos resolver fácilmente el sistema.

Proceso, dado:

$$
\begin{cases}
x + y + z = 6 & \quad \text{(1)} \\ 
2x + 3y + z = 10 & \quad \text{(2)} \\ 
3x + y + 2z = 13 & \quad \text{(3)} 
\end{cases}
$$

1. **Escribimos la matriz aumentada**

$$
\begin{pmatrix}
1 & 1 & 1 & | & 6 \\
2 & 3 & 1 & | & 10 \\
3 & 1 & 2 & | & 13
\end{pmatrix}
$$

2. **Transformamos la matriz en forma escalonada**

	Vamos a aplicar operaciones elementales por filas para convertir esta matriz en una matriz escalonada, es decir, una matriz donde haya ceros por debajo de los pivotes principales (los números en la diagonal).

	**Fila 1 (F1)**: 

	Es la fila pivote actual:

	$$F1 = (1,1,1|6)$$

	**Fila 2 (F2)**:

	Queremos hacer cero el primer elemento de la segunda fila. Para esto, restamos 2 veces la F1 de la F2:

	$$F2 \to F2 - 2 \cdot F1$$
	$$(2,3,1|10) - 2(1,1,1|6) = (0,1,-1|-2)$$

	La nueva F2 es:

	$$(0,1,-1|-2)$$

	**Fila 3 (F3)**:

	Queremos hacer cero el primer elemento de la tercera fila. Para esto, restamos 3 veces la F1 de la F3:

	$$F3 \to F3 - 3 \cdot F1$$
	$$(3,2,1|13) - 3(1,1,1|6) = (0,-2,-1|-5)$$

	La nueva F3 es:

	$$(0,-2,-1|-5)$$

	La matriz después de estas operaciones es:

$$
\begin{pmatrix}
1 & 1 & 1 & | & 6 \\
0 & 1 & 1 & | & -2 \\
0 & -2 & -1 & | & -5
\end{pmatrix}
$$

3. **Operamos la fila 3 y 2 para hacer 0 el segundo elemento de la fila 3**

	En este caso, sumamos 2 veces la F2 a la F3:

	$$F3 \to F3 + 2 \cdot F2$$
	$$(0,-2,-1|-5) + 2(0,1,-1|-2) = (0,0,-3|-9)$$

	La nueva F3 es:

	$$(0,0,-3|-9)$$

	La matriz escalonada es:

$$
\begin{pmatrix}
1 & 1 & 1 & | & 6 \\
0 & 1 & 1 & | & -2 \\
0 & 0 & -3 & | & -9
\end{pmatrix}
$$
	
4. **Resolución regresiva**

	Ahora, vamos a resolver el sistema a partir de la matriz escalonada.

	1. De la tercera fila ($0x + 0y - 3z = -9$):
		
		$$-3z = -9 \implies z = 3$$

	2. De la segunda fila ($0x + 1y - 1z = -2$):

		$$y - z = -2 \implies y - 3 = -2 \implies y = 1$$

	3. De la primera fila ($1x + 1y + 1z = 6$):

		$$x + y + z = 6 \implies x + 1 + 3 = 6 \implies x = 2$$

	La solución final es:

	$$x = 2, \quad y = 1, \quad z = 3$$

5. **Verificar**

	Sustituimos $x = 2$, $y = 1$ y $z = 3$ en las ecuaciones originales:

	1. $2 + 1 + 3 = 6 \implies 6 = 6$ ✅
	2. $2(2) + 3(1) + 1(3) = 10 \implies 10 = 10$ ✅
	3. $3(2) + 1(1) + 2(3) = 13 \implies 13 = 13$ ✅

	Los valores satisfacen todas las ecuaciones, por lo que la solución es correcta.

## 3.4. Sistemas de inecuaciones

### 3.4.1. Sistemas de inecuaciones lineales con una incógnita

Sistema de referencia:

$$
\begin{cases}
3x + 4 \leq 2x + 8 & \quad \text{(1)} \\ 
2x - 1 > x & \quad \text{(2)} 
\end{cases}
$$

Dos métodos de resolución. Este primer método es el más fácil:

1. Resolvemos por separado las ecuaciones asociadas a cada una de las inecuaciones del sistema.

	$$3x + 4 = 2x + 8 \iff x = 4$$
	$$2x - 1 = x \iff x = 1$$

2. Marcamos en la recta real la soluciones anteriores, lo cual la dividirá en 3.

3. Seleccionamos un número de cada una de ls partes en la que queda dividida la recta por los números anteriores. Por ejemplo, pueden escogerse los números 0, 2 y 6.

4. Comprobamos cuál de estos números, además de las soluciones de las ecuaciones, son solución de todo el sistema de ecuaciones sustituyendo los números en las ecuaciones del sistema. En el caso de ejemplo, la solución del sistema es $(1,4]$.

### 3.4.2. Sistemas de inecuaciones de segundo grado con una incógnita

Sistema de referencia:

$$
\begin{cases}
2x + 5 \geq 2 - x & \quad \text{(1)} \\ 
2x^{2} - 2x - 2 \leq x^{2} - x + 4 & \quad \text{(2)} 
\end{cases}
$$

1. Resolvemos las dos ecuaciones asociadas

$$
\begin{cases}
2x + 5 \geq 2 - x \iff x = -1 & \quad \text{(1)} \\ 
2x^{2} - 2x - 2 \leq x^{2} - x + 4 \iff x = -2, 3 & \quad \text{(2)} 
\end{cases}
$$

2. Resolvemos las dos inecuaciones por separado.

	- La solución de $2x + 5 \geq 2 - x$ es $[-1, +\infty)$.
	- La solución de $2x^{2} - 2x - 2 \leq x^{2} - x + 4$ es $[-2, 3]$.

3. Buscar la zona común de la solución de ambas ecuaciones, que es $[-1, 3]$.
# 10. Continuidad de funciones

## 10.1. Límites de funciones

### 10.1.1. Noción intuitiva de límites

El **límite de una función** en un valor $x$ es igual a un número al que tiende la función cuando la variable tiende a este valor (sin llegar nunca a serlo). Si el límite de una función $f(x)$ en un valor $a$ es igual a $b$, se escribe de este modo:

$$\lim_{x \to a} f(x) = b$$

**Noción intuitiva de límite**

Sea $f(x) = 2x + 1$, se quiere calcular $\lim_{x \to 1} f(x)$. Podemos evaluar unos cuantos puntos que se aproximen a 1 de la siguiente manera:

$$0 \longrightarrow f(0) = 1$$
$$0.1 \longrightarrow f(0.1) = 1.2$$
$$0.5 \longrightarrow f(0.5) = 2$$
$$0.7 \longrightarrow f(0.7) = 2.4$$
$$0.9 \longrightarrow f(0.9) = 2.8$$
$$0.99 \longrightarrow f(0.99) = 2.98$$

Parece evidente que cuanto más cerca de $1$ está la $x$, más cerca de $3$ está $f(x)$. Así pues, podemos deducir que $\lim_{x \to 1} f(x) = 3$.

### 10.1.3. Operaciones con límites

- **Suma y resta**: $\lim_{x \to a} (f(x) \pm g(x)) = \lim_{x \to a} f(x) \pm \lim_{x \to a} g(x)$
- **Producto**: $\lim_{x \to a} (f(x) \cdot g(x)) = \lim_{x \to a} f(x) \cdot \lim_{x \to a} g(x)$
- **División**: $\lim_{x \to a} \frac{f(x)}{g(x)} = \frac{\lim_{x \to a} f(x)}{\lim_{x \to a} g(x)}$
- **Exponencial**: $\lim_{x \to a} f(x)^{g(x)} = \lim_{x \to a} f(x)^{\lim_{x \to a} g(x)}$

### 10.1.4. Límites laterales

Se utilizan para analizar el comportamiento de una función cerca de un punto desde una dirección específica. Se dividen en dos tipos:

1. **Límite lateral por la izquierda** (denotado como $\lim_{x \to c^-} f(x)$):  
	Este límite evalúa el comportamiento de la función $f(x)$ cuando $x$ se aproxima al valor $c$ desde valores menores a $c$ (es decir, desde la izquierda en la recta numérica).
2. **Límite lateral por la derecha** (denotado como $\lim_{x \to c^+} f(x)$):  
	Este límite evalúa el comportamiento de la función $f(x)$ cuando $x$ se aproxima al valor $c$ desde valores mayores a $c$ (es decir, desde la derecha en la recta numérica).

### 10.1.5. Límites al infinito

Analiza el comportamiento de una función $f(x)$ cuando la variable $x$ crece sin límite positivo $(x \to \infty)$ o decrece sin límite $(x \to \infty)$.

1. Cuando $x \to \infty$
	Esto significa que a medida que $x$ aumenta indefinidamente (se hace muy grande en valor absoluto en el lado positivo), los valores de $f(x) se acercan cada vez más a un valor $L$.
2. Cuando $x \to -\infty$:  
	Esto significa que a medida que $x$ disminuye indefinidamente (se hace muy grande en valor absoluto en el lado negativo), los valores de $f(x) se acercan a $L$.
	
### 10.1.6. Reglas básicas de cálculo de límites

- $k \cdot \infty = \infty, k \neq 0$: En un producto, sin un factor tiende a infinito y el otro tiende a un número diferente de cero, el producto tiende a infinito, y tiene un signo que resulta del signo del infinito del primer factor multiplicado por el signo del número al que tiende el segundo factor.
- $\infty + \infty = \infty, k + \infty = \infty$: En una sumo, si uno o más sumandos tienden a infinito con el mismo signo, la suma tiende a infinito con el signo correspondiente.
- $\frac{k}{\infty} = 0$: En un cociente, si el denominador tiende a infinito y el numerador tiende hacia una constante $k$, el cociente tiende a $0$.
- $\frac{k}{0} = \infty, k \neq 0$: En un cociente, si el denominador tiende a una constante diferente de $0$ y el denominador tiende a $0$, el cociente tiende a infinito, y tiene un signo que resulta del signo para qué dirección se aproxima el $0$ del denominador multiplicado por el sino del número al cual tiende el numerador.
- $a^{\infty}$:  
	Para $+\infty$:  
	- Si $a > 1$, entonces $a^{+\infty} = +\infty$.
	- Si $a = 1$, entonces $a^{+\infty} = 1$.
	- Si $0 < a < 1$, entonces $a^{+\infty} = 0$.
	- Si $a = 0$, entonces $a^{+\infty} = 0$.
	- Si $a < 0$, el resultado depende del exponente (este caso requiere un nivel más avanzado).
	- $1^{\infty}$ es una indeterminación y requiere análisis adicional.
	
	Para $-\infty$:  
	- Si $a > 1$, entonces $a^{-\infty} = 0$.
	- Si $a = 1$, entonces $1^{-\infty} = 1$.
	- Si $0 < a < 1$, entonces $a^{-\infty} = -\infty$.
	- Si $a = 0, 0^{-\infty}$ es indeterminado o tiende a $\infty$.

### 10.1.7. Indeterminaciones

1. $\frac{0}{0}$: Ocurre cuando el numerador y el denominador de una fracción tienden a $0$. Es muy común y aparece en problemas que implican funciones racionales o raíces. Ejemplo:

	$$\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = \frac{0}{0}$$

	Para resolver, se puede factorizar el numerador:
	
	$$\frac{x^2 - 4}{x - 2} = \frac{(x - 2)(x + 2)}{x - 2} \text{ (se simplifica a x + 2)}$$

	Resultado: $\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = 4$

2. $\frac{\infty}{\infty}$: Ocurre cuando el numerador y el denominador tienden a infinito. Ejemplo:

	$$\lim_{x \to +\infty} \frac{3x^3 - 2}{-2x^2 + 7x - 5}$$

	Analizamos el cociente de los términos dominantes:

	$$\frac{x^3}{-2x^2} = -\frac{x}{2} = -\frac{+\infty}{2} = -\infty$$
	
	Cuando $x \to +\infty$, $-\frac{x}{2}$ tiende a $-\infty$.

3. $0 \cdot \infty$: Ocurre cuando una parte de la expresión tiende a $0$ mientras que otra tiende a $\infty$. Se puede reescribir para convertirla en una fracción, como $\frac{0}{0}$ o $\frac{\infty}{\infty}$. Ejemplo:

	$$\lim_{x \to 0^+} x \ln (x)

	Aquí, $x \to 0$ y $\ln (x) \to -\infty$, lo que da $0 \cdot \infty$.

	Reescribimos:

	$$x \ln(x) = \frac{ln (x)}{\frac{1}{x}}$$

	Ahora es una indeterminación $\frac{-\infty}{\infty}, que puede resolverse con la regla de L'Hôpital (esta regla pertenece al bloque de derivadas).

	Resultado: $\lim_{x \to 0^+} ln(x) = 0$

4. $\infty - \infty$: Ocurre cuando dos términos tienden a infinito y se restan entre sí. Se resuelve escribiendo la expresión para combinar términos o racionalizándola. Ejemplo:

	$$\lim_{x \to \infty} \sqrt{x^2 + x} - (x + 1)$$

	Factorizamos dentro de la raíz para simplificar:

	$$\sqrt{x^2 + x} - (x + 1) =$$
	$$\sqrt{x^2 + x} - (x + 1) \cdot \frac{\sqrt{x^2 + x} + (x + 1)}{\sqrt{x^2 + x} + (x + 1)} =$$
	$$\frac{(\sqrt{x^2 + x} - (x + 1)) \cdot (\sqrt{x^2 + x} + (x + 1))}{\sqrt{x^2 + x} + (x + 1)} =$$
	$$\frac{(\sqrt{x^2 + x}^2 - (x + 1)^2)}{\sqrt{x^2 + x} + (x + +1)} =$$
	$$\frac{x^2 + x - (x^2 + 2x + 1)}{\sqrt{x^2 + x} + (x + 1)} =$$
	$$\frac{-x - 1}{\sqrt{x^2 + x} + (x + 1)}

	Esto resulta en $\lim_{x \to +\infty}, lo cual es una indeterminación del tipo $\frac{\infty}{\infty}$, donde el numerador es un polinomio de grado $1$ y el denominador también tiene $1$ como grado dominante, puesto que el exponente de $x^2$ se anula con la raíz cuadrada. Así, para resolver esta nueva indeterminación, tendremos que dividir el numerador y el denominador por $x$. 
	
	$$\lim_{x \to +\infty} \frac{-x - 1}{\sqrt{x^2 + x} + (x + 1)} =$$
	$$\lim_{x \to +\infty} \frac{\frac{-x - 1}{x}}{\frac{\sqrt{x^2 + x} + x + 1}{x}} =$$
	$$\lim_{x \to +\infty} \frac{-1 - \frac{1}{x}}{\sqrt{\frac{x^2 + x}{x^2} + 1 + \frac{1}{x}}} =$$
	$$\lim_{x \to +\infty} \frac{-1 - \frac{1}{x}}{\sqrt{1 + \frac{1}{x}}} =$$
	$$\frac{\lim_{x \to \infty} -1 - \frac{1}{x}}{\lim_{x \to +\infty} \sqrt{1 + \frac{1}{x}} + 1 + \frac{1}{x}} =$$
	$$\frac{-1 - 0}{\sqrt{1 + 0} + 1 + 0} = \frac{-1}{2}$$

	
	Resultado: $\lim{x \to \infty} (\sqrt{x^2 + x} - x) = \frac{1}{2}$

5. $1^{\infty}$: Ocurre cuando una base tiende a $1$ mientras que un exponente tiende a $\infty$. Aparece en límites de potencias exponenciales. 

	Esto es, si tenemos nuestra función escrita como $f(x)^{g(x)}$ donde $\lim_{x \to a} f(x)^{g(x)}$ da lugar a este tipo de indeterminación. Se soluciona mediante este cambio:

	$$\lim_{x \to a} f(x)^{g(x)} = e^{\lim_{x \to a} [f(x) - 1] \cdot g(x)}

	Ejemplo:

	$$\lim_{x \to +\infty} (\frac{2x + 5}{2x + 2})^x$$
	
	Da lugar a una indeterminación del tipo $1^{\infty}$. Por lo tanto, operamos:

	$$\lim_{x \to +\infty} (f(x) - 1) \cdot g(x) = \lim_{x \to +\infty} (\frac{2x + 5}{2x + 2} - 1) \cdot x = \lim_{x \to +\infty} \frac{3x}{2x + 2} = \frac{3}{2}
	
	Ya que es una indeterminación de tipo $\frac{\infty}{\infty}$ con los polinomios del numerador y del denominador del mismo grado.

	Por lo tanto,

	$$\lim_{x \to +\infty} (\frac{2x + 5}{2x + 2})^x = e^{\frac{3}{2}}$$

Estas son algunas indeterminaciones extras que no aparecen ni en el libro ni en los ejercicios:

6. $0^0$: Ocurre cuando una base tiende a $0$ mientras que el exponente tiende a $0$. Se reescribe usando logaritmo o exponenciales para analizar el comportamiento. Ejemplo:

	$$\lim_{x \to 0^+} x^x

	Usamos $x^x = e^{x ln(x)}, y evaluamos $\lim_{x \to 0^+} x ln(x)$, que ya vimos antes.

	Resultado: $\lim_{x \to 0^+} x^x = 1$

7. $\infty^0$: Aparece cuando una base tiende a $\infty$ mientras que el exponente tiende a $0$. Ejemplo:

	$$\lim_{x \to \infty} x^{\frac{1}{x}}$$

	Reescribimos como $e^{\ln(x^{\frac{1}{x}})} = e^{\frac{\ln (x)}{x}}$.

	El exponente es una indeterminación $\frac{\infty}{\infty}$ y puede resolverse con L'Hôpital (esta regla pertenece al bloque de derivadas).

	Resultado: $\lim_{x \to \infty} x^{\frac{1}{x}} = 1$

## Continuidades

### 10.2.1. Función continua en un punto

Es aquella cuya gráfica no presenta "saltos", "discontinuidades" o "agujeros". En otras palabras, una función es continua si, al representarla gráficamente, se puede dibujar sin levantar el lápiz del papel.

Una función $f(x)$ es continua si el valor al que tiende la función cuando $x$ se acerca a $c$ es exactamente el valor de la función en $c$.

Por ejemplo, consideremos la función $f(x) = x^2$.

1. **Está definida en todos los puntos**: Para cualquier valor de $x$, $f(x) = x^2$ tiene un valor real.

2. **El límite existe** para cualquier punto $c$,

	$$\lim_{x \to c} x^2 = c^2$$

3. **El valor del límite es igual al valor de la función en $c$**:

	$$f(c) = c^2 \quad y \quad \lim_{x \to c} x^2 = c^2$$

Por lo tanto, $f(x) = x^2$ es continua en todo su dominio.

### 10.2.2. Discontinuidades de una función

1. **Discontinuidad de salto**: La función tiene dos límites distintos cuando $x$ se acerca al punto de discontinuidad desde los dos lados, pero no coincide con el valor de la función en ese punto. 

	En el siguiente ejemplo, hay un salto en $x = 1$, por lo que es discontinua en ese punto:

$$
\begin{cases}
x & \text{si } x \leq 1 \\
2 & \text{si } x > 1
\end{cases}
$$

2. **Discontinuidad asintótica**: El valor de la función tiende a infinito cuando $x$ se aproxima a cierto punto. Ejemplo:

	$$f(x) = \frac{1}{x}$$

	Si calculamos los límites laterales en $0$ de esta función, tenemos:

	$$\lim_{x \to 0^-} f(x) = -\infty$$
	$$\lim_{x \to 0^+} f(x) = +\infty$$
	
	Los dos límites divergen, y por lo tanto, tenemos una discontinuidad asintótica.

3. **Discontinuidad evitable**: Si el límite de la función existe en un punto, pero el valor de la función no coincide con el límite en ese punto, se dice que la discontinuidad es evitable. Ejemplo:

	Aunque $f(1) = 2$, la función tiene un "agujero" en $x = 1$, porque $\lim_{x \to 1} f(x) = 2$, pero $f(1)$ no está definido correctamente en esa forma.

$$
f(x) = 
\begin{cases}
\frac{x^2 - 1}{x - 1} & \text{ si } x \ne 1 \\
2 & \text{ si } x = 1
\end{cases}
$$

### 10.2.3. Asíntotas

Las asíntotas son líneas horizontales, verticales u oblicuas que describen el comportamiento de una función cuando su variable independiente $x$ tiende a un valor específico o a $\pm\infty$. A medida que la función se acerca a estas líneas, los valores de la función tienden a acercarse a un límite, pero **nunca tocan o cruzan la asíntota**. Las asíntotas proporcionan información importante sobre el comportamiento "extremo" de las funciones.

Una función puede tener **varias** asíntota vertical y horizontal o asíntota vertical y oblicua, pero nunca asíntota horizontal y oblicua.

Tipos de asíntotas:

1. **Asíntota vertical**: Ocurren cuando algún valor del denominador hace que sea igual a $0$, pero no anula al numerador. Ejemplo:

	$$f(x) = \frac{1}{x - 1}

	La función tiene una asíntota vertical en $x = 1$, porque:

	$$\lim_{x \to 1^+} f(x) = +\infty \quad y \quad \lim_{x \to 1^-} f(x) = -\infty$$

	Esto significa que la función tiende a infinito conforme $x$ se acerca a $1$ desde la derecha y a $-\infty$ desde la izquierda.

	También ocurre con los logaritmos.

2. **Asíntota horizontal**: Ocurren cuando el grado del numerador de una función racional es igual o menor al grado del denominador. Se determinan evaluando el límite de la función cuando $x \to \pm\infty$. Ejemplo:

	$$f(x) = 3 + \frac{x - 5}{x + 1}$$

	$$\lim_{x \to +\infty} f(x) = 4$$
	$$\lim_{x \to -\infty} f(x) = 4$$

	En este caso particular, los dos límites existen y tienden al mismo valor, $4$. Por lo tanto, la recta de ecuación $y = 4$ será la única asíntota horizontal de la función.

3. **Asíntota oblicua**: Ocurren cuando el grado del numerador de una función racional es exactamente una unidad mayor que el grado del denominador. 

	La ecuación de la asíntota viene dada por el cociente de la división de polinomios que define la función $f(x)$:

	$\frac{\text{dividendo}}{\text{divisor}} = \text{cociente} + \frac{\text{resto}}{\text{divisor}}$

	Al calcular el límite cuando $x$ tiende a infinito, el último término tiende a $0$ y queda solo el cociente, que será la ecuación de la asíntota.

	Ejemplo:

	$$f(x) = \frac{x^2 - 2x + 3}{x - 1} = x - 1 + \frac{2}{x - 1}$$

	Al calcular la división de polinomios, obtenemos que $x - 1$ es el cociente y $2$ es el resto de la división. Por lo tanto, la asíntota tiene por ecuación $x - 1$, y vemos que es la misma asíntota para los dos límites.

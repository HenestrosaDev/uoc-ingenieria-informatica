# Resolución de la práctica de la AC11-1

Ver primera pregunta en la captura de pantalla `practica.png`.

<h2>
	2. $f(x)$ y $g(x)$ son dos funciones tales que $f(x) - g(x) = -9$. Marcad las respuestas correctas.
</h2>

### ❌ $f'(x) - g'(x) = -9$

La derivada de ambos lados de $f(x) - g(x) = -9$ nos da:

$$f'(x) - g'(x) = 0$$

porque la derivada de una constante ($-9$) es $0$. Por lo tanto, esta afirmación es **incorrecta**.

<h3>❌ $$\int \! f(x) \, \mathrm{d}x - \int \! g(x) \, \mathrm{d}x = -9$$</h3>

La integral de una diferencia de funciones es igual a la diferencia de sus integrales. Esto nos da:

<p>
	$$\int \! f(x) \, \mathrm{d}x - \int \! g(x) \, \mathrm{d}x = \int \! (f(x) - g(x)) \, \mathrm{d}x$$
</p>

Como $f(x) - g(x) = -9$, entonces:

<p>
	$$\int \! f(x) \, \mathrm{d}x - \int \! g(x) \, \mathrm{d}x = \int \! -9 \, \mathrm{d}x = -9x + C$$
</p>

Por lo tanto, esta afirmación es **incorrecta**, ya que no es una constante $-9$, sino una función de $x$.

### ✅ $f'(x) - g'(x) = 0$

Como vimos en el análisis de la primera afirmación, derivar $f(x) - g(x) = -9$ nos da:

$$f'(x) - g'(x) = 0$$

Esta afirmación es **correcta**.

<h3>✅ $$\int \! f(x) \, \mathrm{d}x - \int \! g(x) \, \mathrm{d}x = -9x + C$$</h3>

Como vimos en el análisis de la segunda afirmación:

<p>
	$$\int \! f(x) \, \mathrm{d}x - \int \! g(x) \, \mathrm{d}x = \int \! -9 \, \mathrm{d}x = -9x + C$$
</p>

Esta afirmación es **correcta**.

<h3>❌ $$\int \! f(x) \, \mathrm{d}x = \int \! g(x) \, \mathrm{d}x$$</h3>

Si esta igualdad fuera cierta, entonces:

<p>
	$$\int \! f(x) \, \mathrm{d}x - \int \! g(x) \, \mathrm{d}x = 0$$
</p>

pero sabemos que:

<p>
	$$\int \! f(x) \, dx - \int g(x) \, dx = -9x + C$$
</p>

lo que contradice esta afirmación. Por lo tanto, esta afirmación es **incorrecta**.

<h2>
	3. Calculad $$\int \! \left( 2 \cdot \sqrt[3]{x} \mathrm{d}x \right)$$
</h2>

En primer lugar, vamos a reescribir $\sqrt[3]{x}$ en términos de potencias. Sabemos que $\sqrt[3]{x} = x^{\frac{1}{3}}$. Por lo tanto, la integral se reescribe como:

<p>
	$$\int \! \left( 2 \cdot x^{\frac{1}{3}} \right) \, \mathrm{d}x = 2 \int \! x^{\frac{1}{3}} \, \mathrm{d}x$$
</p>

A continuación, aplicamos la regla de integración de potencias para integrar $x^n$ es:

<p>
	$$\int x^n \, dx = \frac{x^{n+1}}{n+1}, \quad \text{si } n \neq -1$$
</p>

En este caso, $n = \frac{1}{3}$. Entonces:

<p>
	$$\int \! x^{\frac{1}{3}} \, dx = \frac{x^{\frac{1}{3} + 1}}{\frac{1}{3} + 1} = \frac{x^{\frac{4}{3}}}{\frac{4}{3}} = \frac{3}{4} x^{\frac{4}{3}}$$
</p>

Ahora, sustituimos el resultado multiplicando el $2$ que estaba fuera de la integral:

<p>
	$$2 \int \! x^{\frac{1}{3}} \, \mathrm{d}x = 2 \cdot \frac{3}{4} x^{\frac{4}{3}} = \frac{6}{4} x^{\frac{4}{3}} = \frac{3}{2} x^{\frac{4}{3}}$$
</p>

Por último, agregamos la constante de integración, lo cual da como resultado

<p>
	$$\int \! \left( 2 \cdot \sqrt[3]{x} \right) \, \mathrm{d}x = \frac{3}{2} x^{\frac{4}{3}} + C$$
</p>

<h2>
	4. Determinad la función $f(x)$ tal que $f''(x) = 6$, $f'(0) = 9$ y $f(1) = 2$
</h2>

En primer lugar, hay que integrar $f''(x)$ para obtener $f'(x)$. Sabemos que $f''(x) = 6$, por lo que integramos una vez para obtener $f'(x)$:

<p>
	$$f'(x) = \int \! f''(x) \, \mathrm{d}x = \int \! 6 \, \mathrm{d}x = 6x + C_1$$
</p>

donde $C_1$ es una constante.

A continuación, usamos la condición $f'(0) = 9$ y sustituimos $x = 0$ en $f'(x) = 6x + C_1$:

$$f'(0) = 6(0) + C_1 = 9 \quad \implies \quad C_1 = 9$$

Por lo tanto:

$$f'(x) = 6x + 9$$

Ahora que tenemos la derivada, la integramos para obtener $f(x)$:

<p>
	$$f(x) = \int \! f'(x) \, \mathrm{d}x = \int \! (6x + 9) \, \mathrm{d}x = \frac{6x^2}{2} + 9x + C_2 = 3x^2 + 9x + C_2$$
</p>

donde $C_2$ es otra constante.

Por último, usamos la condición $f(1) = 2$ y sustituimos $x = 1$ en $f(x) = 3x^2 + 9x + C_2$:

$$f(1) = 3(1)^2 + 9(1) + C_2 = 2 \quad \implies \quad 3 + 9 + C_2 = 2 \quad \implies \quad C_2 = 2 - 12 = -10$$

Por lo tanto, la función $f(x)$ buscada es

$$f(x) = 3x^2 + 9x - 10$$

<h2>
	5. Considera la sucesión de debajo y encuentra el valor de $f_{1872} (x)$ si $f_0 (x) = \sin (x)$
</h2>

<p>
	$$f_n(x) = \int \! f_{n-1} (x) \, \mathrm{d}x \text{ para } n = 1,2,3,...$$
</p>

En primer lugar, tenemos que entender la relación recursiva. En este caso, la sucesión indica que cada función $f_n(x)$ se obtiene integrando la función anterior $f_{n-1}(x)$. Sabemos que:

1. $$f_0(x) = \sin(x)$$
2. <p>$$f_1(x) = \int \! \sin(x) \, \mathrm{d}x = -\cos(x) + C_1$$</p>
3. <p>$$f_2(x) = \int \! (-\cos(x) + C_1) \, \mathrm{d}x = -\sin(x) + C_1x + C_2$$</p>
4. <p>$$f_3(x) = \int \! (-\sin(x) + C_1x + C_2) \, \mathrm{d}x = \cos(x) + \frac{C_1x^2}{2} + C_2x + C_3$$</p>

Observamos que las funciones trigonométricas, $\sin(x)$ y $\cos(x)$, se alternan cíclicamente con cada integración:

- $f_0(x) = \sin(x)$,
- $f_1(x) = -\cos(x)$,
- $f_2(x) = -\sin(x)$,
- $f_3(x) = \cos(x)$,
- $f_4(x) = \sin(x)$,
- y así sucesivamente.

Por tanto, notamos que las funciones trigonométricas siguen un ciclo de 4 pasos:

1. $f_0(x) = \sin(x)$,
2. $f_1(x) = -\cos(x)$,
3. $f_2(x) = -\sin(x)$,
4. $f_3(x) = \cos(x)$,

y el ciclo se repite.

Para $f_{1872}(x)$, tomamos el residuo de $1872$ módulo $4$:

$$1872 \mod 4 = 0$$

Esto significa que $f_{1872}(x)$ corresponde al mismo caso que $f_0(x)$.

Dado que $f_0(x) = \sin(x)$, concluimos que:

$$f_{1872}(x) = \sin(x)$$

<h2>
	6. Marcad las afirmaciones que sean ciertas si consideramos la gráfica de la función afín $$f(x) = -x - 3$$:
</h2>

<h3>✅ Si $F(x)$ es una función primitiva de $f(x)$, entonces uno de los coeficientes de $F(x)$ es $-3$</h3>

Cuando integramos $f(x) = -x - 3$, obtenemos una función primitiva $F(x)$:

<p>
	$$F(x) = \int \! (-x - 3) \, \mathrm{d}x = -\frac{x^2}{2} - 3x + C$$
</p>

donde $C$ es una constante de integración. Aquí, el coeficiente del término lineal $(-3x)$ es $-3$, así que esta afirmación es **correcta**.

<h3>✅ $f(x)$ es primitiva de una función constante</h3>

Si $f(x)$ es primitiva de una función constante $C$, por lo que $f'(x) = C$. Sin embargo:

$$f'(x) = \frac{\mathrm{d}}{\mathrm{d}x} (-x - 3) = -1$$

que no es cero (una condición necesaria para que $f(x)$ sea primitiva de una función constante). Esta afirmación es **incorrecta**.

<h3>❌ Si $F(x)$ es una primitiva de $f(x)$, entonces uno de los coeficientes que no es término independiente de $F(x)$ es $-1$</h3>

Como vimos en el cálculo de la primitiva:

$$F(x) = -\frac{x^2}{2} - 3x + C$$

El coeficiente de $x^2$ en $F(x)$ es $-\frac{1}{2}$, pero no hay un coeficiente que sea exactamente $-1$. Por tanto, esta afirmación es **incorrecta**.

<h3>❌ La gráfica de una primitiva de $f(x)$ será simétrica respecto al eje de abscisas</h3>

La simetría respecto al eje de abscisas requiere de una función $F(x)$ satisfaga la condición $F(x) = -F(x)$, lo cual no ocurre con $F(x) = -\frac{x^2}{2} - 3x + C$, ya que contiene términos que no cumplen esta propiedad. Por lo tanto, esta afirmación es **incorrecta**.

<h3>✅ La función primitiva de $f(x)$ es un polinomio de segundo grado</h3>

La primitiva de $f(x) = -x - 3 es:

$$F(x) = -\frac{x^2}{2} - 3x + C$$

que es un polinomio de grado $2$. Por lo tanto, esta afirmación es **correcta**.

<h3>✅ Una de las primitivas de $f(x)$ pasa por el punto $(0, -4)$</h3>

Sustituyendo $x = 0$ en la primitiva:

$$F(x) = -\frac{x^2}{2} - 3x + C$$

obtenemos:

$$F(0) = -\frac{0^2}{2} - 3(0) + C = C$$

Para que pase por el punto $(0, -4)$, necesitamos que $C = -4$. Esto es posible, ya que $C$ es una constante arbitraria. Por lo tanto, esta afirmación es **correcta**.

<h2>
	7. Determinad el polinomio $p(x)$ que satisface la condición $p(0) = 0$ y que cumple la ecuación siguiente: $$p(x) + \int \! (-12x^2 - 16x + 2) \mathrm{d}x = 5x^3 + x^2 + 6x$$
</h2>

En primer lugar, calculamos la integral:

<p>
	$$\int \! (-12x^2 - 16x + 2) \, \mathrm{d}x = -4x^3 - 8x^2 + 2x + C$$
</p>

Ahora que tenemos la integral calculada, la sustituimos en la ecuación del enunciado:

<p>
	$$p(x) + (-4x^3 - 8x^2 + 2x + C) = 5x^3 + x^2 + 6x$$
</p>

Simplificamos:

<p>
	$$p(x) = 5x^3 + x^2 + 6x - (-4x^3 - 8x^2 + 2x + C)$$
</p>

Eliminamos el paréntesis y agrupamos términos:

<p>
	$$p(x) = 5x^3 + x^2 + 6x + 4x^3 + 8x^2 - 2x - C$$
</p>

Simplificamos los términos semejantes:

<p>
	$$p(x) = (5x^3 + 4x^3) + (x^2 + 8x^2) + (6x - 2x) - C$$  
	$$p(x) = 9x^3 + 9x^2 + 4x - C$$
</p>

Por último, para despejar el valor de $C$, sustituimos $x = 0$ en $p(x)$:

<p>
	$$p(0) = 9(0)^3 + 9(0)^2 + 4(0) - C = 0 \implies C = 0$$
</p>

Como conclusión, el polinomio $p(x)$ es $9x^3 + 9x^2 + 4x$.

<h2>
	8. Calculad $$\int \! 3 \cdot (\sin(5x))^2 \cdot (5 \cdot \cos(5x)) \, \mathrm{d}x$$
</h2>

Para facilitar el proceso de integración, aplicamos el siguiente **cambio de variable**:

Sea $u = \sin(5x)$, entonces la derivada es:

<p>
	$$\frac{\mathrm{d}u}{\mathrm{d}x} = 5 \cos(5x) \implies \mathrm{d}u = 5 \cos(5x) \mathrm{d}x$$
</p>

Por lo tanto, $5 \cos(5x) \mathrm{d}x$ en la integral se sustituye simplemente por $\mathrm{d}u$, quedando de esta forma:

<p>
	$$I = \int \! 3 \cdot u^2 \, \mathrm{d}u$$
</p>

A continuación, **integramos en términos de $u$**:

<p>
	$$\int \! 3u^2 \, \mathrm{d}u = 3 \cdot \frac{u^3}{3} = u^3 + C$$
</p>

donde $C$ es la constante de integración.

Calculamos la integral de $\mathrm{d}u$:

<p>
	$$\int \! 5 \cos(5x) \, \mathrm{d}x = \sin(5x) + C$$
</p>

Ahora que tenemos el valor de $u$, podemos volver a la variable original:

<p>
	$$I = (\sin(5x)^1)^2 + C = (\sin(5x))^3 + C$$
</p>

Por lo tanto, la respuesta final es

<p>
	$$\int \! 3 (\sin(5x))^2 \cdot (5 \cos(5x)) \, \mathrm{d}x = (\sin(5x))^3 + C$$
</p>

<h2>
	9. ¿Cuáles de la siguientes expresiones son primitivas de $f(x) = \frac{2x + 9}{x^2 +9x + 20}$?
</h2>

Vamos a resolver la integral y después detallaremos todas las expresiones posibles.

En primer lugar, debemos factorizar el denominador:

$$x^2 + 9x + 20 = (x + 5)(x + 4)$$

Entonces, la función queda así:

$$f(x) = \frac{2x + 9}{(x + 5)(x + 4)}$$

Ahora, descomponemos $f(x)$ en fracciones parciales:

$$\frac{2x + 9}{(x + 5)(x + 4)} = \frac{A}{x + 5} + \frac{B}{x + 4}$$

donde $A$ y $B$ son constantes que determinaremos.

Multiplicamos por el denominador común $(x + 5)(x + 4)$:

$$2x + 9 = A(x + 4) + B(x + 5)$$

Expandimos:

$$2x + 9 = Ax + 4A + Bx + 5B$$

Agrupamos términos:

$$2x + 9 = (A + B)x + (4A + 5B)$$

Igualamos coeficientes:

1. Para $x$: $A + B = 2$
2. Para el término independiente: $4A + 5B = 9$

Esto forma un sistema de ecuaciones lineales. Sustituimos la primera ecuación en la segunda:

$$4(2 - B) + 5B = 9$$  
$$8 - 4B + 5B = 9$$  
$$B = 1$$

Sustituimos $B = 1$ en la primera ecuación:

$$A + 1 = 2 \quad \implies \quad A = 1$$

Por lo tanto, la descomposición es:

$$\frac{2x + 9}{(x + 5)(x + 4)} = \frac{1}{x + 5} + \frac{1}{x + 4}$$

Ahora, integramos ambos términos:

<p>
	$$\int \! f(x) \, \mathrm{d}x = \int \! \frac{1}{x + 5} \, \mathrm{d}x + \int \! \frac{1}{x + 4} \, \mathrm{d}x$$
</p>

Cada término se integra como un logaritmo:

<p>
	$$\int \! \frac{1}{x + 5} \, \mathrm{d}x = \ln \lvert x + 5 \rvert \quad \int \! \frac{1}{x + 4} \, \mathrm{d}x = \ln \lvert x + 4 \rvert$$
</p>

Por lo tanto, la integral es:

<p>
	$$\int \! f(x) \mathrm{d}x = \ln \lvert x + 5 \rvert + \ln \lvert x + 4 \rvert + C$$
</p>

donde $C$ es la constante de integración.

Ahora que tenemos la respuesta, podemos afirmar que las opciones correctas son:

- [x] $\ln (\lvert x + 4 \rvert) + \ln (\lvert x + 5 \rvert)$
- [x] $\ln (\lvert x^2 + 9x + 20 \rvert)$

<h2>
	10. Encontrad el punto $P(x,y)$ donde la función $f(x)$ corta al eje de ordenadas, sabiendo que la intersección con el eje de abscisas es el punto $(1,0)$ y su derivada es $$f'(x) = 108x^5 \cdot e^{6x^6}$$
</h2>

En primer lugar, tenemos que integrar $f'(x)$ para hallar $f(x)$:

<p>
	$$f(x) = \int \! f'(x) \, \mathrm{d}x = \int \! 108 \cdot x^5 \cdot e^{6x^6} \, \mathrm{d}x$$
</p>

Para resolver esta integral, realizamos un cambio de variable:

<p>
	$$u = 6x^6 \quad \implies \quad \mathrm{d}u = 36x^5 \, \mathrm{d}x$$
</p>

Por lo tanto:

<p>
	$$f(x) = \int \! 108 \cdot x^5 \cdot e^{6x^6} \, \mathrm{d}x = \int \! \frac{108}{36} e^u \, \mathrm{d}u = \int \! 3e^u \, \mathrm{d}u$$
</p>

La integral de $3e^u$ es:

<p>
	$$f(x) = 3e^u + C = 3e^{6x^6} + C$$
</p>

donde $C$ es una constante de integración.

Ahora, usamos la condición de intersección con el eje de abscisas $(f(1) = 0)$, por lo que sustituimos $x=1$ en $f(x) = 3e^{6x^6} + C$:

<p>
	$$f(1) = 3e^{6(1)^6} + C = 0 \quad \implies \quad 3e^6 + C = 0 \quad \implies \quad C = -3e^6$$
</p>

Por lo tanto, la función es

<p>
	$$f(x) = 3e^{6x^6} - 3e^6$$
</p>

Por último, encontramos la intersección con el eje de ordenadas, la cual ocurre cuando $x=0$. Por lo tanto, sustituimos ese valor de $x$ en $f(x)$:

<p>
	$$f(0) = 3e^{6(0)^6} - 3e^6 = 3e^0 - 3e^6 = 3 - 3e^6$$
</p>

Como conclusión, la intersección con el eje de ordenadas es $P(0, 3 - 3e^6)$.
# RESUMEN Lógica de predicados: fórmulas a enunciados

A partir de un dominio dado, podemos transformar las fórmulas de un razonamientos (lógica de predicados) en enunciados (lógica de enunciados).

Para conseguir este propósito, tendremos que eliminar los cuantificadores de las fórmulas.  Dado el dominio $\set{1,2}$, podemos eliminar los cuantificadores de la siguiente forma:

- **Cuantificador universal** $(\forall)$: $\forall x P(x) \equiv P(1) \wedge P(2)$
- **Cuantificador existencial** $(\exists)$: $\exists x P(x) \equiv P(1) \vee P(2)$

Con esas dos únicas equivalencias, seremos capaz de lograr nuestro objetivo. Para entender este concepto, vamos a utilizar un ejemplo más sofisticado.

Dado el dominio $\set{1,2}$ y esta fórmula:

$$\forall x (P(x) \to \exists y Q(x,y))$$

Para facilitar el proceso, es recomendable eliminar los cuantificadores de izquierda a derecha, de la siguiente forma:

<table>
	<tr>
		<th>Nº PASO</th>
		<th>FÓRMULA</th>
		<th>REGLA APLICADA</th>
	</tr>
	<tr>
		<td>1</td>
		<td>$\forall x (P(x) \to \exists y Q(x,y))$</td>
		<td>-</td>
	</tr>
	<tr>
		<td>2</td>
		<td>$(P(1) \to \exists y Q(1,y)) \wedge (P(2) \to \exists y Q(2,y))$</td>
		<td>Eliminar cuantificador $(\forall x)$</td>
	</tr>
	<tr>
		<td>3</td>
		<td>$(P(1) \to (Q(1,1) \vee Q(1,2))) \wedge (P(2) \to \exists y Q(2,y))$</td>
		<td>Eliminar cuantificador (primer $\exists y$)</td>
	</tr>
	<tr>
		<td>4</td>
		<td>$(P(1) \to (Q(1,1) \vee Q(1,2))) \wedge (P(2) \to (Q(2,1) \vee Q(2,2,)))$</td>
		<td>Eliminar cuantificador $(\exists y)$</td>
	</tr>
	<tr>
		<td>5</td>
		<td>$-$</td>
		<td>Enunciado</td>
	</tr>
</table>
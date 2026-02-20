# RESUMEN Lógica de predicados: fórmulas a enunciados

>[!NOTE]
>En los [ejercicios de fórmulas a enunciados de lógica de predicados de Alura](https://github.com/HenestrosaDev/uoc-ingenieria-informatica/tree/main/logica/ejercicios_alura/2_logica_de_predicados/3_formulas_a_enunciados) encontrarás problemas resueltos con los que podrás practicar y comprobar tus soluciones.

## Procedimiento

A partir de un dominio, podemos transformar las fórmulas de un razonamiento (lógica de predicados) en enunciados (lógica de enunciados).

Para lograrlo, el método consiste en "expandir" y eliminar los cuantificadores sustituyendo las variables por los elementos concretos del dominio. Tomando como ejemplo el dominio $D = \{1, 2\}$, las equivalencias fundamentales son:

- **Cuantificador universal** $(\forall)$: $\forall x P(x) \equiv P(1) \wedge P(2)$
- **Cuantificador existencial** $(\exists)$: $\exists x P(x) \equiv P(1) \vee P(2)$

Con estas dos únicas reglas, podemos resolver fórmulas mucho más complejas.

## Ejemplo de aplicación

Consideremos el mismo domino $D = \set{1,2}$ y la siguiente fórmula:

$$\forall x (P(x) \to \exists y Q(x,y))$$

Para facilitar el proceso y no confundir el alcance de las variables, la mejor práctica es eliminar los cuantificadores sistemáticamente **de izquierda a derecha** (es decir, desde el cuantificador más externo hacia los más internos).

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
		<td>Expansión del cuantificador universal $(\forall x)$</td>
	</tr>
	<tr>
		<td>3</td>
		<td>$(P(1) \to (Q(1,1) \vee Q(1,2))) \wedge (P(2) \to \exists y Q(2,y))$</td>
		<td>Expansión del primer cuantificador existencial ($\exists y$)</td>
	</tr>
	<tr>
		<td>4</td>
		<td>$(P(1) \to (Q(1,1) \vee Q(1,2))) \wedge (P(2) \to (Q(2,1) \vee Q(2,2,)))$</td>
		<td>Expansión del segundo cuantificador existencial $(\exists y)$</td>
	</tr>
</table>

**Resultado final**: Al concluir el paso 4, hemos eliminado con éxito todos los cuantificadores. Hemos transformado la fórmula original en un enunciado puramente proposicional que puede ser evaluado mediante tablas de verdad.
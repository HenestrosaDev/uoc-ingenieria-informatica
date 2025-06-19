# RESUMEN Lógica de predicados: deducción natural

>[!IMPORTANT]
>Las nueve primeras reglas de la lógica de predicados son las mismas que la de la lógica de enunciados. Por lo tanto, en este recurso solo se explican aquellas que se utilizan exclusivamente en la lógica de predicados. Puedes ver el resto consultando [este recurso](https://github.com/HenestrosaDev/uoc-ingenieria-informatica/blob/main/logica/pec2/recursos/README.md).

## Índice

>[!NOTE]
>El apartado **2.1.2. Restricciones adicionales**, el cual añade dos restricciones, ha sido integrado en la [regla 11](#regla-11-introducción-del-cuantificador-i-forall) y en la [regla 12](#regla-12-eliminación-del-cuantificador-universal-i-exists), respectivamente.

- [2.1. Reglas](#21-reglas)
	- [REGLA 10: Eliminación del cuantificador universal (E $\forall$)](#regla-10-eliminación-del-cuantificador-universal-e-forall)
	- [REGLA 11: Introducción del cuantificador universal (I $\forall$)](#regla-11-introducción-del-cuantificador-i-forall)
	- [REGLA 12: Eliminación del cuantificador existencial (E $\exists$)](#regla-12-eliminación-del-cuantificador-universal-i-exists)
	- [REGLA 13: Introducción del cuantificador existencial (I $\exists$)](#regla-13-eliminación-del-cuantificador-universal-e-exists)
	- [2.1.2. Restricciones adicionales](#212-restricciones-adicionales)
- [2.2. Ejemplos](#22-ejemplos)
- [2.3. Reglas derivadas y equivalencias deductivas](#23-reglas-derivadas-y-equivalencias-deductivas)
	- [Reglas derivadas](#reglas-derivadas)
		- [Regla del silogismo hipotético](#regla-del-silogismo-hipotético)
		- [Regla del quodlibet sequitur (QS)](#regla-del-quodlibet-sequitur-qs)
		- [Regla del silogismo disyuntivo (SD)](#regla-del-silogismo-disyuntivo-sd)
		- [Regla del modus tollens (MT)](#regla-del-modus-tollens-mt)
		- [Regla de resolución (Res)](#regla-de-resolución-res)
	- [Equivalencias deductivas](#equivalencias-deductivas)
		- [Cambio de nombre de la variable cuantificada](#cambio-de-nombre-de-la-variable-cuantificada)
		- [Paso del cuantificador universal al existencial](#paso-del-cuantificador-universal-al-existencial)
		- [Conmutatividad de los cuantificadores](#conmutatividad-de-los-cuantificadores)
		- [Leyes de De Morgan](#leyes-de-de-morgan)
		- [Relación de los cuantificadores con la conjunción](#relación-de-los-cuantificadores-con-la-conjunción)
		- [Relación de los cuantificadores con la disyunción](#relación-de-los-cuantificadores-con-la-disyunción)
		- [Relación de los cuantificadores con la implicación](#relación-de-los-cuantificadores-con-la-implicación)

<br>

## 2.1. Reglas

La deducción natural de la lógica de predicados mantiene las 9 reglas de la lógica de enunciados + 4 más: 2 para cada cuantificador (1 para eliminarlo y 1 para introducirlo).

Antes de entrar de lleno en las reglas, es importante saber que una **variable arbitraria** es aquella que representa un elemento cualquiera del dominio, elegido de forma totalmente general. Condiciones a tener en cuenta:
- No debe aparecer libre en ninguna hipótesis no descargada.

	<table>
		<tr>
			<th>Nº PASO</th>
			<th>ENUNCIADO</th>
			<th>REGLA APLICADA</th>
		</tr>
		<tr>
			<td>1</td>
			<td>$\forall x P(x)$</td>
			<td>P</td>
		</tr>
		<tr>
			<td>2</td>
			<td>$P(a)$</td>
			<td>H</td>
		</tr>
		<tr>
			<td>3</td>
			<td>$\forall x P(x)$</td>
			<td>I $\forall$ 2 ¡ERROR! No se puede generalizar a $\forall x P(x)$ porque $a$ proviene de una hipótesis particular (no es arbitraria). Estamos usando una instancia específica y no un caso general.</td>
		</tr>
	</table>

- No se puede haber hecho ninguna hipótesis específica sobre ella.

### REGLA 10: Eliminación del cuantificador universal (E $\forall$)

$$\frac{\forall x A(x)}{A(t)}$$

>[!IMPORTANT]
>Permite eliminar un cuantificador universal sustituyendo la variable cuantificada por una constante nueva, una constante aparecida previamente o una variable arbitraria.

Para su explicación, partiremos del siguiente razonamiento:

>Los isleños son agradables $(\forall x (I(x) \to A(x)))$.  
>Juan es isleño $(I(a))$.  
>Por lo tanto $(\therefore)$, Juan es agradable.

<table>
	<tr>
		<th>Nº PASO</th>
		<th>ENUNCIADO</th>
		<th>REGLA APLICADA</th>
	</tr>
	<tr>
		<td>1</td>
		<td>$\forall x (I(x) \to A(x))$</td>
		<td>P</td>
	</tr>
	<tr>
		<td>2</td>
		<td>$I(a)$</td>
		<td>P</td>
	</tr>
	<tr>
		<td>3</td>
		<td>$I(a) \to A(a)$</td>
		<td>E $\forall$ 1 $(x$ sustituida por la constante $a)$</td>
	</tr>
	<tr>
		<td>4</td>
		<td>$A(a)$</td>
		<td>E $\to$ 2,3</td>
	</tr>
</table>

Esto es equivalente a pasar a decir "Si Juan es isleño, entonces es agradable".

>[!CAUTION]
>$a$ debe ser un término cerrado (una constante o un término sin variables libres).

<br>
<br>

### REGLA 11: Introducción del cuantificador universal (I $\forall$)

$$\frac{A(u)}{\forall x A(x)}$$

Si algo puede decirse de $u$ $(A(u))$ y se puede garantizar que este $u$ podría ser cualquier objeto del dominio, entonces $A$ puede decirse de todos los elementos del dominio $(\forall x A(x))$.

>[!IMPORTANT]
>Se aplica sobre variables, siempre que estén libres.

**Condiciones importantes**:

- No se puede aplicar cuando la variable libre de la fórmula en la que se aplica la regla es la hipótesis de la subdeducción en la que se hace la aplicación.

	Ejemplo:

	<table>
		<tr>
			<th>Nº PASO</th>
			<th colspan="2">ENUNCIADO</th>
			<th>REGLA APLICADA</th>
		</tr>
		<tr>
			<td>1</td>
			<td>$\forall x (S(x) \vee P(x))$</td>
			<td></td>
			<td>P</td>
		</tr>
		<tr>
			<td>2</td>
			<td>$\neg \forall x S(x)$</td>
			<td></td>
			<td>P</td>
		</tr>
		<tr>
			<td>3</td>
			<td>$S(u) \vee P(u)$</td>
			<td></td>
			<td>E $\forall$ 1</td>
		</tr>
		<tr>
			<td>4</td>
			<td></td>
			<td>$S(u)$</td>
			<td>H</td>
		</tr>
		<tr>
			<td>5</td>
			<td></td>
			<td>$\forall x S(x)$</td>
			<td>I $\forall$ (¡ERROR!)</td>
		</tr>
	</table>

- **TODAS** las ocurrencias de una variable libre $(u)$ en una fórmula $(A)$ deben ser sustituidas por la misma variable $(x)$.

	Ejemplo:

	<table>
		<tr>
			<th>Nº PASO</th>
			<th>ENUNCIADO</th>
			<th>REGLA APLICADA</th>
		</tr>
		<tr>
			<td>1</td>
			<td>$\forall x \forall y A(x,y)$</td>
			<td>P</td>
		</tr>
		<tr>
			<td>2</td>
			<td>$\forall y A(u,y)$</td>
			<td>E $\forall$ 1 $(x$ es sustituida por $u$)</td>
		</tr>
		<tr>
			<td>3</td>
			<td>$A(u,u)$</td>
			<td>E $\forall$ 2 $(y$ es sustituida por $u$)</td>
		</tr>
		<tr>
			<td>4</td>
			<td>$\forall z A(z,z)$</td>
			<td>I $\forall$ 3 $(u$ era libre y arbitraria)</td>
		</tr>
	</table>

- La introducción de $\forall$ **NO** debe provocar capturas involuntarias de variables libres. Ejemplo de captura involuntaria:

	<table>
		<tr>
			<th>Nº PASO</th>
			<th>ENUNCIADO</th>
			<th>REGLA APLICADA</th>
		</tr>
		<tr>
			<td>1</td>
			<td>$A(u) \to (B(x) \to C(u,x))$</td>
			<td>P</td>
		</tr>
		<tr>
			<td>2</td>
			<td>$\forall x (A(x) \to (B(x) \to C(x,x)))$</td>
			<td>I $\forall$ 1 (¡ERROR! Debe usarse otra variable diferente de $x$ para aplicar esta regla)</td>
		</tr>
	</table>

- Cuando una fórmula contiene a la vez:
	- Una variable libre $(u)$ que proviene de la eliminación de un cuantificador universal, y
	- Una constante $(a)$ que proviene de la eliminación de un cuantificador existencial que estaba dentro del alcance del cuantificador universal anterior (aquel cuya eliminación ha dado lugar a la aparición de la variable $u$),

	entonces: no se puede aplicar la regla I $\forall$ respecto a la variable libre $u$.

	Ejemplo:

	<table>
		<tr>
			<th>Nº PASO</th>
			<th>ENUNCIADO</th>
			<th>REGLA APLICADA</th>
		</tr>
		<tr>
			<td>1</td>
			<td>$\forall x \exists y C(x,y)$</td>
			<td>P</td>
		</tr>
		<tr>
			<td>2</td>
			<td>$\exists y C(u,y)$</td>
			<td>E $\forall$ 1 $(x$ es sustituida por $u$)</td>
		</tr>
		<tr>
			<td>3</td>
			<td>$C(u,a)$</td>
			<td>E $\exists$ 2 $(y$ es sustituida por $a$)</td>
		</tr>
		<tr>
			<td>4</td>
			<td>$\forall x C(x,a)$</td>
			<td>I $\forall$ 3 $(¡ERROR! $a$ proviene de un $\exists$ que estaba dentro del alcance del $\forall$ del cual proviene $u$)</td>
		</tr>
	</table>

<br>
<br>

### REGLA 12: Eliminación del cuantificador existencial (E $\exists$)

$$\frac{\exists x A(x)}{A(a)}$$

Si se sabe que hay un elemento del dominio que cumple una determinada propiedad $(A)$, nos podemos referir al mismo con una constante $(a)$, siempre y cuando la misma constante **NO** se utilice también para referirse a cualquier otro elemento del dominio.

>[!IMPORTANT]
>Permite eliminar un cuantificador existencial sustituyendo la variable cuantificada por una constante nueva.

Ejemplo:

<table>
	<tr>
		<th>Nº PASO</th>
		<th colspan="2">ENUNCIADO</th>
		<th>REGLA APLICADA</th>
	</tr>
	<tr>
		<td>1</td>
		<td>$\forall x (P(x) \to V(x)) \to \forall y (R(y) \to C(y))$</td>
		<td></td>
		<td>P</td>
	</tr>
	<tr>
		<td>2</td>
		<td>$\exists x (R(x) \wedge \neg C(x))$</td>
		<td></td>
		<td>P</td>
	</tr>
	<tr>
		<td>3</td>
		<td></td>
		<td>$\forall x A(u,u)$</td>
		<td>H</td>
	</tr>
	<tr>
		<td>4</td>
		<td></td>
		<td>$\forall y (R(y) \to C(y))$</td>
		<td>E $\to$ 1, 3</td>
	</tr>
	<tr>
		<td>5</td>
		<td></td>
		<td>$R(a) \wedge \neg C(a)$</td>
		<td>E $\exists$ 2</td>
	</tr>
	<tr>
		<td>6</td>
		<td></td>
		<td>$R(a) \wedge C(a)$</td>
		<td>E $\forall$ 4</td>
	</tr>
	<tr>
		<td>7</td>
		<td></td>
		<td>$R(a)$</td>
		<td>E $\wedge$ 5</td>
	</tr>
	<tr>
		<td>8</td>
		<td></td>
		<td>$C(a)$</td>
		<td>E $\to$ 6, 7</td>
	</tr>
	<tr>
		<td>9</td>
		<td></td>
		<td>$\neg C(a)$</td>
		<td>E $\wedge$ 5</td>
	</tr>
	<tr>
		<td>10</td>
		<td>$\neg \forall x (P(x) \to V(x))$</td>
		<td></td>
		<td>I $\neg$ 3, 8, 9</td>
	</tr>
</table>

**Condiciones importantes**:

Las constantes introducidas al aplicar esta regla son locales en la (sub)deducción que las ha originado y solo pueden ser utilizadas en el mismo nivel o en niveles más interiores, pero no pueden subir a niveles superiores.

Ejemplo:

<table>
	<tr>
		<th>Nº PASO</th>
		<th colspan="2">ENUNCIADO</th>
		<th>REGLA APLICADA</th>
	</tr>
	<tr>
		<td>1</td>
		<td>$\forall x P(x) \to \exists y R(y)$</td>
		<td></td>
		<td>P</td>
	</tr>
	<tr>
		<td>2</td>
		<td></td>
		<td>$\forall x P(x)$</td>
		<td>H</td>
	</tr>
	<tr>
		<td>3</td>
		<td></td>
		<td>$\exists y R(y)$</td>
		<td>E $\to$ 1,2</td>
	</tr>
	<tr>
		<td>4</td>
		<td></td>
		<td>$R(a)$</td>
		<td>E $\exists$ 3</td>
	</tr>
	<tr>
		<td>5</td>
		<td>$\forall x P(x) \to R(a)$</td>
		<td>I $\to$ 2,4 $(¡ERROR! $a$ no se puede salir de la subdeducción donde ha sido introducida)</td>
	</tr>
</table>

<br>
<br>

### REGLA 13: Introducción del cuantificador existencial (I $\exists$)

$$\frac{A(t)}{\exists x A(x)}$$

Si algo $(A)$ puede decirse de $t$ $(A(t))$, entonces existe un elemento del dominio del cual puede decirse $A$ $(\exists x A(x))$.

>[!IMPORTANT]
>Se aplica sobre términos cualesquiera (constantes o variables) siempre que estén libres.

<table>
	<tr>
		<th>Nº PASO</th>
		<th>ENUNCIADO</th>
		<th>REGLA APLICADA</th>
	</tr>
	<tr>
		<td>1</td>
		<td>$O(b)$</td>
		<td>P</td>
	</tr>
	<tr>
		<td>2</td>
		<td>$\exists x O(x)$</td>
		<td>I $\exists$ 7</td>
	</tr>
</table>

COSA

<br>
<br>

## 2.2. Ejemplos

Ver [ejercicios de Alura de deducción natural de lógica de predicados](https://github.com/HenestrosaDev/uoc-ingenieria-informatica-privado/tree/main/logica/ejercicios_alura/2_logica_de_predicados/1_deduccion_natural).

## 2.3. Reglas derivadas y equivalencias deductivas

### Reglas derivadas

#### Regla del silogismo hipotético

$$
\frac{
  \begin{array}{c}
    A \to B \\
    B \to C
  \end{array}
}{A \to C}
$$

#### Regla del quodlibet sequitur (QS)

$$
\frac{
  \begin{array}{c}
    A \\
    \neg A
  \end{array}
}{B}
$$

#### Regla del silogismo disyuntivo (SD)

$$
\frac{
  \begin{array}{c}
    A \vee B \\
    \neg A
  \end{array}
}{B}
$$

#### Regla del modus tollens (MT)

$$
\frac{
  \begin{array}{c}
    A \to B \\
    \neg B
  \end{array}
}{A}
$$

#### Regla de resolución (Res)

$$
\frac{
  \begin{array}{c}
    \neg A \to B \\
    A \vee C
  \end{array}
}{B \vee C}
$$

### Equivalencias deductivas

#### Cambio de nombre de la variable cuantificada

$$\forall x A(x) \dashv \vdash \forall y A(y)$$

$$\exists x A(x) \dashv \vdash \exists y A(y)$$

#### Paso del cuantificador universal al existencial

$$\frac{\forall x A(x)}{\exists x A(x)}$$

#### Conmutatividad de los cuantificadores

$$\forall x \forall y A(x,y) \dashv \vdash \forall y \forall x A(x,y)$$

$$\exists x \exists y A(x,y) \dashv \vdash \exists y \exists x A(x,y)$$

#### Leyes de De Morgan

$$\neg \forall x A(x) \dashv \vdash \exists x \neg A(x)$$

$$\neg \exists x A(x) \dashv \vdash \forall x \neg A(x)$$

#### Relación de los cuantificadores con la conjunción

$$\forall x A(x) \wedge \forall y B(y) \dashv \vdash \forall z (A(z) \wedge B(z))$$

$$\frac{\exists z (A(z) \wedge B(z))}{\exists x A(x) \wedge \exists y B(y)}$$

#### Relación de los cuantificadores con la disyunción

$$\exists x A(x) \vee \exists y B(y) \dashv \vdash \exists z (A(z) \vee B(z))$$

$$\frac{\forall x A(x) \vee \forall y B(y)}{\forall z (A(z) \vee B(z))}$$

#### Relación de los cuantificadores con la implicación

$$\frac{\forall z (A(z) \to B(z))}{\forall x A(x) \to \forall y B(y)}$$

$$\frac{\exists x A(x) \to \exists y B(y)}{\exists z (A(z) \to B(z))}$$
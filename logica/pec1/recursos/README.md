# RESUMEN Lógica de enunciados: la lógica de enunciados y su lenguaje

## 1.1. El objeto de interés de la lógica: los razonamientos

Un **razonamiento** es una secuencia de frases (**premisas**) organizadas de manera que sustentan una conclusión.

## 1.2. La necesidad de un lenguaje formal

Un **enunciado** es la formalización―es decir, traducción al lenguaje de la lógica―de una frase **declarativa**.

Una frase es **declarativa** si se puede cuestionar su **veracidad sintáctica**; es decir, si se puede poner en duda la corrección de la estructura del razonamiento de la frase, independientemente de su veracidad semántica o empírica.

Ejemplos:

- Frase **declarativa**: _Cuando me echo la siesta, llueve._
- Frase **no declarativa**: _¡Qué frío hace!_

## 1.3. Los elementos básicos del lenguaje de enunciados: átomos y conectivas

El alfabeto del lenguaje formal de la lógica se compone de:

- **Átomos**: Son unidades elementales de una frase declarativa que no se pueden subdividir en ideas más sencillas. Se representan con letras mayúsculas del alfabeto latino (**literales**).
- **Conectivas**: Operadores que permiten conectar los átomos en construcciones del lenguaje más complejas. Se representan con los siguientes símbolos: 

	<table>
		<tr>
			<th>SÍMBOLOS</th>
			<th>NOMBRE</th>
			<th>SIGNIFICADO</th>
			<th>EJEMPLO</th>
		</tr>
		<tr>
			<td>$\wedge$</td>
			<td>Conjunción</td>
			<td>
				Conjunción copulativa
				<br> 
				Conjunción adversativa
			</td>
			<td>
				"y" 
				<br> 
				"pero"
			</td>
		</tr>
		<tr>
			<td>$\vee$</td>
			<td>Disyunción</td>
			<td>Alternativa <strong>NO EXCLUYENTE</strong></td>
			<td>"o"</td>
		</tr>
		<tr>
			<td>$\neg$</td>
			<td>Negación</td>
			<td>Suceso complementario</td>
			<td>"no" <br> "nunca"</td>
		</tr>
		<tr>
			<td rowspan="2">$\rightarrow$</td>
			<td rowspan="2">
				Implicación 
				<br> 
				o 
				<br> 
				condicional
			</td>
			<td>
				Suficiencia
				<br> <br> 
				<strong>$A \rightarrow B$ = $A$ es <strong>SUFICIENTE</strong> para $B$</strong> 
				<br> 
				<strong>NO EXCLUYE</strong> otros antecedentes impliquen $B$
			</td>
			<td>
				"Si... entonces..." <br>
				"...si..." <br>
				"Cuando... entonces..." <br>
				"si..., cuando..." <br>
				"Basta... para...." <br>
				"Siempre que... entonces..." <br>
				"siempre que $A$, $B$" <br>
				$\text{"} B$ siempre que $A$" <br>
			</td>
		</tr>
		<tr>
			<td>
				<strong>NECESIDAD</strong>
				<br><br>
				$B \rightarrow A$
				<br>
				$A$ es <strong>NECESARIO</strong> para $B$
				<br><br>
				Sin $A$, no hay $B$
				<br>
				$\neg A \rightarrow \neg B$
				<br>
				La ausencia de $A$ es <strong>SUFICIENTE</strong> para la ausencia de $B$
			</td>
			<td>
				"se debe... para..." <br>
				"solo..." <br>
				"es necesario... para..." <br>
				"Hay que... para..." <br>
				"Para... se debe..." <br>
			</td>
		</tr>
		<tr>
			<td>$\therefore$</td>
			<td>Conclusión putativa</td>
			<td>Sucede a las premisas y antecede a la conclusión</td>
			<td>"De todo lo anterior, se desprende..."</td>
		</tr>
	</table>

## 1.4. Enunciados

Orden de prioridad de las conectivas:

1. $\neg$
2. $\wedge \vee$
3. $\rightarrow$

## 1.5. Otras conectivas

En este módulo, no se utilizarán las siguientes conectivas de manera explícita:

| CONECTIVA                | SÍMBOLO            | EQUIVALENCIA                                                                                     | SIGNIFICADO                |
|--------------------------|--------------------|--------------------------------------------------------------------------------------------------|----------------------------|
| **Disyunción exclusiva** | $\underline{\vee}$ | $(A \vee B) \neg (A \wedge B)$ <br> Conjunción de disyunción y negado de conjunción.               | "uno u otro, pero no ambos" |
| **Bicondicionalidad**    | $\iff$             | $(A \rightarrow B) \wedge (B \rightarrow A) <br> Conjunción de condición suficiente y necesaria. | "si y solo si"             |

## 1.6. Formalización

Principios para formalizar:

1. **Asignar literales a átomos (frases declarativas elementales)**

	- Deben ser positivos para facilitar el análisis.
	- No incluir las conectivas en la definición de los átomos.
	- Evitar interpretaciones. Recordemos que estamos analizando la estructura sintáctica de las frases, no la semántica ni su validez empírica.

2. **Identificar conectivas**

### Ejemplos con frases **conjuntivas copulativas**

>**Esto es muy sencillo y eres feliz**

**Átomos**:
- $S$: "Esto es muy sencillo"
- $F$: "eres feliz"

**Formalización**: $S \wedge F$

**Elementos clave**:
- $S$ y $F$ son **conjuntandos**. 
- $S \wedge F$ es la **conjunción**.

<br>
<br>

>**Ni hay elefantes en tu cuarto ni soy un gremlin**

**Átomos**:
- $E$: "Hay elefantes en tu cuarto"
- $G$: "Soy un gremlin"

**Formalización**: $\neg E \wedge \neg G$

**Elementos clave**:
- $\neg E$ y $\neg G$ son **conjuntandos**. 
- $\neg E \wedge \neg G$ es la **conjunción**.

---

### Ejemplo con frase **conjuntiva adversativa**

>**Esto no es muy sencillo pero eres feliz**

Aunque la frase conjuntiva sea adversativa, solo cambia el significado respecto a la copulativa. La estructura de la formalización es la misma.

**Átomos**:
- $S$: "Esto es muy sencillo"
- $F$: "eres feliz"

**Formalización**: $\neg S \wedge F$

**Elementos clave**:
- $\neg S$ y $F$ son **conjuntandos**. 
- $\neg S \wedge F$ es la **conjunción**.

---

### Ejemplo con frase **disyuntiva alternativa**

>**Llueven calamares o no es martes**

**Átomos**:
- $L$: "Llueven calamares"
- $M$: "es martes"

**Formalización**: $L \vee \neg M$

**Elementos clave**:
- $L$ y $\neg M$ son **disyuntandos**. 
- $L \vee \neg M$ es la **disyunción**.

---

### Ejemplo con frase **implicativa de suficiencia**

>**Cuando te duermes, alguien hace malabares**

**Átomos**:
- $D$: "Te duermes"
- $M$: "alguien hace malabares"

**Formalización**: $D \rightarrow M$

**Elementos clave**:
- $D$ es el **antecedente**. 
- $M$ es el **consecuente**.
- $D \rightarrow M$ es la **implicación**.

**Notas**:
- **NO ES CAUSA-EFECTO**, ya que la implicación lógica $(\rightarrow)$ solo expresa una condición de verdad, no una relación causal. Recordemos que la causa-efecto require que $A$ produzca $B$, lo cual no se garantiza con la simple afirmación de que $A \rightarrow B$. En términos simples, "si $A$, entonces $B$" no significa "porque $A$, entonces $B$".

<br>
<br>

>**Si como me reanimo**

**Átomos**:
- $C$: "como"
- $R$: "me reanimo"

**Formalización**: $C \rightarrow R$

<br>
<br>

>**Cuando los zapatos son nuevos, me hacen daño**

**Átomos**:
- $N$: "los zapatos son nuevos"
- $D$: "me hacen daño"

**Formalización**: $N \rightarrow D$

<br>
<br>

>**Corto el bacalao si el jefe no está y los otros me dejan**

**Átomos**:
- $C$: "Corto el bacalao"
- $J$: "jefe está"
- $O$: "otros me dejan"

**Formalización**: $(\neg J \wedge O) \rightarrow C$

<br>
<br>

>**Tengo escalofríos y dolor de cabeza cuando como queso**

**Átomos**:
- $E$: "Tengo escalofríos"
- $D$: "dolor de cabeza"
- $Q$: "cuando como queso"

**Formalización**: $Q \rightarrow (E \wedge D)$

<br>
<br>

>**Basta con que piense que es peligroso para que se quede en casa**

**Átomos**:
- $P$: "piense que es peligroso"
- $C$: "se quede en casa"

**Formalización**: $P \rightarrow C$

---

### Ejemplo con frase **implicativa de necesidad**

>**Para que duermas, alguien debe hacer malabares**

**Átomos**:
- $D$: "duermas"
- $M$: "alguien debe hacer malabares"

**Formalización**: $D \rightarrow M$

**Elementos clave**:
- $D$ es el **antecedente**. 
- $M$ es el **consecuente**.
- $D \rightarrow M$ es la **implicación**.

**Notas**:
- El _debe hacer_ implica la necesidad de que alguien haga malabares para que duermas. Es decir, SOLO hay UN camino para que duermas, y es que se dé que alguien haga malabares. En cambio, decir "si alguien hace malabares, me duermo" (sin el _debe_) es lo mismo que decir "Es SUFICIENTE con que alguien haga malabares para que duermas". En este caso, SIEMPRE que alguien hace malabares, te duermes, PERO NO SE EXCLUYEN otras formas para que te duermas. Podría ser que te duermas también cuando alguien hace pasteles, pero no lo sabemos.

	Entonces:

	- $D \rightarrow M$: _Es necesario que alguien haga malabares para que te duermas_ o _Solo duermes si alguien hace malabares_. Esto implica que, si duermes, es que hay alguien haciendo malabares.
	- $M \rightarrow D$: _Que alguien haga malabares es suficiente para que te duermas_ o _Si alguien hace malabares, te duermes_.
- Para convertir una formalización implicativa de necesidad a una de suficiencia, podemos aplicar el contrarrecíproco, el cual es el siguiente para este ejemplo:

	$$D \rightarrow M \qquad \text{ es lo mismo que } \qquad \neg M \rightarrow \neg D$$

	Puesto que es imprescindible que alguien haga malabares para que duermas (condición _sine qua non_), que no duermas es suficiente para que alguien no haga malabares. Como podemos ver, el antecedente y el consecuente se invierten.
- **NO ES CAUSA-EFECTO**, como ya se ha matizado en el [ejemplo de la frase implicativa de necesidad](#ejemplo-con-frase-implicativa-de-necesidad).

<br>
<br>

>**Hay que tener dinero para poder ir a esquiar**

**Átomos**:
- $D$: "tener dinero"
- $E$: "ir a esquiar"

**Formalización**: $E \rightarrow D$

**Notas**:
- Esquiar es signo de tener dinero. Si has ido a esquiar, es que tienes dinero.
- $\neg D \rightarrow \neg E$: Como el dinero es NECESARIO para esquiar, sin dinero, no se puede esquiar.

<br>
<br>

>**Solo siendo feliz puedes vivir muchos años**

**Átomos**:
- $F$: "siendo feliz"
- $V$: "vivir muchos años"

**Formalización**: $V \rightarrow F$

**Notas**:
- Si puedes vivir muchos años es que eres feliz, ya que ser feliz es NECESARIO para vivir muchos años.
- $\neg F \rightarrow \neg V$: Sin ser feliz, no se viven muchos años.

<br>
<br>

>**Para ganar debes ser hábil y tener suerte**

**Átomos**:
- $G$: "ganar"
- $H$: "hábil"
- $S$: "tener suerte"

**Formalización**: $G \rightarrow (H \wedge S)$

**Notas**:
- Ser hábil y tener suerte son condiciones NECESARIAS para ganar. Por tanto, si ganas, es que tienes suerte y eres hábil.
- $\neg (H \wedge S) \rightarrow \neg G$: Sin ambas condiciones A LA PAR (paréntesis), es IMPOSIBLE ganar.

<br>
<br>

>**Para reanimarme debo comer**

**Átomos**:
- $R$: "reanimarme"
- $C$: "comer"

**Formalización**: $R \rightarrow C$

**Notas**:
- Comer es NECESARIO para reanimarse. Por tanto, si me reanimo, es que he comido.
- $\neg C \rightarrow \neg R$: Entonces, no comer, conduce a no reanimarse ineludiblemente.

<br>
<br>

>**Es necesario que llueva para tener buenas cosechas**

**Átomos**:
- $L$: "llueva"
- $B$: "buenas cosechas"

**Formalización**: $B \rightarrow L$

**Notas**: 
- Las buenas cosechas son SÍNTOMA de lluvia.
- $\neg L \rightarrow \neg B$: Sin lluvias, no puede haber buenas cosechas.

---

### Ejemplo con varias conectivas

>**Cuando no estoy seguro, o pregunto y lo averiguo, o descanso**

**Átomos**:
- $S$: "Estoy seguro"
- $P$: "pregunto"
- $A$: "lo averiguo"
- $D$: "descanso"

**Formalización**: $\neg S \rightarrow (P \wedge A) \vee (D)$

**Notas**:
- Las comas cuentan como un _entonces_ ($\rightarrow$) a nivel conectivo.
- Los paréntesis son importantes, ya que en la formalización hay asociatividad de izquierda a derecha; es decir, que pueden afectar al sentido de la formalización.

	Por ejemplo, no es lo mismo $\neg S \rightarrow (P \wedge A) \vee (D)$ que $\neg S \rightarrow P \wedge A \vee D$, ya que, en la primera expresión, la implicación $\neg S \rightarrow$ afecta a toda la subexpresión $(P \wedge A) \vee D$. En cambio, en la segunda expresión la implicación solo afecta a $P$, por lo que la conjunción y la disyunción se evalúan por separado, alterando así el significado de la proposición.

<br>
<br>

>**Ella piensa, y argumenta cuando comprende la movida**

**Átomos**:
- $P$: "piensa"
- $A$: "argumenta"
- $C$: "comprende la movida"

**Formalización**: $P \wedge (A \rightarrow C)$

<br>
<br>

>**Ella piensa y argumenta, cuando comprende la movida**

**Átomos**:
- $P$: "piensa"
- $A$: "argumenta"
- $C$: "comprende la movida"

**Formalización**: $C \wedge (P \rightarrow A)$

<br>
<br>

>**Cuando la escuela pública mejora, la sociedad se enriquece. Y cuando la escuela pública empeora, la sociedad no se enriquece.**

**Átomos**:
- $M$: "la escuela pública mejora"
- $S$: "la sociedad se enriquece"
- ~~$\neg M$: "la escuela pública empeora"~~
- $E$: "la escuela pública empeora"
- $\neg S$: "la sociedad no se enriquece"

**Formalización**: $(M \rightarrow S) \wedge (E \rightarrow \neg S)$

**Notas**: 
- Este ejemplo tiene como objetivo mostrar las consecuencias de las interpretaciones. Que la escuela pública empeore no es la negación de $M$, ya que no es necesariamente el opuesto de que la escuela pública mejore. En términos lógicos o sintácticos, puede ser que la escuela permanezca igual cuando no está mejorando, por lo que tenemos que atribuirle otro literal al átomo _la escuela pública empeora_.

<br>
<br>

>**Te constiparás o lo pasarás mal, si hace frío y no te abrigas antes de salir a la calle**

**Átomos**:
- $C$: "Te constiparás"
- $M$: "lo pasarás mal"
- $F$: "hace frío"
- $A$: "abrigas antes de salir a la calle"

**Formalización**: $(F \wedge \neg) \rightarrow (C \vee M)$

<br>
<br>

>**Puedes ir al cine o al concierto, pero no a los dos, y, si tienes tarjeta, puedes comprar las entradas en el cajero automático**

**Átomos**:
- $I$: "ir al cine"
- $C$: "(ir) al concierto"
- $T$: "tienes tarjeta"
- $E$: "comprar las entradas en el cajero automático"

**Formalización**: $(I \vee C) \wedge \neg (I \wedge C) \wedge (T \rightarrow E)$	
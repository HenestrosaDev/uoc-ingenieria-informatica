# RESUMEN Lógica de predicados: formalización

## 1.2. El lenguaje de la lógica de predicados

### 1.2.1. Predicados, variables y constantes

Los predicados son una extensión de los enunciados que cuentan con **propiedades** que permiten atribuir características o relaciones a uno o más **variables** dentro de un **dominio**. 

Se representan con la notación $P(x)$, donde $P$ es el predicado (propiedad) y $x$ es la variable que representa al objeto al que se le aplica dicha propiedad. Las variables pueden ser una o más.

El **dominio** se refiere al conjunto de todos los posibles valores que pueden ser tomados por las variables en un predicado.

Por ejemplo, si usamos el predicado $\text{EsRojo}(x)$ para describir colores de objetos, el dominio podría ser el conjunto de todos los objetos que puedan ser de color rojo, como manzanas, coches, flores, etc.

**Clasificación según el número de variables**

- **0 variables**: Enunciado.
- **1 variables**: Propiedad.
- **2 variables**: Relación.
- **n variables**: Relación n-aria.

>[!WARNING]
>Las relaciones son **POSICIONALES**:
>- $D(x,y)$: "$x$ devora a $y$ con frenesí"
>- $b$: "Bárbara"
>- $h$: "queso havarti"
>
>- $D(b,h)$: "Bárbara devora a queso havarti con frenesí"
>- $D(h,b)$: "Queso havarti devora a Bárbara con frenesí"

### 1.2.2. Cuantificadores

<table>
	<tr>
		<th>SÍMBOLO</th>
		<th>NOMBRE</th>
		<th>SIGNIFICADO</th>
		<th>CONECTIVA EQUIVALENTE*</th>
	</tr>
	<tr>
		<td>$\forall$</td>
		<td>Cuantificador universal</td>
		<td>"para todo" / "todo"</td>
		<td>$\wedge$</td>
	</tr>
	<tr>
		<td>$\exists$</td>
		<td>Cuantificador existencial</td>
		<td>"existe" / "hay algún"</td>
		<td>$\vee$</td>
	</tr>
</table>

>\* Se aplica cuando el dominio de las variables es **finito**.

<br>

**Ejemplo**

Si $P(x)$ quiere decir _"$x$ es un estudiante"_, entonces:

- $\forall x P(x)$ significa "todos son estudiantes" ($\forall x P(x) == P(1) \wedge P(2) \wedge P(3) \cdots$).
- $\exists x P(x)$ significa "existen estudiantes" ($\exists x P(x) == P(1) \vee P(2) \vee P(3) \cdots$).


### 1.2.3. Fórmulas

El lenguaje de la lógica de predicados se denomina **lenguaje de fórmulas**, cuyo alfabeto se compone de:

- **Conectivas**: $\wedge, \vee, \rightarrow, \neg$
- **Cuantificadores**: $\forall, \exists$
- **Símbolos de predicado**: $P, Q, R \cdots$
- **Términos de predicado**:
	- **Constantes**: $a, b, c$ (representan un solo objeto específico dentro del dominio del predicado).
	- **Variables**: $x, y, z \cdots$ (placeholders para cualquier elemento del dominio).

<br>

**Ejemplo de asignación**

- $L(x)$: "$x$ es un lujo"
- $a$: "Descansar"
- $L(a)$: "Descansar es un lujo"

$L(x)$ es un **predicado**, mientras que $L(a)$ es un **enunciado**, ya que el dominio de $L(a)$ se reduce a una constante.

### 1.2.4. Ámbito de los cuantificadores 

El ámbito son los paréntesis que cierran el cuantificador.

Dados los siguientes predicados:

- $P(x)$: "$x$ es una persona"
- $I(x)$: "$x$ es inteligente"
- $A(x)$: "$x$ es ávido"
- $C(x)$: "$x$ es un contenido"
- $U(x)$: "$x$ es útil"
- $S(x,y)$: "$x$ se suscribe a $y$"

$$\forall x \set{ P(x) \wedge I(x) \wedge A(x) \to \exists y [C(y) \wedge U(y) \wedge S(x,y)] }$$

- **Ámbito del cuantificador universal** ($\forall$): $\set{ P(x) \wedge I(x) \wedge A(x) \to \exists y (C(y) \wedge U(y) \wedge S(x,y)) }$
- **Ámbito del cuantificador existencial** ($\exists$): $[C(y) \wedge U(y) \wedge S(x,y)]$

<br>

**Variables ligadas y libres**

Una variable **ligada** es aquella que está sometida a la acción de un cuantificador.

Una variable **libre** es aquella que **no** está sometida a la acción de un cuantificador.

![](https://github-production-user-asset-6210df.s3.amazonaws.com/60482743/433738940-519c60c0-a466-495a-a229-a882d01aae4f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250415%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250415T082430Z&X-Amz-Expires=300&X-Amz-Signature=7779482ada17c8be6cd5b9cc3c6e165c50fca548455d6d1637ee64abf9d3657d&X-Amz-SignedHeaders=host)

Dos variables son **idénticas** si:

- Son el **mismo literal**.
- Están sometidas a los **mismos cuantificadores**.

Si no se cumplen ambas condiciones, podemos decir que las variables son **distintas** y que se pueden representar con literales diferentes:

![](https://github-production-user-asset-6210df.s3.amazonaws.com/60482743/433743975-c08d8ee8-53ce-4fdf-b037-6a55486eb55e.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250415%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250415T083542Z&X-Amz-Expires=300&X-Amz-Signature=d186104197a15807bfe29ec1a40d7acd62ad4085ad4051da00b21fdfbb64631e&X-Amz-SignedHeaders=host)

### 1.3. La formalización

### 1.3.1. Cómo formalizar

Pasos a seguir:

1. **Identificar los componentes del enunciado**
	- **Sujetos y objetos**: Distinguir entre individuos específicos y variables.
	- **Predicados**: Identificar propiedades o relaciones (ej. "es alto" → $A(x)$, "ama a" → $A(x,y)$).

2. **Determinar los cuantificadores**
	- **Universal** ($\forall$): "Todos", "cualquier", "cada", "ningún" (en contextos negativos).
  	- **Ejemplo**: "Todos los humanos son mortales" → $\forall x (H(x) \to M(x))$
	- **Existencial** ($\exists$): "Algún", "existe", "hay al menos uno".
  	- **Ejemplo**: "Algún gato es negro" → $\exists x (G(x) \wedge N(x))$.

3. **Usar conectivas**	
	Conjunción ($\wedge$), disyunción ($\vee$), implicación ($\to$) y negación ($\neg$).

4. **Encontrar una frase equivalente para aclarar la estructura lógica del enunciado dado** a partir de la combinación de predicados, cuantificadores y conectivas según el significado de la frase a formalizar.
	- Ejemplo:
		- "Ningún pájaro es mamífero" → $\forall x \set{ P(x) \to \neg M(x) }$ o $\neg \exists x \set{ P(x) \wedge M(x) }$

### 1.3.2. Formalización de frases con significado existencial o universal 

Patrón:
- $\forall$: selección → propiedades de la selección
	- **Ejemplo**: "Los buenos amigos comparten tacos ricos"
  	- Esto se puede entender como "Ser buenos amigos es SUFICIENTE para compartir tacos ricos".
  	- $\forall x [B(x) \to C(x)]$
- $\exists$: selección $\wedge$ propiedades de la selección
	- **Ejemplo**: "HAY buenos amigos que ADEMÁS comparten tacos ricos"
		- Esto se puede entender como "Ser buenos amigos es SUFICIENTE para compartir tacos ricos".
		- $\exists x [B(x) \wedge C(x)]$

Ejemplo combinando ambas conectivas:

>**Las personas inteligentes y ávidas se suscriben a contenidos útiles.**

**Átomos**:
- $P(x)$: "$x$ es una persona"
- $I(x)$: "$x$ es inteligente"
- $A(x)$: "$x$ es ávido"
- $C(x)$: "$x$ es un contenido"
- $U(x)$: "$x$ es útil"
- $S(x,y)$: "$x$ se suscribe a $y$"

**Formalización**: $\forall x \set{ P(x) \wedge I(x) \wedge A(x) \to \exists y [C(y) \wedge U(y) \wedge S(x,y)] }$

<br>
<br>

### 1.3.3. Formalización de frases complejas

>[!NOTE]
>Los siguientes ejemplos están sacados de [este vídeo](https://youtu.be/WGYIJ1uckVo) del canal [Aprende Sin Espinas](https://www.youtube.com/@AprendeSinEspinas)

Todas las frases que se exponen a continuación parten de los siguientes átomos:

- $C(x)$: "$x$ es un caballero"
- $V(x)$: "$x$ es valiente"
- $P(x)$: "$x$ es una princesa"
- $M(x,y)$: "$x$ mata a $y$"
- $D(x)$: "$x$ es un dragón"
- $A(x,y)$: "$x$ ama a $y$"
- $B(x)$: "$x$ bonito/a"

<br>

1. **Una princesa siempre es valiente**.

	**Interpretación**: Ser princesa es **SUFICIENTE** para ser valiente.

	$$\forall x [P(x) \to V(x)] \equiv \neg \exists x [P(x) \wedge \neg V(x)]$$ 

2. **Hay que ser princesa para ser valiente** .

	**Intepretación**: Ser princesa es **NECESARIO** para ser valiente.
	
	$$\forall x [V(x) \to P(x)]$$

3. **No hay ningún caballero que no sea valiente**.
   
	 **Interpretación**: Ser caballero es **SUFICIENTE** para ser valiente.

	 $$\neg \exists x [C(x) \wedge \neg V(x)] \equiv \forall x [C(x) \implies V(x)]$$

4. **Hace falta que no hay dragones para que haya princesas**.

	**Interpretación**: Que **NO** haya dragones es **NECESARIO** para que haya princesas.

	$$\exists x [P(x)] \to \neg \exists y [D(y)]$$

5. **Una princesa bonita también es valiente**.

	**Interpretación**: (**TODAS** ($\forall$)) Ser princesa bonita es **SUFICIENTE** ($\to$) para ser valiente.

	$$\forall x [P(x) \wedge B(x) \to V(x)]$$

6. **Para ser caballero hay que haber matado a algún dragón**.

	**Interpretación**: Matar a algún dragón es **NECESARIO** ($\to$) para ser caballero.

	$$\forall x \set{ C(x) \to \exists y [D(y) \wedge M(x,y)] }$$

7. **Cualquier caballero ha matado a un dragón**.

	**Interpretación**: Matar a algún dragón es **NECESARIO** ($\to$) para ser caballero.

	$$\forall x \set{ C(x) \implies \exists y [D(y) \wedge M(x,y)] }$$

	Es lo mismo que la frase 6.

8. **Hay princesas que matan a todos los caballeros**.

	**Interpretación**: **EXISTEN** ($\exists$) princesas que, además ($\wedge$), matan a **TODOS** ($\forall$) los caballeros. Ser caballero es **SUFICIENTE** ($\to$) para que una princesa te mate.

	$$\exists x \set{ P(x) \wedge \forall y [C(y) \wedge M(x,y)] }$$

9. **Un caballero ha matado a todos los dragones**

	**Interpretación**: **EXISTE** ($\exists$) un caballero que, además ($\wedge$), ha matado a **TODOS** ($\forall$) los dragones. Ser dragón es **SUFICIENTE** ($\to$) para que el caballero te mate.

	$$\exists x \set{ C(x) \wedge \forall y [D(y) \to M(x,y)] }$$

10. **Hay un caballero que solo mata a dragones**.

	**Interpretación**: **EXISTE** ($\exists$) un caballero que, además ($\wedge$), hace que **NO EXISTA** ($\neg \exists$) un elemento **NO** ($\neg$) dragón que haya sido matado por el caballero.

	$$\exists x \set{ C(x) \wedge \neg \exists y [\neg D(y) \wedge C(x,y)] } $$

11. **Hay caballeros que no han matado a ningún dragón**.

	**Interpretación**: **EXISTEN** ($\exists$) caballeros que, además ($\wedge$), **NO** ($\neg$) han matado a **NINGÚN** ($\neg \exists$) dragón.

	$$\exists x \set{ C(x) \wedge \neg \exists y [D(y) \wedge M(x,y)] }$$

12. **Hay un caballero que no ha matado a ningún dragón**.

	**Interpretación**: **EXISTE** ($\exist$) un caballero que, además ($\wedge$), **NO** ($\neg$) ha matado a ningún dragón.

	$$\exists x \set{ C(x) \wedge \neg \exists y [D(y) \wedge M(x,y)] }$$

	Es lo mismo que la 11.

13. **Existe una princesa que es amada por todos los caballeros**.

	**Interpretación**: **EXISTE** ($\exists$) una princesa que, además ($\wedge$), es amada por **TODOS** ($\forall$) los caballeros. Ser caballero es **SUFICIENTE** ($\to$) para amar a una princesa.

	$$\exists x \set{ P(x) \wedge \forall y [C(y) \to A(y,x)] }$$

14. **Para matar a un caballero hay que ser un dragón valiente**.

	**Interpretación**: Ser un dragón valiente es **NECESARIO** ($\to$) para matar a un caballero.

	$$\forall x \set{ D(x) \wedge V(x) \to \exists y [C(y) \wedge M(x,y)] }$$

	Si nos fijamos, la anterior formalización está en término de suficiencia. Para expresarla en términos de necesidad, tal y como se plantea en la frase, tenemos que aplicar el contrarrecíproco para expresar relaciones de necesidad a partir de relaciones de suficiencia.

	Si $A$ es NECESARIO para $B$, la ausencia de $A$ es SUFICIENTE para que NO exista $B$.

	$$B \to A \dashv \vdash \neg A \to \neg B$$

	**NO SER** ($\neg \exists$) un dragón valiente es **SUFICIENTE** ($\to$) para que **NO EXISTA** ($\neg \exists$) un caballero que sea matado por un dragón.

	$$\forall x \set{ \neg[D(x) \wedge V(x)] \to \neg \exists y [C(y) \wedge M(x,y)] }$$

15. **Hay un caballero que mata a un dragón y que es valiente**.

	**Interpretación**: **EXISTE** ($\exists$) un caballero valiente que, además ($\wedge$), mata a un dragón.

	$$\exists x \set{ C(x) \wedge V(x) \wedge \exists y [D(y) \wedge M(x,y)] }$$

16. **Hay caballeros que solo matan a dragones valientes**.

	**Interpretación**: **EXISTEN** ($\exists$) caballeros que, además ($\wedge$), hacen que **NO EXISTA** ($\neg \exists$) un elemento de tipo **NO** ($\neg$) dragón valiente que haya sido matado por los caballeros.

	$$\exists x \set{ C(x) \wedge \neg \exists y [\neg (D(y) \wedge V(y)) \wedge M(x,y)] }$$

17. **Hay caballeros que, de dragones, solo matan valientes**.

	**Interpretación**: **EXISTEN** ($\exists$) caballeros que, además ($\wedge$), solo matan a dragones valientes. Ser dragón **Y** ($\wedge$) ser matado por un caballero es **SUFICIENTE** ($\to$) para ser un dragón valiente.

	$$\exists x \set{ C(x) \wedge \forall y [D(y) \wedge M(x,y) \to V(y)] }$$

18. **Un caballero amado por una princesa es valiente**.

	**Interpretación**: (Para **TODO** ($\forall$) caballero) Que una princesa ame a un caballero es **SUFICIENTE** ($\to$) para que sea valiente.

	$$\forall x \set{ C(x) \wedge \exists y [P(y) \wedge A(y,x)] \to V(x) }$$

19. **Los caballeros son todos valientes y las princesas son todas bonitas**.

	**Interpretación**: (**TODOS** ($\forall$)) Ser caballero es **SUFICIENTE** ($\to$) para ser valiente **Y** ($\wedge$) (**TODAS** ($\forall$)) ser princesa es **SUFICIENTE** ($\to$) para ser bonita.

	$$\forall x [C(x) \wedge V(x)] \wedge \forall y [P(y) \wedge B(y)]$$

20. **Un caballero que mata a un dragón es valiente**.

	**Interpretación**: (**TODOS** ($\forall$)) Que un caballero mate a un dragón es **SUFICIENTE** ($\to$) para que sea valiente.

	$$\forall x \set{ C(x) \wedge \exists y [D(y) \wedge M(x,y)] \to V(x) }$$

21. **Hay un caballero que si matara a un dragón sería valiente**.

	**Interpretación**: **EXISTE** ($\exists$) un caballero que si matara a un dragón sería **SUFICIENTE** para ser valiente.

	$$\exists x \set{ C(x) \wedge \exists y [D(y) \wedge M(x,y)] \to V(x) }$$

22. **Hace falta que todos los dragones sean valientes para que alguna princesa sea amada por todos los caballeros**.

	**Interpretación**: Que **TODOS** ($\forall$) los dragones sean valientes es **NECESARIO** ($\to$) para que **ALGUNA** ($\exists$) princesa sea amada por **TODOS** ($\forall$) los caballeros.

	$$\exists x \set{ P(x) \wedge \forall y [C(y) \to A(y,x)] } \to \forall z [D(z) \wedge V(z)]$$

	También se puede expresar en términos de suficiencia:

	$$\exists x [D(x) \wedge \neg V(x)] \to \neg \exists y \set{ P(y) \wedge \forall z [C(z) \to A(z,y)] }$$

23. **Si hubiera un caballero que  matara todos los dragones, no habría princesas valientes**.

	**Interpretación**: La **EXISTENCIA** ($\exists$) de un caballero que, además ($\wedge$), mate a **TODOS** ($\forall$) los dragones es **SUFICIENTE** para la **NO EXISTENCIA** ($\neg \exists$) de princesas valientes.

	$$\exists x \set{ C(x) \wedge \forall y [D(y) \wedge M(x,y)] } \to \neg \exists z [P(z) \wedge V(z)]$$

24. **Si todo fueran princesas valientes, ningún caballero mataría a ningún dragón**.

	$$\forall x [P(x) \wedge V(x)] \to \neg \exists y \set{C(y) \wedge \exists z [D(z) \wedge M(y,z)] }$$

25. **Si se es caballero, es necesario matar a un dragón para ser amado por alguna princesa**.

	**Interpretación**: (Para **TODO** ($\forall$) caballero) Que un caballero mate a un dragón es **NECESARIO** para que **EXISTA** alguna princesa que ame a un caballero.

	$$\forall x \set{ C(x) \to \set{ \exists y [P(y) \wedge A(y,x)] \to \exists z [D(z) \wedge M(x,z)] }}$$

26. **Hace falta que todos los caballeros hayan matado a algún dragón para que ninguna princesa no sea bonita**.

	**Interpretación**: Que **TODOS** ($\forall$) los caballeros hayan matado a **ALGÚN** ($\exists$) dragón es **NECESARIO** para que **NO EXISTA** ($\neg \exists$) ninguna princesa que no sea bonitas.

	$$\neg \exists x [P(x) \wedge \neg B(x)] \to \forall x \set{ C(x) \to \exists z (D(z) \wedge M(y,z)) }$$

27. **Las princesas, solo si son bonitas, son amadas por un caballero valiente**.

	**Interpretación**: (Para **TODAS** ($\forall$) las princesas) Que una princesa sea amada por un caballero valiente es **SUFICIENTE** para que sean bonitas.

	$$\forall x \set{ P(x) \wedge \exists y [C(y) \wedge V(y) \wedge A(y,x)] \to B(x) }$$

28. **Hay un caballero que ha matado a todos los dragones y que no ama a ninguna princesa**.

	**Interpretación**: **EXISTE** ($\exists$) un caballero que ha matado a **TODOS** ($\forall$) los dragones **Y** ($\wedge$) que ama a **NINGUNA** ($\neg \exists$) princesa.

	$$\exists x \set{ C(x) \wedge \forall y [D(y) \wedge M(x,y)] \wedge \neg \exists z [P(z) \wedge A(x,z)] }$$

29. **Un caballero que no sea amado por ninguna princesa no habrá matado ningún dragón valiente**.

	**Interpretación**: (Para **TODO** ($\forall$) caballero) Que un caballero **NO** ($\neg$) sea amado por **UNA** ($\exists$) princesa es **SUFICIENTE** ($\to$) para que **NO** mate a **UN** ($\exists$) dragón valiente$$

	$$\forall x \set{ C(x) \wedge \neg \exists y [P(y) \wedge A(y,x)] \to \neg \exists z [D(z) \wedge V(z) \wedge M(x,z)] }$$

30. **Los caballeros, para ser queridos por una princesa, deben haber matado a un dragón**.

	**Interpretación**: (Para **TODOS** ($\forall$) los caballeros) Que un caballero mate a **ALGÚN** ($\exists$) dragón es **NECESARIO** para que sea amado por una princesa.

	$$\forall x \set{ C(x) \wedge \exists y [P(y) \wedge A(y,x)] \to \exists z [D(z) \wedge M(x,z)] }$$

31. **Si un caballero es amado por una princesa que también ama a un dragón, no podrá matar a ningún dragón**.

	**Interpretación**: Que **EXISTA** ($\exists$) un caballero amado por una princesa **QUE TAMBIÉN** ($\wedge$) ama a un dragón es **SUFICIENTE** para que **NO** ($\neg$) pueda matarlo (al dragón).

	$$\exists x \set{ C(x) \wedge \exists y \set{P(y) \wedge A(y,x) \wedge \exists z [D(z) \wedge A(y,z)]} \to \neg \exists w [D(w) \wedge M(x,w)] }$$

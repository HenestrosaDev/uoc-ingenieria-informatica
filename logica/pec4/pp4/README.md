# Prueba práctica 4

## Índice

- [Ejercicio 1 - Test](#ejercicio-1---test)
	- [Pregunta 1](#pregunta-1)
	- [Pregunta 2](#pregunta-2)
	- [Pregunta 3](#pregunta-3)
	- [Pregunta 3](#pregunta-4)
	- [Pregunta 5](#pregunta-5)
	- [Pregunta 6](#pregunta-6)
	- [Pregunta 7](#pregunta-7)
	- [Pregunta 8](#pregunta-8)
	- [Pregunta 9](#pregunta-9)
	- [Pregunta 10](#pregunta-10)
	- [Pregunta 11](#pregunta-11)
	- [Pregunta 12](#pregunta-12)
	- [Pregunta 13](#pregunta-13)
- [Calificación final](#calificación-final)

<br>

>[!NOTE]
>- La suma total de la calificación de todos los ejercicios es 10,00.
>- Se pueden realizar tantos intentos como se deseen antes de la fecha límite. 
>- Cuando el resultado sea del 40% o más, se podrá acceder a la PEC4.

## Ejercicio 1 - Test

<details>
	<summary>Captura del ejercicio resuelto</summary>

![](capturas/1.png)
</details>

### Pregunta 1

>¿Cuáles de las siguientes afirmaciones son ciertas respecto a la fórmula $\forall x [P(x) \to R(a,x) \wedge R(x,b)]$?
>
>A1: es un enunciado  
>A2: contiene variables libres  
>A3: a y b se podrían cuantificar y entonces sí que sería un enunciado

- [ ] Solo A1
- [ ] Solo A2
- [ ] A2 y A3
- [ ] Ninguna de ellas es cierta

<details>
	<summary>Solución</summary>

- [x] Solo A1
</details>

### Pregunta 2

>¿Cuáles de las siguientes afirmaciones son correctas respecto a la fórmula $\forall x \set{ \exists z R(x,z) \to \forall y [T(x,y) \to \exists z Q(z,y) \wedge Q(z,x)] }$?
>
>A1: la variable $z$ de $R(x,z)$ es la misma que la variable $z$ de $Q(z,y)$  
>A2: la variable de $z$ de $Q(z,x)$ es la misma que la variable de $z$ de $Q(z,y)$  
>A3: la variable $x$ de $R(x,z)$ es la misma que la variable $x$ de $T(x,y)$  
>A4: la fórmula contiene variables libres

- [ ] A2 y A3 son correctas. Las otras no.
- [ ] A1, A2 y A3 son correctas. A4 no lo es.
- [ ] A3 y A4 son correctas. Las otras no.
- [ ] Ninguna de las afirmaciones es correcta.

<details>
	<summary>Solución</summary>

- [x] A3 y A4 son correctas. Las otras no.
</details>

### Pregunta 3

>Dados los siguientes átomos con un dominio que es un conjunto no vacío cualquiera:  
>- $L(x)$: "$x$ es un líder"
>- $C(x)$: "$x$ es carismático"
>- $P(x)$: "$x$ es un partido"
>- $T(x,y)$: "$x$ tiene a $y$" ($y$ pertenece a $x$, $y$ es de $x$)  
>
>¿Cuál es la formalización de la frase **"No todos los partidos tienen un líder carismático"**?

- [ ] $\neg \forall x \set{ P(x) \to \exists y [L(y) \wedge C(y) \wedge T(x,y)] }$
- [ ] $\forall x \set{ P(x) \to \neg \exists y [L(y) \wedge C(y) \wedge T(x,y)] }$
- [ ] $\forall x \set{ P(x) \to \exists y [L(y) \wedge C(y) \wedge \neg T(x,y)] }$
- [ ] Ninguna de las anteriores

<details>
	<summary>Solución</summary>

- [x] $\neg \forall x \set{ P(x) \to \exists y [L(y) \wedge C(y) \wedge T(x,y)] }$
</details>

### Pregunta 4

>Dados los siguientes átomos con un dominio que es un conjunto no vacío cualquiera:  
>- $L(x)$: "$x$ es un líder"
>- $C(x)$: "$x$ es carismático"
>- $P(x)$: "$x$ es un partido"
>- $T(x,y)$: "$x$ tiene a $y$" ($y$ pertenece a $x$, $y$ es de $x$)  
>
>¿Cuál es la formalización de la frase **"Todos los partidos tienen un líder carismático"**?

- [ ] $\forall x \set{ P(x) \wedge \exists y [L(y) \wedge C(y) \wedge T(x,y)] }$
- [ ] $\forall x \set{ P(x) \wedge \exists y [L(y) \wedge C(y) \to T(x,y)] }$
- [ ] $\forall x \set{ P(x) \to \exists y [L(y) \wedge C(y) \to T(x,y)] }$
- [ ] Ninguna de las anteriores

<details>
	<summary>Solución</summary>

- [x] Ninguna de las anteriores
</details>

### Pregunta 5

>Dados los siguientes átomos con un dominio que es un conjunto formado por personas:  
>- $S(x)$: "$x$ es sociable"
>- $R(x)$: "$x$ es raro"
>
>¿Cuál es la formalización de la frase **"Ninguna persona rara es sociable"**.

- [ ] $\exists x [R(x) \wedge \neg S(x)]$
- [ ] $\neg \exists x [R(x) \wedge \neg S(x)]$
- [ ] $\neg \exists x [R(x) \wedge S(x)]$
- [ ] Ninguna de las anteriores

<details>
	<summary>Solución</summary>

- [x] $\neg \exists x [R(x) \wedge S(x)]$
</details>

### Pregunta 6

>Dados los siguientes átomos con un dominio que es un conjunto no vacío cualquiera:  
>- $L(x)$: "$x$ es un líder"
>- $C(x)$: "$x$ es carismático"
>- $P(x)$: "$x$ es un partido"
>- $T(x,y)$: "$x$ tiene a $y$" ($y$ pertenece a $x$, $y$ es de $x$)  
>
>¿Cuál es la formalización de la frase **"Hay partidos que no tienen ningún líder carismático"**?

- [ ] $\exists x \set{ P(x) \wedge \neg \exists y [L(y) \wedge C(y) \wedge \neg T(x,y)] }$
- [ ] $\exists x \set{ P(x) \wedge \exists y [L(y) \wedge C(y) \wedge \neg T(x,y)] }$
- [ ] $\exists x \set{ P(x) \wedge \exists y [L(y) \wedge C(y) \wedge T(x,y)] }$
- [ ] $\exists x \set{ P(x) \to \neg \exists y [L(y) \wedge C(y) \to T(x,y)] }$

<details>
	<summary>Solución</summary>

- [x] $\exists x \set{ P(x) \wedge \exists y [L(y) \wedge C(y) \wedge T(x,y)] }$
</details>

### Pregunta 7

>Dados los siguientes átomos con un dominio que es un conjunto formado por personas:  
>- $S(x)$: "$x$ es sociable"
>- $R(x)$: "$x$ es raro"
>- $T(x)$: "$x$ se trata con $y$"
>
>La fórmula $\forall x \set{ S(x) \to \exists y [R(y) \wedge T(x,y)] }$ es una formalización de:

- [ ] Hay personas raras que se tratan con todas las personas sociables
- [ ] Las personas sociables se tratan con personas raras
- [ ] Hay que ser sociable por tratarse con personas raras
- [ ] Si una persona trata a alguien que es raro, entonces esa persona es sociable

<details>
	<summary>Solución</summary>

- [x] Las personas sociables se tratan con personas raras
</details>

### Pregunta 8

>Dados los siguientes átomos con un dominio que es un conjunto formado por personas:  
>- $S(x)$: "$x$ es sociable"
>- $R(x)$: "$x$ es raro"
>
>La fórmula $\forall x [R(x) \wedge S(x)]$ es una formalización de:

- [ ] Todo el mundo es raro y sociable
- [ ] Las personas raras son sociables
- [ ] Las personas sociables son raras
- [ ] Ninguna de las anteriores

<details>
	<summary>Solución</summary>

- [ ] Ninguna de las anteriores
</details>

### Pregunta 9

>Dados los siguientes átomos con un dominio que es un conjunto formado por personas:  
>- $R(x)$: "$x$ es raro"
>- $T(x,y)$: "$x$ se trata con $y$"
>
>La fórmula $\forall x [R(x) \to \exists y T(x,y)]$ es una formalización de:

- [ ] Las personas raras no tratan con nadie
- [ ] Las personas que no trata n con nadie son raras
- [ ] Hay que ser una persona rara para no tratarse con nadie
- [ ] Ninguna de las anteriores

<details>
	<summary>Solución</summary>

- [x] Las personas raras no tratan con nadie
</details>

### Pregunta 10

>Dados los siguientes átomos con un dominio que es un formado por los habitantes del Sistema Solar:
>- $M(x)$: "$x$ es un marciano"
>- $V(x)$: "$x$ es verde"
>- $H(x)$: "$x$ es humano"
>- $I(x)$: "$x$ es inteligente"
>
>¿Cuál es la formalización de la frase **"Si todos los marcianos son verdes, algunos humanos son inteligentes"**?

- [ ] $\forall x \set{ M(x) \wedge V(x) \to \exists y [H(y) \wedge I(y)] }$
- [ ] $\forall x [M(x) \to V(x)] \to \exists x [H(x) \wedge I(x)]$
- [ ] $\forall x [M(x) \wedge V(x)] \to \exists y [H(y) \wedge I(y)]$
- [ ] Ninguna de las anteriores

<details>
	<summary>Solución</summary>

- [ ] $\forall x [M(x) \to V(x)] \to \exists x [H(x) \wedge I(x)]$
</details>

### Pregunta 11

>Dados los siguientes átomos con un dominio que es un conjunto no vacío:
>- $G(x)$: "$x$ es un gurú"
>- $S(x)$: "$x$ sigue a $y$"
>- $C(x)$: "$x$ es carismático"
>
>¿Cuál es la formalización de la frase **"Los gurús que tienen seguidores son carismáticos"**?

- [ ] $\forall x \set{ G(x) \wedge \exists y S(x,y) \wedge C(x) }$
- [ ] $\forall x \set{ G(x) \to [\exists y S(y,x) \to C(x)] }$
- [ ] $\forall x \set{ G(x) \wedge [\exists y S(y,x) \to C(x)] }$
- [ ] $\forall x \set{ G(x) \wedge C(x) \to \exists y S(y,x) }$

<details>
	<summary>Solución</summary>

- [x] $\forall x \set{ G(x) \to [\exists y S(y,x) \to C(x)] }$
</details>

### Pregunta 12

>Dados los siguientes átomos con un dominio que es un conjunto no vacío:
>- $G(x)$: "$x$ es un gurú"
>- $S(x)$: "$x$ sigue a $y$"
>- $C(x)$: "$x$ es carismático"
>
>¿Cuál es la formalización de la frase **"Para ser un gurú carismático hace falta tener seguidores"**?

- [ ] $\forall x \set{ G(x) \wedge \exists y S(x,y) \to C(x) }$
- [ ] $\forall x \set{ G(x) \wedge \exists y S(x,y) \wedge C(x) }$
- [ ] $\forall x \set{ G(x) \to C(x) \wedge \exists y S(x,y) }$
- [ ] $\forall x \set{ G(x) \wedge C(x) \to \exists y S(x,y) }$

<details>
	<summary>Solución</summary>

- [x] $\forall x \set{ G(x) \wedge C(x) \to \exists y S(x,y) }$
</details>

### Pregunta 13

>Dados los siguientes átomos con un dominio que contiene personas y cosas raras:
>- $L(x)$: "$x$ es un Lamborghini"
>- $P(x,y)$: "$x$ es propiedad de $y$"
>- $T(x)$: "$x$ tunea $y$"
>- $M(x)$: "$x$ es un mecánico"
>- $a$: "Fernando M."
>- $b$: "el Jeque Haseen"
>
>¿Cuál es la formalización de la frase **"Fernando M. es un mecánico que ha tuneado todos los Lamborghinis del Jeque Haseen"**?

- [ ] $\exists a M(a) \wedge \forall x \set{  L(x) \wedge \exists b P(x,b) \to T(a,x) }$
- [ ] $M(a) \wedge \forall x \set{ L(x) \wedge P(x,b) \to T(a,x) }$
- [ ] $\exists a \exists b M(a) \wedge \forall x \set{ L(x) \wedge P(x,b) \to T(a,x) }$
- [ ] Ninguna de las anteriores es correcta

<details>
	<summary>Solución</summary>

- [ ] $M(a) \wedge \forall x \set{ L(x) \wedge P(x,b) \to T(a,x) }$
</details>

<br>

**Calificación**: 10,00 / 10,00

---

## Calificación final

10,00 / 10,00
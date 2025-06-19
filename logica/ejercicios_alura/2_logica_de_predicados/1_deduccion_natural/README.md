# Ejercicios de Alura - Lógica de predicados: deducción natural

El desglose de los ejercicios se realiza por dificultad:

- [🟩 Fácil](#-facil)
- [🟧 Media](#-media)

## 🟩 Fácil

### 1

>1. $\forall x (B(x) \to C(x))$
>2. $\exists x (A(x) \wedge B(x))$
>3. $\therefore \exists x (A(x) \wedge C(x))$

<details>
	<summary>Solución</summary>

![](1_facil/01.png)
</details>

### 2

>1. $\forall x P(x)$
>2. $\exists x Q(x)$
>3. $\therefore \exists x (P(x) \wedge Q(x))$

<details>
	<summary>Solución</summary>

![](1_facil/02.png)
</details>

### 3

>1. $\forall x (P(x) \wedge \neg Q(x))$
>2. $\therefore \exists x (P(x) \vee \neg Q(x))$

<details>
	<summary>Solución</summary>

![](1_facil/03.png)
</details

### 4

>1. $\exists x (P(x) \vee Q(x))$
>2. $\therefore \exists x P(x) \vee \exists x Q(x)$

<details>
	<summary>Solución</summary>

![](1_facil/04.png)
</details>

### 5

>1. $\forall x (B(x) \to C(x))$
>2. $\exists x (A(x) \wedge B(x))$
>3. $\therefore \exists x (A(x) \wedge C(x))$

<details>
	<summary>Solución</summary>

![](1_facil/05.png)
</details>

## 🟧 Media

### 1

>1. $\forall x \forall y (M(x) \wedge G(x,y) \to P(x,y))$
>2. $\neg P(a,b)$
>3. $G(a,b)$
>4. $\therefore \neg M(a)$

<details>
	<summary>Solución</summary>

![](2_medio/01.png)
</details>

### 2

>1. $\forall x (\forall y A(y,x) \to \exists z B(z,x))$
>2. $\exists x (C(x) \wedge O(x) \wedge \neg P(x))$
>3. $\forall x (O(x) \to S(x))$
>4. $\therefore \exists x (C(x) \wedge S(x) \wedge \neg N (x))$

<details>
	<summary>Solución</summary>

![](2_medio/02.png)
</details>

### 3

>1. $\forall x P(x) \wedge \forall x Q(x)$
>2. $\therefore \forall x (P(x) \wedge Q(x))$

<details>
	<summary>Solución</summary>

![](2_medio/03.png)
</details>

### 4

>1. $\exists x (P(x) \vee Q(x))$
>2. $\therefore \exists x P(x) \vee \exists x Q(x)$

<details>
	<summary>Solución</summary>

![](2_medio/04.png)
</details>

### 5

>1. $\forall x P(x)$
>2. $\therefore \forall y P(y)$

<details>
	<summary>Solución</summary>

![](2_medio/05.png)
</details>

### 6

>1. $\exists x P(x)$
>2. $\therefore \exists y P(y)$

<details>
	<summary>Solución</summary>

![](2_medio/06.png)
</details>

### 7

>1. $\forall x (P(x) \to Q(x))$
>4. $\forall x P(x)$
>5. $\therefore \forall y Q(y)$

<details>
	<summary>Solución</summary>

![](2_medio/07.png)
</details>

### 8

>1. $\forall x (P(x) \wedge Q(x))$
>2. $P(a)$
>3. $\therefore \exists Q(x)$

<details>
	<summary>Solución</summary>

![](2_medio/08.png)
</details>

### 9

>1. $\forall x \forall y (\neg (R(x) \to \neg T(x,y)))$
>2. $\forall x \exists y (P(x) \to Q(x,y))$
>3. $\exists x \forall y (R(x) \wedge Q(x,y) \to \neg T(x,y))$
>4. $\therefore \exists x \neg P(x)$

<details>
	<summary>solución</summary>

![](2_medio/09.png)
</details>

### 10

>1. $\forall x (P(x) \to \neg Q(x))$
>2. $\forall x (Q(x) \to \exists y (N(y) \wedge P(x)))$
>3. $\therefore \forall x \neg Q(x)$

<details>
	<summary>solución</summary>

![](2_medio/10.png)
</details>

### 11

>1. $\forall x (P(x) \wedge Q(x))$
>2. $\therefore \forall x P(x) \wedge \forall x Q(x)$

<details>
	<summary>solución</summary>

![](2_medio/11.png)
</details>
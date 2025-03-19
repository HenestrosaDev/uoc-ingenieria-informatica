# Ejercicios de Alura - Lógica de enunciados: formalización

El desglose de los ejercicios se realiza por dificultad:

- [🟩 Fácil](#-fácil)
- [🟧 Media](#-media)
- [🟥 Difícil](#-difícil)

## 🟩 Fácil

### 1

>**Siempre que piensas en escribir, o bien abandonas la idea o bien te sale algo más importante**

<details>
	<summary>Frase equivalente para aclarar la estructura lógica del enunciado dado</summary>

Que pienses en escribir es **SUFICIENTE** para que **O** abandones la idea **O** te salga algo más importante
</details>

<details>
	<summary>Captura de pantalla</summary>

![](1_facil/1.png)
</details>

**Átomos**:
- $P$: "piensas en escribir"
- $A$: "abandonas la idea (de escribir)"
- $S$: "te sale algo más importante (que escribir)"

<details>
	<summary><strong>Formalización</strong></summary>

$P \rightarrow (A \vee S)$  
$P \rightarrow A \vee S$
</details>

<br>

### 2

>**Cuando ni llueve ni soplas el viento, me gusta pasear por la ciudad**

<details>
	<summary>Frase equivalente para aclarar la estructura lógica del enunciado dado</summary>

Que **NO** llueva **NI** sople el viento es **SUFICIENTE** para que me guste pasear por la ciudad 
</details>

<details>
	<summary>Captura de pantalla</summary>

![](1_facil/2.png)
</details>

**Átomos**:
- $P$: "llueve"
- $B$: "sopla el viento"
- $A$: "me gusta pasear por la ciudad"

<details>
	<summary><strong>Formalización</strong></summary>

$\neg P \wedge \neg B \rightarrow A$
</details>

<br>

### 3

>**Cuando llueve me gusta pasear por la ciudad, cuando no sopla el viento**

<details>
	<summary>Frase equivalente para aclarar la estructura lógica del enunciado dado</summary>

Que llueva y que **NO** sople el viento es **SUFICIENTE** para que me guste pasear por la ciudad
</details>

<details>
	<summary>Captura de pantalla</summary>

![](1_facil/3.png)
</details>

**Átomos**:
- $P$: "llueve"
- $B$: "sopla el viento"
- $A$: "me gusta pasear por la ciudad"

<details>
	<summary><strong>Formalización</strong></summary>

$(P \wedge \neg B) \rightarrow A$  
$\neg B \rightarrow (P \rightarrow A)$
</details>

<br>

### 4

>**Si llueve no sopla el viento y si no llueve sí que sopla**

<details>
	<summary>Captura de pantalla</summary>

![](1_facil/4.png)
</details>

**Átomos**:
- $P$: "llueve"
- $B$: "sopla el viento"

<details>
	<summary><strong>Formalización</strong></summary>

$(P \rightarrow \neg B) \wedge (\neg P \rightarrow B)$
</details>

## 🟧 Media

### 1

>**Cuando tengo prisa y hambre, corro siempre que no estoy nervioso**

<details>
	<summary>Frase equivalente para aclarar la estructura lógica del enunciado dado</summary>

Tener prisa **Y** hambre es **SUFICIENTE** para que, (si no estoy nervioso, entonces corra)
</details>

<details>
	<summary>Captura de pantalla</summary>

![](2_medio/1.png)
</details>

**Átomos**:
- $P$: "tengo prisa"
- $C$: "corro"
- $G$: "tengo hambre"
- $N$: "estoy nervioso"

<details>
	<summary><strong>Formalización</strong></summary>

$(P \wedge G) \rightarrow (\neg N \rightarrow C)$  
$P \wedge G \rightarrow (\neg N \rightarrow C)$
</details>

<br>

### 2

>**Cuando estoy nervioso, corro cuando tengo hambre y no tengo prisa**

<details>
	<summary>Frase equivalente para aclarar la estructura lógica del enunciado dado</summary>

Estar nervioso es **SUFICIENTE** para, si tengo hambre y **NO** tengo prisa, correr
</details>

<details>
	<summary>Captura de pantalla</summary>

![](2_medio/2.png)
</details>

**Átomos**:
- $P$: "tengo prisa"
- $C$: "corro"
- $G$: "tengo hambre"
- $N$: "estoy nervioso"

<details>
	<summary><strong>Formalización</strong></summary>

$N \wedge G \wedge \neg P \rightarrow C$  
$N \wedge (G \wedge \neg P \rightarrow C)$
</details>

<br>

### 3

>**Si cuando tengo hambre tengo prisa, cuando estoy nervioso no corro**

<details>
	<summary>Frase equivalente para aclarar la estructura lógica del enunciado dado</summary>

(Si cuando tengo hambre es **SUFICIENTE** para tener prisa), **ENTONCES** (ponerme nervioso es SUFICIENTE para **NO** correr)
</details>

<details>
	<summary>Captura de pantalla</summary>

![](2_medio/3.png)
</details>

**Átomos**:
- $P$: "tengo prisa"
- $C$: "corro"
- $G$: "tengo hambre"
- $N$: "estoy nervioso"

<details>
	<summary><strong>Formalización</strong></summary>

$(G \rightarrow P) \rightarrow (N \rightarrow \neg C)$
</details>

<br>

### 4

>**Debo estar nervioso para tener prisa y debo tener hambre para correr**

<details>
	<summary>Frase equivalente para aclarar la estructura lógica del enunciado dado</summary>

(Estar nervioso es **NECESARIO** para tener prisa) **Y** (tener hambre es **NECESARIO** para correr)
</details>

<details>
	<summary>Captura de pantalla</summary>

![](2_medio/4.png)
</details>

**Átomos**:
- $P$: "tengo prisa"
- $C$: "corro"
- $G$: "tengo hambre"
- $N$: "estoy nervioso"

<details>
	<summary><strong>Formalización</strong></summary>

$(P \rightarrow N) \wedge (C \rightarrow G)$
</details>

## 🟥 Difícil

### 1

>**Cuando debo tener dinero para ir de vacaciones, es necesario que tenga tiempo libre para tener salud**

<details>
	<summary>Frase equivalente para aclarar la estructura lógica del enunciado dado</summary>

Si (tener dinero es **NECESARIO** para ir de vacaciones), **ENTONCES** (tener tiempo libre es **NECESARIO** para tener salud)
</details>

<details>
	<summary>Captura de pantalla</summary>

![](3_dificil/1.png)
</details>

**Átomos**:
- $D$: "tengo dinero"
- $L$: "tengo tiempo libre"
- $V$: "voy de vacaciones"
- $S$: "tengo salud"

<details>
	<summary><strong>Formalización</strong></summary>

$(V \rightarrow D) \rightarrow (S \rightarrow L)$
</details>

<br>

### 2

>**Cuando tengo tiempo libre, es necesario que tenga dinero y salud para ir de vacaciones**

<details>
	<summary>Frase equivalente para aclarar la estructura lógica del enunciado dado</summary>

Si tengo tiempo libre, **ENTONCES** (tener dinero **Y** salud es **NECESARIO** para ir de vacaciones)
</details>

<details>
	<summary>Captura de pantalla</summary>

![](3_dificil/2.png)
</details>

**Átomos**:
- $D$: "tengo dinero"
- $L$: "tengo tiempo libre"
- $V$: "voy de vacaciones"
- $S$: "tengo salud"

<details>
	<summary><strong>Formalización</strong></summary>

$L \rightarrow (V \rightarrow (D \wedge S))$  
$L \rightarrow (V \rightarrow D \wedge S)$
</details>

<br>

### 3

>**Es necesario que tenga dinero y salud para ir de vacaciones cuando tengo tiempo libre**

<details>
	<summary>Frase equivalente para aclarar la estructura lógica del enunciado dado</summary>

Si tengo tiempo libre, **ENTONCES** (tener dinero **Y** salud) es **NECESARIO** para ir de vacaciones
</details>

<details>
	<summary>Captura de pantalla</summary>

![](3_dificil/3.png)
</details>

**Átomos**:
- $D$: "tengo dinero"
- $L$: "tengo tiempo libre"
- $V$: "voy de vacaciones"
- $S$: "tengo salud"

<details>
	<summary><strong>Formalización</strong></summary>

$L \rightarrow V \rightarrow (D \wedge S)$  
$(L \rightarrow V) \rightarrow D \wedge S$
</details>

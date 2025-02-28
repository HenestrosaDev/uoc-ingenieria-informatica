# Ejercicios de Alura - Lógica de enunciados: Formalización

El desglose de los ejercicios se realiza por dificultad:

- 🟩 Fácil
- 🟧 Media
- 🟥 Difícil

## 🟩 Fácil

>**Siempre que piensas en escribir, o bien abandonas la idea o bien te sale algo más importante**

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
<br>

>**Cuando ni llueve ni soplas el viento, me gusta pasear por la ciudad**

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
<br>

>**Cuando llueve me gusta pasear por la ciudad, cuando no sopla el viento**

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
<br>

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

>**Cuando tengo prisa y hambre, corro siempre que no estoy nervioso**

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
<br>

>**Cuando estoy nervioso, corro cuando tengo hambre y no tengo prisa**

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
<br>

>**Si cuando tengo hambre tengo prisa, cuando estoy nervioso no corro**

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
<br>

>**Debo estar nervioso para tener prisa y debo tener hambre para correr**

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

### 🟥 Difícil

>**Cuando debo tener dinero para ir de vacaciones, es necesario que tenga tiempo libre para tener salud**

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
<br>

>**Cuando tengo tiempo libre, es necesario que tenga dinero y salud para ir de vacaciones**

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
<br>

>**Es necesario que tenga dinero y salud para ir de vacaciones cuando tengo tiempo libre**

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

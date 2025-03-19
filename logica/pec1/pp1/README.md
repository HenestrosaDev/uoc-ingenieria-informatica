# Prueba práctica 1

>[!NOTE]
>- La suma total de la calificación de todos los ejercicios debe dar 10,00.
>- Se pueden realizar tantos intentos como se deseen antes de la fecha límite. 
>- Cuando el resultado sea del 40% o más, se podrá acceder a la PEC1.

## Ejercicio 1 - Test

<details>
	<summary>Captura de pantalla</summary>

![](capturas/1.png)
</details>

**Calificación**: 2,50 / 2,50

## Ejercicio 2 - Formalización

>**Si hace frío entonces sopla una brisa suave**

<details>
	<summary>Frase equivalente para aclarar la estructura lógica del enunciado dado</summary>

Que haga frío es **SUFICIENTE** para que sople una brisa suave
</details>

<details>
	<summary>Captura de pantalla</summary>

![](capturas/2.png)
</details>

**Átomos**:
- $F$: "hace frío"
- $B$: "sopla una brisa suave"

<details>
	<summary><strong>Formalización</strong></summary>

$F \rightarrow B$
</details>

**Calificación**: 1,25 / 1,25

## Ejercicio 3 - Formalización

>**Sólo cuando hay poca humedad el invierno es agradable**

<details>
	<summary>Frase equivalente para aclarar la estructura lógica del enunciado dado</summary>

Que haga poca humedad es **NECESARIO** para que el invierno sea agradable
</details>

<details>
	<summary>Captura de pantalla</summary>

![](capturas/3.png)
</details>

**Átomos**:
- $H$: "hay poca humedad"
- $A$: "el invierno es agradable"

<details>
	<summary><strong>Formalización</strong></summary>

$A \rightarrow H$
</details>

**Calificación**: 1,25 / 1,25

## Ejercicio 4 - Formalización

>**El invierno es agradable cuando no hace frío ni sopla una brisa suave**

<details>
	<summary>Frase equivalente para aclarar la estructura lógica del enunciado dado</summary>

Que **NO** haga frío **NI** sople una brisa suave es **SUFICIENTE** para que el invierno sea agradable
</details>

<details>
	<summary>Captura de pantalla</summary>

![](capturas/4.png)
</details>

**Átomos**:
- $F$: "hace frío"
- $B$: "sopla una brisa suave"
- $A$: "el invierno es agradable"

<details>
	<summary><strong>Formalización</strong></summary>

$\neg F \wedge \neg B \rightarrow A$
</details>

**Calificación**: 1,25 / 1,25

## Ejercicio 5 - Formalización

>**Cuando no pasa que haga frío y haya poca humedad, el invierno es agradable**

<details>
	<summary>Frase equivalente para aclarar la estructura lógica del enunciado dado</summary>

Que **NO** haga frío **NI** haga poca humedad es **SUFICIENTE** para que el invierno sea agradable
</details>

<details>
	<summary>Captura de pantalla</summary>

![](capturas/5.png)
</details>

**Átomos**:
- $F$: "hace frío"
- $H$: "hay poca humedad"
- $A$: "el invierno es agradable"

<details>
	<summary><strong>Formalización</strong></summary>

$\neg (F \wedge H) \rightarrow A$
</details>

**Calificación**: 1,25 / 1,25

## Ejercicio 6 - Formalización

>**Cuando hace frío, sólo si hay poca humedad sopla una brisa suave**

<details>
	<summary>Frase equivalente para aclarar la estructura lógica del enunciado dado</summary>

Que haga frío es **SUFICIENTE** para que (poca humedad sea **NECESARIA** para que sople una brisa suave)
</details>

<details>
	<summary>Captura de pantalla</summary>

![](capturas/6.png)
</details>

**Átomos**:
- $F$: "hace frío"
- $H$: "hay poca humedad"
- $A$: "el invierno es agradable"

<details>
	<summary><strong>Formalización</strong></summary>

$F \rightarrow (B \rightarrow H)$
</details>

**Calificación**: 1,25 / 1,25

---

## Calificación final

10,00 / 10,00
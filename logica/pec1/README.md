# PEC1 - El lenguaje formal de la lógica de enunciados

>[!NOTE]
>- Para realizar la PEC1, es necesario sacar un 4,00 o más en la [PP1](pp1).
>- Todos los ejercicios de esta PEC son de **formalización**.
>- Recomiendo realizar todos los ejercicios en papel, ya que la prueba final (examen o prueba de síntesis) se tiene que entregar adjuntando fotos de los ejercicios en dicho formato.
>- La suma de la calificación total de todos los ejercicios es 10,00.

## Ejercicios

### Ejercicio 1

>**O eres metódico y desarrollas software de calidad o aplicas técnicas de ingeniería**.

<details>
	<summary>Captura de pantalla</summary>

![](capturas/01.png)
</details>

**Átomos**:
- $T$: Aplicar técnicas de ingeniería (aplicas técnicas de ingeniería, se aplican técnicas de ingeniería).
- $D$: Desarrollar software de calidad (desarrollas software de calidad, se desarrolla software de calidad).
- $I$: Ser (un) informático graduado (eres un informático graduado, se es un informático graduado).
- $M$: Ser metódico (eres metódico, se es metódico).

<details>
	<summary><strong>Formalización</strong></summary>

$(M \wedge D) \vee T$
</details>

**Calificación**: 0,70 / 0,70

<br>

### Ejercicio 2

>**O tienes paciencia y medios o tienes razón**.

<details>
	<summary>Captura de pantalla</summary>

![](capturas/02.png)
</details>

**Átomos**:
- $R$: Tener razón (tienes razón, se tiene razón).
- $O$: Alcanzar los objetivos (alcanzas los objetivos, los objetivos se alcanzan).
- $M$: Disponer de medios (tener los medios, tienes los medios, dispones de los medios).
- $P$: Tener paciencia (tienes paciencia, se tiene paciencia).

<details>
	<summary><strong>Formalización</strong></summary>

$(P \wedge M) \vee R$
</details>

**Calificación**: 0,70 / 0,70

<br>

### Ejercicio 3

>**O madrugo mucho, o llego tarde al trabajo si no cojo el coche**.

<details>
	<summary>Frase equivalente para aclarar la estructura lógica del enunciado dado</summary>

**O** madrugo mucho, **O** (**NO** coger el coche es **SUFICIENTE** para llegar tarde al trabajo)
</details>

<details>
	<summary>Captura de pantalla</summary>

![](capturas/03.png)
</details>

**Átomos**:
- $C$: Coger el coche (cojo el coche, se coge el coche).
- $A$: Pasar por la autopista (paso por la autopista, se pasa por la autopista).
- $T$: Llegar tarde al trabajo (llego tarde al trabajo, se llega tarde al trabajo).
- $M$: Madrugar mucho (madrugar mucho, se madruga mucho).
- $F$: Ser fiesta/festivo (es fiesta/festivo).

<details>
	<summary><strong>Formalización</strong></summary>

$M \vee (\neg C \rightarrow T)$
</details>

**Calificación**: 0,70 / 0,70

<br>

### Ejercicio 4

>**Si tienes razón, has de tener paciencia para alcanzar los objetivos**.

<details>
	<summary>Frase equivalente para aclarar la estructura lógica del enunciado dado</summary>

Tener razón es **SUFICIENTE** para (tener paciencia es **NECESARIO** para alcanzar los objetivos)
</details>

<details>
	<summary>Captura de pantalla</summary>

![](capturas/04.png)
</details>

**Átomos**:
- $R$: Tener razón (tienes razón, se tiene razón).
- $O$: Alcanzar los objetivos (alcanzas los objetivos, los objetivos se alcanzan).
- $M$: Disponer de medios (tener los medios, tienes los medios, dispones de los medios).
- $P$: Tener paciencia (tienes paciencia, se tiene paciencia).

<details>
	<summary><strong>Formalización</strong></summary>

$R \rightarrow (O \rightarrow P)$
</details>

**Calificación**: 0,80 / 0,80

<br>

### Ejercicio 5

>**Es necesario disponer de medios para tener paciencia o alcanzar los objetivos**.

<details>
	<summary>Frase equivalente para aclarar la estructura lógica del enunciado dado</summary>

Disponer de los medios es **NECESARIO** para tener paciencia **O** alcanzar los objetivos
</details>

<details>
	<summary>Captura de pantalla</summary>

![](capturas/05.png)
</details>

**Átomos**:
- $R$: Tener razón (tienes razón, se tiene razón).
- $O$: Alcanzar los objetivos (alcanzas los objetivos, los objetivos se alcanzan).
- $M$: Disponer de medios (tener los medios, tienes los medios, dispones de los medios).
- $P$: Tener paciencia (tienes paciencia, se tiene paciencia).

<details>
	<summary><strong>Formalización</strong></summary>

$(P \vee O) \rightarrow M$
</details>

**Calificación**: 0,80 / 0,80

<br>

### Ejercicio 6

>**Si tengo razón alcanzo los objetivos, y si dispongo de medios tengo paciencia**.

<details>
	<summary>Frase equivalente para aclarar la estructura lógica del enunciado dado</summary>

(Tener razón es **SUFICIENTE** para alcanzar los objetivos) **Y** (disponer de medios es **SUFICIENTE** para tener paciencia)
</details>

<details>
	<summary>Captura de pantalla</summary>

![](capturas/06.png)
</details>

**Átomos**:
- $R$: Tener razón (tienes razón, se tiene razón).
- $O$: Alcanzar los objetivos (alcanzas los objetivos, los objetivos se alcanzan).
- $M$: Disponer de medios (tener los medios, tienes los medios, dispones de los medios).
- $P$: Tener paciencia (tienes paciencia, se tiene paciencia).

<details>
	<summary><strong>Formalización</strong></summary>

$(R \rightarrow O) \wedge (M \rightarrow P)$
</details>

**Calificación**: 0,80 / 0,80

<br>

### Ejercicio 7

>**Para desarrollar software de calidad, hay que ser metódico o aplicar técnicas de ingeniería**.

<details>
	<summary>Frase equivalente para aclarar la estructura lógica del enunciado dado</summary>

Ser metódico **O** aplicar técnicas de ingeniería es **NECESARIO** para desarrollar software de calidad 
</details>

<details>
	<summary>Captura de pantalla</summary>

![](capturas/07.png)
</details>

**Átomos**:
- $T$: Aplicar técnicas de ingeniería (aplicas técnicas de ingeniería, se aplican técnicas de ingeniería).
- $D$: Desarrollar software de calidad (desarrollas software de calidad, se desarrolla software de calidad).
- $I$: Ser (un) informático graduado (eres un informático graduado, se es un informático graduado).
- $M$: Ser metódico (eres metódico, se es metódico).

<details>
	<summary><strong>Formalización</strong></summary>

$D \rightarrow (M \vee T)$
</details>

**Calificación**: 0,80 / 0,80

<br>

### Ejercicio 8

>**Has de ser un informático graduado para desarrollar software de calidad, cuando eres metódico y aplicas técnicas de ingeniería**.

<details>
	<summary>Frase equivalente para aclarar la estructura lógica del enunciado dado</summary>

Ser metódico **Y** aplicar técnicas de ingeniería es **SUFICIENTE** para (ser un informático graduado es **NECESARIO** para desarrollar software de calidad)
</details>

<details>
	<summary>Captura de pantalla</summary>

![](capturas/08.png)
</details>

**Átomos**:
- $T$: Aplicar técnicas de ingeniería (aplicas técnicas de ingeniería, se aplican técnicas de ingeniería).
- $D$: Desarrollar software de calidad (desarrollas software de calidad, se desarrolla software de calidad).
- $I$: Ser (un) informático graduado (eres un informático graduado, se es un informático graduado).
- $M$: Ser metódico (eres metódico, se es metódico).

<details>
	<summary><strong>Formalización</strong></summary>

$(M \wedge T) \rightarrow (D \rightarrow I)$
</details>

**Calificación**: 1,00 / 1,00

<br>

### Ejercicio 9

>**Si eres metódico, solamente desarrollas software de calidad cuando eres un informático graduado y aplicas técnicas de ingeniería**.

<details>
	<summary>Frase equivalente para aclarar la estructura lógica del enunciado dado</summary>

Ser metódico es **SUFICIENTE** para (ser un informático graduado **Y** aplicar técnicas de ingeniería es **NECESARIO** para desarrollar software de calidad)
</details>

<details>
	<summary>Captura de pantalla</summary>

![](capturas/09.png)
</details>

**Átomos**:
- $T$: Aplicar técnicas de ingeniería (aplicas técnicas de ingeniería, se aplican técnicas de ingeniería).
- $D$: Desarrollar software de calidad (desarrollas software de calidad, se desarrolla software de calidad).
- $I$: Ser (un) informático graduado (eres un informático graduado, se es un informático graduado).
- $M$: Ser metódico (eres metódico, se es metódico).

<details>
	<summary><strong>Formalización</strong></summary>

$M \rightarrow (D \rightarrow (I \wedge T))$
</details>

**Calificación**: 1,00 / 1,00

<br>

### Ejercicio 10

>**Se debe coger el coche para pasar por la autopista, cuando es necesario madrugar para no llegar tarde al trabajo**.

<details>
	<summary>Frase equivalente para aclarar la estructura lógica del enunciado dado</summary>

(Madrugar es **NECESARIO** para **NO** llegar tarde al trabajo) es **SUFICIENTE** para (coger el coche es **NECESARIO** para pasar por la autopista)
</details>

<details>
	<summary>Captura de pantalla</summary>

![](capturas/10.png)
</details>

**Átomos**:
- $C$: Coger el coche (cojo el coche, se coge el coche).
- $A$: Pasar por la autopista (paso por la autopista, se pasa por la autopista).
- $T$: Llegar tarde al trabajo (llego tarde al trabajo, se llega tarde al trabajo).
- $M$: Madrugar mucho (madrugar mucho, se madruga mucho).
- $F$: Ser fiesta/festivo (es fiesta/festivo).

<details>
	<summary><strong>Formalización</strong></summary>

$(\neg T \rightarrow M) \rightarrow (A \rightarrow C)$
</details>

**Calificación**: 1,00 / 1,00

<br>

### Ejercicio 11

>[!NOTE]
>Este ejercicio se compone de cuatro frases que comparten los mismos átomos.

<details>
	<summary>Captura de pantalla</summary>

![](capturas/11.png)
</details>

**Átomos**:
- $T$: Trabajo en la ESA.
- $R$: Me siento realizado.
- $P$: Participo en proyectos.
- $M$: Soy meticuloso.
- $D$: Recibo distinciones.
- $F$: Hago formación continua.

### Premisa 1

>**Si recibo distinciones, hago formación continua cuando participo en proyectos**.

<details>
	<summary>Frase equivalente para aclarar la estructura lógica del enunciado dado</summary>

Recibir distinciones es **SUFICIENTE** para (participar en proyectos es **SUFICIENTE** para hacer formación continua)
</details>

<details>
	<summary><strong>Formalización</strong></summary>

$D \rightarrow (P \rightarrow F)$
</details>

### Premisa 2

>**Solo cuando participo en proyectos me siento realizado**.

<details>
	<summary>Frase equivalente para aclarar la estructura lógica del enunciado dado</summary>

Participar en proyectos es **necesario** para que me sienta realizado
</details>

<details>
	<summary><strong>Formalización</strong></summary>

$R \rightarrow P$
</details>

### Premisa 3

>**Recibo distinciones y me siento realizado, cuando trabajo en la ESA**.

<details>
	<summary>Frase equivalente para aclarar la estructura lógica del enunciado dado</summary>

Trabajar en la ESA es **SUFICIENTE** para (recibir distinciones **Y** sentirme realizado)
</details>

<details>
	<summary><strong>Formalización</strong></summary>

$T \rightarrow (D \wedge R)$
</details>

### Conclusión

>**Debo ser meticuloso y hacer formación continua para participar en proyectos**.

<details>
	<summary>Frase equivalente para aclarar la estructura lógica del enunciado dado</summary>

Ser meticuloso **Y** hacer formación continua es **NECESARIO** para participar en proyectos
</details>

<details>
	<summary><strong>Formalización</strong></summary>

$P \rightarrow (M \wedge F)$
</details>

**Criterios de corrección para este ejercicio**:
- **A**: Todas correctas.
- **C+**: 75% correctas.
- **C-**: 50% correctas.
- **D**: 25% correctas o menos.

**Calificación**: 1,70 / 1,70

<br>

## Recursos de aprendizaje

- Vídeos 1 al 8 (ambos incluidos) de [esta playlist de YouTube](https://www.youtube.com/playlist?list=PLX3CfQWn-1E1MpqMS_CWzbSSiY7hgOhtA) realizada por el canal [Aprende Sin Espinas](https://www.youtube.com/@AprendeSinEspinas).
- El libro [**Lógica de enunciados**](http://cvapp.uoc.edu/autors/MostraPDFMaterialAction.do?id=265957&hash=f4eec8d6f2470281eeabfd721755d26ab5429e0b8fd1581689cea334dc3dd6a5) proporcionado por la UOC.
	- Apartado **1. La lógica de enunciados y su lenguaje**. Páginas 7 a 22. [Resumen](recursos/README.md).

---

## Resultado

### Calificación

- **Calificación original**: 16,67 / 16,67
- **Calificación sobre 10**: 10,00 / 10,00
- **Letra (escala internacional)**: A

### Detalles sobre la puntuación

![](detalles_puntuacion.png)
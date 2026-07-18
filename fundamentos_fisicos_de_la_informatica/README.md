# Fundamentos físicos de la informática (25/26-2)

- [Información sobre la asignatura](#información-sobre-la-asignatura)
- [Archivo de exámenes](#archivo-de-exámenes)
- [Calendario de entregas](#calendario-de-entregas)
- [Resumen de calificaciones](#resumen-de-calificaciones)
- [Recursos de aprendizaje](#recursos-de-aprendizaje)
	- [PEC1](#pec1)
	- [PEC2](#pec2)
	- [PEC3](#pec3)
	- [PEC4](#pec4)

## Información sobre la asignatura

- **Código**: 75.611
- **Curso**: 2025/26 (2º semestre)
- **Tipo**: Básica
- **Método de evaluación**: Examen (65%) + Evaluación continua (35%)
- **Créditos**: 6
- [**Plan docente**](https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=75.611&Context=3&Locale=es)

```mermaid
xychart-beta
		title "Estadísticas de las calificaciones para el curso 2025/26-1"
		x-axis ["Matrícula Honor (1%)", "Sobresaliente (16%)", "Notable (56%)", "Aprobado (22%)", "Suspendido (5%)"]
		y-axis "% de alumnos" 0 --> 56
		bar [1, 16, 56, 22, 5]
```

><details>
>	<summary>Leyenda de calificaciones</summary>
>
>	- **Matrícula de Honor (M)**: 9 a 10
>	- **Sobresaliente (EX)**: 9 a 10
>	- **Notable (NO)**: 7 a 8,99
>	- **Aprobado ( )**: 5 a 6,99
>	- **Suspendido (SU)**: 0 a 4,99
></details>

## Archivo de exámenes

- [Compilación de 76 exámenes desde 2010](examenes)

## Calendario de entregas

```mermaid
gantt
	dateFormat DD-MM-YYYY
	section Entregas
		PEC1 :a1, 25-02-2026, 10-03-2026
		10-03-2026 :crit, milestone, m1, 10-03-2026, 0d
		
		PEC2 :a2, 11-03-2026, 07-04-2026
		07-04-2026 :crit, milestone, m2, 07-04-2026, 0d
		
		PEC3 :a3, 08-04-2026, 28-04-2026
		28-04-2026 :crit, milestone, m3, 28-04-2026, 0d

		PEC4 :a4, 29-04-2026, 26-05-2026
		26-05-2026 :crit, milestone, m4, 26-05-2026, 0d

	section Exámenes
		Examen T1 (13-06-2026):crit, milestone, m9, 13-06-2026, 0d
		Examen T2 (17-06-2026) :crit, milestone, m6, 17-06-2026, 0d
		Examen T3 (20-06-2026):crit, milestone, m7, 20-06-2026, 0d
```

## Resumen de calificaciones

<table>
	<tr>
		<th>BLOQUE</th>
		<th>ACTIVIDAD</th>
		<th>CALIFICACIÓN</th>
		<th>CALIFICACIÓN PONDERADA</th>
	</tr>
	<tr>
		<td rowspan="4">
			<strong>Evaluación continua (EC)</strong> (35%)
		</td>
		<td>
			<a href="pec1">
				PEC1 - Óptica y fotónica
			</a>
			(25%)
		</td>
		<td>24,30 / 25,00 (A)</td>
		<td rowspan="4">
			<p>
				<strong>Calificación total PEC</strong>:
				<br>
				97,60 / 100,00
			</p>
			<br>
			<p>
				<strong>Calificación ponderada EC</strong>:
				<br>
				3,42 / 3,50
			</p>	
		</td>
	</tr>
	<tr>
		<td>
			<a href="pec2">
				PEC2 - Circuitos eléctricos y RLC
			</a>
			(25%)
		</td>
		<td>24,30 / 25,00 (A)</td>
	</tr>
	<tr>
		<td>
			<a href="pec3">
				PEC3 - Electrostática
			</a>
			(25%)
		</td>
		<td>24,00 / 25,00 (A)</td>
	</tr>
	<tr>
		<td>
			<a href="pec4">
				PEC4 - Magnetostática y materiales semiconductores
			</a>
			(25%)
		</td>
		<td>25,00 / 25,00 (A)</td>
	</tr>
	<tr>
		<td>
			<a href="examenes/2025-2026/junio/espanol/20252_75611_130626">
				<strong>Examen</strong>
			</a> (65%)
		</td>
		<td colspan="1"></td>
		<td>9,20 / 10,00</td>
		<td>6,24 / 6,50</td>
	</tr>
	<tr>
		<td colspan="3"></td>	
		<td></td>
	</tr>
	<tr>
		<td colspan="3">
			<strong>CALIFICACIÓN FINAL</strong>
		</td>
		<td>9,40 / 10,00 (A)</td>
	</tr>
</table>

## Recursos de aprendizaje

>[!NOTE]
>- No se incluyen los archivos `pdf` en el repositorio para evitar posibles problemas de copyright.

### _Cheat sheet_ de la asignatura

- [Versión extendida en Markdown](recursos/README.md)
- [Versión extendida en PDF](recursos/formulario_extendido.pdf)
- [Versión reducida proporcionada por el profesorado](recursos/formulario.pdf)

### PEC1

- [**Óptica y fotónica: la ciencia de la luz**](https://aprenentatge.recursos.uoc.edu/continguts/pdf/PID_00288403.pdf) ([resumen](pec1/recursos/README.md))

### PEC2

- [**Vídeos de apoyo de la UOC sobre este recurso**](pec2/recursos/videos)
- [**Circuitos eléctricos: conceptos fundamentales**](https://aprenentatge.recursos.uoc.edu/continguts/pdf/PID_00288414.pdf) ([resumen](pec2/recursos/circuitos_electronicos.md))
- [**Circuitos RLC: análisis en corriente continua**](https://aprenentatge.recursos.uoc.edu/continguts/pdf/PID_00288412.pdf) ([resumen](pec2/recursos/circuitos_rlc.md))

### PEC3

- [**Vídeos de apoyo de la UOC sobre esta PEC**](pec3/recursos/videos)
- [**Electrostática: la base de la electricidad**](https://aprenentatge.recursos.uoc.edu/continguts/pdf/PID_00290383.pdf) ([resumen](pec3/recursos/README.md))

### PEC4

- [**Magnetostática e inducción electromagnética**](https://aprenentatge.recursos.uoc.edu/continguts/pdf/PID_00290385.pdf) ([resumen](pec4/recursos/magnetostatica_e_induccion_electromagnetica.md))
	- [**Vídeos de apoyo de la UOC sobre este recurso**](pec4/recursos/videos)
- [**Materiales y dispositivos semiconductores: la base de la física informática**](https://aprenentatge.recursos.uoc.edu/continguts/pdf/PID_00290381.pdf) ([resumen](pec4/recursos/materiales_y_dispositivos_semiconductores.md))

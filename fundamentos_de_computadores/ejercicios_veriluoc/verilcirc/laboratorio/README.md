# VerilCirc - Laboratorio

## Índice

- [MUX2](#mux2)
- [DEMUX2](#demux2)
- [COD4IN](#cod4in)
- [DECOD2](#decod2)
- [SUM1](#sum1)
- [SHIFT2L](#shift2l)
- [SUBST2](#subst2)
- [CMPBIT](#cmpbit)
- [REG2B](#reg2b)

<br>

## MUX2

<blockquote>

Diseñad con puertas lógicas un multiplexor 2-1 (2 entradas/1 salida) con entradas de un bit `in1`, `in2` y una única salida `out` de 1 bit controlado por una señal de selección `sel`. Además, el codificador va controlado por una señal de activación `enable` que cuando es cero, la señal de salida `out` vale 0.

<br>

<div align="center">

![](capturas/enunciados/MUX2.jpg)
</div>
</blockquote>

<details>
	<summary>Ejercicio resuelto</summary>
	<div align="center">
		<img src="capturas/ejercicios/MUX2.png">
		<img src="capturas/ejercicios/printer_view/MUX2.png">
	</div>
</details>

## DEMUX2

<blockquote>

Diseñad con puertas lógicas un demultiplexor 1-2 (1 entrada/2 salidas) con una entrada de un bit `in` y dos salidas `out1` y `out2` también de 1 bit controlado por una señal de selección `sel`. Además, el descodificador va controlado por una señal de activación `enable` que cuando es cero, las señales de salida valen 0.

<br>

<div align="center">


![](capturas/enunciados/DEMUX2.jpg)
</div>
</blockquote>

<details>
	<summary>Ejercicio resuelto</summary>
	<div align="center">
		<img
			src="capturas/ejercicios/DEMUX2.png"
			width="49%"
		>
		<img
			src="capturas/ejercicios/printer_view/DEMUX2.png"
			width="49%"
		>
	</div>
</details>

## COD4IN

<blockquote>

Diseñad con puertas lógicas un codificador 4-2 (4 entradas/2 salidas) con entradas de un bit `in1`, `in2`, `in3`, `in4` y una única señal `OUT` de 2 bits. Además, el codificador va controlado por una señal de activación `enable` que cuando es cero, la señal `OUT` vale 00.

<br>

<div align="center">

![](capturas/enunciados/COD4IN.jpg)
</div>
</blockquote>

<details>
	<summary>Ejercicio resuelto</summary>
	<div align="center">
		<img
			src="capturas/ejercicios/COD4IN.png"
			width="49%"
		>
		<img
			src="capturas/ejercicios/printer_view/COD4IN.png"
			width="49%"
		>
	</div>
</details>

## DECOD2

<blockquote>

Diseñad con puertas lógicas un decodificador 1-2 (1 entrada/2 salidas) con una entrada de un bit `in` y dos salidas `out1` y `out2` también de 1 bit. Además, el descodificador va controlado por una señal de activación `enable` que cuando es cero, las señales de salida valen 0.

<br>

<div align="center">

![](capturas/enunciados/DECOD2.jpg)
</div>
</blockquote>

<details>
	<summary>Ejercicio resuelto</summary>
	<div align="center">
		<img
			src="capturas/ejercicios/DECOD2.png"
			width="49%"
		>
		<img
			src="capturas/ejercicios/printer_view/DECOD2.png"
			width="49%"
		>
	</div>
</details>

## SUM1

<blockquote>

Diseñad con puertas lógicas un sumador en complemento a 2 de 1 bit con las entradas `in1` y `in2` una salida `out`. El sumador también tiene conectados el pin de entrada de acarreo `cin` y el de salida `cout` a las señales `cin` y `cout` de un bit respectivamente.

<br>

<div align="center">

![](capturas/enunciados/SUM1.jpg)
</div>
</blockquote>

<details>
	<summary>Ejercicio resuelto</summary>
	<div align="center">
		<img
			src="capturas/ejercicios/SUM1.png"
			width="49%"
		>
		<img
			src="capturas/ejercicios/printer_view/SUM1.png"
			width="49%"
		>
	</div>
</details>

## SHIFT2L

<blockquote>

Diseñad con puertas lógicas un desplazador de 2 bits a la izquierda con una entrada de 4 bits `IN` y una salida `OUT` de 4 bits.

<div align="center">

![](capturas/enunciados/SHIFT2L.jpg)
</div>
</blockquote>

<details>
	<summary>Ejercicio resuelto</summary>
	<div align="center">
		<img
			src="capturas/ejercicios/SHIFT2L.png"
			width="49%"
		>
		<img
			src="capturas/ejercicios/printer_view/SHIFT2L.png"
			width="49%"
		>
	</div>
</details>

## SUBST2

<blockquote>

Diseñad con un bloque de suma y puertas lógicas un restador en complemento a 2 de 2 bits con las entradas `A` y `B` y una salida `OUT`.

<br>

<div align="center">

![](capturas/enunciados/SUBST2.jpg)
</div>
</blockquote>

<details>
	<summary>Ejercicio resuelto</summary>
	<div align="center">
		<img
			src="capturas/ejercicios/SUBST2.png"
			width="49%"
		>
		<img
			src="capturas/ejercicios/printer_view/SUBST2.png"
			width="49%"
		>
	</div>
</details>

## CMPBIT

<blockquote>

Diseñad con puertas lógicas un comparador de un bit con entradas `A` y `B`. El nombre de las señales de salida son `greater`, `equal` y `less` para $A > B$, $A == B$ y $A < B$ respectivamente.

<br>

<div align="center">

![](capturas/enunciados/CMPBIT.jpg)
</div>
</blockquote>

<details>
	<summary>Ejercicio resuelto</summary>
	<div align="center">
		<img
			src="capturas/ejercicios/CMPBIT.png"
			width="49%"
		>
		<img
			src="capturas/ejercicios/printer_view/CMPBIT.png"
			width="49%"
		>
	</div>
</details>

## REG2B

<blockquote>

Diseñad con dos biestables un registro de 2 bits con las entradas `D` de 2 bits, `load` y `clear` de 1 bit y la salida `Q` de 2 bits. La entrada `D` proporciona los valores de entrada al registro mientras que `Q` visualiza el resultado de salida del registro. Las señales `load` y `clear` controlan las entradas `ld` y `clr` del registro, respectivamente.

<br>

<div align="center">

![](capturas/enunciados/REG2B.png)
</div>

</blockquote>

<details>
	<summary>Ejercicio resuelto</summary>
	<div align="center">
		<img
			src="capturas/ejercicios/REG2B.png"
			width="49%"
		>
		<img
			src="capturas/ejercicios/printer_view/REG2B.png"
			width="49%"
		>
	</div>
</details>

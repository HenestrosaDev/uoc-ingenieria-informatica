# [FORMULARIO] Circuitos eléctricos y RLC

- [Constantes](#constantes)
- [Áreas y volúmenes](#áreas-y-volúmenes)
- [2. Teoría de circuitos](#2-teoría-de-circuitos)
	- [Fórmulas básicas](#fórmulas-básicas)
	- [Condensador](#condensador)
	- [Bobina](#bobina)

## Constantes

- **(0.1)** $\boxed{\epsilon_{0}=8,854\cdot10^{-12}\,\text{F/m}}$: Permitividad eléctrica del vacío. Resistencia que ofrece el vacío a la formación de un campo eléctrico.
- **(0.2)** $\boxed{\frac{1}{4\pi\epsilon_{0}} \approx 9\cdot10^{9}\,\text{N}\cdot\text{m}^{2}/\text{C}^{2}}$: Constante de Coulomb ($K$).
- **(0.3)** $\boxed{\mu_{0}=4\pi\times10^{-7}\,\text{H/m}}$: Permeabilidad magnética del vacío. Capacidad del vacío para dejar pasar líneas de campo magnético.
- **(0.4)** $\boxed{c \approx 3\cdot10^{8}\,\text{m/s}}$: Velocidad de la luz en el vacío.

## Áreas y volúmenes

- **(0.5)** $\boxed{L=2\pi r}$: Longitud de la circunferencia.
    - $r$: Radio de la circunferencia.

- **(0.6)** $\boxed{S=\pi r^{2}}$: Área del círculo.

- **(0.7)** $\boxed{S=4\pi r^{2}}$: Área superficial de una esfera.

- **(0.8)** $\boxed{V=\frac{4}{3}\pi r^{3}}$: Volumen de una esfera.

- **(0.9)** $\boxed{S=2\pi r^{2}+2\pi rL}$: Área superficial de un cilindro.
    - $r$: Radio de la base del cilindro.
    - $L$: Altura (o longitud) del cilindro.

- **(0.10)** $\boxed{V=\pi r^{2}L}$: Volumen de un cilindro.

## 2. Teoría de circuitos

### Fórmulas básicas

- **(2.1)** $\boxed{R=\rho\frac{L}{S}}$ Resistencia eléctrica de un conductor en función de sus características físicas.
    - $R$: Resistencia eléctrica. Oposición que presenta el material al paso de la corriente. Se mide en Ohmios ($\Omega$).
    - $\rho$: Resistividad del material. Propiedad intrínseca del material del conductor. Se mide en Ohmios-metro ($\Omega\cdot m$).
    - $L$: Longitud del conductor. Se mide en metros ($m$).
    - $S$: Sección transversal o área del conductor. Se mide en metros cuadrados ($m^2$).

- **(2.2)** $\boxed{G=\frac{1}{R}}$ Conductancia eléctrica. Es la facilidad que ofrece un material al paso de la corriente eléctrica (el inverso de la resistencia).
    - $G$: Conductancia. Se mide en Siemens ($S$) o mhos ($\Omega^{-1}$).
    - $R$: Resistencia eléctrica. Se mide en Ohmios ($\Omega$).

- **(2.3)** $\boxed{V=I\cdot R}$ Ley de Ohm. Relaciona la tensión, la corriente y la resistencia en un circuito.
    - $V$: Tensión, diferencia de potencial o voltaje. Se mide en Voltios ($V$).
    - $I$: Intensidad de corriente eléctrica. Se mide en Amperios ($A$).
    - $R$: Resistencia eléctrica. Se mide en Ohmios ($\Omega$).

### Condensador

- **(2.4)** $\boxed{C=\frac{Q}{V}}$ Definición de capacidad (o capacitancia). Relación entre la carga almacenada y la tensión.
    - $C$: Capacidad del condensador. Se mide en Faradios ($F$).
    - $Q$: Carga eléctrica almacenada. Se mide en Culombios ($C$).
    - $V$: Tensión o diferencia de potencial entre las placas del condensador. Se mide en Voltios ($V$).

- **(2.5)** $\boxed{i(t)=C\frac{dv(t)}{dt}}$ Relación tensión-corriente en un condensador. La corriente es proporcional a la velocidad de cambio de la tensión.
    - $i(t)$: Intensidad de corriente instantánea en función del tiempo. Se mide en Amperios ($A$).
    - $C$: Capacidad del condensador. Se mide en Faradios ($F$).
    - $\frac{dv(t)}{dt}$: Derivada de la tensión respecto al tiempo (tasa de cambio temporal del voltaje). Se mide en Voltios por segundo ($V/s$).

- **(2.6)** $\boxed{v_c(t)=\frac{1}{C}\int_{-\infty}^{t} i(t)dt}$ Tensión instantánea en un condensador a partir de la corriente.
    - $v_c(t)$: Tensión instantánea en los bornes del condensador en función del tiempo. Se mide en Voltios ($V$).
    - $C$: Capacidad del condensador. Se mide en Faradios ($F$).
    - $i(t)$: Intensidad de corriente instantánea. Se mide en Amperios ($A$).
    - $t$: Instante de tiempo evaluado. Se mide en segundos ($s$).

- **(2.7)** $\boxed{i(t)=\frac{V}{R}e^{-\frac{1}{RC}t}}$ Corriente transitoria en un circuito RC (aplicable típicamente a la carga o descarga).
    - $i(t)$: Intensidad de corriente instantánea. Se mide en Amperios ($A$).
    - $V$: Tensión de la fuente o tensión inicial. Se mide en Voltios ($V$).
    - $R$: Resistencia del circuito. Se mide en Ohmios ($\Omega$).
    - $C$: Capacidad del condensador. Se mide en Faradios ($F$).
    - $t$: Tiempo transcurrido desde el inicio del evento. Se mide en segundos ($s$).
    - $e$: Número de Euler (base de los logaritmos neperianos, $\approx 2.718$).

- **(2.8)** $\boxed{v_c(t)=V(1-e^{-\frac{1}{RC}t})}$ Ecuación de la tensión durante la **carga** de un condensador en un circuito RC.
    - $v_c(t)$: Tensión instantánea en el condensador. Se mide en Voltios ($V$).
    - $V$: Tensión de la fuente de alimentación. Se mide en Voltios ($V$).
    - $R$: Resistencia del circuito. Se mide en Ohmios ($\Omega$).
    - $C$: Capacidad del condensador. Se mide en Faradios ($F$).
    - $t$: Tiempo transcurrido. Se mide en segundos ($s$).

- **(2.9)** $\boxed{\tau=RC}$ Constante de tiempo de un circuito RC. Indica la rapidez con la que el condensador se carga o descarga.
    - $\tau$ (tau): Constante de tiempo. Representa el tiempo necesario para que la magnitud alcance el $\approx 63.2\%$ de su valor final. Se mide en segundos ($s$).
    - $R$: Resistencia del circuito. Se mide en Ohmios ($\Omega$).
    - $C$: Capacidad del condensador. Se mide en Faradios ($F$).

- **(2.10)** $\boxed{v_c(t)=Ve^{-\frac{1}{RC}t}}$ Ecuación de la tensión durante la **descarga** de un condensador en un circuito RC.
    - $v_c(t)$: Tensión instantánea en el condensador. Se mide en Voltios ($V$).
    - $V$: Tensión inicial almacenada en el condensador antes de la descarga. Se mide en Voltios ($V$).
    - $R$: Resistencia del circuito. Se mide en Ohmios ($\Omega$).
    - $C$: Capacidad del condensador. Se mide en Faradios ($F$).
    - $t$: Tiempo transcurrido desde el inicio de la descarga. Se mide en segundos ($s$).

### Bobina

- **(2.11)** $\boxed{v_L(t)=L\frac{di(t)}{dt}}$ Relación tensión-corriente en una bobina. La tensión es proporcional a la velocidad de cambio de la corriente.
    - $v_L(t)$: Tensión instantánea en los bornes de la bobina. Se mide en Voltios ($V$).
    - $L$: Inductancia de la bobina. *(Nota: No confundir con la longitud de la fórmula 2.1)*. Se mide en Henrios ($H$).
    - $\frac{di(t)}{dt}$: Derivada de la corriente respecto al tiempo (tasa de cambio temporal de la corriente). Se mide en Amperios por segundo ($A/s$).

- **(2.12)** $\boxed{i(t)=\frac{1}{L}\int_{-\infty}^{t} v(t)dt}$ Corriente instantánea en una bobina a partir de la tensión.
    - $i(t)$: Intensidad de corriente instantánea. Se mide en Amperios ($A$).
    - $L$: Inductancia de la bobina. Se mide en Henrios ($H$).
    - $v(t)$: Tensión instantánea en la bobina. Se mide en Voltios ($V$).
    - $t$: Instante de tiempo evaluado. Se mide en segundos ($s$).

- **(2.13)** $\boxed{i(t)=\frac{V}{R}(1-e^{-\frac{R}{L}t})}$ Ecuación de la corriente durante la **conexión** (establecimiento de corriente) en un circuito RL.
    - $i(t)$: Intensidad de corriente instantánea. Se mide en Amperios ($A$).
    - $V$: Tensión de la fuente de alimentación. Se mide en Voltios ($V$).
    - $R$: Resistencia del circuito. Se mide en Ohmios ($\Omega$).
    - $L$: Inductancia de la bobina. Se mide en Henrios ($H$).
    - $t$: Tiempo transcurrido. Se mide en segundos ($s$).

- **(2.14)** $\boxed{v_L(t)=Ve^{-\frac{R}{L}t}}$ Tensión transitoria en la bobina durante el establecimiento o corte de corriente.
    - $v_L(t)$: Tensión instantánea en la bobina. Se mide en Voltios ($V$).
    - $V$: Tensión inicial en el momento de la conmutación. Se mide en Voltios ($V$).
    - $R$: Resistencia del circuito. Se mide en Ohmios ($\Omega$).
    - $L$: Inductancia de la bobina. Se mide en Henrios ($H$).
    - $t$: Tiempo transcurrido. Se mide en segundos ($s$).

- **(2.15)** $\boxed{\tau=\frac{L}{R}}$ Constante de tiempo de un circuito RL. Indica la rapidez con la que se establece o decae la corriente en la bobina.
    - $\tau$ (tau): Constante de tiempo. Se mide en segundos ($s$).
    - $L$: Inductancia de la bobina. Se mide en Henrios ($H$).
    - $R$: Resistencia del circuito. Se mide en Ohmios ($\Omega$).

- **(2.16)** $\boxed{i(t)=\frac{V}{R}e^{-\frac{R}{L}t}}$ Ecuación de la corriente durante la **desconexión** (decaimiento de corriente) en un circuito RL.
    - $i(t)$: Intensidad de corriente instantánea en decaimiento. Se mide en Amperios ($A$).
    - $V$: Tensión inicial (donde $\frac{V}{R}$ representa la corriente máxima inicial antes del corte). Se mide en Voltios ($V$).
    - $R$: Resistencia del circuito. Se mide en Ohmios ($\Omega$).
    - $L$: Inductancia de la bobina. Se mide en Henrios ($H$).
    - $t$: Tiempo transcurrido desde el corte. Se mide en segundos ($s$).

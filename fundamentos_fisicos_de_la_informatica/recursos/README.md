# Formulario general de la asignatura

- [Antes de empezar](#antes-de-empezar)
- [Constantes](#constantes)
- [Áreas y volúmenes](#áreas-y-volúmenes)
- [1. Óptica y fotónica](#1-óptica-y-fotónica)
	- [Ondas](#ondas)
	- [Óptica geométrica](#óptica-geométrica)
	- [Óptica ondulatoria y electromagnetismo](#óptica-ondulatoria-y-electromagnetismo)
	- [Difracción e interferencia](#difracción-e-interferencia)
	- [Doble rendija](#doble-rendija)
	- [Única abertura](#única-abertura)
	- [Óptica cuántica](#óptica-cuántica)
- [2. Teoría de circuitos](#2-teoría-de-circuitos)
	- [Fórmulas básicas](#fórmulas-básicas)
	- [Condensador](#condensador)
	- [Bobina](#bobina)
- [3. Electrostática](#3-electrostática)
	- [Fórmulas](#fórmulas)
- [4. Magnetostática e Inducción electromagnética](#4-magnetostática-e-inducción-electromagnética)
	- [Fórmulas](#fórmulas-1)
- [5. Semiconductores](#5-semiconductores)
	- [Los materiales semiconductores](#los-materiales-semiconductores)
	- [La unión p-n. Los díodos](#la-unión-p-n-los-díodos)


## Antes de empezar

A día 08/06/2026, el equipo docente de la asignatura pone a disposición del alumnado el archivo [`formulario.pdf`](formulario.pdf) a modo de _cheat sheet_ permitida durante la realización del examen. A su vez, es un resumen muy útil que sintetiza todas las fórmulas relevantes abordadas durante la asignatura. 

Este archivo que estás leyendo expande el contenido de [`formulario.pdf`](formulario.pdf), ofreciendo un desglose exhaustivo de cada ecuación junto con el significado de sus variables y su utilidad práctica. El archivo [`formulario_extendido.pdf`](formulario_extendido.pdf) incluye el mismo contenido que este archivo, pero cuenta con algunas mejoras visuales debido al soporte limitado de LaTeX en GitHub Markdown.

Asimismo, cada PEC contiene la parte del formulario correspondiente a su contenido didáctico. No cuentan con más contenido del que se presenta aquí; simplemente se desglosa con tal de dividirlo a un nivel más granular. He aquí los enlaces estructurados por PEC:

- [PEC1](../pec1/recursos/README.md)
- [PEC2](../pec2/recursos/README.md)
- [PEC3](../pec3/recursos/README.md)
- [PEC4](../pec4/recursos/README.md)

>[!IMPORTANT]
>El contenido de los apartados [Constantes](#constantes) y [Áreas y volúmenes](#áreas-y-volúmenes) es común a todos los apartados numerados; es decir, aplican para todos los contenidos didácticos de cada PEC.

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

## 1. Óptica y fotónica

### Ondas

- **(1.1)** $\boxed{f(x,t)=A\,\sin(kx-\omega t+\phi)}$ Función de la propagación de una onda armónica en el espacio $x$ y en el tiempo $t$.
    - $f(x,t)$: Función de onda. Representa el desplazamiento de la onda en una posición $x$ y un instante de tiempo $t$. Se mide en metros ($m$).
    - $A$: Amplitud. Es el valor máximo de la oscilación. Indica la intensidad; es decir, lo lejos que llega la onda desde su punto de equilibrio. Se mide en metros ($m$).
    - $k$: Número de onda. Indica cómo de rápido cambia la onda en el espacio. Se relaciona con la longitud de onda ($\lambda$) mediante la fórmula $k = \frac{2\pi}{\lambda}$. Se mide en radianes por metro ($rad/m$).
    - $x$: Posición espacial. Es la coordenada donde se evalúa la onda. Se mide en metros ($m$).
    - $\omega$: Frecuencia angular. Indica cómo de rápido cambia la onda en el tiempo. Se relaciona con el periodo ($T$) y la frecuencia ($f$) mediante $\omega = \frac{2\pi}{T} = 2\pi f$. Se mide en radianes por segundo ($rad/s$).
    - $t$: Tiempo. Es el instante en el que se evalúa la onda. Se mide en segundos ($s$).
    - $\phi$: Constante de fase. Determina el estado inicial de la oscilación en el tiempo $t=0$ y la posición $x=0$. Indica el "desplazamiento" inicial de la onda. Se mide en radianes ($rad$).

- **(1.2)** $\boxed{\lambda=\frac{2\pi}{k}}$ Longitud de onda. Distancia entre dos puntos consecutivos que están en la misma fase.
    - $\lambda$: Longitud de onda. Distancia entre dos puntos consecutivos que están en la misma fase. Se mide en metros ($m$).
    - $k$: Número de onda. Indica cómo de rápido cambia la onda en el espacio. Se relaciona con la longitud de onda ($\lambda$) mediante la fórmula $k = \frac{2\pi}{\lambda}$. Se mide en radianes por metro ($rad/m$).

- **(1.3a)** $\boxed{T=\frac{1}{f}}$ Periodo de la onda a partir de la frecuencia. Tiempo que tarda en completarse un ciclo.
    - $T$: Periodo de la onda. Tiempo que tarda en completarse un ciclo. Se mide en segundos ($s$).
    - $f$: Frecuencia de onda. Número de ciclos por segundo. Se mide en Hercios ($Hz$).

- **(1.3b)** $\boxed{T=\frac{2\pi}{\omega}}$ Periodo de la onda a partir de la frecuencia angular. Tiempo que tarda en completarse un ciclo.
    - $T$: Periodo de la onda. Tiempo que tarda en completarse un ciclo. Se mide en segundos ($s$).
    - $\omega$: Frecuencia angular. Indica cómo de rápido cambia la onda en el tiempo. Se relaciona con el periodo ($T$) y la frecuencia ($f$) mediante $\omega = \frac{2\pi}{T} = 2\pi f$. Se mide en radianes por segundo ($rad/s$).

- **(1.4a)** $\boxed{v=\lambda f}$ Velocidad de propagación de la onda a partir de la longitud de onda y la frecuencia.
    - $v$: Velocidad de propagación de la onda. Rapidez con la que se desplaza la onda a través del medio. Se mide en metros por segundo ($m/s$).
    - $\lambda$: Longitud de onda. Distancia entre dos puntos consecutivos que están en la misma fase. Se mide en metros ($m$).
    - $f$: Frecuencia de onda. Número de ciclos por segundo. Se mide en Hercios ($Hz$).

- **(1.4b)** $\boxed{v=\frac{\omega}{k}}$ Velocidad de propagación de la onda a partir de la frecuencia angular y el número de onda.
    - $v$: Velocidad de propagación de la onda. Rapidez con la que se desplaza la onda a través del medio. Se mide en metros por segundo ($m/s$).
    - $\omega$: Frecuencia angular. Indica cómo de rápido cambia la onda en el tiempo. Se relaciona con el periodo ($T$) y la frecuencia ($f$) mediante $\omega = \frac{2\pi}{T} = 2\pi f$. Se mide en radianes por segundo ($rad/s$).
    - $k$: Número de onda. Indica cómo de rápido cambia la onda en el espacio. Se relaciona con la longitud de onda ($\lambda$) mediante la fórmula $k = \frac{2\pi}{\lambda}$. Se mide en radianes por metro ($rad/m$).

### Óptica geométrica

- **(1.5)** $\boxed{n=\frac{v_{0}}{v}}$ Índice de refracción. Es una medida que indica cuánto se reduce la velocidad de la luz al pasar del vacío a un medio material.
    - $n$: Índice de refracción. Es una medida de cuánto reduce la luz su velocidad en un medio. Es adimensional (no tiene unidades).
    - $v_0$: Velocidad de la luz en el vacío ($\approx 3 \times 10^8 \, m/s$). Se mide en metros por segundo ($m/s$).
    - $v$: Velocidad de propagación de la luz en el medio material. Se mide en metros por segundo ($m/s$).

- **(1.6)** $\boxed{n_{1}\sin\,\theta_{1}=n_{2}\sin\,\theta_{2}}$ Ley de Snell para la refracción. Relaciona los ángulos de incidencia y refracción con los índices de refracción de los medios al atravesar una superficie de separación.
    - $n_1$: Índice de refracción del medio 1 (medio de incidencia). Es una medida de cuánto reduce la luz su velocidad en el primer medio. Es adimensional.
    - $\theta_1$: Ángulo de incidencia. Es el ángulo formado entre el rayo de luz incidente y la normal (línea perpendicular a la superficie de separación). Se mide en grados ($^\circ$) o radianes ($rad$).
    - $n_2$: Índice de refracción del medio 2 (medio de refracción). Es una medida de cuánto reduce la luz su velocidad en el segundo medio. Es adimensional.
    - $\theta_2$: Ángulo de refracción. Ángulo formado entre el rayo refractado y la normal. Se mide en grados ($^\circ$) o radianes ($rad$).

    Conceptos clave para interpretar esta fórmula:
    - La Normal: Los ángulos $\theta_1$ y $\theta_2$ se miden respecto a la **línea perpendicular a la superficie de contacto**, no respecto a la superficie de contacto.
    - Si $n_2 > n_1$, la luz se acerca a la normal; el rayo "se dobla" hacia adentro.
    - Si $n_2 < n_1$, la luz se aleja de la normal; el rayo "se dobla" hacia afuera.

- **(1.7)** $\boxed{\sin\,\theta_{1}=\sqrt{(\frac{n_{2}}{n_{1}})^{2}-(\frac{n_{3}}{n_{1}})^{2}}}$ Ángulo límite / apertura numérica. Determina el cono de aceptación o el ángulo máximo de incidencia para que la luz quede confinada mediante reflexión interna total (por ejemplo, dentro de una fibra óptica).
    - $\theta_1$: Ángulo límite o de apertura (ángulo de aceptación). Es el ángulo máximo de incidencia para el cual la luz se transmitirá de forma confinada. Se mide en grados ($^\circ$) o radianes ($rad$).
    - $n_1$: Índice de refracción del medio desde el cual incide la luz (ej. núcleo de fibra óptica). Es adimensional.
    - $n_2$: Índice de refracción del segundo medio (ej. revestimiento). Es adimensional.
    - $n_3$: Índice de refracción del medio externo (ej. aire). Es adimensional.

### Óptica ondulatoria y electromagnetismo

- **(1.8)** $\boxed{\vert{}\vec{E}\vert{}=v_{0}\vert{}\vec{B}\vert{}}$ Relación de amplitudes entre campo eléctrico y magnético.
    - $\vert{}\vec{E}\vert{}$: Módulo del campo eléctrico instantáneo. Se mide en Voltios por metro ($V/m$) o Newtons por Culombio ($N/C$).
    - $v_0$: Velocidad de propagación de la onda en el medio. Si la onda viaja por el vacío, $v_0$ es exactamente igual a $c$ (la velocidad de la luz, $\approx 3 \times 10^8 \, m/s$). Se mide en metros por segundo ($m/s$).
    - $\vert{}\vec{B}\vert{}$: Módulo del campo magnético instantáneo. Se mide en Teslas ($T$).

- **(1.9)** $\boxed{v_{0}=\frac{1}{\sqrt{\mu_{0}\epsilon_{0}}}}$ Velocidad de la onda electromagnética en el vacío.
    - $v_0$: Velocidad de propagación de la onda en el medio. Si la onda viaja por el vacío, $v_0$ es exactamente igual a $c$ (la velocidad de la luz, $\approx 3 \times 10^8 \, m/s$). Se mide en metros por segundo ($m/s$).
    - $\mu_0$: Permeabilidad magnética del vacío. Constante física que indica cómo el vacío responde a un campo magnético. Su valor es $4\pi \times 10^{-7} \, T\cdot m/A$.
    - $\epsilon_{0}$: Permitividad eléctrica del vacío. Constante física cuyo valor es $8,854\cdot10^{-12}\,\text{F/m}$. Describe la resistencia que ofrece el vacío a la formación de un campo eléctrico.

- **(1.10)** $\boxed{\vec{E}(\vec{r},t)=\vec{E}_{0}\sin(\vec{k}\vec{r}-\omega t+\phi)}$ Expresión vectorial del campo eléctrico.
    - $\vec{E}(\vec{r},t)$: Campo eléctrico vectorial en función de la posición y el tiempo. Se mide en Voltios por metro ($V/m$) o Newtons por Culombio ($N/C$).
    - $\vec{E}_0$: Vector amplitud. Indica la dirección de oscilación del campo eléctrico y su valor máximo. Se mide en Voltios por metro ($V/m$) o Newtons por Culombio ($N/C$).
    - $\vec{k}$: Vector número de onda. Indica la dirección de propagación de la onda. Se mide en radianes por metro ($rad/m$).
    - $\vec{r}$: Vector posición espacial $(x,y,z)$. Indica el punto del espacio donde se evalúa el campo. Se mide en metros ($m$).
    - $\omega$: Frecuencia angular. Indica cómo de rápido cambia la onda en el tiempo. Se mide en radianes por segundo ($rad/s$).
    - $t$: Tiempo. Es el instante en el que se evalúa la onda. Se mide en segundos ($s$).
    - $\phi$: Constante de fase. Determina el estado inicial de la oscilación. Se mide en radianes ($rad$).

- **(1.11)** $\boxed{u_{e}=\frac{1}{2}\epsilon_{0}E^{2}}$ Densidad de energía eléctrica instantánea.
    - $u_e$: Densidad de energía eléctrica instantánea. Energía almacenada por el campo eléctrico en un volumen dado. Se mide en Julios por metro cúbico ($J/m^3$).
    - $\epsilon_{0}$: Permitividad eléctrica del vacío. Constante física cuyo valor es $8,854\cdot10^{-12}\,\text{F/m}$. Describe la resistencia que ofrece el vacío a la formación de un campo eléctrico.
    - $E$: Módulo del campo eléctrico instantáneo. Se mide en Voltios por metro ($V/m$) o Newtons por Culombio ($N/C$).

- **(1.12)** $\boxed{u_{m}=\frac{B^{2}}{2\mu_{0}}}$ Densidad de energía magnética instantánea.
    - $u_m$: Densidad de energía magnética instantánea. Energía almacenada por el campo magnético en un volumen dado. Se mide en Julios por metro cúbico ($J/m^3$).
    - $B$: Módulo del campo magnético instantáneo. Se mide en Teslas ($T$).
    - $\mu_0$: Permeabilidad magnética del vacío. Constante física que indica cómo el vacío responde a un campo magnético. Su valor es $4\pi \times 10^{-7} \, T\cdot m/A$.

- **(1.13)** $\boxed{u=\epsilon_{0}E^{2}}$ Densidad de energía total instantánea.
    - $u$: Densidad de energía total instantánea. Suma de las energías eléctrica y magnética. Se mide en Julios por metro cúbico ($J/m^3$).
    - $\epsilon_{0}$: Permitividad eléctrica del vacío. Constante física cuyo valor es $8,854\cdot10^{-12}\,\text{F/m}$. Describe la resistencia que ofrece el vacío a la formación de un campo eléctrico.
    - $E$: Módulo del campo eléctrico instantáneo. Se mide en Voltios por metro ($V/m$) o Newtons por Culombio ($N/C$).

- **(1.14)** $\boxed{\langle u\rangle=\frac{E_{0}B_{0}}{2\mu_{0}v_{0}}}$ Densidad de energía media. Calcula cuánta energía electromagnética hay almacenada, en promedio, en un metro cúbico de espacio mientras la onda viaja a través de él.
    - $\langle u\rangle$: Densidad de energía media. Se mide en Julios por metro cúbico ($J/m^3$). Los corchetes angulares $\langle \rangle$ en física denotan un valor promedio.
    - $E_0$: Amplitud del campo eléctrico. Es el valor máximo que alcanza el campo eléctrico de la onda. Se mide en Voltios por metro ($V/m$) o Newtons por Culombio ($N/C$).
    - $B_0$: Amplitud del campo magnético. Es el valor máximo que alcanza el campo magnético de la onda. Se mide en Teslas ($T$).
    - $\mu_0$: Permeabilidad magnética del vacío. Constante física que indica cómo el vacío responde a un campo magnético. Su valor es $4\pi \times 10^{-7} \, T\cdot m/A$.
    - $v_0$: Velocidad de propagación de la onda en el medio. Si la onda viaja por el vacío, $v_0$ es exactamente igual a $c$ (la velocidad de la luz, $\approx 3 \times 10^8 \, m/s$). Se mide en metros por segundo ($m/s$).

- **(1.15)** $\boxed{I=\langle u\rangle v_{0}}$ Relación entre intensidad y densidad. La intensidad de una onda es su densidad de energía multiplicada por la velocidad a la que se mueve ese volumen.
    - $I$: Intensidad de la onda. Potencia promedio transferida a través de una unidad de área perpendicular a la dirección de propagación. Se mide en Vatios por metro cuadrado ($W/m^2$).
    - $\langle u\rangle$: Densidad de energía media. Se mide en Julios por metro cúbico ($J/m^3$). Los corchetes angulares $\langle \rangle$ en física denotan un valor promedio.
    - $v_0$: Velocidad de propagación de la onda en el medio. Si la onda viaja por el vacío, $v_0$ es exactamente igual a $c$ (la velocidad de la luz, $\approx 3 \times 10^8 \, m/s$). Se mide en metros por segundo ($m/s$).

- **(1.16)** $\boxed{I=\frac{E_{0}B_{0}}{2\mu_{0}}}$ Intensidad a partir de los campos. Es la forma más directa de calcular la intensidad si se conocen los valores máximos de los campos eléctrico y magnético.
    - $I$: Intensidad de la onda. Potencia promedio transferida a través de una unidad de área perpendicular a la dirección de propagación. Se mide en Vatios por metro cuadrado ($W/m^2$).
    - $E_0$: Amplitud del campo eléctrico. Es el valor máximo que alcanza el campo eléctrico de la onda. Se mide en Voltios por metro ($V/m$) o Newtons por Culombio ($N/C$).
    - $B_0$: Amplitud del campo magnético. Es el valor máximo que alcanza el campo magnético de la onda. Se mide en Teslas ($T$).
    - $\mu_0$: Permeabilidad magnética del vacío. Constante física que indica cómo el vacío responde a un campo magnético. Su valor es $4\pi \times 10^{-7} \, T\cdot m/A$.

- **(1.17)** $\boxed{\vec{S}=\frac{\vec{E}\times\vec{B}}{\mu_{0}}}$ Vector de Poynting.
    - $\vec{S}$: Vector de Poynting. Indica la dirección de propagación de la energía y su magnitud es la intensidad instantánea. Es perpendicular tanto a $\vec{E}$ como a $\vec{B}$. Se mide en Vatios por metro cuadrado ($W/m^2$).
    - $\vec{E}$: Vector campo eléctrico instantáneo. Se mide en Voltios por metro ($V/m$) o Newtons por Culombio ($N/C$).
    - $\vec{B}$: Vector campo magnético instantáneo. Se mide en Teslas ($T$).
    - $\mu_0$: Permeabilidad magnética del vacío. Constante física que indica cómo el vacío responde a un campo magnético. Su valor es $4\pi \times 10^{-7} \, T\cdot m/A$.

- **(1.18)** $\boxed{P_{r}=\frac{I}{v_{0}}}$ Presión de radiación. Fuerza por unidad de área ejercida por la onda al chocar contra una superficie.
    - $P_r$: Presión de radiación. Fuerza por unidad de área ejercida por la onda al chocar contra una superficie. Se mide en Pascales ($Pa$) o Newtons por metro cuadrado ($N/m^2$).
    - $I$: Intensidad de la onda. Potencia promedio transferida a través de una unidad de área perpendicular a la dirección de propagación. Se mide en Vatios por metro cuadrado ($W/m^2$).
    - $v_0$: Velocidad de propagación de la onda en el medio. Si la onda viaja por el vacío, $v_0$ es exactamente igual a $c$ (la velocidad de la luz, $\approx 3 \times 10^8 \, m/s$). Se mide en metros por segundo ($m/s$).

### Difracción e interferencia

- **(1.19)** $\boxed{I=I_{1}+I_{2}+2\sqrt{I_{1}I_{2}}\cos\,\delta}$ Intensidad resultante por interferencia de dos ondas.
    - $I$: Intensidad de la onda. Potencia promedio transferida a través de una unidad de área perpendicular a la dirección de propagación. Se mide en Vatios por metro cuadrado ($W/m^2$).
    - $I_1, I_2$: Intensidad de la onda 1 y 2. Potencia promedio transferida a través de una unidad de área perpendicular a la dirección de propagación. Se mide en Vatios por metro cuadrado ($W/m^2$).
    - $\delta$: Diferencia de fase (desfase) entre las dos ondas cuando se superponen. Se mide en radianes ($rad$).

- **(1.20)** $\boxed{\delta=k(r_{1}-r_{2})=k\Delta r}$ Desfase en función de la diferencia de caminos.
    - $\delta$: Diferencia de fase (desfase). Se mide en radianes ($rad$).
    - $k$: Número de onda. Indica cómo de rápido cambia la onda en el espacio. Se mide en radianes por metro ($rad/m$).
    - $r_1, r_2$: Distancia geométrica recorrida por la onda 1 y 2 hasta el punto de encuentro. Se mide en metros ($m$).
    - $\Delta r$: Diferencia geométrica de las distancias recorridas por ambas ondas (diferencia de camino óptico). Se mide en metros ($m$).

- **(1.21)** $\boxed{k=\frac{2\pi}{\lambda}}$ Número de onda.
    - $k$: Número de onda. Indica cómo de rápido cambia la onda en el espacio. Se mide en radianes por metro ($rad/m$).
    - $\lambda$: Longitud de onda. Distancia entre dos puntos consecutivos que están en la misma fase. Se mide en metros ($m$).

- **(1.22)** $\boxed{\delta=\frac{2\pi}{\lambda}\Delta r}$ Desfase explícito según la longitud de onda.
    - $\delta$: Diferencia de fase (desfase). Se mide en radianes ($rad$).
    - $\lambda$: Longitud de onda. Distancia entre dos puntos consecutivos que están en la misma fase. Se mide en metros ($m$).
    - $\Delta r$: Diferencia geométrica de las distancias recorridas por ambas ondas. Se mide en metros ($m$).

### Doble rendija

- **(1.23)** $\boxed{\Delta r=d\sin\,\theta}$ Diferencia de caminos en el experimento de doble rendija de Young.
    - $\Delta r$: Diferencia geométrica de las distancias recorridas por ambas ondas. Se mide en metros ($m$).
    - $d$: Distancia de separación entre las dos rendijas. Se mide en metros ($m$).
    - $\theta$: Ángulo de desviación respecto a la franja central. Se mide en grados ($^\circ$) o radianes ($rad$).

- **(1.24)** $\boxed{\delta=\frac{2\pi}{\lambda}d\sin\,\theta}$ Desfase en función de las variables de la doble rendija.
    - $\delta$: Diferencia de fase (desfase). Se mide en radianes ($rad$).
    - $\lambda$: Longitud de onda. Se mide en metros ($m$).
    - $d$: Distancia de separación entre las dos rendijas. Se mide en metros ($m$).
    - $\theta$: Ángulo de desviación respecto a la franja central. Se mide en grados ($^\circ$) o radianes ($rad$).

- **(1.25)** $\boxed{d\sin\,\theta=m\lambda, \quad m=0,1,2,3\dots}$ Condición de Máximos (interferencia constructiva).
    - $d$: Distancia de separación entre las dos rendijas. Se mide en metros ($m$).
    - $\theta$: Ángulo de desviación respecto a la franja central. Se mide en grados ($^\circ$) o radianes ($rad$).
    - $m$: Orden de interferencia. Es un número entero utilizado para ubicar las franjas brillantes. Es adimensional.
    - $\lambda$: Longitud de onda. Se mide en metros ($m$).

- **(1.26)** $\boxed{d\sin\,\theta=(m-1/2)\lambda, \quad m=1,2,3\dots}$ Condición de Mínimos (interferencia destructiva).
    - Iguales a la fórmula (1.25), pero $m$ comienza en 1 y representa las franjas oscuras.

- **(1.27)** $\boxed{\tan\,\theta=\frac{y}{L}}$ Relación trigonométrica para proyectar la desviación en una pantalla.
    - $\theta$: Ángulo de desviación. Se mide en grados ($^\circ$) o radianes ($rad$).
    - $y$: Distancia vertical en la pantalla desde la franja central (origen) hasta la franja observada. Se mide en metros ($m$).
    - $L$: Distancia en línea recta desde las rendijas hasta la pantalla. Se mide en metros ($m$).

- **(1.28)** $\boxed{y=m\frac{\lambda L}{d}, \quad m=0,1,2,3\dots}$ Ubicación lineal de los Máximos en la pantalla.
    - $y$: Distancia de la franja brillante al centro. Se mide en metros ($m$).
    - $m$: Orden del máximo. Es adimensional.
    - $\lambda$: Longitud de onda. Se mide en metros ($m$).
    - $L$: Distancia a la pantalla. Se mide en metros ($m$).
    - $d$: Distancia entre rendijas. Se mide en metros ($m$).

- **(1.29)** $\boxed{y=(m-1/2)\frac{\lambda L}{d}, \quad m=1,2,3\dots}$ Ubicación lineal de los Mínimos en la pantalla.
    - $y$: Distancia de la franja oscura al centro. Se mide en metros ($m$).
    - Resto de variables: Idénticas a la fórmula (1.28).

### Única abertura

- **(1.30)** $\boxed{a\sin\,\theta=m\lambda, \quad m=1,2,3\dots}$ Condición de Mínimos de difracción de una rendija simple.
    - $a$: Ancho de la rendija. Se mide en metros ($m$).
    - $\theta$: Ángulo de desviación hacia la zona de oscuridad. Se mide en grados ($^\circ$) o radianes ($rad$).
    - $m$: Orden del mínimo de difracción. Es adimensional.
    - $\lambda$: Longitud de onda. Se mide en metros ($m$).

### Óptica cuántica

- **(1.31)** $\boxed{E=hf}$ Energía de un fotón cuantizado.
    - $E$: Energía del fotón. Se mide en Julios ($J$) o Electrón-voltios ($eV$).
    - $h$: Constante de Planck. Se mide en Julios-segundo ($J\cdot s$).
    - $f$: Frecuencia de la onda. Se mide en Hercios ($Hz$).

- **(1.32)** $\boxed{h=6,626\cdot10^{-34}\,\text{J}\cdot\text{s}}$ Constante de Planck.
    - $h$: Constante fundamental de la física cuántica que relaciona la energía de una partícula con su frecuencia.

- **(1.33)** $\boxed{\lambda=\frac{h}{mv}}$ Longitud de onda de De Broglie para partículas.
    - $\lambda$: Longitud de onda asociada a la partícula. Se mide en metros ($m$).
    - $h$: Constante de Planck. Se mide en Julios-segundo ($J\cdot s$).
    - $m$: Masa de la partícula. Se mide en kilogramos ($kg$).
    - $v$: Velocidad de la partícula. Se mide en metros por segundo ($m/s$).

- **(1.34)** $\boxed{f=\frac{E_{2}-E_{1}}{h}}$ Frecuencia del fotón en un salto cuántico.
    - $f$: Frecuencia del fotón emitido o absorbido. Se mide en Hercios ($Hz$).
    - $E_2$: Energía del estado de mayor energía (excitado). Se mide en Julios ($J$) o Electrón-voltios ($eV$).
    - $E_1$: Energía del estado de menor energía (fundamental). Se mide en Julios ($J$) o Electrón-voltios ($eV$).
    - $h$: Constante de Planck. Se mide en Julios-segundo ($J\cdot s$).

- **(1.35)** $\boxed{\frac{dn_{1}}{dt}=-B_{12}\rho n_{1}}$ Absorción estimulada (ecuaciones de tasa de Einstein).
    - $\frac{dn_1}{dt}$: Tasa de variación de la población en el nivel inferior respecto al tiempo.
    - $B_{12}$: Coeficiente de probabilidad de absorción estimulada de Einstein.
    - $\rho$: Densidad de energía de la radiación incidente. Se mide en Julios por metro cúbico por Hercio ($J/(m^3\cdot Hz)$).
    - $n_1$: Número de átomos en el estado fundamental.

- **(1.36)** $\boxed{\frac{dn_{2}}{dt}=-B_{21}\rho n_{2}}$ Emisión estimulada (ecuaciones de tasa de Einstein).
    - $\frac{dn_2}{dt}$: Tasa de variación de la población en el nivel superior debido a estímulos externos.
    - $B_{21}$: Coeficiente de probabilidad de emisión estimulada de Einstein.
    - $\rho$: Densidad de energía de la radiación incidente.
    - $n_2$: Número de átomos en el estado excitado.

- **(1.37)** $\boxed{\frac{dn_{2}}{dt}=-A_{21}n_{2}}$ Emisión espontánea (ecuaciones de tasa de Einstein).
    - $\frac{dn_2}{dt}$: Tasa de variación de la población en el nivel superior por decaimiento natural.
    - $A_{21}$: Coeficiente de probabilidad de emisión espontánea de Einstein.
    - $n_2$: Número de átomos en el estado excitado.

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


## 3. Electrostática

### Fórmulas

- **(3.1)** $\boxed{\vec{E}=\frac{1}{4\pi\epsilon_{0}}q^{\prime}\frac{(\vec{r}-\vec{r^{\prime}})}{||\vec{r}-\vec{r}^{\prime}||^{3}} = \frac{1}{4\pi\epsilon_{0}}q^{\prime}\frac{1}{||\vec{r}-\vec{r}^{\prime}||^{2}}\hat{u}_{\vec{r}-\vec{r'}}}$ Campo eléctrico generado por una carga puntual $q'$ en un punto del espacio.
    - $\vec{E}$: Vector campo eléctrico. Se mide en Voltios por metro ($V/m$) o Newtons por Culombio ($N/C$).
    - $\epsilon_{0}$: Permitividad eléctrica del vacío. Constante física cuyo valor es $8,854\cdot10^{-12}\,\text{F/m}$. Describe la resistencia que ofrece el vacío a la formación de un campo eléctrico.
    - $q'$: Carga eléctrica puntual que genera el campo. Se mide en Culombios (C).
    - $r$: Vector posición del punto donde se evalúa el campo eléctrico. Se mide en metros (m).
    - $r'$: Vector posición de la carga generadora $q'$. Se mide en metros (m).
    - $||r -  r'||$: Distancia en línea recta entre la carga generadora y el punto de evaluación. Se mide en metros (m).
    - $\hat{u}_{r -  r'}$: Vector unitario que apunta desde la carga $q'$ hacia el punto de evaluación $r$. Es adimensional.

- **(3.2)** $\boxed{\vec{E} = \int \mathrm{d}\vec{E} = \int \frac{1}{4\pi\epsilon_{0}} \mathrm{d}q' \frac{(\vec{r} - \vec{r}')}{\vert{}\vert{}\vec{r} - \vec{r}'\vert{}\vert{}^3}}$ Campo eléctrico generado por una distribución continua de carga (expresado con el vector diferencia de posiciones).
    - $\mathrm{d}q'$: Diferencial de carga (una porción infinitesimal de la distribución de carga). Se mide en Culombios ($C$).
    - $\mathrm{d} \vec{E}$: Diferencial de campo eléctrico. Cada una de esas cargas pequeñísimas $\mathrm{d}q'$ genera su propio "mini" campo eléctrico en el espacio. Dicho campo diminuto es $\mathrm{d}\vec{E}$. Se mide en Voltios por metro ($V/m$) o Newtons por Culombio ($N/C$).
    - El resto es igual que en la fórmula (3.1).

- **(3.3)** $\boxed{\vec{E} = \int \mathrm{d}\vec{E} = \int \frac{1}{4\pi\epsilon_{0}} \mathrm{d}q' \frac{\hat{u}_{\vec{r}-\vec{r}'}}{\vert{}\vert{}\vec{r} - \vec{r}'\vert{}\vert{}^2}}$ Campo eléctrico generado por una distribución continua de carga (expresado con el vector unitario direccional).
    - Los símbolos tienen exactamente el mismo significado que en las fórmulas (3.1) y (3.2).

- **(3.4)** $\boxed{\mathrm{d}q' = \lambda \mathrm{d}l}$ Relación del diferencial de carga para una distribución **lineal** (1D).
    - $\mathrm{d}q'$: Diferencial de carga. Se mide en Culombios ($C$).
    - $\lambda$: Densidad lineal de carga. Cantidad de carga por unidad de longitud. Se mide en Culombios por metro ($C/m$).
    - $\mathrm{d}l$: Diferencial de longitud. Se mide en metros ($m$).

- **(3.5)** $\boxed{\mathrm{d}q' = \sigma \mathrm{d}S}$ Relación del diferencial de carga para una distribución **superficial** (2D).
    - $\mathrm{d}q'$: Diferencial de carga. Se mide en Culombios ($C$).
    - $\sigma$: Densidad superficial de carga. Cantidad de carga por unidad de área. Se mide en Culombios por metro cuadrado ($C/m^2$).
    - $\mathrm{d}S$: Diferencial de superficie o área. Se mide en metros cuadrados ($m^2$).

- **(3.6)** $\boxed{\mathrm{d}q' = \rho \mathrm{d}V}$ Relación del diferencial de carga para una distribución **volumétrica** (3D).
    - $\mathrm{d}q'$: Diferencial de carga. Se mide en Culombios ($C$).
    - $\rho$: Densidad volumétrica de carga. Cantidad de carga por unidad de volumen. Se mide en Culombios por metro cúbico ($C/m^3$).
    - $\mathrm{d}V$: Diferencial de volumen. Se mide en metros cúbicos ($m^3$).

- **(3.7)** $\boxed{\vec{F}_e = \frac{1}{4\pi\epsilon_{0}} \frac{q q'}{d^2} \hat{u}_{\vec{r}-\vec{r}'} = \frac{1}{4\pi\epsilon_{0}} \frac{q q'}{d^2} \frac{(\vec{r} - \vec{r}')}{\vert{}\vert{}\vec{r} - \vec{r}'\vert{}\vert{}}}$ Ley de Coulomb. Fuerza electrostática entre dos cargas puntuales.
    - $\vec{F}_e$: Vector fuerza electrostática. Se mide en Newtons ($N$).
    - $\epsilon_{0}$: Permitividad eléctrica del vacío. Constante física cuyo valor es $8,854\cdot10^{-12}\,\text{F/m}$. Describe la resistencia que ofrece el vacío a la formación de un campo eléctrico.
    - $q, q'$: Valor de las cargas eléctricas que interactúan. Se miden en Culombios ($C$).
    - $d$: Distancia que separa a ambas cargas (equivalente a $\vert{}\vert{}\vec{r} - \vec{r}'\vert{}\vert{}$). Se mide en metros ($m$).
    - $\hat{u}_{\vec{r}-\vec{r}'}$: Vector unitario en la dirección que une ambas cargas.

- **(3.8)** $\boxed{\vec{F}_e = q \vec{E}(\vec{r})}$ Fuerza electrostática que experimenta una carga $q$ al situarse en un campo eléctrico externo $\vec{E}$.
    - $\vec{F}_e$: Vector fuerza electrostática. Se mide en Newtons ($N$).
    - $q$: Carga eléctrica puntual que interactúa con el campo electromagnético. Se mide en Culombios ($C$).
    - $\vec{E}(\vec{r})$: Vector campo eléctrico en la posición $\vec{r}$ donde se encuentra la carga. Se mide en Voltios por metro ($V/m$) o Newtons por Culombio ($N/C$).

- **(3.9)** $\boxed{\vec{F} = \int_\Gamma \mathrm{d}q' \vec{E}(\vec{r}')}$ Fuerza electrostática total sobre una distribución continua de carga inmersa en un campo eléctrico.
    - $\vec{F}$: Vector fuerza neta total. Se mide en Newtons ($N$).
    - $\mathrm{d}q'$: Diferencial de carga de la distribución. Se mide en Culombios ($C$).
    - $\vec{E}(\vec{r}')$: Vector campo eléctrico evaluado en la posición del diferencial de carga. Se mide en Voltios por metro ($V/m$) o Newtons por Culombio ($N/C$).

- **(3.10)** $\boxed{\phi_E = \int_S \vec{E} \cdot \mathrm{d}\vec{S}}$ Flujo del campo eléctrico a través de una superficie abierta o cerrada $S$.
    - $\phi_E$: Flujo eléctrico. Representa la "cantidad" de líneas de campo que atraviesan una superficie. Se mide en Voltios-metro ($V\cdot m$) o Newtons-metro cuadrado por Culombio ($N\cdot m^2/C$).
    - $\vec{E}$: Vector campo eléctrico. Se mide en Voltios por metro ($V/m$).
    - $\mathrm{d}\vec{S}$: Vector diferencial de superficie (su dirección es normal a la superficie en ese punto). Se mide en metros cuadrados ($m^2$).

- **(3.11)** $\boxed{\oint_S \vec{E} \cdot \mathrm{d}\vec{S} = \frac{Q_{int}}{\epsilon_0}}$ Ley de Gauss. El flujo eléctrico total a través de una superficie cerrada es proporcional a la carga neta encerrada.
    - $\oint_S \vec{E} \cdot \mathrm{d}\vec{S}$: Flujo eléctrico a través de una superficie cerrada $S$. Se mide en Voltios-metro ($V\cdot m$).
    - $Q_{int}$: Carga eléctrica neta encerrada dentro de la superficie cerrada $S$. Se mide en Culombios ($C$).
    - $\epsilon_{0}$: Permitividad eléctrica del vacío. Constante física cuyo valor es $8,854\cdot10^{-12}\,\text{F/m}$. Describe la resistencia que ofrece el vacío a la formación de un campo eléctrico.

- **(3.12)** $\boxed{V(\vec{r}) = \frac{1}{4\pi\epsilon_0} q' \frac{1}{\vert{}\vert{}\vec{r} - \vec{r}'\vert{}\vert{}}}$ Potencial eléctrico generado por una carga puntual $q'$ en un punto $\vec{r}$.
    - $V(\vec{r})$: Potencial eléctrico (voltaje) en la posición $\vec{r}$. Se mide en Voltios ($V$).
    - $\epsilon_{0}$: Permitividad eléctrica del vacío. Constante física cuyo valor es $8,854\cdot10^{-12}\,\text{F/m}$. Describe la resistencia que ofrece el vacío a la formación de un campo eléctrico.
    - $q'$: Carga eléctrica puntual generadora. Se mide en Culombios ($C$).
    - $\vert{}\vert{}\vec{r} - \vec{r}'\vert{}\vert{}$: Distancia entre la carga y el punto de evaluación. Se mide en metros ($m$).

- **(3.13)** $\boxed{V(\vec{r}) = \int_\Omega \frac{1}{4\pi\epsilon_0} \mathrm{d}q' \frac{1}{\vert{}\vert{}\vec{r} - \vec{r}'\vert{}\vert{}}}$ Potencial eléctrico generado por una distribución continua de carga.
    - $V(\vec{r})$: Potencial eléctrico total. Se mide en Voltios ($V$).
    - $\mathrm{d}q'$: Diferencial de carga de la distribución. Se mide en Culombios ($C$).
    - $\vert{}\vert{}\vec{r} - \vec{r}'\vert{}\vert{}$: Distancia entre el diferencial de carga y el punto evaluado. Se mide en metros ($m$).

- **(3.14)** $\boxed{U = \frac{1}{4\pi\epsilon_0} \frac{1}{2} \sum_{i,j=1 (i\neq j)}^N \frac{q_i q_j}{d_{ij}}}$ Energía potencial electrostática almacenada en un sistema de $N$ cargas puntuales.
    - $U$: Energía potencial electrostática. Se mide en Julios ($J$).
    - $\epsilon_{0}$: Permitividad eléctrica del vacío. Constante física cuyo valor es $8,854\cdot10^{-12}\,\text{F/m}$. Describe la resistencia que ofrece el vacío a la formación de un campo eléctrico.
    - $q_i, q_j$: Valor de los distintos pares de cargas del sistema. Se miden en Culombios ($C$).
    - $d_{ij}$: Distancia de separación entre la carga $i$ y la carga $j$. Se mide en metros ($m$).

- **(3.15)** $\boxed{U = \frac{1}{2} \int_\Omega \mathrm{d}q' V(\vec{r}') = \frac{\epsilon_0}{2} \int_T \vert{}\vert{}\vec{E}(\vec{r})\vert{}\vert{}^2 \mathrm{d}^3\vec{r}}$ Relaciones de la energía potencial electrostática para distribuciones continuas y energía almacenada en el propio campo eléctrico.
    - $U$: Energía potencial electrostática total. Se mide en Julios ($J$).
    - $\mathrm{d}q'$: Diferencial de carga. Se mide en Culombios ($C$).
    - $V(\vec{r}')$: Potencial eléctrico en la posición del diferencial de carga. Se mide en Voltios ($V$).
    - $\epsilon_{0}$: Permitividad eléctrica del vacío. Constante física cuyo valor es $8,854\cdot10^{-12}\,\text{F/m}$. Describe la resistencia que ofrece el vacío a la formación de un campo eléctrico.
    - $\vert{}\vert{}\vec{E}(\vec{r})\vert{}\vert{}$: Módulo del campo eléctrico en cada punto del espacio. Se mide en Voltios por metro ($V/m$).
    - $\mathrm{d}^3\vec{r}$: Elemento diferencial de volumen en el espacio tridimensional (equivalente a $\mathrm{d}V$). Se mide en metros cúbicos ($m^3$).

- **(3.16)** $\boxed{E = \frac{\sigma}{\epsilon_0}}$ Magnitud del campo eléctrico en las proximidades de la superficie de un conductor ideal en equilibrio o entre las placas de un condensador plano.
    - $E$: Módulo del campo eléctrico. Se mide en Voltios por metro ($V/m$) o Newtons por Culombio ($N/C$).
    - $\sigma$: Densidad superficial de carga. Se mide en Culombios por metro cuadrado ($C/m^2$).
    - $\epsilon_{0}$: Permitividad eléctrica del vacío. Constante física cuyo valor es $8,854\cdot10^{-12}\,\text{F/m}$. Describe la resistencia que ofrece el vacío a la formación de un campo eléctrico.

- **(3.17)** $\boxed{\vert{}\Delta V\vert{} = \frac{\sigma}{\epsilon_0} d = \frac{Q}{\epsilon_0 S} d}$ Diferencia de potencial (voltaje) entre dos placas plano-paralelas.
    - $\vert{}\Delta V\vert{}$: Valor absoluto de la diferencia de potencial o caída de tensión. Se mide en Voltios ($V$).
    - $\sigma$: Densidad superficial de carga en las placas. Se mide en Culombios por metro cuadrado ($C/m^2$).
    - $\epsilon_{0}$: Permitividad eléctrica del vacío. Constante física cuyo valor es $8,854\cdot10^{-12}\,\text{F/m}$. Describe la resistencia que ofrece el vacío a la formación de un campo eléctrico.
    - $d$: Distancia de separación entre las placas. Se mide en metros ($m$).
    - $Q$: Carga total almacenada en una de las placas. Se mide en Culombios ($C$).
    - $S$: Área de la superficie de las placas. Se mide en metros cuadrados ($m^2$).

- **(3.18)** $\boxed{C = \frac{Q}{\vert{}\Delta V\vert{}} = \frac{\epsilon_0}{d} S}$ Capacidad de un condensador de placas plano-paralelas ideal.
    - $C$: Capacidad eléctrica (capacitancia). Se mide en Faradios ($F$).
    - $Q$: Carga eléctrica almacenada en el condensador. Se mide en Culombios ($C$).
    - $\vert{}\Delta V\vert{}$: Diferencia de potencial entre las placas. Se mide en Voltios ($V$).
    - $\epsilon_{0}$: Permitividad eléctrica del vacío. Constante física cuyo valor es $8,854\cdot10^{-12}\,\text{F/m}$. Describe la resistencia que ofrece el vacío a la formación de un campo eléctrico.
    - $d$: Distancia de separación entre las placas. Se mide en metros ($m$).
    - $S$: Área de la superficie de una placa. Se mide en metros cuadrados ($m^2$).

## 1. Óptica y fotónica

### Ondas

- **(1.1)** $\boxed{f(x,t)=A\,\sin(kx-\omega t+\phi)}$ Función de la propagación de una onda armónica en el espacio $x$ y en el tiempo $t$.
    - $f(x,t)$: Función de onda. Representa el desplazamiento de la onda en una posición $x$ y un instante de tiempo $t$. Se mide en metros ($m$).
    - $A$: Amplitud. Es el valor máximo de la oscilación. Indica la intensidad; es decir, lo lejos que llega la onda desde su punto de equilibrio. Se mide en metros ($m$).
    - $k$: Número de onda. Indica cómo de rápido cambia la onda en el espacio. Se relaciona con la longitud de onda ($\lambda$) mediante la fórmula $k = \frac{2\pi}{\lambda}$. Se mide en radianes por metro ($rad/m$).
    - $x$: Posición espacial. Es la coordenada donde se evalúa la onda. Se mide en metros ($m$).
    - $\omega$: Frecuencia angular. Indica cómo de rápido cambia la onda en el tiempo. Se relaciona con el periodo ($T$) y la frecuencia ($f$) mediante $\omega = \frac{2\pi}{T} = 2\pi f$. Se mide en radianes por segundo ($rad/s$).
    - $t$: Tiempo. Es el instante en el que se evalúa la onda. Se mide en segundos ($s$).
    - $\phi$: Constante de fase. Determina el estado inicial de la oscilación en el tiempo $t=0$ y la posición $x=0$. Indica el "desplazamiento" inicial de la onda. Se mide en radianes ($rad$).

- **(1.2)** $\boxed{\lambda=\frac{2\pi}{k}}$ Longitud de onda. Distancia entre dos puntos consecutivos que están en la misma fase.
    - $\lambda$: Longitud de onda. Distancia entre dos puntos consecutivos que están en la misma fase. Se mide en metros ($m$).
    - $k$: Número de onda. Indica cómo de rápido cambia la onda en el espacio. Se relaciona con la longitud de onda ($\lambda$) mediante la fórmula $k = \frac{2\pi}{\lambda}$. Se mide en radianes por metro ($rad/m$).

- **(1.3a)** $\boxed{T=\frac{1}{f}}$ Periodo de la onda a partir de la frecuencia. Tiempo que tarda en completarse un ciclo.
    - $T$: Periodo de la onda. Tiempo que tarda en completarse un ciclo. Se mide en segundos ($s$).
    - $f$: Frecuencia de onda. Número de ciclos por segundo. Se mide en Hercios ($Hz$).

- **(1.3b)** $\boxed{T=\frac{2\pi}{\omega}}$ Periodo de la onda a partir de la frecuencia angular. Tiempo que tarda en completarse un ciclo.
    - $T$: Periodo de la onda. Tiempo que tarda en completarse un ciclo. Se mide en segundos ($s$).
    - $\omega$: Frecuencia angular. Indica cómo de rápido cambia la onda en el tiempo. Se relaciona con el periodo ($T$) y la frecuencia ($f$) mediante $\omega = \frac{2\pi}{T} = 2\pi f$. Se mide en radianes por segundo ($rad/s$).

- **(1.4a)** $\boxed{v=\lambda f}$ Velocidad de propagación de la onda a partir de la longitud de onda y la frecuencia.
    - $v$: Velocidad de propagación de la onda. Rapidez con la que se desplaza la onda a través del medio. Se mide en metros por segundo ($m/s$).
    - $\lambda$: Longitud de onda. Distancia entre dos puntos consecutivos que están en la misma fase. Se mide en metros ($m$).
    - $f$: Frecuencia de onda. Número de ciclos por segundo. Se mide en Hercios ($Hz$).

- **(1.4b)** $\boxed{v=\frac{\omega}{k}}$ Velocidad de propagación de la onda a partir de la frecuencia angular y el número de onda.
    - $v$: Velocidad de propagación de la onda. Rapidez con la que se desplaza la onda a través del medio. Se mide en metros por segundo ($m/s$).
    - $\omega$: Frecuencia angular. Indica cómo de rápido cambia la onda en el tiempo. Se relaciona con el periodo ($T$) y la frecuencia ($f$) mediante $\omega = \frac{2\pi}{T} = 2\pi f$. Se mide en radianes por segundo ($rad/s$).
    - $k$: Número de onda. Indica cómo de rápido cambia la onda en el espacio. Se relaciona con la longitud de onda ($\lambda$) mediante la fórmula $k = \frac{2\pi}{\lambda}$. Se mide en radianes por metro ($rad/m$).

### Óptica geométrica

- **(1.5)** $\boxed{n=\frac{v_{0}}{v}}$ Índice de refracción. Es una medida que indica cuánto se reduce la velocidad de la luz al pasar del vacío a un medio material.
    - $n$: Índice de refracción. Es una medida de cuánto reduce la luz su velocidad en un medio. Es adimensional (no tiene unidades).
    - $v_0$: Velocidad de la luz en el vacío ($\approx 3 \times 10^8 \, m/s$). Se mide en metros por segundo ($m/s$).
    - $v$: Velocidad de propagación de la luz en el medio material. Se mide en metros por segundo ($m/s$).

- **(1.6)** $\boxed{n_{1}\sin\,\theta_{1}=n_{2}\sin\,\theta_{2}}$ Ley de Snell para la refracción. Relaciona los ángulos de incidencia y refracción con los índices de refracción de los medios al atravesar una superficie de separación.
    - $n_1$: Índice de refracción del medio 1 (medio de incidencia). Es una medida de cuánto reduce la luz su velocidad en el primer medio. Es adimensional.
    - $\theta_1$: Ángulo de incidencia. Es el ángulo formado entre el rayo de luz incidente y la normal (línea perpendicular a la superficie de separación). Se mide en grados ($^\circ$) o radianes ($rad$).
    - $n_2$: Índice de refracción del medio 2 (medio de refracción). Es una medida de cuánto reduce la luz su velocidad en el segundo medio. Es adimensional.
    - $\theta_2$: Ángulo de refracción. Ángulo formado entre el rayo refractado y la normal. Se mide en grados ($^\circ$) o radianes ($rad$).

    Conceptos clave para interpretar esta fórmula:
    - La Normal: Los ángulos $\theta_1$ y $\theta_2$ se miden respecto a la **línea perpendicular a la superficie de contacto**, no respecto a la superficie de contacto.
    - Si $n_2 > n_1$, la luz se acerca a la normal; el rayo "se dobla" hacia adentro.
    - Si $n_2 < n_1$, la luz se aleja de la normal; el rayo "se dobla" hacia afuera.

- **(1.7)** $\boxed{\sin\,\theta_{1}=\sqrt{(\frac{n_{2}}{n_{1}})^{2}-(\frac{n_{3}}{n_{1}})^{2}}}$ Ángulo límite / apertura numérica. Determina el cono de aceptación o el ángulo máximo de incidencia para que la luz quede confinada mediante reflexión interna total (por ejemplo, dentro de una fibra óptica).
    - $\theta_1$: Ángulo límite o de apertura (ángulo de aceptación). Es el ángulo máximo de incidencia para el cual la luz se transmitirá de forma confinada. Se mide en grados ($^\circ$) o radianes ($rad$).
    - $n_1$: Índice de refracción del medio desde el cual incide la luz (ej. núcleo de fibra óptica). Es adimensional.
    - $n_2$: Índice de refracción del segundo medio (ej. revestimiento). Es adimensional.
    - $n_3$: Índice de refracción del medio externo (ej. aire). Es adimensional.

### Óptica ondulatoria y electromagnetismo

- **(1.8)** $\boxed{\vert{}\vec{E}\vert{}=v_{0}\vert{}\vec{B}\vert{}}$ Relación de amplitudes entre campo eléctrico y magnético.
    - $\vert{}\vec{E}\vert{}$: Módulo del campo eléctrico instantáneo. Se mide en Voltios por metro ($V/m$) o Newtons por Culombio ($N/C$).
    - $v_0$: Velocidad de propagación de la onda en el medio. Si la onda viaja por el vacío, $v_0$ es exactamente igual a $c$ (la velocidad de la luz, $\approx 3 \times 10^8 \, m/s$). Se mide en metros por segundo ($m/s$).
    - $\vert{}\vec{B}\vert{}$: Módulo del campo magnético instantáneo. Se mide en Teslas ($T$).

- **(1.9)** $\boxed{v_{0}=\frac{1}{\sqrt{\mu_{0}\epsilon_{0}}}}$ Velocidad de la onda electromagnética en el vacío.
    - $v_0$: Velocidad de propagación de la onda en el medio. Si la onda viaja por el vacío, $v_0$ es exactamente igual a $c$ (la velocidad de la luz, $\approx 3 \times 10^8 \, m/s$). Se mide en metros por segundo ($m/s$).
    - $\mu_0$: Permeabilidad magnética del vacío. Constante física que indica cómo el vacío responde a un campo magnético. Su valor es $4\pi \times 10^{-7} \, T\cdot m/A$.
    - $\epsilon_{0}$: Permitividad eléctrica del vacío. Constante física cuyo valor es $8,854\cdot10^{-12}\,\text{F/m}$. Describe la resistencia que ofrece el vacío a la formación de un campo eléctrico.

- **(1.10)** $\boxed{\vec{E}(\vec{r},t)=\vec{E}_{0}\sin(\vec{k}\vec{r}-\omega t+\phi)}$ Expresión vectorial del campo eléctrico.
    - $\vec{E}(\vec{r},t)$: Campo eléctrico vectorial en función de la posición y el tiempo. Se mide en Voltios por metro ($V/m$) o Newtons por Culombio ($N/C$).
    - $\vec{E}_0$: Vector amplitud. Indica la dirección de oscilación del campo eléctrico y su valor máximo. Se mide en Voltios por metro ($V/m$) o Newtons por Culombio ($N/C$).
    - $\vec{k}$: Vector número de onda. Indica la dirección de propagación de la onda. Se mide en radianes por metro ($rad/m$).
    - $\vec{r}$: Vector posición espacial $(x,y,z)$. Indica el punto del espacio donde se evalúa el campo. Se mide en metros ($m$).
    - $\omega$: Frecuencia angular. Indica cómo de rápido cambia la onda en el tiempo. Se mide en radianes por segundo ($rad/s$).
    - $t$: Tiempo. Es el instante en el que se evalúa la onda. Se mide en segundos ($s$).
    - $\phi$: Constante de fase. Determina el estado inicial de la oscilación. Se mide en radianes ($rad$).

- **(1.11)** $\boxed{u_{e}=\frac{1}{2}\epsilon_{0}E^{2}}$ Densidad de energía eléctrica instantánea.
    - $u_e$: Densidad de energía eléctrica instantánea. Energía almacenada por el campo eléctrico en un volumen dado. Se mide en Julios por metro cúbico ($J/m^3$).
    - $\epsilon_{0}$: Permitividad eléctrica del vacío. Constante física cuyo valor es $8,854\cdot10^{-12}\,\text{F/m}$. Describe la resistencia que ofrece el vacío a la formación de un campo eléctrico.
    - $E$: Módulo del campo eléctrico instantáneo. Se mide en Voltios por metro ($V/m$) o Newtons por Culombio ($N/C$).

- **(1.12)** $\boxed{u_{m}=\frac{B^{2}}{2\mu_{0}}}$ Densidad de energía magnética instantánea.
    - $u_m$: Densidad de energía magnética instantánea. Energía almacenada por el campo magnético en un volumen dado. Se mide en Julios por metro cúbico ($J/m^3$).
    - $B$: Módulo del campo magnético instantáneo. Se mide en Teslas ($T$).
    - $\mu_0$: Permeabilidad magnética del vacío. Constante física que indica cómo el vacío responde a un campo magnético. Su valor es $4\pi \times 10^{-7} \, T\cdot m/A$.

- **(1.13)** $\boxed{u=\epsilon_{0}E^{2}}$ Densidad de energía total instantánea.
    - $u$: Densidad de energía total instantánea. Suma de las energías eléctrica y magnética. Se mide en Julios por metro cúbico ($J/m^3$).
    - $\epsilon_{0}$: Permitividad eléctrica del vacío. Constante física cuyo valor es $8,854\cdot10^{-12}\,\text{F/m}$. Describe la resistencia que ofrece el vacío a la formación de un campo eléctrico.
    - $E$: Módulo del campo eléctrico instantáneo. Se mide en Voltios por metro ($V/m$) o Newtons por Culombio ($N/C$).

- **(1.14)** $\boxed{\langle u\rangle=\frac{E_{0}B_{0}}{2\mu_{0}v_{0}}}$ Densidad de energía media. Calcula cuánta energía electromagnética hay almacenada, en promedio, en un metro cúbico de espacio mientras la onda viaja a través de él.
    - $\langle u\rangle$: Densidad de energía media. Se mide en Julios por metro cúbico ($J/m^3$). Los corchetes angulares $\langle \rangle$ en física denotan un valor promedio.
    - $E_0$: Amplitud del campo eléctrico. Es el valor máximo que alcanza el campo eléctrico de la onda. Se mide en Voltios por metro ($V/m$) o Newtons por Culombio ($N/C$).
    - $B_0$: Amplitud del campo magnético. Es el valor máximo que alcanza el campo magnético de la onda. Se mide en Teslas ($T$).
    - $\mu_0$: Permeabilidad magnética del vacío. Constante física que indica cómo el vacío responde a un campo magnético. Su valor es $4\pi \times 10^{-7} \, T\cdot m/A$.
    - $v_0$: Velocidad de propagación de la onda en el medio. Si la onda viaja por el vacío, $v_0$ es exactamente igual a $c$ (la velocidad de la luz, $\approx 3 \times 10^8 \, m/s$). Se mide en metros por segundo ($m/s$).

- **(1.15)** $\boxed{I=\langle u\rangle v_{0}}$ Relación entre intensidad y densidad. La intensidad de una onda es su densidad de energía multiplicada por la velocidad a la que se mueve ese volumen.
    - $I$: Intensidad de la onda. Potencia promedio transferida a través de una unidad de área perpendicular a la dirección de propagación. Se mide en Vatios por metro cuadrado ($W/m^2$).
    - $\langle u\rangle$: Densidad de energía media. Se mide en Julios por metro cúbico ($J/m^3$). Los corchetes angulares $\langle \rangle$ en física denotan un valor promedio.
    - $v_0$: Velocidad de propagación de la onda en el medio. Si la onda viaja por el vacío, $v_0$ es exactamente igual a $c$ (la velocidad de la luz, $\approx 3 \times 10^8 \, m/s$). Se mide en metros por segundo ($m/s$).

- **(1.16)** $\boxed{I=\frac{E_{0}B_{0}}{2\mu_{0}}}$ Intensidad a partir de los campos. Es la forma más directa de calcular la intensidad si se conocen los valores máximos de los campos eléctrico y magnético.
    - $I$: Intensidad de la onda. Potencia promedio transferida a través de una unidad de área perpendicular a la dirección de propagación. Se mide en Vatios por metro cuadrado ($W/m^2$).
    - $E_0$: Amplitud del campo eléctrico. Es el valor máximo que alcanza el campo eléctrico de la onda. Se mide en Voltios por metro ($V/m$) o Newtons por Culombio ($N/C$).
    - $B_0$: Amplitud del campo magnético. Es el valor máximo que alcanza el campo magnético de la onda. Se mide en Teslas ($T$).
    - $\mu_0$: Permeabilidad magnética del vacío. Constante física que indica cómo el vacío responde a un campo magnético. Su valor es $4\pi \times 10^{-7} \, T\cdot m/A$.

- **(1.17)** $\boxed{\vec{S}=\frac{\vec{E}\times\vec{B}}{\mu_{0}}}$ Vector de Poynting.
    - $\vec{S}$: Vector de Poynting. Indica la dirección de propagación de la energía y su magnitud es la intensidad instantánea. Es perpendicular tanto a $\vec{E}$ como a $\vec{B}$. Se mide en Vatios por metro cuadrado ($W/m^2$).
    - $\vec{E}$: Vector campo eléctrico instantáneo. Se mide en Voltios por metro ($V/m$) o Newtons por Culombio ($N/C$).
    - $\vec{B}$: Vector campo magnético instantáneo. Se mide en Teslas ($T$).
    - $\mu_0$: Permeabilidad magnética del vacío. Constante física que indica cómo el vacío responde a un campo magnético. Su valor es $4\pi \times 10^{-7} \, T\cdot m/A$.

- **(1.18)** $\boxed{P_{r}=\frac{I}{v_{0}}}$ Presión de radiación. Fuerza por unidad de área ejercida por la onda al chocar contra una superficie.
    - $P_r$: Presión de radiación. Fuerza por unidad de área ejercida por la onda al chocar contra una superficie. Se mide en Pascales ($Pa$) o Newtons por metro cuadrado ($N/m^2$).
    - $I$: Intensidad de la onda. Potencia promedio transferida a través de una unidad de área perpendicular a la dirección de propagación. Se mide en Vatios por metro cuadrado ($W/m^2$).
    - $v_0$: Velocidad de propagación de la onda en el medio. Si la onda viaja por el vacío, $v_0$ es exactamente igual a $c$ (la velocidad de la luz, $\approx 3 \times 10^8 \, m/s$). Se mide en metros por segundo ($m/s$).

### Difracción e interferencia

- **(1.19)** $\boxed{I=I_{1}+I_{2}+2\sqrt{I_{1}I_{2}}\cos\,\delta}$ Intensidad resultante por interferencia de dos ondas.
    - $I$: Intensidad de la onda. Potencia promedio transferida a través de una unidad de área perpendicular a la dirección de propagación. Se mide en Vatios por metro cuadrado ($W/m^2$).
    - $I_1, I_2$: Intensidad de la onda 1 y 2. Potencia promedio transferida a través de una unidad de área perpendicular a la dirección de propagación. Se mide en Vatios por metro cuadrado ($W/m^2$).
    - $\delta$: Diferencia de fase (desfase) entre las dos ondas cuando se superponen. Se mide en radianes ($rad$).

- **(1.20)** $\boxed{\delta=k(r_{1}-r_{2})=k\Delta r}$ Desfase en función de la diferencia de caminos.
    - $\delta$: Diferencia de fase (desfase). Se mide en radianes ($rad$).
    - $k$: Número de onda. Indica cómo de rápido cambia la onda en el espacio. Se mide en radianes por metro ($rad/m$).
    - $r_1, r_2$: Distancia geométrica recorrida por la onda 1 y 2 hasta el punto de encuentro. Se mide en metros ($m$).
    - $\Delta r$: Diferencia geométrica de las distancias recorridas por ambas ondas (diferencia de camino óptico). Se mide en metros ($m$).

- **(1.21)** $\boxed{k=\frac{2\pi}{\lambda}}$ Número de onda.
    - $k$: Número de onda. Indica cómo de rápido cambia la onda en el espacio. Se mide en radianes por metro ($rad/m$).
    - $\lambda$: Longitud de onda. Distancia entre dos puntos consecutivos que están en la misma fase. Se mide en metros ($m$).

- **(1.22)** $\boxed{\delta=\frac{2\pi}{\lambda}\Delta r}$ Desfase explícito según la longitud de onda.
    - $\delta$: Diferencia de fase (desfase). Se mide en radianes ($rad$).
    - $\lambda$: Longitud de onda. Distancia entre dos puntos consecutivos que están en la misma fase. Se mide en metros ($m$).
    - $\Delta r$: Diferencia geométrica de las distancias recorridas por ambas ondas. Se mide en metros ($m$).

### Doble rendija

- **(1.23)** $\boxed{\Delta r=d\sin\,\theta}$ Diferencia de caminos en el experimento de doble rendija de Young.
    - $\Delta r$: Diferencia geométrica de las distancias recorridas por ambas ondas. Se mide en metros ($m$).
    - $d$: Distancia de separación entre las dos rendijas. Se mide en metros ($m$).
    - $\theta$: Ángulo de desviación respecto a la franja central. Se mide en grados ($^\circ$) o radianes ($rad$).

- **(1.24)** $\boxed{\delta=\frac{2\pi}{\lambda}d\sin\,\theta}$ Desfase en función de las variables de la doble rendija.
    - $\delta$: Diferencia de fase (desfase). Se mide en radianes ($rad$).
    - $\lambda$: Longitud de onda. Se mide en metros ($m$).
    - $d$: Distancia de separación entre las dos rendijas. Se mide en metros ($m$).
    - $\theta$: Ángulo de desviación respecto a la franja central. Se mide en grados ($^\circ$) o radianes ($rad$).

- **(1.25)** $\boxed{d\sin\,\theta=m\lambda, \quad m=0,1,2,3\dots}$ Condición de Máximos (interferencia constructiva).
    - $d$: Distancia de separación entre las dos rendijas. Se mide en metros ($m$).
    - $\theta$: Ángulo de desviación respecto a la franja central. Se mide en grados ($^\circ$) o radianes ($rad$).
    - $m$: Orden de interferencia. Es un número entero utilizado para ubicar las franjas brillantes. Es adimensional.
    - $\lambda$: Longitud de onda. Se mide en metros ($m$).

- **(1.26)** $\boxed{d\sin\,\theta=(m-1/2)\lambda, \quad m=1,2,3\dots}$ Condición de Mínimos (interferencia destructiva).
    - Iguales a la fórmula (1.25), pero $m$ comienza en 1 y representa las franjas oscuras.

- **(1.27)** $\boxed{\tan\,\theta=\frac{y}{L}}$ Relación trigonométrica para proyectar la desviación en una pantalla.
    - $\theta$: Ángulo de desviación. Se mide en grados ($^\circ$) o radianes ($rad$).
    - $y$: Distancia vertical en la pantalla desde la franja central (origen) hasta la franja observada. Se mide en metros ($m$).
    - $L$: Distancia en línea recta desde las rendijas hasta la pantalla. Se mide en metros ($m$).

- **(1.28)** $\boxed{y=m\frac{\lambda L}{d}, \quad m=0,1,2,3\dots}$ Ubicación lineal de los Máximos en la pantalla.
    - $y$: Distancia de la franja brillante al centro. Se mide en metros ($m$).
    - $m$: Orden del máximo. Es adimensional.
    - $\lambda$: Longitud de onda. Se mide en metros ($m$).
    - $L$: Distancia a la pantalla. Se mide en metros ($m$).
    - $d$: Distancia entre rendijas. Se mide en metros ($m$).

- **(1.29)** $\boxed{y=(m-1/2)\frac{\lambda L}{d}, \quad m=1,2,3\dots}$ Ubicación lineal de los Mínimos en la pantalla.
    - $y$: Distancia de la franja oscura al centro. Se mide en metros ($m$).
    - Resto de variables: Idénticas a la fórmula (1.28).

### Única abertura

- **(1.30)** $\boxed{a\sin\,\theta=m\lambda, \quad m=1,2,3\dots}$ Condición de Mínimos de difracción de una rendija simple.
    - $a$: Ancho de la rendija. Se mide en metros ($m$).
    - $\theta$: Ángulo de desviación hacia la zona de oscuridad. Se mide en grados ($^\circ$) o radianes ($rad$).
    - $m$: Orden del mínimo de difracción. Es adimensional.
    - $\lambda$: Longitud de onda. Se mide en metros ($m$).

### Óptica cuántica

- **(1.31)** $\boxed{E=hf}$ Energía de un fotón cuantizado.
    - $E$: Energía del fotón. Se mide en Julios ($J$) o Electrón-voltios ($eV$).
    - $h$: Constante de Planck. Se mide en Julios-segundo ($J\cdot s$).
    - $f$: Frecuencia de la onda. Se mide en Hercios ($Hz$).

- **(1.32)** $\boxed{h=6,626\cdot10^{-34}\,\text{J}\cdot\text{s}}$ Constante de Planck.
    - $h$: Constante fundamental de la física cuántica que relaciona la energía de una partícula con su frecuencia.

- **(1.33)** $\boxed{\lambda=\frac{h}{mv}}$ Longitud de onda de De Broglie para partículas.
    - $\lambda$: Longitud de onda asociada a la partícula. Se mide en metros ($m$).
    - $h$: Constante de Planck. Se mide en Julios-segundo ($J\cdot s$).
    - $m$: Masa de la partícula. Se mide en kilogramos ($kg$).
    - $v$: Velocidad de la partícula. Se mide en metros por segundo ($m/s$).

- **(1.34)** $\boxed{f=\frac{E_{2}-E_{1}}{h}}$ Frecuencia del fotón en un salto cuántico.
    - $f$: Frecuencia del fotón emitido o absorbido. Se mide en Hercios ($Hz$).
    - $E_2$: Energía del estado de mayor energía (excitado). Se mide en Julios ($J$) o Electrón-voltios ($eV$).
    - $E_1$: Energía del estado de menor energía (fundamental). Se mide en Julios ($J$) o Electrón-voltios ($eV$).
    - $h$: Constante de Planck. Se mide en Julios-segundo ($J\cdot s$).

- **(1.35)** $\boxed{\frac{dn_{1}}{dt}=-B_{12}\rho n_{1}}$ Absorción estimulada (ecuaciones de tasa de Einstein).
    - $\frac{dn_1}{dt}$: Tasa de variación de la población en el nivel inferior respecto al tiempo.
    - $B_{12}$: Coeficiente de probabilidad de absorción estimulada de Einstein.
    - $\rho$: Densidad de energía de la radiación incidente. Se mide en Julios por metro cúbico por Hercio ($J/(m^3\cdot Hz)$).
    - $n_1$: Número de átomos en el estado fundamental.

- **(1.36)** $\boxed{\frac{dn_{2}}{dt}=-B_{21}\rho n_{2}}$ Emisión estimulada (ecuaciones de tasa de Einstein).
    - $\frac{dn_2}{dt}$: Tasa de variación de la población en el nivel superior debido a estímulos externos.
    - $B_{21}$: Coeficiente de probabilidad de emisión estimulada de Einstein.
    - $\rho$: Densidad de energía de la radiación incidente.
    - $n_2$: Número de átomos en el estado excitado.

- **(1.37)** $\boxed{\frac{dn_{2}}{dt}=-A_{21}n_{2}}$ Emisión espontánea (ecuaciones de tasa de Einstein).
    - $\frac{dn_2}{dt}$: Tasa de variación de la población en el nivel superior por decaimiento natural.
    - $A_{21}$: Coeficiente de probabilidad de emisión espontánea de Einstein.
    - $n_2$: Número de átomos en el estado excitado.

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

## 3. Electrostática

### Fórmulas

- **(3.1)** $\boxed{\vec{E}=\frac{1}{4\pi\epsilon_{0}}q^{\prime}\frac{(\vec{r}-\vec{r^{\prime}})}{||\vec{r}-\vec{r}^{\prime}||^{3}} = \frac{1}{4\pi\epsilon_{0}}q^{\prime}\frac{1}{||\vec{r}-\vec{r}^{\prime}||^{2}}\hat{u}_{\vec{r}-\vec{r'}}}$ Campo eléctrico generado por una carga puntual $q'$ en un punto del espacio.
    - $\vec{E}$: Vector campo eléctrico. Se mide en Voltios por metro ($V/m$) o Newtons por Culombio ($N/C$).
    - $\epsilon_{0}$: Permitividad eléctrica del vacío. Constante física cuyo valor es $8,854\cdot10^{-12}\,\text{F/m}$. Describe la resistencia que ofrece el vacío a la formación de un campo eléctrico.
    - $q'$: Carga eléctrica puntual que genera el campo. Se mide en Culombios (C).
    - $r$: Vector posición del punto donde se evalúa el campo eléctrico. Se mide en metros (m).
    - $r'$: Vector posición de la carga generadora $q'$. Se mide en metros (m).
    - $||r -  r'||$: Distancia en línea recta entre la carga generadora y el punto de evaluación. Se mide en metros (m).
    - $\hat{u}_{r -  r'}$: Vector unitario que apunta desde la carga $q'$ hacia el punto de evaluación $r$. Es adimensional.

- **(3.2)** $\boxed{\vec{E} = \int \mathrm{d}\vec{E} = \int \frac{1}{4\pi\epsilon_{0}} \mathrm{d}q' \frac{(\vec{r} - \vec{r}')}{\vert{}\vert{}\vec{r} - \vec{r}'\vert{}\vert{}^3}}$ Campo eléctrico generado por una distribución continua de carga (expresado con el vector diferencia de posiciones).
    - $\mathrm{d}q'$: Diferencial de carga (una porción infinitesimal de la distribución de carga). Se mide en Culombios ($C$).
    - $\mathrm{d} \vec{E}$: Diferencial de campo eléctrico. Cada una de esas cargas pequeñísimas $\mathrm{d}q'$ genera su propio "mini" campo eléctrico en el espacio. Dicho campo diminuto es $\mathrm{d}\vec{E}$. Se mide en Voltios por metro ($V/m$) o Newtons por Culombio ($N/C$).
    - El resto es igual que en la fórmula (3.1).

- **(3.3)** $\boxed{\vec{E} = \int \mathrm{d}\vec{E} = \int \frac{1}{4\pi\epsilon_{0}} \mathrm{d}q' \frac{\hat{u}_{\vec{r}-\vec{r}'}}{\vert{}\vert{}\vec{r} - \vec{r}'\vert{}\vert{}^2}}$ Campo eléctrico generado por una distribución continua de carga (expresado con el vector unitario direccional).
    - Los símbolos tienen exactamente el mismo significado que en las fórmulas (3.1) y (3.2).

- **(3.4)** $\boxed{\mathrm{d}q' = \lambda \mathrm{d}l}$ Relación del diferencial de carga para una distribución **lineal** (1D).
    - $\mathrm{d}q'$: Diferencial de carga. Se mide en Culombios ($C$).
    - $\lambda$: Densidad lineal de carga. Cantidad de carga por unidad de longitud. Se mide en Culombios por metro ($C/m$).
    - $\mathrm{d}l$: Diferencial de longitud. Se mide en metros ($m$).

- **(3.5)** $\boxed{\mathrm{d}q' = \sigma \mathrm{d}S}$ Relación del diferencial de carga para una distribución **superficial** (2D).
    - $\mathrm{d}q'$: Diferencial de carga. Se mide en Culombios ($C$).
    - $\sigma$: Densidad superficial de carga. Cantidad de carga por unidad de área. Se mide en Culombios por metro cuadrado ($C/m^2$).
    - $\mathrm{d}S$: Diferencial de superficie o área. Se mide en metros cuadrados ($m^2$).

- **(3.6)** $\boxed{\mathrm{d}q' = \rho \mathrm{d}V}$ Relación del diferencial de carga para una distribución **volumétrica** (3D).
    - $\mathrm{d}q'$: Diferencial de carga. Se mide en Culombios ($C$).
    - $\rho$: Densidad volumétrica de carga. Cantidad de carga por unidad de volumen. Se mide en Culombios por metro cúbico ($C/m^3$).
    - $\mathrm{d}V$: Diferencial de volumen. Se mide en metros cúbicos ($m^3$).

- **(3.7)** $\boxed{\vec{F}_e = \frac{1}{4\pi\epsilon_{0}} \frac{q q'}{d^2} \hat{u}_{\vec{r}-\vec{r}'} = \frac{1}{4\pi\epsilon_{0}} \frac{q q'}{d^2} \frac{(\vec{r} - \vec{r}')}{\vert{}\vert{}\vec{r} - \vec{r}'\vert{}\vert{}}}$ Ley de Coulomb. Fuerza electrostática entre dos cargas puntuales.
    - $\vec{F}_e$: Vector fuerza electrostática. Se mide en Newtons ($N$).
    - $\epsilon_{0}$: Permitividad eléctrica del vacío. Constante física cuyo valor es $8,854\cdot10^{-12}\,\text{F/m}$. Describe la resistencia que ofrece el vacío a la formación de un campo eléctrico.
    - $q, q'$: Valor de las cargas eléctricas que interactúan. Se miden en Culombios ($C$).
    - $d$: Distancia que separa a ambas cargas (equivalente a $\vert{}\vert{}\vec{r} - \vec{r}'\vert{}\vert{}$). Se mide en metros ($m$).
    - $\hat{u}_{\vec{r}-\vec{r}'}$: Vector unitario en la dirección que une ambas cargas.

- **(3.8)** $\boxed{\vec{F}_e = q \vec{E}(\vec{r})}$ Fuerza electrostática que experimenta una carga $q$ al situarse en un campo eléctrico externo $\vec{E}$.
    - $\vec{F}_e$: Vector fuerza electrostática. Se mide en Newtons ($N$).
    - $q$: Carga eléctrica puntual que interactúa con el campo electromagnético. Se mide en Culombios ($C$).
    - $\vec{E}(\vec{r})$: Vector campo eléctrico en la posición $\vec{r}$ donde se encuentra la carga. Se mide en Voltios por metro ($V/m$) o Newtons por Culombio ($N/C$).

- **(3.9)** $\boxed{\vec{F} = \int_\Gamma \mathrm{d}q' \vec{E}(\vec{r}')}$ Fuerza electrostática total sobre una distribución continua de carga inmersa en un campo eléctrico.
    - $\vec{F}$: Vector fuerza neta total. Se mide en Newtons ($N$).
    - $\mathrm{d}q'$: Diferencial de carga de la distribución. Se mide en Culombios ($C$).
    - $\vec{E}(\vec{r}')$: Vector campo eléctrico evaluado en la posición del diferencial de carga. Se mide en Voltios por metro ($V/m$) o Newtons por Culombio ($N/C$).

- **(3.10)** $\boxed{\phi_E = \int_S \vec{E} \cdot \mathrm{d}\vec{S}}$ Flujo del campo eléctrico a través de una superficie abierta o cerrada $S$.
    - $\phi_E$: Flujo eléctrico. Representa la "cantidad" de líneas de campo que atraviesan una superficie. Se mide en Voltios-metro ($V\cdot m$) o Newtons-metro cuadrado por Culombio ($N\cdot m^2/C$).
    - $\vec{E}$: Vector campo eléctrico. Se mide en Voltios por metro ($V/m$).
    - $\mathrm{d}\vec{S}$: Vector diferencial de superficie (su dirección es normal a la superficie en ese punto). Se mide en metros cuadrados ($m^2$).

- **(3.11)** $\boxed{\oint_S \vec{E} \cdot \mathrm{d}\vec{S} = \frac{Q_{int}}{\epsilon_0}}$ Ley de Gauss. El flujo eléctrico total a través de una superficie cerrada es proporcional a la carga neta encerrada.
    - $\oint_S \vec{E} \cdot \mathrm{d}\vec{S}$: Flujo eléctrico a través de una superficie cerrada $S$. Se mide en Voltios-metro ($V\cdot m$).
    - $Q_{int}$: Carga eléctrica neta encerrada dentro de la superficie cerrada $S$. Se mide en Culombios ($C$).
    - $\epsilon_{0}$: Permitividad eléctrica del vacío. Constante física cuyo valor es $8,854\cdot10^{-12}\,\text{F/m}$. Describe la resistencia que ofrece el vacío a la formación de un campo eléctrico.

- **(3.12)** $\boxed{V(\vec{r}) = \frac{1}{4\pi\epsilon_0} q' \frac{1}{\vert{}\vert{}\vec{r} - \vec{r}'\vert{}\vert{}}}$ Potencial eléctrico generado por una carga puntual $q'$ en un punto $\vec{r}$.
    - $V(\vec{r})$: Potencial eléctrico (voltaje) en la posición $\vec{r}$. Se mide en Voltios ($V$).
    - $\epsilon_{0}$: Permitividad eléctrica del vacío. Constante física cuyo valor es $8,854\cdot10^{-12}\,\text{F/m}$. Describe la resistencia que ofrece el vacío a la formación de un campo eléctrico.
    - $q'$: Carga eléctrica puntual generadora. Se mide en Culombios ($C$).
    - $\vert{}\vert{}\vec{r} - \vec{r}'\vert{}\vert{}$: Distancia entre la carga y el punto de evaluación. Se mide en metros ($m$).

- **(3.13)** $\boxed{V(\vec{r}) = \int_\Omega \frac{1}{4\pi\epsilon_0} \mathrm{d}q' \frac{1}{\vert{}\vert{}\vec{r} - \vec{r}'\vert{}\vert{}}}$ Potencial eléctrico generado por una distribución continua de carga.
    - $V(\vec{r})$: Potencial eléctrico total. Se mide en Voltios ($V$).
    - $\mathrm{d}q'$: Diferencial de carga de la distribución. Se mide en Culombios ($C$).
    - $\vert{}\vert{}\vec{r} - \vec{r}'\vert{}\vert{}$: Distancia entre el diferencial de carga y el punto evaluado. Se mide en metros ($m$).

- **(3.14)** $\boxed{U = \frac{1}{4\pi\epsilon_0} \frac{1}{2} \sum_{i,j=1 (i\neq j)}^N \frac{q_i q_j}{d_{ij}}}$ Energía potencial electrostática almacenada en un sistema de $N$ cargas puntuales.
    - $U$: Energía potencial electrostática. Se mide en Julios ($J$).
    - $\epsilon_{0}$: Permitividad eléctrica del vacío. Constante física cuyo valor es $8,854\cdot10^{-12}\,\text{F/m}$. Describe la resistencia que ofrece el vacío a la formación de un campo eléctrico.
    - $q_i, q_j$: Valor de los distintos pares de cargas del sistema. Se miden en Culombios ($C$).
    - $d_{ij}$: Distancia de separación entre la carga $i$ y la carga $j$. Se mide en metros ($m$).

- **(3.15)** $\boxed{U = \frac{1}{2} \int_\Omega \mathrm{d}q' V(\vec{r}') = \frac{\epsilon_0}{2} \int_T \vert{}\vert{}\vec{E}(\vec{r})\vert{}\vert{}^2 \mathrm{d}^3\vec{r}}$ Relaciones de la energía potencial electrostática para distribuciones continuas y energía almacenada en el propio campo eléctrico.
    - $U$: Energía potencial electrostática total. Se mide en Julios ($J$).
    - $\mathrm{d}q'$: Diferencial de carga. Se mide en Culombios ($C$).
    - $V(\vec{r}')$: Potencial eléctrico en la posición del diferencial de carga. Se mide en Voltios ($V$).
    - $\epsilon_{0}$: Permitividad eléctrica del vacío. Constante física cuyo valor es $8,854\cdot10^{-12}\,\text{F/m}$. Describe la resistencia que ofrece el vacío a la formación de un campo eléctrico.
    - $\vert{}\vert{}\vec{E}(\vec{r})\vert{}\vert{}$: Módulo del campo eléctrico en cada punto del espacio. Se mide en Voltios por metro ($V/m$).
    - $\mathrm{d}^3\vec{r}$: Elemento diferencial de volumen en el espacio tridimensional (equivalente a $\mathrm{d}V$). Se mide en metros cúbicos ($m^3$).

- **(3.16)** $\boxed{E = \frac{\sigma}{\epsilon_0}}$ Magnitud del campo eléctrico en las proximidades de la superficie de un conductor ideal en equilibrio o entre las placas de un condensador plano.
    - $E$: Módulo del campo eléctrico. Se mide en Voltios por metro ($V/m$) o Newtons por Culombio ($N/C$).
    - $\sigma$: Densidad superficial de carga. Se mide en Culombios por metro cuadrado ($C/m^2$).
    - $\epsilon_{0}$: Permitividad eléctrica del vacío. Constante física cuyo valor es $8,854\cdot10^{-12}\,\text{F/m}$. Describe la resistencia que ofrece el vacío a la formación de un campo eléctrico.

- **(3.17)** $\boxed{\vert{}\Delta V\vert{} = \frac{\sigma}{\epsilon_0} d = \frac{Q}{\epsilon_0 S} d}$ Diferencia de potencial (voltaje) entre dos placas plano-paralelas.
    - $\vert{}\Delta V\vert{}$: Valor absoluto de la diferencia de potencial o caída de tensión. Se mide en Voltios ($V$).
    - $\sigma$: Densidad superficial de carga en las placas. Se mide en Culombios por metro cuadrado ($C/m^2$).
    - $\epsilon_{0}$: Permitividad eléctrica del vacío. Constante física cuyo valor es $8,854\cdot10^{-12}\,\text{F/m}$. Describe la resistencia que ofrece el vacío a la formación de un campo eléctrico.
    - $d$: Distancia de separación entre las placas. Se mide en metros ($m$).
    - $Q$: Carga total almacenada en una de las placas. Se mide en Culombios ($C$).
    - $S$: Área de la superficie de las placas. Se mide en metros cuadrados ($m^2$).

- **(3.18)** $\boxed{C = \frac{Q}{\vert{}\Delta V\vert{}} = \frac{\epsilon_0}{d} S}$ Capacidad de un condensador de placas plano-paralelas ideal.
    - $C$: Capacidad eléctrica (capacitancia). Se mide en Faradios ($F$).
    - $Q$: Carga eléctrica almacenada en el condensador. Se mide en Culombios ($C$).
    - $\vert{}\Delta V\vert{}$: Diferencia de potencial entre las placas. Se mide en Voltios ($V$).
    - $\epsilon_{0}$: Permitividad eléctrica del vacío. Constante física cuyo valor es $8,854\cdot10^{-12}\,\text{F/m}$. Describe la resistencia que ofrece el vacío a la formación de un campo eléctrico.
    - $d$: Distancia de separación entre las placas. Se mide en metros ($m$).
    - $S$: Área de la superficie de una placa. Se mide en metros cuadrados ($m^2$).

## 4. Magnetostática e Inducción electromagnética

### Fórmulas

- **(4.1)** $\boxed{\vec{B}=\frac{\mu_0}{4 \pi} \frac{q \vec{v} \times (\vec{r} - \vec{r'})}{||\vec{r}-\vec{r'}||^3}=\frac{\mu_{0}}{4\pi}\frac{q\vec{v}\times\hat{u}_{\vec{r}-\vec{r'}}}{||\vec{r}-\vec{r^{\prime}}||^{2}}}$ Ley de Biot-Savart para una carga puntual en movimiento. Campo magnético generado por una carga en un punto del espacio.
    - $\vec{B}$: Vector campo magnético. Se mide en Teslas ($T$).
    - $\mu_0$: Permeabilidad magnética del vacío. Constante física cuyo valor es $4 \pi \times 10^{-7} \; T \cdot m/A$.
    - $q$: Carga eléctrica puntual que interactúa con el campo electromagnético. Se mide en Culombios ($C$).
    - $\vec{v}$: Vector velocidad de la carga. Se mide en metros por segundo ($m/s$).
    - $\vec{r}$: Vector posición del punto donde se evalúa el campo magnético. Se mide en metros ($m$).
    - $\vec{r'}$: Vector posición de la carga generadora. Se mide en metros ($m$).
    - $||\vec{r} -  \vec{r'}||$: Distancia en línea recta entre la carga y el punto de evaluación. Se mide en metros ($m$).
    - $u^r -  r'$: Vector unitario que apunta desde la carga hacia el punto de evaluación. Es adimensional.

- **(4.2)** $\boxed{\vec{B} = \int_{\mathcal{C}} \frac{\mu_0}{4\pi} \frac{I\mathrm{d}\vec{l} \times (\vec{r} - \vec{r}')}{\vert{}\vert{}\vec{r} - \vec{r}'\vert{}\vert{}^3} = \int_{\mathcal{C}} \frac{\mu_0}{4\pi} \frac{I\mathrm{d}\vec{l} \times \hat{u}_{\vec{r}-\vec{r}'}}{\vert{}\vert{}\vec{r} - \vec{r}'\vert{}\vert{}^2}}$ Ley de Biot-Savart para un hilo conductor. Campo magnético generado por una corriente eléctrica a lo largo de un circuito $\mathcal{C}$.
    - $\vec{B}$: Vector campo magnético total. Se mide en Teslas ($T$).
    - $\mu_0$: Permeabilidad magnética del vacío. Constante física cuyo valor es $4 \pi \times 10^{-7} \; T \cdot m/A$.
    - $I$: Intensidad de corriente eléctrica que circula por el sistema. Se mide en Amperios ($A$).
    - $\mathrm{d}\vec{l}$: Vector diferencial de longitud del circuito, tangente al mismo en el sentido de la corriente. Se mide en metros ($m$).
    - $\vec{r}, \vec{r}', \vert{}\vert{}\vec{r} - \vec{r}'\vert{}\vert{}, \hat{u}_{\vec{r}-\vec{r}'}$: Mismo significado que en la fórmula (4.1).

- **(4.3)** $\boxed{\oint_{\Gamma} \vec{B} \cdot \mathrm{d}\vec{l} = \mu_0 I_{int}}$ Ley de Ampère. La circulación del campo magnético a lo largo de una curva cerrada $\Gamma$ es proporcional a la corriente neta que la atraviesa.
    - $\oint_{\Gamma} \vec{B} \cdot \mathrm{d}\vec{l}$: Circulación del campo magnético a lo largo de una trayectoria cerrada $\Gamma$. Se mide en Teslas-metro ($T\cdot m$).
    - $\vec{B}$: Vector campo magnético. Se mide en Teslas ($T$).
    - $\mathrm{d}\vec{l}$: Vector diferencial de camino a lo largo de la curva $\Gamma$. Se mide en metros ($m$).
    - $\mu_0$: Permeabilidad magnética del vacío.
    - $I$: Intensidad de corriente eléctrica neta encerrada que circula por el sistema. Se mide en Amperios ($A$).

- **(4.4)** $\boxed{\vec{F}_{1\to2} = \frac{\mu_0}{4\pi} \frac{q_1 q_2}{d^2} (\vec{v}_2 \times (\vec{v}_1 \times \hat{u}_{\vec{r}_2-\vec{r}_1}))}$ Fuerza magnética que ejerce una carga en movimiento $q_1$ sobre otra carga en movimiento $q_2$.
    - $\vec{F}_{1\to2}$: Vector fuerza magnética ejercida por la carga 1 sobre la carga 2. Se mide en Newtons ($N$).
    - $\mu_0$: Permeabilidad magnética del vacío.
    - $q_1, q_2$: Valor de las cargas eléctricas que interactúan. Se miden en Culombios ($C$).
    - $d$: Distancia que separa a ambas cargas. Se mide en metros ($m$).
    - $\vec{v}_1, \vec{v}_2$: Vectores velocidad de la carga 1 y 2, respectivamente. Se miden en metros por segundo ($m/s$).
    - $\hat{u}_{\vec{r}_2-\vec{r}_1}$: Vector unitario que apunta desde la carga 1 hacia la carga 2. Es adimensional.

- **(4.5)** $\boxed{\vec{F}_m = q\vec{v} \times \vec{B}(\vec{r})}$ Fuerza magnética (componente magnética de la fuerza de Lorentz) sobre una carga puntual que se mueve en un campo magnético externo.
    - $\vec{F}_m$: Vector fuerza magnética. Se mide en Newtons ($N$).
    - $q$: Carga eléctrica puntual que interactúa con el campo electromagnético. Se mide en Culombios ($C$).
    - $\vec{v}$: Vector velocidad de la carga. Se mide en metros por segundo ($m/s$).
    - $\vec{B}(\vec{r})$: Vector campo magnético en la posición de la carga. Se mide en Teslas ($T$).

- **(4.6)** $\boxed{\vec{F}_m = \int_{\Gamma} I\mathrm{d}\vec{l} \times \vec{B}(\vec{r})}$ Fuerza de Laplace. Fuerza magnética total ejercida sobre un hilo conductor recorrido por una corriente e inmerso en un campo magnético.
    - $\vec{F}_m$: Vector fuerza magnética neta. Se mide en Newtons ($N$).
    - $I$: Intensidad de corriente eléctrica que circula por el sistema. Se mide en Amperios ($A$).
    - $\mathrm{d}\vec{l}$: Vector diferencial de longitud del hilo. Se mide en metros ($m$).
    - $\vec{B}(\vec{r})$: Vector campo magnético externo evaluado en cada punto del hilo. Se mide en Teslas ($T$).

- **(4.7)** $\boxed{\vec{F}_{em} = q\left[\vec{E}(\vec{r}) + \vec{v} \times \vec{B}(\vec{r})\right]}$ Fuerza de Lorentz completa. Es la fuerza electromagnética total sobre una carga puntual en presencia de un campo eléctrico y magnético simultáneamente.
    - $\vec{F}_{em}$: Vector fuerza electromagnética total. Se mide en Newtons ($N$).
    - $q$: Carga eléctrica puntual que interactúa con el campo electromagnético. Se mide en Culombios ($C$).
    - $\vec{E}(\vec{r})$: Vector campo eléctrico en la posición de la carga. Se mide en Voltios por metro ($V/m$) o Newtons por Culombio ($N/C$).
    - $\vec{v}$: Vector velocidad de la carga. Se mide en metros por segundo ($m/s$).
    - $\vec{B}(\vec{r})$: Vector campo magnético en la posición de la carga. Se mide en Teslas ($T$).

- **(4.8)** $\boxed{\phi_M = \int_S \vec{B} \cdot \mathrm{d}\vec{S}}$ Flujo magnético a través de una superficie $S$.
    - $\phi_M$: Flujo magnético. Representa la cantidad de líneas de campo magnético que atraviesan una superficie. Se mide en Webers ($Wb$) o Teslas por metro cuadrado ($T\cdot m^2$).
    - $\vec{B}$: Vector campo magnético. Se mide en Teslas ($T$).
    - $\mathrm{d}\vec{S}$: Vector diferencial de superficie (su dirección es perpendicular a la superficie). Se mide en metros cuadrados ($m^2$).

- **(4.9)** $\boxed{\text{f.e.m} = -\frac{\mathrm{d}\phi_B}{\mathrm{d}t}}$ Ley de Faraday-Lenz. La fuerza electromotriz inducida en un circuito cerrado es directamente proporcional a la rapidez con la que cambia el flujo magnético que lo atraviesa (el signo negativo indica oposición al cambio).
    - $\text{f.e.m}$: Fuerza electromotriz inducida (voltaje inducido). Se mide en Voltios ($V$).
    - $\mathrm{d}\phi_B$: Diferencial de flujo magnético. Se mide en Webers ($Wb$). *(Nota: $\phi_B$ es lo mismo que $\phi_M$ en la fórmula anterior)*.
    - $\mathrm{d}t$: Diferencial de tiempo. Se mide en segundos ($s$).

- **(4.10)** $\boxed{B = \mu_0 n I}$ Magnitud del campo magnético en el interior de un solenoide ideal.
    - $B$: Módulo del campo magnético. Se mide en Teslas ($T$).
    - $\mu_0$: Permeabilidad magnética del vacío.
    - $n$: Densidad de espiras del solenoide (número de vueltas dividido por su longitud, $n = N/L$). Se mide en metros a la menos uno ($m^{-1}$).
    - $I$: Intensidad de corriente eléctrica que circula por el sistema. Se mide en Amperios ($A$).

- **(4.11)** $\boxed{L = \frac{d\Phi}{dI}}$ Definición de inductancia o coeficiente de autoinducción de una bobina/circuito.
    - $L$: Inductancia o coeficiente de autoinducción. Se mide en Henrios ($H$).
    - $d\Phi$: Cambio en el flujo magnético propio. Se mide en Webers ($Wb$). *(Nota: $\Phi$ es la misma magnitud que $\phi_M$ o $\phi_B$)*.
    - $dI$: Cambio en la intensidad de corriente. Se mide en Amperios ($A$).

- **(4.12)** $\boxed{\varepsilon = -L \frac{dI}{dt}}$ Fuerza electromotriz autoinducida en una bobina debido a un cambio en la corriente que la atraviesa.
    - $\varepsilon$: Fuerza electromotriz (f.e.m.) o tensión inducida. Se mide en Voltios ($V$). *(Nota: $\varepsilon$ es equivalente a la f.e.m. de la fórmula 4.9)*.
    - $L$: Inductancia o coeficiente de autoinducción. Se mide en Henrios ($H$).
    - $\frac{dI}{dt}$: Tasa de cambio de la corriente eléctrica respecto al tiempo. Se mide en Amperios por segundo ($A/s$).

## 5. Semiconductores

### Los materiales semiconductores

- **(5.1)** $\boxed{E_{n}=\frac{-13.6}{n^{2}}\,\text{eV}}$ Energía de los niveles electrónicos en el modelo atómico de Bohr (normalmente para el átomo de hidrógeno, el cual se usa como referencia inicial).
    - $E_{n}$: Energía del nivel cuántico $n$. Se mide en electronvoltios (eV).
    - $n$: Número cuántico principal (nivel de energía). Es adimensional y su valor es un número entero.

- **(5.2)** $\boxed{n_i = N_C \cdot e^{-\frac{E_C - E_F}{k_B T}}}$ Concentración intrínseca de electrones en la banda de conducción.
    - $n_i$: Concentración de electrones en el material intrínseco. Se mide en electrones por centímetro cúbico ($cm^{-3}$) o por metro cúbico ($m^{-3}$).
    - $N_C$: Densidad efectiva de estados en la banda de conducción. Indica cuántos "huecos disponibles" hay para electrones. Se mide en $cm^{-3}$ o $m^{-3}$.
    - $E_C$: Energía del borde inferior de la banda de conducción. Se mide en Julios (J) o electronvoltios (eV).
    - $E_F$: Energía del nivel de Fermi. Se mide en Julios (J) o electronvoltios (eV).
    - $k_B$: Constante de Boltzmann. Su valor es aproximadamente $1.38 \times 10^{-23}$ J/K o $8.617 \times 10^{-5}$ eV/K.
    - $T$: Temperatura absoluta del material. Se mide en Kelvin (K).

- **(5.3)** $\boxed{p_i = N_V \cdot e^{-\frac{E_F - E_V}{k_B T}}}$ Concentración intrínseca de huecos en la banda de valencia.
    - $p_i$: Concentración de huecos en el material intrínseco. Se mide en $cm^{-3}$ o $m^{-3}$.
    - $N_V$: Densidad efectiva de estados en la banda de valencia. Se mide en $cm^{-3}$ o $m^{-3}$.
    - $E_F$: Energía del nivel de Fermi. Se mide en Julios (J) o electronvoltios (eV).
    - $E_V$: Energía del borde superior de la banda de valencia. Se mide en Julios (J) o electronvoltios (eV).
    - $k_B$: Constante de Boltzmann. Su valor es aproximadamente $1.38 \times 10^{-23}$ J/K o $8.617 \times 10^{-5}$ eV/K.
    - $T$: Temperatura absoluta. Se mide en Kelvin (K).

- **(5.4)** $\boxed{E_F = \frac{E_C + E_V}{2} + \frac{3k_B T}{4} \ln \left( \frac{m_p}{m_n} \right)}$ Nivel de Fermi intrínseco. Muestra que el nivel de Fermi está aproximadamente en la mitad del gap de energía, con una pequeña desviación dependiente de la temperatura y las masas efectivas.
    - $E_F$: Energía del nivel de Fermi intrínseco. Se mide en Julios (J) o electronvoltios (eV).
    - $E_C$: Energía de la banda de conducción.
    - $E_V$: Energía de la banda de valencia.
    - $k_B$: Constante de Boltzmann. Su valor es aproximadamente $1.38 \times 10^{-23}$ J/K o $8.617 \times 10^{-5}$ eV/K.
    - $T$: Temperatura absoluta en Kelvin (K).
    - $m_p$: Masa efectiva de los huecos. Se mide en kilogramos (kg).
    - $m_n$: Masa efectiva de los electrones. Se mide en kilogramos (kg).

- **(5.5)** $\boxed{n \cdot p = n_i^2}$ Ley de acción de masas para semiconductores en equilibrio térmico.
    - $n$: Concentración total de electrones en la banda de conducción. Se mide en $cm^{-3}$ o $m^{-3}$.
    - $p$: Concentración total de huecos en la banda de valencia. Se mide en $cm^{-3}$ o $m^{-3}$.
    - $n_i$: Concentración de portadores intrínsecos. Se mide en $cm^{-3}$ o $m^{-3}$.

- **(5.6)** $\boxed{E_{F,n} = E_{F,i} + k_B T \cdot \ln \left( \frac{N_D}{n_i} \right)}$ Posición del nivel de Fermi en un semiconductor dopado tipo n.
    - $E_{F,n}$: Energía del nivel de Fermi en el material tipo n. Se mide en eV o Julios.
    - $E_{F,i}$: Energía del nivel de Fermi intrínseco (sin dopar). Se mide en eV o Julios.
    - $k_B$: Constante de Boltzmann. Su valor es aproximadamente $1.38 \times 10^{-23}$ J/K o $8.617 \times 10^{-5}$ eV/K.
    - $T$: Temperatura absoluta en Kelvin (K).
    - $N_D$: Concentración de átomos donadores (impurezas que aportan electrones). Se mide en $cm^{-3}$ o $m^{-3}$.
    - $n_i$: Concentración intrínseca.

- **(5.7)** $\boxed{n_n = N_D, \quad p_n = \frac{n_i^2}{N_D}}$ Concentración de portadores mayoritarios y minoritarios en un semiconductor tipo n.
    - $n_n$: Concentración de electrones (mayoritarios). Aproximadamente igual a la de átomos donadores $N_D$. Se mide en $cm^{-3}$.
    - $p_n$: Concentración de huecos (minoritarios). Calculada mediante la ley de acción de masas. Se mide en $cm^{-3}$.
    - $N_D$: Concentración de átomos donadores.
    - $n_i$: Concentración intrínseca.

- **(5.8)** $\boxed{E_{F,p} = E_{F,i} - k_B T \cdot \ln \left( \frac{N_A}{n_i} \right)}$ Posición del nivel de Fermi en un semiconductor dopado tipo p.
    - $E_{F,p}$: Energía del nivel de Fermi en el material tipo p. Se mide en eV o Julios.
    - $E_{F,i}$: Energía del nivel de Fermi intrínseco.
    - $k_B$: Constante de Boltzmann. Su valor es aproximadamente $1.38 \times 10^{-23}$ J/K o $8.617 \times 10^{-5}$ eV/K.
    - $T$: Temperatura absoluta en Kelvin (K).
    - $N_A$: Concentración de átomos aceptores (impurezas que aportan huecos). Se mide en $cm^{-3}$ o $m^{-3}$.
    - $n_i$: Concentración intrínseca.

- **(5.9)** $\boxed{p_p = N_A, \quad n_p = \frac{n_i^2}{N_A}}$ Concentración de portadores mayoritarios y minoritarios en un semiconductor tipo p.
    - $p_p$: Concentración de huecos (mayoritarios). Aproximadamente igual a $N_A$. Se mide en $cm^{-3}$.
    - $n_p$: Concentración de electrones (minoritarios). Se mide en $cm^{-3}$.
    - $N_A$: Concentración de átomos aceptores.
    - $n_i$: Concentración intrínseca.

- **(5.10)** $\boxed{\vec{v}_{d,n} = -\mu_n \cdot \vec{E}}$ Velocidad de arrastre (drift) de los electrones bajo un campo eléctrico. El signo negativo indica que se mueven en sentido contrario al campo.
    - $\vec{v}_{d,n}$: Vector velocidad de arrastre de los electrones. Se mide en metros por segundo (m/s).
    - $\mu_n$: Movilidad de los electrones. Mide la facilidad con la que se mueven por la red cristalina. Se mide en $cm^2/(V\cdot s)$ o $m^2/(V\cdot s)$.
    - $\vec{E}$: Vector campo eléctrico aplicado. Se mide en Voltios por metro (V/m).

- **(5.11)** $\boxed{\vec{v}_{d,p} = \mu_p \cdot \vec{E}}$ Velocidad de arrastre de los huecos. Se mueven en el mismo sentido que el campo eléctrico.
    - $\vec{v}_{d,p}$: Vector velocidad de arrastre de los huecos. Se mide en metros por segundo (m/s).
    - $\mu_p$: Movilidad de los huecos. Se mide en $cm^2/(V\cdot s)$ o $m^2/(V\cdot s)$.
    - $\vec{E}$: Vector campo eléctrico aplicado. Se mide en Voltios por metro (V/m).

- **(5.12)** $\boxed{I = \frac{V}{\left[ \frac{1}{q(\mu_p \cdot p + \mu_n \cdot n)} \right] \frac{L}{A}} = \frac{V}{R}}$ Ley de Ohm macroscópica para un bloque semiconductor, expresada en función de las propiedades de los portadores de carga.
    - $I$: Intensidad de corriente eléctrica que circula por el sistema. Se mide en Amperios ($A$).
    - $V$: Diferencia de potencial (voltaje) aplicada. Se mide en Voltios (V).
    - $q$: Carga elemental del electrón ($1,602 \times 10^{-19}$ C). Se mide en Culombios (C).
    - $\mu_p, \mu_n$: Movilidad de huecos y electrones.
    - $p, n$: Concentración de huecos y electrones.
    - $L$: Longitud del bloque semiconductor. Se mide en metros (m).
    - $A$: Área de la sección transversal. Se mide en metros cuadrados ($m^2$).
    - $R$: Resistencia total del bloque. Se mide en Ohmios ($\Omega$). El término en el corchete es la resistividad $\rho$.

- **(5.13)** $\boxed{I = \frac{\Delta Q}{\tau_c} = (n_2 - n_1) \frac{q \cdot l}{2\tau_c} A = (n_2 - n_1) \frac{q \cdot v_{th}}{2} A}$ Corriente descrita mediante la transferencia neta de carga en un tiempo de tránsito, relacionada con la velocidad térmica.
    - $I$: Intensidad de corriente eléctrica que circula por el sistema. Se mide en Amperios ($A$).
    - $\Delta Q$: Variación de carga o carga neta transferida. Se mide en Culombios (C).
    - $\tau_c$: Tiempo de colisión o de tránsito libre medio. Se mide en segundos (s).
    - $(n_2 - n_1)$: Diferencia de concentración de portadores entre dos regiones.
    - $q$: Carga elemental del electrón. Es una constante física cuyo valor es $1,602\cdot10^{-19}\,\text{C}$. Se mide en Culombios ($C$).
    - $l$: Camino libre medio (distancia media entre colisiones). Se mide en metros (m).
    - $A$: Área de la sección. Se mide en metros cuadrados ($m^2$).
    - $v_{th}$: Velocidad térmica promedio de los portadores. Se mide en metros por segundo (m/s).

### La unión p-n. Los díodos

- **(5.14)** $\boxed{V_{bi} = \frac{1}{2} \frac{q \left ( N_D x_n + N_D x_p \right )}{2 \epsilon_0 \epsilon_r} W}$ Potencial de contacto o potencial interno de la unión p-n expresado geométricamente respecto al ancho de la zona de carga espacial.
    - $V_{bi}$: Potencial de contacto que se forma naturally en la unión. Se mide en Voltios (V).
    - $q$: Carga elemental del electrón. Es una constante física cuyo valor es $1,602\cdot10^{-19}\,\text{C}$. Se mide en Culombios ($C$).
    - $N_D$: Concentración de donadores (lado $n$).
    - $N_A$: Concentración de aceptores (lado $p$).
    - $x_n$: Extensión de la zona de vaciamiento hacia el lado n. Se mide en metros (m) o centímetros (cm).
    - $x_p$: Extensión de la zona de vaciamiento hacia el lado p. Se mide en metros (m) o centímetros (cm).
    - $\epsilon_{0}$: Permitividad eléctrica del vacío. Constante física cuyo valor es $8,854\cdot10^{-12}\,\text{F/m}$. Describe la resistencia que ofrece el vacío a la formación de un campo eléctrico.
    - $\epsilon_r$: Permitividad relativa (constante dieléctrica) del semiconductor.
    - $W$: Ancho total de la zona de vaciamiento ($W = x_n + x_p$). Se mide en metros (m).

- **(5.15)** $\boxed{V_{bi} = \frac{k_B T}{q} \ln \left( \frac{N_A \cdot N_D}{n_i^2} \right)}$ Fórmula exacta fundamental para calcular el potencial de contacto $V_{bi}$ a partir de los dopajes.
    - $V_{bi}$: Potencial interno. Se mide en Voltios (V).
    - $k_B$: Constante de Boltzmann. Su valor es aproximadamente $1.38 \times 10^{-23}$ J/K o $8.617 \times 10^{-5}$ eV/K.
    - $T$: Temperatura absoluta en Kelvin (K).
    - $q$: Carga elemental del electrón. Es una constante física cuyo valor es $1,602\cdot10^{-19}\,\text{C}$. Se mide en Culombios ($C$).
    - $N_A, N_D$: Concentración de aceptores y donadores.
    - $n_i$: Concentración intrínseca.

- **(5.16)** $\boxed{W = \left[ \frac{2\epsilon_0\epsilon_r V_{bi}}{q} \left( \frac{1}{N_A} + \frac{1}{N_D} \right) \right]^{1/2}}$ Ancho total de la zona de vaciamiento (o zona de deplexión) en equilibrio térmico.
    - $W$: Ancho total de la región sin portadores libres. Se mide en metros (m) o centímetros (cm).
    - $V_{bi}$: Potencial interno. Se mide en Voltios (V).
    - $q$: Carga elemental del electrón. Es una constante física cuyo valor es $1,602\cdot10^{-19}\,\text{C}$. Se mide en Culombios ($C$).
    - $\epsilon_{0}$: Permitividad eléctrica del vacío. Constante física cuyo valor es $8,854\cdot10^{-12}\,\text{F/m}$. Describe la resistencia que ofrece el vacío a la formación de un campo eléctrico.
    - $N_A, N_D$: Concentración de aceptores y donadores.

- **(5.17)** $\boxed{x_p = W \cdot \frac{N_D}{N_A + N_D}}$ Extensión de la zona de vaciamiento hacia el lado tipo p.
    - $x_p$: Profundidad de penetración de la zona de vaciamiento en el lado p. Se mide en metros (m). Muestra que la zona penetra menos en el lado más dopado.
    - $W$: Ancho total de la zona de vaciamiento.
    - $N_D, N_A$: Concentración de donadores y aceptores.

- **(5.18)** $\boxed{x_n = W \cdot \frac{N_A}{N_A + N_D}}$ Extensión de la zona de vaciamiento hacia el lado tipo n.
    - $x_n$: Profundidad de penetración de la zona de vaciamiento en el lado n. Se mide en metros (m).
    - $W$: Ancho total de la zona de vaciamiento.
    - $N_D, N_A$: Concentración de donadores y aceptores.

- **(5.19)** $\boxed{n(x = -x_p) = n_{p,0} \cdot e^{\frac{qV}{k_B T}}}$ Concentración de electrones (minoritarios) inyectados justo en el borde de la zona de vaciamiento del lado p al aplicar un voltaje externo $V$.
    - $n(x = -x_p)$: Concentración de electrones en la posición $-x_p$ (borde de la región p). Se mide en $cm^{-3}$.
    - $n_{p,0}$: Concentración de electrones minoritarios en equilibrio en la región p (lejos de la unión). Se mide en $cm^{-3}$.
    - $q$: Carga elemental del electrón. Es una constante física cuyo valor es $1,602\cdot10^{-19}\,\text{C}$. Se mide en Culombios ($C$).
    - $V$: Voltaje de polarización aplicado al diodo. Se mide en Voltios (V).
    - $k_B$: Constante de Boltzmann. Su valor es aproximadamente $1,38 \cdot 10^{-23}\,\text{J/K}$ (o $8,617 \cdot 10^{-5}\,\text{eV/K}$).
    - $T$: Temperatura absoluta del semiconductor. Se mide en Kelvin ($K$).

- **(5.20)** $\boxed{p(x = x_n) = p_{n,0} \cdot e^{\frac{qV}{k_B T}}}$ Concentración de huecos (minoritarios) inyectados justo en el borde de la zona de vaciamiento del lado n.
    - $p(x = x_n)$: Concentración de huecos en la posición $x_n$ (borde de la región n). Se mide en $cm^{-3}$.
    - $p_{n,0}$: Concentración de huecos minoritarios en equilibrio en la región n. Se mide en $cm^{-3}$.
    - $V$: Voltaje de polarización aplicado.
    - $q$: Carga elemental del electrón. Es una constante física cuyo valor es $1,602\cdot10^{-19}\,\text{C}$. Se mide en Culombios ($C$).
    - $k_B$: Constante de Boltzmann. Su valor es aproximadamente $1,38 \cdot 10^{-23}\,\text{J/K}$ (o $8,617 \cdot 10^{-5}\,\text{eV/K}$).
    - $T$: Temperatura absoluta del semiconductor. Se mide en Kelvin ($K$).

- **(5.21)** $\boxed{I(V) = I_s \left( e^{\frac{q \cdot V}{k_B T}} - 1 \right)}$ Ecuación del diodo ideal de Shockley. Relaciona la corriente que atraviesa el diodo con el voltaje aplicado.
    - $I(V)$: Corriente a través del diodo en función del voltaje $V$. Se mide en Amperios (A).
    - $I_s$: Corriente de saturación inversa. Es una constante muy pequeña que depende del material y la temperatura. Se mide en Amperios (A).
    - $V$: Voltaje o diferencia de potencial aplicada al diodo. Positivo para polarización directa, negativo para inversa. Se mide en Voltios (V).
    - $q$: Carga elemental del electrón. Es una constante física cuyo valor es $1,602\cdot10^{-19}\,\text{C}$. Se mide en Culombios ($C$).
    - $k_B$: Constante de Boltzmann. Su valor es aproximadamente $1,38 \cdot 10^{-23}\,\text{J/K}$ (o $8,617 \cdot 10^{-5}\,\text{eV/K}$).
    - $T$: Temperatura absoluta del semiconductor. Se mide en Kelvin ($K$).
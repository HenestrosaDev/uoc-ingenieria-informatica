# [FORMULARIO] Óptica y fotónica

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

# [FORMULARIO] Magnetostática y semiconductores

- [Constantes](#constantes)
- [Áreas y volúmenes](#áreas-y-volúmenes)
- [4. Magnetostática e Inducción electromagnética](#4-magnetostática-e-inducción-electromagnética)
	- [Fórmulas](#fórmulas)
- [5. Semiconductores](#5-semiconductores)
	- [Los materiales semiconductores](#los-materiales-semiconductores)
	- [La unión p-n. Los díodos](#la-unión-p-n-los-díodos)


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
# [FORMULARIO] Electrostática

- [Constantes](#constantes)
- [Áreas y volúmenes](#áreas-y-volúmenes)
- [3. Electrostática](#3-electrostática)
	- [Fórmulas](#fórmulas)

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
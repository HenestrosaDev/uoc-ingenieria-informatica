# RESUMEN Sistemas basados en el conocimiento

## 4. Sistemas con representación estructurada

### 4.1. Aspecto formal

Un **sistema de marcos** es una red de **nodos** de objetos y **arcos** que representan relaciones. Estos nodos pueden poseer **campos** (de miembro o propios) para almacenar más información sobre el objeto en cuestión.

![Ejemplo de marco](4-1_marco.png)
>Ejemplo de representación usando marcos

Tipos de objetos (similares a los del paradigma de programación orientada a objetos):

- **Clase**
  - Conceptualmente, es la representación de un objeto (un concepto o individuo).
	- Gráficamente, se representa con un **rectángulo**.
	- Relación gráfica con otros nodos mediante **arcos (líneas) continuos sin flechas**.
	- Sus campos **propios** son comunes a todas las instancias de la clase. Por ejemplo, un `Coche` tiene `ruedas` (campo propio).

	Hay dos tipos de clases:

	- **Superclase:** Representa a un concepto más general que otro. Por ejemplo, `Vehículo` es la superclase de `Coche`.
	- **Subclase:** Representa a un concepto particular de otro. Por ejemplo, `Coche` es la subclase de `Vehículo`.

- **Instancia** 
  - Conceptualmente, representa a un individuo concreto de una clase. Por ejemplo, `Mi coche` es una instancia de la clase `Coche`.
  - Gráficamente, se representa con un **círculo**.
  - Relación gráfica con otros nodos mediante **líneas discontinuas sin flechas**. 
	- Sus campos de **miembro** son específicos a una instancia en concreto. las instancias de la clase. Por ejemplo, `Mi coche` tiene un `Propietario` (campo miembro), el cual tiene el valor `María`, el cual es una instancia de la clase `Persona`). Gráficamente, se representa con una **línea discontinua con flechas** (también se puede ver sin flechas).

Los objetos pueden tener asociados **demonios**, los cuales son procedimientos que se ejecutan automáticamente cuando el objeto cambia. Podemos pensar en ellos como funciones que se ejecutan cuando se cumplen una o varias condiciones. Siendo más específicos, podemos establecer el paralelismo de un demonio con una *_computed property_*.

Por ejemplo, imaginemos que un *Vehículo* tiene un miembro `categoría` cuyo valor puede ser "Normal" o "Deluxe". A su vez, tiene otro miembro `precio`. Para definir la `categoría`, podemos crear un demonio que le asigne el valor "Deluxe" a la instancia de un `Vehículo` cuyo valor sea superior a 70.000 €.

### 4.2. Aspecto inferencial

El problema de encontrar un determinado campo corresponde a realizar un recorrido por un grafo hasta encontrar un nodo que satisface una determinada propiedad. Este problema se acentúa por la herencia múltiple, ya que varios nodos pueden contener miembros 





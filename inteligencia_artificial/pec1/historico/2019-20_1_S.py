##############################################################################
##############################################################################
#
# Adaptación de un programa en Common-Lisp para ilustrar
# los problemas de búsqueda
#
# El programa Common-Lisp original fue escrito por Vicenç 
# Torra i Reventós como parte del Módulo 2 de los materiales de la UOC
# para la asignatura de Inteligencia Artificial
#
# Adaptación a Python por Jordi Delgado, manteniendo la estructura de
# lista inherente a las listas en Common-Lisp, de cara a minimizar
# los cambios en la explicación textual que acompaña al código.
#
# Por esto se mantine la notación car, cdr, caddr, etc.
#
##############################################################################
##############################################################################

##############################################################################
####                           ###############################################
####   Utilidades auxiliares   ###############################################
####                           ###############################################
##############################################################################
import sys
import random

sys.setrecursionlimit(1000000) 

# No es igual que el gensym de Lisp, pero es mas que suficiente para nuestras necesidades
def gensym ():  
    return 'symb' + str(int(10000000*random.random())).rjust(7,'0')

def car(lst): return ([] if not lst else lst[0])

def cdr(lst): return ([] if not lst else lst[1:])

def caar(lst): return car(car(lst))

def cadr(lst): return car(cdr(lst))

def cdar(lst): return cdr(car(lst))

def cddr(lst): return cdr(cdr(lst))

def caddr(lst): return car(cdr(cdr(lst)))

def cdddr(lst): return cdr(cdr(cdr(lst)))

def caadr(lst): return car(car(cdr(lst)))

def cadadr(lst): return car(cdr(car(cdr(lst))))

def cadddr(lst):  return car(cdr(cdr(cdr(lst))))

def cons(elem, lst): 
    tmp = lst.copy()
    tmp.insert(0,elem)
    return tmp

def member_if (prd, lst):
    ll = lst.copy()
    leng = len(lst)
    while (leng > 0):
        elem = ll[0]
        if prd(elem):
            return ll
        ll.pop(0)
        leng -= 1
    return []

def find_if (prd, lst):
    for elem in lst:
        if prd(elem):
            return elem
    return []

def remove_if (prd, lst):
    results = []
    for elem in lst:
        if not prd(elem):
            results.append(elem)
    return results

def mapcar (f, lst):
    return list(map(f,lst))

##############################################################################
####                                                                      ####
####                  QUICKSORT                                           ####
####                                                                      ####
##############################################################################


def selecciona_estimacion (nodos):
    return mapcar(lambda nodo: caddr(cdddr(nodo)), nodos)

def selecciona_menorigual (pivot, por_ordenar, elems):
    if not por_ordenar:
        return []
    ll = selecciona_menorigual(pivot,cdr(por_ordenar),cdr(elems))
    if car(por_ordenar) <= pivot:
        return cons(car(elems),ll)
    return ll

def selecciona_mayor (pivot, por_ordenar, elems):
    if not por_ordenar:
        return []
    ll = selecciona_mayor(pivot,cdr(por_ordenar),cdr(elems))
    if car(por_ordenar) > pivot:
        return cons(car(elems),ll)
    return ll

def quicksort (por_ordenar, elems):
    if not elems:
        return []
    pivot  = car(por_ordenar)
    elemp  = car(elems)
    peques = selecciona_menorigual(pivot, cdr(por_ordenar), cdr(elems))
    grans  = selecciona_mayor(pivot, cdr(por_ordenar), cdr(elems))
    return quicksort(selecciona_estimacion(peques),peques) + cons(elemp, quicksort(selecciona_estimacion(grans),grans))

##############################################################################
##############################################################################

##############################################################################
####                           ###############################################
####   Planteamiento general   ###############################################
####                           ###############################################
##############################################################################

##############################################################################
# nodo ::= [Identificador, Estado, Identificador-Nodo-Padre, Operador-generador, Otros...]
##############################################################################

def ident (nodo): return car(nodo)

def estado (nodo): return cadr(nodo)

def id_padre (nodo): return caddr(nodo)

def operador (nodo): return car(cdddr(nodo))

def info (nodo): return cdr(cdddr(nodo))

def construye_nodo (ident, estado, id_padre, op, info):
    return [ident, estado, id_padre, op] + info

def expande_nodo (nodo, operadores, funcion):
    def elimina_estados_vacios (lista_nodos):
        return remove_if(lambda nodo: estado(nodo) == 'vacio', lista_nodos)
    
    st        = estado(nodo)
    id_nodo   = ident(nodo)
    info_nodo = info(nodo)
    
    aux       = []
    for op in operadores:
        nuevo_simbol = gensym()
        ff         = cadr(op)
        ffapp      = ff(st,info_nodo)
        aux.append(construye_nodo(nuevo_simbol, ffapp, id_nodo, car(op), funcion([st, info_nodo], ffapp, car(op))))

    tmp = elimina_estados_vacios(aux)
    return tmp

##############################################################################
# Estructura de dades arbol de busqueda ::= [lista_nodos_a_expandir, lista_nodos_ja_expandits]
##############################################################################

def nodos_a_expandir (arbol):
    return car(arbol)

def nodos_expandits (arbol):
    return cadr(arbol)

def selecciona_nodo (arbol):
    return car(nodos_a_expandir(arbol))

def candidatos (arbol):
    return bool(nodos_a_expandir(arbol))

def cami (arbol, nodo):
    if not id_padre(nodo):
        return []
    lp = cami(arbol, nodo_arbol(id_padre(nodo), arbol))
    return lp + [operador(nodo)]

def nodo_arbol (id_nodo, arbol):
    check_nodo  = lambda nodo: ident(nodo) == id_nodo
    a_expandir  = member_if(check_nodo, nodos_a_expandir(arbol))
    if bool(a_expandir):
        return car(a_expandir)
    return find_if(check_nodo, nodos_expandits(arbol))

def expande_arbol (problema, estrategia, arbol, nodo):
    nuevos_nodos_a_expandir = expande_nodo(nodo, operadores(problema), funcion_info_addicional(problema))
    return construye_arbol(arbol, estrategia, nodo, nuevos_nodos_a_expandir)

def construye_arbol (arbol, estrategia, nodo_expandit, nuevos_nodos_a_expandir):
    elm = estrategia(car(arbol), nuevos_nodos_a_expandir)
    return cons(elm, [cons(nodo_expandit, cadr(arbol))])

def elimina_seleccio (arbol):
    return cons(cdr(nodos_a_expandir(arbol)), cdr(arbol))
    
def arbol_inicial (estado, info):
    infres = info(estado)
    nodo   = construye_nodo(gensym(), estado, [], [], [])
    tmp    = [nodo + infres]
    return [tmp]

##############################################################################
# problema ::= [operadores, funcion, estado-inicial, funcion-objetivo, info-inicial...]
##############################################################################

def operadores (problema): return car(problema)

def funcion_info_addicional (problema): return cadr(problema)

def estado_inicial (problema): return caddr(problema)

def funcion_objetivo (problema): return car(cdddr(problema))

def info_inicial (problema): return car(cdr(cdddr(problema)))

##############################################################################
# Implementación de la búsqueda
##############################################################################

def solucion (problema, nodo):
    ff = funcion_objetivo(problema)
    return ff(estado(nodo))

def busqueda (problema, estrategia, arbol):    
    if (not candidatos(arbol)):
        return ['no_hay_solucion']
    else:
        nodo      = selecciona_nodo(arbol)
        nuevo_arbol = elimina_seleccio(arbol)

        # print(mapcar(lambda nodo: [nodo[1], nodo[5]],  car(arbol)))
        # print(mapcar(lambda nodo: [nodo[1], nodo[5]],  cadr(arbol)))
        # print()
        
        if solucion(problema, nodo):
            return cami(arbol,nodo)
        else:
            tmp = expande_arbol(problema, estrategia, nuevo_arbol, nodo)
            return busqueda(problema, estrategia, tmp)

def hacer_busqueda (problema, estrategia):    
    return busqueda(problema, estrategia, arbol_inicial(estado_inicial(problema), info_inicial(problema)))

##############################################################################
# Estrategias
##############################################################################

def tl_estrategia_anchura (nodos_a_expandir, nuevos_nodos_a_expandir):
    return nodos_a_expandir + nuevos_nodos_a_expandir

def tl_estrategia_profundidad (nodos_a_expandir, nuevos_nodos_a_expandir):
    return nuevos_nodos_a_expandir + nodos_a_expandir 

def tl_estrategia_uniforme (nodos_a_expandir, nuevos_nodos_a_expandir):  ## Igual que A*
    union = nuevos_nodos_a_expandir + nodos_a_expandir
    return quicksort(selecciona_estimacion(union),union)

def tl_estrategia_avida (nodos_a_expandir, nuevos_nodos_a_expandir):     ## Igual que A*
    union = nuevos_nodos_a_expandir + nodos_a_expandir
    return quicksort(selecciona_estimacion(union),union)

def tl_estrategia_Astar (nodos_a_expandir, nuevos_nodos_a_expandir):
    union = nuevos_nodos_a_expandir + nodos_a_expandir
    return quicksort(selecciona_estimacion(union),union)

##############################################################################
# Búsquedas
##############################################################################

def busqueda_anchura (problema):
    return hacer_busqueda(problema, tl_estrategia_anchura)

def busqueda_profundidad (problema):
    return hacer_busqueda(problema, tl_estrategia_profundidad)

def busqueda_profundidad_limitada (problema, lim):
    global limit
    limit = lim
    return hacer_busqueda(problema, tl_estrategia_profundidad)

def busqueda_iterativa_profundidad (problema):
    def busqueda_iterativa_profundidad_desde_k (problema, lim):
        resultat = busqueda_profundidad_limitada(problema, lim)
        if resultat == ['no_hay_solucion']:
            return busqueda_iterativa_profundidad_desde_k(problema, lim+1)
        return resultat
    
    return busqueda_iterativa_profundidad_desde_k(problema,0)
    
def busqueda_uniforme (problema):
    return hacer_busqueda(problema, tl_estrategia_uniforme)

def busqueda_avida (problema):
    return hacer_busqueda(problema, tl_estrategia_avida)

def busqueda_Astar (problema):
    return hacer_busqueda(problema, tl_estrategia_Astar)

##############################################################################
##############################################################################
##############################################################################
#
# Grafo PEC1 2019-20 Q1
#
##############################################################################
##############################################################################
##############################################################################

def StoA (estado, info): return ('A' if estado == 'S' else 'vacio')

def StoE (estado, info): return ('E' if estado == 'S' else 'vacio')

def StoF (estado, info): return ('F' if estado == 'S' else 'vacio')

def AtoB (estado, info): return ('B' if estado == 'A' else 'vacio')

def AtoD (estado, info): return ('D' if estado == 'A' else 'vacio')

def BtoC (estado, info): return ('C' if estado == 'B' else 'vacio')

def CtoG (estado, info): return ('G' if estado == 'C' else 'vacio')

def DtoA (estado, info): return ('A' if estado == 'D' else 'vacio')

def DtoC (estado, info): return ('C' if estado == 'D' else 'vacio')

def EtoD (estado, info): return ('D' if estado == 'E' else 'vacio')

def FtoE (estado, info): return ('E' if estado == 'F' else 'vacio')
    
def tl_operadores_grafo():
    return [ ['StoA', StoA],
             ['StoE', StoE],
             ['StoF', StoF],
             ['AtoB', AtoB],
             ['AtoD', AtoD],
             ['BtoC', BtoC],
             ['CtoG', CtoG],
             ['DtoA', DtoA],
             ['DtoC', DtoC],
             ['EtoD', EtoD],
             ['FtoE', FtoE] ]

def coste (estado1, estado2):
    if   estado1 == 'S' and estado2 == 'A': return 2
    elif estado1 == 'S' and estado2 == 'E': return 3
    elif estado1 == 'S' and estado2 == 'F': return 2
    elif estado1 == 'A' and estado2 == 'B': return 2
    elif estado1 == 'A' and estado2 == 'D': return 3
    elif estado1 == 'B' and estado2 == 'C': return 2
    elif estado1 == 'C' and estado2 == 'G': return 2
    elif estado1 == 'D' and estado2 == 'A': return 3
    elif estado1 == 'D' and estado2 == 'C': return 1
    elif estado1 == 'E' and estado2 == 'D': return 1
    elif estado1 == 'F' and estado2 == 'E': return 1
    else: return 100

def heuristico (estado):
    if   estado == 'A': return 4
    elif estado == 'B': return 3
    elif estado == 'C': return 1
    elif estado == 'D': return 2 # cambio! antes 4
    elif estado == 'E': return 2 # cambio! antes 5
    elif estado == 'F': return 5
    elif estado == 'G': return 0
    elif estado == 'S': return 6
    else: return 100
    
def problema_Grafo_busqueda_Uniforme():
    tl_ops = tl_operadores_grafo()

    def aux_func(info_nodo_padre, estado, operador):
        estado_padre = car(info_nodo_padre)
        g          = caadr(info_nodo_padre)
        g_mas_padre = g + coste(estado_padre, estado)
        return [g_mas_padre, g_mas_padre]
    
    estado_inicial     = 'S'
    check_estado_final = lambda estado: estado == 'G'

    return [tl_ops, aux_func, estado_inicial, check_estado_final, lambda estado: [0, 0]]

def problema_Grafo_busqueda_Avida():
    tl_ops = tl_operadores_grafo()

    def aux_func(info_nodo_padre, estado, operador):
        return [0, heuristico(estado)]
    
    estado_inicial     = 'S'
    check_estado_final = lambda estado: estado == 'G'

    return [tl_ops, aux_func, estado_inicial, check_estado_final, lambda estado: [0, heuristico(estado)]]

def problema_Grafo_busqueda_Astar():
    tl_ops = tl_operadores_grafo()

    def aux_func(info_nodo_padre, estado, operador):
        estado_padre = car(info_nodo_padre)
        g          = caadr(info_nodo_padre)
        g_mas_padre = g + coste(estado_padre, estado)
        g_mas_h    = g_mas_padre + heuristico(estado)
        return [g_mas_padre, g_mas_h]
    
    estado_inicial     = 'S'
    check_estado_final = lambda estado: estado == 'G'

    return [tl_ops, aux_func, estado_inicial, check_estado_final, lambda estado: [0, heuristico(estado)]]


print(busqueda_uniforme(problema_Grafo_busqueda_Uniforme())) # ==>

print(busqueda_avida(problema_Grafo_busqueda_Avida()))  # ==>

print(busqueda_Astar(problema_Grafo_busqueda_Astar())) # ==>

##############################################################################
##############################################################################


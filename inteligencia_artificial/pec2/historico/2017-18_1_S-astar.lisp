;; (load "astar.lisp")

;;;;;;;;;;;;; quicksort ;;;;;;;;;;;;

(defun selecciona-estimacion (union-nodos)
  (mapcar #'(lambda (nodo) (caddr (cdddr nodo)))
            union-nodos))

(defun selecciona-menorigual (pivot para-ordenar elems)
  (if (null para-ordenar) nil
    (if (<= (car para-ordenar) pivot)
        (cons (car elems)
              (selecciona-menorigual pivot (cdr para-ordenar) (cdr elems)))
      (selecciona-menorigual pivot (cdr para-ordenar) (cdr elems)))))


(defun selecciona-mayor (pivot para-ordenar elems)
  (if (null para-ordenar) nil
    (if (> (car para-ordenar) pivot)
        (cons (car elems)
              (selecciona-mayor pivot (cdr para-ordenar) (cdr elems)))
      (selecciona-mayor pivot (cdr para-ordenar) (cdr elems))))) 

(defun quicksort (para-ordenar elems)
  (if (null elems) nil
    (let* ((pivot (car para-ordenar)) 
           (elemp (car elems))
           (pequenos (selecciona-menorigual pivot (cdr para-ordenar) (cdr elems))) 
           (grandes (selecciona-mayor pivot (cdr para-ordenar) (cdr elems)))
           (resultado (append (quicksort (selecciona-estimacion pequenos) pequenos)
                              (cons elemp (quicksort (selecciona-estimacion grandes) grandes)))))
      resultado)))

;;;;;;;;;;;;; quicksort ;;;;;;;;;;;;

;;;;;;;;;;;;;   nodo   ;;;;;;;;;;;;

(defun id (nodo) (car nodo))

(defun estado (nodo) (cadr nodo))

(defun id-padre (nodo) (caddr nodo))

(defun operador (nodo) (cadddr nodo))

(defun info (nodo) (cddddr nodo))

(defun construye-nodo (id estado id-padre op info)
  (append (list id estado id-padre op) info))

(defun expande-nodo (nodo operadores funcion)
  (labels ((elimina-estados-vacios (lista-nodos)
                                   (remove-if #'(lambda (nodo)
                                                  (equal (estado nodo) 'vacio))
                                              lista-nodos)))
    (let ((estado (estado nodo))
          (id-nodo (id nodo))
          (info    (info nodo)))
      (elimina-estados-vacios
       (mapcar #'(lambda (operador)
                   (construye-nodo (gensym)
                                   (funcall (cadr operador) estado info)
                                   id-nodo
                                   (car operador)
                                   (funcall funcion (list estado info) (funcall (cadr operador) estado info) (car operador))))
               operadores)))))                   ;;; aquí ^ en el original solo pasa info como parámetro

;;;;;;;;;;;;;   nodo    ;;;;;;;;;;;;

;;;;;;;;;;;;; problema  ;;;;;;;;;;;;

(defun operadores (problema) (car problema))

(defun funcion-info-addicional (problema) (cadr problema))

(defun estado-inicial (problema) (caddr problema))

(defun funcion-objetivo (problema) (cadddr problema))

(defun info-inicial (problema) (car (cddddr problema)))

(defun solucion? (problema nodo) (funcall (funcion-objetivo problema) (estado nodo)))

;;;;;;;;;;;;; problema  ;;;;;;;;;;;;

;;;;;;;;;;;;;   árbol   ;;;;;;;;;;;;

(defun nodos-por-expandir (arbol)
   (car arbol))

(defun nodos-expandidos (arbol)
   (cadr arbol))

(defun selecciona-nodo (arbol)
   (car (nodos-por-expandir arbol)))

(defun candidatos? (arbol)
   (not (null (nodos-por-expandir arbol))))

(defun camino (arbol nodo)
  (if (null (id-padre nodo)) nil
    (append (camino arbol
                    (nodo-arbol (id-padre nodo) arbol))
            (list (operador nodo)))))

(defun nodo-arbol (id-nodo arbol)
  (let ((a-expandir? (member-if #'(lambda (nodo) (equal (id nodo) id-nodo)) (nodos-por-expandir arbol))))
    (if a-expandir? (find-if #'(lambda (nodo) (equal (id nodo) id-nodo))
                             (nodos-por-expandir arbol)) 
      (find-if #'(lambda (nodo) (equal (id nodo) id-nodo))
               (nodos-expandidos arbol)))))

(defun construye-arbol (arbol estrategia nodo-expandido nuevos-nodos-a-expandir)
  (cons (funcall estrategia (car arbol) nuevos-nodos-a-expandir)
        (list (cons nodo-expandido (cadr arbol)))))

(defun expande-arbol (problema estrategia arbol nodo)
  (let ((nuevos-nodos-a-expandir (expande-nodo nodo
                                               (operadores problema)
                                               (funcion-info-addicional problema)) ))
    (construye-arbol arbol estrategia nodo nuevos-nodos-a-expandir)))

(defun elimina-seleccion (arbol)
  (cons (cdr (nodos-por-expandir arbol))
        (cdr arbol)))

(defun arbol-inicial (estado info)
  (list (list (append (construye-nodo (gensym) estado nil nil nil) (funcall info estado)))))

;;;;;;;;;;;;;   árbol   ;;;;;;;;;;;;

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defun busqueda (problema estrategia arbol)
  (if (not (candidatos? arbol)) '(no-hay-solucion)
    (let ((nodo (selecciona-nodo arbol))
          (nuevo-arbol (elimina-seleccion arbol)))
      (if (solucion? problema nodo)
          (camino arbol nodo)
        (busqueda problema estrategia (expande-arbol problema estrategia nuevo-arbol nodo))))))

(defun hacer-busqueda (problema estrategia)
  (busqueda problema estrategia (arbol-inicial (estado-inicial problema)
                                               (info-inicial problema))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;;;;;;;;;;;;;;;;;;;;;;;;;;; busqueda A*

;;;;;;;;; Definición del grafo:
;;;;;;;;;
;;;;;;;;; Un operador por arista del grafo

(defun AtoB (estado info)
  (if (equal estado 'A) 'B 'vacio))
(defun AtoC (estado info)
  (if (equal estado 'A) 'C 'vacio))
(defun AtoD (estado info)
  (if (equal estado 'A) 'D 'vacio))
(defun AtoE (estado info)
  (if (equal estado 'A) 'E 'vacio))

(defun BtoF (estado info)
  (if (equal estado 'B) 'F 'vacio))
(defun CtoF (estado info)
  (if (equal estado 'C) 'F 'vacio))
(defun DtoF (estado info)
  (if (equal estado 'D) 'F 'vacio))
(defun EtoF (estado info)
  (if (equal estado 'E) 'F 'vacio))

(defun EtoH (estado info)
  (if (equal estado 'E) 'H 'vacio))
(defun FtoG (estado info)
  (if (equal estado 'F) 'G 'vacio))
(defun FtoH (estado info)
  (if (equal estado 'F) 'H 'vacio))
(defun HtoZ (estado info)
  (if (equal estado 'H) 'Z 'vacio))

(defvar tl-operadores
  (list (list 'AtoB #'AtoB)
        (list 'AtoC #'AtoC)
        (list 'AtoD #'AtoD)
        (list 'AtoE #'AtoE)
        (list 'BtoF #'BtoF)        
        (list 'CtoF #'CtoF)
        (list 'DtoF #'DtoF)
        (list 'EtoF #'EtoF)
        (list 'EtoH #'EtoH)
        (list 'FtoG #'FtoG)
        (list 'FtoH #'FtoH)
        (list 'HtoZ #'HtoZ)))

;;;;;;;;; Función de coste

(defun coste (estado1 estado2)
  (cond ((and (equal estado1 'A) (equal estado2 'B))   4)
        ((and (equal estado1 'A) (equal estado2 'C))  10)
        ((and (equal estado1 'A) (equal estado2 'D))  10)
        ((and (equal estado1 'A) (equal estado2 'E))  15)
        ((and (equal estado1 'B) (equal estado2 'F))   5)
        ((and (equal estado1 'C) (equal estado2 'F))  20)
        ((and (equal estado1 'D) (equal estado2 'F))  10)
        ((and (equal estado1 'E) (equal estado2 'F))   3)
        ((and (equal estado1 'E) (equal estado2 'H))  30)
        ((and (equal estado1 'F) (equal estado2 'G))  35)
        ((and (equal estado1 'F) (equal estado2 'H))  30)
        ((and (equal estado1 'H) (equal estado2 'Z))   2)
        (t                                         100)))

;;;;;;;;; Función heurística

(defun heuristica (estado)
   (cond ((equal estado 'A)    80)
         ((equal estado 'B)    90)
         ((equal estado 'C)    60)
         ((equal estado 'D)    65)
         ((equal estado 'E)    70)
         ((equal estado 'F)    50)
         ((equal estado 'G)    50)
         ((equal estado 'H)    50)
         ((equal estado 'Z)     0)
         (t                  100)))

;;;;;;;;; ALgoritmos generales búsqueda A*


(defun tl-estrategia-A* (nodos-a-expandir nuevos-nodos-a-expandir) 
  (let ((union-nodos (append nuevos-nodos-a-expandir
                             nodos-a-expandir)))
    (quicksort (selecciona-estimacion union-nodos)
               union-nodos)))

(defvar problema-busquedaA*
  (list tl-operadores
        #'(lambda (info-nodo-padre estado nombre-operador) ;;; *** info-nodo-padre = (estado-padre (g g-plus-h))
            (let ((estado-padre (car info-nodo-padre))     ;;;              Distinto del original
                  (g            (caadr info-nodo-padre))
                  (g-plus-h     (cadadr info-nodo-padre)))
              (list (+ g (coste estado-padre estado))
                    (+ (+ g (coste estado-padre estado)) (heuristica estado)))))
        'A
        #'(lambda (estado) (equal estado 'Z))
        #'(lambda (estado) (list 0 (heuristica estado))) ))

(defun busqueda-A* (problema)
  (hacer-busqueda problema #'tl-estrategia-A*))




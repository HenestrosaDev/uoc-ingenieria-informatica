;;; Funcions per tractar els arbres minimax, tal i com les necessita
;;; l'algorisme d'esporga alpha beta dels materials.
;;; Suposarem que un arbre
;;; o bé és una fulla: nombre
;;; o bé no ho és: ('max/min (fill_1 fill_2 . . . fill_n))
;;;    i fill_j és un arbre
;;;
;;; He intentat de fer-ho el màxim de senzill, i RES està protegit contra
;;; errors
;;;

(defun fulla (arbre)
  (numberp arbre))

(defun avalua (arbre)
  (if (fulla arbre) arbre)) ; si no és fulla no ho considero; ja ho protegiré al codi

(defun node-min (arbre)
  (eql 'min (car arbre)))

(defun node-max (arbre)
  (eql 'max (car arbre)))

(defun fills (arbre)
  (if (not (fulla arbre)) (cadr arbre)))

;;; Esporga alpha-beta tal i com està implementada al
;;; Mòdul 2, plana 85, implementat en Common Lisp
;;;
;;; Fixem-nos que un arbre és un node amb fills, o una fulla.
;;; El codi necessitarà les següents funcions:
;;;
;;; (fulla node) -------> booleà
;;; (avalua node) ------> el valor dels nodes, típicament un cost, per tant un nombre 
;;;                       (només té sentit si (fulla node) és true)
;;; (node-min node) ----> booleà
;;; (node-max node) ----> booleà
;;; (fills node) ------> llista de nodes
;;;

(defun minimax (arbre)
  (cond 
   ((fulla arbre) (avalua arbre))
   ((node-min arbre) (apply #'min (mapcar #'minimax (fills arbre))))
   ((node-max arbre) (apply #'max (mapcar #'minimax (fills arbre))))))

(defun minimax-alpha-beta (node alpha beta)
  ;; Valors inicials: 
  ;; alpha hauria de ser -infinit (o un nombre negatiu de valor absolut molt gran)
  ;; beta  hauria de ser +infinit (o un nombre positiu de valor absolut molt gran)
  (cond
    ((fulla node)
     (let ((val (avalua node)))
           (format t "~A " val)
	;; (format t ">> ~A << ~%" val)
	   val))
    ((node-min node)
     (let ((beta-tmp beta))
       ;; (format t "min-node: ~a with alpha: ~a beta: ~a ~%" node alpha beta)
       (do ((ch (fills node) (cdr ch)))
	   ((or (null ch) (<= beta-tmp alpha)) beta-tmp)
	 (let ((r (minimax-alpha-beta (car ch) alpha beta-tmp)))
	   (if (< r beta-tmp) (setf beta-tmp r))))))
    ((node-max node)
     (let ((alpha-tmp alpha))
       ;; (format t "max-node: ~a with alpha: ~a beta: ~a ~%" node alpha beta)
       (do ((ch (fills node) (cdr ch)))
	   ((or (null ch) (<= beta alpha-tmp)) alpha-tmp)
	 (let ((r (minimax-alpha-beta (car ch) alpha-tmp beta)))
	   (if (< alpha-tmp r) (setf alpha-tmp r))))))))


(defun minimax-r (arbre)
  (cond 
   ((fulla arbre) (avalua arbre))
   ((node-min arbre) (apply #'min (mapcar #'minimax (reverse (fills arbre)))))
   ((node-max arbre) (apply #'max (mapcar #'minimax (reverse (fills arbre)))))))

(defun minimax-alpha-beta-r (node alpha beta)
  ;; Valors inicials: 
  ;; alpha hauria de ser -infinit (o un nombre negatiu de valor absolut molt gran)
  ;; beta  hauria de ser +infinit (o un nombre positiu de valor absolut molt gran)
  (cond
    ((fulla node)
     (let ((val (avalua node)))
	   (format t "~A " val)
	   val))
    ((node-min node)
     (let ((beta-tmp beta))
       (do ((ch (reverse (fills node)) (cdr ch)))
	   ((or (null ch) (<= beta-tmp alpha)) beta-tmp)
	 (let ((r (minimax-alpha-beta-r (car ch) alpha beta-tmp)))
	   (if (< r beta-tmp) (setf beta-tmp r))))))
    ((node-max node)
     (let ((alpha-tmp alpha))
       (do ((ch (reverse (fills node)) (cdr ch)))
	   ((or (null ch) (<= beta alpha-tmp)) alpha-tmp)
	 (let ((r (minimax-alpha-beta-r (car ch) alpha-tmp beta)))
	   (if (< alpha-tmp r) (setf alpha-tmp r))))))))


;; Aquest algorisme només funciona bé amb arbres amb max a l'arrel i
;; mateix nombre de tirades dels dos jugadors, és a dir, els arbres
;; d'alçada 1 han de ser arbres min.

(defun mystery-wrong (p x1 x2)
  ;; (format t "node: ~a with alpha: ~a beta: ~a ~%" p x1 x2)
  (if (fulla p)
     (let ((val (avalua p)))
    ;; (format t ">> ~A << ~%" val)
       (format t "~A " val)
       val)
     (let ((w (fills p))
	   (m x1))
       (dolist (q w m) (let ((k (- (mystery-wrong q (- x2) (- m)))))
			 (if (> k m) (setf m k))
			 (if (>= m x2) (return m)))))))

(defun mystery-right (p x1 x2)
  ;; (format t "node: ~a with alpha: ~a beta: ~a ~%" p x1 x2)
  (if (fulla p)
     (let ((val (avalua p)))
    ;; (format t ">> ~A << ~%" val)
       (format t "~A " val)
       val)
     (let ((w (fills p))
	   (m -1000))
       (dolist (q w m) (let ((k (- (mystery-right q (- x2) (- (max x1 m))))))
			 (if (> k m) (setf m k))
			 (if (>= m x2) (return m)))))))

;;; Tests
;;; Utilitzo els exemples resolts de:
;;; "Problemas Resueltos de Inteligencia Artificial Aplicada: Búsqueda y Representación"
;;; S.Fernández, J.González y J.Mira
;;; Addison Wesley/Pearson 1998, ISBN 84-7829-017-6
;;;

;;; Resultat: 10
;;; 15 14 13 11 10 9 7 5 
(defparameter *tree-decreasing*
  '(max ((min ((max ((min (15 14))
		     (min (13 12))))
	       (max ((min (11 10))
		     (min (9 8))))))
	 (min ((max ((min (7 6))
		     (min (5 4))))
	       (max ((min (3 2))
		     (min (1 0)))))))))

;;; Resultat: -5
;;; 0 -1 -2 -4 -5 -6 -8 -10
(defparameter *tree-decreasing-2*
  '(max ((min ((max ((min (0 -1))
		     (min (-2 -3))))
	       (max ((min (-4 -5))
		     (min (-6 -7))))))
	 (min ((max ((min (-8 -9))
		     (min (-10 -11))))
	       (max ((min (-12 -13))
		     (min (-14 -15)))))))))

;;; Resultat: 10
;;; 0 1 2 3 4 5 8 9 10 11 12 13
(defparameter *tree-increasing*
  '(max ((min ((max ((min (0 1))
		     (min (2 3))))
	       (max ((min (4 5))
		     (min (6 7))))))
	 (min ((max ((min (8 9))
		     (min (10 11))))
	       (max ((min (12 13))
		     (min (14 15)))))))))

;;; Resultat: 4 (https://www.youtube.com/watch?v=Ewh-rF7KSEg)
;;; 4 5 6 3 4 3
(defparameter *tree-levels*
  '(max ((min (4 5))
         (min (6
               (max (3 4)) 
               (max (7 9))))
         (min (3 8)))))


;;; Resultat: -15
;;; 21 -85 7 -8 -11 -65 7 -42 -14 -15 73 99 -37
(defparameter *tree-example3*
  '(max ((min (21 -85 7 -8)) 
         (min (-11 -65 7 -42))
         (min (-14 -15 73 99))
         (min (-37 -71 -97 -90)))))

;;; Resultat: -15
;;; -76 -28 3 -60 -66 -36 -88 13 -7 50 19 16 -15 -67
(defparameter *tree-example4*
  '(max ((min ((max ((min (-76 -28))
		     (min (3 -60))))
	       (max ((min (-66 -36))
		     (min (-88 56))))))
	 (min ((max ((min (13 -7))
		     (min (50 19))))
	       (max ((min (16 -15))
		     (min (-67 46)))))))))

;;-------------------------------------------------------

;;; Resultat: 16
;;; -9 18 -5 16 7 -5 -3 16 -17 9 -8 13 18 4 -12 12 10
(defparameter *tree-001*
  '(max ((min ((max (-9 18 -5))
	       (max (16 7 -5))
	       (max (-3 16 11))))
	 (min ((max (-17 9 -8))
	       (max (-13 -2 2))
	       (max (5 16 1))))
	 (min ((max (13 18 4))
	       (max (-12 12 10))
	       (max (-10 -5 6)))))))

;;; Resultat: 8
;;; 2 2 0 -5 4 -11 5 -18 -1 1 -8 -9 8 -7 12 16
(defparameter *tree-002*
  '(max ((min ((max (2 2 0))
	       (max (-5 4 -6))
	       (max (-11 5 10))))
	 (min ((max (-18 -1 1))
	       (max (-10 -6 -4))
	       (max (-9 16 19))))
	 (min ((max (-8 -9 8))
	       (max (-7 12 -9))
	       (max (16 -7 19)))))))

;;; Resultat: 5
;;; 8 7 3 9 2 4 1 1 3 5 3 9 6 1 2 3
(defparameter *tree-101*
  '(max ((min ((max (8 7 3))
	       (max (9 1 6))
	       (max (2 4 1))))
	 (min ((max (1 3 5))
	       (max (3 9 2))
	       (max (6 5 2))))
	 (min ((max (1 2 3))
	       (max (9 7 2))
	       (max (16 6 4)))))))

;;; Resultat: 16
;;; -9 18 -5 16 7 -5 -3 16 -17 9 -8 13 18 4 -12 12 10 
(defparameter *tree-102*
  '(max ((min ((max (-9 18 -5))
	       (max (16 7 -5))
	       (max (-3 16 11))))
	 (min ((max (-17 9 -8))
	       (max (-13 -2 2))
	       (max (5 16 1))))
	 (min ((max (13 18 4))
	       (max (-12 12 10))
	       (max (-10 -5 6)))))))

;;-------------------------------------------------------

;;; Resultat: 6
;;; 4 5 6 13 17 3
(defparameter *tree-myst-01*
  '(max ((min (4 5))
         (min (6
               (max (13 14)) 
               (max (17 19))))
         (min (3 8)))))

;;; Resultat: 2
;;; 8 7 3 9 1 2 1 3 5 3 9 2 6 5 2 1 2 3 9 7 2
(defparameter *tree-myst-02*
  '(min ((max ((min (8 7 3))
	       (min (9 1 6))
	       (min (2 4 1))))
	 (max ((min (1 3 5))
	       (min (3 9 2))
	       (min (6 5 2))))
	 (max ((min (1 2 3))
	       (min (9 7 2))
	       (min (16 6 4)))))))



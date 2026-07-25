INSERT INTO "course" (title,description,instructor,enrollmentstartdate,enrollmentenddate,mode,price,objectives,methology,duration,language,location,status)
VALUES ('Digital Editing','course about Digital Editing','instructor1@uoc.edu','2025-01-11','2025-12-31','Face-to-face course', 1000.00,'DE Qualification','methology 1', '120','English','London','CLOSED')
	 , ('Night Photography','course about Night Photography','instructor2@uoc.edu','2026-01-01','2026-05-30','Online course', 800.00,'NP Qualification','methology 2', '200','English','on the net','ENROLLMENT_OPEN')
	 , ('Sports Photography','course about Sports Photography','instructor3@uoc.edu','2026-06-01','2026-07-31','Online course', 900.00,'SP qualification','methology 3', '100','English','on the net','ACTIVE')
;

INSERT INTO "enrollment" (course_id,enrollmentdate,qualification,status,student)
VALUES (1,'2025-12-31',0,'CLOSED','user2@uoc.edu')
     , (1,'2025-12-31',0,'CLOSED','user5@uoc.edu')
     , (2,'2025-12-31',0,'ACTIVE','user2@uoc.edu')
     , (2,'2025-12-31',0,'ACTIVE','user3@uoc.edu')
     , (3,'2025-12-31',0,'ACTIVE','user3@uoc.edu')
;


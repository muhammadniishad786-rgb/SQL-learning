// constraints are rules applied to table columns or tables to ensure that only valid data is stored

// Database-ൽ തെറ്റായതോ അനുവദിക്കാത്തതോ ആയ data സൂക്ഷിക്കുന്നത് തടയാൻ ഉപയോഗിക്കുന്ന നിയമങ്ങളാണ് Constraints.
// ex:

// Constraint	Purpose	                    Example
// PRIMARY KEY	Unique row identifier	    id PRIMARY KEY
// FOREIGN KEY	Maintains relationships	    student_id REFERENCES student(id)
// NOT NULL	    Value is required	        name VARCHAR(30) NOT NULL
// UNIQUE	    Prevents duplicate values	email VARCHAR(50) UNIQUE
// CHECK	    Validates a condition	    CHECK (age >= 18)
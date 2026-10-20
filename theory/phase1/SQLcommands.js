// SQL commands are commonly grouped into five categories in basic theory.
// Category	Full form	                     Purpose	                    Examples
// DDL	    Data Definition Language	     Defines database structures	CREATE, ALTER, DROP
// DML	    Data Manipulation Language	     Inserts or modifies data	    INSERT, UPDATE, DELETE
// DQL	    Data Query Language	Retrieves    data	                        SELECT
// DCL	    Data Control Language	Manages  permissions	                GRANT, REVOKE
// TCL	    Transaction Control Language	 Manages transactions	        COMMIT, ROLLBACK

// Malayalam explanations:
// - DDL: Database structure ഉണ്ടാക്കാനും മാറ്റാനും ഉപയോഗിക്കുന്നു.
// - DML: Table-ലെ data ചേർക്കാനും മാറ്റാനും നീക്കം ചെയ്യാനും ഉപയോഗിക്കുന്നു.
// - DQL: Database-ൽ നിന്ന് data വായിക്കാൻ ഉപയോഗിക്കുന്നു.
// - DCL: Database permissions നിയന്ത്രിക്കാൻ ഉപയോഗിക്കുന്നു.
// - TCL: Transaction commit ചെയ്യാനോ rollback ചെയ്യാനോ ഉപയോഗിക്കുന്നു.

// -- DDL
// CREATE TABLE department (id INTEGER PRIMARY KEY);

// -- DML
// INSERT INTO department (id) VALUES (1);

// -- DQL
// SELECT * FROM department;

// -- DCL
// GRANT SELECT ON department TO app_user;

// -- TCL
// COMMIT;
CREATE TABLE "list" (
	"id" SERIAL PRIMARY KEY,
    "notes" VARCHAR(256) NOT NULL,
    "isDone" BOOLEAN DEFAULT FALSE
);

INSERT INTO "list"
	("notes", "isDone")
VALUES
	('Do laundry', 'false'),
	('Clean dishes', 'false'),
	('Make the bed', 'false'),
	('Mop the kitchen', 'false'),
	('Walk the dog', 'true');
	
SELECT * FROM "list";
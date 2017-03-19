DROP TABLE sensor;
DROP TABLE map;
DROP TABLE space;
DROP TABLE spaceuser;

CREATE TABLE spaceuser(
	uID		int ,
	uName	char(40),
	pw		char(20),
	PRIMARY KEY (uID)
);

CREATE TABLE space(
	sID		int,
	sName	char(40),
	uID     int NOT NULL REFERENCES spaceuser(uID),
	PRIMARY KEY (sID)
);

CREATE TABLE map(
	mID		int,
	sID     int NOT NULL REFERENCES space(sID),
	mName	char(40),
	img		char(100),
	PRIMARY KEY (mID)
);

CREATE TABLE sensor(
	ssID	int,
	mID     int NOT NULL REFERENCES map(mID),
	LocX	float(53),
	LocY	float(53),
	PRIMARY KEY (ssID)
);

INSERT INTO spaceuser (uID, uName, pw) VALUES (1,'Tim','ilovegyming');

INSERT INTO space (sID, sName, uID) VALUES (123, 'Life Science Centre', 1);

INSERT INTO space (sID, sName, uID) VALUES (124, 'Computer Science Bldg', 1);




    CREATE TABLE BILETT(
        id INTEGER AUTO_INCREMENT NOT NULL,
        fornavn VARCHAR (255) NOT NULL,
        etternavn VARCHAR (255) NOT NULL,
        epost VARCHAR (255) NOT NULL,
        nummer VARCHAR (255) NOT NULL,
        antall VARCHAR(255) NOT NULL,
        film VARCHAR(255) NOT NULL,
        primary key (id)
    );
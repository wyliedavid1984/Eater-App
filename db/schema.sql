DROP IF DATABASE EXISTS burgerdb;

CREATE DATABASE burgerdb;

USE burgerdb;

CREATE TABLE burgers(
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(30),
devoured BOOLEAN DEFAULT false,
PRIMARY KEY (id)
);

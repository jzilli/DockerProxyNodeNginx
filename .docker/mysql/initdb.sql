CREATE DATABASE IF NOT EXISTS full_cycle;
USE full_cycle;
CREATE TABLE people (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(25) NOT NULL,
  PRIMARY KEY (id));
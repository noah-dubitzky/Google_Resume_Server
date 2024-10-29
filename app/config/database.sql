-- Use the resume database
USE resume;

-- Create the Admin table if it doesn't exist
CREATE TABLE IF NOT EXISTS Admin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Create the States table if it doesn't exist
CREATE TABLE IF NOT EXISTS States (
    id INT AUTO_INCREMENT PRIMARY KEY,
    state_name VARCHAR(255) NOT NULL
);

-- Create the Companies table if it doesn't exist
CREATE TABLE IF NOT EXISTS Companies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    company_name VARCHAR(255) NOT NULL
);

-- Create the Senders table if it doesn't exist
CREATE TABLE IF NOT EXISTS Senders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    number VARCHAR(50) NOT NULL,
    state_id INT,
    company_id INT,
    FOREIGN KEY (state_id) REFERENCES States(id) ON DELETE SET NULL,
    FOREIGN KEY (company_id) REFERENCES Companies(id) ON DELETE SET NULL
);

-- Create the Messages table if it doesn't exist
CREATE TABLE IF NOT EXISTS Messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sender_id INT,
    message TEXT NOT NULL,
    FOREIGN KEY (sender_id) REFERENCES Senders(id) ON DELETE CASCADE
);

-- Populate the States table with all 50 U.S. states
INSERT INTO States (state_name) VALUES
('Alabama'),
('Alaska'),
('Arizona'),
('Arkansas'),
('California'),
('Colorado'),
('Connecticut'),
('Delaware'),
('Florida'),
('Georgia'),
('Hawaii'),
('Idaho'),
('Illinois'),
('Indiana'),
('Iowa'),
('Kansas'),
('Kentucky'),
('Louisiana'),
('Maine'),
('Maryland'),
('Massachusetts'),
('Michigan'),
('Minnesota'),
('Mississippi'),
('Missouri'),
('Montana'),
('Nebraska'),
('Nevada'),
('New Hampshire'),
('New Jersey'),
('New Mexico'),
('New York'),
('North Carolina'),
('North Dakota'),
('Ohio'),
('Oklahoma'),
('Oregon'),
('Pennsylvania'),
('Rhode Island'),
('South Carolina'),
('South Dakota'),
('Tennessee'),
('Texas'),
('Utah'),
('Vermont'),
('Virginia'),
('Washington'),
('West Virginia'),
('Wisconsin'),
('Wyoming');

-- Database: picture-share-like

-- Table setup
CREATE TABLE pictures (
    id SERIAL PRIMARY KEY,
    picture_path VARCHAR (450) NOT NULL,
    picture_description VARCHAR (250) NOT NULL,
    likes integer NOT NULL
);



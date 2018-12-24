-- Database: picture-share-like

-- Table setup
CREATE TABLE pictures (
    id SERIAL PRIMARY KEY,
    picture_path VARCHAR (450) NOT NULL,
    picture_description VARCHAR (250) NOT NULL,
    likes integer NOT NULL
);

INSERT INTO pictures (picture_path, picture_description, likes)
VALUES ('https://upload.wikimedia.org/wikipedia/commons/f/ff/Domestic_goat_kid_in_capeweed.jpg', 'Photo of a goat taken at Glacier National Park.', 0 );



SELECT * FROM pictures;
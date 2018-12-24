const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pg = require('pg');

// DO NOT MODIFY THIS FILE FOR BASE MODE
// DB CONNECTION
const config = {
    database: 'picture-share-like',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
};
const pool = new pg.Pool(config);

pool.on("connect", () => {
    console.log('connected');
});

pool.on("error", (err) => {
    console.log('not connected', err);
});

// DELETE
router.delete('/delete/:id', (req, res) => {
    let reqId = req.params.id;
    console.log('Delete request for id', reqId);
    let sqlText = `DELETE FROM pictures WHERE id=$1;`;
    console.log(sqlText);

    pool.query(sqlText, [reqId])
        .then((result) => {
            console.log('picture deleted');
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error in deleting ${sqlText}`, error);
            res.sendStatus(500);
        })
})

// POST
router.post('/', (req, res) => {
    let pictureObj = req.body;
    console.log(pictureObj);
    let sqlText = `INSERT INTO pictures (picture_path, picture_description, likes) 
    VALUES ($1, $2, $3);`
    pool.query(sqlText, [pictureObj.picture_path, pictureObj.picture_description, pictureObj.likes])
        .then((result) => {
            console.log(result);
            res.send(pictureObj);
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
})

// PUT Route
router.put('/like/:id', (req, res) => {
       let reqId = req.params.id;
       console.log('increased likes for id', reqId);
       let sqlText = `UPDATE pictures SET likes=likes+1 WHERE id=$1;`;
       console.log(sqlText);

       pool.query(sqlText, [reqId])
           .then((result) => {
               console.log('likes increased');
               res.sendStatus(200);
           })
           .catch((error) => {
               console.log(`Error in increasing likes ${sqlText}`, error);
               res.sendStatus(500);
           })
       }) // END PUT Route

// GET Route
router.get('/', (req, res) => {
    let sqlText = 'SELECT * FROM "pictures" ORDER BY "id" DESC;'
    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
            console.log(result.rows);
            
        })
        .catch((error) => {
            console.log('error', error);
            res.sendStatus(500);
        })
}); // END GET Route

module.exports = router;
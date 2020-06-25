const router = require('express').Router();
const { Picture } = require('../../models');

// GET /api/pictures
// get all of the pictures, no filter
router.get('/', (req, res) => {
   Picture.findAll({})
      .then(dbPictureData => {
         if (!dbPictureData) {
            res.status(404).json({ message: 'There are no pictures in the database' });
            return;
         }
         res.json(dbPictureData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

// GET /api/pictures/1
// get one picture
router.get('/:id', (req, res) => {
   Picture.findOne({
      where: {
         id: req.params.id
      }
   })
      .then(dbPictureData => {
         if (!dbPictureData) {
            res.status(404).json({ message: 'There were no pictures with that id' });
            return;
         }
         res.json(dbPictureData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

// POST /api/pictures
// create a picture entry
router.post('/', (req, res) => {
   Picture.create({
      filetype: req.body.filetype,
      filename: req.body.filename,
      data: req.body.data,
      annotation: req.body.annotation,
      post_id: req.body.post_id,
      user_id: req.body.user_id
      // user_id: req.sesssion.user_id
   })
      .then(dbPictureData => res.json(dbPictureData))
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

// PUT /api/pictures/1
// update a picture's information
router.put('/:id', (req, res) => {
   Picture.update(req.body, {
      where: {
         id: req.params.id
      }
   })
      .then(dbPictureData => {
         if (!dbPictureData[0]) {
            res.status(404).json({ message: 'There are not pictures with that id' });
            return;
         }
         res.json(dbPictureData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

// DELETE /api/pictures/1
// delete a picture from the database
router.delete('/:id', (req, res) => {
   Picture.destroy({
      where: {
         id: req.params.id
      }
   })
      .then(dbPictureData => {
         if (!dbPictureData) {
            req.status(404).json({ message: 'There are no pictures with that id' });
            return;
         }
         res.json(dbPictureData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

module.exports = router;
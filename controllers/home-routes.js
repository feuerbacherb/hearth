const router = require('express').Router();
const sequelize = require('../config/connection');
const { Comment, Picture, Post, tblGroup, User, UserGroup } = require('../models');
router.get('/', (req, res) => {
   if (req.session.loggedIn) {
      //console.log("AFTER LOGGING IN", JSON.stringify(req.session));
      console.log("\n\nTHIS IS ME TRYING TO SPLIT IT OUT", req.session.user_id);

      res.render('homepage', { 
         loggedIn: true,
         groups: [
            {
               name: 'Terry Thompson'
            }
         ],
         user_id: req.session.user_id
      });
      return;
   }
   res.render('login');
});

router.get('/dapost', (req,res)=>{
   if (req.session.loggedIn) {
      
      console.log("\n\nTHIS IS ME TRYING TO SPLIT IT OUT", req.session.user_id);
      
      //find all post with group id of req.params.id


   res.render('post',{}); 
   return;   
   }
   res.render('login');
});

router.get('/group', (req,res)=>{
   if (req.session.loggedIn) {
      
      console.log("\n\nTHIS IS ME TRYING TO SPLIT IT OUT", req.session.user_id);
      
      //find all post with group id of req.params.id


   res.render('group',{}); 
   return;   
   }
   res.render('login');
});





module.exports = router;

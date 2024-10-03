const express = require('express');
const router = express.Router();


router.post('/create', (req, res) => {
        const { classes, priorities } = req.body; 
        const schedule = generateSchedule(classes, priorities); 

        res.render('schedule', { schedule });
      });
      
      // Example scheduling function (this should be more sophisticated)
      function generateSchedule(classes, priorities) {
        return `Generated schedule based on classes: ${classes} and priorities: ${priorities}`;
      }



module.exports = router;
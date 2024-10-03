const express = require('express');
const app = express();

// Set EJS as the template engine
app.use(express.static("public"))

// Set the view engine to EJSs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');  // Render the index.ejs file/input form
});



const scheduleRouter = require('./routes/schedule');

app.use("/schedules", scheduleRouter);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
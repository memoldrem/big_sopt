const express = require('express');
const app = express();

//serve files from public folder
app.use(express.static("public"))

// Set the view engine to EJSs
app.set('view engine', 'ejs');


const userRouter = require('./routes/users')

app.use("/users", userRouter)

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
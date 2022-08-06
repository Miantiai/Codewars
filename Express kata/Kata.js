const express = require("express");
const app = express(); // be sure to use the variable `app`

app.use(express.json());

app.get('/', (req, res) => {
  console.log(req.query);
  let {message} = req.query;
  console.log(message);
  if(message === undefined || typeof message !== 'string') {
    res.contentType('text/plain').sendStatus(422);
  }
   
  res.status(200).json( {message} );
  // /?message=test
})

app.post('/', (req, res) => {
  console.log(req.body);
  let {message} = req.body
  if(message === undefined || typeof message !== 'string') {
    res.contentType('text/plain').sendStatus(422);
  } 
  res.status(200).json({message});X
  // /?message=test
})

// {
//   "test": "test"
// }

app.listen(3005, () => {
  console.log(`listen 3005`);
});

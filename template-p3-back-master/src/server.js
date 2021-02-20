require('dotenv').config();
const PORT = process.env.PORT;
const app = require('./app');
const db_connection = require('./db_connection');


app.post('/register',(req,res)=> {

  const username = req.body.username ;
  const password = req.body.password ;

  db_connection.query("INSERT INTO user (name , password) VALUES (?,?)", 
  [username,password],(err, result) =>{
    console.log(err);
    if (err) {
      res.send({message: "Nom de compte déja utilisé, veuillez choisir un autre identifiant."});
    }
    if(result) {
      res.send(result);
    }
   
  } 
  );
});


app.post('/login', (req,res)=>{
  const username = req.body.username ;
  const password = req.body.password ;

  db_connection.query("SELECT * FROM user WHERE name = ? AND password = ?", 
  [username,password],(err, result) =>{
    if(err) {
      res.send({err: err});

       } 
     if (result.length > 0) {
         res.send(result);
         console.log(result);
       }
    else {
      res.send({message: "Mauvaise combinaison d'identifiants !"})
    }
  
      
       
  } 
  );
});

app.listen(PORT, (err) => {
  if (err) {
    console.error(`Error: ${err.message}`);
  } else {
    console.log(`Server is running on port: ${PORT}`);
  }
});

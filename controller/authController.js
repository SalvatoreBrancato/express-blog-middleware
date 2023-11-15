const generateJWT = require('../utilites/generateJWT');
const dbUsers = require('../db/user.json');

function login(req, res){
    //legge username e password da req.body
    const {username, password} = req.body;

    if (!username || !password) {
        res.status(400).send("username e password sono obbligatori");
        return;
      }

      const user = dbUsers.find((user)=> user.username ===username && user.password === password);

      if(!user){
        res.status(401).send('username e/o password non sono corretti')
        return;
      }

    // una volta trovato un utente con quell'username e password,
    // possiamo generare un token JWT e inviarlo al client
    const token = generateJWT(user)

    res.json({
        token
    })
}

module.exports = {
    login
}

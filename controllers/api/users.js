/*========================================
        DEPENDENCIES
========================================*/
const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

/*========================================
        EXPORTS
========================================*/
module.exports = {
  create,
  login,
  checkToken,
  remove,
  update
}

/*========================================
        USER FUNCTIONS
========================================*/
function checkToken(req, res) {
  console.log('req.user', req.user);
  res.json(req.exp)
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email })
    console.log(req.body)
    
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    res.json(createJWT(user))
  } catch {
    res.status(400).json("Invalid Credentials");
  }
}

async function create(req, res) {  
  try {
    const user = await User.create(req.body);
    const token = createJWT(user)
    res.json(token)
  } catch (err) {
    res.status(400).json(err);
  }
}

async function remove(req, res) {  
  try {
    const user = await User.findOneAndDelete({ _id: req.body._id });
    console.log(user)
    res.json(user)
  } catch (err) {
    res.status(400).json(err);
  }
}

async function update(req, res) {
  let user_id = "62c87747c1c54d66cc680e08"
 let newname = User.findByIdAndUpdate(user_id, { email: 'jess@gmail.com' },
    function (err, docs) {
      if (err) {
        console.log(err)
      }
      else {
        console.log("Updated User : ", docs);
      }
      res.json(newname)
    });
}
/*========================================
        HELPER FUNCTIONS
========================================*/
// Reusable JWT creation
function createJWT(user) {
  return jwt.sign(
    { user },
    process.env.SECRET,
    { expiresIn: '24hr' }
  );
}
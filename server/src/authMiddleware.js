const Cookies = require("js-cookie")
const jwt = require("jsonwebtoken")

exports.authMiddleware = (req, res, next) => {
  const token = req.cookies.token;

  // console.log(token);

  if (!token) {
    return res.status(401).json({ msg: 'Token não fornecido' });
  }
  try {
    const secret = process.env.SECRET;
    jwt.verify(token, secret);
    

    next();
  } catch (err) {
    res.status(401).json({ msg: "O Token é inválido!" });
  }
  
};
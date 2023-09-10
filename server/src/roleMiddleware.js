const jwt = require("jsonwebtoken");

exports.roleMiddleware = (role) => {
    return (req, res, next) => {
        const token = req.cookies.token
        const decodedToken = jwt.decode(token)
        const userRole = decodedToken.role
        if (userRole !== role) {
          return res.status(403).json({ msg: 'Permissão negada!' });
        }
        next();
      };
}


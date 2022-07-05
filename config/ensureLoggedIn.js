/*========================================
        LOGIN CONFIRMATION
========================================*/
function ensureLoggedIn(req, res, next) {
  if (!req.user) return res.status(401).json('Unauthorized user')
  next();
}

/*========================================
        EXPRORTS
========================================*/
module.exports = ensureLoggedIn
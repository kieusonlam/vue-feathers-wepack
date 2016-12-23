'use strict';

module.exports = function (app) {
  return function (req, res, next) {
    const body = req.body

    app.service('users').create({
      email: body.email,
      password: body.password
    })
    .then(user => res.send('Welcome! You have signed up successfully.'))
    .catch(error => {
      if (error.code == 409) {
        res.send('This email is already in use.')
      } else {
        next(error)
      }
    })
  }
}

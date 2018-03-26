const userModel = require('../models/Users')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken')
const historyModel = require('../models/History')
require('dotenv').config()

const getDecode = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
      if (!err) {
        resolve(decoded)
      } else {
        reject(err)
      }
    });
  })
}
class User {
  static getUsers(req, res) {
    userModel.find().populate(userHistory)
      .then((users) => {
        res.status(200).json({
          users
        })
      })
      .catch((err) => {
        res.status(500).send(err)
      })
  }

  static login(req, res) {
    console.log(req.body.email)
    userModel.find({ email: req.body.email })
      .then(users => {
        bcrypt.compare(req.body.password, users[0].password, function (error, respond) {
          if (!error) {
            if (respond) {
              let user = users[0]
              let userToClient = {
                _id: user._id,
                username: user.username,
                email: user.email
              }
              let token = jwt.sign({
                _id: userToClient._id,
                email: user.email
              }, process.env.SECRET_KEY);
              res.status(200).json({
                status: 'login ok',
                user: userToClient,
                token: token
              })
            } else {
              res.status(400).send('wrong password')
            }
          } else {
            res.status(500).send(error)
          }
        });
      })
      .catch(err => {
        console.log(err)
        res.status(500).send(err)
      })
  }
  static addUser(req, res) {
    if (!req.body.password) {
      res.status(400).send('password cant be empty')
    } else {
      bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        if (!err) {
          userModel.create({
            username: req.body.username,
            password: hash,
            email: req.body.email
          })
            .then((userCreated) => {
              res.status(200).json({
                status: 'created ok',
                user: userCreated
              })
            })
            .catch(err => {
              res.status(500).send(err)
            })
        } else {
          conosle.log(err)
          res.status(500).send(err)
        }
      });
    }

  }
  static addHistory(req, res) {
    getDecode(req.headers.token)
      .then((decode) => {
        historyModel.create({
          category: req.body.category,
          score: req.body.score,
          status: req.body.status
        })
          .then(history => {
            console.log(history)
            userModel.findById(req.params.id)
              .then(user => {
                user.userHistory.push(history._id)
                user.save()
                  .then(userUpdated => {
                    res.status(200).json({
                      status: 'update history ok',
                    })
                  })
                  .catch(err => {
                    res.status(500).send(err)
                  })
              })
              .catch(err => {
                res.status(500).send(err)
              })
          })
          .catch(err => {
            res.status(400).send('ada yang kurang bro')
          })
      })
      .catch((err) => {
        res.status(403).send('forbiden')
      })
  }
}

module.exports = User
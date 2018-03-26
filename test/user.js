process.env.NODE_ENV = 'test'
require('dotenv').config()

let mongoose = require('mongoose')
let History = require('../models/History')
let User = require('../models/Users')
let Move = require('../models/Move')
let movementModel = require('../models/Movement')

let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../MockServer')
let should = chai.should()
const bcrypt = require('bcrypt');

chai.use(chaiHttp)

describe('Users', function () {

  beforeEach(function (done) {
    User.remove({}, function (err) {
      done()
    })
  })

  describe('/POST/register should not POST without username field', function () {
    it('should not POST without username field', function (done) {
      let user = new User({ email: 'test@mail.com', password: 'password' })
      chai.request(server)
        .post('/register')
        .send(user)
        .end(function (err, res) {
          res.should.have.status(500)
          res.body.should.be.a('object')
          // res.body.should.have.property('message')
          // res.body.message.should.have.property('errors')
          // res.body.message.errors.should.have.property('username')
          // res.body.message.errors.username.should.have.property('kind').eql('required')
          done()
        })
    })
  })

  describe('/POST/register should not POST without email field', function () {
    it('should not POST without email field', function (done) {
      let user = new User({ username: 'test@mail.com', password: 'password' })
      chai.request(server)
        .post('/register')
        .send(user)
        .end(function(err, res)  {
          res.should.have.status(500)
          res.body.should.be.a('object')
          // res.body.should.have.property('message')
          // res.body.message.should.have.property('errors')
          // res.body.message.errors.should.have.property('email')
          // res.body.message.errors.email.should.have.property('kind').eql('required')
          done()
        })
    })
  })

  describe('/POST/register should not POST without password field',function ()  {
    it('should not POST without password field', function(done)  {
      let user = new User({ email: 'test@mail.com', username: 'username' })
      chai.request(server)
        .post('/register')
        .send(user)
        .end(function(err, res)  {
          res.should.have.status(400)
          res.body.should.be.a('object')
          // res.body.should.have.property('message')
          // res.body.message.should.have.property('errors')
          // res.body.message.errors.should.have.property('password')
          // res.body.message.errors.password.should.have.property('kind').eql('required')
          done()
        })
    })
  })

  describe('/POST/register should be a success signup', function()  {
    it('should be a success signup',function (done)  {
      let user = {
        email: 'bbb@testmail.com',
        username: 'userame123',
        password: 'password123'
      }
      chai.request(server)
        .post('/register')
        .send(user)
        .end(function(err, res)  {
          res.should.have.status(200)
          res.body.should.be.a('object')
          // res.body.should.have.property('message')
          // res.body.should.have.property('data')
          // res.body.data.should.have.property('email')
          // res.body.data.should.have.property('username')
          // res.body.data.should.have.property('password')
          done()
        })
    })
  })



  describe('/POST/login should success loged in a user',function ()  {
    it('should success loged in a user ', function(done)  {
      let password = bcrypt.hashSync('password', 10)
      let login = new User({ username: 'aaa', email: 'z@mail.com', password: password })
      let user = {
        email: 'z@mail.com',
        password: 'password'
      }
      login.save(function(err, login)  {
        chai.request(server)
          .post('/login')
          .send(user)
          .end(function(err, res)  {
            res.should.have.status(200)
            done()
          })
      })
    })
  })

  describe('/POST/history should not post without category field',function ()  {
    it('should not post without category field',function (done)  {
      let password = bcrypt.hashSync('password', 10)
      let login = new User({ username: 'ooo', email: 'o@mail.com', password: password })
      let history = new History({ score: 100, status: 'good' })
      let user = {
        email: 'o@mail.com',
        password: 'password'
      }
      login.save(function(err, login)  {
        chai.request(server)
          .post('/login')
          .send(user)
          .end(function(err, res)  {
            res.should.have.status(200)
            res.should.be.a('object')
            res.body.should.have.property('token')
            chai.request(server)
              .post('/users/:id/addHistory')
              .set('token', res.body.token)
              .send(history)
              .end(function(err, res)  {
                res.should.have.status(400)
                done()
              })
          })
      })
    })
  })

  describe('/POST/history should not post without score field', function()  {
    it('should not post without score field', function(done)  {
      let password = bcrypt.hashSync('password', 10)
      let login = new User({ username: 'ccc', email: 'c@mail.com', password: password })
      let history = new History({ category: 'jab', status: 'good' })
      let user = {
        email: 'c@mail.com',
        password: 'password'
      }
      login.save(function(err, login)  {
        chai.request(server)
          .post('/login')
          .send(user)
          .end(function(err, res)  {
            res.should.have.status(200)
            res.should.be.a('object')
            res.body.should.have.property('token')
            chai.request(server)
              .post('/users/:id/addHistory')
              .set('token', res.body.token)
              .send(history)
              .end(function(err, res)  {
                res.should.have.status(400)
                done()
              })
          })
      })
    })
  })

  describe('/POST/history should not post without score field',function ()  {
    it('should not post without score field', function(done)  {
      let password = bcrypt.hashSync('password', 10)
      let login = new User({ username: 'ccc', email: 'c@mail.com', password: password })
      let history = new History({ category: 'jab', status: 'good' })
      let user = {
        email: 'c@mail.com',
        password: 'password'
      }
      login.save(function(err, login)  {
        chai.request(server)
          .post('/login')
          .send(user)
          .end(function(err, res)  {
            res.should.have.status(200)
            res.should.be.a('object')
            res.body.should.have.property('token')
            chai.request(server)
              .post('/users/:id/addHistory')
              .set('token', res.body.token)
              .send(history)
              .end(function(err, res)  {
                res.should.have.status(400)
                done()
              })
          })
      })
    })
  })

  describe('/POST/history should not post without status field',function ()  {
    it('should not post without status field',function (done)  {
      let password = bcrypt.hashSync('password', 10)
      let login = new User({ username: 'ddd', email: 'd@mail.com', password: password })
      let history = new History({ category: 'jab', score: 100 })
      let user = {
        email: 'd@mail.com',
        password: 'password'
      }
      login.save(function(err, login)  {
        chai.request(server)
          .post('/login')
          .send(user)
          .end(function(err, res)  {
            res.should.have.status(200)
            res.should.be.a('object')
            res.body.should.have.property('token')
            chai.request(server)
              .post('/users/:id/addHistory')
              .set('token', res.body.token)
              .send(history)
              .end(function(err, res)  {
                res.should.have.status(400)
                done()
              })
          })
      })
    })
  })

  describe('/POST/history should not post without login',function ()  {
    let history = new History({ category: 'jab', score: 100, status: 'good' })
    it('should not post without login',function (done)  {
      chai.request(server)
        .post('/users/:id/addHistory')
        .send(history)
        .end(function(err, res)  {
          res.should.have.status(403)
          done()
        })
    })
  })

  describe('/POST/history should success', function()  {
    it('should success', function(done)  {
      let password = bcrypt.hashSync('password', 10)
      let login = new User({ username: 'aaa', email: 'a@mail.com', password: password })
      let history = new History({ category: 'jab', score: 100, status: 'good' })
      let user = {
        email: 'a@mail.com',
        password: 'password'
      }
      login.save(function(err, login)  {
        chai.request(server)
          .post('/login')
          .send(user)
          .end(function(err, res)  {
            res.should.have.status(200)
            res.should.be.a('object')
            res.body.should.have.property('token')
            // console.log(login)
            chai.request(server)
              .post('/users/:id/addHistory')
              .set('token', res.body.token)
              .send(history)
              .end(function(err, res)  {
                res.should.have.status(200)
              })
            done()
          })
      })
    })
  })

})

// process.env.NODE_ENV = 'test'
// require('dotenv').config()

// let mongoose = require('mongoose')
// let History = require('../models/History')
// let User = require('../models/Users')
// let Move = require('../models/Move')
// let movementModel = require('../models/Movement')

// let chai = require('chai')
// let chaiHttp = require('chai-http')
// let server = require('../MockServer')
// let should = chai.should()
// const bcrypt = require('bcrypt');

// chai.use(chaiHttp)

// describe('History', () => {

  // beforeEach((done) => {
  //   movementModel.remove({}, (err) => {
  //   })
  //   Move.remove({}, (err) => {
  //   })
  //   History.remove({}, (err) => {
  //   })
  //   User.remove({}, (err) => {
  //   })
  //   done()
  // })

  // describe('/POST history', () => {
  //   it('should not post without category field', (done) => {
  //     let password = bcrypt.hashSync('password', 10)
  //     let login = new User({ username: 'ooo', email: 'o@mail.com', password: password })
  //     let history = new History({ score: 100, status: 'good' })
  //     let user = {
  //       email: 'o@mail.com',
  //       password: 'password'
  //     }
  //     login.save((err, login) => {
  //       chai.request(server)
  //         .post('/login')
  //         .send(user)
  //         .end((err, res) => {
  //           res.should.have.status(200)
  //           res.should.be.a('object')
  //           res.body.should.have.property('token')
  //           chai.request(server)
  //             .post('/users/:id/addHistory')
  //             .set('token', res.body.token)
  //             .send(history)
  //             .end((err, res) => {
  //               res.should.have.status(400)
  //               done()
  //             })
  //         })
  //     })
  //   })
  // })

  // describe('/POST history', () => {
  //   it('should not post without score field', (done) => {
  //     let password = bcrypt.hashSync('password', 10)
  //     let login = new User({ username: 'ccc', email: 'c@mail.com', password: password })
  //     let history = new History({ category: 'jab', status: 'good' })
  //     let user = {
  //       email: 'c@mail.com',
  //       password: 'password'
  //     }
  //     login.save((err, login) => {
  //       chai.request(server)
  //         .post('/login')
  //         .send(user)
  //         .end((err, res) => {
  //           res.should.have.status(200)
  //           res.should.be.a('object')
  //           res.body.should.have.property('token')
  //           chai.request(server)
  //             .post('/users/:id/addHistory')
  //             .set('token', res.body.token)
  //             .send(history)
  //             .end((err, res) => {
  //               res.should.have.status(400)
  //               done()
  //             })
  //         })
  //     })
  //   })
  // })


  // describe('/POST history', () => {
  //   it('should not post without status field', (done) => {
  //     let password = bcrypt.hashSync('password', 10)
  //     let login = new User({ username: 'ddd', email: 'd@mail.com', password: password })
  //     let history = new History({ category: 'jab', score: 100 })
  //     let user = {
  //       email: 'd@mail.com',
  //       password: 'password'
  //     }
  //     login.save((err, login) => {
  //       chai.request(server)
  //         .post('/login')
  //         .send(user)
  //         .end((err, res) => {
  //           res.should.have.status(200)
  //           res.should.be.a('object')
  //           res.body.should.have.property('token')
  //           chai.request(server)
  //             .post('/users/:id/addHistory')
  //             .set('token', res.body.token)
  //             .send(history)
  //             .end((err, res) => {
  //               res.should.have.status(400)
  //               done()
  //             })
  //         })
  //     })
  //   })
  // })


  // describe('/POST history', () => {
  //   let history = new History({ category: 'jab', score: 100, status: 'good' })
  //   it('should not post without login', (done) => {
  //     chai.request(server)
  //       .post('/users/:id/addHistory')
  //       .send(history)
  //       .end((err, res) => {
  //         res.should.have.status(403)
  //         done()
  //       })
  //   })
  // })

  // describe('/POST history', () => {
  //   it('should success', (done) => {
  //     let password = bcrypt.hashSync('password', 10)
  //     let login = new User({ username: 'aaa', email: 'a@mail.com', password: password })
  //     let history = new History({ category: 'jab', score: 100, status: 'good' })
  //     let user = {
  //       email: 'a@mail.com',
  //       password: 'password'
  //     }
  //     login.save((err, login) => {
  //       chai.request(server)
  //         .post('/login')
  //         .send(user)
  //         .end((err, res) => {
  //           res.should.have.status(200)
  //           res.should.be.a('object')
  //           res.body.should.have.property('token')
  //           // console.log(login)
  //           chai.request(server)
  //             .post('/users/:id/addHistory')
  //             .set('token', res.body.token)
  //             .send(history)
  //             .end((err, res) => {
  //               res.should.have.status(200)
  //             })
  //           done()
  //         })
  //     })
  //   })
  // })

// })

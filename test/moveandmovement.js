process.env.NODE_ENV = 'test'

let mongoose = require('mongoose')
let History = require('../models/History')
let User = require('../models/Users')
let Move = require('../models/Move')
let movementModel = require('../models/Movement')

let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../MockServer')
let should = chai.should()

chai.use(chaiHttp)

describe('Move and movement', function()  {

  beforeEach(function(done)  {
    movementModel.remove({}, function(err)  {
      done()
    })
  })


  describe('/POST should return success Move post', function()  {
    it('should return success Move post', function(done)  {
      let mockId = new movementModel({ name: 'jab' })

      let move = new Move({ x: 1, y: 2, z: 9, power: 9999 })
      mockId.save(function(err, mock) {
        chai.request(server)
          .post(`/movements/${mock.id}/addMove`)
          .send(move)
          .end(function(err, res) {
            console.log('ini id yg dicari', mock.id)
            console.log('ini move', move)
            console.log('ini mock', mock)
            res.should.have.status(200)
            res.body.should.be.a('object')
            res.body.should.have.property('movementUpdated')
            done()
          })
      })
    })
  })



  describe('/DELETE/:id should deleted gyro data with matching id',function ()  {
    it('should deleted gyro data with matching id', function(done) {
      let gyro = new movementModel({ name: 'hook' })
      gyro.save(function(err, gyro)  {
        chai.request(server)
          .delete('/movements/' + gyro.id + '/deleteMovement')
          .end(function(err, res)  {
            res.should.have.status(200)
            res.body.should.have.property('status').eql('deleted ok')
            done()
          })
      })
    })
  })


  describe('/POST/moveandmovement should not POST withot x fields',function ()  {
    it('should not POST withot x fields', function(done)  {
      let mockId = new movementModel({ name: 'jab' })
      let move = new Move({ y: 2, z: 2, power: 999 })
      mockId.save(function(err, mock)  {
        chai.request(server)
          .post(`/movements/${mock.id}/addMove`)
          .send(move)
          .end(function(err, res)  {
            res.should.have.status(500)
            res.body.should.be.a('object')
            done()
          })
      })
    })
  })

  describe('/POST/moveandmovement should not POST withot y fields',function ()  {
    it('should not POST withot y fields', function(done)  {
      let mockId = new movementModel({ name: 'jab' })
      let move = new Move({ x: 2, z: 2, power: 999 })
      mockId.save(function(err, mock)  {
        chai.request(server)
          .post(`/movements/${mock.id}/addMove`)
          .send(move)
          .end(function(err, res)  {
            res.should.have.status(500)
            res.body.should.be.a('object')
            done()
          })
      })
    })
  })

  describe('/POST/moveandmovement should not POST withot z fields', function()  {
    it('should not POST withot z fields', function(done)  {
      let mockId = new movementModel({ name: 'jab' })
      let move = new Move({ x: 2, y: 2, power: 999 })
      mockId.save(function(err, mock)  {
        chai.request(server)
          .post(`/movements/${mock.id}/addMove`)
          .send(move)
          .end(function(err, res)  {
            res.should.have.status(500)
            res.body.should.be.a('object')
            done()
          })
      })
    })
  })

  describe('/POST/moveandmovement should not POST withot power fields', function()  {
    it('should not POST withot power fields', function(done)  {
      let mockId = new movementModel({ name: 'jab' })
      let move = new Move({ x: 2, y: 2, z: 999 })
      mockId.save(function(err, mock)  {
        chai.request(server)
          .post(`/movements/${mock.id}/addMove`)
          .send(move)
          .end(function(err, res)  {
            res.should.have.status(500)
            res.body.should.be.a('object')
            done()
          })
      })
    })
  })

  describe('/POST/moveandmovement add movement name should success',function ()  {
    it('should success', function(done)  {
      let movement = new movementModel({name:'jab'})
      chai.request(server)
        .post('/movements')
        .send(movement)
        .end(function(err, res)  {
          res.should.have.status(200)
          res.body.should.be.a('object')
          done()
        })
    })
  })

  describe('/GET/moveandmovement it should return all of gyroscopes',function ()  {
    it('it should return all of gyroscopes', function(done)  {
      chai.request(server)
        .get('/movements')
        .end(function(err, res)  {
          res.should.have.status(200)
          res.body.movements.should.be.a('array')
          done()
        })
    })
  })


})
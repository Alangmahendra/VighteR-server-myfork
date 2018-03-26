const movementModel = require('../models/Movement')
const moveModel = require('../models/Move')
class Movement {
  static addMovement(req, res) {
    movementModel.create({
      name: req.body.name
    })
      .then((movement) => {
        res.status(200).json({
          movement: movement
        })
      })
      .catch((err) => {
        console.log(err)
        res.status(500).send(err)
      })
  }
  static addMove(req, res) {
    movementModel.findById(req.params.id)
      .then((movement) => {
        moveModel.create({
          x: req.body.x,
          y: req.body.y,
          z: req.body.z,
          power:req.body.power
        })
          .then((move) => {
            movement.move = move._id
            movement.save()
              .then((movementUpdated) => {
                res.status(200).json({
                  movementUpdated: movementUpdated
                })
              })
              .catch((err) => {
                console.log(err)
                res.status(500).send(err)
              })
          })
          .catch((err) => {
            console.log(err)
            res.status(500).send(err)
          })
      })
      .catch((err) => {
        console.log(err)
        res.status(500).send(err)
      })
  }
  static getMovements(req, res) {
    movementModel.find().populate('move')
      .then((movements) => {
        res.status(200).json({
          movements: movements
        })
      })
      .catch((err) => {
        console.log(err)
        res.status(500).send(err)
      })
  }
  static deleteMovement(req, res) {
    movementModel.findByIdAndRemove(req.params.id)
      .then((movementDeleted) => {
        res.status(200).json({
          status: 'deleted ok',
          movement: movementDeleted
        })
      })
  }

}

module.exports = Movement
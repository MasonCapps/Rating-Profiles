const mongoose = require('mongoose')

const userScheme = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    strength: {
      type: Number,
      required: true,
      default: 0
    },
    speed: {
      type: Number,
      required: true,
      default: 0
    },
    rizz: {
      type: Number,
      required: true,
      default: 0
    },
    magic: {
      type: Number,
      required: true,
      default: 0
    },
    stealth: {
      type: Number,
      required: true,
      default: 0
    },
    health: {
      type: Number,
      required: true,
      default: 0
    },
    kd: {
      type: Number,
      required: true,
      default: 0.0
    },
    ratedBy: {
      type: Number,
      required: true,
      default: 0
    },
    rated: {
      type: Number,
      required: true,
      default: 0
    }
  },
  {
    timestamps: true
  }
)
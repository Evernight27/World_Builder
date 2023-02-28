import mongoose from 'mongoose'

const eventSchema = new mongoose.Schema({
  name: String,
  description: String,
  world: { type: mongoose.Schema.Types.String, ref: "World"}
})

export default mongoose.model('Event', eventSchema)
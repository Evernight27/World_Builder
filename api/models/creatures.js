import mongoose from 'mongoose'

const creatureSchema = new mongoose.Schema({
  name: String,
  description: String,
  hostile: Boolean,
  world: { type: mongoose.Schema.Types.String, ref: "World"}
})

export default mongoose.model('Creature', creatureSchema)
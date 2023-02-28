import mongoose from 'mongoose'

const nationSchema = new mongoose.Schema({
  name: String,
  description: String,
  world: { type: mongoose.Schema.Types.String, ref: "World" },
  cities: [{ type: mongoose.Schema.Types.String, ref: "City" }],
  characters: [{ type: mongoose.Schema.Types.String, ref: "Character" }]
  })

export default mongoose.model('Nation', nationSchema)
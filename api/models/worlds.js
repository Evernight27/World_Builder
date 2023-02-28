import mongoose from 'mongoose'

const worldSchema = new mongoose.Schema({
  name: String,
  description: String,
  creatures: [{ type: mongoose.Schema.Types.String, ref: 'Creature' }],
  events: [{ type: mongoose.Schema.Types.String, ref: 'Event' }],
  nations: [{ type: mongoose.Schema.Types.String, ref: 'Nation'}]
  })

export default mongoose.model('World', worldSchema)
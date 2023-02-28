import mongoose from 'mongoose'

const citySchema = new mongoose.Schema({
  name: String,
  description: String,
  nation: { type: mongoose.Schema.Types.String, ref: "Nation" }
})

export default mongoose.model('City', citySchema)
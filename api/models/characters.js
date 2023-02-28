import mongoose from "mongoose"
const characterSchema = new mongoose.Schema({
  name: String,
  description: String,
  nation: { type: mongoose.Schema.Types.String, ref: "Nation" }
})

export default mongoose.model('Character', characterSchema)
import Character from '../models/characters.js'
import characterJSON from './characters.json' assert { type: "json"}
import City from '../models/cities.js'
import cityJSON from './cities.json' assert { type: "json"}
import Creature from '../models/creatures.js'
import creatureJSON from './creatures.json' assert { type: "json"}
import Event from '../models/events.js'
import eventJSON from './events.json' assert { type: "json"}
import Nation from '../models/nations.js'
import nationJSON from './nations.json' assert { type: "json"}
import World from '../models/worlds.js'
import worldJSON from './worlds.json' assert { type: "json"}
import mongoose from 'mongoose'
import 'dotenv/config'

// @ts-ignore
mongoose.connect(process.env.DATABASE_URL)
await seed()
await mongoose.disconnect()

async function seed() {
  await Character.deleteMany({})
  await Character.create(characterJSON)
  await City.deleteMany({})
  await City.create(cityJSON)
  await Creature.deleteMany({})
  await Creature.create(creatureJSON)
  await Event.deleteMany({})
  await Event.create(eventJSON)
  await Nation.deleteMany({})
  await Nation.create(nationJSON)
  await World.deleteMany({})
  await World.create(worldJSON)
}
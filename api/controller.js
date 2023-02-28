import Character from './models/characters.js'
import City from './models/cities.js'
import Creature from './models/creatures.js'
import Event from './models/events.js'
import Nation from './models/nations.js'
import World from './models/worlds.js'
 
export const postCharacter = async (request, response) => {
  const body = request.body
  const newCharacter = await Character.create(body)
  response.json(newCharacter)
}

export const getCharacters = async (request, response) => {
  const characterJSON = await Character.find()
  response.json(characterJSON)
}

export const getCharacter = async (request, response) => {
  const character = await Character.find({ name: request.params.id })
  response.json(character)
}

export const updateCharacter = async (request, response) => {
  const updatedCharacter = await Character.findOneAndUpdate({ name: request.params.id })
  response.json(updatedCharacter)
}

export const deleteCharacter = async (request, response) => {
  const deletedCharacter = await Character.findOneAndRemove({ name: request.params.id })
  response.json(deletedCharacter)
}

export const postCity = async (request, response) => {
  const body = request.body
  const newCity = await City.create(body)
  response.json(newCity)
}

export const getCities = async (request, response) => {
  const cityJSON = await City.find()
  response.json(cityJSON)
}

export const getCity = async (request, response) => {
  const city = await City.find({ name: request.params.id })
  response.json(city)
}

export const updateCity = async (request, response) => {
  const updatedCity = await City.findOneAndUpdate({ name: request.params.id })
  response.json(updatedCity)
}

export const deleteCity = async (request, response) => {
  const deletedCity = await City.findOneAndRemove({ name: request.params.id })
  response.json(deletedCity)
}

export const postCreature = async (request, response) => {
  const body = request.body
  const newCreature = await Creature.create(body)
  response.json(newCreature)
}

export const getCreatures = async (request, response) => {
  const creatureJSON = await Creature.find()
  response.json(creatureJSON)
}

export const getCreature = async (request, response) => {
  const creature = await Creature.find({ name: request.params.id })
  response.json(creature)
}

export const updateCreature = async (request, response) => {
  const updatedCreature = await Creature.findOneAndUpdate({ name: request.params.id })
  response.json(updatedCreature)
}

export const deleteCreature = async (request, response) => {
  const deletedCreature = await Creature.findOneAndRemove({ name: request.params.id })
  response.json(deletedCreature)
}

export const postEvent = async (request, response) => {
  const body = request.body
  const newEvent = await Event.create(body)
  response.json(newEvent)
}

export const getEvents = async (request, response) => {
  const eventJSON = await Event.find()
  response.json(eventJSON)
}

export const getEvent = async (request, response) => {
  const event = await Event.find({ name: request.params.id })
  response.json(event)
}

export const updateEvent = async (request, response) => {
  const updatedEvent = await Event.findOneAndUpdate({ name: request.params.id })
  response.json(updatedEvent)
}

export const deleteEvent = async (request, response) => {
  const deletedEvent = await Event.findOneAndRemove({ name: request.params.id })
  response.json(deletedEvent)
}

export const postNation = async (request, response) => {
  const body = request.body
  const newNation = await Nation.create(body)
  response.json(newNation)
}

export const getNations = async (request, response) => {
  const nationJSON = await Nation.find()
  response.json(nationJSON)
}

export const getNation = async (request, response) => {
  const nation = await Nation.find({ name: request.params.id })
  response.json(nation)
}

export const updateNation = async (request, response) => {
  const updatedNation = await Nation.findOneAndUpdate({ name: request.params.id })
  response.json(updatedNation)
}

export const deleteNation = async (request, response) => {
  const deletedNation = await Nation.findOneAndRemove({ name: request.params.id })
  response.json(deletedNation)
}

export const postWorld = async (request, response) => {
  const body = request.body
  const newWorld = await World.create(body)
  response.json(newWorld)
}

export const getWorlds = async (request, response) => {
  const worldJSON = await World.find()
  response.json(worldJSON)
}

export const getWorld = async (request, response) => {
  const world = await World.find({ name: request.params.id })
  response.json(world)
}

export const updateWorld = async (request, response) => {
  const updatedWorld = await World.findOneAndUpdate({ name: request.params.id })
  response.json(updatedWorld)
}

export const deleteWorld = async (request, response) => {
  const deletedWorld = await World.findOneAndRemove({ name: request.params.id })
  response.json(deletedWorld)
}
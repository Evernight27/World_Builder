import express from 'express'
import {
  postCharacter, getCharacters, getCharacter, updateCharacter, deleteCharacter,
  postCity, getCities, getCity, updateCity, deleteCity,
  postCreature, getCreatures, getCreature, updateCreature, deleteCreature,
  postEvent, getEvents, getEvent, updateEvent, deleteEvent,
  postNation, getNations, getNation, updateNation, deleteNation,
  postWorld, getWorlds, getWorld, updateWorld, deleteWorld
} from './controller.js'

const wbRouter = express.Router()

wbRouter.get('/', (require, response) => {
  response.json("Please type characters, cities, creatures, events, nations, or worlds");
})
wbRouter.post('/characters', postCharacter)
wbRouter.get('/characters', getCharacters)
wbRouter.get('/characters/:id', getCharacter)
wbRouter.patch('/characters/:id', updateCharacter)
wbRouter.delete('/characters/:id', deleteCharacter)

wbRouter.post('/cities', postCity)
wbRouter.get('/cities', getCities)
wbRouter.get('/cities/:id', getCity)
wbRouter.patch('/cities/:id', updateCity)
wbRouter.delete('/cities/:id', deleteCity)

wbRouter.post('/creatures', postCreature)
wbRouter.get('/creatures', getCreatures)
wbRouter.get('/creatures/:id', getCreature)
wbRouter.patch('/creatures/:id', updateCreature)
wbRouter.delete('/creatures/:id', deleteCreature)

wbRouter.post('/events', postEvent)
wbRouter.get('/events', getEvents)
wbRouter.get('/events/:id', getEvent)
wbRouter.patch('/events/:id', updateEvent)
wbRouter.delete('/events/:id', deleteEvent)

wbRouter.post('/nations', postNation)
wbRouter.get('/nations', getNations)
wbRouter.get('/nations/:id', getNation)
wbRouter.patch('/nations/:id', updateNation)
wbRouter.delete('/nations/:id', deleteNation)

wbRouter.post('/worlds', postWorld)
wbRouter.get('/worlds', getWorlds)
wbRouter.get('/worlds/:id', getWorld)
wbRouter.patch('/worlds/:id', updateWorld)
wbRouter.delete('/worlds/:id', deleteWorld)

export default wbRouter
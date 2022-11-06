import { Router } from 'express'
import { getPersons, getPerson, createPerson, updatePerson, deletePerson } from  '../../models/persons'

const router = Router()

router.get('/', (req, res) => {
  const persons = getPersons()
  res.send(persons)
})

router.get('/:id', (req, res) => {
  const person = getPerson( id: req.params.id)
  res.send(person)
})

router.post('/', (req, res) => {
  const newPerson = createPerson( person: req.body)
  res.send(newPerson)
})

router.put('/:id', (req, res) => {
  updatePerson( id: req.params.id, person: req.body)
  res.send({ msg: 'Person ${req.params.id} Updated' })
})

router.delete('/:id', (req, res) => {
  deletePerson( id: req.params.id)
  res.send({ msg: 'Person ${req.params.id} Deleted' })
})

export default router

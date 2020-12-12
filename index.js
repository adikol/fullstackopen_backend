require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app= express()

const Person = require('./models/person')

app.use(express.json())

morgan.token('reqBody', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :reqBody :req[body]'));

app.use(cors())
app.use(express.static('build'))

const mongoose = require('mongoose')
const { request } = require('express')

app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
        response.json(persons)
    })
    .catch(error => next(error))
})

app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id).then(person =>{
        if(person) {
            response.json(person)
        }
        else {
            response.status(404).end()
        }
    })
    .catch(error => next(error))
})

app.get('/info', (request, response) => {
    Person.count().then(count => {
        const info = `Phonebook has info for ${count} people \n${new Date()}`
        response.writeHead(200, { 'Content-Type': 'text/plaintext' })
        response.end(info)
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndRemove(request.params.id).then(result => {
        response.status(204).end()
    })
    .catch(error => next(error))
})

app.post('/api/persons/', (request, response, next) => {
    const body = request.body
    if(!body.name || !body.number)
    {
        return response.status(400).json({
            error: 'name or number missing'
        })
    }

    function generateId()
    {
        return Math.floor(Math.random() * 100000)
    }

    const person = new Person({
        name: body.name,
        number: body.number,
        id: generateId()
    })

    person.save().then(savedPerson => savedPerson.toJSON())
    .then(savedAndFormattedPerson => {
        response.json(savedAndFormattedPerson)
    })
    .catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
    const body = request.body
  
    const person = {
      name: body.name,
      number: body.number
    }
  
    Person.findByIdAndUpdate(request.params.id, person, { new: true })
      .then(updatedPerson => {
        response.json(updatedPerson)
      })
      .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
    console.error(error.message)

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    }
    else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }

    next(error)
}
  
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`)
})
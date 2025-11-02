import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Todo from '../models/Todo.js'

dotenv.config()

const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGO_URI, { user: process.env.DB_USER, pass: process.env.DB_PASS })
    .then(() => console.log("ok"))
    .catch(e => console.error(e.message));

// Отриманння даннних з сервера
app.get('/todos', async (req, res) => {
    try {
        const todo = await Todo.create(req.body)
        console.log("Створено:", todo);
        res.status(201).json(todo)
    } catch (err) {
        console.error("Error:", err.message);
        res.status(400).json({ err: err.message })
    }
})

// Створення нових данних
app.post('/todos', (req, res) => {
    res.send("")
})

// Оновлення данних
app.patch('/todos', (req, res) => {
    res.send("")
})

// Видалення данних
app.delete('/todos', (req, res) => {
    res.send("")
})










app.listen(3000, () => console.log('http://localhost:3000'));
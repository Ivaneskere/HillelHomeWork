import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Todo from '../models/Todo.js'
import cors from 'cors'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI, { user: process.env.DB_USER, pass: process.env.DB_PASS })
    .then(() => console.log("ok"))
    .catch(e => console.error(e.message));

// Отриманння даннних з сервера
app.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find()
        res.json(todos)
    } catch (err) {
        console.error("Error:", err.message);
        res.status(500).json({ err: err.message })
    }
})

// Створення нових данних
app.post('/todos', async (req, res) => {
    try {
        const todo = await Todo.create(req.body)
        console.log("Створено:", todo)
        res.status(200).json(todo)
    } catch (err) {
        console.log("Error", err.message)
        res.status(400).json({error: err.message})
    }
})

// Оновлення данних
app.patch('/todos/:id', async (req, res) => {
    try {
        const id = req.params.id.trim()
        const todoes = await Todo.findByIdAndUpdate(id, req.body, {
            new: true, 
            runValidators: true
        })
        if(!todoes) return res.status(404).json({error: "ToDo is not defined"})
        res.status(200).json(todoes)
    } catch (err) {
        console.log("", err.message)
        res.status(400).json({error: err.message})
    }
})

// Видалення данних
app.delete('/todos/:id', async (req, res) => {
    try {
        const id = req.params.id.trim()
        const todoes = await Todo.findByIdAndDelete(id)
        if(!todoes) return res.status(404).json({error: "ToDo is not defined"})
        console.log("Видалено:", todoes)
        res.status(200).json(todoes)
    } catch (err) {
        console.log("", err.message)
        res.status(400).json({error: err.message})
    }
})

app.listen(3000, () => console.log('http://localhost:3000'));
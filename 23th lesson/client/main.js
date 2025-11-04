const serverBaseUrl = 'http://localhost:3000';

const api = {
    list: () => {
        return fetch(`${serverBaseUrl}/todos`).then(r => r.json())
    },
    create: (payload) => fetch(`${serverBaseUrl}/todos`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(payload)
    }).then(r => r.json()),
    remove: (id) =>
        fetch(`${serverBaseUrl}/todos/${id}`,
            {
                method: 'DELETE'
            }).then(r => r.json()),
    update: (id, payload) =>
        fetch(`${serverBaseUrl}/todos/${id}`, {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(payload)
        }).then(r => r.json())
}

async function loadTodos() {
    try {
        const todos = await api.list()
        const listEl = document.querySelector('.todo-list')
        listEl.innerHTML = ""

        todos.forEach(todo => {
            const div = document.createElement('div')
            div.classList.add('todo-item')

            const span = document.createElement('span')
            span.textContent = `${todo.title} ${todo.status === "done" ? '✅' : '❌'}`

            const delBth = document.createElement('button')
            delBth.textContent = '❌'

            delBth.addEventListener('click', async () => {
                await api.remove(todo._id)
                loadTodos()
            })

            const updateBth = document.createElement('button')
            updateBth.textContent = '✅'

            updateBth.addEventListener('click', async () => {
                const newStatus = todo.status === 'done' ? 'open' : 'done'
                await api.update(todo._id, { status: newStatus })
                todo.status = newStatus
                span.textContent = `${todo.title} ${todo.status === 'done' ? '✅' : '❌'}`
                span.classList.add("done")
            });

            div.append(span, delBth, updateBth)
            listEl.appendChild(div)
        });
    } catch (err) {
        console.log(err)
    }
}

async function addNewTodo() {
    const form = document.querySelector('.form')
    const intup = document.querySelector('#newTodo')

    form.addEventListener('submit', async (e) => {
        e.preventDefault()

        const title = intup.value.trim()
        if (!title) return

        await api.create({ title, completed: false })
        intup.value = ''
        loadTodos()
    })
}


document.addEventListener('DOMContentLoaded', () => {
    loadTodos()
    addNewTodo()
})
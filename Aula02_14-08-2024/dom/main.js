window.addEventListener('DOMContentLoaded', () => {
    const list = []

    const newTask = document.querySelector('#NewTask')
    const btnAddTask = document.querySelector('#AddTask')
    const taskList = document.querySelector('#TaskList')

    btnAddTask.addEventListener('click', () => {
        if (newTask.value == '') return

        list.push(newTask.value)
        updateList()
    })

    const updateList = () => {
        taskList.replaceChildren()

        list.forEach((value, index) => {
            const item = document.createElement('li')
            item.textContent = value

            const remove = document.createElement('button')
            remove.textContent = 'X'

            remove.addEventListener('click', () => {
                list.splice(index, 1) // deslocar => para a esquerda, comendo o que tem atrás
                updateList()
            })

            item.appendChild(remove)

            taskList.appendChild(item)
        })
        newTask.value = ''
    }
})

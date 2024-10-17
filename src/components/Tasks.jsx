import React from 'react'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Task = () => {

    const [todo, setTodo] = useState(" ")
    const [todos, setTodos] = useState([])
    const [showFinished, setshowFinished] = useState(false)

    useEffect(() => {
        let todoString = localStorage.getItem("todos")
        if (todoString) {
            let todos = JSON.parse(localStorage.getItem("todos"))
            setTodos(todos)
        }
    }, [])


    const saveToLS = () => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }

    const handleAdd = () => {
        setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
        setTodo("")
        saveToLS()
    }

    const showFinish = () => {
        setshowFinished(!showFinished)
    }

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const handleCheckbox = (e) => {
        let id = e.target.name;

        let index = todos.findIndex(item => {
            return item.id === id;
        })

        let newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos)
        saveToLS()
    }

    const handleEdit = (e, id) => {
        let t = todos.filter(i => i.id === id)
        setTodo(t[0].todo)

        let newTodos = todos.filter(item => {
            return item.id !== id
        });
        setTodos(newTodos)
        saveToLS()
    }

    const handleDelete = (e, id) => {
        let newTodos = todos.filter(item => {
            return item.id !== id
        });
        setTodos(newTodos)
        saveToLS()
    }

    const handleEnter = () => {
        setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
        setTodo("")
        saveToLS()
    }


    return (
        <>
            <div className="mx-4 md:container md:w-[600px] md:mx-auto my-5 rounded-xl p-5 bg-violet-200 min-h-[80vh] max-w-xl ">

                {/* <div className="container mx-auto my-4 p-6 max-w-xl min-h-[80vh] bg-violet-200 rounded-xl"> */}
                <h2 className='mb-6 font-bold text-xl text-center'>iTask - Manage your todos at one place</h2>

                <div className='addTodo'>
                    <h3 className='font-bold text-lg '>Add a Todo</h3>
                    <div className='inputTodo flex gap-2 m-2'>
                        <input onChange={handleChange}
                            onKeyDown={(e) => { console.log(e.key); if (e.key === "Enter") handleEnter() }}
                            value={todo} type="text" className='rounded-2xl w-11/12'
                        />
                        <button onClick={handleAdd} disabled={todo.length < 2} className='py-1 px-4  bg-violet-600 disabled:bg-violet-700 text-white rounded-2xl cursor-pointer hover:font-medium hover:bg-violet-800'>
                            Save
                        </button>
                    </div>
                </div>

                <div>
                    <input onChange={showFinish} type="checkbox" checked={showFinished} className='cursor-pointer' name="Show Finised" id="finish" />
                    Show Finished
                </div>

                <div className='divider h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2'></div>

                <h3 className='my-2 font-bold text-lg '>Your Todo</h3>
                <div className='todos my-2'>
                    {todos.length == 0 && <div>No Todos to display</div>}
                    {todos.map(item => {

                        return ((showFinished || !item.isCompleted) &&
                            <div key={item.id} className='todo flex justify-between my-2'>
                                <div className='todoName flex gap-2 items-center'>
                                    <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} className='items-center cursor-pointer' />
                                    <div className={item.isCompleted ? 'line-through' : ""}>{item.todo}</div>
                                </div>
                                <div className='buttons-icon flex gap-4'>
                                    <img onClick={(e) => handleEdit(e, item.id)} src="src\assets\edit.svg" className='bg-violet-700 p-1 rounded-lg cursor-pointer hover:bg-violet-800' alt="" />
                                    <img onClick={(e) => (handleDelete(e, item.id))} src="src\assets\delete.svg" className='bg-violet-700 p-1 rounded-lg cursor-pointer hover:bg-violet-800' alt="" />
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default Task
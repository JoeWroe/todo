import React from 'react'

const Todos = ({ todos, deleteTodo }) => {

    const todosList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="center collection-item" key={todo.id}>
                    <span onClick={ () => { deleteTodo(todo.id) } }>{todo.content}</span>
                </div>
            )
        })
        ) : (
            <div className="center collection-item">
                <span className="center">You have no Todo's left to do. Yay!</span>
            </div>
        )

    return (
        <div className="todos collection">
            { todosList }
        </div>
    )
}

export default Todos
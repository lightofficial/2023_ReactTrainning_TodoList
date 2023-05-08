import React from 'react'
import Todo from './Todo'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width:500px;
`

// props คือ parameter ที่ใส่อะไรเข้ามาก็ได้

const TodoList = ({todoList,removeTodo}) => {
    return(
        <Container>
        {
            todoList.map((todo, index) => {
            return (
                <div className="todo" key={index}>
                    <Todo value={todo} key={index} onClickRemove={() => removeTodo()} />
                </div>
            )
            })
        }
        </Container>
    )
}

export default TodoList
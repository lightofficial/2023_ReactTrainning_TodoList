import React,{useState} from 'react'
import TodoList from './TodoListNew'
import styled from 'styled-components'
import Input from './css/Input'
import Button from './css/Button'

const Container = styled.div`

  width: 100vw;
  height: 100vh;
  background-color: #f6f7f8;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;

`

function App()  {
  // array [ชื่อตัวแปร,ฟังก์ชันสำหรับเซ็ตตัวแปร] = useState(intitial (ตัวแปร))
  const [todoList,setTodoList] = useState([])
  const [text,setText] = useState("")
  // onChange (e) คือ parameter ที่ user ได้กรอกเข้ามา และ setText(e.target.value) ทำให้ setText ใน input เป็นค่าว่าง 
  // onTextChange ทำให้ Text สามารถแก้ไขได้
  const onTextChange = ({target: {value}}) => 
  {
    setText(value)
  }

  // เพิ่มตัวอักษร เข้าไปใน Array
  const addTask = () => {
    
    setTodoList([
      ...todoList,
      text
    ])

    // clear text
    setText("")
  }

  // เอาไว้ลบ TodoList ที่ Input เข้าไปแล้ว
  const removeTodo = (index) => {
    console.log(index);

    let todo = [...todoList];
    todo.splice(index,1)
    setTodoList(todo)
  }

  // ตัวแปร.map = คือลูป
  // ตัวแปร.map((ชื่อลูป , ตำแหน่ง))
  return(
    <Container>

      <div>
        <Input type="text" value={text} onChange={ onTextChange }/> 
        <Button onClick={addTask}>Add task</Button>
      </div>
    
      <TodoList todoList={todoList} removeTodo={removeTodo} />
    </Container>
  )
}

export default App
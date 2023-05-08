import React from 'react'
import styled from 'styled-components'

/** 
 * 
 ตรงนี้ใช้งานเหมือน CSS โดยกำหนดให้เป็น tag ได้เลย แล้วใส่ CSS ลงใน `[css code]`
 ชื่อตัวแปร = styled.(ชื่อ tag) `(โค้ด CSS)`
 ในส่วนนี้เป็นส่วนของ Input ช่องใส่ข้อความ
 * 
*/
const Input = styled.input`
  height: 15px;
  margin: 15px;
  border-radius: 5rem;
  border-style: solid;
  border-color: #eeeeee;
  box-shadow: 10px 10px 36px -10px rgba(0,0,0,0.75);
  padding: 15px;
  fonr-size: large;
`

export default (props) => <Input {...props} />
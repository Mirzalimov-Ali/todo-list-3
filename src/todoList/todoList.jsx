import React, { useState } from 'react'
import { Container, MapDiv } from '../style'

import trash from '../assets/trash.png'

function TodoList() {
  const [text, setText] = useState('');
  const [texts, setTexts] = useState([]);

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleAddText() {
    if (text.trim() !== '') {
      setTexts(prevTexts => [...prevTexts, text]);
      setText('');
    }
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      handleAddText();
    }
  }
  return (
    <Container>
        <div style={{display: "flex", justifyContent: "space-between", gap: "20px"}}>
            <input type="text" value={text} onChange={handleChange} placeholder='Enter Task'  onKeyPress={handleKeyPress} />
            <button onClick={handleAddText}>Add</button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", marginTop: "20px", gap: "10px", height: "85%", overflowY: "scroll", width: "100%"}}>
          {texts.map((txt, id) => (
            <MapDiv key={id}>
              <p>{txt}</p>
              <button style={{minHeight: "40px", width: "50px"}}><img src={trash} alt="" width={"15px"}/></button>
            </MapDiv>

          ))}
        </div>
    </Container>
  )
}

export default TodoList

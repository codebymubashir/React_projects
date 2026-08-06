import React, {useState} from 'react'

const App = () => {

  const [count,setcount] = useState(4)
  function handledecrement(){
    setcount(count - 1)
  }
  function handleincrement(){
    setcount(count + 1)
  }
  return (
    <div className='flex flex-row gap-4 w-full h-auto'>

      <button onClick={handledecrement} className='btn'>-</button>
      <span>{count}</span>
      <button onClick={handleincrement} className='btn'>+</button>
    </div>
  )
}

export default App

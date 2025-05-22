import { ButtonGroup, Button } from '@mui/material'
import { useState } from 'react'

const Home = () => {
  const [count, setCount] = useState(0)


  const handleClick = () => {
    setCount(prev => prev + 1)
    console.log('Button clicked!')
  }

  const handleClear = () => {
    setCount(0)
  }

  const handleDisable = () => {
    setCount(0)
  }

  return (
    <div className='container bg-blue-100'> 
      <h1>123</h1>
      <ButtonGroup orientation="vertical" aria-label="Vertical button group">
        <Button onClick={handleClick}>CLICK{count}</Button>
        <Button onClick={handleClear}>CLEAR</Button>
        <Button onClick={handleDisable}>DISABLE</Button>
      </ButtonGroup>
      <div className="text-3xl text-red-500 font-bold">
        Tailwind 測試成功
      </div>
    </div>
  )
}

export default Home

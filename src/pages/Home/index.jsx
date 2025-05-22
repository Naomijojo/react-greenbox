import { ButtonGroup, Button } from '@mui/material'
import { useEffect, useState } from 'react'
import WeatherChart from '@/components/WeatherChart'


const Home = () => {
  const [count, setCount] = useState(0)
  const [disabled, setDisabled] = useState(false)


  const handleClick = () => {
    if (!disabled) {
      setCount(prev => prev + 1) //按下按鈕時讓數字 +1
    }
  }

  const handleClear = () => {
    setCount(0) //按下 CLEAR	按鈕，讓 useState	中的值歸零
  }

  const handleDisable = () => {
    setDisabled(prev => !prev) 
    // 按下 DISABLE	按鈕，讓最上⾯的 CLICK	按鈕失效，並且讓 DISABLE	變成 ABLE
    // 按鈕顯⽰ABLE	時，按下則會 讓 CLICK	按鈕恢復成可按，並帶有 +	1	功能的⽣效狀態
  }

  useEffect(() => {
    
  }
  , [])


  return (
    <div className='container bg-blue-100 p-4'> 
      <ButtonGroup orientation="vertical" aria-label="Vertical button group">
        <Button onClick={handleClick} className="text-lg font-bold mb-4">CLICK:{count}</Button>
        <Button onClick={handleClear} className="text-lg font-bold mb-4">CLEAR</Button>
        <Button onClick={handleDisable} className="text-lg font-bold mb-4">{disabled ? 'ABLE' : 'DISABLE'}</Button>
      </ButtonGroup>
    </div>
  )
}

export default Home

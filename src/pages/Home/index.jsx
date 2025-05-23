import { ButtonGroup, Button } from '@mui/material'
import { useEffect, useState } from 'react'
import WeatherChart from '@/components/WeatherChart'


const Home = () => {
  const [count, setCount] = useState(0)
  const [disabled, setDisabled] = useState(false)


  const handleClick = () => {
    if (!disabled) {
      setCount(prev => prev + 1) //按下按鈕時讓數字 +1
      // setCount(prev => (prev === 10 ? -10 :prev+1))
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
    <div className='flex justify-center items-center bg-slate-300 h-[50vh] '> 
      <ButtonGroup size="large" color="secondary" sx={{ backgroundColor: '#f0f0f0'}} orientation="vertical" aria-label="Vertical button group" className='w-1/6'>
        <Button onClick={handleClick} className="text-lg font-bold mb-4" style={{
          backgroundColor: disabled ? '#e0e0e0' : '#f0f0f0',
          color: disabled ? '#888' : '#9c27b0'
        }} >CLICK:{count}</Button>
        <Button onClick={handleClear} className="text-lg font-bold mb-4" style={{
          backgroundColor: disabled ? '#e0e0e0' : '#f0f0f0',
          color: disabled ? '#888' : '#9c27b0'
        }} >CLEAR</Button>
        <Button onClick={handleDisable} className="text-lg font-bold mb-4">{disabled ? 'able' : 'disable'}</Button>
      </ButtonGroup>

      <div className="flex justify-center items-center bg-slate-600 h-[50vh]">
        <WeatherChart />
      </div>
    </div>
  )
}

export default Home

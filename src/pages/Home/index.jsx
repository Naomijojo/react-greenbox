import { ButtonGroup, Button } from '@mui/material'
import { Divider } from 'antd'
import { useEffect, useState } from 'react'
import FixerChart from '@/components/FixerChart'


const Home = () => {
  const [count, setCount] = useState(0)
  const [disabled, setDisabled] = useState(false)


  const handleClick = () => {
    if (disabled) return
      setCount(prev => prev + 1)  //按下按鈕時讓數字 +1
  }

  const handleClear = () => {
    if (disabled) return 
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
    <div className='flex flex-col items-center justify-center h-full'> 
      <div className="box1">
        <h2 className="text-center font-bold m-6">按鈕點擊</h2>
        <ButtonGroup size="large" color="secondary" sx={{ backgroundColor: '#f0f0f0'}} orientation="vertical" aria-label="Vertical button group" className='w-40'>
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
      </div>
      
      <Divider className="my-9" style={{ backgroundColor: '#a7a7a7', height: '1px' }}/>
      
      <div className="box2 m-6 w-[100%] h-[600px]">
        <FixerChart data={FixerChart}/>
      </div>
    </div>
  )
}

export default Home

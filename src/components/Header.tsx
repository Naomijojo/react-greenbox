import { useNavigate } from 'react-router-dom'

const Header = () => {
  const go = useNavigate()

  return (
    <header className="sticky top-0 bg-white border-b-[1px] border-gray-300">
      <div className="flex justify-between items-center h-[60px] px-2 box-border lg:max-w-[1024px] lg:mx-auto lg:px-0">
        {/* logo */}
        <img src="/images/logo.svg" alt="logo" className="w-[100px] cursor-pointer" onClick={() => go("/")} />
        
        <div className="flex items-center gap-4">
          {/* home */}
          <i 
            className="fa-solid fa-house fa-lg cursor-pointer text-[#4ba83b] transition-colors duration-200  hover:text-gray-400" 
            onClick={() => go("/")}
          ></i>
          
          {/* heart */}
          <i 
            className="fa-solid fa-heart fa-lg cursor-pointer text-[#4ba83b] transition-colors duration-200 hover:text-gray-400" 
            onClick={() => go("/favorite")}
          ></i>
        </div>
      </div>
    </header>
  )
}

export default Header
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  
  return (
    <div className="flex flex-col min-h-screen bg-[rgba(239,244,251)]">  
      <Header />
      <main className='flex-1'>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
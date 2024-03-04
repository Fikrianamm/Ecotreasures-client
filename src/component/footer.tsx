import { Link } from "react-router-dom";
import { LogoMainGreen } from "./logo";

export const Footer = () => {

    const currentYear = new Date().getFullYear();
  
    return (
    <footer className='pt-5 pb-5 pr-10 space-y-6 pl-10 h-32 w-full bg-slate-800'>
        <div className='flex border-0 pb-2 border-gray-200 solid border-b-[1px]'>
            
            <div className='flex-1'>
                <LogoMainGreen />
            </div>

            <div className='flex-2'>
                <ul className='flex space-x-4 text-gray-50 items-center'>
                    <Link to={'/'}><li className='hov-b'>Marketplace</li></Link>
                    <Link to={'/'}><li className='hov-b'>Pick Up</li></Link>
                    <Link to={'/'}><li className='hov-b'>Drop Off</li></Link>
                </ul>
            </div>
        
        </div>
        
        <div className='flex justify-center items-center'>
            <span className='text-gray-50 text-lg flex'>© {currentYear} <Link to={'/'} className='hover:underline mr-1 ml-1'>Ecotreasures™.</Link> All Rights Reserved.</span>
        </div>
    
    </footer>
  )
}
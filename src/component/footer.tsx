import { Link } from 'react-router-dom';
import Logo from './logo';

export default function Footer({ type }:{ type?: 'dark' | 'light' }) {
  const currentYear = new Date().getFullYear();

  if (type === 'light') {
    return (
      <footer className="w-full h-32 pt-5 pb-5 pl-10 pr-10 space-y-6 bg-gray-100">
        <div className="flex border-0 pb-2 border-gray-300 solid border-b-[1px]">

          <div className="flex-1">
            <Logo type="green" />
          </div>

          <div className="flex-2">
            <ul className="flex items-center space-x-4 text-green-600">
              <Link to="/"><li className="transition-all hover:text-green-800">Marketplace</li></Link>
              <Link to="/"><li className="transition-all hover:text-green-800">Pick Up</li></Link>
              <Link to="/"><li className="transition-all hover:text-green-800">Drop Off</li></Link>
            </ul>
          </div>

        </div>

        <div className="flex items-center justify-center">
          <span className="flex text-sm text-gray-600">
            ©
            {currentYear}
            {' '}
            <Link to="/" className="ml-1 mr-1 hover:underline">Ecotreasures™.</Link>
            {' '}
            All Rights Reserved.
          </span>
        </div>

      </footer>
    );
  }
  return (
    <footer className="w-full h-32 pt-5 pb-5 pl-10 pr-10 space-y-6 bg-slate-800">
      <div className="flex border-0 pb-2 border-gray-300 solid border-b-[1px]">

        <div className="flex-1">
          <Logo type="white" />
        </div>

        <div className="flex-2">
          <ul className="flex items-center space-x-4 text-gray-300">
            <Link to="/"><li className="transition-all hover:text-gray-100">Marketplace</li></Link>
            <Link to="/"><li className="transition-all hover:text-gray-100">Pick Up</li></Link>
            <Link to="/"><li className="transition-all hover:text-gray-100">Drop Off</li></Link>
          </ul>
        </div>

      </div>

      <div className="flex items-center justify-center">
        <span className="flex text-sm text-gray-300">
          ©
          {currentYear}
          {' '}
          <Link to="/" className="ml-1 mr-1 hover:underline">Ecotreasures™.</Link>
          {' '}
          All Rights Reserved.
        </span>
      </div>

    </footer>
  );
}

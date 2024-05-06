import { Link } from 'react-router-dom';
import Logo from './logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full h-32 pt-5 pb-5 pl-10 pr-10 space-y-6 bg-slate-800">
      <div className="flex border-0 pb-2 border-gray-200 solid border-b-[1px]">

        <div className="flex-1">
          <Logo type="white" />
        </div>

        <div className="flex-2">
          <ul className="flex items-center space-x-4 text-gray-50">
            <Link to="/"><li className="hov-b">Marketplace</li></Link>
            <Link to="/"><li className="hov-b">Pick Up</li></Link>
            <Link to="/"><li className="hov-b">Drop Off</li></Link>
          </ul>
        </div>

      </div>

      <div className="flex items-center justify-center">
        <span className="flex text-lg text-gray-50">
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

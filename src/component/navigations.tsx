import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useEffect, useState } from 'react';
import Logo from './logo';
import { Button } from './buttons';
import { SIGNUP_PAGE } from '../routes/routeConstant';

interface Dropdown {
  className: string
}

export function DropdownLayanan({ className } : Dropdown) {
  return (
    <div className={`absolute bg-white p-1 rounded mt-2 ${className} shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]`}>
      <ul className="px-1 py-2 text-sm text-black ">
        <li className="px-2 py-1 bg-white rounded hov-b"><Link to="/">Pick Up</Link></li>
        <li className="hov-b bg-white px-2 py-1 rounded border-t-[1px]"><Link to="/">Drop Off</Link></li>
      </ul>
    </div>
  );
}

export function Navigation() {
  const [drop, setDrop] = useState<string>('hidden');

  function onDrop() {
    if (drop === 'hidden') {
      setDrop('absolute');
    } else {
      setDrop('hidden');
    }
  }

  return (
    <nav
      id="nav-main"
      className="fixed top-0 z-20 flex items-center w-full h-16 px-8 bg-white"
    >
      <div className="flex-1">
        <Logo type="green" />
      </div>
      <div className="flex-2">
        <ul className="flex items-center space-x-4 text-slate-800">
          <li>
            <Link to="/" className="hov-b hover:text-green-600">
              Marketplace
            </Link>
          </li>
          <li>
            <button type="button" onClick={onDrop}>
              <li className="flex items-center justify-center gap-1 hov-b hover:text-green-600">
                Layanan
                {' '}
                {drop === 'hidden' ? <IoIosArrowDown /> : <IoIosArrowUp /> }
              </li>
              <DropdownLayanan className={drop} />
            </button>
          </li>
          <li className="flex space-x-1">
            <Button href="/login" type="transparentWhite">Log In</Button>
            <Button href={SIGNUP_PAGE} type="green">Sign Up</Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export function NavigationHome() {
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [drop, setDrop] = useState<string>('hidden');

  function onDrop() {
    if (drop === 'hidden') {
      setDrop('absolute');
    } else {
      setDrop('hidden');
    }
  }

  return (
    <nav
      id="nav-main"
      className={` px-8 fixed top-0 flex items-center w-full h-16 z-20  ${
        scroll
          ? 'bg-white bg-opacity-50 backdrop-blur-sm border-b-[0.5px] transition-all border-gray-200'
          : ''
      } `}
    >

      <div className="flex-1">
        {scroll ? (
          <Logo type="green" />
        ) : (
          <Logo type="white" />
        )}
      </div>

      <div className="flex-2">

        <ul
          className={`flex space-x-4 ${
            scroll ? 'text-slate-800' : 'text-gray-50'
          } items-center`}
        >
          <Link to="/">
            <li className="hov-b">Marketplace</li>
          </Link>
          <button type="button" onClick={onDrop}>
            <li className="flex items-center justify-center gap-1 hov-b">
              Layanan
              {' '}
              {drop === 'hidden' ? <IoIosArrowDown /> : <IoIosArrowUp /> }
            </li>
            <DropdownLayanan className={drop} />
          </button>
          <li className="flex space-x-1">
            {scroll ? (
              <Button href="/login" type="transparentGrey">
                Log In
              </Button>
            ) : (
              <Button href="/login" type="transparentWhite">
                Log In
              </Button>
            )}
            <Button href={SIGNUP_PAGE} type="green">
              Sign Up
            </Button>
          </li>
        </ul>

      </div>
    </nav>
  );
}

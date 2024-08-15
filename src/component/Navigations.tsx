import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { IoNotifications, IoSearch } from 'react-icons/io5';
import { FaCartShopping, FaShop } from 'react-icons/fa6';
import Logo from './Logo';
import { Button } from './Buttons';
import {
  KERANJANG, PEMBELIAN, SIGNUP_PAGE, TOKO, WISHLIST,
} from '../routes/routeConstant';
import { validationSearchSchema } from '../validation/validation';

interface Dropdown {
  className: string
}

export function DropdownLayanan({ className } : Dropdown) {
  return (
    <div className={`absolute bg-white p-1 z-50 rounded mt-2 ${className} shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]`}>
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
      className="z-20 flex items-center w-full h-16 px-8 bg-white"
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
            <Button href="/login" type="transparentGrey">Log In</Button>
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

export function NavigationMarketplace() {
  const handleSearch = (values: { search: string }) => {
    console.log(values.search);
  };
  return (
    <nav
      className="sticky top-0 z-20 flex items-center justify-between w-full h-16 px-8"
    >
      <div className="flex gap-6">
        <Button typebtn="button" type="transparentWhite" className="p-0 border-none text-slate-700 hover:text-green-600">
          Kategori
        </Button>
        <Formik
          initialValues={{
            search: '',
          }}
          validationSchema={validationSearchSchema}
          onSubmit={handleSearch}
        >
          <Form>
            <label htmlFor="search" className="flex items-center justify-start gap-3 px-2 py-1 border rounded-[5px] border-slate-400">
              <IoSearch size={20} className="text-slate-500" />
              <Field type="text" id="search" name="search" className="outline-none min-w-96" placeholder="Cari di Marketplace" />
            </label>
          </Form>
        </Formik>
      </div>
      <div className="flex items-center justify-end gap-5">
        <Link to={TOKO} className="flex items-center justify-center gap-2 text-slate-700 hover:text-green-600">
          <FaShop size={20} />
          <p className="font-medium">Toko</p>
        </Link>
        <Link to={PEMBELIAN} className="text-slate-700 hover:text-green-600">
          <p className="font-medium">Pembelian</p>
        </Link>
        <Link to={WISHLIST} className="text-slate-700 hover:text-green-600">
          <p className="font-medium">Wishlist</p>
        </Link>
        <p className="text-slate-700 hover:text-green-600">
          <IoNotifications size={20} />
        </p>
        <Link to={KERANJANG} className="text-slate-700 hover:text-green-600">
          <FaCartShopping size={20} />
        </Link>
      </div>
    </nav>
  );
}

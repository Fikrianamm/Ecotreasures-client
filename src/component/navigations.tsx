import { Link } from "react-router-dom";
import { LogoMainGreen, LogoMainWhite } from "./logo";
import { ButtonLinkBorderBlack, ButtonLinkBorderWhite, ButtonLinkGreen } from "./buttons";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";

export const Navigation: React.FC = () => {

  const [drop, setDrop] = useState<string>('hidden');

  function onDrop(){
    if (drop == 'hidden'){
      setDrop("absolute")
    } else{
      setDrop("hidden")
    }
  }

  return (
    <nav
      id="nav-main"
      className={`px-8 fixed top-0 flex items-center w-full h-16 z-20 bg-white`}
    >
      <div className="flex-1">
        <LogoMainGreen />
      </div>
      <div className="flex-2">
        <ul className={`flex space-x-4 text-slate-800 items-center`}>
          <li>
            <Link to={"/"} className="hov-b hover:text-green-600">
              Marketplace
            </Link>
          </li>
          <li>
            <Link to={"#"} onClick={onDrop}>
                <li className="hov-b hover:text-green-600 flex justify-center items-center gap-1">
                    Layanan {drop == 'hidden' ? <IoIosArrowDown /> : <IoIosArrowUp /> }
                </li>
                <DropdownLayanan className={drop}/>
            </Link>
          </li>
          <li className="flex space-x-1">
            <ButtonLinkBorderBlack href="/login">Log In</ButtonLinkBorderBlack>
            <ButtonLinkGreen href="/register">Sign Up</ButtonLinkGreen>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export const NavigationHome: React.FC = () => {
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [drop, setDrop] = useState<string>('hidden');

  function onDrop(){
    if (drop == 'hidden'){
      setDrop("absolute")
    } else{
      setDrop("hidden")
    }
  }

  return (
        <nav
            id="nav-main"
            className={` px-8 fixed top-0 flex items-center w-full h-16 z-20  ${
                scroll
                    ? "bg-white bg-opacity-50 backdrop-blur-sm border-b-[0.5px] transition-all border-gray-200"
                    : ""
            } `}
        >
            
            <div className="flex-1">
            {scroll ? (
                <LogoMainGreen />
            ): (
                <LogoMainWhite />
            )}
            </div>

            <div className="flex-2">
            
                <ul
                    className={`flex space-x-4 ${
                        scroll ? "text-slate-800" : "text-gray-50"
                    } items-center`}
                >
                    <Link to={"/"}>
                        <li className="hov-b">Marketplace</li>
                    </Link>
                    <Link to={"#"} onClick={onDrop}>
                        <li className="hov-b flex justify-center items-center gap-1">
                            Layanan {drop == 'hidden' ? <IoIosArrowDown /> : <IoIosArrowUp /> }
                        </li>
                        <DropdownLayanan className={drop}/>
                    </Link>
                    <li className="flex space-x-1">
                        {scroll ? (
                            <ButtonLinkBorderBlack href="/login">
                                Log In
                            </ButtonLinkBorderBlack>
                        ) : (
                            <ButtonLinkBorderWhite href="/login">
                                Log In
                            </ButtonLinkBorderWhite>
                        )}
                        <ButtonLinkGreen href="/register">
                            Sign Up
                        </ButtonLinkGreen>
                    </li>
                </ul>
            
            </div>
        </nav>
    );
};

interface Dropdown{
  className: string
}

export const DropdownLayanan = ({className} : Dropdown) => {
  return (
  <div className={`absolute bg-white p-1 rounded mt-2 ${className} shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]`}>
    <ul className="text-black text-sm">
      <li className="hov-b bg-white px-2 py-1"><Link to="">Pick Up</Link></li>
      <li className="hov-b bg-white px-2 py-1 border-t-[1px]"><Link to="">Drop Off</Link></li>
    </ul>
  </div>
  )
}
import { Link } from "react-router-dom";

interface ButtonProps{
    href: string,
    children:React.ReactNode,
    className?: string,
    title?: string,
    type?: string
}


export const ButtonLinkGreen = ({ href, children, className, title } : ButtonProps) => {
    return (
        <Link
            title={title}
            to={href}
            className={`text-gray-50 bg-green-700 hover:bg-green-800 font-medium flex gap-2 items-center justify-center rounded-md px-4 py-2 ${className}`}
        >
            {children}
        </Link>
    );
};

export const ButtonLinkBorderWhite = ({ href, children, className, title } : ButtonProps) => {
    return (
        <Link
            title={title}
            to={href}
            className={`text-white bg-transparent hover:text-green-500 hover:border-green-500 border border-white bg-green-700 font-medium flex gap-2 items-center justify-center rounded-md px-4 py-2 ${className}`}
        >
            {children}
        </Link>
    );
};

export const ButtonLinkBorderBlack = ({ href, children, className, title } : ButtonProps) => {
    return (
        <Link
            title={title}
            to={href}
            className={`text-slate-500 bg-transparent hover:bg-green-50 border border-slate-400 font-medium flex gap-2 items-center justify-center rounded-md px-4 py-2 ${className}`}
        >
            {children}
        </Link>
    );
};

export const CancelButton = ({ href, type }: ButtonProps) => {
    function cancel() {
      history.back();
    }
  
    let className = "";

    switch (type) {
      case "hijau":
        className = "text-gray-800 border border-gray-800 hover:bg-gray-600 hover:bg-opacity-5 font-medium rounded-md text-sm px-5 py-1.5";
        break;
      case "putih":
        className = "text-gray-50 border border-gray-50 hover:bg-white hover:bg-opacity-5 font-medium rounded-md text-sm px-5 py-1.5";
        break;
      default:
        break;
    }
  
    return (
      <Link
        to={href}
        onClick={cancel}
        className={className}
      >
        Cancel
      </Link>
    );
};
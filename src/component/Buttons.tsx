import { Link } from 'react-router-dom';

interface ButtonProps {
  href?: string
  children: React.ReactNode
  className?: string
  title?: string
  type?:'green' | 'transparentWhite' | 'transparentGrey' | 'transparentRed'
  typebtn?: 'button' | 'submit'
  onClick?: () => void
}

// eslint-disable-next-line import/prefer-default-export
export function Button({
  href, children, className, title, type = 'green', typebtn = 'button', onClick,
}:ButtonProps) {
  let style;
  switch (type) {
    case 'green':
      style = 'btn-green';
      break;
    case 'transparentWhite':
      style = 'btn-transparentWhite';
      break;
    case 'transparentGrey':
      style = 'btn-transparentGrey';
      break;
    case 'transparentRed':
      style = 'btn-transparentRed';
      break;
    default:
      style = 'btn-green';
      break;
  }

  if (href) {
    return (
      <Link
        title={title}
        to={href}
        className={`btn ${style} ${className}`}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      type={typebtn || 'button'}
      title={title}
      className={`btn ${style} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// export function CancelButton({ href, type }: ButtonProps) {
//   function cancel() {
//     history.back();
//   }

//   let className = '';

//   switch (type) {
//     case 'hijau':
//       className = 'text-gray-800 border border-gray-800 hover:bg-gray-600 hover:bg-opacity-5 font-medium rounded-md text-sm px-5 py-1.5';
//       break;
//     case 'putih':
//       className = 'text-gray-50 border border-gray-50 hover:bg-white hover:bg-opacity-5 font-medium rounded-md text-sm px-5 py-1.5';
//       break;
//     default:
//       break;
//   }

//   return (
//     <Link
//       to={href}
//       onClick={cancel}
//       className={className}
//     >
//       Cancel
//     </Link>
//   );
// }

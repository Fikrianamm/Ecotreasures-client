import { Link } from 'react-router-dom';

interface ButtonProps {
  href?: string
  children: React.ReactNode
  className?: string
  title?: string
  type?: string
  typebtn?: 'button' | 'submit'
}

export function Button({
  href, children, className, title, type = 'green', typebtn = 'button',
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
    default:
      style = 'btn-green';
      break;
  }

  if (href) {
    return (
      <Link
        title={title}
        to={href}
        className={`transition-all ${style} font-medium flex gap-2 items-center justify-center rounded-md px-4 py-2 ${className}`}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      type={typebtn || 'button'}
      title={title}
      className={`transition-all ${style} font-medium flex gap-2 items-center justify-center rounded-md px-4 py-2 ${className}`}
    >
      {children}
    </button>
  );
}

export function CancelButton({ href, type }: ButtonProps) {
  function cancel() {
    history.back();
  }

  let className = '';

  switch (type) {
    case 'hijau':
      className = 'text-gray-800 border border-gray-800 hover:bg-gray-600 hover:bg-opacity-5 font-medium rounded-md text-sm px-5 py-1.5';
      break;
    case 'putih':
      className = 'text-gray-50 border border-gray-50 hover:bg-white hover:bg-opacity-5 font-medium rounded-md text-sm px-5 py-1.5';
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
}

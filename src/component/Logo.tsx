import { Link } from 'react-router-dom';

interface ILogo {
  type: 'white' | 'green'
  className?: string
}

export default function Logo({ type, className }: ILogo) {
  let style;
  switch (type) {
    case 'white':
      style = 'text-gray-50';
      break;
    case 'green':
      style = 'text-green-700';
      break;
    default:
      style = 'text-green-700';
      break;
  }

  return (
    <Link to="/">

      <h1
        title="EcoTreasures"
        className={`text-2xl ${style} cursor-pointer font-breeSerif ${className}`}
      >
        EcoTreasures
      </h1>

    </Link>
  );
}

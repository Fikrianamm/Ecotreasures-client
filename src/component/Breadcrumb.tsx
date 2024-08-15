import { IoIosArrowForward } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';

export default function Breadcrumb() {
  const location = useLocation();

  const capitalize = (s: string) => {
    const words = s.split(' ');

    for (let i = 0; i < words.length; i += 1) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    return words.join(' ');
  };

  const crumbs = location.pathname.split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb, index, array) => {
      const path = `/${array.slice(0, index + 1).join('/')}`;

      return (
        <>
          <Link key={path} to={path} className="text-slate-500 hover:text-green-600">{capitalize(decodeURIComponent(crumb))}</Link>
          {index < array.length - 1 && <span className="text-slate-500"><IoIosArrowForward /></span>}
        </>
      );
    });

  return (
    <nav className="flex items-center justify-start gap-3">
      <Link to="/" className="text-slate-500 hover:text-green-600">Home</Link>
      <span className="text-slate-500"><IoIosArrowForward /></span>
      {crumbs}
    </nav>
  );
}

import { Link } from 'react-router-dom';

interface ICardJenisSampah {
  src: string,
  nama: string,
  href: string
}

interface ICardLayanan {
  img: string,
  nama: string,
  href: string,
  desk: string
}

export function CardJenisSampah({ src, nama, href } : ICardJenisSampah) {
  return (
    <Link to={href} className="m-3 rounded-md hov-b bg-gray-50">
      <article
        title={nama}
        className="flex flex-col w-[160px] h-[115px] space-y-4 p-2 border justify-center items-center border-gray-300 solid rounded-md"
      >
        <img className="h-9 w-9" src={src} alt={nama} />
        <h1 className="text-xl font-bold font-redHatDisplay">{nama}</h1>
      </article>
    </Link>
  );
}

export function CardLayanan({
  href, img, nama, desk,
}: ICardLayanan) {
  return (
    <Link to={href}>
      <article
        title={nama}
        className="p-4 space-y-4 border border-gray-300 rounded-md hov-b bg-gray-50 flex-2 w-80 h-44 solid"
      >
        <div className="flex space-x-3">
          <img src={img} alt={nama} />
          <h1 className="text-xl font-bold font-redHatDisplay">
            {nama}
          </h1>
        </div>
        <p className="text-slate-600">{desk}</p>
      </article>
    </Link>
  );
}

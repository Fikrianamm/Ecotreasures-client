import { Link } from 'react-router-dom';
import { Rating } from './StarRating';
import formatRupiah from '../utils/currency';

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

interface CardProductProps {
  title: string
  price: number
  discountPersent?: number
  shop: string
  rating: number
  reviews: number
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

export function CardProduct({
  title, price, discountPersent, shop, rating = 0, reviews = 0,
}: CardProductProps) {
  let afterDiscount: number | null = null;
  if (discountPersent) {
    const discount = price * (discountPersent / 100);
    afterDiscount = price - discount;
  }

  return (
    <Link to={`/marketplace/${shop}/${title}`} className="border rounded-md border-slate-300">
      <img src="https://placehold.co/600x400/png" alt="imageproduct" className="rounded-t-md" />
      <div className="p-4">
        <h5>{title}</h5>
        <p className="font-medium">{discountPersent ? formatRupiah(afterDiscount as number) : formatRupiah(price)}</p>
        {discountPersent && (
        <p className="flex items-center gap-2 text-xs text-slate-500">
          <s>{formatRupiah(price)}</s>
          <span className="text-red-600">
            {discountPersent}
            %
          </span>
        </p>
        ) }
        <p className="text-slate-500">{shop}</p>
        <div className="flex items-center gap-2">
          <Rating size={12} rated={rating} />
          <p className="font-light text-slate-500">
            (
            {reviews}
            )
          </p>
        </div>
      </div>
    </Link>
  );
}

import { useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

interface StarRatingProps {
  maxRating?: number,
  size?: number,
  className?: string,
  defaultRating?: number,
  onSetRating: (rate:number) => void,
}

interface RatingProps {
  maxRating?: number,
  size?: number,
  className?: string,
  rated?: number,
}

interface StarProps {
  onRate?: () => void
  full: boolean
  onHoverIn?: () => void
  onHoverOut?: () => void
  className?: string
  size?: number
}

function Star({
  onRate, full, onHoverIn, onHoverOut, size, className,
}: StarProps) {
  return (
    <button
      type="button"
      className="cursor-pointer"
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {full ? (
        <FaStar size={size} className={`text-yellow-500 ${className}`} />
      ) : (
        <FaRegStar size={size} className={`text-slate-500 ${className}`} />
      )}
    </button>
  );
}

export function StarRating({
  maxRating = 5,
  size = 48,
  className = '',
  defaultRating = 0,
  onSetRating,
}: StarRatingProps) {
  const [rating, setRating] = useState<number>(defaultRating);
  const [tempRating, setTempRating] = useState<number>(0);

  function handlerRating(rate : number) {
    setRating(rate);
    onSetRating(rate);
  }

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="flex">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onRate={() => handlerRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            className={className}
            size={size}
          />
        ))}
      </div>
    </div>
  );
}

export function Rating({
  maxRating = 5,
  size = 48,
  className = '',
  rated = 0,
}: RatingProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="flex">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            full={rated >= i + 1}
            className={className}
            size={size}
          />
        ))}
      </div>
    </div>
  );
}

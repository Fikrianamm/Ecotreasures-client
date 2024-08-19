function CardSkeleton() {
  return (
    <div className="flex flex-col border rounded-md border-slate-700 animate-pulse">
      <div className="w-full h-40 rounded-t-md bg-slate-600" />
      <div className="w-2/3 h-3 mx-2 mt-3 rounded-md bg-slate-600" />
      <div className="w-1/3 h-3 mx-2 mt-3 rounded-md bg-slate-600" />
      <div className="w-2/3 h-3 mx-2 mt-3 rounded-md bg-slate-600" />
      <div className="w-2/3 h-3 mx-2 mt-3 rounded-md bg-slate-600" />
      <div className="w-2/3 h-3 mx-2 my-3 rounded-md bg-slate-600" />
    </div>
  );
}

export default function MarketplaceSkeleton() {
  return (
    <div className="grid grid-cols-5 gap-4 mt-6">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
}

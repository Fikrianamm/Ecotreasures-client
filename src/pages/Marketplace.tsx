import { useEffect } from 'react';
import { CardProduct } from '../component/Cards';
import MarketplaceLayout from '../component/layouts/MarketplaceLayout';
import useProducts from '../store/useProducts';
import MarketplaceSkeleton from '../component/skeleton/MarketplaceSkeleton';

export default function Marketplace() {
  const { fetchProduct, products, loading } = useProducts();

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return (
    <MarketplaceLayout>
      {loading ? <MarketplaceSkeleton /> : (
        <div className="grid grid-cols-5 gap-4 mt-6">
          {products?.map((product) => (
            <CardProduct image="https://placehold.co/600x400@2x.png" title={product.title} price={product.price} key={product.id} />
          ))}
        </div>
      )}
    </MarketplaceLayout>
  );
}

import { CardProduct } from '../component/Cards';
import MarketplaceLayout from '../component/layouts/MarketplaceLayout';

export default function Marketplace() {
  return (
    <MarketplaceLayout>
      <div className="grid grid-cols-5 gap-4 mt-6">
        <CardProduct image="https://placehold.co/800@3x.png" title="Title Product" price={100000} discountPersent={10} rating={3} reviews={5} shop="Name Shop" />
        <CardProduct image="https://placehold.co/800@3x.png" title="Title Product" price={100000} discountPersent={10} rating={3} reviews={5} shop="Name Shop" />
        <CardProduct image="https://placehold.co/600x400@2x.png" title="Title Product" price={100000} discountPersent={10} rating={3} reviews={5} shop="Name Shop" />
        <CardProduct image="https://placehold.co/600x400@2x.png" title="Title Product" price={100000} discountPersent={10} rating={3} reviews={5} shop="Name Shop" />
        <CardProduct image="https://placehold.co/800@3x.png" title="Title Product" price={108000} discountPersent={10} rating={3} reviews={5} shop="Name Shop" />
        <CardProduct image="https://placehold.co/600x400@2x.png" title="Title Product" price={108000} discountPersent={10} rating={3} reviews={5} shop="Name Shop" />
      </div>
    </MarketplaceLayout>
  );
}

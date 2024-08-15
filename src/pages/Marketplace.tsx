import Breadcrumb from '../component/Breadcrumb';
import { CardProduct } from '../component/Cards';
import { Navigation, NavigationMarketplace } from '../component/Navigations';

export default function Marketplace() {
  return (
    <div className="w-full min-h-dvh">
      <Navigation />
      <NavigationMarketplace />
      <div className="max-w-screen-xl mx-auto my-7">
        <Breadcrumb />
        <div className="grid grid-cols-5 gap-4 mt-6">
          <CardProduct title="Title Product" price={100000} discountPersent={10} rating={3} reviews={5} shop="Name Shop" />
          <CardProduct title="Title Product" price={100000} discountPersent={10} rating={3} reviews={5} shop="Name Shop" />
          <CardProduct title="Title Product" price={100000} discountPersent={10} rating={3} reviews={5} shop="Name Shop" />
          <CardProduct title="Title Product" price={100000} discountPersent={10} rating={3} reviews={5} shop="Name Shop" />
          <CardProduct title="Title Product" price={100000} discountPersent={10} rating={3} reviews={5} shop="Name Shop" />
          <CardProduct title="Title Product" price={100000} discountPersent={10} rating={3} reviews={5} shop="Name Shop" />
          <CardProduct title="Title Product" price={100000} discountPersent={10} rating={3} reviews={5} shop="Name Shop" />
          <CardProduct title="Title Product" price={100000} discountPersent={10} rating={3} reviews={5} shop="Name Shop" />
          <CardProduct title="Title Product" price={100000} discountPersent={10} rating={3} reviews={5} shop="Name Shop" />
        </div>
      </div>
    </div>
  );
}

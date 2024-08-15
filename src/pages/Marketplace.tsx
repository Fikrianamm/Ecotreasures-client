import Breadcrumb from '../component/Breadcrumb';
import { Navigation, NavigationMarketplace } from '../component/Navigations';

export default function Marketplace() {
  return (
    <div className="w-full min-h-dvh">
      <Navigation />
      <NavigationMarketplace />
      <div className="ml-16 my-7">
        <Breadcrumb />
      </div>
    </div>
  );
}

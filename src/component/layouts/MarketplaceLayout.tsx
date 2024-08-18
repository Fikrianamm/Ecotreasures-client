import { ReactNode } from 'react';
import Breadcrumb from '../Breadcrumb';
import { Navigation, NavigationMarketplace } from '../Navigations';

export default function MarketplaceLayout({ children } : { children : ReactNode }) {
  return (
    <div className="w-full min-h-dvh">
      <Navigation />
      <NavigationMarketplace />
      <div className="max-w-screen-xl mx-auto my-7">
        <Breadcrumb />
        { children }
      </div>
    </div>
  );
}

import { ReactNode } from 'react';
import Footer from '../Footer';
import Logo from '../Logo';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex flex-col items-center justify-center min-h-dvh">
      <Logo type="green" className="mt-12 text-3xl" />
      <div className="flex-1">{children}</div>
      <Footer type="light" />
    </main>
  );
}

import Navbar from '@components/Navbar';
import Social from '@components/Social';

export default function HomeLayout({ children }: JSX.ElementChildrenAttribute) {
  return (
    <>
      <Navbar />
      {children}
      <Social />
    </>
  );
}

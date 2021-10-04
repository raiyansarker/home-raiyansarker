import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useScrollYPosition } from 'react-use-scroll-position';
import Menu from './Menu';
import classNames from 'classnames';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  // const animation = useAnimation();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflowY = 'visible';
      document.body.style.overflowX = 'hidden';
    }
  }, [menuOpen]);

  const y: number = useScrollYPosition();
  console.log(y);

  // useEffect(() => {
  //   let condition = y <= 100;

  //   if (condition) {
  //     animation.start({
  //       height: '3.5rem',
  //       transition: {
  //         type: 'inertia',
  //         velocity: 50,
  //       },
  //     });
  //   }

  //   if (!condition) {
  //     animation.stop();
  //   }
  // }, [y, animation]);

  return (
    <>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {menuOpen && <Menu handleClose={setMenuOpen} />}
      </AnimatePresence>

      <div
        // animate={animation}
        className={classNames(
          'w-screen',
          'h-[4.5rem]',
          'fixed',
          'transition',
          'duration-500',
          'backdrop-blur-lg',
          { 'shadow-md': Math.round(y) >= 100 },
          { 'h-14': Math.round(y) >= 100 }
        )}
      >
        <div className="flex flex-row items-center justify-between h-full mx-10">
          <h1 className="font-bold text-xl tracking-wide uppercase">
            <Link href="/">Raiyan</Link>
          </h1>
          <div className="text-coolGray-800 uppercase font-semibold font-inter text-xs flex flex-row space-x-2">
            <h2 className="peer">Message me</h2>
            <div className="text-coolGray-400">/</div>
            <a
              className="peer-hover:underline hover:underline"
              href="mailto:me@raiyansarker.com"
            >
              me@raiyansarker.com
            </a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={classNames('h-[4.5rem]', { 'h-14': Math.round(y) >= 100 })}
      />
    </>
  );
}

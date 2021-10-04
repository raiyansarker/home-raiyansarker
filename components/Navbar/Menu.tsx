import { motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  handleClose: Dispatch<SetStateAction<boolean>>;
};

export default function Menu({ handleClose }: Props) {
  const dropInAnimation = {
    hidden: {
      y: '-100vh',
    },
    visible: {
      y: '0',
      transition: {
        duration: 0.4,
        type: 'tween',
        ease: [0.65, 0.05, 0.36, 1],
      },
    },
    exit: {
      y: '-100vh',
      transition: {
        duration: 0.4,
        type: 'tween',
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <>
      <motion.div
        className="w-screen h-screen z-50 fixed bg-blueGray-900"
        variants={dropInAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h1 className="text-white">Hello</h1>
        <button className="text-white" onClick={() => handleClose(false)}>
          Click me
        </button>
      </motion.div>
    </>
  );
}

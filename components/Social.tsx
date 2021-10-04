import { FaTwitter } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { BsGithub } from 'react-icons/bs';

export default function Social() {
  return (
    <div className="fixed mx-10 left-0 bottom-[13%] flex flex-col space-y-4">
      <a
        rel="noreferrer"
        target="_blank"
        href="https://twitter.com/raiyan_sarker_"
      >
        <FaTwitter className="w-[1.15rem] h-[1.15rem] fill-current text-blueGray-700" />
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://instagram.com/raiyan_sarker_"
      >
        <FiInstagram className="w-[1.15rem] h-[1.15rem] stroke-current text-blueGray-700" />
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://github.com/raiyansarker"
      >
        <BsGithub className="w-[1.15rem] h-[1.15rem] fill-current text-blueGray-700" />
      </a>
    </div>
  );
}

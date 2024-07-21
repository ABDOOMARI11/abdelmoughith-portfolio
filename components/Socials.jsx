import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const sociaux = [
  { icon: <FaGithub />, path: 'https://github.com/ABDOOMARI11' },
  { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/abdelmoughith-elaoumari-764238242' },
  
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {sociaux.map((item, index) => (
        <Link key={index} href={item.path} legacyBehavior>
          <a target="_blank" rel="noopener noreferrer" className={iconStyles}>
            {item.icon}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Socials;

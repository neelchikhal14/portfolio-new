import { link } from "fs";
import Link from "next/link";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "",
  },
  {
    icon: <FaTwitter />,
    path: "",
  },
  {
    icon: <FaLinkedin />,
    path: "",
  },
];
const Socials = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((social) => (
        <Link href={social.path} key={social.path} className={iconStyles}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;

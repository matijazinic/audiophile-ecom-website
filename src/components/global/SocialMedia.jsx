import Link from "next/link";
import { FacebookSVG, TwitterSVG, InstagramSVG } from "./SVGs";

export default function SocialMedia({ className }) {
  const social = [
    {
      name: "Facebook",
      image: "/assets/shared/desktop/icon-facebook.svg",
      svg: <FacebookSVG />,
    },
    {
      name: "Twitter",
      image: "/assets/shared/desktop/icon-twitter.svg",
      svg: <TwitterSVG />,
    },
    {
      name: "Instagram",
      image: "/assets/shared/desktop/icon-instagram.svg",
      svg: <InstagramSVG />,
    },
  ];
  return (
    <div className={className}>
      {social.map((item) => {
        return (
          <Link key={item.name} href="#" aria-label={item.name} className="transition-all">
            {item.svg}
          </Link>
        );
      })}
    </div>
  );
}

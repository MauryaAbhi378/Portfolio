import Image from "next/image";
import { OrbitingCircles, OrbitConfig } from "./magicui/orbiting-circles";

const skills = [
  "/logos/css3.svg",
  "/logos/html5.svg",
  "/logos/js.svg",
  "/logos/mongo.svg",
  "/logos/nextjs.svg",
  "/logos/nodejs.svg",
  "/logos/react.svg",
  "/logos/typescript.svg",
  "/logos/tailwind.svg",
  
];

export function Frameworks() {
  const orbits: OrbitConfig[] = [
    {
      children: skills.map((src, index) => <Icon key={index} src={src} />),
      radius: 160,
      iconSize: 40,
      speed: 1,
    },
    {
      children: [...skills].reverse().map((src, index) => <Icon key={index} src={src} />),
      radius: 100,
      iconSize: 25,
      speed: 2,
      reverse: true,
    },
  ];

  return <OrbitingCircles orbits={orbits} showPath />;
}

type IconProps = {
  src: string;
  iconSize?: number;
};

const Icon: React.FC<IconProps> = ({ src, iconSize = 40 }) => (
  <Image
    src={src}
    alt=""
    width={iconSize}
    height={iconSize}
    className="duration-200 rounded-sm hover:scale-110"
  />
);

/* eslint-disable @typescript-eslint/no-unused-vars */

import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { AnimatedBeamMultipleOutputDemo } from "./Social";
import { AnimatedListDemo } from "./AnimatedList";
import { CMS, CustomSupport, DashFeature, EmailMarket, TeamPreview } from "./Team";


export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto bg-black h-fit">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
// const Skeleton = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br  from-neutral-900 to-neutral-800 "></div>
// );
const items = [
  {
    title: "Email Automation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <EmailMarket/>,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Manage teams",
    description: "Track team performance with our team management feature.",
    header: <TeamPreview />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Customizable Dashboard",
    description: "Monitor your business activities, track key metrics, and gain real-time insights.",
    header: <DashFeature />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <AnimatedBeamMultipleOutputDemo />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "AI-Powered Customer Support",
    description: "Experience seamless customer service AI assistance.",
    header: <CustomSupport />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Content Management",
    description: "Streamline your content creation and organization with an intuitive CMS.",
    header: <CMS />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <AnimatedListDemo />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];

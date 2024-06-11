import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-between">
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-3 h-full items-center text-2xl text-[#9ca7c2] font-semibold">
          <p>About Me</p>
          <Separator className="bg-[#9ca7c2]" orientation="vertical" />
          <p>Projects</p>
          <Separator className="bg-[#9ca7c2]" orientation="vertical" />
          <p>Contact</p>
        </div>
        <div className="flex gap-3 h-full items-center text-sm text-[#9ca7c299] font-semibold">
          <p>All rights reserved • 2023</p>
          <Separator className="bg-[#9ca7c2]" orientation="vertical" />
          <p>Privacy & Terms</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

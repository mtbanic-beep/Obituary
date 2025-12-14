import React from "react";
import { ProfileImage } from "@/sections/Hero/components/ProfileImage";
import { ProfileInfo } from "@/sections/Hero/components/ProfileInfo";
import { ShareButtons } from "@/sections/Hero/components/ShareButtons";
import { TributeBanner } from "@/sections/Hero/components/TributeBanner";
import { TabBar } from "@/sections/Hero/components/TabBar";
import { ShareMemoryModal } from "@/sections/MainContent/components/ShareMemoryModal";

export const Hero = () => {
  const [shareModalOpen, setShareModalOpen] = React.useState(false);

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-cover bg-center min-h-[clamp(400px,80vh,600px)] lg:min-h-[600px]" style={{backgroundImage: "url('https://d36ewrdt9mbbbo.cloudfront.net/themes/modern/N6_EternityLightsTheWay/obituaryimage_big.webp')"}}>
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Desktop Layout */}
        <div className="hidden lg:block relative z-10 max-w-[min(1400px,95vw)] mx-auto px-[2vw] lg:px-4 pt-[clamp(180px,25vh,220px)] pb-[clamp(40px,8vh,60px)]">
          <div className="flex items-end justify-between gap-[clamp(1rem,2vw,1.5rem)]">
            <div className="relative w-[clamp(240px,20vw,280px)] h-[clamp(314px,26vw,366px)] flex-shrink-0 translate-y-[5rem]">
              <ProfileImage />
            </div>
            <ProfileInfo />
            <ShareButtons />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden relative z-10 pt-[clamp(140px,25vh,180px)] pb-[clamp(30px,5vh,40px)]">
          <div className="flex justify-center mb-[clamp(1.5rem,4vh,2rem)]">
            <ProfileImage />
          </div>
          <div className="text-center px-[4vw]">
            <h1 className="text-white text-[clamp(1.75rem,6vw,2.25rem)] font-bold mb-[0.5rem] leading-normal drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)] font-lato">
              Rhonda Mary Olson
            </h1>
            <p className="text-white text-[clamp(1rem,4vw,1.25rem)] leading-normal drop-shadow-[1px_1px_2px_rgba(0,0,0,0.8)] font-lato font-light">
              <span>August 30, 1983</span> - <span>October 8, 2025</span>
            </p>
          </div>
        </div>
      </div>

      {/* Mobile: Reordered sections using flexbox */}
      <div className="lg:hidden flex flex-col">
        <TributeBanner />
        <TabBar onShareMemory={() => setShareModalOpen(true)} />
      </div>

      {/* Desktop: Original order */}
      <div className="hidden lg:block">
        <TabBar onShareMemory={() => setShareModalOpen(true)} />
        <TributeBanner />
      </div>

      <ShareMemoryModal isOpen={shareModalOpen} onClose={() => setShareModalOpen(false)} />
    </>
  );
};

import { useState, useEffect } from "react";
import { ShareMemoryModal } from "@/sections/MainContent/components/ShareMemoryModal";
import { ShareMemoryForm } from "@/sections/MainContent/components/ShareMemoryForm";
import { ObituarySection } from "@/sections/MainContent/components/ObituarySection";
import { EventsSection } from "@/sections/MainContent/components/EventsSection";
import { TributeWallSection } from "@/sections/MainContent/components/TributeWallSection";
import { FamilyLoginSection } from "@/sections/MainContent/components/FamilyLoginSection";
import { MobileSocialShare } from "@/sections/MainContent/components/MobileSocialShare";

export const MainContent = () => {
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [showStickyFooter, setShowStickyFooter] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const distanceFromBottom = documentHeight - (scrollTop + windowHeight);
      
      setShowStickyFooter(distanceFromBottom > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="bg-[#fafafa] py-14">
        <div className="max-w-[1370px] mx-auto px-4">
          <div className="flex gap-8 flex-col lg:flex-row">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-[460px] flex-shrink-0">
              <ShareMemoryForm />
            </aside>

            {/* Main Content */}
            <main className="flex-1">
              <ObituarySection />
              <EventsSection />
              
              {/* Desktop Tribute Wall */}
              <div className="hidden lg:block">
                <TributeWallSection />
              </div>

              {/* Mobile Tribute Wall */}
              <div className="lg:hidden bg-white px-3 mb-12">
                <TributeWallSection onShareMemory={() => setShareModalOpen(true)} />
              </div>
            </main>
          </div>
        </div>
      </div>

      <MobileSocialShare />
      <FamilyLoginSection />

      {/* Mobile Sticky Footer */}
      <div 
        className={`lg:hidden fixed bottom-0 left-0 right-0 z-[997] transition-all duration-300 ${
          showStickyFooter ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <div className="bg-white border-t border-[#e6e6e6] shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
          <div className="px-3 sm:px-4 py-2.5 sm:py-3">
            <div className="flex gap-2 mb-2">
              <button 
                onClick={() => setShareModalOpen(true)}
                className="flex-1 bg-[#e8e8e8] text-[#3d3d3d] text-sm sm:text-base font-bold py-3 sm:py-4 rounded-[50px] hover:bg-[#d4d4d4] transition-all shadow-[0_1px_3px_rgba(0,0,0,0.15)] hover:shadow-[0_2px_5px_rgba(0,0,0,0.2)] uppercase tracking-[0.5px]"
              >
                Share a memory
              </button>
              <a
                href="https://park-memorial-inc.tributestore.com/?oId=rhonda-mary-olson"
                className="flex-1 text-white text-sm sm:text-base font-bold bg-[#c94949] leading-6 text-center py-3 sm:py-4 rounded-[50px] hover:bg-[#a83838] transition-all shadow-[0_2px_5px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.3)] uppercase tracking-[0.5px]"
              >
                Send Flowers
              </a>
            </div>
            <a
              href="https://treecan.tributestore.com/?oId=rhonda-mary-olson"
              className="block w-full text-white text-sm sm:text-base font-bold bg-[#5a7c4a] leading-6 text-center py-3 sm:py-4 rounded-[50px] hover:bg-[#4a6a3d] transition-all shadow-[0_2px_5px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.3)] uppercase tracking-[0.5px]"
            >
              Plant a Tree
            </a>
          </div>
        </div>
      </div>

      <ShareMemoryModal isOpen={shareModalOpen} onClose={() => setShareModalOpen(false)} />
    </>
  );
};

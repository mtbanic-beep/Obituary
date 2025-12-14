import React from "react";

type TabBarProps = {
  onShareMemory: () => void;
};

export const TabBar = ({ onShareMemory }: TabBarProps) => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 150;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTributeWall = () => {
    const tributeWall = document.getElementById('tribute-wall');
    if (tributeWall) {
      const offset = 150;
      const elementPosition = tributeWall.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Desktop Tab Bar */}
      <div className="hidden lg:block bg-white border-b-2 border-[#e6e6e6]">
        <div className="max-w-[min(1400px,95vw)] mx-auto px-[2vw] lg:px-4">
          <div className="flex items-center gap-[clamp(1rem,2vw,2rem)]">
            <div className="flex items-center" style={{ marginLeft: 'calc(252px + 2.5rem)' }}>
              <button 
                onClick={() => scrollToSection('obituary-section')}
                className="relative px-[clamp(1.5rem,2vw,2rem)] py-[clamp(0.75rem,1.5vh,1rem)] text-[#1e3a8a] text-[clamp(0.875rem,1.5vw,0.9375rem)] font-bold bg-[#dbeafe] hover:bg-[#bfdbfe] transition-colors border-b-4 border-[#3b82f6] font-source_sans_pro"
              >
                Obituary & Events
              </button>
              <button 
                onClick={() => scrollToSection('tribute-wall')}
                className="px-[clamp(1.5rem,2vw,2rem)] py-[clamp(0.75rem,1.5vh,1rem)] text-[#6b7280] text-[clamp(0.875rem,1.5vw,0.9375rem)] font-bold hover:text-[#1e3a8a] hover:bg-[#f3f4f6] transition-colors font-source_sans_pro"
              >
                Tribute Wall
              </button>
            </div>

            <div className="flex items-center gap-[clamp(0.5rem,1vw,0.75rem)] ml-auto">
              <a
                href="https://park-memorial-inc.tributestore.com/?oId=rhonda-mary-olson"
                className="text-white text-[clamp(0.75rem,1.5vw,0.875rem)] font-bold bg-[#c94949] leading-6 text-center whitespace-nowrap px-[clamp(1.25rem,2vw,1.75rem)] py-[clamp(0.625rem,1.5vh,0.8125rem)] rounded-[3.125rem] hover:bg-[#b33939] transition-all shadow-[0_2px_8px_rgba(201,73,73,0.3)] hover:shadow-[0_4px_12px_rgba(201,73,73,0.4)] uppercase tracking-[0.0625rem] font-source_sans_pro"
              >
                Send Flowers
              </a>
              <a
                href="https://treecan.tributestore.com/?oId=rhonda-mary-olson"
                className="text-white text-[clamp(0.75rem,1.5vw,0.875rem)] font-bold bg-[#5a7c4a] leading-6 text-center whitespace-nowrap px-[clamp(1.25rem,2vw,1.75rem)] py-[clamp(0.625rem,1.5vh,0.8125rem)] rounded-[3.125rem] hover:bg-[#4a6a3d] transition-all shadow-[0_2px_8px_rgba(90,124,74,0.3)] hover:shadow-[0_4px_12px_rgba(90,124,74,0.4)] uppercase tracking-[0.0625rem] font-source_sans_pro"
              >
                Plant a Tree
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Tab Bar - Moved to order-3 */}
      <div className="lg:hidden bg-white border-b-2 border-[#e6e6e6] order-3">
        <div className="px-[4vw] sm:px-[3vw] py-[1.5vh]">
          <button 
            onClick={onShareMemory}
            className="w-full bg-[#e5e5e5] text-[#3d3d3d] text-[clamp(0.875rem,3.5vw,1rem)] font-bold py-[2vh] sm:py-[2.5vh] rounded-[3.125rem] mb-[1.5vh] hover:bg-[#d4d4d4] active:bg-[#c4c4c4] transition-all shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:shadow-[0_3px_6px_rgba(0,0,0,0.15)] uppercase tracking-[0.0625rem] font-source_sans_pro"
          >
            Share a memory
          </button>

          <div className="flex gap-[1vw] sm:gap-[0.5rem]">
            <button 
              onClick={() => scrollToSection('obituary-section')}
              className="flex-1 px-[2vw] sm:px-[3vw] py-[2vh] sm:py-[2.5vh] text-[#1e3a8a] text-[clamp(0.75rem,3vw,1rem)] font-bold bg-[#dbeafe] rounded-lg hover:bg-[#bfdbfe] active:bg-[#93c5fd] transition-all shadow-[0_2px_4px_rgba(59,130,246,0.2)] hover:shadow-[0_3px_6px_rgba(59,130,246,0.3)] uppercase tracking-[0.0625rem] border-b-4 border-[#3b82f6] font-source_sans_pro"
            >
              Obituary & Events
            </button>
            <button 
              onClick={scrollToTributeWall}
              className="flex-1 px-[2vw] sm:px-[3vw] py-[2vh] sm:py-[2.5vh] text-[#6b7280] text-[clamp(0.75rem,3vw,1rem)] font-bold bg-white border-2 border-[#e5e7eb] rounded-lg hover:bg-[#f9fafb] hover:border-[#d1d5db] active:bg-[#f3f4f6] transition-all shadow-[0_2px_4px_rgba(0,0,0,0.08)] hover:shadow-[0_3px_6px_rgba(0,0,0,0.12)] uppercase tracking-[0.0625rem] font-source_sans_pro"
            >
              Tribute Wall
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

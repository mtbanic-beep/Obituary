export const TributeBanner = () => {
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
      {/* Desktop Banner */}
      <div className="hidden lg:block bg-[#fafafa] py-[1vh]">
        <div className="max-w-[min(1340px,90vw)] mx-auto px-[2vw] lg:px-4">
          <div className="relative flex items-center justify-center bg-[#e5e7eb] rounded-[10px] gap-[clamp(0.5rem,2vw,1rem)] text-[#3d3d3d] leading-normal px-[clamp(1rem,3vw,1.25rem)] py-[clamp(0.75rem,2vh,0.875rem)] hover:bg-[#dde1e8] transition-colors cursor-pointer" onClick={scrollToTributeWall}>
            <div className="absolute -top-[0.625rem] -right-[1.25rem] bg-[#0891b2] text-white text-[clamp(0.625rem,1.5vw,0.75rem)] font-semibold h-[1.5rem] px-[0.625rem] py-[0.25rem] rounded-[1.25rem] shadow-sm font-source_sans_pro">
              2 New Posts
            </div>
            <div className="shrink-0">
              <svg className="w-[clamp(1.25rem,3vw,1.5rem)] h-[clamp(1.25rem,3vw,1.5rem)] text-[#3d3d3d]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div className="text-[clamp(0.875rem,1.8vw,0.9375rem)] font-medium font-source_sans_pro">
              2 Trees, Flowers, or Condolences have been sent in support of Rhonda's family –{" "}
              <span className="underline hover:no-underline font-semibold">
                View on Tribute Wall
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Banner - Moved to order-1 */}
      <div className="lg:hidden bg-white order-1">
        <div className="bg-[#e5e7eb] border-b-2 border-white">
          <div className="px-[4vw] sm:px-[3vw] py-[2vh] sm:py-[2.5vh]">
            <button 
              onClick={scrollToTributeWall}
              className="w-full flex items-center justify-center gap-[0.5rem] text-[#3d3d3d] text-[clamp(0.75rem,3vw,0.875rem)] leading-normal hover:bg-[#dde1e8] active:bg-[#d1d5db] transition-colors rounded-lg py-[1vh] px-[2vw] font-source_sans_pro font-medium"
            >
              <div className="shrink-0">
                <svg className="w-[clamp(1rem,4vw,1.25rem)] h-[clamp(1rem,4vw,1.25rem)] text-[#3d3d3d]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div className="text-center flex-1">
                <span className="block sm:inline">2 Trees, Flowers, or Condolences have been sent – </span>
                <span className="underline font-semibold">View on Tribute Wall</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

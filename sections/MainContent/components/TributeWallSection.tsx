import { TributeCard } from "@/sections/MainContent/components/TributeCard";

type TributeWallSectionProps = {
  onShareMemory?: () => void;
};

export const TributeWallSection = ({ onShareMemory }: TributeWallSectionProps) => {
  const tributes = [
    {
      author: "Marcello Cecchetto",
      date: "October 12",
      message: "My sincere and deepest condolences on the loss of a beautiful person. Rhonda was such a wonderful person and I cherish the moments we worked together rest in peace and God bless her children in this difficult moment.",
    },
    {
      author: "Sarah Mitchell",
      date: "October 11",
      message: "Rhonda was such a great friend to me. She was truely one of those \"light of the world people, and always found a way to brighten a room. Her sudden passing is heartbreaking, as another angel leaves us far too soon.",
    },
  ];

  return (
    <div id="tribute-wall" className="pt-[45px] scroll-mt-[200px]">
      <div className="pb-[70px]">
        <div className="flex flex-nowrap md:flex-wrap justify-between mb-6">
          <div className="min-h-[50px] md:min-h-[60px] pb-5 md:pb-[30px]">
            <h2 className="text-[#3d3d3d] text-2xl font-bold leading-normal text-left font-source_sans_pro">
              Tribute Wall
            </h2>
          </div>
        </div>

        {onShareMemory && (
          <button 
            onClick={onShareMemory}
            className="text-[#3d3d3d] text-[15px] font-bold bg-[#e8e8e8] block leading-normal text-center w-full overflow-hidden mb-6 px-6 py-4 rounded-[50px] hover:bg-[#d4d4d4] transition-all shadow-[0_1px_3px_rgba(0,0,0,0.15)] hover:shadow-[0_2px_5px_rgba(0,0,0,0.2)] font-source_sans_pro uppercase tracking-[0.5px] lg:hidden"
          >
            Share a Memory
          </button>
        )}

        <div id="plant-tree-banner" className="text-white bg-[url('https://d1v2hfhsvnke6s.cloudfront.net/Shared/images/trees300.webp')] bg-cover flex flex-col md:flex-row justify-between text-center md:text-start mt-[25px] md:mt-0 p-2.5 md:px-[30px] md:py-5 rounded-lg mb-6 font-lato scroll-mt-[200px]">
          <div className="text-center md:text-start p-2.5">
            <h3 className="text-xl font-semibold leading-normal text-center md:text-start pb-[5px] font-lato">
              Plant a tree in memory of Rhonda
            </h3>
            <span className="text-center md:text-start font-lato font-normal">
              An environmentally friendly option
            </span>
          </div>
          <div className="text-center md:text-start pt-[11px]">
            <a
              href="https://treecan.tributestore.com/?oId=rhonda-mary-olson"
              className="text-[#3d3d3d] text-[15px] font-bold bg-white shadow-[rgb(64,108,79)_0px_0px_0px_2px_inset] inline-block leading-normal text-center overflow-hidden px-[30px] py-[15px] rounded-[50px] hover:text-white hover:bg-[#5a7c4a] hover:shadow-[0_2px_5px_rgba(0,0,0,0.2)] transition-all font-source_sans_pro uppercase tracking-[0.5px]"
            >
              Plant a tree
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {tributes.map((tribute, index) => (
            <TributeCard key={index} {...tribute} />
          ))}
        </div>
      </div>
    </div>
  );
};

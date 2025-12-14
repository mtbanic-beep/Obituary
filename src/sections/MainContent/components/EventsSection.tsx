export const EventsSection = () => {
  return (
    <div className="border-b-2 border-[#d4d4d4] pt-[45px] pb-[55px]">
      <div className="min-h-[50px] pb-5 lg:pb-[30px]">
        <h2 className="text-[#3d3d3d] text-2xl font-bold leading-normal text-left font-source_sans_pro">
          Events
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white shadow-[rgba(0,0,0,0.1)_0px_0px_4px_0px] rounded-md h-full w-full max-w-[350px] lg:max-w-none">
          <div className="flex flex-col h-full pb-[15px]">
            <div className="flex flex-col gap-2 pt-4 px-4">
              <div className="flex flex-wrap items-center gap-2">
                <div className="text-[#3d3d3d] text-xl font-semibold basis-0 grow leading-7 capitalize font-source_serif_pro">
                  Funeral Service
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="text-[#3d3d3d] text-sm basis-0 grow leading-5 font-lato font-normal">
                  Sunday, October 19, 2025
                  <div>10:30 AM</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="text-[#3d3d3d] text-sm basis-0 grow leading-5 font-lato">
                  <div>St. Bonaventure Church</div>
                  <div>
                    <div>1600 Acadia Dr SE</div>
                    <div>Calgary, AB T2J 0B8</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="text-[#3d3d3d] text-[15px] basis-0 grow leading-normal w-full font-source_sans_pro font-normal">
                  Rhonda will be laid to rest at the Eden Brook Cemetery. Following the funeral, a reception luncheon will be served at the Church Hall.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

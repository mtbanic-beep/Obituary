export const ShareMemoryForm = () => {
  return (
    <div className="bg-white shadow-[rgba(0,0,0,0.08)_0px_2px_12px_0px] rounded-lg sticky top-[180px] pt-[35px] pb-[47px] px-[25px]">
      <h3 className="text-[#3d3d3d] text-[22px] font-bold mb-[15px] px-[15px] leading-[1.4] font-source_sans_pro">Share a memory</h3>
      <div className="px-[15px]">
        <textarea
          placeholder="Type here to share a memory of Rhonda Mary Olson or send condolences to the family… "
          className="w-full h-[120px] border-b-2 border-[#e6e6e6] pt-[15px] pb-[25px] px-0 text-[16px] resize-none leading-[1.5] rounded-sm focus:outline-none focus:border-[#7a9b5f] transition-colors font-source_sans_pro font-normal"
        ></textarea>
        <div className="flex gap-2 pb-6 mt-6">
          <button className="flex-1 bg-[#e5e5e5] text-[#3d3d3d] text-[15px] font-semibold h-[35px] rounded-[20px] leading-[35px] px-2.5 hover:bg-[#d4d4d4] transition-colors">
            Photos/Video
          </button>
          <button className="flex-1 bg-[#e5e5e5] text-[#3d3d3d] text-[15px] font-semibold h-[35px] rounded-[20px] leading-[35px] px-2.5 hover:bg-[#d4d4d4] transition-colors font-source_sans_pro">
            Candle
          </button>
        </div>
        <label className="flex items-center gap-2.5 text-[#3d3d3d] text-[15px] h-5 mb-6 font-source_sans_pro font-normal">
          <input type="checkbox" className="w-5 h-5 border border-[#d4d4d4] rounded-sm" />
          <span>Make this condolence private</span>
        </label>
      </div>
      <div className="bg-white pt-[7px] px-[15px] z-[2] w-full">
        <button
          type="submit"
          className="relative w-full h-[52px] bg-white text-[#3d3d3d] text-[18px] font-bold leading-normal text-center uppercase tracking-[1px] border-2 border-[#6b6b6b] border-solid rounded-[44px] overflow-hidden p-0 hover:bg-[#f5f5f5] hover:border-[#3d3d3d] active:bg-[#e5e5e5] transition-all shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:shadow-[0_3px_6px_rgba(0,0,0,0.15)] font-source_sans_pro"
        >
          Post Now
        </button>
      </div>
    </div>
  );
};

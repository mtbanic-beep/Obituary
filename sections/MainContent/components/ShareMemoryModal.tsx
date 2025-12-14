export const ShareMemoryModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[9999] lg:hidden">
      <div className="fixed inset-0 bg-white overflow-y-auto">
        <div className="min-h-full">
          {/* Header */}
          <div className="sticky top-0 bg-white z-10 border-b-2 border-[#e6e6e6] px-4 py-4 shadow-sm">
            <div className="flex items-center justify-between">
              <button
                onClick={onClose}
                className="text-[#6b6b6b] text-3xl leading-none hover:text-[#3d3d3d] transition-colors"
              >
                ×
              </button>
              <h3 className="text-[#3d3d3d] text-[18px] font-bold font-source_sans_pro">Share a memory</h3>
              <div className="w-8"></div>
            </div>
          </div>

          {/* Content */}
          <div className="px-4 py-6">
            {/* Textarea */}
            <div className="mb-6">
              <textarea
                rows={5}
                placeholder="Type here to share a memory of Rhonda Mary Olson or send condolences to the family… "
                className="w-full border-2 border-[#e6e6e6] rounded-md p-4 text-[16px] resize-none focus:outline-none focus:border-[#7a9b5f] transition-colors font-source_sans_pro font-normal leading-[1.5]"
              ></textarea>
            </div>

            {/* Add to your memory section */}
            <div className="mb-6">
              <div className="text-[#3d3d3d] text-base font-semibold mb-4 font-source_sans_pro">
                Add to your memory
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-[#e5e5e5] text-[#3d3d3d] text-[15px] font-semibold h-[35px] rounded-[20px] leading-[35px] px-2.5 hover:bg-[#d4d4d4] transition-colors font-source_sans_pro">
                  Photos/Video
                </button>
                <button className="flex-1 bg-[#e5e5e5] text-[#3d3d3d] text-[15px] font-semibold h-[35px] rounded-[20px] leading-[35px] px-2.5 hover:bg-[#d4d4d4] transition-colors">
                  Candle
                </button>
              </div>
            </div>

            {/* Private checkbox */}
            <div className="mb-6">
              <label className="flex items-center gap-2.5 text-[#3d3d3d] text-[15px] font-source_sans_pro font-normal">
                <input
                  type="checkbox"
                  className="w-5 h-5 border border-[#d4d4d4] rounded-sm"
                />
                <span>Make this condolence private</span>
              </label>
            </div>

            {/* Submit button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full h-[52px] bg-white text-[#3d3d3d] text-[18px] font-bold leading-normal text-center uppercase tracking-[1px] border-2 border-[#6b6b6b] border-solid rounded-[44px] overflow-hidden p-0 hover:bg-[#f5f5f5] hover:border-[#3d3d3d] active:bg-[#e5e5e5] transition-all shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:shadow-[0_3px_6px_rgba(0,0,0,0.15)] font-source_sans_pro"
              >
                Post Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

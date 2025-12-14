type TributeCardProps = {
  author: string;
  date: string;
  message: string;
  isCandle?: boolean;
  candleImage?: string;
  showReadMore?: boolean;
};

export const TributeCard = ({ author, date, message, isCandle, candleImage, showReadMore }: TributeCardProps) => {
  return (
    <div className="bg-white shadow-[rgba(0,0,0,0.05)_1px_1px_10px_0px] overflow-hidden rounded-sm">
      <div className="pt-4 px-4 pb-2">
        {isCandle && candleImage ? (
          <div className="pb-5 px-4">
            <div className="flex items-center">
              <div className="shrink-0 h-[65px] w-[65px] mr-3.5">
                <img
                  src={candleImage}
                  alt="Candle"
                  className="inline-block max-w-full object-contain"
                />
              </div>
              <div className="text-[#3d3d3d] grow leading-6 font-source_sans_pro font-normal">
                A candle was lit for Rhonda Mary Olson.
              </div>
            </div>
          </div>
        ) : (
          <div className="text-[#3d3d3d] leading-normal break-words pb-3.5 md:pb-5 px-[13px] md:px-4 font-source_sans_pro font-normal">
            <span className="break-words">{message}</span>
            {showReadMore && (
              <span className="font-bold break-words underline cursor-pointer"> Continue Reading</span>
            )}
          </div>
        )}
      </div>
      <div className="pb-4 px-4">
        <div className="flex justify-end text-right">
          <div className="grow overflow-hidden">
            <div className="text-[#3d3d3d] font-bold leading-normal break-words capitalize w-full pb-1 font-source_sans_pro">
              <span className="break-words">{author}</span>
            </div>
            <div className="text-[#9ca3af] text-[10px] leading-normal font-source_sans_pro">
              {date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

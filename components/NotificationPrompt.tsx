export const NotificationPrompt = () => {
  return (
    <div className="fixed items-center bg-black/50 box-border caret-transparent hidden h-full w-full z-[9999] bg-left-top p-5 right-0 top-0 md:bg-transparent md:h-auto md:w-auto md:bg-[position:0px_0px]">
      <div className="items-center bg-white shadow-[rgba(0,0,0,0.25)_1px_1px_10px_0px] box-border caret-transparent flex flex-col w-full p-[25px] rounded-sm md:items-start md:flex-row md:w-[400px] md:pb-[30px] md:px-5">
        <div className="relative box-border caret-transparent shrink-0 w-[95px] p-2.5 md:w-[100px] md:pr-[30px] md:pb-0">
          <div className="bg-gray-200 bg-[url('https://d1q40j6jx1d8h6.cloudfront.net/Obituaries/46567712/Thumbnail.jpg')] bg-cover box-border caret-transparent h-0 w-full bg-center pb-[100%] rounded-[50%]"></div>
          <i className="absolute text-[15px] font-black bg-gray-200 box-border caret-transparent block leading-[15px] min-h-10 min-w-10 p-3 rounded-[50%] left-[57px] top-[57px] font-font_awesome_5_pro md:text-xs md:leading-3 md:min-h-[30px] md:min-w-[30px] md:p-[9px] md:left-[50px] md:top-[50px] before:accent-auto before:box-border before:caret-transparent before:text-black before:text-[15px] before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[15px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_5_pro before:md:text-xs before:md:leading-3"></i>
        </div>
        <div className="box-border caret-transparent text-center pt-2.5 font-source_sans_pro md:text-left md:pt-0">
          <div className="text-2xl font-bold box-border caret-transparent leading-6 text-center pt-0.5 md:text-lg md:leading-[18px] md:text-left">
            Tribute Notifications
            <div className="text-[9px] box-border caret-transparent inline-block leading-[9px] text-center align-super md:text-left">
              TM
            </div>
          </div>
          <div className="box-border caret-transparent leading-[normal] text-center pt-[9px] pb-[21px] md:text-left">
            Stay up-to-date on event information as well as memories shared on
            Patricia Mary Macdonald’s Tribute Wall.
          </div>
          <div className="text-neutral-700 font-semibold box-border caret-transparent inline-block leading-[normal] text-center">
            <div className="text-white bg-blue-400 box-border caret-transparent block min-w-[126px] overflow-hidden px-[25px] py-[13px] rounded-[50px] md:inline-block">
              Allow
            </div>
            <div className="box-border caret-transparent block min-w-[126px] overflow-hidden mt-[5px] px-[25px] py-[13px] rounded-[50px] md:inline-block md:mt-0 hover:text-zinc-800 hover:border-zinc-800">
              Don&#39;t Allow
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

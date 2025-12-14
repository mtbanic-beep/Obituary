export const TributeWall = () => {
  return (
    <div className="items-center box-border caret-transparent hidden h-auto justify-center max-w-full w-[1340px] mt-4 mx-auto md:flex md:h-[59px]">
      <div className="relative text-neutral-700 items-center bg-gray-200 box-border caret-transparent gap-x-1 flex h-full justify-center leading-[normal] max-w-[1370px] min-h-0 min-w-0 gap-y-1 w-[calc(100%_-_20px)] mx-[15px] rounded-[10px] left-[15px] font-source_sans_pro md:gap-x-[15px] md:min-h-[auto] md:min-w-[auto] md:gap-y-[15px]">
        <div className="absolute text-white text-xs bg-cyan-800 box-border caret-transparent h-[23px] px-2 py-1 rounded-[38px] right-[5px] -top-2.5 md:-right-5">
          14 New Posts
        </div>
        <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          <i className="text-xl font-black box-border caret-transparent inline-block leading-5 font-font_awesome_5_pro before:accent-auto before:box-border before:caret-transparent before:text-neutral-700 before:text-xl before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_5_pro"></i>
        </div>
        <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          {" "}
          14 Trees, Flowers, or Condolences have been sent in support of
          Patricia&#39;s family –{" "}
          <span className="box-border caret-transparent underline hover:no-underline">
            View on Tribute Wall
          </span>
        </div>
      </div>
    </div>
  );
};

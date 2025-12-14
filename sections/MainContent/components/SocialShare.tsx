export const SocialShare = () => {
  return (
    <div className="box-border caret-transparent mb-5">
      <div className="box-border caret-transparent flex flex-col md:hidden">
        <div className="text-neutral-700 text-sm font-semibold box-border caret-transparent leading-[14px] min-h-[auto] min-w-[auto] text-center py-[15px] font-source_sans_pro md:text-white md:text-[15px] md:leading-[15px] md:min-h-0 md:min-w-0">
          {" "}
          Share Obituary:{" "}
        </div>
        <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
          <div className="relative text-neutral-700 bg-stone-500 box-border caret-transparent shrink-0 h-[45px] min-h-[auto] min-w-[auto] text-center w-[45px] border border-stone-500 rounded-[50%] border-solid md:h-[50px] md:min-h-0 md:min-w-0 md:w-[50px]">
            <img
              src="https://c.animaapp.com/mj3qzcubLRevsO/assets/fb-icon.png"
              alt="Facebook Share"
              className="absolute aspect-[auto_50_/_50] box-border caret-transparent h-full max-w-full object-cover w-full left-0 top-0"
            />
          </div>
          <div className="relative text-neutral-700 bg-white box-border caret-transparent shrink-0 h-[45px] min-h-[auto] min-w-[auto] text-center w-[45px] border border-stone-500 ml-[15px] rounded-[50%] border-solid md:h-[50px] md:min-h-0 md:min-w-0 md:w-[50px] md:ml-3.5">
            <img
              src="https://c.animaapp.com/mj3qzcubLRevsO/assets/icon-2.svg"
              alt="Icon"
              className="absolute box-border caret-transparent h-4 translate-x-[-50.0%] translate-y-[-50.0%] w-4 left-2/4 top-2/4 md:transform-none"
            />
          </div>
          <a
            href="sms://?&body=https://www.mhfh.com/obituaries/Patricia-Mary-Macdonald?obId=46567712"
            aria-label="Share obituary"
            className="relative text-neutral-700 bg-white box-border caret-transparent block shrink-0 h-[45px] leading-[normal] min-h-[auto] min-w-[auto] text-center w-[45px] border border-stone-500 ml-[15px] rounded-[50%] border-solid md:hidden md:h-[50px] md:min-h-0 md:min-w-0 md:w-[50px] md:ml-3.5"
          >
            <i className="absolute text-stone-500 text-lg box-border caret-transparent block leading-[18px] translate-x-[-50.0%] translate-y-[-50.0%] left-2/4 top-2/4 font-material md:transform-none before:accent-auto before:box-border before:caret-transparent before:text-stone-500 before:text-lg before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18px] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-material"></i>
          </a>
          <div className="relative text-neutral-700 bg-white box-border caret-transparent shrink-0 h-[45px] min-h-[auto] min-w-[auto] text-center w-[45px] border border-stone-500 ml-[15px] rounded-[50%] border-solid md:h-[50px] md:min-h-0 md:min-w-0 md:w-[50px] md:ml-3.5">
            <i className="absolute text-stone-500 text-lg box-border caret-transparent block leading-[18px] translate-x-[-50.0%] translate-y-[-50.0%] left-2/4 top-2/4 font-material md:transform-none before:accent-auto before:box-border before:caret-transparent before:text-stone-500 before:text-lg before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18px] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-material"></i>
          </div>
          <div className="relative text-neutral-700 bg-white box-border caret-transparent shrink-0 h-[45px] min-h-[auto] min-w-[auto] text-center w-[45px] border border-stone-500 ml-[15px] rounded-[50%] border-solid md:h-[50px] md:min-h-0 md:min-w-0 md:w-[50px] md:ml-3.5">
            <i className="absolute text-stone-500 text-lg font-black box-border caret-transparent block leading-[18px] translate-x-[-50.0%] translate-y-[-50.0%] left-2/4 top-2/4 font-font_awesome_5_pro md:transform-none before:accent-auto before:box-border before:caret-transparent before:text-stone-500 before:text-lg before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[18px] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_5_pro"></i>
          </div>
          <div
            name="print3"
            className="relative text-neutral-700 bg-white box-border caret-transparent hidden shrink-0 h-[45px] text-center w-[45px] border border-stone-500 ml-[15px] rounded-[50%] border-solid md:block md:h-[50px] md:w-[50px] md:ml-3.5"
          >
            <i className="absolute text-stone-500 text-lg box-border caret-transparent block leading-[18px] left-2/4 top-2/4 font-material before:accent-auto before:box-border before:caret-transparent before:text-stone-500 before:text-lg before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18px] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-material"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

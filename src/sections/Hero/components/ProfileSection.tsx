import { ProfileImage } from "@/sections/Hero/components/ProfileImage";
import { ProfileInfo } from "@/sections/Hero/components/ProfileInfo";

export const ProfileSection = () => {
  return (
    <div className="relative box-border caret-transparent max-w-full text-center w-[1200px] z-[1] pt-[100px] px-0 md:text-left md:pt-[35px] md:px-[15px]">
      <div className="relative box-border caret-transparent block text-center w-full md:flex md:text-left">
        <div className="box-border caret-transparent shrink min-h-0 min-w-0 text-center w-auto md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:text-left md:w-[252px]">
          <ProfileImage />
        </div>
        <ProfileInfo />
        <div className="items-end box-border caret-transparent hidden shrink-0 min-h-0 min-w-0 text-center -mb-px pb-0 md:flex md:min-h-[auto] md:min-w-[auto] md:text-left md:mb-0 md:pb-[46px]">
          <div className="bg-white box-border caret-transparent min-h-0 min-w-0 text-center w-full bg-left-top md:bg-transparent md:min-h-[auto] md:min-w-[auto] md:text-left md:bg-[position:0px_0px]">
            <div className="text-neutral-700 text-sm font-semibold box-border caret-transparent leading-[14px] text-center py-[15px] md:text-white md:text-[15px] md:leading-[15px]">
              {" "}
              Share Obituary:{" "}
            </div>
            <div className="box-border caret-transparent flex justify-center text-center md:text-left">
              <div className="relative box-border caret-transparent shrink-0 h-[45px] min-h-0 min-w-0 text-center w-[45px] border rounded-[50%] border-solid border-transparent md:h-[50px] md:min-h-[auto] md:min-w-[auto] md:w-[50px]">
                <img
                  src="https://c.animaapp.com/mj3qzcubLRevsO/assets/fb-icon.png"
                  alt="Facebook Share"
                  className="absolute aspect-[auto_50_/_50] box-border caret-transparent h-full max-w-full object-cover w-full left-0 top-0"
                />
              </div>
              <div className="relative bg-white box-border caret-transparent shrink-0 h-[45px] min-h-0 min-w-0 text-center w-[45px] border ml-[15px] rounded-[50%] border-solid border-transparent md:h-[50px] md:min-h-[auto] md:min-w-[auto] md:w-[50px] md:ml-3.5">
                <img
                  src="https://c.animaapp.com/mj3qzcubLRevsO/assets/icon-1.svg"
                  alt="Icon"
                  className="absolute box-border caret-transparent h-4 transform-none w-4 left-2/4 top-2/4 md:translate-x-[-50.0%] md:translate-y-[-50.0%]"
                />
              </div>
              <a
                href="sms://?&body=https://www.mhfh.com/obituaries/Patricia-Mary-Macdonald?obId=46567712"
                aria-label="Share obituary"
                className="relative bg-white box-border caret-transparent block shrink-0 h-[45px] leading-[normal] text-center w-[45px] border ml-[15px] rounded-[50%] border-solid border-transparent md:hidden md:h-[50px] md:w-[50px] md:ml-3.5"
              >
                <i className="absolute text-stone-500 text-lg box-border caret-transparent block leading-[18px] left-2/4 top-2/4 font-material before:accent-auto before:box-border before:caret-transparent before:text-stone-500 before:text-lg before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18px] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-material"></i>
              </a>
              <div className="relative bg-white box-border caret-transparent shrink-0 h-[45px] min-h-0 min-w-0 text-center w-[45px] border ml-[15px] rounded-[50%] border-solid border-transparent md:h-[50px] md:min-h-[auto] md:min-w-[auto] md:w-[50px] md:ml-3.5">
                <i className="absolute text-stone-500 text-lg box-border caret-transparent block leading-[18px] transform-none left-2/4 top-2/4 font-material md:translate-x-[-50.0%] md:translate-y-[-50.0%] before:accent-auto before:box-border before:caret-transparent before:text-stone-500 before:text-lg before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18px] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-material"></i>
              </div>
              <div className="relative bg-white box-border caret-transparent shrink-0 h-[45px] min-h-0 min-w-0 text-center w-[45px] border ml-[15px] rounded-[50%] border-solid border-transparent md:h-[50px] md:min-h-[auto] md:min-w-[auto] md:w-[50px] md:ml-3.5">
                <i className="absolute text-stone-500 text-lg font-black box-border caret-transparent block leading-[18px] transform-none left-2/4 top-2/4 font-font_awesome_5_pro md:translate-x-[-50.0%] md:translate-y-[-50.0%] before:accent-auto before:box-border before:caret-transparent before:text-stone-500 before:text-lg before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[18px] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_5_pro"></i>
              </div>
              <div
                name="print3"
                className="relative bg-white box-border caret-transparent hidden shrink-0 h-[45px] min-h-0 min-w-0 text-center w-[45px] border ml-[15px] rounded-[50%] border-solid border-transparent md:block md:h-[50px] md:min-h-[auto] md:min-w-[auto] md:w-[50px] md:ml-3.5"
              >
                <i className="absolute text-stone-500 text-lg box-border caret-transparent block leading-[18px] transform-none left-2/4 top-2/4 font-material md:translate-x-[-50.0%] md:translate-y-[-50.0%] before:accent-auto before:box-border before:caret-transparent before:text-stone-500 before:text-lg before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18px] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-material"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

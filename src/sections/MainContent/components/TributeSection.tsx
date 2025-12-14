import { TributeHeader } from "@/sections/MainContent/components/TributeHeader";

export const TributeSection = () => {
  return (
    <div className="box-border caret-transparent pt-7 md:pt-[45px]">
      <div className="box-border caret-transparent bg-[position:0px_0px] pb-[70px]">
        <div className="box-border caret-transparent max-w-[1370px] w-full mx-auto px-[15px]">
          <TributeHeader />
        </div>
      </div>
    </div>
  );
};

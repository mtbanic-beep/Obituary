import { ShareMemoryForm } from "@/sections/MainContent/components/ShareMemoryForm";

export const Sidebar = () => {
  return (
    <div className="box-content caret-black shrink min-h-0 min-w-0 w-auto px-0 md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[460px] md:[mask-position:0%] md:bg-left-top md:px-[15px] md:scroll-m-0 md:scroll-p-[auto]">
      <div className="static bg-transparent shadow-none box-content caret-black top-auto md:sticky md:aspect-auto md:bg-white md:shadow-[rgba(0,0,0,0.05)_1px_1px_8px_0px] md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:top-[254px]">
        <div className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <ShareMemoryForm />
        </div>
      </div>
    </div>
  );
};

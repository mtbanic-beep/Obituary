export const PreplanningModal = () => {
  return (
    <nav className="fixed bg-white shadow-[rgba(107,82,82,0.3)_0px_6px_12px_0px] box-border caret-transparent h-auto max-w-[570px] right-[-600px] w-auto z-[9999] mt-5 mb-[120px] mx-[30px] top-0 md:h-full md:max-w-none md:w-[570px] md:m-0">
      <div className="relative bg-no-repeat bg-cover box-border caret-transparent flex flex-col shrink-0 h-full bg-center">
        <div className="absolute text-zinc-500 text-xl items-center bg-white shadow-[rgba(0,0,0,0.5)_0px_2px_3px_0px] box-border caret-transparent flex h-6 justify-center leading-5 text-right w-6 z-[2] rounded-[50%] right-[5px] top-[5px] md:right-5 md:top-5">
          <i className="text-black font-bold box-border caret-transparent block font-font_awesome_5_pro before:accent-auto before:box-border before:caret-transparent before:text-black before:text-xl before:not-italic before:normal-nums before:font-bold before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-right before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_5_pro"></i>
        </div>
        <div className="bg-[url('https://d1v2hfhsvnke6s.cloudfront.net/Content/Images/exit-pop-baground.jpg')] bg-cover box-border caret-transparent h-[200px] overflow-x-auto overflow-y-hidden w-full bg-[position:50%_-10px] font-lato md:bg-[position:left_-40px]"></div>
        <div className="relative box-border caret-transparent h-2.5 text-center top-[-60px] -mb-2.5">
          <i className="text-3xl font-black bg-white shadow-[rgba(0,0,0,0.81)_0px_0px_10px_0px] box-border caret-transparent inline-block leading-[30px] p-[30px] rounded-[45px] font-font_awesome_5_pro before:accent-auto before:box-border before:caret-transparent before:text-black before:text-3xl before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[30px] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:pb-px before:border-b before:border-separate before:font-font_awesome_5_pro"></i>
        </div>
        <div className="bg-cover box-border caret-transparent grow bg-center font-lato">
          <div className="box-border caret-transparent pt-5 px-[30px] md:pt-[50px] md:px-[50px]">
            <div className="box-border caret-transparent my-5 md:mt-0">
              <h1 className="text-base box-border caret-transparent leading-[normal] md:text-[44px] md:leading-[56.32px]">
                Save Your Family Time, Money, and Stress
              </h1>
            </div>
            <div className="text-xl box-border caret-transparent leading-5">
              <p className="text-sm box-border caret-transparent leading-[normal] pb-2.5 md:text-lg">
                Give the gift of peace to your family by putting your own
                funeral and burial arrangements in writing.
              </p>
              <p className="text-sm box-border caret-transparent leading-[normal] pb-2.5 md:text-lg">
                Our free preplanning materials will help you get started.
              </p>
            </div>
          </div>
          <div className="items-center box-border caret-transparent flex justify-center my-2.5 px-[30px] py-0 md:mt-0 md:px-[50px] md:py-5">
            <a
              href="https://www1.mhfh.com/planning-guide?utm_source=exit-pop&utm_medium=obit&utm_campaign=preneed"
              className="text-base font-semibold bg-stone-300 box-border caret-transparent block tracking-[1px] leading-7 text-center w-full my-[15px] px-2.5 py-4 rounded-xl md:text-2xl md:font-bold md:tracking-[normal] md:leading-8 md:px-6 md:py-[22px]"
            >
              Get Your Preplanning Guide
            </a>
          </div>
        </div>
        <div className="bg-cover box-border caret-transparent h-[200px] overflow-x-auto overflow-y-hidden w-full bg-[position:50%_-10px] font-lato md:bg-[position:left_-40px]"></div>
      </div>
    </nav>
  );
};

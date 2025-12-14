export const Events = () => {
  return (
    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
      <div className="border-b-zinc-300 box-border caret-transparent flex flex-col bg-[position:0px_0px] pt-[45px] pb-[55px] border-b-2 font-source_sans_pro md:block md:flex-row">
        <div className="box-border caret-transparent min-h-[50px] min-w-[auto] pb-5 md:min-h-[60px] md:min-w-0 md:pb-[30px]">
          <h2 className="text-neutral-700 text-2xl font-bold box-border caret-transparent leading-[normal] text-left">
            Events
          </h2>
        </div>
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
          <div className="items-center box-border caret-transparent gap-x-6 grid flex-col flex-wrap grid-cols-[repeat(auto-fit,minmax(268px,1fr))] justify-center gap-y-6 mt-1 md:[align-items:normal] md:flex-row md:grid-cols-[repeat(2,minmax(268px,1fr))] md:mt-0">
            <div className="bg-white shadow-[rgba(0,0,0,0.1)_0px_0px_4px_0px] box-border caret-transparent h-full w-full rounded-md">
              <div className="box-border caret-transparent flex flex-col h-full bg-[position:0px_0px] pb-[15px]">
                <div className="box-border caret-transparent flex flex-col">
                  <div className="box-border caret-transparent gap-x-2 flex flex-col gap-y-2 pt-4 px-4">
                    <div className="items-center box-border caret-transparent gap-x-2 flex flex-wrap gap-y-2">
                      <div className="text-neutral-700 text-xl font-semibold box-border caret-transparent basis-[0%] grow leading-7 capitalize font-source_serif_pro">
                        Prayer Service
                      </div>
                    </div>
                    <div className="box-border caret-transparent gap-x-2 flex flex-wrap gap-y-2">
                      <div className="text-neutral-700 text-sm box-border caret-transparent basis-[0%] grow leading-5 font-lato">
                        {" "}
                        Saturday, December 6, 2025{" "}
                        <div className="box-border caret-transparent">
                          3:00PM
                        </div>
                      </div>
                    </div>
                    <div className="box-border caret-transparent gap-x-2 flex flex-wrap gap-y-2">
                      <div className="text-neutral-700 text-sm box-border caret-transparent basis-[0%] grow leading-5 font-lato">
                        <div className="box-border caret-transparent">
                          {" "}
                          McInnis &amp; Holloway Funeral Homes{" "}
                        </div>
                        <div className="box-border caret-transparent">
                          <div className="box-border caret-transparent">
                            {" "}
                            5008 Elbow Dr SW{" "}
                          </div>
                          <div className="box-border caret-transparent">
                            {" "}
                            Calgary, AB T2S 2L5{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box-border caret-transparent gap-x-2 flex flex-wrap gap-y-2">
                      <div className="text-neutral-700 text-[15px] box-border caret-transparent basis-[0%] grow leading-[normal] w-full">
                        {" "}
                        A Celebration of Patricia’s Life will be held at a later
                        date in Calgary, AB, when family and friends from out of
                        town are able to travel safely.{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

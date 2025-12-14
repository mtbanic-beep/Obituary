export const FamilyLogin = () => {
  return (
    <div className="bg-zinc-100 box-border caret-transparent text-center px-[45px] py-[30px] font-lato md:py-12">
      <div className="box-border caret-transparent max-w-[1370px] w-full mx-auto px-[15px]">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent min-h-[50px] pb-5 md:min-h-[60px] md:pb-[30px]">
            <h2 className="text-neutral-700 text-2xl font-bold box-border caret-transparent leading-[normal] font-source_sans_pro">
              Family Log In
            </h2>
          </div>
          <p className="text-neutral-700 text-[15px] box-border caret-transparent leading-[22.05px] mb-5 pb-[15px] font-source_sans_pro">
            Authorized family members can securely access Patricia&#39;s
            memorial website settings.
          </p>
          <button className="text-white bg-orange-300 caret-transparent leading-[normal] min-w-[136px] overflow-hidden px-[25px] py-[13px] rounded-[50px] font-source_sans_pro hover:bg-stone-500">
            {" "}
            Log In{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

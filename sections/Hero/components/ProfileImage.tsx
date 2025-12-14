export const ProfileImage = () => {
  return (
    <div className="relative w-[252px] h-[330px] bg-[#d6d6d6] border-[11px] border-solid border-l-[#e6e6e6] border-r-[#e6e6e6] border-t-[#cccccc] border-b-white shadow-[rgba(0,0,0,0.7)_-6px_9px_15px_2px] rounded-sm p-[11.25px] after:absolute after:inset-[-2.8125px] after:border-[#3d3d3d] after:border-[2.8125px] after:border-solid after:rounded-sm after:shadow-[rgba(0,0,0,0.25)_0px_2px_5px_0px_inset] lg:border-0 lg:bg-transparent lg:shadow-none lg:p-0 lg:w-[280px] lg:h-[366px] lg:after:hidden">
      <img
        src="https://i.imgur.com/wckETQi.png"
        alt="Rhonda Mary Olson"
        className="w-full h-full object-cover object-[60%_20%] border-2 border-solid border-l-[#d6d6d6] border-r-[#d6d6d6] border-t-[#cccccc] border-b-[#fef5e7] lg:border-[3px] lg:border-white lg:rounded-lg lg:shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
      />
    </div>
  );
};

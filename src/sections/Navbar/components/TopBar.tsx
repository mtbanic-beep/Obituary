export const TopBar = () => {
  return (
    <div className="bg-[#b9be94] border-b border-white py-2.5 lg:py-4">
      <div className="max-w-[1650px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm lg:text-[16px] font-lato">
          <a
            href="https://forms.mhfh.com/Forms/Online-Appointments/1704/index.html#form-start"
            className="text-white hover:underline font-normal transition-colors"
          >
            Book Appointment
          </a>
          <div className="text-white font-normal">
            <span className="font-bold">Phone or Text: </span>
            <a href="tel:+14032438200" className="hover:underline transition-colors">
              (403) 243-8200
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

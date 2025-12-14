import { BookAppointment } from "@/components/BookAppointment";
import { PhoneInfo } from "@/components/PhoneInfo";

export const ContactInfo = () => {
  return (
    <section className="bg-[#b9be94] border-b border-white py-3 md:py-4 lg:py-6">
      <div className="max-w-[1400px] mx-auto px-2 md:px-4 lg:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-1 md:gap-2 lg:gap-3 text-xs sm:text-sm md:text-base">
          <BookAppointment />
          <PhoneInfo />
        </div>
      </div>
    </section>
  );
};

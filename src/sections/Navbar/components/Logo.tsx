import logo from "@/assets/logo.webp";

export const Logo = () => {
  return (
    <a href="https://www.mhfh.com/" className="block flex-shrink-0">
      <img
        src={logo}
        alt="McInnis & Holloway Funeral Homes"
        className="h-[80px] lg:h-[110px] xl:h-[135px] object-contain"
      />
    </a>
  );
};

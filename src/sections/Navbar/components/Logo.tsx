export const Logo = () => {
  const goHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
    window.location.assign("https://www.mhfh.com/");
  };

  return (
    <a
      href="https://www.mhfh.com/"
      onClick={goHome}
      onMouseDown={(e) => e.stopPropagation()}
      className="block flex-shrink-0 cursor-pointer relative z-[9999] pointer-events-auto"
      aria-label="Go to McInnis & Holloway Funeral Homes home page"
    >
      <img
        src="https://c.animaapp.com/mj3qzcubLRevs0/assets/d490bcf7-231c-4a5e-85fc-22dd769b40da_thumbnail.webp"
        alt="McInnis & Holloway Funeral Homes"
        className="h-[80px] lg:h-[110px] xl:h-[135px] object-contain pointer-events-auto"
      />
    </a>
  );
};

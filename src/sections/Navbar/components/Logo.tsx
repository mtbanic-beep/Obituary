export const Logo = () => {
  return (
    <a
      href="https://www.mhfh.com/"
      aria-label="Go to McInnis & Holloway Funeral Homes home page"
      className="
        fixed top-4 left-4 z-[2147483647]
        w-14 h-14
        flex items-center justify-center
        rounded-full
        bg-white/90 backdrop-blur
        shadow-lg ring-1 ring-black/10
        hover:scale-105 active:scale-100
        transition
        cursor-pointer
        pointer-events-auto
      "
    >
      <img
        src="https://c.animaapp.com/mj3qzcubLRevs0/assets/d490bcf7-231c-4a5e-85fc-22dd769b40da_thumbnail.webp"
        alt="McInnis & Holloway Funeral Homes"
        className="w-8 h-8 object-contain"
      />
    </a>
  );
};

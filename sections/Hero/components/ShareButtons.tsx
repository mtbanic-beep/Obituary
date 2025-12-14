export const ShareButtons = () => {
  return (
    <div className="flex flex-col items-center pb-[46px]">
      <p className="text-white text-[15px] font-semibold mb-4 leading-[15px] font-source_sans_pro">Share Obituary:</p>
      <div className="flex gap-3.5">
        <button 
          onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
          className="w-[50px] h-[50px] rounded-full overflow-hidden border border-transparent hover:scale-110 transition-transform"
        >
          <img src="https://c.animaapp.com/mj3qzcubLRevsO/assets/fb-icon.png" alt="Facebook" className="w-full h-full object-cover" />
        </button>
        <button 
          onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=Rhonda Mary Olson Obituary`, '_blank')}
          className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center border border-transparent hover:scale-110 transition-transform p-2"
        >
          <svg viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="currentColor"/>
          </svg>
        </button>
        <button 
          onClick={() => window.location.href = `mailto:?subject=Rhonda Mary Olson Obituary&body=${encodeURIComponent(window.location.href)}`}
          className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center border border-transparent hover:scale-110 transition-transform"
        >
          <svg className="w-6 h-6 text-[#6b6b6b]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </button>
        <button 
          onClick={() => alert('Notification feature would be implemented with backend integration')}
          className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center border border-transparent hover:scale-110 transition-transform"
        >
          <svg className="w-6 h-6 text-[#6b6b6b]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/>
          </svg>
        </button>
        <button 
          onClick={() => window.print()}
          className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center border border-transparent hover:scale-110 transition-transform"
        >
          <svg className="w-6 h-6 text-[#6b6b6b]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

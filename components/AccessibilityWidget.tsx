import { useState } from 'react';

export const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({
    contrast: 0,
    highlightLinks: false,
    biggerText: 0,
    textSpacing: 0,
    pauseAnimations: false,
    hideImages: false,
    dyslexiaFont: 0,
    cursor: 0,
    tooltips: false,
    lineHeight: 0,
    textAlign: 0,
    saturation: 0,
  });

  const toggleSetting = (key: keyof typeof settings, maxValue?: number) => {
    setSettings(prev => {
      if (typeof prev[key] === 'boolean') {
        return { ...prev, [key]: !prev[key] };
      }
      const currentValue = prev[key] as number;
      const max = maxValue || 3;
      return { ...prev, [key]: (currentValue + 1) % (max + 1) };
    });
  };

  const resetAll = () => {
    setSettings({
      contrast: 0,
      highlightLinks: false,
      biggerText: 0,
      textSpacing: 0,
      pauseAnimations: false,
      hideImages: false,
      dyslexiaFont: 0,
      cursor: 0,
      tooltips: false,
      lineHeight: 0,
      textAlign: 0,
      saturation: 0,
    });
  };

  const renderDots = (count: number, active: number) => {
    return (
      <div className="flex gap-1">
        {Array.from({ length: count }).map((_, i) => (
          <span
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              i < active ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    );
  };

  // Apply settings to document
  useState(() => {
    const root = document.documentElement;
    
    // Contrast
    if (settings.contrast > 0) {
      root.style.filter = `contrast(${1 + settings.contrast * 0.2})`;
    } else {
      root.style.filter = '';
    }

    // Bigger Text
    if (settings.biggerText > 0) {
      root.style.fontSize = `${100 + settings.biggerText * 10}%`;
    } else {
      root.style.fontSize = '';
    }

    // Text Spacing
    if (settings.textSpacing > 0) {
      root.style.letterSpacing = `${settings.textSpacing * 0.05}em`;
    } else {
      root.style.letterSpacing = '';
    }

    // Highlight Links
    if (settings.highlightLinks) {
      const style = document.getElementById('highlight-links-style') || document.createElement('style');
      style.id = 'highlight-links-style';
      style.textContent = 'a { background-color: yellow !important; color: black !important; }';
      document.head.appendChild(style);
    } else {
      const style = document.getElementById('highlight-links-style');
      if (style) style.remove();
    }

    // Pause Animations
    if (settings.pauseAnimations) {
      const style = document.getElementById('pause-animations-style') || document.createElement('style');
      style.id = 'pause-animations-style';
      style.textContent = '* { animation-play-state: paused !important; transition: none !important; }';
      document.head.appendChild(style);
    } else {
      const style = document.getElementById('pause-animations-style');
      if (style) style.remove();
    }

    // Hide Images
    if (settings.hideImages) {
      const style = document.getElementById('hide-images-style') || document.createElement('style');
      style.id = 'hide-images-style';
      style.textContent = 'img { opacity: 0 !important; }';
      document.head.appendChild(style);
    } else {
      const style = document.getElementById('hide-images-style');
      if (style) style.remove();
    }

    // Line Height
    if (settings.lineHeight > 0) {
      root.style.lineHeight = `${1.5 + settings.lineHeight * 0.3}`;
    } else {
      root.style.lineHeight = '';
    }

    // Saturation
    if (settings.saturation > 0) {
      const currentFilter = root.style.filter || '';
      root.style.filter = `${currentFilter} saturate(${1 + settings.saturation * 0.3})`;
    }
  });

  return (
    <>
      {/* Widget Button */}
      <div className="fixed bottom-[13px] right-[13px] z-[2147483647]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Accessibility Menu"
          title="Accessibility Menu"
          className="w-[50px] h-[50px] bg-[#146ef5] hover:bg-[#0d5dd4] rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.25)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.35)] transition-all relative"
        >
          <img 
            src="https://cdn.userway.org/widgetapp/images/body_wh.svg" 
            alt="" 
            className="w-7 h-7"
            role="presentation"
          />
          <img 
            src="https://cdn.userway.org/widgetapp/images/check_on.svg"
            alt="Accessibility menu is on"
            className="absolute -top-1 -right-1 w-5 h-5"
          />
        </button>
      </div>

      {/* Widget Panel */}
      {isOpen && (
        <div 
          className="fixed right-0 top-[100px] w-[400px] bg-[#0048ff] text-white rounded-l-lg shadow-[0_6px_12px_rgba(107,82,82,0.3)] z-[9999] max-h-[calc(100vh-120px)] overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Accessibility Menu opened"
        >
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-xl font-bold">
                  Accessibility Menu <span className="text-sm font-normal opacity-80">(CTRL+U)</span>
                </h1>
              </div>
              <button 
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded transition-colors"
                aria-label="Close the accessibility menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="16" height="16">
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m2.30436241 2.30436238 9.39127515 9.39127515m-9.39127518 6e-8 9.39127515-9.39127515"></path>
                </svg>
              </button>
            </div>

            {/* How it works link */}
            <div className="mb-6">
              <a 
                href="https://userway.org/how-it-works" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white bg-[#0039cc] hover:bg-[#002d99] px-4 py-2 rounded transition-colors text-sm font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 8" width="16" height="16">
                  <path fill="currentColor" fillRule="evenodd" d="M.5 1.124643v5.750714c0 .414214.33579.75.75.75.13593 0 .26931-.036943.38587-.10688L6.42813 4.64312c.35519-.213111.47036-.673807.25725-1.028992-.06334-.105562-.15168-.19391-.25725-.257248L1.63587.481523C1.28069.268412.81999.383586.60688.738771.53694.855333.5.98871.5 1.124643Z"></path>
                </svg>
                How UserWay Works
              </a>
            </div>

            {/* Oversized Widget Toggle */}
            <div className="mb-6 pb-6 border-b border-white/20">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm font-medium">Oversized Widget</span>
                <div className="relative w-12 h-6 bg-white/20 rounded-full transition-colors">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
                </div>
              </label>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {/* Contrast + */}
              <button 
                onClick={() => toggleSetting('contrast', 3)}
                className="flex flex-col items-center gap-2 p-3 bg-white/10 hover:bg-white/20 rounded transition-colors"
              >
                <span className="text-2xl">◐</span>
                <span className="text-xs font-medium">Contrast +</span>
                {renderDots(3, settings.contrast)}
              </button>

              {/* Highlight Links */}
              <button 
                onClick={() => toggleSetting('highlightLinks')}
                className="flex flex-col items-center gap-2 p-3 bg-white/10 hover:bg-white/20 rounded transition-colors"
              >
                <span className="text-2xl">🔗</span>
                <span className="text-xs font-medium">Highlight Links</span>
                {renderDots(1, settings.highlightLinks ? 1 : 0)}
              </button>

              {/* Bigger Text */}
              <button 
                onClick={() => toggleSetting('biggerText', 4)}
                className="flex flex-col items-center gap-2 p-3 bg-white/10 hover:bg-white/20 rounded transition-colors"
              >
                <span className="text-2xl">A+</span>
                <span className="text-xs font-medium">Bigger Text</span>
                {renderDots(4, settings.biggerText)}
              </button>

              {/* Text Spacing */}
              <button 
                onClick={() => toggleSetting('textSpacing', 3)}
                className="flex flex-col items-center gap-2 p-3 bg-white/10 hover:bg-white/20 rounded transition-colors"
              >
                <span className="text-2xl">↔</span>
                <span className="text-xs font-medium">Text Spacing</span>
                {renderDots(3, settings.textSpacing)}
              </button>

              {/* Pause Animations */}
              <button 
                onClick={() => toggleSetting('pauseAnimations')}
                className="flex flex-col items-center gap-2 p-3 bg-white/10 hover:bg-white/20 rounded transition-colors"
              >
                <span className="text-2xl">⏸</span>
                <span className="text-xs font-medium">Pause Animations</span>
                {renderDots(1, settings.pauseAnimations ? 1 : 0)}
              </button>

              {/* Hide Images */}
              <button 
                onClick={() => toggleSetting('hideImages')}
                className="flex flex-col items-center gap-2 p-3 bg-white/10 hover:bg-white/20 rounded transition-colors"
              >
                <span className="text-2xl">🖼</span>
                <span className="text-xs font-medium">Hide Images</span>
                {renderDots(1, settings.hideImages ? 1 : 0)}
              </button>

              {/* Dyslexia Friendly */}
              <button 
                onClick={() => toggleSetting('dyslexiaFont', 2)}
                className="flex flex-col items-center gap-2 p-3 bg-white/10 hover:bg-white/20 rounded transition-colors relative"
              >
                <span className="text-2xl">Aa</span>
                <span className="text-xs font-medium">Dyslexia Friendly</span>
                {renderDots(2, settings.dyslexiaFont)}
                <a 
                  href="https://userway.org/udf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute top-2 right-2 w-4 h-4 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30"
                  aria-label="Learn more about UserWay's Dyslexia Friendly Font"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 9" width="8" height="12">
                    <g fill="none" fillRule="evenodd" transform="translate(.13 .63)">
                      <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.75" d="M.87 3.37v4"></path>
                      <circle cx="0.875" cy="0.875" r="1" fill="currentColor"></circle>
                    </g>
                  </svg>
                </a>
              </button>

              {/* Cursor */}
              <button 
                onClick={() => toggleSetting('cursor', 3)}
                className="flex flex-col items-center gap-2 p-3 bg-white/10 hover:bg-white/20 rounded transition-colors"
              >
                <span className="text-2xl">➤</span>
                <span className="text-xs font-medium">Cursor</span>
                {renderDots(3, settings.cursor)}
              </button>

              {/* Tooltips */}
              <button 
                onClick={() => toggleSetting('tooltips')}
                className="flex flex-col items-center gap-2 p-3 bg-white/10 hover:bg-white/20 rounded transition-colors"
              >
                <span className="text-2xl">💬</span>
                <span className="text-xs font-medium">Tooltips</span>
                {renderDots(1, settings.tooltips ? 1 : 0)}
              </button>

              {/* Line Height */}
              <button 
                onClick={() => toggleSetting('lineHeight', 3)}
                className="flex flex-col items-center gap-2 p-3 bg-white/10 hover:bg-white/20 rounded transition-colors"
              >
                <span className="text-2xl">≡</span>
                <span className="text-xs font-medium">Line Height</span>
                {renderDots(3, settings.lineHeight)}
              </button>

              {/* Text Align */}
              <button 
                onClick={() => toggleSetting('textAlign', 4)}
                className="flex flex-col items-center gap-2 p-3 bg-white/10 hover:bg-white/20 rounded transition-colors"
              >
                <span className="text-2xl">⊞</span>
                <span className="text-xs font-medium">Text Align</span>
                {renderDots(4, settings.textAlign)}
              </button>

              {/* Saturation */}
              <button 
                onClick={() => toggleSetting('saturation', 3)}
                className="flex flex-col items-center gap-2 p-3 bg-white/10 hover:bg-white/20 rounded transition-colors"
              >
                <span className="text-2xl">🎨</span>
                <span className="text-xs font-medium">Saturation</span>
                {renderDots(3, settings.saturation)}
              </button>
            </div>

            {/* Reset Button */}
            <button 
              onClick={resetAll}
              className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded transition-colors text-sm font-medium mb-6"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 16" width="20" height="20">
                <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeWidth="1.84">
                  <path d="M16.20106 8c0 .9667-.189683 1.8872-.5324673 2.7251-.3427843.8372-.8386698 1.5911-1.4517524 2.2246-.6130825.6335-1.3426846 1.1459-2.152902 1.5001-.8108948.3542-1.70172746.5502-2.6372711.5502-.93554365 0-1.8263763-.196-2.63727112-.5502-.81021738-.3542-1.53981948-.8666-2.15290203-1.5001M2.6522744 8c0-.9667.189683-1.8872.53246728-2.7251.34278427-.8372.83866982-1.5911 1.45175237-2.2246.61308255-.6335 1.34268465-1.1459 2.15290203-1.5001C7.6002909 1.196 8.49112355 1 9.4266672 1c.93554364 0 1.8263763.196 2.6372711.5502.8102174.3542 1.5398195.8666 2.152902 1.5001"></path>
                  <path strokeLinejoin="round" d="m4.92576062 6.96092-2.48958935 1.484L1 5.87242m13.0125924 2.93832 2.3886509-1.652L18 9.62694"></path>
                </g>
              </svg>
              Reset All Accessibility Settings
            </button>

            {/* Move/Hide Widget */}
            <button className="w-full flex items-center justify-between bg-white/10 hover:bg-white/20 px-4 py-3 rounded transition-colors text-sm">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="16" height="16">
                  <path fill="currentColor" fillRule="evenodd" d="M3.81818182 6c0-1.2049091.97690908-2.18181818 2.18181818-2.18181818S8.1818182 4.7950909 8.1818182 6 7.2049091 8.1818182 6 8.1818182 3.81818182 7.2049091 3.81818182 6ZM12 7.0909091V4.9090909l-1.5763636-.2956364c-.0823637-.264-.1903637-.5170909-.3169091-.75872723l.9070909-1.326L9.4712727.98618182l-1.326.90709091c-.2416363-.12654546-.4947272-.23454546-.7587272-.31690909L7.0909091 0H4.9090909l-.2956364 1.57636364c-.264.08236363-.5170909.19036363-.75872723.31690909l-1.326-.90709091L.98618182 2.52872727l.90709091 1.326c-.12654546.24163633-.23454546.49472723-.31690909.75872723L0 4.9090909v2.1818182l1.57636364.2956364c.08236363.264.19036363.5170909.31690909.7587272l-.90709091 1.326 1.54254545 1.5425455 1.326-.9070909c.24163633.1265454.49472723.2345454.75872723.3169091L4.9090909 12h2.1818182l.2956364-1.5763636c.264-.0823637.5170909-.1903637.7587272-.3169091l1.326.9070909 1.5425455-1.5425455-.9070909-1.326c.1265454-.2416363.2345454-.4947272.3169091-.7587272L12 7.0909091Z"></path>
                </svg>
                <span>Move/Hide Widget</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 11" width="12" height="12">
                <path fill="currentColor" fillRule="evenodd" d="m.5 10.5 5-5-5-5"></path>
              </svg>
            </button>
          </div>

          {/* Footer */}
          <div className="border-t border-white/20 px-6 py-4 flex items-center justify-between">
            <button className="text-sm font-medium hover:underline">
              Manage
            </button>
            <a 
              href="https://userway.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <span className="text-xs">Powered by</span>
              <img 
                src="https://cdn.userway.org/widgetapp/images/logo.svg" 
                alt="UserWay" 
                className="h-5"
              />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

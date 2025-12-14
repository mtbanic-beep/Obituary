import { useState } from 'react';

export const CookiePreferences = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [preferences, setPreferences] = useState({
    ESSENTIAL: true,
    MARKETING: true,
    PERSONALIZATION: true,
    ANALYTICS: true,
    OPT_OUT: false,
  });

  const categories = [
    {
      id: 'ESSENTIAL',
      label: 'Essential',
      description: 'Required to enable basic website functionality. You may not disable essential cookies.',
      disabled: true,
    },
    {
      id: 'MARKETING',
      label: 'Targeted Advertising',
      description: 'Used to deliver advertising that is more relevant to you and your interests. May also be used to limit the number of times you see an advertisement and measure the effectiveness of advertising campaigns. Advertising networks usually place them with the website operator\'s permission.',
      disabled: false,
    },
    {
      id: 'PERSONALIZATION',
      label: 'Personalization',
      description: 'Allow the website to remember choices you make (such as your username, language, or the region you are in) and provide enhanced, more personal features. For example, a website may provide you with local weather reports or traffic news by storing data about your general location.',
      disabled: false,
    },
    {
      id: 'ANALYTICS',
      label: 'Analytics',
      description: 'Help the website operator understand how its website performs, how visitors interact with the site, and whether there may be technical issues.',
      disabled: false,
    },
    {
      id: 'OPT_OUT',
      label: 'Do Not Sell or Share My Personal Information',
      description: 'By switching the toggle to the right and clicking save, you are indicating that you do not want us to sell your personal information or share your personal information for online targeted advertising activities. Please note if you use different computers or browsers, you must indicate your choices again on each computer or browser used to access our services.',
      disabled: false,
    },
  ];

  const togglePreference = (id: string) => {
    if (id === 'ESSENTIAL') return;
    setPreferences(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleExpanded = (id: string) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  const handleSave = () => {
    console.log('Saving preferences:', preferences);
    setIsOpen(false);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-[13px] left-[13px] w-[44px] h-[44px] bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:bg-[#f3f4f6] transition-all z-[9998] flex items-center justify-center group hover:scale-105"
        title="Cookie Preferences"
        aria-label="Cookie Preferences"
      >
        <svg role="img" width="24" height="24" viewBox="0 0 71.85 72.23" xmlns="http://www.w3.org/2000/svg" className="text-[#1e3a8a]">
          <path 
            d="m67.6 36.73a6.26 6.26 0 0 1 -3.2-2.8 5.86 5.86 0 0 0 -5.2-3.1h-.3a11 11 0 0 1 -11.4-9.5 6 6 0 0 1 -.1-1.4 9.2 9.2 0 0 1 .4-2.9 8.65 8.65 0 0 0 .2-1.6 5.38 5.38 0 0 0 -1.9-4.3 7.3 7.3 0 0 1 -2.5-5.5 3.91 3.91 0 0 0 -3.5-3.9 36.46 36.46 0 0 0 -15 1.5 33.14 33.14 0 0 0 -22.1 22.7 35.62 35.62 0 0 0 -1.5 10.2 34.07 34.07 0 0 0 4.8 17.6.75.75 0 0 0 .07.12c.11.17 1.22 1.39 2.68 3-.36.47 5.18 6.16 5.65 6.52a34.62 34.62 0 0 0 55.6-21.9 4.38 4.38 0 0 0 -2.7-4.74z" 
            strokeWidth="2" 
            stroke="currentColor" 
            fill="none"
          />
          <path 
            d="m68 41.13a32.37 32.37 0 0 1 -52 20.5l-2-1.56c-2.5-3.28-5.62-7.15-5.81-7.44a32 32 0 0 1 -4.5-16.5 34.3 34.3 0 0 1 1.4-9.6 30.56 30.56 0 0 1 20.61-21.13 33.51 33.51 0 0 1 14.1-1.4 1.83 1.83 0 0 1 1.6 1.8 9.38 9.38 0 0 0 3.3 7.1 3.36 3.36 0 0 1 1.2 2.6 3.37 3.37 0 0 1 -.1 1 12.66 12.66 0 0 0 -.5 3.4 9.65 9.65 0 0 0 .1 1.7 13 13 0 0 0 10.5 11.2 16.05 16.05 0 0 0 3.1.2 3.84 3.84 0 0 1 3.5 2 10 10 0 0 0 4.1 3.83 2 2 0 0 1 1.4 2z" 
            strokeWidth="2" 
            stroke="currentColor" 
            fill="none"
          />
          <g fill="currentColor">
            <circle cx="26.6" cy="26" r="3.5"/>
            <circle cx="25.2" cy="47.73" r="3.5"/>
            <circle cx="47.9" cy="46.93" r="3.5"/>
          </g>
        </svg>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-end p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />

          {/* Panel */}
          <div className="relative bg-white w-full max-w-[500px] max-h-[90vh] overflow-hidden rounded-lg shadow-2xl flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h1 className="text-xl font-bold text-[#3d3d3d]">
                Storage Preferences
              </h1>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
                aria-label="Close Cookie Preferences"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" className="text-[#6b6b6b]">
                  <line x1="2" y1="2" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="2" y1="18" x2="18" y2="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <p className="text-[#3d3d3d] text-sm leading-relaxed mb-6">
                When you visit websites, they may store or retrieve data about you using cookies and similar technologies ("cookies"). Cookies may be necessary for the basic functionality of the website as well as other purposes. You have the option of disabling certain types of cookies, though doing so may impact your experience on the website.
              </p>

              {/* Categories List */}
              <ul className="space-y-4">
                {categories.map((category) => (
                  <li key={category.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    {/* Toggle Header */}
                    <div className="p-4 bg-gray-50">
                      <label className="flex items-center justify-between cursor-pointer">
                        <span className="text-[#3d3d3d] font-semibold text-base">
                          {category.label}
                        </span>
                        <div className="relative">
                          <input
                            type="checkbox"
                            checked={preferences[category.id as keyof typeof preferences]}
                            onChange={() => togglePreference(category.id)}
                            disabled={category.disabled}
                            className="sr-only peer"
                          />
                          <div className={`w-12 h-6 rounded-full transition-colors ${
                            preferences[category.id as keyof typeof preferences]
                              ? 'bg-[#0048ff]'
                              : 'bg-gray-300'
                          } ${category.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>
                            <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                              preferences[category.id as keyof typeof preferences]
                                ? 'translate-x-6'
                                : 'translate-x-0'
                            }`}></div>
                          </div>
                        </div>
                      </label>

                      {/* Description */}
                      <p className="text-[#6b6b6b] text-sm mt-3 leading-relaxed">
                        {category.description}
                      </p>

                      {/* View Cookies Toggle */}
                      <button
                        onClick={() => toggleExpanded(category.id)}
                        className="flex items-center gap-2 text-[#0048ff] text-sm font-medium mt-3 hover:underline"
                        aria-expanded={expandedCategory === category.id}
                      >
                        <span>View Cookies</span>
                        <svg 
                          width="12" 
                          height="12" 
                          viewBox="0 0 12 12" 
                          className={`transition-transform ${expandedCategory === category.id ? 'rotate-90' : ''}`}
                        >
                          <path 
                            fill="currentColor" 
                            d="M4 2l4 4-4 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Expanded Cookie List */}
                    {expandedCategory === category.id && (
                      <div className="px-4 py-3 bg-white border-t border-gray-200">
                        <p className="text-[#6b6b6b] text-sm italic">
                          No Storage Items
                        </p>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 px-6 py-4">
              <button
                onClick={handleSave}
                className="w-full bg-[#0048ff] text-white font-semibold py-3 rounded hover:bg-[#0039cc] transition-colors mb-3"
              >
                Save
              </button>
              <div className="text-center">
                <a
                  href="https://www.osano.com/?utm_campaign=cmp&utm_source=cmp-dialog&utm_medium=drawer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0048ff] text-sm hover:underline"
                >
                  Powered by Osano
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

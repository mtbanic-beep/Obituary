import { useState } from 'react';

export const FloatingButtons = () => {
  const [showLocationSelector, setShowLocationSelector] = useState(false);

  return (
    <>

      {/* Text Us Chat Button */}
      <div className="fixed bottom-0 right-0 z-[2147482997]">
        <button
          id="podium-website-widget-button"
          aria-label="Select to open the chat widget"
          onClick={() => setShowLocationSelector(true)}
          className="relative bg-[#146ef5] hover:bg-[#0d5dd4] transition-all duration-300 rounded-tl-[28px] rounded-tr-[28px] shadow-[0_-2px_8px_rgba(0,0,0,0.2)] hover:shadow-[0_-4px_12px_rgba(0,0,0,0.3)] flex items-center justify-center gap-3 px-6 py-3.5 min-w-[160px]"
        >
          {/* Chat Icon */}
          <div className="flex-shrink-0">
            <svg width="22.9px" height="18.5px" viewBox="0 0 26 21" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{margin: '0px 1px 3px 0px'}}>
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(-208.000000, -370.000000)" fill="#ffffff">
                  <path d="M218,370 L223.65,370 C229.172847,370 233.65,374.477153 233.65,380 L233.65,390.9 L218,390.9 C212.477153,390.9 208,386.422847 208,380.9 L208,380 C208,374.477153 212.477153,370 218,370 Z M214.65,375.7 L214.65,377.41 L226.321429,377.41 L226.321429,375.7 L214.65,375.7 Z M214.65,383.3 L214.65,385.01 L226.321429,385.01 L226.321429,383.3 L214.65,383.3 Z M214.65,379.5 L214.65,381.21 L227.95,381.21 L227.95,379.5 L214.65,379.5 Z"></path>
                </g>
              </g>
            </svg>
          </div>

          {/* Text */}
          <div>
            <span className="text-white text-[16px] leading-[24px] font-bold tracking-[0.5px] font-lato">
              Text us
            </span>
          </div>
        </button>
      </div>

      {/* Location Selector Modal */}
      {showLocationSelector && (
        <div className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-[rgba(107,82,82,0.3)_0px_6px_12px_0px] w-full max-w-[570px] max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="bg-[#3074DC] text-white p-6">
              <button
                onClick={() => setShowLocationSelector(false)}
                className="absolute top-5 right-5 w-6 h-6 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-100 transition-colors"
              >
                ×
              </button>
              <h1 className="text-2xl font-bold mb-2 font-lato">Select Location</h1>
              <p className="text-sm mb-4 opacity-90 font-lato font-normal">
                Search for the location you want to contact by entering a postal code or address.
              </p>
              <div className="relative">
                <input
                  type="text"
                  placeholder="ZIP Code or address"
                  className="w-full px-4 py-3 pr-10 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <svg width="16px" height="16px" viewBox="0 0 16 16" fill="#333333">
                    <path d="M12.6004036,11.2001452 C12.6375836,11.2281271 12.6732567,11.2590431 12.7071068,11.2928932 L15.7071068,14.2928932 C16.0976311,14.6834175 16.0976311,15.3165825 15.7071068,15.7071068 C15.3165825,16.0976311 14.6834175,16.0976311 14.2928932,15.7071068 L11.2928932,12.7071068 C11.2590431,12.6732567 11.2281271,12.6375836 11.2001452,12.6004036 C10.0301956,13.4792342 8.57591349,14 7,14 C3.13400675,14 0,10.8659932 0,7 C0,3.13400675 3.13400675,0 7,0 C10.8659932,0 14,3.13400675 14,7 C14,8.57591349 13.4792342,10.0301956 12.6004036,11.2001452 Z M7,12 C9.76142375,12 12,9.76142375 12,7 C12,4.23857625 9.76142375,2 7,2 C4.23857625,2 2,4.23857625 2,7 C2,9.76142375 4.23857625,12 7,12 Z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Locations List */}
            <div className="overflow-y-auto max-h-[calc(90vh-280px)] p-4">
              {[
                { name: 'McInnis & Holloway - Deerfoot South', address: '12281 40 St Se, Calgary, AB T2Z 4E6, Canada' },
                { name: 'McInnis & Holloway - Eastside Memorial', address: '5388 Memorial Dr E, Calgary, AB T2A 3V9, Canada' },
                { name: 'McInnis & Holloway - Park Memorial', address: '5008 Elbow Drive Southwest, Calgary, AB T2S 2L5, Canada' },
                { name: 'Calgary Crematorium', address: '3219 4 St Nw, Calgary, AB T2M 3A6, Canada' },
                { name: 'Airdrie Funeral Home', address: '300 Towerlane Dr Sw, Airdrie, AB T4B 3L8, Canada' },
                { name: 'McInnis & Holloway - Crowfoot', address: '82 Crowfoot Cir Nw, Calgary, AB T3G 2T3, Canada' },
                { name: 'McInnis & Holloway Funeral Home Heritage', address: '1708 16 Ave Nw, Calgary, AB T2M 0L7, Canada' },
                { name: 'McInnis & Holloway - Cochrane Funeral', address: '369 Railway St W, Cochrane, AB T4C 2E2, Canada' },
              ].map((location, index) => (
                <button
                  key={index}
                  className="w-full flex items-start gap-4 p-4 mb-2 hover:bg-gray-50 rounded-lg transition-colors text-left group"
                >
                  <div className="flex-shrink-0 w-10 h-10">
                    <svg width="40px" height="40px" viewBox="0 0 691 704" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={`gradient-${index}`}>
                          <stop stopColor="#5DF877" offset="0%"></stop>
                          <stop stopColor="#0ABB28" offset="100%"></stop>
                        </linearGradient>
                      </defs>
                      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <path d="M677.337283,93.8181954 C670.620582,76.4343421 655.120503,51.9607455 633.142684,34.718358 C620.451995,24.7631082 605.303897,15.2454156 584.491813,8.96169879 C562.307325,2.26345403 534.985208,0 500.978682,0 L190.027733,0 C156.021206,0 128.699089,2.26345403 106.514602,8.96169879 C85.7057463,15.2454156 70.5544196,24.7631082 57.8637304,34.718358 C35.8826816,51.9607455 20.3826032,76.4343421 13.6659025,93.8181954 C0.135625686,128.839225 0,168.577976 0,193.600987 L0,510.399013 C0,535.425314 0.135625686,575.160775 13.6659025,610.185094 C20.3826032,627.568948 35.8826816,652.042544 57.8605012,669.281642 C70.5511904,679.236892 85.6992879,688.754584 106.511372,695.038301 C128.69586,701.736546 156.017977,704 190.024503,704 L500.975452,704 C534.981979,704 562.304096,701.736546 584.488583,695.038301 C605.297439,688.754584 620.448765,679.236892 633.139455,669.281642 C655.117274,652.039255 670.617353,627.565658 677.334053,610.185094 C690.86433,575.160775 691,535.425314 691,510.399013 L691,193.600987 C691,168.577976 690.867559,128.839225 677.337283,93.8181954 Z" fill={`url(#gradient-${index})`}></path>
                        <path d="M345.480603,122.312055 C205.495519,122.312055 92.0155699,217.748883 92.0155699,335.478102 C92.0155699,410.392508 135.796833,472.676973 203.819573,512.267679 C225.313015,524.779184 205.33406,550.183823 186.582194,570.18644 C176.584644,580.852309 178.154027,584.161953 191.199926,580.83586 C256.603799,564.152756 258.470267,537.448605 287.959166,543.130269 C306.449468,546.693235 325.695399,548.644148 345.480603,548.644148 C485.465686,548.644148 598.945636,453.20732 598.945636,335.478102 C598.945636,217.748883 485.462457,122.312055 345.480603,122.312055 Z" fill="#FFFFFF"></path>
                      </g>
                    </svg>
                  </div>
                  <div className="flex-1">
                  <p className="text-[#333] font-semibold mb-1 group-hover:text-[#3074DC] transition-colors font-lato">
                    {location.name}
                  </p>
                  <p className="text-sm text-gray-600 font-lato font-normal">{location.address}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <svg width="14px" height="14px" viewBox="0 0 14 14" className="text-[#3074DC]">
                      <path d="M3.13504161,6 L13,6 C13.5522847,6 14,6.44771525 14,7 C14,7.55228475 13.5522847,8 13,8 L3.13504161,8 L6.12803688,11.5915943 C6.48160096,12.0158712 6.4242769,12.6464359 6,13 C5.5757231,13.3535641 4.9451584,13.29624 4.59159432,12.8719631 L0.23177872,7.6401844 C-0.0772595735,7.26933845 -0.0772595735,6.73066155 0.23177872,6.3598156 L4.59159432,1.12803688 C4.9451584,0.703759983 5.5757231,0.646435919 6,1 C6.4242769,1.35356408 6.48160096,1.98412878 6.12803688,2.40840568 L3.13504161,6 Z" fill="currentColor" transform="translate(7, 7) scale(-1, 1) translate(-7, -7)"/>
                    </svg>
                  </div>
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 p-4 text-center">
              <p className="text-[13px] text-black font-lato font-normal">
                <a 
                  href="https://www.podium.com/webchat-powered/?utm_medium=product&utm_source=webchat&utm_campaign=evgr-noram-podium-product-webchat_widget_b&utm_term=prospecting&SCID=7015G000000KBBIQA4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#2859d4] hover:underline font-medium"
                >
                  Try website texting
                </a>
                <span className="font-light"> powered by </span>
                <a 
                  href="https://www.podium.com/webchat-powered/?utm_medium=product&utm_source=webchat&utm_campaign=evgr-noram-podium-product-webchat_widget_b&utm_term=prospecting&SCID=7015G000000KBBIQA4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block align-middle"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513.48 120.17" fill="#000" className="h-4 inline-block">
                    <polygon points="0 0 0 64.93 30.94 110.17 66.78 110.17 48.01 64.93 90.31 64.93 90.31 0 0 0"></polygon>
                    <path d="M257,179.56H243.21v24.69H225.77V126.34H257c15.69,0,27.43,11.63,27.43,26.66S272.65,179.56,257,179.56m-.77-36.76h-13v20.41h13c6.25,0,10.75-4.5,10.75-10.21s-4.5-10.2-10.75-10.2" transform="translate(-90.31 -110.17)"></path>
                    <path d="M287.68,176.81a28.86,28.86,0,1,1,28.86,28.64,28.64,28.64,0,0,1-28.86-28.64m41,0c0-7.79-5.27-13.17-12.18-13.17s-12.18,5.38-12.18,13.17S309.63,190,316.54,190s12.18-5.38,12.18-13.17" transform="translate(-90.31 -110.17)"></path>
                    <path d="M352.32,176.81c0-15.58,11.08-28.64,25.45-28.64,7.36,0,13.35,3.73,15.55,6.7V124.35h16.57v79.9H393.32v-7.09c-2.38,4.18-8.19,8.29-15.55,8.29-14.37,0-25.45-13.06-25.45-28.64m41.69,0c0-7.9-5-13.6-12.51-13.6s-12.5,5.7-12.5,13.6,5,13.61,12.5,13.61S394,184.71,394,176.81" transform="translate(-90.31 -110.17)"></path>
                    <rect x="333.19" y="39.21" width="16.57" height="54.87"></rect>
                    <path d="M453,180.65V149.38h16.57V177.8c0,8,2.31,12.62,8.45,12.62s10.32-4.28,10.32-14.38V149.38h16.56v54.87H488.35v-7.2c-2.44,5-7.47,8.4-14.6,8.4-13.61,0-20.74-9.87-20.74-24.8" transform="translate(-90.31 -110.17)"></path>
                    <path d="M518.52,149.38h16.57v7.19a16.1,16.1,0,0,1,14-8.4c7.9,0,15.34,4,17.74,11.4a16.33,16.33,0,0,1,16-11.4c13.39,0,20.85,9.55,20.85,24.8v31.28H587.21V175.83c0-8-2.3-12.62-7.9-12.62-5.81,0-9.87,4.39-9.87,14.37v26.67H552.87V175.83c0-8-2.31-12.62-7.9-12.62-5.82,0-9.88,4.39-9.88,14.37v26.67H518.52Z" transform="translate(-90.31 -110.17)"></path>
                    <rect x="333.08" y="14.17" width="16.68" height="15.08"></rect>
                  </svg>
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

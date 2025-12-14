export const Footer = () => {
  return (
    <footer className="bg-[#b9be94] text-white">
      {/* Three Image Links Section */}
      <div className="bg-[#e8e8e8] py-6">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {/* Send Comfort Food */}
            <a 
              href="https://forms.mhfh.com/Forms/Comfort-Food-Online-Ordering/1945/index.html#form-start"
              className="relative block h-[160px] md:h-[170px] lg:h-[190px] overflow-hidden rounded-lg group border-[5px] border-white/80"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{backgroundImage: "url('https://c.animaapp.com/mj3qzcubLRevsO/assets/75d6bf7f-efd8-47be-b680-7842a63eeb65.webp')"}}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#233207] to-transparent"></div>
              <div className="absolute inset-0 flex items-end justify-center p-4 sm:p-6">
                <h3 className="text-white text-[18px] sm:text-[20px] lg:text-[24px] font-bold text-center drop-shadow-lg font-lato tracking-[1px]">
                  Send Comfort Food
                </h3>
              </div>
            </a>

            {/* Obituary Writer */}
            <a 
              href="https://www.mhfh.com/writing-assistant-tools/obituary-writing-assistant"
              className="relative block h-[160px] md:h-[170px] lg:h-[190px] overflow-hidden rounded-lg group border-[5px] border-white/80"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{backgroundImage: "url('https://c.animaapp.com/mj3qzcubLRevsO/assets/5ce6d2f9-cd63-4daf-b2cf-3ee917bd25db.webp')"}}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#233207] to-transparent"></div>
              <div className="absolute inset-0 flex items-end justify-center p-6">
                <h3 className="text-white text-[18px] sm:text-[20px] lg:text-[24px] font-bold text-center drop-shadow-lg font-lato tracking-[1px]">
                  Obituary Writer
                </h3>
              </div>
            </a>

            {/* Medallion Order */}
            <a 
              href="https://forms.mhfh.com/Forms/Medallion-Order-Form/1802/index.html#form-start"
              className="relative block h-[160px] md:h-[170px] lg:h-[190px] overflow-hidden rounded-lg group border-[5px] border-white/80 hover:opacity-90 transition-opacity"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{backgroundImage: "url('https://c.animaapp.com/mj3qzcubLRevsO/assets/14c055ec-51ca-40f5-a97d-46258691b293.webp')"}}
              ></div>
            </a>
          </div>
        </div>
      </div>

      {/* Locations Grid */}
      <div className="py-12 px-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col xl:flex-row gap-8">
            {/* Locations - Takes up most of the space */}
            <div className="flex-1">
              {/* First Row - 5 Locations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-8 text-center">
                {/* Location 1 */}
                <div>
                  <h4 className="font-semibold text-base mb-2 font-lato">
                    <a href="https://www.mhfh.com/locations/park-memorial-chapel" className="hover:text-[#c8d96f] transition-colors">
                      Park Memorial Chapel
                    </a>
                  </h4>
                  <p className="text-sm mb-1 font-lato font-normal">
                    <a href="tel:+14032438200" className="hover:text-[#c8d96f] transition-colors">
                      (403) 243-8200
                    </a>
                  </p>
                  <p className="text-sm font-lato font-normal">
                    <a 
                      href="https://www.google.com/maps/dir//McInnis+&+Holloway,+5008+Elbow+Dr+SW,+Calgary,+AB+T2S+2L5" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#c8d96f] transition-colors"
                    >
                      5008 Elbow Dr SW, Calgary
                    </a>
                  </p>
                </div>

                {/* Location 2 */}
                <div>
                  <h4 className="font-semibold text-base mb-2">
                    <a href="https://www.mhfh.com/locations/cochrane-funeral-home" className="hover:text-[#c8d96f] transition-colors">
                      Cochrane Funeral Home
                    </a>
                  </h4>
                  <p className="text-sm mb-1">
                    <a href="tel:+14039324740" className="hover:text-[#c8d96f] transition-colors">
                      (403) 932-4740
                    </a>
                  </p>
                  <p className="text-sm">
                    <a 
                      href="https://www.google.com/maps/dir//McInnis+&+Holloway+Funeral+Homes+Cochrane" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#c8d96f] transition-colors"
                    >
                      369 Railway Street, Cochrane
                    </a>
                  </p>
                </div>

                {/* Location 3 */}
                <div>
                  <h4 className="font-semibold text-base mb-2">
                    <a href="https://www.mhfh.com/locations/fish-creek" className="hover:text-[#c8d96f] transition-colors">
                      Fish Creek Chapel
                    </a>
                  </h4>
                  <p className="text-sm mb-1">
                    <a href="tel:+14032569575" className="hover:text-[#c8d96f] transition-colors">
                      (403) 256-9575
                    </a>
                  </p>
                  <p className="text-sm">
                    <a 
                      href="https://www.google.com/maps/dir//Fish+Creek+Funeral+Chapel" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#c8d96f] transition-colors"
                    >
                      14441 Bannister Rd SE, Calgary
                    </a>
                  </p>
                </div>

                {/* Location 4 */}
                <div>
                  <h4 className="font-semibold text-base mb-2">
                    <a href="https://www.mhfh.com/locations/deerfoot-south-cremation-and-hospitality-centre" className="hover:text-[#c8d96f] transition-colors">
                      Deerfoot South
                    </a>
                  </h4>
                  <p className="text-sm mb-1">
                    <a href="tel:+14032030525" className="hover:text-[#c8d96f] transition-colors">
                      (403) 203-0525
                    </a>
                  </p>
                  <p className="text-sm">
                    <a 
                      href="https://www.google.com/maps/dir//Deerfoot+South+McInnis" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#c8d96f] transition-colors"
                    >
                      12281 40 St SE, Calgary
                    </a>
                  </p>
                </div>

                {/* Location 5 */}
                <div>
                  <h4 className="font-semibold text-base mb-2">
                    <a href="https://www.mhfh.com/locations/airdrie-funeral-home" className="hover:text-[#c8d96f] transition-colors">
                      Airdrie Funeral Home
                    </a>
                  </h4>
                  <p className="text-sm mb-1">
                    <a href="tel:+14039481100" className="hover:text-[#c8d96f] transition-colors">
                      (403) 948-1100
                    </a>
                  </p>
                  <p className="text-sm">
                    <a 
                      href="https://www.google.com/maps/dir//300+Tower+Ln+Dr+SW,+Airdrie" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#c8d96f] transition-colors"
                    >
                      300 Towerlane Drive, Airdrie
                    </a>
                  </p>
                </div>
              </div>

              {/* Second Row - 5 More Locations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 text-center">
                {/* Location 6 */}
                <div>
                  <h4 className="font-semibold text-base mb-2">
                    <a href="https://www.mhfh.com/locations/crowfoot-chapel" className="hover:text-[#c8d96f] transition-colors">
                      Crowfoot Chapel
                    </a>
                  </h4>
                  <p className="text-sm mb-1">
                    <a href="tel:+14032410044" className="hover:text-[#c8d96f] transition-colors">
                      (403) 241-0044
                    </a>
                  </p>
                  <p className="text-sm">
                    <a 
                      href="https://www.google.com/maps/dir//mcinnis+and+holloway+calgary" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#c8d96f] transition-colors"
                    >
                      82 Crowfoot Circle NW, Calgary
                    </a>
                  </p>
                </div>

                {/* Location 7 */}
                <div>
                  <h4 className="font-semibold text-base mb-2">
                    <a href="https://www.mhfh.com/locations/chapel-of-the-bells" className="hover:text-[#c8d96f] transition-colors">
                      Chapel Of The Bells
                    </a>
                  </h4>
                  <p className="text-sm mb-1">
                    <a href="tel:+14032762296" className="hover:text-[#c8d96f] transition-colors">
                      (403) 276-2296
                    </a>
                  </p>
                  <p className="text-sm">
                    <a 
                      href="https://www.google.com/maps/dir//Chapel+Of+The+Bells+McInnis" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#c8d96f] transition-colors"
                    >
                      2720 Centre St N, Calgary
                    </a>
                  </p>
                </div>

                {/* Location 8 */}
                <div>
                  <h4 className="font-semibold text-base mb-2">
                    <a href="https://www.mhfh.com/locations/eastside-memorial-chapel" className="hover:text-[#c8d96f] transition-colors">
                      Eastside Memorial Chapel
                    </a>
                  </h4>
                  <p className="text-sm mb-1">
                    <a href="tel:+14032488585" className="hover:text-[#c8d96f] transition-colors">
                      (403) 248-8585
                    </a>
                  </p>
                  <p className="text-sm">
                    <a 
                      href="https://www.google.com/maps/dir//mcinnis+and+holloway+calgary" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#c8d96f] transition-colors"
                    >
                      5388 Memorial Dr NE, Calgary
                    </a>
                  </p>
                </div>

                {/* Location 9 */}
                <div>
                  <h4 className="font-semibold text-base mb-2">
                    <a href="https://www.mhfh.com/locations/heritage" className="hover:text-[#c8d96f] transition-colors">
                      Heritage Funeral Home
                    </a>
                  </h4>
                  <p className="text-sm mb-1">
                    <a href="tel:+14032990100" className="hover:text-[#c8d96f] transition-colors">
                      (403) 299-0100
                    </a>
                  </p>
                  <p className="text-sm">
                    <a 
                      href="https://www.google.com/maps/dir//Chapel+Of+The+Bells+McInnis" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#c8d96f] transition-colors"
                    >
                      1708-16th Avenue NW, Calgary
                    </a>
                  </p>
                </div>

                {/* Location 10 */}
                <div>
                  <h4 className="font-semibold text-base mb-2">
                    <a href="https://www.mhfh.com/locations/calgary-crematorium" className="hover:text-[#c8d96f] transition-colors">
                      Calgary Crematorium
                    </a>
                  </h4>
                  <p className="text-sm mb-1">
                    <a href="tel:+14032990111" className="hover:text-[#c8d96f] transition-colors">
                      (403) 299-0111
                    </a>
                  </p>
                  <p className="text-sm">
                    <a 
                      href="https://www.google.com/maps/dir//Calgary+Crematorium" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#c8d96f] transition-colors"
                    >
                      3219 4th Street NW, Calgary
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Logo - Right Side */}
            <div className="flex justify-center xl:justify-end items-start xl:pl-12 flex-shrink-0">
              <a href="/" className="block">
                <img
                  src="https://c.animaapp.com/mj3qzcubLRevsO/assets/0bdeceb3-4505-4a8b-b701-ea9f4f412668.webp"
                  alt="McInnis & Holloway"
                  className="w-[200px] md:w-[212px] h-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="bg-[#576037] pt-6 pb-24 text-center">
        <div className="max-w-[1400px] mx-auto px-4">
          <p className="text-sm mb-2 font-lato">
            <strong className="font-bold">© McInnis & Holloway Funeral Home</strong>
          </p>
          <p className="text-sm mb-2 font-lato font-normal">
            <a href="https://mhfhnew.funeraltechweb.com/admin/" className="hover:text-[#c8d96f] transition-colors">
              Family Arranger Login
            </a>
            {" | "}
            <a href="https://mhfh.tributecenteronline.com/admin" className="hover:text-[#c8d96f] transition-colors">
              Website Login
            </a>
            {" | "}
            <a href="https://www.mhfh.com/about-us/arranger-information" className="hover:text-[#c8d96f] transition-colors">
              Arranger Information
            </a>
          </p>
          <p className="text-sm font-lato font-normal">
            Website Design:{" "}
            <a href="https://www.tributetech.com/" className="hover:text-[#c8d96f] transition-colors">
              Tribute Technology
            </a>
            {" & "}
            <a href="https://www.tributearchive.com/" className="hover:text-[#c8d96f] transition-colors">
              TA
            </a>
            {" | "}
            <a href="https://www.mhfh.com/resources/privacy-policy" className="hover:text-[#c8d96f] transition-colors">
              Privacy Policy
            </a>
            {" | "}
            <a href="https://www.mhfh.com/resources/terms-of-use" className="hover:text-[#c8d96f] transition-colors">
              Terms of Use
            </a>
            {" | "}
            <a href="https://www.mhfh.com/resources/accessibility" className="hover:text-[#c8d96f] transition-colors">
              Accessibility
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

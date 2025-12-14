import { useState } from "react";

export const NavMenu = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="hidden lg:flex items-center gap-[28px] xl:gap-[35px] ml-auto">
      <a 
        href="https://www.mhfh.com/obituaries/obituary-listings" 
        className="text-white text-[13px] xl:text-[15px] font-semibold tracking-[1.5px] uppercase hover:text-[#c8d96f] transition-colors whitespace-nowrap"
      >
        OBITUARIES
      </a>
      
      <div 
        className="relative group"
        onMouseEnter={() => setActiveDropdown('about')}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <button className="text-white text-[13px] xl:text-[15px] font-bold tracking-[1.5px] uppercase hover:text-[#c8d96f] transition-colors whitespace-nowrap flex items-center gap-1 font-lato">
          ABOUT US
          <svg className={`w-3 h-3 transition-transform ${activeDropdown === 'about' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <div className={`absolute left-0 top-full mt-0 bg-[#7a9b5f] transition-all duration-300 min-w-[280px] py-6 px-8 z-50 shadow-2xl ${activeDropdown === 'about' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}`}>
          <a href="https://www.mhfh.com/about-us/locations" className="block text-white text-[15px] py-2.5 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato font-normal">Locations</a>
          <a href="https://www.mhfh.com/about-us/our-people" className="block text-white text-[15px] py-2.5 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Our People</a>
          <a href="https://www.mhfh.com/about-us/contact-us" className="block text-white text-[15px] py-2.5 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Contact Us</a>
          <a href="https://www.mhfh.com/about-us/testimonials" className="block text-white text-[15px] py-2.5 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Testimonials</a>
          <a href="https://www.mhfh.com/about-us/careers" className="block text-white text-[15px] py-2.5 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Careers</a>
          <a href="https://www.mhfh.com/about-us/funeral-director-opportunity" className="block text-white text-[15px] py-2.5 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Funeral Director Opportunity</a>
          <a href="https://www.mhfh.com/about-us/employee-login" className="block text-white text-[15px] py-2.5 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Employee Login</a>
          <a href="https://www.mhfh.com/about-us/arranger-information" target="_blank" rel="noopener noreferrer" className="block text-white text-[15px] py-2.5 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Arranger Information</a>
          <a href="https://www.mhfh.com/about-us/awards" className="block text-white text-[15px] py-2.5 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Awards</a>
          <a href="https://www.mhfh.com/about-us/our-blog" className="block text-white text-[15px] py-2.5 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Our Blog</a>
        </div>
      </div>

      <a 
        href="https://www.mhfh.com/send-flowersfood/send-flowersfood" 
        className="text-white text-[13px] xl:text-[15px] font-bold tracking-[1.5px] uppercase hover:text-[#c8d96f] transition-colors whitespace-nowrap font-lato"
      >
        SEND FLOWERS/FOOD
      </a>

      <div 
        className="relative group"
        onMouseEnter={() => setActiveDropdown('services')}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <button className="text-white text-[13px] xl:text-[15px] font-semibold tracking-[1.5px] uppercase hover:text-[#c8d96f] transition-colors whitespace-nowrap flex items-center gap-1">
          OUR SERVICES
          <svg className={`w-3 h-3 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <div className={`absolute left-0 top-full mt-0 bg-[#7a9b5f] transition-all duration-300 min-w-[300px] py-6 px-8 z-50 shadow-2xl ${activeDropdown === 'services' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}`}>
          <a href="https://www.mhfh.com/our-services/our-services" className="block text-white text-[15px] py-2.5 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Our Services</a>
          <a href="https://www.mhfh.com/our-services/burial-services" className="block text-white text-[15px] py-2.5 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Burial Services</a>
          <a href="https://www.mhfh.com/our-services/green-burialcremation-services" className="block text-white text-[15px] py-2.5 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Green Burial/Cremation Services</a>
          <a href="https://www.mhfh.com/our-services/when-a-child-death-occurs" className="block text-white text-[15px] py-2.5 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">When a Child Death Occurs</a>
          <a href="https://www.mhfh.com/our-services/memorial-services" className="block text-white text-[15px] py-2.5 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Memorial Services</a>
          <a href="https://www.mhfh.com/our-services/live-streaming" className="block text-white text-[15px] py-2.5 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Live Streaming</a>
          <a href="https://www.mhfh.com/our-services/book-request" className="block text-white text-[15px] py-2.5 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Book Request</a>
          <a href="https://www.mhfh.com/our-services/make-a-payment" target="_blank" rel="noopener noreferrer" className="block text-white text-[15px] py-2.5 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Make A Payment</a>
          <a href="https://www.mhfh.com/our-services/merchandise-selection" className="block text-white text-[15px] py-2.5 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Merchandise Selection</a>
        </div>
      </div>

      <div 
        className="relative group"
        onMouseEnter={() => setActiveDropdown('more')}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <button className="text-white text-[13px] xl:text-[15px] font-semibold tracking-[1.5px] uppercase hover:text-[#c8d96f] transition-colors whitespace-nowrap flex items-center gap-1">
          MORE
          <svg className={`w-3 h-3 transition-transform ${activeDropdown === 'more' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <div className={`absolute right-0 top-full mt-0 bg-[#7a9b5f] transition-all duration-300 grid grid-cols-3 gap-x-12 min-w-[850px] py-7 px-10 z-50 shadow-2xl ${activeDropdown === 'more' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}`}>
          <div>
            <h4 className="text-white text-[15px] font-bold mb-4 uppercase tracking-wider font-lato">TREE PROGRAM</h4>
            <a href="https://www.mhfh.com/tree-program/tree-program-overview" className="block text-white text-[15px] py-2 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Tree Program Overview</a>
            <a href="https://www.mhfh.com/tree-program/more-information" className="block text-white text-[15px] py-2 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">More Information</a>
            <a href="https://www.mhfh.com/tree-program/name-lists" className="block text-white text-[15px] py-2 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Name Lists</a>
            <a href="https://www.mhfh.com/tree-program/tree-program-2020" className="block text-white text-[15px] py-2 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Tree Program 2020</a>
            <a href="https://www.mhfh.com/tree-program/online-tree-sales" className="block text-white text-[15px] py-2 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Online Tree Sales</a>
            
            <h4 className="text-white text-[15px] font-bold mb-4 mt-6 uppercase tracking-wider font-lato">FUNERAL PLANNING</h4>
            <a href="https://www.mhfh.com/funeral-planning/making-funeral-arrangements" className="block text-white text-[15px] py-2 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Making Funeral Arrangements</a>
            <a href="https://www.mhfh.com/funeral-planning/pre-planning" className="block text-white text-[15px] py-2 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Pre-Planning</a>
            <a href="https://www.mhfh.com/funeral-planning/when-death-occurs" className="block text-white text-[15px] py-2 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">When Death Occurs</a>
            <a href="https://www.mhfh.com/funeral-planning/eulogies-and-obituaries" className="block text-white text-[15px] py-2 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Eulogies & Obituaries</a>
            <a href="https://www.mhfh.com/funeral-planning/cemeteries" className="block text-white text-[15px] py-2 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Cemeteries</a>
            <a href="https://www.mhfh.com/funeral-planning/book-an-appointment-online" target="_blank" rel="noopener noreferrer" className="block text-white text-[15px] py-2 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Book An Appointment Online</a>
          </div>
          
          <div>
            <h4 className="text-white text-[15px] font-bold mb-4 uppercase tracking-wider font-lato">RESOURCES</h4>
            <a href="https://www.mhfh.com/resources/writing-assistant-tools" className="block text-white text-[15px] py-2 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">✨Writing Assistant Tools✨</a>
            <a href="https://www.mhfh.com/resources/scattering-cremated-remains" className="block text-white text-[15px] py-2 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Scattering Cremated Remains</a>
            <a href="https://www.mhfh.com/resources/sending-human-and-cremated-remains" className="block text-white text-[15px] py-2 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Sending Human And Cremated Remains</a>
            <a href="https://www.mhfh.com/resources/travel-protection" className="block text-white text-[15px] py-2 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Travel Protection</a>
            <a href="https://www.mhfh.com/resources/family-care" className="block text-white text-[15px] py-2 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Family Care</a>
            <a href="https://www.mhfh.com/resources/grief-resource-options" className="block text-white text-[15px] py-2 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Grief Resource Options</a>
            <a href="https://www.mhfh.com/resources/funeral-etiquette" className="block text-white text-[15px] py-2 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Funeral Etiquette</a>
            <a href="https://www.mhfh.com/resources/legal-advice" className="block text-white text-[15px] py-2 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Legal Advice</a>
            <a href="https://www.mhfh.com/resources/veterans" className="block text-white text-[15px] py-2 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Veterans</a>
            <a href="https://www.mhfh.com/resources/first-responders" className="block text-white text-[15px] py-2 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">First Responders</a>
            <a href="https://www.mhfh.com/resources/charities" className="block text-white text-[15px] py-2 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Charities</a>
            <a href="https://www.mhfh.com/resources/privacy-policy" className="block text-white text-[15px] py-2 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Privacy Policy</a>
            <a href="https://www.mhfh.com/resources/thesaurus" className="block text-white text-[15px] py-2 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Thesaurus</a>
            <a href="https://www.mhfh.com/resources/qr-code-memory" className="block text-white text-[15px] py-2 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">QR Code Memory</a>
            <a href="https://www.mhfh.com/resources/our-newsletter" target="_blank" rel="noopener noreferrer" className="block text-white text-[15px] py-2 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Our Newsletter</a>
          </div>
          
          <div>
            <h4 className="text-white text-[15px] font-bold mb-4 uppercase tracking-wider font-lato">FAQ</h4>
            <a href="https://www.mhfh.com/faq/faqs" className="block text-white text-[15px] py-2 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">FAQs</a>
            
            <h4 className="text-white text-[15px] font-bold mb-4 mt-6 uppercase tracking-wider font-lato">WRITING ASSISTANT TOOLS</h4>
            <a href="https://www.mhfh.com/writing-assistant-tools/obituary-writing-assistant" className="block text-white text-[15px] py-2 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Obituary Writing Assistant</a>
            <a href="https://www.mhfh.com/writing-assistant-tools/obituary-poem-generator" className="block text-white text-[15px] py-2 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Obituary Poem Generator</a>
            <a href="https://www.mhfh.com/writing-assistant-tools/condolence-writing-assistant" className="block text-white text-[15px] py-2 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Condolence Writing Assistant</a>
            
            <h4 className="text-white text-[15px] font-bold mb-4 mt-6 uppercase tracking-wider font-lato">INFORMATION AND PRICING</h4>
            <a href="https://www.mhfh.com/information-and-pricing/info-and-pricing" className="block text-white text-[15px] py-2 hover:text-[#d4e5c7] hover:translate-x-1 transition-all font-lato">Info and Pricing</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

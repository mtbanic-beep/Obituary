import { useState } from "react";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="lg:hidden absolute top-full left-0 right-0 bg-[#5d6142] shadow-lg z-50 max-h-[80vh] overflow-y-auto">
      <nav className="py-4">
        <a 
          href="https://www.mhfh.com/obituaries/obituary-listings" 
            className="block text-white text-sm font-bold px-6 py-3 hover:bg-white/10 transition-colors uppercase tracking-[1px] font-lato"
        >
          OBITUARIES
        </a>
        
        <div>
          <button 
            onClick={() => toggleSection('about')}
            className="w-full flex items-center justify-between text-white text-sm font-bold px-6 py-3 hover:bg-white/10 transition-colors uppercase tracking-[1px] font-lato"
          >
            <span>ABOUT US</span>
            <svg 
              className={`w-4 h-4 transition-transform ${expandedSection === 'about' ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {expandedSection === 'about' && (
            <div className="bg-[#4a5035] py-2">
              <a href="https://www.mhfh.com/about-us/locations" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors font-lato font-normal">Locations</a>
              <a href="https://www.mhfh.com/about-us/our-people" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Our People</a>
              <a href="https://www.mhfh.com/about-us/contact-us" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Contact Us</a>
              <a href="https://www.mhfh.com/about-us/testimonials" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Testimonials</a>
              <a href="https://www.mhfh.com/about-us/careers" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Careers</a>
              <a href="https://www.mhfh.com/about-us/funeral-director-opportunity" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Funeral Director Opportunity</a>
              <a href="https://www.mhfh.com/about-us/employee-login" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Employee Login</a>
              <a href="https://www.mhfh.com/about-us/arranger-information" target="_blank" rel="noopener noreferrer" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Arranger Information</a>
              <a href="https://www.mhfh.com/about-us/awards" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Awards</a>
              <a href="https://www.mhfh.com/about-us/our-blog" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Our Blog</a>
            </div>
          )}
        </div>

        <a 
          href="https://www.mhfh.com/send-flowersfood/send-flowersfood" 
          className="block text-white text-sm font-semibold px-6 py-3 hover:bg-white/10 transition-colors uppercase tracking-[1px]"
        >
          SEND FLOWERS/FOOD
        </a>

        <div>
          <button 
            onClick={() => toggleSection('services')}
            className="w-full flex items-center justify-between text-white text-sm font-semibold px-6 py-3 hover:bg-white/10 transition-colors uppercase tracking-[1px]"
          >
            <span>OUR SERVICES</span>
            <svg 
              className={`w-4 h-4 transition-transform ${expandedSection === 'services' ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {expandedSection === 'services' && (
            <div className="bg-[#4a5035] py-2">
              <a href="https://www.mhfh.com/our-services/our-services" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Our Services</a>
              <a href="https://www.mhfh.com/our-services/burial-services" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Burial Services</a>
              <a href="https://www.mhfh.com/our-services/green-burialcremation-services" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Green Burial/Cremation Services</a>
              <a href="https://www.mhfh.com/our-services/when-a-child-death-occurs" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">When a Child Death Occurs</a>
              <a href="https://www.mhfh.com/our-services/memorial-services" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Memorial Services</a>
              <a href="https://www.mhfh.com/our-services/live-streaming" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Live Streaming</a>
              <a href="https://www.mhfh.com/our-services/book-request" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Book Request</a>
              <a href="https://www.mhfh.com/our-services/make-a-payment" target="_blank" rel="noopener noreferrer" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Make A Payment</a>
              <a href="https://www.mhfh.com/our-services/merchandise-selection" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Merchandise Selection</a>
            </div>
          )}
        </div>

        <div>
          <button 
            onClick={() => toggleSection('tree')}
            className="w-full flex items-center justify-between text-white text-sm font-semibold px-6 py-3 hover:bg-white/10 transition-colors uppercase tracking-[1px]"
          >
            <span>TREE PROGRAM</span>
            <svg 
              className={`w-4 h-4 transition-transform ${expandedSection === 'tree' ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {expandedSection === 'tree' && (
            <div className="bg-[#4a5035] py-2">
              <a href="https://www.mhfh.com/tree-program/tree-program-overview" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Tree Program Overview</a>
              <a href="https://www.mhfh.com/tree-program/more-information" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">More Information</a>
              <a href="https://www.mhfh.com/tree-program/name-lists" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Name Lists</a>
              <a href="https://www.mhfh.com/tree-program/tree-program-2020" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Tree Program 2020</a>
              <a href="https://www.mhfh.com/tree-program/online-tree-sales" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Online Tree Sales</a>
            </div>
          )}
        </div>

        <div>
          <button 
            onClick={() => toggleSection('planning')}
            className="w-full flex items-center justify-between text-white text-sm font-semibold px-6 py-3 hover:bg-white/10 transition-colors uppercase tracking-[1px]"
          >
            <span>FUNERAL PLANNING</span>
            <svg 
              className={`w-4 h-4 transition-transform ${expandedSection === 'planning' ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {expandedSection === 'planning' && (
            <div className="bg-[#4a5035] py-2">
              <a href="https://www.mhfh.com/funeral-planning/making-funeral-arrangements" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Making Funeral Arrangements</a>
              <a href="https://www.mhfh.com/funeral-planning/pre-planning" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Pre-Planning</a>
              <a href="https://www.mhfh.com/funeral-planning/when-death-occurs" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">When Death Occurs</a>
              <a href="https://www.mhfh.com/funeral-planning/eulogies-and-obituaries" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Eulogies & Obituaries</a>
              <a href="https://www.mhfh.com/funeral-planning/cemeteries" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Cemeteries</a>
              <a href="https://www.mhfh.com/funeral-planning/book-an-appointment-online" target="_blank" rel="noopener noreferrer" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Book An Appointment Online</a>
            </div>
          )}
        </div>

        <div>
          <button 
            onClick={() => toggleSection('resources')}
            className="w-full flex items-center justify-between text-white text-sm font-semibold px-6 py-3 hover:bg-white/10 transition-colors uppercase tracking-[1px]"
          >
            <span>RESOURCES</span>
            <svg 
              className={`w-4 h-4 transition-transform ${expandedSection === 'resources' ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {expandedSection === 'resources' && (
            <div className="bg-[#4a5035] py-2">
              <a href="https://www.mhfh.com/resources/writing-assistant-tools" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">✨Writing Assistant Tools✨</a>
              <a href="https://www.mhfh.com/resources/scattering-cremated-remains" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Scattering Cremated Remains</a>
              <a href="https://www.mhfh.com/resources/sending-human-and-cremated-remains" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Sending Human And Cremated Remains</a>
              <a href="https://www.mhfh.com/resources/travel-protection" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Travel Protection</a>
              <a href="https://www.mhfh.com/resources/family-care" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Family Care</a>
              <a href="https://www.mhfh.com/resources/grief-resource-options" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Grief Resource Options</a>
              <a href="https://www.mhfh.com/resources/funeral-etiquette" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Funeral Etiquette</a>
              <a href="https://www.mhfh.com/resources/legal-advice" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Legal Advice</a>
              <a href="https://www.mhfh.com/resources/veterans" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Veterans</a>
              <a href="https://www.mhfh.com/resources/first-responders" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">First Responders</a>
              <a href="https://www.mhfh.com/resources/charities" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Charities</a>
              <a href="https://www.mhfh.com/resources/privacy-policy" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Privacy Policy</a>
              <a href="https://www.mhfh.com/resources/thesaurus" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Thesaurus</a>
              <a href="https://www.mhfh.com/resources/qr-code-memory" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">QR Code Memory</a>
              <a href="https://www.mhfh.com/resources/our-newsletter" target="_blank" rel="noopener noreferrer" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Our Newsletter</a>
            </div>
          )}
        </div>

        <a 
          href="https://www.mhfh.com/faq/faqs" 
          className="block text-white text-sm font-semibold px-6 py-3 hover:bg-white/10 transition-colors uppercase tracking-[1px]"
        >
          FAQ
        </a>

        <div>
          <button 
            onClick={() => toggleSection('writing')}
            className="w-full flex items-center justify-between text-white text-sm font-semibold px-6 py-3 hover:bg-white/10 transition-colors uppercase tracking-[1px]"
          >
            <span>WRITING ASSISTANT TOOLS</span>
            <svg 
              className={`w-4 h-4 transition-transform ${expandedSection === 'writing' ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {expandedSection === 'writing' && (
            <div className="bg-[#4a5035] py-2">
              <a href="https://www.mhfh.com/writing-assistant-tools/obituary-writing-assistant" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Obituary Writing Assistant</a>
              <a href="https://www.mhfh.com/writing-assistant-tools/obituary-poem-generator" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Obituary Poem Generator</a>
              <a href="https://www.mhfh.com/writing-assistant-tools/condolence-writing-assistant" className="block text-white text-sm px-10 py-2 hover:bg-white/10 transition-colors">Condolence Writing Assistant</a>
            </div>
          )}
        </div>

        <a 
          href="https://www.mhfh.com/information-and-pricing/info-and-pricing" 
          className="block text-white text-sm font-semibold px-6 py-3 hover:bg-white/10 transition-colors uppercase tracking-[1px]"
        >
          INFORMATION AND PRICING
        </a>
      </nav>
    </div>
  );
};

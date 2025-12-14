import { useState, useRef } from "react";

export const ObituarySection = () => {
  const [obituaryExpanded, setObituaryExpanded] = useState(false);
  const obituaryRef = useRef<HTMLDivElement>(null);

  const handleToggleExpand = () => {
    if (obituaryExpanded && obituaryRef.current) {
      obituaryRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setObituaryExpanded(!obituaryExpanded);
  };

  return (
    <section id="obituary-section" className="bg-white lg:bg-transparent px-3 lg:px-[15px] mb-12 scroll-mt-[200px]" ref={obituaryRef}>
      <div className="border-b-2 border-[#d4d4d4] pb-[35px] lg:pb-[45px] ml-[-15px] mr-[-15px] lg:mx-0 px-[15px] lg:px-0">
        <div className="min-h-[50px] lg:min-h-[60px] pb-5 lg:pb-[30px]">
          <h2 className="text-[#3d3d3d] text-2xl font-bold leading-normal text-left font-source_sans_pro">
            Rhonda Mary Olson Obituary
          </h2>
        </div>
        <div className={`text-[#3d3d3d] text-[15px] leading-[1.6] pb-[15px] font-source_sans_pro font-normal ${!obituaryExpanded ? 'max-h-[120px] overflow-hidden [mask-image:linear-gradient(rgb(255,255,255),rgb(255,255,255),rgba(255,255,255,0))]' : ''}`}>
          <p className="text-center leading-normal mb-4">August 30, 1983 – Vancouver, British Columbia</p>
          <p className="text-center leading-normal mb-4">October 8, 2025 - Calgary, Alberta</p>
          
          <p className="leading-normal mb-4">Rhonda Mary Olson, beloved mother of Marko and Maya, of Calgary, Alberta, passed away on Wednesday, October 8, 2025, at the age of 42.</p>
          
          <p className="leading-normal mb-4">Born in Vancouver, British Columbia, Rhonda relocated to Calgary at the age of 19 in search of opportunity and a fresh beginning. Her early years were marked by significant hardship, yet she faced life with quiet strength and determination, building a new and independent life for herself before becoming a mother.</p>
          
          <p className="leading-normal mb-4">In her early thirties, Rhonda encountered further challenges, but she met them with resilience and grace. As a devoted single mother, her children were the center of her world, and her life was guided by an unwavering commitment to their well-being and happiness.</p>
          
          <p className="leading-normal mb-4">Rhonda was deeply compassionate toward others and gave back to her community through volunteer work at a local women's shelter. Drawing from her own strength and empathy, she offered her time to support women and families in need, believing strongly in dignity, safety, and second chances. Her involvement reflected her quiet generosity and her desire to help others feel seen, supported, and valued.</p>
          
          <p className="leading-normal mb-4">She had recently completed her fifth year as a clinic hand at Mayfair Diagnostics, where she was respected for her strong work ethic, compassion, and willingness to support both patients and colleagues. She will be deeply missed by her coworkers, who knew her as both a dependable professional and a genuine friend.</p>
          
          <p className="leading-normal mb-4">Above all else, Rhonda will be remembered for her kind and caring nature, the deep friendships she formed, and the boundless love she held for her children. Her strength, perseverance, and generosity of spirit leave a lasting legacy in the lives she touched.</p>
          
          <p className="leading-normal mb-4">Besides her children, Marko and Maya, Rhonda is survived by her mother, Margaret.</p>
          
          <p className="leading-normal mb-4">Funeral Services will be held at St. Bonaventure Church (<a href="https://www.google.com/maps/dir//1600+Acadia+Dr+SE,+Calgary,+AB" target="_blank" rel="noopener noreferrer" className="text-[#f59e0b] font-bold hover:text-[#d97706] underline">1600 Acadia Dr SE, Calgary, AB</a>) on Sunday, October 19, 2025, at 10:30 a.m. Rhonda will be laid to rest at the Eden Brook Cemetery (<a href="https://www.google.com/maps/dir//24223+Township+Rd+242,+Calgary,+AB" target="_blank" rel="noopener noreferrer" className="text-[#f59e0b] font-bold hover:text-[#d97706] underline">24223 Township Rd 242, Calgary, AB</a>) at 1:00 p.m. Following the funeral, a reception luncheon will be served at the Church Hall.</p>
          
          <p className="leading-normal mb-4">If friends so desire, in lieu of flowers, memorial donations in support of Rhonda's daughter' and Son' education may be made by the drop box that will be available in the Church Hall.</p>
          
          <p className="leading-normal mb-4">Condolences, memories, and photos may be shared and viewed with Rhonda's family here.</p>
          
          <p className="leading-normal mb-4">In living memory of Rhonda Olson, a tree will be planted in the Ann & Sandy Cross Conservation Area by McInnis & Holloway Funeral Homes, Park Memorial, 5008 Elbow Drive SW, Calgary, AB T2S 2L5, Telephone: 403-243-8200.</p>
        </div>
        
        {obituaryExpanded && (
          <div className="mb-6 text-[#3d3d3d] text-[15px] leading-[1.6] font-source_sans_pro font-normal">
            <span>To </span>
            <a
              href="https://park-memorial-inc.tributestore.com/?oId=rhonda-mary-olson"
              className="text-[#c94949] font-bold hover:text-[#b33939] underline transition-colors"
            >
              send flowers
            </a>
            <span> to the family or </span>
            <a
              href="https://treecan.tributestore.com/?oId=rhonda-mary-olson"
              className="text-[#406c4f] font-bold hover:text-[#2d4d38] underline transition-colors"
            >
              plant a tree
            </a>
            <span> in memory of Rhonda, please </span>
            <a
              href="https://park-memorial-inc.tributestore.com/?oId=rhonda-mary-olson"
              className="text-[#c94949] font-bold hover:text-[#b33939] underline transition-colors"
            >
              visit our floral store.
            </a>
          </div>
        )}

        <button 
          onClick={handleToggleExpand}
          className={`relative text-[#f59e0b] text-[15px] font-bold bg-transparent leading-normal text-center pl-0 pr-[18px] py-0 mb-5 after:block after:absolute after:right-[3px] after:top-[5px] after:border-r-2 after:border-b-2 after:border-[#f59e0b] after:border-solid after:p-[3px] hover:text-[#d97706] transition-all uppercase tracking-[0.5px] font-source_sans_pro ${
            obituaryExpanded ? 'after:-rotate-[135deg]' : 'after:rotate-45'
          }`}
        >
          {obituaryExpanded ? 'Hide' : 'Read more'}
        </button>
      </div>
    </section>
  );
};

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center min-h-[600px] flex items-center justify-center" style={{backgroundImage: "url('https://d36ewrdt9mbbbo.cloudfront.net/themes/modern/N6_EternityLightsTheWay/obituaryimage_big.webp')"}}>
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-white text-5xl lg:text-6xl font-bold mb-6 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)] font-lato">
            McInnis & Holloway Funeral Homes
          </h1>
          <p className="text-white text-xl lg:text-2xl mb-8 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.8)] font-lato font-light">
            Serving Calgary and surrounding communities with compassion and dignity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.mhfh.com/obituaries/obituary-listings"
              className="bg-[#b9be94] text-white text-lg font-bold px-8 py-4 rounded-full hover:bg-[#7a9b5f] transition-all shadow-lg hover:shadow-xl uppercase tracking-[1px] font-lato"
            >
              View All Obituaries
            </a>
            <a
              href="https://forms.mhfh.com/Forms/Online-Appointments/1704/index.html#form-start"
              className="bg-white text-[#5d6142] text-lg font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl uppercase tracking-[1px] font-lato"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>

      {/* Recent Obituaries Section */}
      <div className="py-16 px-4">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-[#3d3d3d] text-4xl font-bold mb-12 text-center font-source_sans_pro">
            Recent Obituaries
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Rhonda Mary Olson Card */}
            <a 
              href="/obituaries/Rhonda-Mary-Olson?obId=46656996"
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="relative h-[300px] bg-[#d6d6d6]">
                <img
                  src="https://i.imgur.com/wckETQi.png"
                  alt="Rhonda Mary Olson"
                  className="w-full h-full object-cover object-[60%_20%]"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[#3d3d3d] text-2xl font-bold mb-2 font-lato">
                  Rhonda Mary Olson
                </h3>
                <p className="text-[#6b6b6b] text-base mb-4 font-lato font-normal">
                  August 30, 1983 - October 8, 2025
                </p>
                <div className="flex items-center text-[#7a9b5f] font-semibold text-sm font-lato">
                  <span>View Obituary</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Placeholder Cards */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden opacity-50">
              <div className="relative h-[300px] bg-gradient-to-br from-gray-200 to-gray-300"></div>
              <div className="p-6">
                <h3 className="text-[#3d3d3d] text-2xl font-bold mb-2 font-lato">
                  Coming Soon
                </h3>
                <p className="text-[#6b6b6b] text-base mb-4 font-lato font-normal">
                  More obituaries will appear here
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden opacity-50">
              <div className="relative h-[300px] bg-gradient-to-br from-gray-200 to-gray-300"></div>
              <div className="p-6">
                <h3 className="text-[#3d3d3d] text-2xl font-bold mb-2 font-lato">
                  Coming Soon
                </h3>
                <p className="text-[#6b6b6b] text-base mb-4 font-lato font-normal">
                  More obituaries will appear here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-[#3d3d3d] text-4xl font-bold mb-12 text-center font-source_sans_pro">
            Our Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-[#fafafa] rounded-lg hover:shadow-lg transition-all">
              <div className="w-20 h-20 bg-[#b9be94] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 className="text-[#3d3d3d] text-xl font-bold mb-4 font-lato">
                Funeral Services
              </h3>
              <p className="text-[#6b6b6b] text-base leading-relaxed font-lato font-normal">
                Traditional and personalized funeral services to honor your loved one's memory
              </p>
            </div>

            <div className="text-center p-8 bg-[#fafafa] rounded-lg hover:shadow-lg transition-all">
              <div className="w-20 h-20 bg-[#b9be94] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                </svg>
              </div>
              <h3 className="text-[#3d3d3d] text-xl font-bold mb-4 font-lato">
                Pre-Planning
              </h3>
              <p className="text-[#6b6b6b] text-base leading-relaxed font-lato font-normal">
                Plan ahead to ease the burden on your family during difficult times
              </p>
            </div>

            <div className="text-center p-8 bg-[#fafafa] rounded-lg hover:shadow-lg transition-all">
              <div className="w-20 h-20 bg-[#b9be94] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-[#3d3d3d] text-xl font-bold mb-4 font-lato">
                Cremation Services
              </h3>
              <p className="text-[#6b6b6b] text-base leading-relaxed font-lato font-normal">
                Dignified cremation services with various memorial options available
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-[#5d6142] py-16 px-4">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-white text-4xl font-bold mb-6 font-lato">
            We're Here to Help
          </h2>
          <p className="text-white text-xl mb-8 font-lato font-light">
            Available 24/7 to serve you and your family
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+14032438200"
              className="bg-white text-[#5d6142] text-lg font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl uppercase tracking-[1px] font-lato"
            >
              Call (403) 243-8200
            </a>
            <a
              href="https://forms.mhfh.com/Forms/Online-Appointments/1704/index.html#form-start"
              className="bg-[#b9be94] text-white text-lg font-bold px-8 py-4 rounded-full hover:bg-[#7a9b5f] transition-all shadow-lg hover:shadow-xl uppercase tracking-[1px] font-lato"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

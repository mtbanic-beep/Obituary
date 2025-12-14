import { LocationColumn } from "@/sections/Footer/components/LocationColumn";

export const ContactGrid = () => {
  return (
    <section className="relative bg-stone-400 bg-no-repeat bg-cover box-border caret-transparent min-h-[1047px] w-full bg-center pr-0 pt-2.5 pb-0 md:min-h-[244px] md:pr-2.5 md:pt-[15px] md:pb-[5px]">
      <div className="box-border caret-transparent max-w-full w-full mx-auto">
        <div className="box-border caret-transparent flex flex-wrap w-full md:flex-nowrap">
          <div className="relative bg-no-repeat bg-cover box-border caret-transparent flex max-w-none min-h-[auto] w-full bg-center mx-0 md:max-w-full md:min-h-px md:w-[83.3333%] md:mx-auto">
            <div className="relative box-border caret-transparent w-full">
              <div className="relative box-border caret-transparent w-full">
                <div className="box-border caret-transparent flex flex-wrap w-full md:flex-nowrap">
                  <LocationColumn
                    layout=""
                    locations={[
                      {
                        name: "Park Memorial Chapel",
                        nameUrl: "/locations/park-memorial-chapel",
                        phone: "(403) 243-8200",
                        phoneUrl: "tel://+14032438200",
                        address: "5008 Elbow Dr SW, Calgary",
                        addressUrl:
                          "https://www.google.com/maps/dir//McInnis+&+Holloway,+5008+Elbow+Dr+SW,+Calgary,+AB+T2S+2L5/@51.0091347,-114.0804798,15.91z/data=!4m8!4m7!1m0!1m5!1m1!1s0x5371704e7986cc65:0xc0f2025834f9e4c6!2m2!1d-114.0809372!2d51.0091894",
                        columnClass:
                          "relative bg-no-repeat bg-cover box-border caret-transparent flex max-w-none min-h-[auto] w-full bg-center mx-0 p-2.5 md:max-w-full md:min-h-px md:w-[33.3333%] md:mx-auto",
                      },
                      {
                        name: "Cochrane Funeral Home",
                        nameUrl: "/locations/cochrane-funeral-home",
                        phone: "(403) 932-4740",
                        phoneUrl: "tel://+14039324740",
                        address: "369 Railway Street, Cochrane",
                        addressUrl:
                          "https://www.google.com/maps/dir//McInnis+&+Holloway+Funeral+Homes+Cochrane,+AB+T4C+2C6/@51.183875,-114.4781146,12z/data=!4m6!4m5!1m0!1m2!1m1!1s0x5371409d7fdfd1d1:0x6aec9753d3bd9085!3e0",
                        columnClass:
                          "relative bg-no-repeat bg-cover box-border caret-transparent flex max-w-none min-h-[auto] w-full bg-center mx-0 p-2.5 md:max-w-full md:min-h-px md:w-[33.3333%] md:mx-auto",
                      },
                      {
                        name: "Fish Creek Chapel",
                        nameUrl: "/locations/fish-creek",
                        phone: "(403) 256-9575",
                        phoneUrl: "tel://+14032569575",
                        address: "14441 Bannister Rd SE, Calgary",
                        addressUrl:
                          "https://www.google.com/maps/dir//Fish+Creek+Funeral+Chapel+-+McInnis+&+Holloway+Funeral+Homes+&+Cremation+Services,+14441+Bannister+Rd+SE,+Calgary,+AB+T2X+3J3/@50.9253384,-114.0697233,18z/data=!4m6!4m5!1m0!1m2!1m1!1s0x5371769a3e5afc9d:0x7a12b572fb0ad9d9!3e0",
                        columnClass:
                          "relative bg-no-repeat bg-cover box-border caret-transparent flex max-w-none min-h-[auto] w-full bg-center mx-0 p-2.5 md:max-w-full md:min-h-px md:w-[33.3333%] md:mx-auto",
                      },
                    ]}
                  />
                  <div className="relative bg-no-repeat bg-cover box-border caret-transparent flex max-w-none min-h-[auto] w-full bg-center mr-0 px-2.5 md:max-w-full md:min-h-px md:w-[41.6667%] md:mr-auto md:px-0">
                    <div className="relative box-border caret-transparent w-full">
                      <div className="relative box-border caret-transparent w-full">
                        <div className="box-border caret-transparent flex flex-wrap w-full md:flex-nowrap">
                          <div className="relative bg-no-repeat bg-cover box-border caret-transparent flex max-w-none min-h-[auto] w-full bg-center mr-0 p-2.5 md:max-w-full md:min-h-px md:w-6/12 md:mr-auto md:pl-0">
                            <div className="relative box-border caret-transparent w-full">
                              <p className="text-white text-[15px] font-medium box-border caret-transparent leading-[22.5px] text-center w-full my-0 font-lato md:text-base md:leading-6 md:my-2.5">
                                <a
                                  href="/locations/deerfoot-south-cremation-and-hospitality-centre"
                                  className="text-stone-600 text-[15px] font-semibold box-border caret-transparent leading-[normal] md:text-base hover:text-lime-700 hover:border-lime-700"
                                >
                                  <div className="text-white text-[15px] box-border caret-transparent md:text-base">
                                    Deerfoot South
                                    <br className="text-[15px] box-border caret-transparent md:text-base" />
                                  </div>
                                </a>
                                <a
                                  href="tel://+14032030525"
                                  className="text-stone-600 text-[15px] font-semibold box-border caret-transparent leading-[normal] md:text-base hover:text-lime-700 hover:border-lime-700"
                                >
                                  <div className="text-white text-[15px] box-border caret-transparent md:text-base">
                                    (403) 203-0525
                                  </div>
                                </a>
                                <br className="text-[15px] box-border caret-transparent leading-[22.5px] md:text-base md:leading-6" />
                                <a
                                  href="https://www.google.com/maps/dir//Deerfoot+South+McInnis+&+Holloway+Funeral+Home+&+Cremation+Services,+12281+40+St+SE,+Calgary,+AB+T2Z+4E6,+Canada/@50.9397187,-113.9751133,17z/data=!4m6!4m5!1m0!1m2!1m1!1s0x5371777a815c2d6d:0xf6eaf4a5de80eaae!3e0?hl=en"
                                  className="text-stone-600 text-[15px] font-semibold box-border caret-transparent leading-[normal] md:text-base hover:text-lime-700 hover:border-lime-700"
                                >
                                  <div className="text-white text-[15px] font-normal box-border caret-transparent md:text-base">
                                    12281 40 St SE, Calgary
                                  </div>
                                </a>
                                <br className="text-[15px] box-border caret-transparent leading-[22.5px] md:text-base md:leading-6" />
                              </p>
                            </div>
                          </div>
                          <div className="relative bg-no-repeat bg-cover box-border caret-transparent flex max-w-none min-h-[auto] w-full bg-center mx-0 p-2.5 md:max-w-full md:min-h-px md:w-6/12 md:mx-auto">
                            <div className="relative box-border caret-transparent w-full">
                              <p className="text-white text-[15px] font-medium box-border caret-transparent leading-[22.5px] text-center w-full my-0 font-lato md:text-base md:leading-6 md:my-2.5">
                                <a
                                  href="/locations/airdrie-funeral-home"
                                  className="text-stone-600 text-[15px] font-semibold box-border caret-transparent leading-[normal] md:text-base hover:text-lime-700 hover:border-lime-700"
                                >
                                  <div className="text-white text-[15px] box-border caret-transparent md:text-base">
                                    Airdrie Funeral Home
                                  </div>
                                </a>
                                <br className="text-[15px] box-border caret-transparent leading-[22.5px] md:text-base md:leading-6" />
                                <a
                                  href="tel://+14039481100"
                                  className="text-stone-600 text-[15px] font-semibold box-border caret-transparent leading-[normal] md:text-base hover:text-lime-700 hover:border-lime-700"
                                >
                                  <div className="text-white text-[15px] box-border caret-transparent md:text-base">
                                    (403) 948-1100
                                  </div>
                                </a>
                                <br className="text-[15px] box-border caret-transparent leading-[22.5px] md:text-base md:leading-6" />
                                <a
                                  href="https://www.google.com/maps/dir//300+Tower+Ln+Dr+SW,+Airdrie,+AB+T4B+3L8/@51.2898236,-114.0206184,16z/data=!4m6!4m5!1m0!1m2!1m1!1s0x53715f6e916ec49b:0x1888a106e92c825e!3e0"
                                  className="text-stone-600 text-[15px] font-semibold box-border caret-transparent leading-[normal] md:text-base hover:text-lime-700 hover:border-lime-700"
                                >
                                  <div className="text-white text-[15px] font-normal box-border caret-transparent md:text-base">
                                    300 Towerlane Drive, Airdrie
                                  </div>
                                </a>
                                <br className="text-[15px] box-border caret-transparent leading-[22.5px] md:text-base md:leading-6" />
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <LocationColumn
                layout="multi-column"
                locations={[
                  {
                    name: "Crowfoot Chapel",
                    nameUrl: "/locations/crowfoot-chapel",
                    phone: "(403) 241-0044",
                    phoneUrl: "tel://+14032410044",
                    address: "82 Crowfoot Circle NW, Calgary",
                    addressUrl:
                      "https://www.google.com/maps/dir//mcinnis+and+holloway+calgary/@51.1224945,-114.2217145,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x53716918cfa09e57:0x2fcf7bec6e06143a!2m2!1d-114.2062641!2d51.1234452?entry=ttu",
                    columnClass:
                      "relative bg-no-repeat bg-cover box-border caret-transparent flex max-w-none min-h-[auto] w-full bg-center mx-0 p-2.5 md:max-w-full md:min-h-px md:w-[33.3333%] md:mx-auto",
                  },
                  {
                    name: "Chapel Of The Bells",
                    nameUrl: "/locations/chapel-of-the-bells",
                    phone: "(403) 276-2296",
                    phoneUrl: "tel://+14032762296",
                    address: "2720 Centre St N, Calgary",
                    addressUrl:
                      "https://www.google.com/maps/dir//Chapel+Of+The+Bells+McInnis+&+Holloway+Funeral+Home+&+Cremation+Services,+2720+Centre+St+N,+Calgary,+AB+T2E+2V6/@51.0942126,-114.0436497,12z/data=!4m6!4m5!1m0!1m2!1m1!1s0x5371656ffab02c87:0x904d64582d4fc45e!3e0",
                    columnClass:
                      "relative bg-no-repeat bg-cover box-border caret-transparent flex max-w-none min-h-[auto] w-full bg-center mx-0 p-2.5 md:max-w-full md:min-h-px md:w-[33.3333%] md:mx-auto",
                  },
                  {
                    name: "Eastside Memorial Chapel",
                    nameUrl: "/locations/eastside-memorial-chapel",
                    phone: "(403) 248-8585",
                    phoneUrl: "tel://+14032488585",
                    address: "5388 Memorial Dr NE, Calgary",
                    addressUrl:
                      "https://www.google.com/maps/dir//mcinnis+and+holloway+calgary/@51.1224945,-114.2217145,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x53716918cfa09e57:0x2fcf7bec6e06143a!2m2!1d-114.2062641!2d51.1234452?entry=ttu",
                    columnClass:
                      "relative bg-no-repeat bg-cover box-border caret-transparent flex max-w-none min-h-[auto] w-full bg-center mx-0 p-2.5 md:max-w-full md:min-h-px md:w-[33.3333%] md:mx-auto",
                  },
                  {
                    name: "Heritage Funeral Home",
                    nameUrl: "/locations/heritage",
                    phone: "(403) 299-0100",
                    phoneUrl: "tel://+14032990100",
                    address: "1708-16th Avenue NW, Calgary",
                    addressUrl:
                      "https://www.google.com/maps/dir//Chapel+Of+The+Bells+McInnis+&+Holloway+Funeral+Home+&+Cremation+Services,+2720+Centre+St+N,+Calgary,+AB+T2E+2V6/@51.0942126,-114.0436497,12z/data=!4m6!4m5!1m0!1m2!1m1!1s0x5371656ffab02c87:0x904d64582d4fc45e!3e0",
                    columnClass:
                      "relative bg-no-repeat bg-cover box-border caret-transparent flex max-w-none min-h-[auto] w-full bg-center mr-0 p-2.5 md:max-w-full md:min-h-px md:w-6/12 md:mr-auto md:pl-0",
                  },
                  {
                    name: "Calgary Crematorium",
                    nameUrl: "/locations/calgary-crematorium",
                    phone: "(403) 299-0111",
                    phoneUrl: "tel://+14032990111",
                    address: "3219 4th Street NW, Calgary",
                    addressUrl:
                      "https://www.google.com/maps/dir//Calgary+Crematorium+&+Funeral+Services,+3219+4+St+NW,+Calgary,+AB+T2K+0C3,+Canada/@51.0858192,-114.0787678,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x5371657bd3098109:0x46f533992073dbea!2m2!1d-114.0739067!2d51.0858079?hl=en&entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
                    columnClass:
                      "relative bg-no-repeat bg-cover box-border caret-transparent flex max-w-none min-h-[auto] w-full bg-center mx-0 p-2.5 md:max-w-full md:min-h-px md:w-6/12 md:mx-auto",
                  },
                ]}
              />
            </div>
          </div>
          <div className="relative bg-no-repeat bg-cover box-border caret-transparent flex max-w-none min-h-[auto] w-full bg-center mx-0 my-[15px] md:max-w-full md:min-h-px md:w-[16.6667%] md:mx-auto md:my-0">
            <div className="relative box-border caret-transparent w-full">
              <a
                href="/"
                className="text-blue-700 box-border caret-transparent block leading-[normal] max-w-full w-[200px] overflow-hidden mx-auto my-[15px] md:w-[275px] md:my-[35px]"
              >
                <div className="box-border caret-transparent w-full overflow-hidden">
                  <img
                    src="https://c.animaapp.com/mj3qzcubLRevsO/assets/0bdeceb3-4505-4a8b-b701-ea9f4f412668.webp"
                    alt="McInnis & Holloway Funeral Home"
                    title="McInnis & Holloway Funeral Home"
                    className="aspect-[auto_200_/_103] box-border caret-transparent inline-block max-w-full object-cover w-full md:aspect-[auto_212_/_108]"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

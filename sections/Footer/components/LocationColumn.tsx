export type LocationColumnProps = {
  layout: string;
  locations: Array<{
    name: string;
    nameUrl: string;
    phone: string;
    phoneUrl: string;
    address: string;
    addressUrl: string;
    columnClass: string;
  }>;
};

export const LocationColumn = (props: LocationColumnProps) => {
  if (props.layout === "single-column") {
    return (
      <div className="relative box-border caret-transparent w-full bg-no-repeat bg-cover flex max-w-none min-h-[auto] bg-center ml-0 px-2.5 md:max-w-full md:min-h-px md:w-[58.3333%] md:ml-auto md:px-0">
        <div className="relative box-border caret-transparent w-full">
          <div className="relative box-border caret-transparent w-full">
            <div className="box-border caret-transparent flex flex-wrap w-full md:flex-nowrap">
              {props.locations.map((location, index) => (
                <div key={index} className={location.columnClass}>
                  <div className="relative box-border caret-transparent w-full">
                    <p className="text-white text-[15px] font-medium box-border caret-transparent leading-[22.5px] text-center w-full my-0 font-lato md:text-base md:leading-6 md:my-2.5">
                      <a
                        href={location.nameUrl}
                        className="text-stone-600 text-[15px] font-semibold box-border caret-transparent leading-[normal] md:text-base hover:text-lime-700 hover:border-lime-700"
                      >
                        <div className="text-white text-[15px] box-border caret-transparent md:text-base">
                          {location.name}
                          <br className="text-[15px] box-border caret-transparent md:text-base" />
                        </div>
                      </a>
                      <a
                        href={location.phoneUrl}
                        className="text-stone-600 text-[15px] font-semibold box-border caret-transparent leading-[normal] md:text-base hover:text-lime-700 hover:border-lime-700"
                      >
                        <div className="text-white text-[15px] box-border caret-transparent md:text-base">
                          {location.phone}
                        </div>
                      </a>
                      <br className="text-[15px] box-border caret-transparent leading-[22.5px] md:text-base md:leading-6" />
                      <a
                        href={location.addressUrl}
                        className="text-stone-600 text-[15px] font-semibold box-border caret-transparent leading-[normal] md:text-base hover:text-lime-700 hover:border-lime-700"
                      >
                        <div className="text-white text-[15px] font-normal box-border caret-transparent md:text-base">
                          {location.address}
                        </div>
                      </a>
                      <br className="text-[15px] box-border caret-transparent leading-[22.5px] md:text-base md:leading-6" />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative box-border caret-transparent w-full">
      <div className="box-border caret-transparent flex flex-wrap w-full md:flex-nowrap">
        <div className="relative box-border caret-transparent w-full bg-no-repeat bg-cover flex max-w-none min-h-[auto] bg-center ml-0 px-2.5 md:max-w-full md:min-h-px md:w-[58.3333%] md:ml-auto md:px-0">
          <div className="relative box-border caret-transparent w-full">
            <div className="relative box-border caret-transparent w-full">
              <div className="box-border caret-transparent flex flex-wrap w-full md:flex-nowrap">
                {props.locations.slice(0, 3).map((location, index) => (
                  <div key={index} className={location.columnClass}>
                    <div className="relative box-border caret-transparent w-full">
                      <p className="text-white text-[15px] font-medium box-border caret-transparent leading-[22.5px] text-center w-full my-0 font-lato md:text-base md:leading-6 md:my-2.5">
                        <a
                          href={location.nameUrl}
                          className="text-stone-600 text-[15px] font-semibold box-border caret-transparent leading-[normal] md:text-base hover:text-lime-700 hover:border-lime-700"
                        >
                          <div className="text-white text-[15px] box-border caret-transparent md:text-base">
                            {location.name}
                            <br className="text-[15px] box-border caret-transparent md:text-base" />
                          </div>
                        </a>
                        <a
                          href={location.phoneUrl}
                          className="text-stone-600 text-[15px] font-semibold box-border caret-transparent leading-[normal] md:text-base hover:text-lime-700 hover:border-lime-700"
                        >
                          <div className="text-white text-[15px] box-border caret-transparent md:text-base">
                            {location.phone}
                          </div>
                        </a>
                        <br className="text-[15px] box-border caret-transparent leading-[22.5px] md:text-base md:leading-6" />
                        <a
                          href={location.addressUrl}
                          className="text-stone-600 text-[15px] font-semibold box-border caret-transparent leading-[normal] md:text-base hover:text-lime-700 hover:border-lime-700"
                        >
                          <div className="text-white text-[15px] font-normal box-border caret-transparent md:text-base">
                            {location.address}
                          </div>
                        </a>
                        <br className="text-[15px] box-border caret-transparent leading-[22.5px] md:text-base md:leading-6" />
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="relative bg-no-repeat bg-cover box-border caret-transparent flex max-w-none min-h-[auto] w-full bg-center mr-0 px-2.5 md:max-w-full md:min-h-px md:w-[41.6667%] md:mr-auto md:px-0">
          <div className="relative box-border caret-transparent w-full">
            <div className="relative box-border caret-transparent w-full">
              <div className="box-border caret-transparent flex flex-wrap w-full md:flex-nowrap">
                {props.locations.slice(3).map((location, index) => (
                  <div key={index} className={location.columnClass}>
                    <div className="relative box-border caret-transparent w-full">
                      <p className="text-white text-[15px] font-medium box-border caret-transparent leading-[22.5px] text-center w-full my-0 font-lato md:text-base md:leading-6 md:my-2.5">
                        <a
                          href={location.nameUrl}
                          className="text-stone-600 text-[15px] font-semibold box-border caret-transparent leading-[normal] md:text-base hover:text-lime-700 hover:border-lime-700"
                        >
                          <div className="text-white text-[15px] box-border caret-transparent md:text-base">
                            {location.name}
                            <br className="text-[15px] box-border caret-transparent md:text-base" />
                          </div>
                        </a>
                        <a
                          href={location.phoneUrl}
                          className="text-stone-600 text-[15px] font-semibold box-border caret-transparent leading-[normal] md:text-base hover:text-lime-700 hover:border-lime-700"
                        >
                          <div className="text-white text-[15px] box-border caret-transparent md:text-base">
                            {location.phone}
                            <br className="text-[15px] box-border caret-transparent md:text-base" />
                          </div>
                        </a>
                        <a
                          href={location.addressUrl}
                          className="text-stone-600 text-[15px] font-semibold box-border caret-transparent leading-[normal] md:text-base hover:text-lime-700 hover:border-lime-700"
                        >
                          <div className="text-white text-[15px] font-normal box-border caret-transparent md:text-base">
                            {location.address}
                          </div>
                        </a>
                        <br className="text-[15px] box-border caret-transparent leading-[22.5px] md:text-base md:leading-6" />
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

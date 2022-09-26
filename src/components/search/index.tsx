import { MagnifyingGlass } from "phosphor-react";

export function Search() {
  return (
    <div className="banner-search banner-overlay-search flex">
      <div className="flex items-center justify-center flex-col lg:flex-row lg:container lg:mx-auto lg:justify-between">
        <h2 className="font-bold text-3xl lg:max-w-[265px]">
          Select your Pokémon
        </h2>

        <div className="w-full lg:w-[403px] flex mt-20 lg:mt-0 relative px-5">
          <button className="absolute top-2 left-8 w-[42px] h-[42px] bg-blue-5 rounded-full flex items-center justify-center">
            <MagnifyingGlass size={22} color="#3E75C3" />
          </button>
          <input
            className="w-full h-14 rounded-full px-16 lg:w-[403px] lg:h-[56px]"
            type="text"
            placeholder="Search name or code"
          />
        </div>
      </div>
    </div>
  )
}
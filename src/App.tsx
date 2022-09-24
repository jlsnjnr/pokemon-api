import { Banner } from "./components/banner"
import { MagnifyingGlass } from 'phosphor-react';

import pokebolaIcon from '/icon.png';
import pokemon from '/pokemon.png';
import typeIcon from '/type.png';

import allIcon from '/all-icon.png';
import ghostIcon from '/ghost-icon.png';
import stoneIcon from '/stone-icon.png';
import plantsIcon from '/plants-icon.png';

function App() {
  return (
    <>
      <Banner />

      {/* search component  */}
      <div className="banner-search banner-overlay-search flex">
        <div className="flex items-center justify-center flex-col lg:flex-row lg:container lg:mx-auto lg:justify-between" >
          <h2 className="font-bold text-3xl lg:max-w-[265px]">Select your Pokémon</h2>

          <div className="w-full lg:w-[403px] flex mt-20 lg:mt-0 relative px-5">
            <button className="absolute top-2 left-8 w-[42px] h-[42px] bg-blue-5 rounded-full flex items-center justify-center"><MagnifyingGlass size={22} color='#3E75C3' /></button>
            <input className="w-full h-14 rounded-full px-16 lg:w-[403px] lg:h-[56px]" type="text" placeholder="Search name or code" />
          </div>
        </div>
      </div>

      {/* results */}
      <div className="lg:container lg:mx-auto">
        <div className="w-full flex justify-center">

          <aside className="w-[20%] border-r border-r-1 border-[#EFF3F6] hidden lg:flex items-start">
            <div className="my-12">
              <nav>
                <ul className="flex flex-col gap-6 text-[#ACB9C1] font-[500]">
                  <li className="flex items-center gap-6 text-[#3E75C3] font-[600]">
                    <img className="w-[18px] h-[18px] object-contain" src={allIcon} alt="icone all" />
                    All
                  </li>

                  <li className="flex items-center gap-6">
                    <img className="w-[18px] h-[18px] object-contain" src={ghostIcon} alt="icone all" />
                    Ghost
                  </li>

                  <li className="flex items-center gap-6">
                    <img className="w-[18px] h-[18px] object-contain" src={stoneIcon} alt="icone all" />
                    Stone
                  </li>

                  <li className="flex items-center gap-6">
                    <img className="w-[18px] h-[18px] object-contain" src={plantsIcon} alt="icone all" />
                    Plants
                  </li>
                </ul>
              </nav>
            </div>
          </aside>

          {/* results right */}
          <div className="w-full lg:w-[80%]">
            <div className="flex items-center gap-[2px] mx-[10%] lg:mx-[3%] my-12">
              <img src={pokebolaIcon} alt="icone pokebola" />
              <span className="font-bold">150 Pokémons</span>
            </div>

            {/* category */}
            <div className="px-8 my-6 lg:hidden">
              <select className="w-full h-[56px] border border-[#A0AFBA] rounded-full px-4 mx-auto">
                <option className="px-4">Show: All</option>
              </select>
            </div>

            {/* pokémons */}

            <div className="lg:grid lg:grid-cols-3 lg:w-full lg:gap-2">

              <div className="rounded-xl flex flex-col box-shadow-content mx-[10%] py-8 my-4">
                <div className='mx-auto bg-[#D6EBDC] w-[165px] h-[165px] rounded-full flex items-center justify-center '>
                  <img src={pokemon} alt="foto do pokemon" />
                </div>

                <div className='mx-[12%] mt-6'>
                  <span className="text-left text-[#7A7D80] font-[500]">#001</span>
                </div>

                <div className="flex items-center justify-between mx-[12%] mt-2">
                  <h3>Bulbasaur</h3>
                  <img src={typeIcon} alt="tipo do pokemon" />
                </div>
              </div>

              <div className="rounded-xl flex flex-col box-shadow-content mx-[10%] py-8 my-4">
                <div className='mx-auto bg-[#D6EBDC] w-[165px] h-[165px] rounded-full flex items-center justify-center '>
                  <img src={pokemon} alt="foto do pokemon" />
                </div>

                <div className='mx-[12%] mt-6'>
                  <span className="text-left text-[#7A7D80] font-[500]">#001</span>
                </div>

                <div className="flex items-center justify-between mx-[12%] mt-2">
                  <h3>Bulbasaur</h3>
                  <img src={typeIcon} alt="tipo do pokemon" />
                </div>

              </div>

              <div className="rounded-xl flex flex-col box-shadow-content mx-[10%] py-8 my-4">
                <div className='mx-auto bg-[#D6EBDC] w-[165px] h-[165px] rounded-full flex items-center justify-center '>
                  <img src={pokemon} alt="foto do pokemon" />
                </div>

                <div className='mx-[12%] mt-6'>
                  <span className="text-left text-[#7A7D80] font-[500]">#001</span>
                </div>

                <div className="flex items-center justify-between mx-[12%] mt-2">
                  <h3>Bulbasaur</h3>
                  <img src={typeIcon} alt="tipo do pokemon" />
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* footer */}
      <footer className="bg-[#3F5DB3] text-white px-4 py-12 mt-12">
        <p className="text-center">Consumindo e exibindo dados de uma API</p>
      </footer>
    </>
  )
}

export default App

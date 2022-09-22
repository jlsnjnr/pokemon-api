import { Banner } from "./components/banner"
import { MagnifyingGlass } from 'phosphor-react';

function App() {
  return (
    <>
      <Banner />

      <div className="banner-search banner-overlay-search flex items-center justify-center flex-col">
        <h2 className="font-bold text-3xl">Select your Pokémon</h2>
        <div className="w-full flex mt-20 relative px-5">
          <button className="absolute top-2 left-8 w-[42px] h-[42px] bg-blue-5 rounded-full flex items-center justify-center"><MagnifyingGlass size={22} color='#3E75C3' /></button>
          <input className="w-full h-14 rounded-full px-16" type="text" placeholder="Search name or code" />
        </div>
      </div>
    </>
  )
}

export default App

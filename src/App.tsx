import { Banner } from "./components/banner";
import { Footer } from "./components/footer";
import { Search } from "./components/search";
import { NavCategory } from "./components/results/NavCategory";
import { SelectCategory } from "./components/results/SelectCategory";
import { Results } from "./components/results/Results";

import pokebolaIcon from "/icon.png";

function App() {
  return (
    <>
      <Banner />

      {/* search component  */}
      <Search />

      {/* results */}
      <div className="lg:container lg:mx-auto">
        <div className="w-full flex justify-center">

          {/* sidebar */}
          <aside className="w-[20%] border-r border-r-1 border-[#EFF3F6] hidden lg:flex items-start">
            <div className="my-12">

              <NavCategory />

            </div>
          </aside>

          {/* results right */}
          <div className="w-full lg:w-[80%]">
            <div className="flex items-center gap-[2px] mx-[10%] lg:mx-[3%] my-12">
              <img src={pokebolaIcon} alt="icone pokebola" />
              <span className="font-bold">150 Pokémons</span>
            </div>

            {/* category */}
            <SelectCategory />

            {/* pokémons */}
            <div className="lg:grid lg:grid-cols-3 lg:w-full lg:gap-2">
              <Results />
            </div>

          </div>

        </div>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
}

export default App;

import { useState, useEffect, FormEvent } from 'react';

// components
import { Banner } from "./components/banner";
import { Footer } from "./components/footer";
import { Search } from "./components/search";
import { NavCategory } from "./components/results/NavCategory";
import { SelectCategory } from "./components/results/SelectCategory";
import { Results } from "./components/results/Results";

// icon
import pokebolaIcon from "/icon.png";

// baseURL
import { api, apiSingle } from "./services/api";
import { Pokemon, Response } from './types/Pokemon';
import { MagnifyingGlass } from 'phosphor-react';

interface IPokemons {
  count: number;
  results: any;
}

function App() {
  // @ts-ignore
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("");

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (search === '') {
      return;
    }

    apiSingle.get(`${search}`)
      .then((response) => {
        // @ts-ignore
        setPokemons(response.data)
      })
      .catch((err) => {
        console.error('Ops! deu erro :( ' + err)
      })
  }

  useEffect(() => {
    api
      .get<Response>('/pokemon/')
      .then((response) => {
        setPokemons(response.data.results)
        setLoading(false);
      })
      .catch((err) => {
        console.error('Ops! deu erro :( ' + err)
      })

  }, [])

  return (
    <>
      <Banner />

      {/* search component  */}

      {/* <Search /> */}

      <div className="banner-search banner-overlay-search flex">
        <div className="flex items-center justify-center flex-col lg:flex-row lg:container lg:mx-auto lg:justify-between">
          <h2 className="font-bold text-3xl lg:max-w-[265px]">
            Select your Pokémon
          </h2>

          <form onSubmit={handleSearch} className="w-full lg:w-[403px] flex mt-20 lg:mt-0 relative px-5">
            <button type="submit" className="absolute top-2 left-8 w-[42px] h-[42px] bg-blue-5 rounded-full flex items-center justify-center">
              <MagnifyingGlass size={22} color="#3E75C3" />
            </button>

            <input
              className="w-full h-14 rounded-full px-16 lg:w-[403px] lg:h-[56px]"
              type="text"
              placeholder="Search name or code"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />

          </form>
        </div>
      </div>

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
            <div className="flex items-center gap-[12px] mx-[10%] lg:mx-[3%] my-12">
              <img src={pokebolaIcon} alt="icone pokebola" />
              {/* 
              {loading === true && (<h1>carregando...</h1>)}*/}

              {loading === false && (
                <span className="font-bold text-[#4D5053]">
                  {pokemons.length} Pokémons
                </span>
              )}

            </div>

            {/* category */}
            <SelectCategory />

            {/* pokémons */}
            <div className="lg:grid lg:grid-cols-3 lg:w-full lg:gap-2">
              {/* {loading === true && (<h1>carregando...</h1>)}
  
              {loading === false && (<Results allPokemons={allPokemons} />)} */}
              {pokemons.length >= 2 && pokemons.map((pokemon) => (
                <div key={pokemon.name}>
                  <Results url={pokemon.url} />
                </div>
              ))}

              {pokemons && (
                <div>
                  {/* @ts-ignore */}
                  <h1>{pokemons.name}</h1>
                  {/* @ts-ignore */}
                  <h1>{pokemons.weight}</h1>
                </div>
              )}
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

import pokemon from "/pokemon.png";
import typeIcon from "/type.png";

export function Results() {
  return (
    <>
      <div className="rounded-xl flex flex-col box-shadow-content mx-[10%] py-8 my-4">
        <div className="mx-auto bg-[#D6EBDC] w-[165px] h-[165px] rounded-full flex items-center justify-center ">
          <img src={pokemon} alt="foto do pokemon" />
        </div>

        <div className="mx-[12%] mt-6">
          <span className="text-left text-[#7A7D80] font-[500]">
            #001
          </span>
        </div>

        <div className="flex items-center justify-between mx-[12%] mt-2">
          <h3>Bulbasaur</h3>
          <img src={typeIcon} alt="tipo do pokemon" />
        </div>
      </div>

      <div className="rounded-xl flex flex-col box-shadow-content mx-[10%] py-8 my-4">
        <div className="mx-auto bg-[#D6EBDC] w-[165px] h-[165px] rounded-full flex items-center justify-center ">
          <img src={pokemon} alt="foto do pokemon" />
        </div>

        <div className="mx-[12%] mt-6">
          <span className="text-left text-[#7A7D80] font-[500]">
            #001
          </span>
        </div>

        <div className="flex items-center justify-between mx-[12%] mt-2">
          <h3>Bulbasaur</h3>
          <img src={typeIcon} alt="tipo do pokemon" />
        </div>
      </div>

      <div className="rounded-xl flex flex-col box-shadow-content mx-[10%] py-8 my-4">
        <div className="mx-auto bg-[#D6EBDC] w-[165px] h-[165px] rounded-full flex items-center justify-center ">
          <img src={pokemon} alt="foto do pokemon" />
        </div>

        <div className="mx-[12%] mt-6">
          <span className="text-left text-[#7A7D80] font-[500]">
            #001
          </span>
        </div>

        <div className="flex items-center justify-between mx-[12%] mt-2">
          <h3>Bulbasaur</h3>
          <img src={typeIcon} alt="tipo do pokemon" />
        </div>
      </div>
    </>
  )
}
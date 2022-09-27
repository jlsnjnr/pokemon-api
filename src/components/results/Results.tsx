import { usePokemon } from "../../hooks/usePokemon"

type Props = {
  url: string
}

export function Results({ url }: Props) {
  const { pokemon } = usePokemon({ url })

  if (!pokemon) {
    return <strong>Loading...</strong>
  }

  function format(value: number) {
    return `#${value.toString().padStart(4, '0')}`
  }

  return (
    <div className="rounded-xl flex flex-col box-shadow-content mx-[10%] py-8 my-4">

      <div className="mx-auto bg-[#D6EBDC] w-[165px] h-[165px] rounded-full flex items-center justify-center ">
        {/* @ts-ignore */}
        <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
      </div>

      <div className="mx-[12%] mt-6">
        <span className="text-left text-[#7A7D80] font-[500]">
          {format(pokemon.id)}
        </span>
      </div>

      <div className="flex items-center justify-between mx-[12%] mt-2">
        <h3>{pokemon.name}</h3>
      </div>
    </div>
  )
}
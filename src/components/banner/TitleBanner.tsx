interface ColorProps {
  color: boolean;
}

export function TitleBanner({ color }: ColorProps) {
  return (
    <div className="z-10 text-center text-white flex flex-col gap-6 mx-auto items-center">
      <h2 className="z-10  text-5xl font-bold max-w-[350px] lg:text-6xl lg:max-w-full">
        {color === false ? "Who is that Pokémon?" : "Catch them all!"}
      </h2>
      <p className="z-10 text-lg max-w-[350px] lg:max-w-full">
        The perfect guide for those who want to hunt Pokémons around the world
      </p>
    </div>
  )
}
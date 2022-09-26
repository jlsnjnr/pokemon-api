import plant from '/plant.png';
import fire from '/fire.png';
import ice from '/ice.png';
import pokeIcon from '/pokeicon.png';
import wing from '/wing.png';
import water from '/water.png';
import ghost from '/ghost.png';
import rain from '/rain.png';

import plantBlue from '/plant-blue.png';
import fireBlue from '/fire-blue.png';
import iceBlue from '/ice-blue.png';
import pokeIconBlue from '/pokeicon-blue.png';
import wingBlue from '/wing-blue.png';
import waterBlue from '/water-blue.png';
import ghostBlue from '/ghost-blue.png';
import rainBlue from '/rain-blue.png';

interface ColorProps {
  color: boolean;
}

export function Icons({ color }: ColorProps) {
  console.log(color)
  return (
    <div className="relative">
      {/* desktop and mobile */}
      <img className="z-1 absolute top-[250px] left-4 lg:left-[73%]" src={color === false ? plant : plantBlue} alt="plant icon" />

      <img className="z-1 absolute top-[50px] lg:top-[35px] left-[50%] lg:left-[85%]"
        src={color === false ? fire : fireBlue} alt="fire icon" />

      <img className="z-1 absolute top-[150px] right-4 lg:right-[5%]"
        src={color === false ? ice : iceBlue} alt="ice icon" />

      <img className="z-1 absolute top-[400px] right-[15%] hidden lg:block"
        src={color === false ? pokeIcon : pokeIconBlue} alt="poke icon" />
      {/*  */}

      <img className="z-1 hidden lg:block absolute top-[-80px] left-[30%]"
        src={color === false ? wing : wingBlue} alt="wing icon" />
      <img className="z-1 hidden lg:block absolute top-[240px] left-[5%]"
        src={color === false ? water : waterBlue} alt="wather icon" />
      <img className="z-1 hidden lg:block absolute top-[380px] left-[15%]"
        src={color === false ? ghost : ghostBlue} alt="ghost icon" />

      <img className="z-1 hidden lg:block absolute top-[270px] left-[30%]"
        src={color === false ? rain : rainBlue} alt="rain icon" />
    </div>
  )
}
import plant from '/plant.png';
import fire from '/fire.png';
import ice from '/ice.png';

export function Icons() {
  return (
    <div className="relative">
      <img className="z-1 absolute top-[250px] left-4" src={plant} alt="plant icon" />

      <img className="z-1 absolute top-[50px] left-[50%]" src={fire} alt="fire icon" />

      <img className="z-1 absolute top-[150px] right-4" src={ice} alt="ice icon" />
    </div>
  )
}
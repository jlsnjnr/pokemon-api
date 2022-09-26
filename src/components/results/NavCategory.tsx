import allIcon from "/all-icon.png";
import ghostIcon from "/ghost-icon.png";
import stoneIcon from "/stone-icon.png";
import plantsIcon from "/plants-icon.png";

export function NavCategory() {
  return (
    <nav>
      <ul className="flex flex-col gap-6 text-[#ACB9C1] font-[500]">
        <li className="flex items-center gap-6 text-[#3E75C3] font-[600]">
          <img
            className="w-[18px] h-[18px] object-contain"
            src={allIcon}
            alt="icone all"
          />
          All
        </li>

        <li className="flex items-center gap-6">
          <img
            className="w-[18px] h-[18px] object-contain"
            src={ghostIcon}
            alt="icone all"
          />
          Ghost
        </li>

        <li className="flex items-center gap-6">
          <img
            className="w-[18px] h-[18px] object-contain"
            src={stoneIcon}
            alt="icone all"
          />
          Stone
        </li>

        <li className="flex items-center gap-6">
          <img
            className="w-[18px] h-[18px] object-contain"
            src={plantsIcon}
            alt="icone all"
          />
          Plants
        </li>
      </ul>
    </nav>
  )
}
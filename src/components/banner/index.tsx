import pokered from "/poke-red.png";
import pokeblue from "/poke-blue.png";
import group from "/group.png";
import groupBlue from "/group-blue.png";

import groupDesktop from "/vector-desktop.png";
import groupDesktopBlue from "/vector-desktop-blue.png";

import { Header } from "../header";
import { TitleBanner } from "./TitleBanner";
import { Icons } from "./Icons";
import { useState } from "react";

export function Banner() {
  const [color, setColor] = useState(false);

  function changeColor() {
    if (color === false) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  return (
    <div className={color === false ? "banner" : "banner-blue"} onClick={changeColor}>
      <div className={color === false ? "banner-overlay" : "banner-overlay-blue"}>
        <Header />

        <section className="relative">
          <Icons color={color} />

          {/* pokedex */}
          <div className=" w-32 h-9 bg-white flex items-center justify-center mx-auto rounded-full gap-1 mt-10 mb-6">
            <div className="w-6 h-6 rounded-full bg-red-5">🎒</div>
            <span className={color === false ? "text-red-500 font-bold" : "text-[#3F67BA] font-bold"}>pokedex</span>
          </div>

          {/* datails */}
          <TitleBanner color={color} />

          <div className="relative image">
            <img
              className="relative -bottom-7 lg:w-[500px] lg:-bottom-32 mx-auto"
              src={color === false ? pokered : pokeblue}
              alt="pokebola"
            />
          </div>
        </section>

        <img
          className="absolute w-full bottom-0 z-1 lg:hidden"
          src={color === false ? group : groupBlue}
          alt="group vector"
        />

        <div className="relative mx-auto flex items-center justify-center">
          <img
            className={color === false ? "lg: absolute bottom-[210px] lg:flex lg:items-center lg:justify-center lg:mx-auto lg:z-1 hidden" : "lg: absolute bottom-[85px] lg:flex lg:items-center lg:justify-center lg:mx-auto lg:z-1 hidden"}
            src={color === false ? groupDesktop : groupDesktopBlue}
            alt="group vector"
          />
        </div>
      </div>
    </div>
  );
}

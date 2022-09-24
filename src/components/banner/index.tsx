import pokered from "/poke-red.png";
import group from "/group.png";
import groupDesktop from "/vector-desktop.png";

import { Header } from "../header";
import { TitleBanner } from "./TitleBanner";
import { Icons } from "./Icons";

export function Banner() {
  return (
    <div className="banner">
      <div className="banner-overlay relative">
        <Header />

        <section className="relative">
          <Icons />

          {/* pokedex */}
          <div className=" w-32 h-9 bg-white flex items-center justify-center mx-auto rounded-full gap-1 mt-10 mb-6">
            <div className="w-6 h-6 rounded-full bg-red-5">🎒</div>
            <span className="text-red-500 font-bold">pokedex</span>
          </div>

          {/* datails */}
          <TitleBanner />

          <div className="relative">
            <img
              className="relative -bottom-7 z-10 lg:max-w-[400px] lg:-bottom-32 mx-auto"
              src={pokered}
              alt="pokebola"
            />
          </div>
        </section>

        <img
          className="absolute w-full bottom-0 z-1 lg:hidden"
          src={group}
          alt="group vector"
        />

        <div className="relative mx-auto flex items-center justify-center">
          <img
            className="
            lg:absolute
            bottom-20
            lg:flex
            lg:items-center
            lg:justify-center
            lg:mx-auto
            lg:z-1
            hidden
          "
            src={groupDesktop}
            alt="group vector"
          />
        </div>
      </div>
    </div>
  );
}

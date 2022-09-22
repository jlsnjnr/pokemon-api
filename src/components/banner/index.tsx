import pokered from './../../../public/poke-red.png';
import group from './../../../public/group.png';

import { Header } from '../header';
import { TitleBanner } from './TitleBanner';
import { Icons } from './Icons';

export function Banner() {
  return (
    <div className="banner">
      <div className="banner-overlay">

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
            <img className="relative -bottom-7 z-10" src={pokered} alt="pokebola" />
          </div>
        </section>

        <img className="absolute w-full bottom-0 z-1" src={group} alt="group vector" />
      </div>
    </div>
  );
}
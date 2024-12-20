import React from "react";
import ButtonToTop from "/src/components/Blocks/ButtonToTop.jsx";
import Navigation from "/src/components/Blocks/Navigation.jsx";
import Sources from "../Blocks/Sources.jsx";
import Favourite from "../Blocks/Favourite.jsx";
import Genres from "../Blocks/Genres.jsx";
import History from "../Blocks/History.jsx";
import Greeting from "../Blocks/Greeting.jsx";
import Features from "../Blocks/Features.jsx";
import Definition from "../Blocks/Definition.jsx";
import {
    galleryForDunhua,
    photosForGreetingBlockDunhua,
    featuresOfDunhua,
    historyOfDunhua,
    genresOfDunhua,
    sourcesOfDunhua, definition
} from "../../data.jsx"

export default function Dunhua() {
  return (
    <div className="bodyForPagesAnimeDunhuaManhwa">
      <Greeting nameOfPage="Дунхуа" photos={photosForGreetingBlockDunhua} />
      <Navigation nameOfPage="дунхуа" />
      <main>
        <Definition name = {definition[2].dunhua}/>
        <Features featuresOfPage={featuresOfDunhua} />
        <History historyOfPage={historyOfDunhua} />
        <Genres genresOfPage={genresOfDunhua} />
        <Favourite name="дунхуа" galleryForPage={galleryForDunhua} />
        <Sources sources={sourcesOfDunhua} />
      </main>
      <ButtonToTop />
    </div>
  );
}

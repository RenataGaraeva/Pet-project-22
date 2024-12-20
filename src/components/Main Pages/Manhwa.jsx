import React from "react";
import ButtonToTop from "/src/components/Blocks/ButtonToTop.jsx";
import Sources from "../Blocks/Sources.jsx";
import Navigation from "../Blocks/Navigation.jsx";
import Favourite from "../Blocks/Favourite.jsx";
import Greeting from "../Blocks/Greeting.jsx";
import Features from "../Blocks/Features.jsx";
import History from "../Blocks/History.jsx";
import Genres from "../Blocks/Genres.jsx";
import Definition from "../Blocks/Definition.jsx";
import {
    sourcesOfManhwa,
    photosForGreetingBlockManhwa,
    featuresOfManhwa,
    historyOfManhwa,
    genresOfManhwa,
    galleryForManhwa, definition
} from "../../data.jsx"

export default function Manhwa() {
  return (
    <div className="bodyForPagesAnimeDunhuaManhwa">
      <Greeting nameOfPage="Манхва" photos={photosForGreetingBlockManhwa} />
      <Navigation nameOfPage="манхвы" />
      <main>
      <Definition name = {definition[1].manhwa}/>
        <Features featuresOfPage={featuresOfManhwa} />
        <History historyOfPage={historyOfManhwa} />
        <Genres genresOfPage={genresOfManhwa} />
        <Favourite name="манхвы" galleryForPage={galleryForManhwa} />
        <Sources sources={sourcesOfManhwa} />
      </main>
      <ButtonToTop />
    </div>
  );
}

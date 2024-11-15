import React from "react";
import ButtonToTop from "/src/components/Blocks/ButtonToTop.jsx";
import Sources from "../Blocks/Sources.jsx";
import Navigation from "../Blocks/Navigation.jsx";
import Favourite from "../Blocks/Favourite.jsx";
import Greeting from "../Blocks/Greeting.jsx";
import Features from "../Blocks/Features.jsx";
import History from "../Blocks/History.jsx";
import Genres from "../Blocks/Genres.jsx";
import {galleryForManhwa, sourcesOfManhwa, photosForGreetingBlockManhwa, featuresOfManhwa, historyOfManhwa, genresOfManhwa} from "src/data.jsx"

export default function Manhwa() {
  return (
    <div className="bodyForPagesAnimeDunhuaManhwa">
      <Greeting nameOfPage="Манхва" photos={photosForGreetingBlockManhwa} />
      <Navigation nameOfPage="манхвы" />
      <main>
        <h3 id="titleWhatIsIt">Что это</h3>
        <p className="textOfTitleWhatIsIt">Манхва - это корейские комиксы.</p>
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

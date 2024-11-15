import React from "react";
import ButtonToTop from "/src/components/Blocks/ButtonToTop.jsx";
import Sources from "/src/components/Blocks/Sources.jsx";
import Navigation from "/src/components/Blocks/Navigation.jsx";
import Greeting from "/src/components/Blocks/Greeting.jsx";
import Features from "../Blocks/Features.jsx";
import History from "../Blocks/History.jsx";
import Genres from "../Blocks/Genres.jsx";
import Favourite from "../Blocks/Favourite.jsx";
import {
    galleryForAnime,
    photosForGreetingBlockAnime,
    featuresOfAnime,
    historyOfAnime,
    genresOfAnime,
    sourcesOfAnime
} from "src/data.jsx"

export default function Anime() {
  return (
    <div className="bodyForPagesAnimeDunhuaManhwa">
      <Greeting nameOfPage="Аниме" photos={photosForGreetingBlockAnime} />
      <Navigation nameOfPage="аниме" />
      <main>
        <h3 id="titleWhatIsIt">Что это</h3>
        <p className="textOfTitleWhatIsIt">Аниме́ — японская мультипликация</p>
        <Features featuresOfPage={featuresOfAnime} />
        <History historyOfPage={historyOfAnime} />
        <Genres genresOfPage={genresOfAnime} />
        <Favourite name="аниме" galleryForPage={galleryForAnime} />
        <Sources sources={sourcesOfAnime} />
      </main>
      <ButtonToTop />
    </div>
  );
}

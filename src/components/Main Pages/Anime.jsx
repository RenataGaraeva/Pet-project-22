import React from "react";
import ButtonToTop from "/src/components/Blocks/ButtonToTop.jsx";
import Sources from "/src/components/Blocks/Sources.jsx";
import Navigation from "/src/components/Blocks/Navigation.jsx";
import Greeting from "/src/components/Blocks/Greeting.jsx";
import Features from "../Blocks/Features.jsx";
import History from "../Blocks/History.jsx";
import Genres from "../Blocks/Genres.jsx";
import Favourite from "../Blocks/Favourite.jsx";
import Definition from "../Blocks/Definition.jsx";
import {
    galleryForAnime,
    photosForGreetingBlockAnime,
    featuresOfAnime,
    historyOfAnime,
    genresOfAnime,
    sourcesOfAnime, definition
} from "../../data.jsx"

export default function Anime() {
  return (
    <div className="bodyForPagesAnimeDunhuaManhwa">
      <Greeting nameOfPage="Аниме" photos={photosForGreetingBlockAnime} />
      <Navigation nameOfPage="аниме" />
      <Definition name = {definition[0].anime}/>
      <Features featuresOfPage={featuresOfAnime} />
      <History historyOfPage={historyOfAnime} />
      <Genres genresOfPage={genresOfAnime} />
      <Favourite name="аниме" galleryForPage={galleryForAnime} />
      <Sources sources={sourcesOfAnime} />
      <ButtonToTop />
    </div>
  );
}

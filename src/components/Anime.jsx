import React, { useState } from 'react';
import ButtonToTop from '/src/components/ButtonToTop.jsx';
import Sources from '/src/components/Sources.jsx'
import Navigation from '/src/components/Navigation.jsx'
import Greeting from '/src/components/Greeting.jsx'
import Features from "./Features.jsx";
import History from "./History.jsx";
import Genres from "./Genres.jsx";
import Favourite from "./Favourite.jsx";

export default function Anime () {
  return (
    <div className = "bodyForPagesAnimeDunhuaManhwa">
     <Greeting nameOfPage="Аниме" photos={photosForGreetingBlockAnime} />
     <Navigation nameOfPage="аниме" />
      <main>
      <h3 id = "titleWhatIsIt">Что это</h3>
      <p className='textOfTitleWhatIsIt'>Аниме́ — японская мультипликация</p>
          <Features featuresOfPage={featuresOfAnime} />
<History historyOfPage={historyOfAnime} />
<Genres genresOfPage = {genresOfAnime} />
          <Favourite name = "аниме" galleryForPage = {galleryForAnime} />
          <Sources sources ={sourcesOfAnime}/>
        </main>
        <ButtonToTop />
    </div>
    )
}
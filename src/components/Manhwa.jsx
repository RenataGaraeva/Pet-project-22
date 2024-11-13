import React, { useState } from 'react';
import ButtonToTop from '/src/components/ButtonToTop.jsx';
import Sources from "./Sources.jsx";
import Navigation from "./Navigation.jsx";
import Favourite from "./Favourite.jsx";
import Greeting from "./Greeting.jsx";
import Features from "./Features.jsx";
import History from "./History.jsx";
import Genres from "./Genres.jsx";

export default function Manhwa () {


  return (
  
    <div className = "bodyForPagesAnimeDunhuaManhwa">
        <Greeting nameOfPage="Манхва" photos={photosForGreetingBlockManhwa} />
        <Navigation nameOfPage="манхвы" />

      <main>
       <h3 id = "titleWhatIsIt">Что это</h3>
      <p className='textOfTitleWhatIsIt'>Манхва - это корейские комиксы.</p>
          <Features featuresOfPage={featuresOfManhwa} />
          <History historyOfPage={historyOfManhwa} />
          <Genres genresOfPage = {genresOfManhwa} />
          <Favourite name = "манхвы" galleryForPage = {galleryForManhwa} />
          <Sources sources ={sourcesOfManhwa}/>
    </main>
    <ButtonToTop />
    </div>
  )
}
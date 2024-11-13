import React, { useState } from 'react';
import ButtonToTop from '/src/components/ButtonToTop.jsx';
import Navigation from "/src/components/Navigation.jsx";
import Sources from "./Sources.jsx";
import Favourite from "./Favourite.jsx";
import Genres from "./Genres.jsx";
import History from "./History.jsx";
import Greeting from "./Greeting.jsx";
import Features from "./Features.jsx";

export default function Dunhua () {

    return (

      <div className = "bodyForPagesAnimeDunhuaManhwa">
          <Greeting nameOfPage="Дунхуа" photos={photosForGreetingBlockDunhua} />
            <Navigation nameOfPage="дунхуа" />
                 <main>
              <h3 id = "titleWhatIsIt">Что это</h3>
      <p className='textOfTitleWhatIsIt'>Дунхуа — китайская анимация.</p>
             <Features featuresOfPage={featuresOfDunhua} />
                   <History historyOfPage={historyOfDunhua} />
             <Genres genresOfPage = {genresOfDunhua} />
             <Favourite name = "дунхуа" galleryForPage = {galleryForDunhua} />
             <Sources sources ={sourcesOfDunhua}/>
    </main>
    <ButtonToTop />
          </div>
  )
}

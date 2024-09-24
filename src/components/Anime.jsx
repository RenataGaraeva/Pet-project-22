import React, { useState } from 'react';
import ButtonToTop from '/src/components/ButtonToTop.jsx';

export default function Anime () {

  const [galleryPhotoItem, nextPhoto] = useState (0);

  const right = function () {

   nextPhoto(galleryPhotoItem + 1)
  }

     const left = function () {
       nextPhoto(galleryPhotoItem - 1)
     }

  return (
    <div className = "bodyForPagesAnimeDunhuaManhwa">
  <h1 className = "nameOfPageAnimeDunhuaManhwa">Аниме</h1>
     
  <p><span className="welcomeSign">Добро пожаловать</span></p>   
    
        <ul className = "containerForThreePhotosOnPage">
<li><img src = "src/components/Photos/anime-style-portrait-traditional-japanese-samurai-character(1).jpg" width = "414" height = "276"/></li>
          <li><img src = "src/components/Photos/anime-style-portrait-traditional-japanese-samurai-character.jpg" width = "305" height = "381" /></li>
            <li><img src = "src/components/Photos/girl-with-backpack-sunset-generative-al.jpg" width = "305" height = "381"/></li>
          </ul>
      
      
      <nav className = "navigation">
         <h2>Содержание:</h2>
    <ul className= "content">
      <li><a href="#titleWhatIsIt">Что это</a></li>
      <li><a href="#titleFeatures">Особенности</a></li>
      <li><a href="#titleHistory">История</a></li>
      <li><a href="#titleGenres">Жанры</a></li>
      <li><a href="#titleFavorites">Мои любимые аниме</a></li>
      <li><a href="#titleSources">Источники</a></li>
    </ul>
        </nav>
      
      <main>
      <h3 id = "titleWhatIsIt">Что это</h3>
      <p className='textOfTitleWhatIsIt'>Аниме́ — японская мультипликация</p>

      <h3 id="titleFeatures">Особенности</h3>

        <ul className = "listOfFeatures">
              <li>
               <h4>Глаза</h4>
      <p>У всех персонажей большие глаза, которые детально прорисованы в отличие от других частей лица.</p>
                         </li>
          <li>
      <h4>Внешность и характер</h4>
       <p> О характере персонажа обычно свидетельствуют и другие атрибуты внешности, например, одежда и волосы </p>
                       </li>
          <li>
      <h4>Передача эмоций</h4>
      <p>Эмоции могут изображаться подчёркнуто нереалистично, гипертрофированно — персонажи говорят с закрытыми глазами, чтобы передать безапелляционность, или принимают картинно демонический вид, когда проявляют гнев. В комедийных ситуациях, с целью показать несерьёзность чувства, применяются пиктограммы, такие, как картинка «капельки пота» или «вздувшихся вен», возникающие поверх головы героя, либо в рамочке над ней.</p>
         </li>
           </ul>

        
       <h3 id="titleHistory">История</h3>
<div className='textOfTitleHistory'>
     <p>История аниме берёт начало в XX веке, когда японские кинорежиссёры начинают первые эксперименты с техниками мультипликации, изобретёнными на Западе. Старейшая из известных сохранившихся японских анимаций — «Katsudo Shashin» длится всего 3 секунды. Одним из самых первых аниме стал продемонстрированный в 1917 году двухминутный комедийный фильм «Namakura Gatana», в котором самурай собирается испытать свой новый меч, но терпит поражение от горожанина. Одним из наиболее популярных и доступных методов на тот момент была техника вырезной анимации. Позднее распространилась также техника аппликационной анимации. Успеха в развитии техники анимации добились и другие мультипликаторы, использовавшие, в частности, анимационные фильмы в образовательных и пропагандистских целях. Первым звуковым аниме стал снятый Масаокой в 1933 году короткометражный фильм Chikara to Onna no Yo no Naka. К 1940 году начали образовываться организации мультипликаторов и художников.</p>

        <p>Основоположником традиций современного аниме стал Осаму Тэдзука — он заложил основы того, что позднее преобразовалось в современные аниме-сериалы. Например, Тэдзука заимствовал у Диснея и развил манеру использования больших глаз персонажей для передачи эмоций; именно под его руководством возникали первые произведения, которые можно отнести к ранним аниме.</p>

           <p>Сейчас первенство в аниме индустрии занимает режиссерка и сценаристка Мари Окада, которая создала такие произведения, как "Укрась прощальное утро цветами обещания", "Фабрика иллюзий Алисы и Террезы", "Затерянная деревня", "Она видела небо".</p>
           </div>

      <h3 id="titleGenres">Жанры</h3>
      <ul className = "listOfGenres">
         <li>
           <h4>Сёдзё</h4>
          <p>метажанр, который определяется по возрастной категории аудитории. Аниме и манга предназначены для девочек от 12 до 18 лет. Чаще всего вторичными жанрами выступают романтика, повседневность, меха-сёдзё, комедия и фэнтези. Примеры: «Хост-клуб Оранской школы» (2006), «Торадора!» (2008), «Корзинка фруктов» (2019–2021).</p>
         </li>
        <li>
          <h4>Сёнэн</h4> 
          <p>метажанр, который определяется по возрастной категории аудитории. Аниме и манга предназначены для юношей от 12 до 18 лет. Чаще всего метажанр идет в компании с привычными стилями — фэнтези, экшеном и драмой. Примеры: «Наруто» (2002–2007), «Блич» (2004 — настоящее время), «МАГИЧЕСКАЯ БИТВА» (2020 — настоящее время).</p>
        </li>
            <li>
              <h4>Меха</h4>
              <p>Главный атрибут этого жанра — изображение боевых роботов. Чаще всего в аниме и манге показано противостояние людей и машин. Примеры: «Мобильный воин Гандам» (1979–1980), «Евангелион» (1995–1996), «86» (2021).</p>
      </li>
              <li>
                <h4>Махо-сёдзё</h4>
                <p>аниме и манга про молодых девушек со сверхспособностями, обычно волшебниц. Примеры: «Сейлор Мун» (1992–1997), Cardcaptor Sakura (1998–2000), Pretty Cure (2005–2006).</p>
    </li>
                <li>
                  <h4>Сэйнэн</h4>
                  <p>метажанр, который определяется по возрастной категории аудитории. Аниме и манга предназначены для мужчин от 18 лет и старше. Обычно совмещается с такими жанрами, как триллер, экшен, фэнтези и драма. Примеры: «Берсерк» (1997), «Монстр» (2004), «Золотой Камуй» (2018 — настоящее время).</p>
    </li>
                  <li>
                    <h4>Дзёсэй</h4>
                    <p>метажанр, который определяется по возрастной категории аудитории. Аниме и манга предназначены для женщин от 18 лет и старше. Главными вторичными жанрами являются драма, романтика и повседневность. Примеры: __«Яркая Тихая» (2011 — настоящее время), Sakamichi no Apollon (2012), «Убийственная любовь» (2022).</p>
                      </li>
                    <li>
                      <h4>Исекай</h4>
                      <p>фэнтези-жанр, где герои переносятся в другой мир или в отличную временную петлю. Примеры: «Re: Zero — жизнь с нуля в другом мире» (2016 — настоящее время), «О моем перерождении в слизь» (2018 — настоящее время), «Mushoku Tensei: Перерождение безработного» (2021 — настоящее время).</p>
                        </li>
                      <li>
                        <h4>Повседневность («ломтик жизни»)</h4>
                        <p>жанр, где в центре сюжета бытовые будни главных героев, и там ничего не происходит. Примеры: K-on! (2009–2010), «Уютный поход» (2018–2021), «Двуличный братик Урамити» (2021).</p>
                          </li>
                        </ul>



        <div className='containterForButtonsOfСarouselAndTitle'>

       <h3 id="titleFavorites" className = "titleFavorites">Мои любимые аниме</h3>


        <div className = "containerOfButtonsForСarousel">

        {galleryPhotoItem > 0 &&
          (
          <button className = "leftButtonForCarousel" type = "button" onClick = {left}>
            <svg width="48" height="48" className = "ArrowSvgForCarousel" 
 xmlns="http://www.w3.org/2000/svg" stroke-linecap = "round">
               <line x1="12" y1="24" x2="36" y2="24" stroke="black" stroke-width="3" stroke-linecap = "round"/>
               <line x1="12" y1="24" x2="20" y2="31" stroke="black" stroke-width="3" stroke-linecap = "round"/>
                <line x1="12" y1="24" x2="20" y2="18" stroke="black" stroke-width="3" stroke-linecap = "round"/>
             
             </svg>
          
          </button>
          )
        }

           {galleryPhotoItem < galleryForAnime.length - 1 &&
(
    
                 <button className = "rightButtonForCarousel" type = "button" onClick = {right}>
                   <svg width="48" height="48" className = "ArrowSvgForCarousel" xmlns="http://www.w3.org/2000/svg" stroke-linecap = "round">
                     <line x1="12" y1="24" x2="36" y2="24" stroke="black" stroke-width="3" stroke-linecap = "round"/>
                     <line x1="36" y1="24" x2="28" y2="17" stroke="black" stroke-width="3" stroke-linecap = "round"/>
                      <line x1="36" y1="24" x2="28" y2="30" stroke="black" stroke-width="3" stroke-linecap = "round"/>
                   
                   </svg>
                  
                 </button>
  )
              }

          </div>
           </div>

        <figure> 
          <img className = "photoFromCarousel" src = {galleryForAnime[galleryPhotoItem].src} />
        <figcaption>{galleryForAnime[galleryPhotoItem].name}</figcaption>
        </figure>
                
      <h3 id ="titleSources">Источники</h3>
      <ul className = "listOfSources">
      <li><a href = "https://ru.wikipedia.org/wiki/%D0%90%D0%BD%D0%B8%D0%BC%D0%B5#%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%8F">Википедия</a></li>
        <li><a href = "https://www.rbc.ru/life/news/645ced019a7947b27c673526">Сайт РБК Лайф</a></li>
        <li><a href="https://ru.freepik.com/free-photo/girl-with-backpack-sunset-generative-al_38937974.htm#fromView=search&page=1&position=1&uuid=5dc7b685-bfae-4eeb-a973-106a7e7e80b5"> Фото девушки с ранцом на спине - Изображение от pvproductions на Freepik</a></li> 
      <li><a href="https://ru.freepik.com/free-photo/anime-style-portrait-traditional-japanese-samurai-character_186699579.htm#fromView=search&page=4&position=38&uuid=472d74b8-2fec-47ac-b6d0-16014560ea9f"> Фото девушка в голубом - Изображение от freepik</a></li>
      </ul>
    
        </main>
        <ButtonToTop />
    </div>

    )
}



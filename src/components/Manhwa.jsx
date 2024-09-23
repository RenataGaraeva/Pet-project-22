import React, { useState } from 'react';
import ButtonToTop from '/src/components/ButtonToTop.jsx';

export default function Manhwa () {

    const [galleryPhotoItem, nextPhoto] = useState (0);

    const right = function () {

     nextPhoto(galleryPhotoItem + 1)

    }

       const left = function () {
         nextPhoto(galleryPhotoItem - 1)
       }

  return (
  
    <div className = "bodyForPagesAnimeDunhuaManhwa">
  <h1 className = "nameOfPageAnimeDunhuaManhwa">Манхва</h1>
     
 

  <p><span className="welcomeSign">Добро пожаловать</span></p>

      
    
        <ul className = "containerForThreePhotosOnPage">
<li><img src = "src/components/Photos/scale_1200.jpg" width = "414" height = "276"/></li>
          <li><img src = "src/components/Photos/photo_2024-09-21_17-01-52.jpg" width = "305" height = "381" /></li>
            <li><img src = "src/components/Photos/photo_2024-09-21_17-01-54.jpg" width = "305" height = "381"/></li>
          </ul>
    
      
      <nav className = "navigation">
    <h2>Содержание:</h2>
    <ul className= "content">
    <li><a href="#titleWhatIsIt">Что это</a></li>
      <li><a href="#titleFeatures">Особенности</a></li>
      <li><a href="#titleHistory">История</a></li>
      <li><a href="#titleGenres">Жанры</a></li>
      <li><a href="#titleFavorites">Мои любимые манхвы</a></li>
      <li><a href="#titleSources">Источники</a></li>
    </ul>
</nav>

      <main>
       <h3 id = "titleWhatIsIt">Что это</h3>
      <p className='textOfTitleWhatIsIt'>Манхва - это корейские комиксы.</p>

      <h3 id="titleFeatures">Особенности</h3>
      <ul className = "listOfFeatures">
        <li>
      <h4>Способ чтения </h4>
      <p>Главное различие между этими видами комиксов в их прочтении. Традиционно мангу и маньхуа читают справа налево. Манхва же ближе к европейским и американским стандартам, поэтому читается слева направо.</p></li>

          <li><h4>Цвет печати </h4> 
      <p>Манхва в печати в основном остаются чёрно-белыми, но на просторы интернета её выкладывают в цветном варианте.</p></li>

            <li><h4>Стиль</h4> 
      <p>Японские мангаки следуют традициям, заложенным Осаму Тэдзукой, и рисуют героев с большими глазами, аккуратными носами и губами, преувеличенными изображениями лиц для подчёркивания эмоций. Впрочем, рисовка определённой манги зависит от стиля её автора – встречаются и вполне реалистичные работы, например манга «Берсерк» Кэнтаро Миуры.</p></li>
      </ul>
      
      <h3 id="titleHistory">История</h3>
      <div className='textOfTitleHistory'>
      <p>Корейская манхва очень похожа на японскую мангу и китайскую маньхуа. Они имеют много общих черт, но каждая обладает собственными особенностями: текст и графика согласуются с культурой и историей соответствующих стран. Манхва находилась под влиянием тяжёлой новейшей истории Кореи, это повлияло на многообразие форм и жанров. Отталкиваясь от основного течения, копирующего особенности манги, манхва развилась до авторских мини-историй, графически ориентированных работ и манхва-сериалов, распространяемых через интернет. На данный момент длинные сериалы интернет-манхвы на специальных порталах (например Media Daum) и личных страничках являются популярным ресурсом среди молодого поколения Южной Кореи.</p>

       <p>Под манхвой обычно подразумеваются комиксы Южной Кореи, однако существуют и комиксы Северной Кореи.</p>

       <p>Манхва читается в том же направлении, что и книги на русском языке — горизонтально слева направо, так как текст на хангыле обычно пишется именно так, хотя иногда он может быть записан так же как японский и китайский — вертикально справа налево. Оба варианта читаются сверху вниз.</p>

       <p>В отличие от Японии, анимация, основанная на манхве, в Республике Корее всё ещё редка (несколько заметных хитов в конце 80-х и начале 90-х — Dooly the Little Dinosaur и Fly! Superboard). Однако, манхва в последние годы часто экранизируется в телесериалы и фильмы: Full House (2004) и Goong (2006) — примеры лучших телесериалов такого рода за последнее время.</p>
       </div>
       
      <h3 id="titleGenres">Жанры</h3>
        <ul className = "listOfGenres">
        <li><h4>Мённан манхва</h4>
          <p>эквивалент кодомо или юмористической манги для любого возраста.</p></li>
          
            <li><h4>Сонён манхва</h4>
              <p>эквивалент сёнэна.</p></li>
              <li><h4>Сунджон манхва</h4>
                <p>эквивалент сёдзё (букв.: о чистых чувствах).</p></li>
                <li><h4>Чхоннён манхва</h4>
                  <p>эквивалент сэйнэна.</p></li>
                  <li><h4>Ттакчи манхва</h4>
                    <p>приключенческая манхва, в которой сюжет развивается на западе.</p></li>
        </ul>
      
  <div className='containterForButtonsOfСarouselAndTitle'>
      <h3 className = "titleFavorites" id="titleFavorites">Мои любимые манхвы</h3>

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

               {galleryPhotoItem < galleryForManhwa.length - 1 &&
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
              <img className = "photoFromCarousel" src = {galleryForManhwa[galleryPhotoItem].src} />
            <figcaption>{galleryForManhwa[galleryPhotoItem].name}</figcaption>
            </figure>
                 
      <h3 id ="titleSources">Источники</h3>
      <ul className = "listOfSources">
         <li><a href = "https://www.chitai-gorod.ru/articles/manga_mankhva_i_mankhua_v_chem_raznitsa-3963">Сайт Читай-Москва</a></li>
         <li><a href = "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%85%D0%B2%D0%B0">Википедия</a></li>
         <li>Фото взяты с Интернета</li>
        </ul>
    </main>
    <ButtonToTop />
    </div>
  )
}
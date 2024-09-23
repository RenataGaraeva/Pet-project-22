import React, { useState } from 'react';
import styled from 'styled-components';

const P = styled.p `
  font-family: Cardo;
   font-size: 17px;
 /*
  font-size: 4vh;
  */
  font-weight: 400;
  line-height: 25px;
  text-align: justify;
`;

  const Li = styled.li`
  list-style-type: none;
  `

const H4 = styled.h4`
font-family: Roboto;
font-size: 23px;
font-weight: 400;
line-height: 36px;
text-align: center;
`
const Ul = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

export default function Manhwa () {

   document.addEventListener("DOMContentLoaded", function () {
    const buttonForTop = document.getElementById('idForButtonToTop');
    window.addEventListener("scroll",function () {
      if (window.scrollY > 20) {
           buttonForTop.style.display = "block";
      } else {
           buttonForTop.style.display = "none";
      }
    });

           buttonForTop.addEventListener('click', function (evt) {
             evt.preventDefault();
             window.scrollTo({ top: 0, behavior: "smooth" });
             });
     })



    const [galleryPhotoItem, nextPhoto] = useState (0);

    const right = function () {

     nextPhoto(galleryPhotoItem + 1)



    }

       const left = function () {
         nextPhoto(galleryPhotoItem - 1)
       }


  
  return (
  
    <div className = "bodyForAnime">
  <h1 className = "nameOfPageAnimeDunhuaManhwa">Манхва</h1>
     
 

  <p><span className="hTwoForWelcome">Добро пожаловать</span></p>

      
      <div className = "flexForThreePhotosOnPage">
        <ul className = "flexForThreePhotosOnPage">
<li><img src = "src/anime-style-portrait-traditional-japanese-samurai-character(1).jpg" width = "414" height = "276"/></li>
          <li><img src = "src/anime-style-portrait-traditional-japanese-samurai-character.jpg" width = "305" height = "381" /></li>
            <li><img src = "src/girl-with-backpack-sunset-generative-al.jpg" width = "305" height = "381"/></li>
          </ul>
      </div>
      
      <nav className = "navigation">
    <h2>Содержание:</h2>
    <ul className= "ulForContent">
      <li>Что это</li>
      <li>Особенности</li>
            <li>История</li>
      <li>Жанры</li>
      <li>Мои любимые манхвы</li>
      <li>Источники</li>
    </ul>
</nav>

      <main>
       <h3>Что это</h3>
      
      <h3>Особенности</h3>
      <ul className = "flexForFeatures">
        <Li>
      <h4>Способ чтения </h4>
      <p>Главное различие между этими видами комиксов в их прочтении. Традиционно мангу и маньхуа читают справа налево. Манхва же ближе к европейским и американским стандартам, поэтому читается слева направо.</p></Li>

          <Li><h4>Цвет печати </h4> 
      <p>Манхва в печати в основном остаются чёрно-белыми, но на просторы интернета её выкладывают в цветном варианте.</p></Li>

            <Li><h4>Стиль</h4> 
      <p>Японские мангаки следуют традициям, заложенным Осаму Тэдзукой, и рисуют героев с большими глазами, аккуратными носами и губами, преувеличенными изображениями лиц для подчёркивания эмоций. Впрочем, рисовка определённой манги зависит от стиля её автора – встречаются и вполне реалистичные работы, например манга «Берсерк» Кэнтаро Миуры.</p></Li>
      </ul>
      
      <h3>История</h3>
      <p>Корейская манхва очень похожа на японскую мангу и китайскую маньхуа. Они имеют много общих черт, но каждая обладает собственными особенностями: текст и графика согласуются с культурой и историей соответствующих стран. Манхва находилась под влиянием тяжёлой новейшей истории Кореи, это повлияло на многообразие форм и жанров[1]. Отталкиваясь от основного течения, копирующего особенности манги, манхва развилась до авторских мини-историй, графически ориентированных работ и манхва-сериалов, распространяемых через интернет. На данный момент длинные сериалы интернет-манхвы на специальных порталах (например Media Daum) и личных страничках являются популярным ресурсом среди молодого поколения Южной Кореи.</p>

       <p>Под манхвой обычно подразумеваются комиксы Южной Кореи, однако существуют и комиксы Северной Кореи.</p>

       <p>Манхва читается в том же направлении, что и книги на русском языке — горизонтально слева направо, так как текст на хангыле обычно пишется именно так, хотя иногда он может быть записан так же как японский и китайский — вертикально справа налево. Оба варианта читаются сверху вниз.</p>

       <p>В отличие от Японии, анимация, основанная на манхве, в Республике Корее всё ещё редка (несколько заметных хитов в конце 80-х и начале 90-х — Dooly the Little Dinosaur и Fly! Superboard). Однако, манхва в последние годы часто экранизируется в телесериалы и фильмы: Full House (2004) и Goong (2006) — примеры лучших телесериалов такого рода за последнее время.</p>

      <h3>Жанры</h3>
        <Ul className = "hThreeForAnimeGenres">
        <Li><H4>мённан манхва</H4>
          <P>Эквивалент кодомо или юмористической манги для любого возраста.</P></Li>
          
            <Li><H4>сонён манхва</H4>
              <P>эквивалент сёнэна.</P></Li>
              <Li><H4>сунджон манхва</H4>
                <P>эквивалент сёдзё (букв.: о чистых чувствах).</P></Li>
                <Li><H4>чхоннён манхва</H4>
                  <P>эквивалент сэйнэна.</P></Li>
                  <Li><H4>ттакчи манхва</H4>
                    <P>приключенческая манхва, в которой сюжет развивается на западе.</P></Li>
        </Ul>
      
  <div className='flexForButton'>
      <h3 className = "hThreeForAnimeFavorites">Мои любимые манхвы</h3>

        <div className = "centerOfButton">

            {galleryPhotoItem > 0 &&
              (
              <button className = "leftButton" type = "button" onClick = {left}>
                <svg width="48" height="48" className = "rightSvg" 
     xmlns="http://www.w3.org/2000/svg" stroke-linecap = "round">
                   <line x1="12" y1="24" x2="36" y2="24" stroke="black" stroke-width="3" stroke-linecap = "round"/>
                   <line x1="12" y1="24" x2="20" y2="31" stroke="black" stroke-width="3" stroke-linecap = "round"/>
                    <line x1="12" y1="24" x2="20" y2="18" stroke="black" stroke-width="3" stroke-linecap = "round"/>

                 </svg>

              </button>
              )
            }

               {galleryPhotoItem < gallery.length - 1 &&
    (



                     <button className = "rightButton" type = "button" onClick = {right}>
                       <svg width="48" height="48" className = "rightSvg" xmlns="http://www.w3.org/2000/svg" stroke-linecap = "round">
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
              <img className = "photo" src = {gallery[galleryPhotoItem].src} />
            <figcaption>Аниме</figcaption>
            </figure>
            
            <a href = "#top" className= "buttonForTop" id = "idForButtonToTop">
              <svg width="48" height="48" className = "rightSvg" xmlns="http://www.w3.org/2000/svg" stroke-linecap = "round">
                 <line x1="12" y1="24" x2="36" y2="24" stroke="black" stroke-width="3" stroke-linecap = "round"/>
                 <line x1="36" y1="24" x2="28" y2="17" stroke="black" stroke-width="3" stroke-linecap = "round"/>
                  <line x1="36" y1="24" x2="28" y2="30" stroke="black" stroke-width="3" stroke-linecap = "round"/>

               </svg>
            </a>

    
      <ul>
      <li>Будучи мачехой легко избежать смерти</li>
        <li>В лес, где мерцают светлячки</li>
        <li>5 сантиметров в секунду</li>
        <li></li>
        <li></li>
      </ul>
      
      <h3>Источники</h3>
      <ul className = "ulForThreeForAnimeSources">
         <li><a href = "https://www.chitai-gorod.ru/articles/manga_mankhva_i_mankhua_v_chem_raznitsa-3963">Сайт Читай-Москва</a></li>
         <li><a href = "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%85%D0%B2%D0%B0">Википедия</a></li>
        </ul>
    </main>
    </div>
  )
}
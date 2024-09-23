/*
import GalleryPhotoNew from './GalleryPhotoNew.jsx'
*/
import React, { useState } from 'react';
import styled from 'styled-components';

/* CSS */
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
/* Components */


export default function Anime () {

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
  <h1 className = "nameOfPageAnimeDunhuaManhwa">Аниме</h1>
     
 

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
      <li><a href="#hThreeForAnimeWhatIsIt">Что это</a></li>
      <li><a href="#hThreeForAnimeFeatures">Особенности</a></li>
      <li><a href="#hThreeForAnimeHistory">История</a></li>
      <li><a href="#hThreeForAnimeGenres">Жанры</a></li>
      <li><a href="#hThreeForAnimeFavorites">Мои любимые аниме</a></li>
      <li><a href="#hThreeForAnimeSources">Источники</a></li>
    </ul>
        </nav>
      
      <main>
      <h3 id = "hThreeForAnimeWhatIsIt">Что это</h3>
      
      <h3 id="hThreeForAnimeFeatures">Особенности</h3>

        <ul className = "flexForFeatures">
              <Li>
               <h4>Глаза</h4>
      <P>У всех персонажей большие глаза, которые детально прорисованы в отличие от других частей лица.</P>
                         </Li>
          <Li>
      <h4>Внешность и характер</h4>
       <P> О характере персонажа обычно свидетельствуют и другие атрибуты внешности, например, одежда и волосы </P>
                       </Li>
          <Li>
      <h4>Передача эмоций</h4>
      <P>Эмоции могут изображаться подчёркнуто нереалистично, гипертрофированно — персонажи говорят с закрытыми глазами, чтобы передать безапелляционность, или принимают картинно демонический вид, когда проявляют гнев. В комедийных ситуациях, с целью показать несерьёзность чувства, применяются пиктограммы, такие, как картинка «капельки пота» или «вздувшихся вен», возникающие поверх головы героя, либо в рамочке над ней.</P>
         </Li>
           </ul>

        
       <h3 id="hThreeForAnimeHistory">История</h3>

     <P>История аниме берёт начало в XX веке, когда японские кинорежиссёры начинают первые эксперименты с техниками мультипликации, изобретёнными на Западе. Старейшая из известных сохранившихся японских анимаций — «Katsudo Shashin» длится всего 3 секунды. Одним из самых первых аниме стал продемонстрированный в 1917 году двухминутный комедийный фильм «Namakura Gatana», в котором самурай собирается испытать свой новый меч, но терпит поражение от горожанина. Одним из наиболее популярных и доступных методов на тот момент была техника вырезной анимации. Позднее распространилась также техника аппликационной анимации. Успеха в развитии техники анимации добились и другие мультипликаторы, использовавшие, в частности, анимационные фильмы в образовательных и пропагандистских целях. Первым звуковым аниме стал снятый Масаокой в 1933 году короткометражный фильм Chikara to Onna no Yo no Naka. К 1940 году начали образовываться организации мультипликаторов и художников.</P>

        <P>Основоположником традиций современного аниме стал Осаму Тэдзука — он заложил основы того, что позднее преобразовалось в современные аниме-сериалы. Например, Тэдзука заимствовал у Диснея и развил манеру использования больших глаз персонажей для передачи эмоций; именно под его руководством возникали первые произведения, которые можно отнести к ранним аниме.</P>

           <P>Сейчас первенство в аниме индустрии занимает режиссерка и сценаристка Мари Окада, которая создала такие произведения, как "Укрась прощальное утро цветами обещания", "Фабрика иллюзий Алисы и Террезы", "Затерянная деревня", "Она видела небо".</P>

       

    

  
      

      
      <h3 id="hThreeForAnimeGenres">Жанры</h3>
      <Ul className = "hThreeForAnimeGenres">
         <Li>
           <H4>Сёдзё</H4>
          <P>метажанр, который определяется по возрастной категории аудитории. Аниме и манга предназначены для девочек от 12 до 18 лет. Чаще всего вторичными жанрами выступают романтика, повседневность, меха-сёдзё, комедия и фэнтези. Примеры: «Хост-клуб Оранской школы» (2006), «Торадора!» (2008), «Корзинка фруктов» (2019–2021).</P>
         </Li>
        <Li>
          <H4>Сёнэн</H4> 
          <P>метажанр, который определяется по возрастной категории аудитории. Аниме и манга предназначены для юношей от 12 до 18 лет. Чаще всего метажанр идет в компании с привычными стилями — фэнтези, экшеном и драмой. Примеры: «Наруто» (2002–2007), «Блич» (2004 — настоящее время), «МАГИЧЕСКАЯ БИТВА» (2020 — настоящее время).</P>
        </Li>
            <Li>
              <H4>Меха</H4>
              <P>Главный атрибут этого жанра — изображение боевых роботов. Чаще всего в аниме и манге показано противостояние людей и машин. Примеры: «Мобильный воин Гандам» (1979–1980), «Евангелион» (1995–1996), «86» (2021).</P>
      </Li>
              <Li>
                <H4>Махо-сёдзё</H4>
                <P>аниме и манга про молодых девушек со сверхспособностями, обычно волшебниц. Примеры: «Сейлор Мун» (1992–1997), Cardcaptor Sakura (1998–2000), Pretty Cure (2005–2006).</P>
    </Li>
                <Li>
                  <H4>Сэйнэн</H4>
                  <P>метажанр, который определяется по возрастной категории аудитории. Аниме и манга предназначены для мужчин от 18 лет и старше. Обычно совмещается с такими жанрами, как триллер, экшен, фэнтези и драма. Примеры: «Берсерк» (1997), «Монстр» (2004), «Золотой Камуй» (2018 — настоящее время).</P>
    </Li>
                  <Li>
                    <H4>Дзёсэй</H4>
                    <P>метажанр, который определяется по возрастной категории аудитории. Аниме и манга предназначены для женщин от 18 лет и старше. Главными вторичными жанрами являются драма, романтика и повседневность. Примеры: __«Яркая Тихая» (2011 — настоящее время), Sakamichi no Apollon (2012), «Убийственная любовь» (2022).</P>
                      </Li>
                    <Li>
                      <H4>Исекай</H4>
                      <P>фэнтези-жанр, где герои переносятся в другой мир или в отличную временную петлю. Примеры: «Re: Zero — жизнь с нуля в другом мире» (2016 — настоящее время), «О моем перерождении в слизь» (2018 — настоящее время), «Mushoku Tensei: Перерождение безработного» (2021 — настоящее время).</P>
                        </Li>
                      <Li>
                        <H4>Повседневность («ломтик жизни»)</H4>
                        <P>жанр, где в центре сюжета бытовые будни главных героев, и там ничего не происходит. Примеры: K-on! (2009–2010), «Уютный поход» (2018–2021), «Двуличный братик Урамити» (2021).</P>
                          </Li>
                        </Ul>



        <div className='flexForButton'>

       <h3 id="hThreeForAnimeFavorites" className = "hThreeForAnimeFavorites">Мои любимые аниме</h3>

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
        {/*
      <ul className="ulForThreeForAnimeFavorites">
      <li>Стальной Алхимик</li>
        <li>В лес, где мерцают светлячки</li>
        <li>5 сантиметров в секунду</li>
        <li>Затерянная деревня</li>
        <li>Токийский гуль</li>
        Здесь будет фото галерея
 
      </ul>
*/}
         
        <a href = "#top" className= "buttonForTop" id = "idForButtonToTop">
          <svg width="48" height="48" className = "rightSvg" xmlns="http://www.w3.org/2000/svg" stroke-linecap = "round">
             <line x1="12" y1="24" x2="36" y2="24" stroke="black" stroke-width="3" stroke-linecap = "round"/>
             <line x1="36" y1="24" x2="28" y2="17" stroke="black" stroke-width="3" stroke-linecap = "round"/>
              <line x1="36" y1="24" x2="28" y2="30" stroke="black" stroke-width="3" stroke-linecap = "round"/>

           </svg>
        </a>
      
      <h3 id ="hThreeForAnimeSources">Источники</h3>
      <ul className = "ulForThreeForAnimeSources">
      <li><a href = "https://ru.wikipedia.org/wiki/%D0%90%D0%BD%D0%B8%D0%BC%D0%B5#%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%8F">Википедия</a></li>
        <li><a href = "https://www.rbc.ru/life/news/645ced019a7947b27c673526">Сайт РБК Лайф</a></li>
      </ul>
    <p>??? внизу плашка "Информация взята из сайта"
    И типа разделение на фото - текст в шахматном порядке? Флексим

      + ссылки на фото либо положить на сами фото либо в Источниках указать
    https://www.rbc.ru/life/news/645ced019a7947b27c673526
      https://htmlacademy.ru/courses/113/run/27
    </p>
       
        </main>
      
    </div>
    )
}




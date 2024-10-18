import React, { useState } from 'react';
import ButtonToTop from '/src/components/ButtonToTop.jsx';

export default function Dunhua () {

const [galleryPhotoItem, nextPhoto] = useState (0);

  const right = function () {
   nextPhoto(galleryPhotoItem + 1)
  }

     const left = function () {
       nextPhoto(galleryPhotoItem - 1)
     }

    return (

      <div className = "bodyForPagesAnimeDunhuaManhwa">
      <h1 className = "nameOfPageAnimeDunhuaManhwa">Дунхуа</h1>

      <p><span className="welcomeSign">Добро пожаловать</span></p>
   
            <ul className = "containerForThreePhotosOnPage">
    <li><img src = "src/components/Photos/080a00bd4b.png" width = "414" height = "276"/></li>
              <li><img src = "src/components/Photos/dd66ce50af1b0db5c0453fd7e31f1b13.jpg" width = "305" height = "381" /></li>
                <li><img src = "src/components/Photos/cbded926b5077087ef017646b6813812.jpg" width = "305" height = "381"/></li>
              </ul>
          
          <nav className = "navigation">
   
      <h2>Содержание:</h2>
       <ul className= "content">
       <li><a href="#titleWhatIsIt">Что это</a></li>
      <li><a href="#titleFeatures">Особенности</a></li>
      <li><a href="#titleHistory">История</a></li>
      <li><a href="#titleGenres">Жанры</a></li>
      <li><a href="#titleFavorites">Мои любимые дунхуа</a></li>
      <li><a href="#titleSources">Источники</a></li>
      </ul>
        </nav>
        
         <main>
        
      <h3 id = "titleWhatIsIt">Что это</h3>
      <p className='textOfTitleWhatIsIt'>Дунхуа — китайская анимация.</p>

      <h3 id="titleFeatures">Особенности</h3>

    <ul className = "listOfFeatures">
      <li><h4>Фольклор</h4>
      <p>Фольклора и переосмысления легенд в дунхуа даже больше, чем в японской анимации. Любят китайцы свою культуру, что тут скажешь. Причем, что китайские дорамы, что дунхуа поражают размахом фэнтези-сеттинга и количеством персонажей.</p></li>
      <li><h4>Рисовка</h4>
      <p>Рисовка тоже отличается: легко заметить, что в дунхуа те же глаза героев несколько уже, чем у японцев (независимо от того, милый герой или нет). Иногда изображение героев может вгонять в ступор своей карикатурностью, но этому есть две причины: либо бюджет у дунхуа небольшой, либо стиль такой. Впрочем, в этом японская и китайская анимация скорее похожи.</p></li>
        <li><h4>Цензура</h4>
      <p>Цензура. Да, без нее в Китае никак. Из-за нее дунхуа, нарисованные по манхуа, частенько лишаются «смущающих» элементов, которые можно с легкостью найти в аниме.</p></li>
           </ul>
        
       <h3 id="titleHistory">История</h3>
      <div className='textOfTitleHistory'>
        <p>История анимации в Китае началась в 1918 году, когда в Шанхай из США был завезен анимационный фильм под названием «Из чернильницы». Фрагменты мультфильмов были впервые использованы в рекламах отечественной продукции.</p> 
          <p>Тем не менее, анимационная индустрия начала своё развитие лишь с приездом братьев Ванов в 1926 году. С первого звукового фильма «Танец верблюда» и до первой полноценной мультипликационной ленты «Принцесса Железный Веер» Китай шёл в ногу с остальными странами мира.</p> 
          <p>Однако золотой век китайской анимации завершился, когда Коммунистическая партия Китая во главе с Мао Цзэдуном провела Культурную революцию. Многие художники-мультипликаторы были вынуждены уехать. Если не суровые экономические условия, то плохое обращение со стороны хунвэйбинов угрожали их работе. Оставшиеся мультипликаторы все больше склонялись к пропаганде.</p>
          <p>К 1980-м годам Япония стала центром мультипликации на Дальнем Востоке, оставив индустрию Китая позади по своей репутации и производительности. Но в 1990-х годах произошли две значительные перемены. Во-первых, это политические изменения. На смену плановому хозяйству пришла социалистическая рыночная экономика. Один человек уже не мог ограничить выпуск продукции и прибыль индустрии. Во-вторых, это технологические изменения, связанные с появлением Интернета. Возникли новые возможности у флэш-аниматоров, а также содержание фильма теперь стало более свободным.</p>
          <p>В настоящее время китайская анимация радикально изменяется под влиянием Гонконга и Тайваня.</p>
        </div>
            
       <h3 id="titleGenres">Жанры</h3>
           <ul className = "listOfGenresDunhua">
              <li><h4>Традицонная</h4>
      <p>Современная китайская анимация бывает двух типов. Первая — <b>традиционная</b>. За нее отвечают большие корпорации, там много компьютерной графики. Собственно, она аналогична мультфильмам Диснея с точки зрения популярности и системы производства.</p></li>

                <li><h4>Веб-мультфильмы</h4>
                  <p>Второй тип анимации — <b>веб-мультфильмы</b>. Они не менее популярны, чем традиционные мульты и могут использоваться в качестве рекламы. Еще один большой плюс такой анимации — больше свободы для творчества.</p></li>
           </ul>

           <div className='containterForButtonsOfСarouselAndTitle'>

      <h3 className = "titleFavorites" id="titleFavorites">Мои любимые дунхуа</h3>

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

                        {galleryPhotoItem < galleryForDunhua.length - 1 &&
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
                       <img className = "photoFromCarousel" src = {galleryForDunhua[galleryPhotoItem].src} />
                     <figcaption>{galleryForDunhua[galleryPhotoItem].name}</figcaption>
                     </figure>

          <h3 id ="titleSources">Источники</h3>
           <ul className = "listOfSources">
      <li><a href = "https://ru.wikipedia.org/wiki/%D0%90%D0%BD%D0%B8%D0%BC%D0%B0%D1%86%D0%B8%D1%8F_%D0%B2_%D0%9A%D0%B8%D1%82%D0%B0%D0%B5">Википедия</a></li>
        <li><a href = "https://thegirl.ru/articles/kitaiskoe-anime-chto-takoe-dunkhua-i-chem-ono-otlichaetsya-ot-yaponskoi-animacii/">Журнал The Girl</a></li> 
        <li>Фото взяты с Интернета</li>
           </ul>
        
    </main>
    <ButtonToTop />
          </div>
  )
}

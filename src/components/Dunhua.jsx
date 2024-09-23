import React, { useState } from 'react';
import styled from 'styled-components';

const P = styled.p `
  font-family: Cardo;
   font-size: 17px;
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
export default function Dunhua () {


  const [galleryPhotoItem, nextPhoto] = useState (0);

  const right = function () {

   nextPhoto(galleryPhotoItem + 1)



  }

     const left = function () {
       nextPhoto(galleryPhotoItem - 1)
     }

  
  return (

      <div className = "bodyForAnime">
      <h1 className = "nameOfPageAnimeDunhuaManhwa">Дунхуа</h1>



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
        <li>Мои любимые дунхуа</li>
        <li>Источники</li>
      </ul>
        </nav>

        
         <main>
        
      <h3>Что это</h3>
      
      <h3>Особенности</h3>

    <ul className = "flexForFeatures">
      <li><h4>Фольклор</h4>
      <p>Фольклора и переосмысления легенд в дунхуа даже больше, чем в японской анимации. Любят китайцы свою культуру, что тут скажешь. Причем, что китайские дорамы, что дунхуа поражают размахом фэнтези-сеттинга и количеством персонажей.</p></li>
      <li><h4>Рисовка</h4>
      <p>Рисовка тоже отличается: легко заметить, что в дунхуа те же глаза героев несколько уже, чем у японцев (независимо от того, милый герой или нет). Иногда изображение героев может вгонять в ступор своей карикатурностью, но этому есть две причины: либо бюджет у дунхуа небольшой, либо стиль такой. Впрочем, в этом японская и китайская анимация скорее похожи.</p></li>
        <li><h4>Цензура</h4>
      <p>Цензура. Да, без нее в Китае никак. Из-за нее дунхуа, нарисованные по манхуа, частенько лишаются «смущающих» элементов, которые можно с легкостью найти в аниме.</p></li>
           </ul>
        
       <h3>История</h3>
      <p>История анимации в Китае началась в 1918 году, когда в Шанхай из США был завезен анимационный фильм под названием «Из чернильницы». Фрагменты мультфильмов были впервые использованы в рекламах отечественной продукции. Тем не менее, анимационная индустрия начала своё развитие лишь с приездом братьев Ванов в 1926 году. С первого звукового фильма «Танец верблюда» и до первой полноценной мультипликационной ленты «Принцесса Железный Веер» Китай шёл в ногу с остальными странами мира. Однако золотой век китайской анимации завершился, когда Коммунистическая партия Китая во главе с Мао Цзэдуном провела Культурную революцию. Многие художники-мультипликаторы были вынуждены уехать. Если не суровые экономические условия, то плохое обращение со стороны хунвэйбинов угрожали их работе. Оставшиеся мультипликаторы все больше склонялись к пропаганде. К 1980-м годам Япония стала центром мультипликации на Дальнем Востоке, оставив индустрию Китая позади по своей репутации и производительности. Но в 1990-х годах произошли две значительные перемены. Во-первых, это политические изменения. На смену плановому хозяйству пришла социалистическая рыночная экономика. Один человек уже не мог ограничить выпуск продукции и прибыль индустрии. Во-вторых, это технологические изменения, связанные с появлением Интернета. Возникли новые возможности у флэш-аниматоров, а также содержание фильма теперь стало более свободным. В настоящее время китайская анимация радикально изменяется под влиянием Гонконга и Тайваня.</p>
 
           
       <h3>Жанры</h3>
           <ul className = "hThreeForAnimeGenres">
              <li><h4>Традицонная</h4>
      <p>Современная китайская анимация бывает двух типов. Первая — <b>традиционная</b>. За нее отвечают большие корпорации, там много компьютерной графики. Собственно, она аналогична мультфильмам Диснея с точки зрения популярности и системы производства.</p></li>

                <li><h4>Веб-мультфильмы</h4>
                  <p>Второй тип анимации — <b>веб-мультфильмы</b>. Они не менее популярны, чем традиционные мульты и могут использоваться в качестве рекламы. Еще один большой плюс такой анимации — больше свободы для творчества.</p></li>
           </ul>

           <div className='flexForButton'>

      <h3 className = "hThreeForAnimeFavorites">Мои любимые дунхуа</h3>

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
        <li>Лицом ко лжи</li>
        <li>Она много лет не была главной героиней</li>
      <li>Практикуя ци сто тысяч лет</li>
        <li>Зять</li>
        <li>5 сантиметров в секунду</li>
          </ul>

      <h3>Источники</h3>
           <ul className = "ulForThreeForAnimeSources">
      <li><a href = "https://ru.wikipedia.org/wiki/%D0%90%D0%BD%D0%B8%D0%BC%D0%B0%D1%86%D0%B8%D1%8F_%D0%B2_%D0%9A%D0%B8%D1%82%D0%B0%D0%B5">Википедия</a></li>
        <li><a href = "https://thegirl.ru/articles/kitaiskoe-anime-chto-takoe-dunkhua-i-chem-ono-otlichaetsya-ot-yaponskoi-animacii/">Журнал The Girl</a></li> 
           </ul>
        
    </main>
    
          </div>
  )
}


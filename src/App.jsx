import './App.css'
import React from 'react'
    import Layout from './components/Layout.jsx'
import {Routes, Route} from 'react-router-dom'
import Anime from './components/Anime.jsx'
import Manhwa from './components/Manhwa.jsx'
import Dunhua from './components/Dunhua.jsx'

import AboutMe from './components/AboutMe.jsx'
import AboutContent from './components/AboutContent.jsx'


export default function App () {
  return (
  <>
      
       <img className = "mainPhotoOfHomePage" src = "./src/beautiful-anime-woman-cartoon-scene.jpg" />

       <div className = "newDiv">
   
        <div className = "container">

        <div className = "routesTooOne"> 
          <div className = "first">
          <Routes>
                  <Route path = "/" element = {<Layout />} >
                    <Route path = "aboutMe" element = {<AboutMe />} />
                     <Route path = "aboutContent" element = {<AboutContent />} />
                      <Route path = "anime" element = {<Anime />} />
                      <Route path = "manhwa" element = {<Manhwa />} />
                             <Route path = "dunhua" element = {<Dunhua />} />
                  </Route>
                  </Routes>
              </div>
          </div>

             </div>

           {/*
<div className = "sectionOfFirstPage">
           <h1>Справочник по</h1>
           <h2>Аниме</h2>
           <h2>Манхве</h2>
           <h2>Дунхуа</h2>
    </div>
    */}
      
                </div>

    

  </>
  )
}

import './App.css'

import React from 'react'
import {Outlet, Routes, Route} from 'react-router-dom'

import Anime from './components/Anime.jsx'
import Manhwa from './components/Manhwa.jsx'
import Dunhua from './components/Dunhua.jsx'
import Contacts from './components/Contacts.jsx'
import Header from './components/Header.jsx'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeaderForAllPages />}>
          <Route index element={<HomePage />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="homePage" element={<HomePage />} />
          <Route path="anime" element={<Anime />} />
          <Route path="manhwa" element={<Manhwa />} />
          <Route path="dunhua" element={<Dunhua />} />
        </Route>
      </Routes>
    </>
  );
}

export function HomePage() {
  return (
    <>
      <img className="mainPhotoOfHomePage" src="./src/components/Photos/beautiful-anime-woman-cartoon-scene.jpg" alt="Аниме девушка"/>
      <p><a className="sourceOfMainPhotoOnHomePage" href="https://ru.freepik.com/free-photo/beautiful-anime-woman-cartoon-scene_94944919.htm#fromView=search&page=2&position=15&uuid=472d74b8-2fec-47ac-b6d0-16014560ea9f">Изображение от freepik</a></p>
      <div className="listHeaderForHomePage">
        <Outlet />
      </div>
    </>
  );
}

export function HeaderForAllPages () {
  return (
    <div>
     <Header />
    </div>
  );
}

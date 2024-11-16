import "./App.css";

import React from "react";
import { Outlet, Routes, Route } from "react-router-dom";

import Anime from "./components/Main Pages/Anime.jsx";
import Manhwa from "./components/Main Pages/Manhwa.jsx";
import Dunhua from "./components/Main Pages/Dunhua.jsx";
import Contacts from "./components/Main Pages/Contacts.jsx";
import Header from "./components/Blocks/Header.jsx";
import beautifulAnimeWomanCartoonScene from "../../beautifulAnimeWomanCartoonScene.jpg"

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
      <img
        className="mainPhotoOfHomePage"
        src={beautifulAnimeWomanCartoonScene}
        alt="Аниме девушка"
      />
      {/* ./src/components/Photos/beautifulAnimeWomanCartoonScene.jpg

         https://gist.github.com/loginsan/3b8426d656e66901f4528c5e58b6b2f2 */}
      <p>
        <a
          className="sourceOfMainPhotoOnHomePage"
          href="https://ru.freepik.com/free-photo/beautiful-anime-woman-cartoon-scene_94944919.htm#fromView=search&page=2&position=15&uuid=472d74b8-2fec-47ac-b6d0-16014560ea9f"
        >
          Изображение от freepik
        </a>
      </p>
      <div className="listHeaderForHomePage">
        <Outlet />
      </div>
    </>
  );
}

export function HeaderForAllPages() {
  return (
    <div>
      <Header />
    </div>
  );
}

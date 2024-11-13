import React from "react";

export default function Navigation({ nameOfPage }) {
  return (
    <nav className="navigation">
      <h2>Содержание:</h2>
      <ul className="content">
        <li>
          <a href="#titleWhatIsIt">Что это</a>
        </li>
        <li>
          <a href="#titleFeatures">Особенности</a>
        </li>
        <li>
          <a href="#titleHistory">История</a>
        </li>
        <li>
          <a href="#titleGenres">Жанры</a>
        </li>
        <li>
          <a href="#titleFavorites">Мои любимые {nameOfPage}</a>
        </li>
        <li>
          <a href="#titleSources">Источники</a>
        </li>
      </ul>
    </nav>
  );
}

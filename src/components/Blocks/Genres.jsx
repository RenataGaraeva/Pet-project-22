import React from "react";

export default function Genres({ genresOfPage }) {
  return (
    <>
      <h3 id="titleGenres">Жанры</h3>
      <ul className="listOfGenres">
        {genresOfPage.map((element, index) => (
          <li key={index}>
            <h4>{element.title}</h4>
            <p>{element.genre}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

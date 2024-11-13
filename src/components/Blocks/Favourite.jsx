import React, { useState } from "react";

export default function Favourite({ name, galleryForPage }) {
  const [galleryPhotoItem, nextPhoto] = useState(0);

  const right = function () {
    nextPhoto(galleryPhotoItem + 1);
  };

  const left = function () {
    nextPhoto(galleryPhotoItem - 1);
  };
  return (
    <>
      <div className="containterForButtonsOfСarouselAndTitle">
        <h3 id="titleFavorites" className="titleFavorites">
          Мои любимые {name}
        </h3>

        <div className="containerOfButtonsForСarousel">
          {galleryPhotoItem > 0 && (
            <button
              className="leftButtonForCarousel"
              type="button"
              onClick={left}
            >
              <svg
                width="48"
                height="48"
                className="ArrowSvgForCarousel"
                xmlns="http://www.w3.org/2000/svg"
                stroke-linecap="round"
              >
                <line
                  x1="12"
                  y1="24"
                  x2="36"
                  y2="24"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <line
                  x1="12"
                  y1="24"
                  x2="20"
                  y2="31"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <line
                  x1="12"
                  y1="24"
                  x2="20"
                  y2="18"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          )}

          {galleryPhotoItem < galleryForPage.length - 1 && (
            <button
              className="rightButtonForCarousel"
              type="button"
              onClick={right}
            >
              <svg
                width="48"
                height="48"
                className="ArrowSvgForCarousel"
                xmlns="http://www.w3.org/2000/svg"
                stroke-linecap="round"
              >
                <line
                  x1="12"
                  y1="24"
                  x2="36"
                  y2="24"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <line
                  x1="36"
                  y1="24"
                  x2="28"
                  y2="17"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <line
                  x1="36"
                  y1="24"
                  x2="28"
                  y2="30"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      <figure>
        <img
          className="photoFromCarousel"
          src={galleryForPage[galleryPhotoItem].src}
        />
        <figcaption>{galleryForPage[galleryPhotoItem].name}</figcaption>
      </figure>
    </>
  );
}

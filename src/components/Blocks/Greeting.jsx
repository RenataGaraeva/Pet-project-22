export default function Greeting({ nameOfPage, photos }) {
  return (
    <>
      <h1 className="nameOfPageAnimeDunhuaManhwa">{nameOfPage}</h1>

      <p>
        <span className="welcomeSign">Добро пожаловать</span>
      </p>

      <ul className="containerForThreePhotosOnPage">
        <li>
          <img src={photos[0].source} width="414" height="276" />
        </li>
        <li>
          <img src={photos[1].source} width="305" height="381" />
        </li>
        <li>
          <img src={photos[2].source} width="305" height="381" />
        </li>
      </ul>
    </>
  );
}

export default function Features ({featuresOfPage}) {
   return (
       <>
    <h3 id="titleFeatures">Особенности</h3>
    <ul className="listOfFeatures">
        {featuresOfPage.map((element, index) => (
            <li key={index}>
                <h4>{element.title}</h4>
                <p>{element.feature}</p>
            </li>
        ))}
    </ul>
           </>
   )
}
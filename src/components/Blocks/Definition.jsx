import React from "react";

export default function Definition ({name}) {
    return (
        <>
            <h3 id="titleWhatIsIt">Что это</h3>
            <p className="textOfTitleWhatIsIt">{name}</p>
        </>
    )
}
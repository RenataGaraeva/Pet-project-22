import React from "react";

export default function History({ historyOfPage }) {
  return (
    <>
      <h3 id="titleHistory">История</h3>
      <div className="textOfTitleHistory">
        {historyOfPage.map((element, index) => (
          <p key={index}>{element.history}</p>
        ))}
      </div>
    </>
  );
}

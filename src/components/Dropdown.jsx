import arrowUp from '../visuels/kasa-logo.svg';

import { useState, useRef } from "react";

function Dropdown({ title, content }) {
  const [active, setActiveState] = useState("");

  const contentActive = useRef(null);

  //fonction qui change l'état au clic
  // fonctionne comme un toggle
  function handleCollapse() {
    setActiveState(active === "" ? "active" : "");
  }

  return (
    <div className={`container-collapse ${active}`}>
      <button type="button" className="collapse" onClick={handleCollapse}>
        {title}
        <img
          className="chevron-collapse"
          src={arrowUp}
          alt="open collapse"
        />
      </button>
      <div ref={contentActive} className="content-collapse">
        {content}
      </div>
    </div>
  );
}

export default Dropdown;
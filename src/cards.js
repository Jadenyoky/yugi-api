import React, { useState } from "react";
import Data from "./data.js";

const Cards = ({ name, image, desc, atk, def, type }) => {
  const [open, setopen] = useState(false);

  const styleCards = `cards ${type}`;
  const styleBtn = `open ${type}`;

  return (
    <div className={styleCards}>
      <p>{name}</p>
      <img src={image} alt="" />
      <div className="btn_open">
        <button className={styleBtn} onClick={() => setopen(!open)}>
          open
        </button>
      </div>
      {open === true ? (
        <>
          <div className="light" onClick={() => setopen(!open)}></div>
          <Data
            name={name}
            image={image}
            desc={desc}
            atk={atk}
            def={def}
            type={type}
          />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cards;

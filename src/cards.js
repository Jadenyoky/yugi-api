import React, { useState } from "react";
import Data from "./data.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Cards = ({ name, image, desc, atk, def, type, level }) => {
  const [open, setopen] = useState(false);

  const styleCards = `cards ${type}`;
  const styleBtn = `open ${type}`;

  return (
    <div className={styleCards}>
      <p>{name}</p>
      <img src={image} alt="" />
      <div className="btn_open">
        <button className={styleBtn} onClick={() => {
          setopen(!open)
          // const comp = document.querySelector('.compSearch')
          // document.body.style.overflowY = 'hidden'
          // if(comp){
          //   comp.style.overflowY = 'hidden'
          //   document.body.style.overflowY = 'hidden'
          // } 
        }}>
          open
        </button>
      </div>
      {open === true ? (
        <>
          <FontAwesomeIcon className="xmark" icon={faXmark} onClick={() => {
            setopen(!open)
            // const comp = document.querySelector('.compSearch')
            // if(comp){
            //   comp.style.overflowY = 'scroll'
            // } if(!comp){
            //   document.body.style.overflowY = 'scroll'
            // }
            
            }}/>
          <div className="light" onClick={() => {
            setopen(!open)
            // const comp = document.querySelector('.compSearch')
            // if(comp){
            //   comp.style.overflowY = 'scroll'
            // } if(!comp){
            //   document.body.style.overflowY = 'scroll'
            // }
      
            }}></div>
          <Data
            name={name}
            image={image}
            desc={desc}
            atk={atk}
            def={def}
            type={type}
            level={level}
          />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cards;

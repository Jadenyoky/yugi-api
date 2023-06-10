import React, { useState } from 'react';

const Data = ({ name, image, desc, atk, def,type}) => {

  const sty = `desc ${type}`

  return (
    <div>
      <div className='allDesc'>
        <div className={sty}>
          <div className='imgCards'>
            <img src={image} alt="" />
          </div>
          <div className='attr'>
            <p>
            <span>Name : </span> {name.toUpperCase()}
            </p>
            <p>
              <span>Type : </span> {type.toUpperCase()}
            </p>
            <p>
            <span>Description : </span> {desc}
            </p>
            {
              atk >= 0 ? 
              <p>
              <span>Attack : </span> {atk} <span> ATK</span>
              </p> 
              : ""
            }
            {
              def >= 0 ?
              <p>
              <span>Defend : </span> {def} <span> DEF</span>
              </p>
              : ""
            }        
            </div>
        </div>
      </div>
    </div>  
  );
}

export default Data;

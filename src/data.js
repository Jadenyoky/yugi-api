import React, { useState } from 'react';

const Data = ({ name, image, desc, atk, def,rate ,type}) => {
  return (
    <div>
      <div className='allDesc'>
        <div className='desc'>
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
              atk ? 
              <p>
              <span>Attack : </span> {atk}
              </p> 
              : ""
            }
            {
              def ?
              <p>
              <span>Defend : </span> {def}
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

import React from 'react';
import Card from './Cards/index.js'
const Board = (props) => {
    return (
       <div>
         <h2>{props.title}</h2>
         <div className='card__column'>
            <Card details={props.details}/>
         </div>
       </div>
    );
};

export default Board;
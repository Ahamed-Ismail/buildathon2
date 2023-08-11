import React from 'react';

function Card(props){
    return(
        <div className='card'>

            <h2>{props.name}</h2>
            <p>{props.about}</p>

        </div>
    )
}

export default Card;
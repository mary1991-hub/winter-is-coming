import React from 'react';
import './Cards.scss';


function Cards(props) {
       
    return (
        <section className="Cards">
          {props.characters.map(character => {
              return (
                  <ul>
                      <li className="text">{character.title}</li>
                  </ul>
              )
          })}
            
        </section>
    );
}


export default Cards;
import React from 'react';
import './Cards.scss';


function Cards(props) {
       
    return (
        <section className="Cards">
          {props.characters.map(character => {
              return (
                  <key={character.id}>
                      <li className="text">{character.firstName}</li>
                  </ul>
              )
          })}
            
        </section>
    );
}


export default Cards;
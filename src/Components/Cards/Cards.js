import React from 'react';
import './Cards.scss';


function Cards(props) {
       
    return (
        <section className="Cards">
          {props.characters.map(character => {
              return (
                  <div key={character.id}>
                  <ul className="Cards__Front--Container">
                      <li className="Cards__List" className="text">{character.image}</li>
                  </ul>
                  <ul className="Cards__Back--Container">
                      <li className="Cards__Family">{character.family}</li>
                      <li className="Cards__FullName">{character.fullName}</li>
                      <li className="Cards__Title">{character.title}</li>
                      <li>What is the actors real name?  Make your guess!</li>
                  </ul>
                  </div>
              )
          })}
            
        </section>
    );
}


export default Cards;
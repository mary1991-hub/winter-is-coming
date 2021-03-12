import React from 'react';
import './Cards.scss';


function Cards(props) {
       
    return (
        <section className="cards">
          {props.characters.map(character => {
              return (
<<<<<<< HEAD
                  <key={character.id}>
                      <li className="text">{character.firstName}</li>
                  </ul>
=======
                <div className="cards-grid" key={character.id}>
                    <div className="card-item">
                        <div className="card__face card__front--container">
                            <img className="card__img" src={character.imageUrl} alt=""/>
                        </div>
                        <div className="card__face card__back--container">
                            <li className="card__info">FAMILY: -- {character.family}</li>
                            <li className="card__info">FULL NAME: -- {character.fullName}</li>
                            <li className="card__info">TITLE: -- {character.title}</li>
                            <li  className="card__info">What is the actors real name?  Take your guess!</li>
                        </div>
                    </div>
                </div>
>>>>>>> origin/main
              )
          })}
            
        </section>
    );
}


export default Cards;
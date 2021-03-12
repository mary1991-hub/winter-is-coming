import React from 'react';
import './Cards.scss';


function Cards(props) {
       
    return (
        <section className="cards">
          {props.characters.map(character => {
              return (
                <div className="cards-grid" key={character.id}>
                    <div className="card-item">
                        <div className="card__face card__front--container">
                            <img className="card__img" src={character.imageUrl} alt=""/>
                        </div>
                        <div className="card__face card__back--container">
                            <li className="card__info"><span className="span-info">FAMILY:</span> <span className="span-info-2">{character.family}</span></li>
                            <li className="card__info"><span className="span-info">FULL NAME:</span> <span className="span-info-2">{character.fullName}</span></li>
                            <li className="card__info"><span className="span-info">TITLE:</span> <span className="span-info-2">{character.title}</span></li>
                            <li  className="card__info"><span className="span-info">What is the actors real name?</span> <span className="span-info-2">Take your guess!</span></li>
                        </div>
                    </div>
                </div>
              )
          })}
            
        </section>
    );
}


export default Cards;
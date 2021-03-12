import React from 'react';
import './Home.scss';
import logo from '../../Assets/GOT__logo.png';

class Home extends React.Component {


   

    render(props) {
    return (
        <main className="Hero">
            <h1 className="Hero__Header"><img className="Hero__Header--img" src={logo} alt=""/></h1>
            <h2 className="Hero__Heading">“Fear cuts deeper than swords.” — Arya Stark</h2>
        </main>
    )
}
}

export default Home;

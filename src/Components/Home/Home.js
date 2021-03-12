import React from 'react';
import './Home.scss';
import logo from '../../Assets/logo.png';

class Home extends React.Component {


   

    render(props) {
    return (
        <main className="Hero">
            <h1 className="Hero__Header">${logo}</h1>
        </main>
    )
}
}

export default Home;

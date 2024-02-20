import React from "react";
import './Intro.css';
import introImg from '../../img/barsaEvening.jpg';

// export default function Intro() {
//     return (
//         <section class="lead">
//             <h1 class="lead__title">Travelling through Spain</h1>
//             <p class="lead__subtitle">Taste Colour Glory Surrealism is all you need</p>
//             <img src="./img/barsa evening.jpg" width="984px" class="lead_image" alt="barsa evening">
//                 <p class="lead__caption">Your ticket to amotions</p>
//         </section>
//     )
// }

export default function Intro() {
    return React.createElement('section',
        {className : "lead"},
        [React.createElement('h1', {className : "lead__title", key: 1 }, 'Travelling through Spain'),
        React.createElement('p', {className : "lead__subtitle", key: 2 }, 'Taste Colour Glory Surrealism is all you need'),
        React.createElement('img', {src:introImg, className:"lead_image", key: 3}, null),
        React.createElement('p', {className : "lead__caption", key: 4 }, 'Your ticket to amotions')
        ])
        
                
}
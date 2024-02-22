import './Choise.css';
import './Places.css';
import { useState } from 'react';
import { places } from '../../data';

function Button({ children, isActive, onSelect }) {
    return (<button
        className={isActive ? 'button active' : 'button'}
        onClick={onSelect}
    >
        {children}
    </button>)
}

export default function Choise() {
    const [content, setContent] = useState(places[0].city)
    const [siteName, setsiteName] = useState(places[0].siteName)
    const [url, setURL] = useState(places[0].href)
    const [picture, setPic] = useState(places[0].src)
    const [p1, setP1] = useState(places[0].p1)
    const [p2, setP2] = useState(places[0].p2)

    function handleClick(g) {
        setContent(places[g].city)
        setsiteName(places[g].siteName)
        setURL(places[g].href)
        setPic(places[g].src)
        setP1(places[g].p1)
        setP2(places[g].p2)
    }
    let g
    return (
        <>
            <section>
                <h3 className='choose_title'>Chose the city</h3>
                <Button onSelect={() => { g = 0; handleClick(g) }}>Barselona</Button>
                <Button onSelect={() => { g = 1; handleClick(g) }} >Girona</Button>
                <Button onSelect={() => { g = 2; handleClick(g) }}>Figueres</Button>
                <Button onSelect={() => { g = 3; handleClick(g) }}>Madrid</Button>
                <Button onSelect={() => { g = 4; handleClick(g) }}>Valencia</Button>
            </section>
            <section className='places__sight'>
                <div className="places__sight_title" >{content}</div>
                <div className="places__sight_a">
                    <p>URL</p>
                    <a className="places__website" href={url}>{siteName}</a>
                </div>
                <img className="cplaces__sight_picture" src={require(`../../img/2${picture}.jpg`)} />

                <div className="places__sight_text">
                    <p className="places__sight_text-first">{p1}</p>
                    <p >{p2}</p>
                </div>
            </section>
        </>
    )
}


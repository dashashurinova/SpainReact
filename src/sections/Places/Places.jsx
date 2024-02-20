import './Places.css';
import { places } from '../../data';
// import bars from "../../img/sagradaF.png"

export default function Places() {
    return (
        <section className='places__sight'>
            {places.map((item, num) => {
                return (
                    <>
                        <div className="places__sight_title">{places[num].city}</div>
                        <div className="places__sight_a">
                            <p>URL</p>
                            <a className="places__website" href={places[num].href}>{places[num].siteName}</a>
                        </div>
                        <img className="cplaces__sight_picture" src={require(`../../img/2${places[num].src}.jpg`)} />
                        
                        <div className="places__sight_text">
                            <p className="places__sight_text-first">{places[num].p1}</p>
                            <p>{places[num].p2}</p>
                        </div>
                    </>
                )
            })
            }

        </section >




    )
}

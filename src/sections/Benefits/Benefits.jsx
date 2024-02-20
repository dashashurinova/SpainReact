import './Benefits.css';
import { benefits } from '../../data';

export default function Benefits() {
    return (
        <section className="benefits">
            <h2 className="intro__title">What shall you see there?</h2>
            <p className="intro__text">Spain is full of beautiful, breathtaking places. So many, in fact, that it may
                actually be difficult to decide where to go! Now you don’t have to. Instead, just follow this list of
                the most stunning spots in Spain you shouldn’t miss.
                Did you know you can now travel with Culture Trip? Book now and join one of our premium small-group
                tours to discover the world like never before.</p>
            <ul className="intro__list">
                {benefits.map((item) => <li key={item}  className="intro__list-item" >{item}</li>)} 
            </ul>
        </section>
    )

}
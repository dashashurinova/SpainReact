import './Header.css';
import Sagrada from '../../img/sagrada.jpg';

export default function Header() {
    return (
        <header className="header">
            <div >
                <img className="header__logo" src={Sagrada} alt=""/>
            </div>
            <span className="header__lang">RU EN</span>
            {/* <button className="header__button">Log in</button> */}
        </header>
    )

}
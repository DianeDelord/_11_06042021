import kasaLogo from "../visuels/kasa-logo.svg";

const Header = () => {

    return (
        <nav className="TopNav">
            <div className='navMenu'>
            <img src={kasaLogo} alt="Kaza logo" className="" />
            <ul className="">
                 <li className="">
               Accueil
                </li>
                <li className="">
               A Propos
                </li>
            </ul>
            </div>
        </nav>
    );
};

export default Header;
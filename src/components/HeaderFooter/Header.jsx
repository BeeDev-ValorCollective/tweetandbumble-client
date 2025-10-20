import { Link } from "react-router-dom";
import { useEffect } from 'react';
// import DarkMode from "./Darkmode";
import NavLink from "./NavLink";
// import NavLink_atag from "./NavLink_atag";
import Logo from '../../assets/images/tweetBumbleTransparent.png'
// import LinkBar from "./LinkBar_Component/LinkBar";

export default function Header() {

        useEffect(() => {
        const drawerLinks = document.querySelectorAll('.drawer_link');
        drawerLinks.forEach(link => { 
            link.addEventListener('click', () => { 
                document.getElementById('drawer_toggle').checked = false;
            });
        });

        const drawerLinkDark = document.querySelectorAll('.drawer_link_dark');
        drawerLinkDark.forEach(link => { 
            link.addEventListener('click', () => { 
                setTimeout(() => {
                document.getElementById('drawer_toggle').checked = false;
                }, 500);
            });
        });
    }, []);

    return(
        <>
        <input type="checkbox" id="drawer_toggle" name="drawer_toggle"/>
        <label htmlFor="drawer_toggle" id="drawer_toggle_label"><span className="visually-hidden">Empty Link</span></label>
        <header>
            <Link to='/'>
                <img src={Logo} alt="Logo" />
            </Link>
        </header>
        <nav id='drawer'>
            <ul>
                <li className="drawer_link">
                    <NavLink href="/" text="Home Page" />
                </li>
            </ul>
        </nav>
        </>
    )
}
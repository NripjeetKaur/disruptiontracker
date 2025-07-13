import './Navbar.css';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import Search from './Search';


export default function Navbar () {
    return (
        <div className='NavbarContent'>
            <Logo />
            <div className="Navbar">
                <nav>
                    <NavLink className={(e)=>{return e.isActive?"active":""}} to='/'>Disruption Tracker</NavLink>
                    <NavLink className={(e)=>{return e.isActive?"active":""}} to='/api/ReRoutesPage'>Re-Route</NavLink>
                </nav>
            </div>
            <Search />
        </div>
    );
}
import Link from 'next/link';
import {NavbarWrapper} from './Navbar.styled';

const ROUTES = [{  
    path: "/",
    name: "Home"
    },
    {
    path: "/contact",
    name: "Contact"
}]

const Navbar = () => {
    return (
        <NavbarWrapper>
        {ROUTES.map((route, index)=> (
            <Link key={index} href= {route.path}>{route.name}</Link>
        ))}
        </NavbarWrapper>
    )
}

export default Navbar;
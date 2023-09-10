import { Link, useNavigate, Outlet } from "react-router-dom"

const NavBar = () => {

    const Navigate = useNavigate()


    return (
        <>
            <nav>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/sign-up">Signup</Link></li>

                <button onClick={() => Navigate('/')}>Go Home</button>

            </nav >


            <Outlet/>

        </>
    )
}

export default NavBar
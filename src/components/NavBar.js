import { Link, NavLink } from "react-router-dom"
import { navBar } from "../constants/costants"

const Navbar = () => {
    return (
        <>
            <div className="bg-[#171718]">
                <div className="container max-w-w text-white">
                    <div className="flex justify-between py-5">
                        <Link
                            to="/simple-portfolio"
                            className="flex gap-1"
                        >
                            <p className="font-bold">Freelancer</p>
                            <p>portfolio</p>
                        </Link>
                        <ul className="flex gap-10">
                            {navBar.map((links) => (
                                <li key={links.id}>
                                    <NavLink to={`/${links.link}`}>
                                        {links.link}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar

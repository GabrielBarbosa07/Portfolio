import { useState } from 'react'
import { Link } from 'react-router-dom'
import { navlink } from '../data/gbdata'
import logo from "../data/images/icon.png"
import { Menu } from '@mui/icons-material'

export const Header = () => {
    const [responsive, setResponsive] = useState(false)

    return (
        <>
            <header>
                <div className="container flexsb">

                    <div className="logo">
                        <Link to="/"><img className="img-logo" src={logo} alt="Logo" data-aos="zoom-in-right" /></Link>
                    </div>

                    <div className={responsive ? "hideMenu" : "nav"}>
                        {navlink.map((links, i) =>
                        (
                            <Link key={i} to={links.url} data-aos="zoom-in-left" className='navLink'>{links.text}</Link>
                        )
                        )}
                    </div>
                    <button className='toggle' onClick={() => setResponsive(!responsive)}>
                        <Menu className="icon"></Menu>
                    </button>
                </div>
            </header>
        </>
    )
}

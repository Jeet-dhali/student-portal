import {motion} from 'framer-motion'
import '../components/header.css'

export function Navbar() {
    return (
        <>
        <header>
            <div className="header">
                <div className='logo'><img src='NITNLOGO-Photoroom.png'></img></div>
                    <h1>NIT NAGALAND CLUB</h1> 
                <div className="nav-buttons">
                    <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#" className="btn btn-explore">Explore Clubs</motion.a>
                    <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#" className="btn btn-signup">Sign Up</motion.a>
                    <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#" className="btn btn-login">Log In</motion.a>
                </div>
            </div>
        </header>
        </>
    );
}
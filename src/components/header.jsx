import {motion} from 'framer-motion'
import '../components/header.css'


export function Navbar() {
    return (
        <>
        <header>
            <div className="header">
                <div className='logo'><a href='/'><img src='NITNLOGO-Photoroom.png'></img></a></div>
                    <a href='/'><h1>NIT NAGALAND CLUB</h1></a>
                <div className="nav-buttons">
                        <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#" className="btn btn-explore">Explore Clubs</motion.a>
                        <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/student-portal/signup" className="btn btn-signup">Sign Up</motion.a>
                        <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/student-portal/login" className="btn btn-login">Login</motion.a>
                </div>
            </div>
        </header>
        </>
    );
}
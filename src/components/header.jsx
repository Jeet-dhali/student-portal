import '../components/header.css'

export function Navbar() {
    return (
        <>
        <header>
            <div className="header">
                <div className='logo'><img src='NITNLOGO-Photoroom.png'></img></div>
                    <h1>NIT NAGALAND CLUB</h1> 
                <div className="nav-buttons">
                    <a href="#" className="btn btn-explore">Explore Clubs</a>
                    <a href="#" className="btn btn-signup">Sign Up</a>
                    <a href="#" className="btn btn-login">Log In</a>
                </div>
            </div>
        </header>
        </>
    );
}
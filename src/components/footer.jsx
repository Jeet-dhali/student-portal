import '../components/footer.css'

export function Footer() {
    return (
        <>
            <div className="footer">
                <div className="left-section">
                    <div className="logo"><img src="NITNLOGO-Photoroom.png"></img></div>
                    <p>Empowering creativity, collaboration <br /> and a club culture at NIT Nagaland.</p>
                </div>
                <div className="mid-section">
                    <h2>Quick links</h2>
                    <a href="#" className='links'>Home</a>
                    <a href="#" className='links'>About</a>
                    <a href="#" className='links'>Clubs</a>
                </div>
                <div className="right-section">
                    <h2>Contact</h2>
                    <a href="#" className='links'>info@nitnagaland.ac.in</a>
                    <a href="#" className='links'>www.nitnagaland.ac.in</a>
                </div>
            </div>
        </>
    )
}
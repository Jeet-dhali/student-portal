import { Navbar } from '../components/header.jsx'
import { Footer } from '../components/footer.jsx'
import { MainBody } from '../components/main-body.jsx'
import Hyperspeed from '../components/Hyperspeed.jsx'
import '../pages/home.css'

export function HomePage() {
    return (
        <>
        
            <div className='header'>
                <Navbar />
            </div>
            <MainBody />
            
            <Footer />
        <   div className='copyright'><p>© 2025 NIT Nagaland — All rights reserved.</p></div>
        </>
    )
}